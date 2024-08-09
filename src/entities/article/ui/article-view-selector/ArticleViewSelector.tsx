import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleView } from "entities/article/model/types/article";
import ListIcon from "shared/assets/icons/list-24-24.svg";
import TiledIcon from "shared/assets/icons/tiled-24-24.svg";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { Icon } from "shared/ui/icon/Icon";
import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: ListIcon,
    },
    {
        view: ArticleView.BIG,
        icon: TiledIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const { className, view, onViewClick } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        className={classNames(
                            "",
                            { [cls.classSelected]: viewType.view !== view },
                            []
                        )}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
