import {db} from './db.mjs';

export const ui = {

  /**
   * Create a new entry, pulling value
   * from the DOM.
   */
  createEntry() {
    const entryInput = document.getElementById('entry-input');
    console.log(entryInput.value);

    db.createEntry(entryInput.value);
    entryInput.value = '';
  },

  hydrateEntriesList(entriesRecord = {}) {
    const entriesListInput = document.getElementById('entries-list');
    entriesListInput.innerHTML = '';

    Object.keys(entriesRecord).forEach((key) => {
      const liElement = document.createElement('li');
      liElement.innerHTML = entriesRecord[key].value;

      entriesListInput.appendChild(liElement);
    });
  },

  getAllEntries() {
    db.getAllEntries(this.hydrateEntriesList);
  },
};

window.ui = ui;

