import { classNames } from "shared/lib/class-name/classNames";
import { Modal } from "shared/ui/modal/Modal";
import { Suspense } from "react";
import { Loader } from "shared/ui/loader/Loader";
import cls from "./LoginModal.module.scss";
import { LoginFormAsync } from "../login-form/LoginForm.async";

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.loginModal, {}, [className])}>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
