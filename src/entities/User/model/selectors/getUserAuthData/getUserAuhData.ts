import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuhData = (state: StateSchema) => state.user.authData;