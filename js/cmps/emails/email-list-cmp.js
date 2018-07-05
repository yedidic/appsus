import emailService from '../../services/email-service.js';
import emailPreview from './email-preview-cmp.js'


export default {
    name: 'email-list',
    template: `
    <section class="email-list">
        <ul>
            <!-- <email-filter></email-filter> -->
            <li v-for="(email, idx) in emails" :key="email.id">
                <!-- router-link inside -->
                <email-preview :email="email"></email-preview>
            </li>
        </ul>
    </section>
    `,
                
    data() {
        return {
            emails: []
        }
    },

    created() {
        emailService.query()
            .then(emails => {                 
                this.emails = emails 
            console.log('emails', emails)})
    },
    mounted() {
    },
    methods: {
    },
    components: {
        emailPreview
    }


}