
// Pages
import appsusPage from './pages/appsus-page-cmp.js'
import emailApp from './pages/email-app-cmp.js'
import notesApp from './pages/notes-app-cmp.js'
import editAddTxtCmp from './cmps/notes/edit-add-txt-cmp.js'
// import editAddTodoCmp from './cmps/notes/edit-add-todo-cmp.js'


// Export

export default [
    {path: '/', component: appsusPage},
    {path: '/email', component: emailApp},
    {path: '/notes', component: notesApp},
    {path: '/notes/edit-add/txt/:id?', component: editAddTxtCmp},
    // {path: '/notes/edit-add/todo/:id?', component: editAddTodoCmp},
]