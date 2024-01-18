import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};
// eslint-disable-next-line react/display-name
const LoginForm = memo(({className}: LoginFormProps) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const password = useSelector(getLoginPassword);


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
    <DynamicModuleLoader name={"loginForm"} reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>

  );
});

export default LoginForm;