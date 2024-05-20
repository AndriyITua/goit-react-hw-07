import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contacts) => (
        <li className={css.item} key={contacts.id}>
          <Contact contacts={contacts} />
        </li>
      ))}
    </ul>
  );
}
