import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Input } from "shared/ui/input/Input";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { useSelector } from "react-redux";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "features/add-comment-form/model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {
    addCommentFormSliceActions,
    addCommentFormSliceReducer,
} from "features/add-comment-form/model/slice/addCommentFormSlice";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
// eslint-disable-next-line max-len
import cls from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducer: ReducersList = {
    addCommentForm: addCommentFormSliceReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const { className, onSendComment } = props;
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormSliceActions.setText(value));
        },
        [dispatch],
    );
    const onSendHandler = useCallback(() => {
        onCommentTextChange("");
        onSendComment(text || "");
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t("Comment")}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler} theme={ThemeButton.OUTLINE}>
                    {t("Send")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
