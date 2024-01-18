import { LoginFormAsync } from 'features/AuthByUserName/ui/LoginForm/LoginForm.async';
import React, { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from 'shared/ui/Modal/Modal';

interface LoginModalProps {
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

export const LoginModal = ({className, onClose, isOpen}: LoginModalProps) => {
  return (
    <Modal className={classNames("LoginModal", {}, [className])}
           onClose={onClose} isOpen={isOpen} lazy>
      <Suspense fallback={<Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="spinner"
        visible={true}
      />}>
        <LoginFormAsync/>
      </Suspense>
    </Modal>
  );
};

