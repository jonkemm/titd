import { uid } from './uid.js';
import { state } from './data.js';
import { printTodos } from './js/ui.js';

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
    } else {
      buildList();
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

  document.getElementById('add-item-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    //one of the form buttons was clicked

    let text = document.getElementById('add-item-text').value.trim();
    const uuid = uid();
    let whiskey = {
      uuid: uuid,
      text,
      colour:0,
      progress:0,
      todo:0,
      complete: 0,
    };
    console.log(uuid);
    let tx = makeTX('items', 'readwrite');
    tx.oncomplete = (ev) => {
      //console.log(ev);
      buildList();
    };

    let store = tx.objectStore('items');
    let request = store.put(whiskey); //request an insert/add

    request.onsuccess = (ev) => {
      console.log('successfully added: '+uuid);
      //move on to the next request in the transaction or
      //commit the transaction
    };
    request.onerror = (err) => {
      console.log('error in request to add');
    };
  });

  document.getElementById('items').addEventListener('click', (ev) => {
  })

  function buildList() {
    //use getAll to get an array of objects from our store
    let list = document.querySelector('#items');
    list.innerHTML = `<li>Loading...</li>`;
    let tx = makeTX('items', 'readonly');
    tx.oncomplete = (ev) => {
      //transaction for reading all objects is complete
    };
    let store = tx.objectStore('items');
    //version 1 - getAll from Store
    let items = store.getAll(); //key or keyrange optional
    tx.oncomplete = (ev) => {
    printTodos(items);
      
    };
    //version 2 - getAll with keyrange and index
    // let range = IDBKeyRange.lowerBound(14, true); //false 14 or higher... true 15 or higher
    // let range = IDBKeyRange.bound(1, 10, false, false);
    // let idx = store.index('ageIDX');
    // let getReq = idx.getAll(range);

    //version 1 AND 2 return an array
    //option can pass in a key or a keyRange
    // getReq.onsuccess = (ev) => {
    //   //getAll was successful
    //   let request = ev.target; //request === getReq === ev.target
    //   //console.log({ request });
    //   list.innerHTML = request.result
    //     .map((whiskey) => {
    //       return `<li data-key="${whiskey.id}"><span>${whiskey.name}</span> ${whiskey.age}</li>`;
    //     })
    //     .join('\n');
    // };
    // getReq.onerror = (err) => {
    //   console.warn(err);
    // };

    //version 3 - using a cursor
    // let index = store.index('nameIDX');
    // let range = IDBKeyRange.bound('A', 'Z', false, false); //case sensitive A-Z a-z
    // list.innerHTML = '';
    // //direction - next, nextunique, prev, prevunique
    // index.openCursor(range, 'next').onsuccess = (ev) => {
    //   let cursor = ev.target.result;
    //   if (cursor) {
    //     console.log(
    //       cursor.source.objectStore.name,
    //       cursor.source.name,
    //       cursor.direction,
    //       cursor.key,
    //       cursor.primaryKey
    //     );
    //     let whiskey = cursor.value;
    //     list.innerHTML += `<li data-key="${whiskey.id}"><span>${whiskey.name}</span> ${whiskey.age}</li>`;
    //     cursor.continue(); //call onsuccess
    //   } else {
    //     console.log('end of cursor');
    //   }
    // };
  }

  function makeTX(storeName, mode) {
    let tx = db.transaction(storeName, mode);
    tx.onerror = (err) => {
      console.warn(err);
    };
    return tx;
  }
})();
