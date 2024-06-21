import { classNames } from "shared/lib/class-name/classNames";
import { Modal } from "shared/ui/modal/Modal";
import cls from "./LoginModal.module.scss";
import { LoginForm } from "../login-form/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.loginModal, {}, [className])}>
        <LoginForm />
    </Modal>
);
