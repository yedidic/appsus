// on mobile:
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;
import emailService from '../../services/email-service.js';


export default {
    name: 'email-compose',
    template: `
    <section class="email-compose">
    <router-link tag="button" to="/email/" class="back-btn btn"><i class="fas fa-inbox"></i> Back to Inbox</router-link>
       <form class="flex column">
            <h1>{{title}}</h1>
            <label>Subject: <input type="text" v-model="email.subject" placeholder="Subject"/></label>
            <label>To: 
            <input 
            type="email" 
            v-model="email.to.address" 
            placeholder="To" 
            :class="{'reply-address': isReplyAddress}"/></label>
            <textarea v-model="email.msg" placeholder="Enter your message here"></textarea>  

            <router-link class="btn" to="/email" @click.native.prevent="setNewEmail" tag="button">Send!</router-link>
       </form>
    </section>
                `,

    data() {
        return {
            email: {
                subject: '',
                from: { name: 'Me MaMi', address: 'me@me.com' },
                sent:'',
                to: { name: '', address: '' },
                msg: '',
                isRead: false
            },
            title: 'Compose Mail'
        }
    },
    methods: {
        setNewEmail() {
            this.email.sent = moment().format(emailService.DATE_FORMAT);
            emailService.setNewEmail(this.email)
                .then(() =>
                    console.log('New Email Sent!'))
        },
        getMailToForward() {
            emailService.getById(this.$route.params.emailId)
                .then((email) => {
                    if (email){
                        this.email.subject = 'Fw: ' + email.subject
                        this.email.msg = email.msg;
                    } 
                })
        }
    },
    created() {
        if (this.$route.params.replyTo) {
            this.email.to.address = this.$route.params.replyTo;
            if(this.$route.params.subject){
                this.title = 'Reply';
                this.email.subject = 'Re: ' + this.$route.params.subject;
            } 
        }
        else if (this.$route.params.emailId) {
            this.getMailToForward()
        }
    },
    computed: {
        isReplyAddress() {
            return this.email.to.address === this.$route.params.replyTo &&
                this.title === 'Reply';
        }

    }


}