import { adjustHeaderText, buildUi, printTodos, readShare, printShare } from './ui.js';
import { func } from './uuid.js';

// // fn to send js to the server
// function sending (requestURL) {
//     // if url is set, send it
//     const request = new XMLHttpRequest();
//     if ( requestURL !== '' ) {
//         request.open('GET', requestURL);
//         request.responseType = 'json';
//         request.send();
//         console.log('Functions -> Sending url: '+requestURL); // console log
//         request.onload = function() {
//             // if loaded, send response
//             var items = request.response;
//             printTodos(items);
//         }
//     }
// }

// show time image
var currentdate = new Date();
let timeNow = String(currentdate.getHours()+':'+("00" + currentdate.getMinutes()).slice(-2)+':'+("00" + currentdate.getSeconds()).slice(-2));
var isodate = new Date().toISOString();


function typeInTextarea(newText, el = document.activeElement) {
    const [start, end] = [el.selectionStart, el.selectionEnd];
    el.setRangeText(newText, start, end, 'select');
}
// const emojiClick = document.getElementById('add-item-text');
// emojiClick.addEventListener('click', (e) => {
//     const dataId = window.localStorage.getItem('dataId');
//     if(dataId !== null) {
//         typeInTextarea(dataId);
//         window.localStorage.removeItem('dataId');
//     }
// });

console.log('type: '+window.localStorage.getItem('type'));
let type; localStorage.getItem('type')!=null ? type = localStorage.getItem('type') : type = '0';

// click nav link
const topScreen = document.getElementById('nav');
// on click
topScreen.addEventListener('click', (e) => {  
    // vars
    let value = e.target.getAttribute("data-value");
    if ( value == 'find'){
        const calendar = document.getElementById('calendar-container');
        calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';
    }
    if ( value == 'todos'){
        window.localStorage.setItem('type','1');
        adjustHeaderText('1');
        console.log('todos')
        // const requestURL = '/read/' + isodate +'/1';
        // sending(requestURL);
    }
    if ( value == 'titd'){
        window.localStorage.setItem('type','0');
        adjustHeaderText('0');
        // const requestURL = '/read/' + isodate +'/0';
        // sending(requestURL);
    }
    if ( value == 'notes'){
        window.localStorage.setItem('type','2');
        adjustHeaderText('2');
        // const requestURL = '/read/' + isodate +'/2';
        // sending(requestURL);
    }
    if ( value == 'dark'){
        if(localStorage.getItem('dark') == '0')  {
            localStorage.setItem('dark','1')
        }else{ 
            localStorage.setItem('dark','0');
        }
        console.log(localStorage.getItem('dark'));
        // console.log('dark chamged'+localStorage.getItem('dark'));
        localStorage.getItem('type') 
        adjustHeaderText(type);
    }
    if ( value == 'range'){
        const rangeValue = document.getElementById('range-input').value;
        const rangeDisplay = document.getElementById('range-display');
        const uuidInput = document.getElementById('uuid').value;
        const rangeInput = document.getElementById('range');
        const uuid = localStorage.getItem('uuid');
        if(uuid == uuidInput){
            // requestURL = '/update/' + uuidInput + '/range/' + rangeValue+'/'+type;
            // console.log('requestURL (update): '+requestURL);
            uuidNew = uuidInput;
        }else{
            // create new uuid
            // uuidNew = (func() + func() + "-" + func() + "-3" + func().substr(0,2) + "-" + func() + "-" + func() + func() + func()).toLowerCase();
            // requestURL = '/create/range/0/' + uuidNew + '/' + rangeValue+'';
            // console.log('requestURL (create): '+requestURL);
        }
        // update display
        rangeDisplay.innerText = 'Rating '+rangeValue;
        rangeInput.value = rangeValue;
        // store uuid in local storage
        window.localStorage.setItem('uuid',uuidNew);
        //  store uuid in hidden field
        document.getElementById('uuid').value = uuid;
        // store range in local storage
        var object = {range: rangeValue, timestamp: new Date().getTime()}
        localStorage.setItem("ranger", JSON.stringify(object));
        // sending(requestURL);
    }
    if ( value == 'share'){
        readShare();
    }
    if ( value == 'emojis'){
        let value = e.target.getAttribute("data-value");
        const showEmojis = document.getElementById('message');
        const text = document.getElementById('add-item-text');
        const content = e.target.innerText;
        dataId = e.target.getAttribute("data-id");
        window.localStorage.setItem('dataId',content);
    }
    if(value=='show-emojis'){
        const emojis = document.getElementById('emojis-container');
        const message = document.getElementById('message');
        const logo = document.getElementById('logo');
        emojis.style.display = emojis.style.display = 'grid';
        message.style.display = 'none';
        logo.classList.add("logo-animation");
        emojis.style.marginLeft='-6rem';

        
    }
});

// add record
const add = document.getElementById('add-item-form');
add.addEventListener('submit', e => {
    e.preventDefault();
    // In the following line, you should include the prefixes of implementations you want to test.


})






