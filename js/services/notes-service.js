import utilsService from './utils-service.js'

const NOTES_KEY = 'appsus-notes'

var notes = utilsService.loadFromStorage(NOTES_KEY)
if (!notes) {
    notes = getFakeNotes()
    utilsService.saveToStorage(NOTES_KEY, notes)
}

function getFakeNotes() {
    return [
        {type: 'textNote', id: utilsService.makeid(), bgc: '1AAB1A',
         data: {title:'Dream 05/07/18', text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me'}
        },
        {type: 'textNote', id: utilsService.makeid(), bgc: 'AB8BA8',
         data: {title:'A beautiful bird', imgUrl: '/img/notes/beautiful-bird.jpg'}
        },
        {type: 'todoNote', id: utilsService.makeid(), bgc: 'AB8BA8',
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
        console.log(notes);
        
        utilsService.saveToStorage(NOTES_KEY, notes)
        resolve(note)
    })
}

function getEmptyNote(type) {
    let emptyNote = {'type': type, id: utilsService.makeid(), bgc: 'AB8BA8',
            data: {title:'', text: '', imgUrl:'', todos:[]}
   }
   console.log(emptyNote);
   return emptyNote
}

export default {
    query,
    getById,
    saveNote,
    getEmptyNote
}