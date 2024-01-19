import { LoginModal } from 'features/AuthByUsername';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuth, setIsAuth] = useState(false);

  const onClose = useCallback(
    () => {
      setIsAuth(false);
    }, []
  );

  const onShowModal = useCallback(
    () => {
      setIsAuth(true);
    }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuth} onClose={onClose}/>
    </div>
  );
};

