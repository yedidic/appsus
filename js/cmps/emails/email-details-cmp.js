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
            <div class="ctrl-btns-container flex center-items">
                <router-link 
                    tag="button" 
                    to="/email" 
                    class="ctrl-btn back-btn">
                        <i class="fas fa-inbox"></i><span> Back to Inbox</span>
                </router-link>
                <router-link 
                    tag="button" 
                    to="/email"  
                    @click.native="deleteEmail" 
                    class="ctrl-btn">
                        <i class="fas fa-trash-alt"></i><span> Delete</span>
                </router-link>
                <router-link 
                    tag="button" 
                    :to="'/email/compose/reply/'+email.from.address+'/'+email.subject"
                    class="ctrl-btn">
                        <i class="fas fa-reply""></i><span> Reply</span>
                </router-link>
                <router-link 
                    tag="button" 
                    :to="'/email/compose/forward/'+email.id"
                    class="ctrl-btn">
                        <i  class="fas fa-arrow-left"></i><span> Forward</span>
                </router-link>
                    <router-link 
                    tag="button" 
                    to="/email/" 
                    @click.native="makeUnread"
                    class="ctrl-btn">
                        <i class="fas fa-envelope"></i><span> Make Unread</span>
                </router-link>
            </div>

            <pre class="subject"><h2>{{email.subject}}</h2></pre>
            <h3>From: {{email.from.name}} <{{email.from.address}}></h3>
            <h4>Sent: {{getFormattedDate}}</h4>
            <h3>To: {{email.to.name}} <{{email.to.address}}> </h3>
            <hr>
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
        emails() {
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
        },
        makeUnread() {
            emailService.changeEmailReadStatus(this.email.id, false);
        },
    },
    computed: {
        getFormattedDate() {
            return moment(this.email.sent).format(emailService.DATE_FORMAT)
        }
    }
}


