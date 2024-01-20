import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {username, password, error, isLoading} = useSelector(getLoginState);

  const errorText = error ? String(error) : '';
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({username, password}));
  }, [dispatch, password, username]);


  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Авторизация')}/>
      {error && <Text text={errorText} theme={TextTheme.ERROR}/>}
      <Input placeholder={t('Имя')} className={cls.input} type="text"
             autoFocus onChange={onChangeUsername} value={username}/>
      <Input placeholder={t('Пароль')} className={cls.input} type="text" onChange={onChangePassword} value={password}/>
      <Button theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>{t('Войти')}</Button>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';
