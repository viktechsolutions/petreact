import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

export const LoginModal = ({className, onClose, isOpen}: LoginModalProps) => {
  return (
    <Modal className={classNames(cls.LoginModal, {}, [className])}
           onClose={onClose} isOpen={isOpen}>
      <LoginForm/>
    </Modal>
  );
};

