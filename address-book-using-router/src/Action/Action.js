import { createContact } from "../Contacts";

export async function getactionContact() {
  const contact = await createContact();
  return { contact };
}
