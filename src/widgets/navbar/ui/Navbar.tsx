import React, { useState } from "react";
import { classNames } from "shared/lib/class-name/classNames";
import { Button, ThemeButton } from "shared/ui/button/Button";
import { Modal } from "shared/ui/modal/Modal";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t("log in")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                loremipsumhile
            </Modal>
        </div>
    );
};