const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('WhiskeyDB', 6);
  
    DBOpenReq.addEventListener('error', (err) => {
      //Error occurred while trying to open DB
      console.warn(err);
    });
    DBOpenReq.addEventListener('success', (ev) => {
      //DB has been opened... after upgradeneeded
      db = ev.target.result;
      console.log('success', db);
    });
    DBOpenReq.addEventListener('upgradeneeded', (ev) => {
      //first time opening this DB
      //OR a new version was passed into open()
      db = ev.target.result;
      let oldVersion = ev.oldVersion;
      let newVersion = ev.newVersion || db.version;
      console.log('DB updated from version', oldVersion, 'to', newVersion);
  
      console.log('upgrade', db);
      if (!db.objectStoreNames.contains('whiskeyStore')) {
        objectStore = db.createObjectStore('whiskeyStore', {
          keyPath: 'id',
        });
      }
      // db.createObjectStore('foobar');
      if (db.objectStoreNames.contains('foobar')) {
        db.deleteObjectStore('foobar');
      }
    });
    const whiskeyForm = document.getElementById('add-item-form')
    whiskeyForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      //one of the form buttons was clicked
      console.log('add item')
    });
  })();






// // click calendar link
// const cal = document.getElementById('vanilla-calendar-01');
// // on click
// cal.addEventListener('click', (e) => {  
//     // vars
//     let day = e.target.getAttribute("data-calendar-day");
//     const switchButton = document.getElementById('switchButton');
//     // check state of am / pm button
//     switchButton.checked==true?timeVar='12:00:00':timeVar='00:00:00';

//     console.log(type);
//     if(type=='1'){
//         let id = window.localStorage.getItem('uuid');
//         const date = new Date;
//         let time = date.getHours()+':'+date.getMinutes()+':00';
//         day = day + ' ' + time;
//         requestURL = '/update/' + id + '/todo/' + day + '/' + type;
//         console.log(requestURL);
//     } else {
//     //  set up url
//         requestURL = '/read/' + day + ' ' +timeVar + '/'+type;
//     }
//     // console.log('requestURL (calendar): '+requestURL);
//     sending(requestURL);
//     // hide the calendar
//     document.getElementById('calendar-container').style.display='none';
// });
    
// main function
const itemsList = document.getElementById('items');
// on click
itemsList.addEventListener('click', (e) => {  
    // vars
    let id = e.target.parentElement.parentElement.getAttribute("data-id");
    let mode = e.target.getAttribute("data-mode");
    // changing the text?
    // if( mode === 'text' ) {
    //     // vars
    //     const searchbox = document.getElementById('input-'+id);
    //     console.log('id: '+id);
    //     console.log('searchbox: '+searchbox);
    //     // hide text, show input
    //     e.target.style.display="none";
    //     console.log('hidden the div');
    //     searchbox.style.display="block";
    //     console.log('shown the textbox');
    //     requestUrl = searchbox.addEventListener('keydown', function(e) {
    //         if (e.code === "Enter") {  
    //             // vars
    //             const searchbox = document.getElementById('input-'+id);
    //             const searchDiv = document.getElementById('text-'+id);
    //             const input = this.value;
    //             const mode = 'text';
    //             const requestURL = '/update/' + id + '/' + mode + '/' + input + '/' + type;
    //             console.log('url to be sent (text): '+requestURL); // console log
    //             // hide text, show input
    //             searchbox.style.display="none";
    //             searchDiv.style.display = "block";

            
    //             sending(requestURL);
    //         }
    //     });
    // }
    if (e.target.className.includes("show" )) {
        let colours = e.target.nextElementSibling;
        colours.style.display = 'flex';
    }
    if( mode=='delete') {
        // vars
        value = e.target.parentElement.parentElement.getAttribute("data-value");
        // set url
        // requestURL = '/update/' + id + '/delete/' + value + '/' + type;
        // console.log('url to be sent: '+requestURL);
        // return;
        // check if ok to delete
        var r=confirm("Are you sure you want to delete '"+value+"'?");
        if (r==true)
        {
            // remove row from original table
            e.target.parentElement.parentElement.remove();
        } else  {
            // do nothing
            requestURL = '';
            return;
        }
    }
    if(mode=='progress') {
        // vars
        value = e.target.getAttribute("data-value");
        value == '0' ? value = '1' : value = '0'
        value == '0' ? e.target.className='fa-circle-o' : e.target.className='fa-check-circle-o';
        // set url
        // requestURL = '/update/' + id + '/progress/' + value + '/' + type;
    }
    if(mode=='complete') {
        // requestURL = '/update/' + id + '/complete/1/' + type;
    }
    if(mode==="colour" ) {
        // vars
        const value = e.target.getAttribute("data-value");
        const id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");
        // build url
        // requestURL = '/update/' + id + '/' + mode + '/' + value + '/' + type;
        // console.log('url to be sent <colour>: '+requestURL); // console log
        // set colour of dot
        let dot = document.getElementById('dot-' + id);
        dot.className='rc-'+value + ' show';
        // console.log(dot.className);
        // set local storage
        localStorage.setItem('colour', value);
        console.log('localStorage set to: '+ value)
        // hide colours
        e.target.parentElement.style.display='none';
        // call function to send request
        sending(requestURL);

    }
    if(mode=='calendar'){
        const calendar = document.getElementById('calendar-container');
        calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';        
        window.localStorage.setItem('uuid', id);
    }
    // call function to send request
    // sending(requestURL);
});