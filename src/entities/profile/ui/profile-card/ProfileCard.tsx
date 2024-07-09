import { classNames } from "shared/lib/class-name/classNames";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/profile/model/selectors/get-profile-data/getProfileFirstName";
import { getProfileError } from "entities/profile/model/selectors/get-profile-error/getProfileError";
import { getProfileIsLoading } from "entities/profile/model/selectors/get-profile-is-loading/getProfileIsLoading";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/text/Text";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { Input } from "shared/ui/input/Input";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.first || ''} placeholder={t('First Name')} />
                <Input className={cls.input} value={data?.lastname || ''} placeholder={t('Last Name')} />
            </div>
        </div>
    );
};
