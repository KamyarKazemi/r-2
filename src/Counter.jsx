import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice"; // ✅ correct spelling

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>increase</button>
        <button onClick={() => dispatch(decrement())}>decrease</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default Counter;
