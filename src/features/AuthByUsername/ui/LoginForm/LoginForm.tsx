import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
  const {t} = useTranslation();
  const [valueName, setValueName] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const onChangeName = (value: string) => {
    setValueName(value);
  };

  const onChangePassword = (value: string) => {
    setValuePassword(value);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('Имя')} className={cls.input} type="text" value={valueName} onChange={onChangeName}
             autoFocus/>
      <Input placeholder={t('Пароль')} className={cls.input} type="text" value={valuePassword}
             onChange={onChangePassword}/>
      <Button theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>
    </div>
  );
};

