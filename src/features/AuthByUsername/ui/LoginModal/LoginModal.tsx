import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from 'shared/ui/Modal/Modal';
import Spinner from 'shared/ui/Spinner/Spinner';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const {className, isOpen, onClose} = props;
  const {t} = useTranslation();

  return (
    <Modal className={classNames(cls.LoginModal, {}, [className])}
           isOpen={isOpen} onClose={onClose} lazy>

      <Suspense fallback={<Spinner/>}>
        <LoginFormAsync/>
      </Suspense>

    </Modal>
  );
};

