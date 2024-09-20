import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage";
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only persist the cart reducer
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer, // Add other reducers here if needed
});

// Check if running in the browser (client-side)
const persistedReducer =
  typeof window !== "undefined"
    ? persistReducer(persistConfig, rootReducer)
    : rootReducer;

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
