import { uid } from './uid.js';
import { printTodos, adjustHeaderText } from './ui.js';

//https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase

const IDB = (function init() {
  let db = null;
  let objectStore = null;
  let DBOpenReq = indexedDB.open('TitD', 1);

  DBOpenReq.addEventListener('error', (err) => {
    //Error occurred while trying to open DB
    console.warn(err);
  });

  DBOpenReq.addEventListener('success', (ev) => {
    //DB has been opened... after upgradeneeded
    db = ev.target.result;
    // console.log('success opening DB');
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
    /*

    type
    0 - titd
    1 - todo
    2 - note
    3 - diary

    progress
    0
    1 - underway
    2 - completed

    */
    // var index = objectStore.createIndex("NameIndex", ["uuid", "text", "colour", "progress", "complete", "type", "created", "updated"]);
    
    objectStore.createIndex('uuidIDX', 'uuid', { unique: true });
    objectStore.createIndex('typeIDX', 'type', { unique: false });
    objectStore.createIndex('textIDX', 'text', { unique: false });
    objectStore.createIndex('colourIDX', 'colour', { unique: false });
    objectStore.createIndex('progressIDX', 'progress', { unique: false });
    objectStore.createIndex('createdIDX', 'created', { unique: false });
    objectStore.createIndex('updatedIDX', 'updated', { unique: false });

    objectStore.put({"uuid": "L612FHGL-024POWA2IGVJ", type: 0, text: "I will have a lovely day", colour: 0, progress: 0, "created":Date(), "updated":Date()});
  });

  document.getElementById('nav').addEventListener('click', (ev) => {
    let dark = ev.target.dataset.dark;
    let typeCss;
    let type;
    ev.target.dataset.type == ''? type = localStorage.getItem('type') : type = ev.target.dataset.type;
    // if type == dark
    if(dark=='dark'){
      if(document.body.classList=='titd-dark'){
        document.getElementById('dark').className = 'fa fa-moon-o';
        type = localStorage.getItem('type');
        adjustHeaderText(type);
      } else {
        document.getElementById('dark').className = 'fa fa-sun-o';
        document.body.className = 'titd-dark';
      }
    } else{
      console.log(ev.target.dataset.type);
      buildList(type);
      adjustHeaderText(type);
      
    }
  });

  document.getElementById('add-item-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const type=parseInt(localStorage.getItem('type'));
    let text = document.getElementById('add-item-text').value.trim();
    const uuid = uid();
    let query = {
      uuid: uuid,
      type,
      text,
      colour:0,
      progress:0,
      created:Date(),
      updated:Date()
    };
    console.log(uuid);
    let tx = makeTX('items', 'readwrite');
    tx.oncomplete = (ev) => {
      buildList();
      clearForm();
    };

    let store = tx.objectStore('items');
    let request = store.put(query); //request an insert/add

    request.onsuccess = (ev) => {
      console.log('successfully added: '+uuid);
    };
    request.onerror = (err) => {
      console.log('error in request to add');
    };
  });

  document.getElementById('items').addEventListener('click', (ev) => {
    let request;
    let tx = makeTX('items', 'readwrite');
    const id = ev.target.parentElement.parentElement.dataset.id;
    const text = ev.target.parentElement.parentElement.dataset.text;
    const colour = ev.target.parentElement.parentElement.dataset.colour;
    const progress = ev.target.parentElement.parentElement.dataset.progress;
    const created = ev.target.parentElement.parentElement.dataset.created;
    const todo = ev.target.parentElement.parentElement.dataset.todo;
    const mode = ev.target.dataset.mode;
    if (ev.target.dataset.mode=='delete') {
      if(confirm(`Delete '${text}'?`)!==true)return;
      tx.oncomplete = (ev) => {
        buildList();
        // clearForm();
      };
      let store = tx.objectStore('items');
      request = store.delete(id); //request a delete
      request.onsuccess = (ev) => {
        tx.commit();
      };
    }
    else if (mode =='complete') {
      console.log('updated complete id: '+id);
      tx.oncomplete = (ev) => {
        buildList();
        // clearForm();
      };
      const query = { "uuid":id, text, colour, complete:"1", created, progress, updated: Date(),todo };
      console.log('query: '+ JSON.stringify(query));
      let store = tx.objectStore('items');
      request = store.put(query); //request a delete
      request.onsuccess = (ev) => {
        tx.commit();
      };
    }
    else if (mode=='progress') {
      console.log('updated progress id: '+id+' value: '+progress);
      tx.oncomplete = (ev) => {
        buildList();
        // clearForm();
      };
      const query = { uuid:id, text, colour, complete:"1", updated: Date.now() };
      let store = tx.objectStore('items');
      request = store.put(query); //request a delete
      request.onsuccess = (ev) => {
        tx.commit();
      };
    }
    else if( mode === 'text' ) {
      // vars
      const searchbox = document.getElementById('input-'+id);
      // console.log('id: '+id);
      // console.log('searchbox: '+searchbox);
      // hide text, show input
      ev.target.style.display="none";
      // console.log('hidden the div');
      searchbox.style.display="block";
      // console.log('shown the textbox');
      const code = searchbox.addEventListener('keydown', function(e) {
          if (e.code === "Enter") {  
              // vars
              const searchbox = document.getElementById('input-'+id);
              const searchDiv = document.getElementById('text-'+id);
              const input = this.value;
              // const requestURL = '/update/' ÷+ id + '/' + mode + '/' + input + '/' + type;
              console.log('url to be sent (text): '); // console log
              // hide text, show input
              searchbox.style.display="none";
              searchDiv.style.display = "block";

          
              // sending(requestURL);
          }
      });
    }
  });

  function buildList() {
    let type;
    // console.log(localStorage.getItem('type'));
    localStorage.getItem('type') == 'NaN'?type=0:type=parseInt(localStorage.getItem('type'));
    //use getAll to get an array of objects from our store
    let list = document.querySelector('#items');
    list.innerHTML = `<tr><td>Loading...</td></tr>`;
    let tx = makeTX('items', 'readonly');
    tx.oncomplete = (ev) => {
      //transaction for reading all objects is complete
    };
    let store = tx.objectStore('items');
    let idx = store.index('typeIDX');
    const items = idx.getAll(type);
    // console.log(items);
    // console.log('type idx: '+type);
    tx.oncomplete = (ev) => {
      printTodos(items);
    };
  }

  function makeTX(storeName, mode) {
    let tx = db.transaction(storeName, mode);
    tx.onerror = (err) => {
      console.warn(err);
    };
    return tx;
  }

  function clearForm(){
    document.getElementById('add-item-form').reset();
    console.log('Cleared the form');
  }

  document.addEventListener("scroll", function () {
    const navbar = document.querySelector("#nav");
    const navbarHeight = 100;
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
    if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
    else navbar.classList.remove("fixed-top");
  });

})();
