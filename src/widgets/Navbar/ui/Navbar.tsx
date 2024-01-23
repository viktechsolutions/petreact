import { getUserAuhData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuth, setIsAuth] = useState(false);
  const userData = useSelector(getUserAuhData);
  const dispatch = useDispatch();

  const onClose = useCallback(
    () => {
      setIsAuth(false);
    }, []
  );

  const onShowModal = useCallback(
    () => {
      setIsAuth(true);
    }, []);

  const onLogout = useCallback(
    () => {
      dispatch(userActions.logout());
    }, [dispatch]
  );

  if (userData) {
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
      <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuth && <LoginModal isOpen={isAuth} onClose={onClose}/>}
    </div>
  );
});

Navbar.displayName = 'Navbar';
