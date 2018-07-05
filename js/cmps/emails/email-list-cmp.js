import emailService from '../../services/email-service.js'

import emailPreview from './email-preview-cmp.js'

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
    <section class="email-list">
        <ul>
            <li v-for="(email, idx) in emails" :key="email.id">
                <router-link :to="'/email/'+email.id" @click.native="makeUnread(email.id)">
                <email-preview :email="email"></email-preview>
                </router-link>
            </li>
        </ul>
    </section>
    `,


    mounted() {
    },
    methods: {
        makeUnread(emailId) {
            emailService.changeEmailReadStatus(emailId)
                .then(() => this.$emit('opened')
                )
        }
    },
    components: {
        emailPreview
    },
    watch: {

    }


}