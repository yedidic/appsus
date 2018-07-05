'use strict';

import appsusPage from './pages/appsus-page-cmp.js';
import routes from './routes.js'
console.log('Main JS :)')

Vue.use(VueRouter);
const router = new VueRouter({ routes });

new Vue({
    el: '#appsus-app',
    router,
    components: {
        appsusPage
    }
})