import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage"; // Custom storage for handling SSR
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { counterReducer } from "./counter/counterSlice"; // Import the counterReducer
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2, // To merge persisted state deeply
  whitelist: ["cart"], // Only persist the cart reducer
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer, // Add cart reducer
  counter: counterReducer, // Add counter reducer
});

// Define a function to create a new store per request
export const makeStore = () => {
  // Check if running in the browser (client-side) or server (SSR)
  const isClient = typeof window !== "undefined";

  const persistedReducer = isClient
    ? persistReducer(persistConfig, rootReducer)
    : rootReducer;

  // Create the store
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  // Persistor only on the client-side
  const persistor = isClient ? persistStore(store) : null;

  return { store, persistor };
};
