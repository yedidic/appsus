// Father: email-list-cmp

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <section class="email-preview flex space-between" :class="{active: isActive}">
            <div class="icon-area flex center-items">
                <i class="fas fa-envelope-open envelope-icon" v-if="email.isRead"></i>
                <i class="fas fa-envelope envelope-icon" v-else></i>
                <router-link to="/email" @click.native="deleteEmail"> <i class="fas fa-trash-alt"></i></router-link>
                <div class="flex column">
                    <h3 class="email-subj">{{getThinSubj}}</h3>
                    <h4>{{email.from.name}}</h4>
                </div>
            </div>
            <h5>{{getRelativeDate}}</h5>
    </section>
    `,
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        checkIfOpen() {
            if (this.$route.params.emailId === this.email.id) {
                this.isActive = true;
            }
            else this.isActive = false;
        },
        deleteEmail() {
            this.$emit('deleteEmail', this.email.id)
        }
    },
    mounted() {
        this.checkIfOpen();
    },
    computed: {
        getRelativeDate() {
            return moment(this.email.sent).from()
        },
        getThinSubj() {
            if (this.email.subject.length > 20) return this.email.subject.substring(0, 20) + '...'
            return this.email.subject;
        }
    },
    watch: {
        '$route.params.emailId'() {
            this.checkIfOpen()
        }
    }
}