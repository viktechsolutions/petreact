import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuth, setIsAuth] = useState(false);

  const onToggle = useCallback(
    () => {
      setIsAuth((prev) => !prev);
    }, []
  );

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onToggle}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuth} onClose={onToggle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Modal>

    </div>
  );
};

