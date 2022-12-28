import { db } from './firebase';
import { collection, doc, getDocs, addDoc, deleteDoc, setDoc } from 'firebase/firestore/lite';

const contacts = collection(db, 'contacts');

export const getContactList = async () => {
  const contactSnapshot = await getDocs(contacts);
  
  const contactList = contactSnapshot.docs.map(doc => {
    const contactInfo = doc.data();
    contactInfo.id = doc.id;
    return contactInfo;
  });
  const sortedList = contactList.sort(function (a, b) {
    if (a.history[0].date > b.history[0].date) {
      return 1;
    }
    if (a.history[0].date < b.history[0].date) {
      return -1;
    }
    return 0;
  });
  return sortedList;
}

export const createContact = async (newContact) => {
  await addDoc(collection(db, "contacts"), newContact);
}

export const updateContact = async (id, editedContact) => {
  await setDoc(doc(db, "contacts", id), editedContact);
}

export const deleteContact = async (id) => {
  await deleteDoc(doc(db, "contacts", id));
}
