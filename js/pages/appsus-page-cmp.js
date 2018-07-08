import utilsService from '../services/utils-service.js'

export default {
    name: 'appsus-page',
    template: `
    <section class="appsus-page" @mousemove="mouseMove" @click.self="toApp">
        <header>
        <h1>Appsus</h1>
        </header>
        <img v-if="mouseOnRight" src="https://raw.githubusercontent.com/yedidic/appsus/master/img/sus-right-emails.png"/>
        <img v-else src="https://raw.githubusercontent.com/yedidic/appsus/master/img/sus-left-notes.png"/>
        <div class="appsus-links-container">
            <router-link :class="{'appsus-link-hover': !mouseOnRight}" to="/notes">Notes</router-link> |
            <router-link :class="{'appsus-link-hover': mouseOnRight}" to="/email">Email</router-link>
        </div>
    </section>
    `,
    data() {
        return {
            windowCenter: 400,
            mouseOnRight: true,
        }
    },
    mounted() {
        this.windowCenter = utilsService.getWindowWidth() / 2
        // console.log('window center:', this.windowCenter);
    },
    methods: {
        mouseMove(ev) {
            if (ev.clientX > this.windowCenter) {
                // console.log('right');
                this.mouseOnRight = true;
            }
            else {
                // console.log('left')
                this.mouseOnRight = false;
            }
        },
        toApp() {
            if (this.mouseOnRight) {
                this.$router.push('/email');
            } else {
                this.$router.push('/notes');
            }
        },
    }
}