import utilsService from '../services/utils-service.js'

export default {
    name: 'appsus-page',
    template: `
    <section class="appsus-page" @mousemove="mouseMove" @click.self="toApp">
        <h1>Appsus</h1>
        <img v-if="mouseOnRight" src="/img/sus-right-emails.png"/>
        <img v-else src="/img/sus-left-notes.png"/>
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
    },
    methods: {
        mouseMove(ev) {
            if (ev.clientX > 400) {
                // console.log('right');
                this.mouseOnRight = true;
            }
            else {
                // console.log('left')
                this.mouseOnRight = false;
            }
            // console.log('windowCenter:', this.windowCenter);
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