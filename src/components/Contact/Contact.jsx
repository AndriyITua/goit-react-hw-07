import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "../Contact/Contact.module.css";

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <div>
        <p className={css.text}>
          <BsPersonFill className={css.icon} /> {name}
        </p>
        <p className={css.text}>
          <BsTelephoneFill className={css.icon} /> {number}
        </p>
      </div>
      <div>
        <button className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
