/*
click on your mum
*/

















// read();
let items = window.items;
monitor();

// readEmojis();

// monitor state & time asynchronously
function waitFor(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), time);
    });
};

// adjust header text
function adjustHeaderText(type) {
    // vars
    let dark, headerMessage, timeMessage, typeCss;
    // get time info
    let time = new Date().getHours();
    // 
    const noRecords = document.getElementById('no-records');
    localStorage.setItem('type',parseInt(type));
    localStorage.getItem('dark')!=null ? dark = localStorage.getItem('dark') : dark = 0;
    localStorage.getItem('type')!=null ? type = localStorage.getItem('type') : type = 0;
    // conditions
    if(time>='18' && time<'24'){timeMessage='evening';  typeCss='titd-evening';}
    if(time>='12' && time<'18'){timeMessage='afternoon'; typeCss='titd-afternoon'; }headerMessage = 'Smile Out Loud';
    if(time>='6' && time<'12'){timeMessage='morning'; typeCss='titd-morning'; headerMessage = '3 4 Me'; }
    // if type == todo
    if(type==1){
        headerMessage = 'To-do';
        timeMessage='todo';
        typeCss='titd-todo';
    }
    // if type == notes
    if(type==2){
        headerMessage = 'Note';
        timeMessage='notes';
        typeCss='titd-notes';
    }
    // document.getElementById('dark').className = 'fa fa-moon-o';
    // itemsBg.style.backgroundImage = "url('../img/bg-repeat.svg')";
    if(noRecords != null) noRecords.className = 'no-records';
    // console.log('dark set to: ' + dark);
    // vars
    const placeholderText = document.getElementById('add-item-text');
    const message = document.getElementById('message');
    // let range = document.getElementById('range-input');
    const logo = document.getElementById('logo');    
    // localStorage.getItem('range')!=null ? range = localStorage.getItem('range') : range.value = '5'

    // set title & placeholder text
    headerMessage = 'Add a '+headerMessage+' then press enter';
    placeholderText.setAttribute("placeholder",headerMessage);
    // change title
    message.className = timeMessage;
    // change logo
    logo.className = timeMessage;
    // change bg
    // console.log(typeCss);
    document.body.className = typeCss;
    // emojis   
    const emojis = document.getElementById('emojis-container');
    emojis.style.display = 'none';
    message.style.display = 'block';
    logo.style.display = 'block';
}

// async function to update screen objects
async function monitor() {
    // read();
    let type = window.localStorage.getItem('type');
    typeof window.localStorage.getItem('type') !== 'undefined' ? type = window.localStorage.getItem('type') : type = '0';
    adjustHeaderText(type);
    // await waitFor(60000);
    // monitor();
};


// // get live collection data
// onSnapshot(qType, (snapshot) => {
//     let div = '';
//     let divId = document.getElementById("items");
//     // console.log(snapshot.docs)
//     let items = []
//     snapshot.docs.forEach(doc => {
//       // items.push({ ...doc.data(), id: doc.id })
//       div += '<div id="' + doc.id + '" class="items">' + doc.id + '</div>'
//     })
//     console.log(div);
//     divId.innerHTML = div;
//   })

//  build 1 row of #items in the ui
function buildUi( uuid, type, colour, text, progress, created  ){
    let d;
    let progressClass;
    progress==0 ? progressClass='times-' : progressClass='check-';
    let row = `
            <tr data-id="${uuid}" data-text="${text}" data-colour="${colour}" data-progress="${progress}" data-created="${created}">
                <td class="icon">
                    <div class="rc-${colour} show" id="dot-${uuid}"></div>
                    <div class="colours">`
                    for(let x=0; x<3; x++) {
row+=`
                        <div class="rc-${x}" data-mode="colour" data-value="${x}" /></div>`;
        }
row+=`
                    </div>
                </td>`;
if(type!=1){
row+=`
                <td>
                    <input type="text" data-mode="text" id="input-${uuid}" value="${text}" class="text-box" />
                    <div class="text" data-mode="text" id="text-${uuid}">${text}</div>
                </td>`;
            } else {
                progress==0 ? progressClass='times-' : progressClass='check-';
row+=`
                <td>
                    <input type="text" data-mode="text" id="input-${uuid}" value="${text}" class="text-box" />
                    <div class="text" data-mode="text" id="text-${uuid}">${text}</div>
                </td>
                <td class="icons">
                    <i class="fa fa-calendar-o" data-mode="calendar"></i>
                    <i class="fa fa-${progressClass}circle-o" title="Underway?" data-mode="progress"></i>
                    <i class="fa fa-check" title="Completed?" data-mode="complete"></i>
                </td>`;
        }
row+=`
                <td class="icon">
                    <i class="fa fa-trash" data-mode="delete" aria-hidden="true"></i>
                </td>
            </tr>`;
    return row;
}

//  render rows in #items
function printTodos(items) {
    var div = document.getElementById('items');

    // return;
    let rowBuild = '';
    let count=0;
    // console.table(items.result);
    items = items.result;
    for (let i in items ) {
        // items[i] = items[i].result;
        // data
        const uuid = items[i].uuid;
        const text = items[i].text;
        const colour = items[i].colour;
        const progress = items[i].progress;
        const created = items[i].created;
        const updated = items[i].updated;
        let progressClass;
        const type = items[i].type;
        // create row
        rowBuild += buildUi( uuid, type, colour, text, progress, created, updated);
        div.innerHTML = rowBuild;
        count++;
    }
    if (count==0){
        let dark = localStorage.getItem('dark');
        if(dark=='1'){
            dark = ' dark';
        }
         rowBuild=`
            <tr>
                <td class="no-records${dark}" id="no-records">To add items, use the box above.</td>
            </tr>
        `;
    }
     div.innerHTML=rowBuild;
     return div;
}

// build share rows
function readShare() {
    var request = new XMLHttpRequest();
    var isodate = new Date().toISOString();
    var requestURL = '/read/'+isodate + '/0';
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var items = request.response;
        console.log('Share rendered, items: ' + items.length);
        printShare(items);
    }
}

//  render rows in #items
function printShare(items) {
    var div = document.getElementById('share-item-text');
    let rowBuild = '';
    let count=0;
    const time=new Date().getHours();
    if(time > '0' && time < '12' ){
        type='3 4 for Me(s)';
        symbol='???? ';
    } else {
        type='Smile Out Loud(s)';
        symbol = '??? ';
    }
    for (let i in items ) {
        const text = items[i].text;
        // create row
        rowBuild += '%0a'+symbol + text;
        // div.value = rowBuild;
        count++;
    }
    div.value=rowBuild;
    const message = 'My ' + type + ' today are %0a'+rowBuild;
    // console.log('txtValue: '+message);
    window.location.href = 'whatsapp://send?text='+message;
    //  return div;
}

// //  read emos from db
// function readEmojis() {
//     var request = new XMLHttpRequest();
//     var isodate = new Date().toISOString();
//     var requestURL = '/emojis/';
//     request.open('GET', requestURL);
//     request.responseType = 'json';
//     request.send();
//     request.onload = function() {
//         var items = request.response;
//         printEmojis(items);
//     }
// }

// // print emos in list
// function printEmojis(items) {
//     var div = document.getElementById('emojis-container');
//     let rowBuild = '';
//     for (let i in items ) {
//         const message = items[i].text;
//         rowBuild += `<div 
//         class="grid-item" data-id="${message}" data-value="emojis">&#${message};</div>`;
//     }
//     div.innerHTML=rowBuild;
// }
export { monitor, waitFor, adjustHeaderText, buildUi, printTodos, readShare, printShare };
