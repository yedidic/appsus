// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;
import emailService from '../../services/email-service.js';


export default {
    name: 'email-details',
    template: `
    <section class="email-details flex column">
    <router-link tag="button" to="/email">Back to List</router-link>
       <h2>{{email.subject}}</h2>
       <h3>From: {{email.from.name}} <{{email.from.address}}></h3>
       <h4>Sent: {{email.sent}}</h4>
       <h3>To: {{email.to.name}} <{{email.to.address}}> </h3>
       <div class="pre-wrapper">
            <pre>{{email.msg}}</pre>
       </div>
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
            mobileMode: false
        }
    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            // console.log('id changed', newEmailId)
            // if (!newEmailId) this.loadFirstIdxEmail()
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
            emailService.getById(this.$route.params.emailId)
                .then(email => this.email = email)
        },
        loadFirstIdxEmail() {
            emailService.query()
                .then(emails => {
                    this.email = emails[0]
                })
        }
    }


}