import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, selectName } from "../../redux/filtersSlice";
import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectName);

  return (
    <div className={css.container}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        className={css.text}
        type="text"
        value={value}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
      />
    </div>
  );
}
