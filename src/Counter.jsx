import { handleFirst } from "./FirstSlice";
import { handleSecond } from "./SecondSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();

  const firstCount = useSelector((state) => state.first.count);
  const secondCount = useSelector((state) => state.second.count);
  return (
    <>
      <div>
        <form>
          <input
            value={firstCount}
            type="text"
            placeholder="type the first..."
            onChange={(e) => dispatch(handleFirst(e.target.value))}
          />
          <input
            value={secondCount}
            type="text"
            placeholder="type the second"
            onChange={(e) => dispatch(handleSecond(e.target.value))}
          />
          <button>submit</button>
        </form>
      </div>
    </>
  );
}

export default Counter;
