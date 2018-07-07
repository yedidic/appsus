// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;
import emailService from '../../services/email-service.js';


export default {
    name: 'email-details',
    props: ['emails'],
    template: `
    <section class="email-details flex column">
    <template v-if="email">
        <router-link tag="button" to="/email" class="back-btn">Back to List</router-link>
        <router-link tag="button" to="/email" class="far fa-trash-alt" @click.native="deleteEmail"></router-link>
        <h2>{{email.subject}}</h2>
        <h3>From: {{email.from.name}} <{{email.from.address}}></h3>
        <h4>Sent: {{email.sent}}</h4>
        <h3>To: {{email.to.name}} <{{email.to.address}}> </h3>
        <div class="pre-wrapper">
                <pre>{{email.msg}}</pre>
        </div>
    </template>
    <h2 v-else>Inbox is Empty!</h2>
    </section>
                `,

    data() {
        return {
            email: {
                id: '',
                subject: '',
                from: { name: '', address: '' },
                sent: '',
                to: { name: '', address: '' },
                msg: '',
                isRead: false
            },
            // mobileMode: false,
        }
    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            this.loadEmail();
        },
        emails(){
            this.loadEmail();
        }
    },
    created() {
        this.loadEmail()
    },
    mounted() {
    },
    methods: {
        loadEmail() {
            if (!this.$route.params.emailId) {
                this.loadFirstIdxEmail()
                return;
            }
            //TODO: optional: make them at same promise 
            // or maybe in reject(firstIdxMail); (firstIdx && my email)
            emailService.getById(this.$route.params.emailId)
                .then((email, firstIdxEmail) => {
                    if (email) this.email = email
                    else this.loadFirstIdxEmail()
                })
        },
        loadFirstIdxEmail() {
            emailService.query()
                .then(emails => {
                    this.email = emails[0]
                })
        },
        deleteEmail() {
            this.$emit('deleteEmail', this.email.id)
        }
    }
}


