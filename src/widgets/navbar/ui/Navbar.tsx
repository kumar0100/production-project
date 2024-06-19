import React, { useState } from "react";
import { classNames } from "shared/lib/class-name/classNames";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { Modal } from "shared/ui/modal/Modal";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { LoginModal } from "features/auth-by-username";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };
    const onShowModal = () => {
        setIsAuthModal(true);
    };
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t("log in")}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
