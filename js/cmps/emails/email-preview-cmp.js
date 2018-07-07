// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;

// Father: email-list-cmp

export default {
    name: 'email-preview',
    props: ['email', 'idx'],
    template: `
    <section class="email-preview flex center-items" :class="{active: isActive}">
            <i class="fas fa-envelope-open" v-if="email.isRead"></i>
            <i class="fas fa-envelope" v-else></i>
            <button class="far fa-trash-alt" @click.stop="deleteEmail"></button>
            <div class="flex column">
                <h4 class="email-subj">{{email.subject}}</h4>
                <h4>{{email.from.name}}</h4>
            </div>
            <h5>{{email.sent}}</h5>
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
            this.$emit('deleteEmail', this.idx)
        }
    },
    created() {
    },
    mounted() {
        this.checkIfOpen();
    },
    computed: {
        // isActive() {
        //     return this.$route.params.emailId === this.email.id;
        // }
    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            this.checkIfOpen()
        }
    }
}