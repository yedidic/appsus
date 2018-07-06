// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;
import emailService from '../../services/email-service.js';


export default {
    name: 'email-details',
    template: `
    <section class="email-detaills flex column">
        Mami Mitranderet
       <pre> {{email}} </pre>
       <h2>{{email.subject}}</h2>
       <h3 v-if="email.from">From: {{email.from.name}} <{{email.from.address}}></h3>
       <h4>Sent: {{email.sent}}</h4>
       <!-- Why need for V-if??? -->
       <h3 v-if="email.to">To: {{email.to.name}} <{{email.to.address}}> </h3>
       <p>{{email.msg}}</p>
    </section>
                `,

    data() {
        return {
            email: {}
        }
    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            if (!newEmailId) this.loadFirstIdxEmail()
            this.loadEmail();
        }
    },
    created() {
        this.loadFirstIdxEmail()    
        
    },
    mounted() {
    },
    methods: {
        loadEmail() {
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