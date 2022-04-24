import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import Button from "../../components/Button/Button";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <Button
          gradient
          variant="contained"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className={styles.value}>{count}</span>
        <Button
          gradient
          variant="contained"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className={styles.row}>
        <TextField
          variant="outlined"
          label="Label"
          error={incrementAmount === ""}
          sx={{ width: "64px" }}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </Button>
      </div>
    </div>
  );
}
