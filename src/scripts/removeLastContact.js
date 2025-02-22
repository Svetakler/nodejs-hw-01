import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = async () => {
  await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
  console.log('Last contact was deleted');
};

removeAllContacts();
