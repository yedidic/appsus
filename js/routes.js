
// Pages
import emailCompose from './cmps/emails/email-compose-cmp.js'
import appsusPage from './pages/appsus-page-cmp.js'
import emailApp from './pages/email-app-cmp.js'
import notesApp from './pages/notes-app-cmp.js'
import editAddTxtCmp from './cmps/notes/edit-add-text-cmp.js'
import editAddTodoCmp from './cmps/notes/edit-add-todo-cmp.js'

// Export

export default [
    {path: '/', component: appsusPage},
    {path: '/email/compose/:replyTo?', component: emailCompose},
    {path: '/email/:emailId?', component: emailApp},
    {path: '/email', component: emailApp},
    {path: '/notes', component: notesApp, children: [
        { path: 'edit-add/text/:noteId?', component: editAddTxtCmp, name: 'editAddTxtCmp' },
        { path: 'edit-add/todo/:noteId?', component: editAddTodoCmp, name: 'editAddTodoCmp' },
      ]},
    // {path: '/notes/edit-add/text/:noteId?', component: editAddTxtCmp},
    // {path: '/notes/edit-add/todo/:noteId?', component: editAddTodoCmp},
]