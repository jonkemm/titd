// import { uid } from './uid.js';
// import { state } from './data.js';
import { buildUi,printTodos } from "./js/ui.js";

//https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase

const IDB = (function init() {
  let db = null;
  let objectStore = null;
  let DBOpenReq = indexedDB.open('TitD', 4);

  DBOpenReq.addEventListener('error', (err) => {
    //Error occurred while trying to open DB
    console.warn(err);
  });

  DBOpenReq.addEventListener('success', (ev) => {
    //DB has been opened... after upgradeneeded
    db = ev.target.result;
    console.log('success opening DB');
    if (typeof state !== 'undefined') {
      let tx = makeTX('items', 'readwrite');
      tx.oncomplete = (ev) => {
        console.log('finished adding any needed data');
        buildList();
      };
      let store = tx.objectStore('items');
      let request = store.getAll(); // or store.count()
      // let request = store.delete .deleteIndex .clear()
      request.onsuccess = (ev) => {
        if (ev.target.result.length === 0) {
          //OR ev.target.result.length !== state.length
          state.forEach((obj) => {
            let req = store.add(obj);
            req.onsuccess = (ev) => {
              console.log('added an object');
            };
            // tx.abort() - if you want to kill your transaction
            req.onerror = (err) => {
              console.warn(err);
            };
          });
        }
      };
    }
  });

  DBOpenReq.addEventListener('upgradeneeded', (ev) => {
    //first time opening this DB
    //OR a new version was passed into open()
    db = ev.target.result;
    let oldVersion = ev.oldVersion;
    let newVersion = ev.newVersion || db.version;
    console.log('DB updated from version', oldVersion, 'to', newVersion);

    // console.log('upgrade', db);
    if (db.objectStoreNames.contains('items')) {
      db.deleteObjectStore('items');
    }
    //create the ObjectStore
    objectStore = db.createObjectStore('items', {
      keyPath: 'uuid',
    });    
    var index = objectStore.createIndex("NameIndex", ["uuid", "text", "colour", "progress", "complete", "todo"]);

    objectStore.put({"uuid": 12345, "text": "testicles", colour: 0, progress: 0, complete: 0, todo: 0});
    objectStore.put({"uuid": 12346, "text": "balls", colour: 0, progress: 0, complete: 0, todo: 0});
    

  });
  
  function makeTX(storeName, mode) {
    let tx = db.transaction(storeName, mode);
    tx.onerror = (err) => {
      console.warn(err);
    };
    return tx;
  }



  var results= objectStore.getAll();

  results.onsuccess = function() {
      let resultsjk = results.result;
      printTodos(resultsjk);
      console.log(resultsjk);
  };



  // let tx = makeTX('items', 'readwrite');
  // tx.oncomplete = (ev) => {
  //   console.log(ev);
  //   // buildList();
  //   // clearForm();
  // };

  // let store = tx.objectStore('items');
  // let request = store.delete(key); //request a delete



  

  

  const itemsList = document.getElementById('items');
  // on click
  itemsList.addEventListener('click', (e) => {  
    const id = e.target.parentElement.parentElement.getAttribute("data-id");
    const mode = e.target.getAttribute("data-mode");

    if( mode=='delete') {
    //id
    let key = id;
    console.log(key);
    if (key) {
      let tx = makeTX('items', 'readwrite');
      tx.oncomplete = (ev) => {
        console.log(ev);
        buildList();
        clearForm();
      };

      let store = tx.objectStore('items');
      let request = store.delete(key); //request a delete

      request.onsuccess = (ev) => {
        console.log('successfully deleted id: '+id);
        //move on to the next request in the transaction or
        //commit the transaction
      };
      request.onerror = (err) => {
        console.log('error in request to delete');
      };
    }
    }
  });

  document.getElementById('btnAdd').addEventListener('click', (ev) => {
    ev.preventDefault();
    //one of the form buttons was clicked

    let name = document.getElementById('name').value.trim();
    let country = document.getElementById('country').value.trim();
    let age = parseInt(document.getElementById('age').value);
    let owned = document.getElementById('isOwned').checked;

    let whiskey = {
      id: uid(),
      name,
      country,
      age,
      owned,
      lastEdit: Date.now(),
    };

    let tx = makeTX('items', 'readwrite');
    tx.oncomplete = (ev) => {
      //console.log(ev);
      buildList();
      clearForm();
    };

    let store = tx.objectStore('items');
    let request = store.add(whiskey); //request an insert/add

    request.onsuccess = (ev) => {
      console.log('successfully added an object');
      //move on to the next request in the transaction or
      //commit the transaction
    };
    request.onerror = (err) => {
      console.log('error in request to add');
    };
  });


  document.getElementById('btnClear').addEventListener('click', clearForm);

  function clearForm(ev) {
    if (ev) ev.preventDefault();
    document.whiskeyForm.reset();
    document.whiskeyForm.removeAttribute('data-key');
  }
})();
