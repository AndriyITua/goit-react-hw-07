import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

import { useSelector } from "react-redux";
import { getContacts, getSearchQuery } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(getContacts);

  const valueSearch = useSelector(getSearchQuery);

  const visibleContacts = contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(valueSearch.name.toLowerCase())
  );

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
