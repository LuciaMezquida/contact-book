import { db } from './firebase';
import { collection, doc, getDocs, addDoc, deleteDoc, setDoc } from 'firebase/firestore/lite';

//las bbdd son colecciones (no tablas como en sql) y accederemos a ellas a traves de referencias
const contacts = collection(db, 'contacts');

export const getContactList = async () => {
  const contactSnapshot = await getDocs(contacts);
  const contactList = contactSnapshot.docs.map(doc => {
    const contactInfo = doc.data();
    contactInfo.id = doc.id;
    return contactInfo;
  });
  return contactList;
}

export const createContact = async (newContact) => {
  console.log('newContact', newContact);
  await addDoc(collection(db, "contacts"), newContact);
}

export const deleteContact = async (id) => {
  await deleteDoc(doc(db, "contacts", id));
}
