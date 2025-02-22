import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('No contacts to delete.');
      return;
    }

    const updatedContacts = contacts.filter(
      (_, index) => index !== contacts.length - 1,
    );

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log('Last contact has been deleted.');
  } catch (error) {
    console.error('Error deleting the last contact:', error);
  }
};

removeLastContact();
