import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
