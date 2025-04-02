import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';

// Definir la interfaz para el estado global
export interface RootState {
  counter: CounterState;
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


