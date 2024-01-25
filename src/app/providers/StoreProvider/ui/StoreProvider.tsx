import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {
  const navigate = useNavigate();
  const store = createReduxStore(initialState, navigate);


  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

