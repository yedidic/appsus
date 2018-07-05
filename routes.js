import homePage from './pages/home-cmp.js';
import aboutPage from './pages/about-cmp.js';
import bookApp from './pages/book-app-cmp.js';
import bookEdit from './pages/book-edit-cmp.js';
import bookDetails from './pages/book-details-cmp.js';

export default [
	{ path: '/', component: homePage },
	{ path: '/about', component: aboutPage },
	{ path: '/book', component: bookApp },
	{ path: '/book/edit/:bookId?', component: bookEdit },
	{ path: '/book/:bookId', component: bookDetails },
	{ path: '*', redirect: '/book' },
]
