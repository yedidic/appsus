// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;
import emailService from '../../services/email-service.js';


export default {
    name: 'email-compose',
    template: `
    <section class="email-compose">
    <router-link tag="button" to="/email/" class="back-btn">Back</router-link>
       <form class="flex column">
            <label>Subject<input type="text" v-model="email.subject" placeholder="Subject"/></label>
            <label>To<input type="email" v-model="email.to.address" placeholder="To"/></label>
            <textarea v-model="email.msg" placeholder="Enter your message here"></textarea>  

            <router-link to="/email" @click.native.prevent="setNewEmail" tag="button">Send!</router-link>
       </form>
       <pre> {{email}} </pre>
    </section>
                `,

    data() {
        return {
            email: {
                subject: '',
                from: { name: 'Me MaMi', address: 'me@me.com' },
                sent: moment().format('lll'),
                to: { name: '', address: '' },
                msg: '',
                isRead: false
            }
        }
    },
    methods: {
        setNewEmail() {
            this.email.sent = moment().format('lll');
            emailService.setNewEmail(this.email)
                .then(() =>
                    console.log('New Email Sent!'))
        }
    }


}