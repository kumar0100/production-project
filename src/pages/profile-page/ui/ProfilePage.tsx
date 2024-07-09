import { classNames } from "shared/lib/class-name/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducerList } from "shared/components/dynamic-module-loader/DynamicModuleLoader";
import { ProfileCard, fetchProfileData, profileReducer } from "entities/profile";
import cls from "./ProfilePage.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/user/model/selectors/get-auth-data/getAuthData";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch()
    const user = useSelector(getUserAuthData)
    useEffect(() => {
        if(user) {
            dispatch(fetchProfileData())
        }
    }, [dispatch])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
