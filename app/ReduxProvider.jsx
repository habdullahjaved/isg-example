"use client";

import { Provider } from "react-redux";
import { useMemo } from "react";
import { makeStore } from "./lib/store";

export function ReduxProvider({ children }) {
  // Create a new store per request
  const { store } = useMemo(() => makeStore(), []);

  return <Provider store={store}>{children}</Provider>;
}
