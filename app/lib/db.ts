import fs from 'fs/promises';
import path from 'path';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const dbPath = path.join(process.cwd(), 'data', 'contacts.json');

async function getContacts(): Promise<Contact[]> {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function addContact(name: string, email: string, message: string): Promise<void> {
  const contacts = await getContacts();

  const newContact = {
    id: Date.now().toString(),
    name: name,
    email: email,
    message: message,
    createdAt: new Date().toISOString(),
  };

  contacts.push(newContact);
  await fs.writeFile(dbPath, JSON.stringify(contacts, null, 2));
}

export { addContact, getContacts };
export type { Contact };

