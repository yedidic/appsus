// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;

export default {
    name: 'email-filter',
    template: `
        <section class="email-filter">
            <router-link tag="button" to="/email/compose" class="ctrl-btn compose-btn">
            <i class="fas fa-plus-square"></i><span> Compose</span>
            </router-link>
            <form class="flex">
                <input type="text" v-model="filterBy.txt" @keydown.enter="filterList" placeholder="Search"/>
                <div class="radio-container">
                    <label>
                        <input type="radio" value="all" v-model="filterBy.ctg" @click="filterList" checked>
                        All
                    </label>
                    <label class="radio-read">
                        <input type="radio" value="read" v-model="filterBy.ctg" @click="filterList">
                        Read
                    </label>
                    <label>
                        <input type="radio" value="unread" v-model="filterBy.ctg" @click="filterList">
                        Unread
                    </label>
                </div>
            </form>
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                ctg: 'all' //Category
            }
        }
    },
    methods: {
        filterList() {
            this.$emit('filter', this.filterBy)
        }
    }
}