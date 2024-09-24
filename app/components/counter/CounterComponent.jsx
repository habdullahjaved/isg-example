// Usage in a component
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/app/lib/counter/counterSlice";

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
