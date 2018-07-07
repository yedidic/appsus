import utilsService from './utils-service.js'

const NOTES_KEY = 'appsus-notes'

var notes = utilsService.loadFromStorage(NOTES_KEY)
if (!notes) {
    notes = getFakeNotes()
    utilsService.saveToStorage(NOTES_KEY, notes)
}

function getFakeNotes() {
    return [
        {type: 'textNote', id: utilsService.makeid(), bgc: '1AAB1A', isPinned: false,
         data: {title:'Dream 05/07/18', text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me'}
        },
        {type: 'textNote', id: utilsService.makeid(), bgc: 'AB8BA8', isPinned: false,
         data: {title:'A beautiful bird', imgUrl: '/img/notes/beautiful-bird.jpg'}
        },
        {type: 'todoNote', id: utilsService.makeid(), bgc: 'AB8BA8', isPinned: false,
         data: {title: 'Finish before 26/07/18' ,todos:[ {txt:'Mastering Vue.JS', isDone: false}, 
                                                         {txt:'Feeding Muki', isDone: false},
                                                         {txt:'Finishing sprint 3', isDone: true},
                                                       ]}
        },
    ]
}

function query() {
    notes = utilsService.loadFromStorage(NOTES_KEY)
    return Promise.resolve(notes);
}

function getById(id) {
    console.log(id);
    
    return notes.find((note) => note.id === id);
}

function saveNote(sentNote) {
    console.log(sentNote);
    
    let note = getById(sentNote.id)
    return new Promise((resolve) => {
        if (note) {
            note = sentNote;
        } else {
            notes.push(sentNote)
        }
        console.log("notes:", notes);
        
        utilsService.saveToStorage(NOTES_KEY, notes)
        resolve(note)
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
    if (note.isPinned) notes.unshift(note);
    else notes.push(note)
    utilsService.saveToStorage(NOTES_KEY, notes)
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
    getById,
    saveNote,
    getEmptyNote,
    deleteNote,
    handlePinNote,
    toggleTodoIsDone
}