import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../../store/reducers/CounterReducer";
import { getCounterValue } from "../../store/selectors/getConterValue";

const Counter = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 data-testid="counter-value">{value}</h1>
      <button data-testid="decrement-btn" onClick={() => dispatch(decrement())}>
        Decrement -
      </button>
      <button data-testid="increment-btn" onClick={() => dispatch(increment())}>
        Increment +
      </button>
    </div>
  );
};

export default Counter;
