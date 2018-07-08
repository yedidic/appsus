import utilsService from './utils-service.js'

const NOTES_KEY = 'appsus-notes'


var notes = utilsService.loadFromStorage(NOTES_KEY)
if (!notes) {
    notes = getFakeNotes()
    utilsService.saveToStorage(NOTES_KEY, notes)
}
console.log('note:', notes);

var lastPinnedIdx = notes.reduce((acc, note) => {
    if (note.isPinned) acc++
    return acc
}, 0)


function getFakeNotes() {
    return [
        {type: 'textNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: true,
         data: {title:'Dream 05/07/18', text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me', 
                time: 1530790284, todos:[]}
        },
        {type: 'textNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: true,
         data: {title:'A beautiful bird',text:'', imgUrl: '/img/notes/beautiful-bird.jpg',
                time: 1530760284, todos:[]}
        },
        {type: 'mapNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: false,
        data: {title:'Parked my car here', text:'', loc: {lat: 32.0881183, lng: 34.803004},
                time: 1530890284, todos:[]}
        },
        {type: 'todoNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: false,
         data: {title: 'Finish before 26/07/18', text:'',todos:[ {txt:'Mastering Vue.JS', isDone: false}, 
                                                                 {txt:'Feeding Muki', isDone: false},
                                                                 {txt:'Finishing sprint 3', isDone: true},
                                                               ],
                time: 1530790284
                }
        },
        {type: 'audioNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: false,
         data: {title:'The sound of magic', text:'', audioSrc:'/audio/magical-sound.mp3',
         time: 1530790284, todos:[]}
        },
        {type: 'todoNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: false,
         data: {title:'Don\'t forget!', text: '', todos:[{txt:'email mimi@business.com', isDone: false}, 
                                                        {txt:'email savta@walla.co.il', isDone: false},
                                                    ],
                time: 1530790284
                }
        },
        {type: 'mapNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: false,
        data: {title:'רחובות אחי', text:'', loc: {lat: 31.892773, lng: 34.811272},
                time: 1530790284, todos:[]}
        },
        {type: 'textNote', id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: false,
         data: {title:'fuck he\'s so handsome...',text:'', 
         imgUrl: 'https://vignette.wikia.nocookie.net/glee/images/7/78/Garfield-wallpaper-garfield-3194449-1280-1024-1.jpg/revision/latest?cb=20120229105217', 
         time: 1530790284, todos:[]}
        },
    ]
}

function query() {
    notes = utilsService.loadFromStorage(NOTES_KEY)
    return Promise.resolve(notes);
}

function getNotesForDisplay(filterBy) {
    let filteredNotes = notes.filter(note => {
        return note.data.title.includes(filterBy) ||
                note.data.text.includes(filterBy) ||
                note.data.todos.some(todo => todo.txt.includes(filterBy))
    })
    return Promise.resolve(filteredNotes);
}

function getById(id) {
    return notes.find((note) => note.id === id);
}

function saveNote(sentNote) {
    let noteIdx = notes.findIndex((note) => note.id === sentNote.id)
    return new Promise((resolve) => {
        if (noteIdx !== -1) {
            notes[noteIdx] = sentNote;
        } else {
            notes.splice(lastPinnedIdx, 0, sentNote)
        }
        utilsService.saveToStorage(NOTES_KEY, notes)
        resolve(notes)
    })
}

function deleteNote(id) {
    let noteIdx = notes.findIndex((note) => note.id === id)
    notes.splice(noteIdx, 1)
    utilsService.saveToStorage(NOTES_KEY, notes);
    return Promise.resolve(notes);
}

function handlePinNote(note) {
    note.isPinned = !note.isPinned;
    let noteIdx = notes.findIndex(currNote => currNote.id === note.id);
    notes.splice(noteIdx, 1)
    if (note.isPinned) {
        notes.unshift(note);
        lastPinnedIdx++;
    } else {
        notes.splice(lastPinnedIdx-1, 0, note)
        lastPinnedIdx--;
    }
    utilsService.saveToStorage(NOTES_KEY, notes)
    // console.log('lastPinnedIdx:', lastPinnedIdx);
}

function toggleTodoIsDone(todo) {
    todo.isDone = !todo.isDone
    utilsService.saveToStorage(NOTES_KEY, notes);
}

function getEmptyNote(type) {
    let emptyNote = {'type': type, id: utilsService.makeid(), bgc: '#FFFFFF', isPinned: false,
            data: {title:'', text: '', imgUrl:'', time: Date.now() / 1000,
                    todos:[{txt:'', isDone: false}], 
                    loc: {lat: 32.0881183, lng: 34.803004},
                    audioSrc: ''                
                }
   }
//    console.log(emptyNote);
   return emptyNote
}

export default {
    query,
    getNotesForDisplay,
    getById,
    saveNote,
    getEmptyNote,
    deleteNote,
    handlePinNote,
    toggleTodoIsDone
}