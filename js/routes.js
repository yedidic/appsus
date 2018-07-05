
// Pages
import appsusPage from './pages/appsus-page-cmp.js'
import emailApp from './pages/email-app-cmp.js'
import notesApp from './pages/notes-app-cmp.js'


// Export

export default [
    {path: '/', component: appsusPage},
    {path: '/email/:emailId?', component: emailApp},
    {path: '/notes', component: notesApp}
]