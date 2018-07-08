import utilsService from './utils-service.js'

const NOTES_KEY = 'appsus-notes'

var lastPinnedIdx = 0;

var notes = utilsService.loadFromStorage(NOTES_KEY)
if (!notes) {
    notes = getFakeNotes()
    utilsService.saveToStorage(NOTES_KEY, notes)
}

function getFakeNotes() {
    return [
        {type: 'textNote', id: utilsService.makeid(), bgc: '1AAB1A', isPinned: false,
         data: {title:'Dream 05/07/18', text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me', todos:[]}
        },
        {type: 'textNote', id: utilsService.makeid(), bgc: 'AB8BA8', isPinned: false,
         data: {title:'A beautiful bird',text:'', imgUrl: '/img/notes/beautiful-bird.jpg', todos:[]}
        },
        {type: 'todoNote', id: utilsService.makeid(), bgc: 'AB8BA8', isPinned: false,
         data: {title: 'Finish before 26/07/18', text:'',todos:[ {txt:'Mastering Vue.JS', isDone: false}, 
                                                                 {txt:'Feeding Muki', isDone: false},
                                                                 {txt:'Finishing sprint 3', isDone: true},
                                                               ]
                }
        },
        {type: 'textNote', id: utilsService.makeid(), bgc: '1AAB1A', isPinned: false,
         data: {title:'Dream 05/07/18', text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me', todos:[]}
        },
        {type: 'textNote', id: utilsService.makeid(), bgc: 'AB8BA8', isPinned: false,
         data: {title:'A beautiful bird',text:'', imgUrl: '/img/notes/beautiful-bird.jpg', todos:[]}
        },
        {type: 'todoNote', id: utilsService.makeid(), bgc: 'AB8BA8', isPinned: false,
         data: {title: 'Finish before 26/07/18', text:'',todos:[ {txt:'Mastering Vue.JS', isDone: false}, 
                                                                 {txt:'Feeding Muki', isDone: false},
                                                                 {txt:'Finishing sprint 3', isDone: true},
                                                               ]
                }
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
            notes.push(sentNote)
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
    console.log('lastPinnedIdx:', lastPinnedIdx);
}

function toggleTodoIsDone(todo) {
    todo.isDone = !todo.isDone
    utilsService.saveToStorage(NOTES_KEY, notes);
}

function getEmptyNote(type) {
    let emptyNote = {'type': type, id: utilsService.makeid(), bgc: 'AB8BA8', isPinned: false,
            data: {title:'', text: '', imgUrl:'', todos:[{txt:'', isDone: false}]}
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