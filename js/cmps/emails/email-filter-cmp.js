// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;

export default {
    name: 'email-filter',
    template: `
        <section class="email-filter">
            <h1>filter</h1>
            <form>
                <input type="text" v-model="filterBy.txt" @keydown.enter="filterList"/>
                <label>
                    All
                    <input type="radio" value="all" v-model="filterBy.ctg" @click="filterList" checked>
                </label>
                <label>
                    Read
                    <input type="radio" value="read" v-model="filterBy.ctg" @click="filterList">
                </label>
                <label>
                    Unread
                     <input type="radio" value="unread" v-model="filterBy.ctg" @click="filterList">
                </label>
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