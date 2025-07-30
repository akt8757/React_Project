import localforage from "localforage";
import { getContact, getContacts } from "../Contacts";

export const getContactsLoader = async () => {
  // localforage.clear();
  const contacts = await getContacts();
  return { contacts };
};

export async function getContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
