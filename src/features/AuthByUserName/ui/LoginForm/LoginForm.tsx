import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({className}: LoginFormProps) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {username, password, error, isLoading} = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUserName({username, password}));
  }, [dispatch, password, username]);


  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {error && <Text theme={TextTheme.ERROR} text={error}></Text>}
      <Input type="text" className={cls.input} placeholder={t('Username')} onChange={onChangeUsername}
             value={username}/>
      <Input type="text" className={cls.input} placeholder={t('Password')} onChange={onChangePassword}
             value={password}/>
      <Button theme={ButtonTheme.OUTLINE} className={cls.login_button} onClick={onSubmit}
              disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
});

