import { handleFirst } from "./FirstSlice";
import { handleSecond } from "./SecondSlice";
import { useSelector, useDispatch } from "react-redux";
import { sendNum } from "./submitThunk";

function Counter() {
  const dispatch = useDispatch();

  const firstCount = useSelector((state) => state.first.count);
  const secondCount = useSelector((state) => state.second.count);

  const handleFirstForm = (e) => {
    e.preventDefault();
    dispatch(sendNum(firstCount, "first"));
  };

  const handleSecondForm = (e) => {
    e.preventDefault();
    dispatch(sendNum(secondCount, "second"));
  };

  return (
    <>
      <div>
        <form onSubmit={handleFirstForm}>
          <input
            value={firstCount || ""}
            type="text"
            placeholder="type the first..."
            onChange={(e) => dispatch(handleFirst(e.target.value))}
          />
          <button>submit</button>
        </form>
        <form onSubmit={handleSecondForm}>
          <input
            value={secondCount || ""}
            type="text"
            placeholder="type the second"
            onChange={(e) => dispatch(handleSecond(e.target.value))}
          />
        </form>
      </div>
    </>
  );
}

export default Counter;
