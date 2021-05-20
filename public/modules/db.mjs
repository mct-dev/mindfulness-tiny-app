import {v4 as uuidv4} from 'https://jspm.dev/uuid';

export const db = {
  ENTRIES_TABLE_NAME: 'entries',
  /**
   * Create a new entry.
   * @param {string} value
   */
  createEntry(value) {
    const database = firebase.database();

    database.ref(`${this.ENTRIES_TABLE_NAME}/${uuidv4()}`).set({
      value,
      createdDateTime: new Date().toISOString(),
      isActive: true,
    });
  },

  /**
   * Get an entry.
   *
   * @param {String} entryId
   * @param {Function} handleValue
   */
  getEntry(entryId, handleValue) {
    const entryRef = firebase.database()
        .ref(`${this.ENTRIES_TABLE_NAME}/${entryId}`);

    entryRef.on('value', (snapshot) => {
      const data = snapshot.val();
      handleValue(data);
    });
  },

  /**
   * Get all entries.
   *
   * @param {Function} handleValue
   */
  getAllEntries(handleValue) {
    const entryRef = firebase.database().ref(`${this.ENTRIES_TABLE_NAME}`);

    entryRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      handleValue(data);
    });
  },
};
