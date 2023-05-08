import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('J.A.T.E DB already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('J.A.T.E DB created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the db');
  const db = await initdb();
  const tx= db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({content});
  await tx.complete;
  console.log(`Yaaaaay the database has been created 🥳`);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from db');
  const db = await initdb();
  const tx= db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const results = await store.getAll();
  await tx.complete;
  console.log(results);
};

initdb();
