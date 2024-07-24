import { classNames } from "shared/lib/class-name/classNames";
import { Text } from "shared/ui/text/Text";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entities/profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { useParams } from "react-router-dom";
import { getUserAuthData } from "entities/user";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation("profile");

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        if (id) {
            dispatch(updateProfileData(id));
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly ? (
                        <Button
                            className={cls.editBtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={onEdit}
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={cls.editBtn}
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                className={cls.saveBtn}
                                theme={ThemeButton.OUTLINE}
                                onClick={onSave}
                            >
                                {t("Сохранить")}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
