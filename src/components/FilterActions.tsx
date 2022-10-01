import { TodoStatus } from "../App";

export type FilterKind = TodoStatus | "all";

const FilterActions = (props: {
  onChangeFilter: (filter: FilterKind) => void;
}) => {
  return (
    <>
      <button onClick={() => props.onChangeFilter("all")}>All</button>
      <button onClick={() => props.onChangeFilter("pending")}>Active</button>
      <button onClick={() => props.onChangeFilter("completed")}>
        Completed
      </button>
    </>
  );
};

export default FilterActions;
