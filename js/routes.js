
// Pages
import appsusPage from './pages/appsus-page-cmp.js'
import emailApp from './pages/email-app-cmp.js'
import notesApp from './pages/notes-app-cmp.js'
import editAddTxtCmp from './cmps/notes/edit-add-text-cmp.js'
// import editAddTodoCmp from './cmps/notes/edit-add-todo-cmp.js'

// Export

export default [
    {path: '/', component: appsusPage},
<<<<<<< HEAD
    {path: '/email/:emailId?', component: emailApp},
    {path: '/notes', component: notesApp}
=======
    {path: '/email', component: emailApp},
    {path: '/notes', component: notesApp},
    {path: '/notes/edit-add/text/:noteId?', component: editAddTxtCmp},
    // {path: '/notes/edit-add/todo/:id?', component: editAddTodoCmp},
>>>>>>> 68fa607a4f808cacf1f8c32dcc7a28e4940fa993
]