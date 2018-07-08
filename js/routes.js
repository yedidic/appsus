
// Pages
import emailCompose from './cmps/emails/email-compose-cmp.js'
import appsusPage from './pages/appsus-page-cmp.js'
import emailApp from './pages/email-app-cmp.js'
import notesApp from './pages/notes-app-cmp.js'
import editAddTxtCmp from './cmps/notes/edit-add-text-cmp.js'
import editAddTodoCmp from './cmps/notes/edit-add-todo-cmp.js'
import editAddMapCmp from './cmps/notes/edit-add-map-cmp.js'
import editAddAudioCmp from './cmps/notes/edit-add-audio-cmp.js'

// Export

export default [
    {path: '/', component: appsusPage},
    {path: '/email/compose/reply/:replyTo/:subject?', component: emailCompose},
    {path: '/email/compose/forward/:emailId', component: emailCompose},
    {path: '/email/compose/', component: emailCompose},
    {path: '/email/:emailId?', component: emailApp},
    {path: '/email', component: emailApp},
    {path: '/notes', component: notesApp, children: [
        { path: 'edit-add/text/:noteId?', component: editAddTxtCmp, name: 'editAddTxtCmp' },
        { path: 'edit-add/todo/:noteId?', component: editAddTodoCmp, name: 'editAddTodoCmp' },
        { path: 'edit-add/map/:noteId?', component: editAddMapCmp, name: 'editAddMapCmp' },
        { path: 'edit-add/audio/:noteId?', component: editAddAudioCmp, name: 'editAddAudioCmp' },
      ]},
    // {path: '/notes/edit-add/text/:noteId?', component: editAddTxtCmp},
    // {path: '/notes/edit-add/todo/:noteId?', component: editAddTodoCmp},
]