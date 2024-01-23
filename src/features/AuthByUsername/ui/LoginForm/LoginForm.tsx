import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducer: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const errorText = error ? String(error) : '';
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {

    const result = await dispatch(loginByUsername({username, password}));
    
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);


  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducer}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Авторизация')}/>
        {error && <Text text={errorText} theme={TextTheme.ERROR}/>}
        <Input placeholder={t('Имя')} className={cls.input} type="text"
               autoFocus onChange={onChangeUsername} value={username}/>
        <Input placeholder={t('Пароль')} className={cls.input} type="text" onChange={onChangePassword}
               value={password}/>
        <Button theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>{t('Войти')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;