export { ReduxStoreWithManager } from './config/StateSchema';
import type { StateSchema, ThunkConfig, ThunkExtraArg } from './config/StateSchema';
import { ApiDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';


export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ApiDispatch,
  ThunkExtraArg,
  ThunkConfig
};