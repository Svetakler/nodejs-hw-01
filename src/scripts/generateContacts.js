import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (count = 5) => {
  const contacts = Array.from({ length: count }, createFakeContact);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  console.log(`${count} Contact generated!`);
};

generateContacts();
