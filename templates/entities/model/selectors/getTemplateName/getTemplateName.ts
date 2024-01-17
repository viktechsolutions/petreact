import { StateSchema } from 'app/providers/StoreProvider';

export const getTemplateName = (state: StateSchema) => state.counter;