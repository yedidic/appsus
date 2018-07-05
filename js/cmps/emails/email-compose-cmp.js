// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;
import emailService from '../../services/email-service.js';


export default {
    name: 'email-compose',
    template: `
    <section class="email-compose flex column">
       <form>
           
       </form>
       <pre> {{email}} </pre>
    </section>
                `,

    data() {
        return {
            email: {}
        }
    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            console.log('$route.params.emailId has changed!', newEmailId);
            if (!newEmailId) this.loadFirstIdxEmail()
            else this.loadEmail();
        }
    },
    created() {
        this.loadFirstIdxEmail()
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