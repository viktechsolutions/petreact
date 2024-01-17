import { getUserAuhData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuth, setIsAuth] = useState(false);
  const authData = useSelector(getUserAuhData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(
    () => {
      setIsAuth(false);
    }, []
  );

  const onOpenModal = useCallback(
    () => {
      setIsAuth(true);
    }, []
  );

  const onLogout = useCallback(
    () => {
      dispatch(userActions.logout());
    }, [dispatch]
  );

  if (authData) {

    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onOpenModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuth} onClose={onCloseModal}/>
    </div>
  );
};

