
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
    reducer: {
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
});

export type StateProps = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
