import utilsService from './utils-service.js'

const NOTES_KEY = 'appsus-notes'

var notes = utilsService.loadFromStorage(NOTES_KEY)
if (!notes) {
    notes = getFakeNotes()
    utilsService.saveToStorage(NOTES_KEY, notes)
}

function getFakeNotes() {
    return [
        {type: 'textNote', key: utilsService.makeid(),
         data: {title:'Dream 05/07/18', text: 'I dreamt I finished sprint 3 and then a monster with 3 heads ate me'}
        },
        {type: 'imgNote', key: utilsService.makeid(),
         data: {title:'A beautiful bird', imgUrl: '/img/notes/beautiful-bird.jpg'}
        },
        {type: 'todoNote', key: utilsService.makeid(), 
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

export default {
    query
}