import Counter from "./Counter";
import { handleInput } from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { submit } from "./submitThunk";

export default function App() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.counter.inputValue);
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(submit(inputValue));
  };

  return (
    <>
      <Counter />
      <div>
        <form onSubmit={handleForm}>
          <input
            value={inputValue}
            onChange={(e) => dispatch(handleInput(e.target.value))}
            type="text"
            placeholder="type the num..."
          />
          <button>submit</button>
        </form>
      </div>
    </>
  );
}
