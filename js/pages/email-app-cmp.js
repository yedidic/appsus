import emailService from '../services/email-service.js';

import emailDetails from '../cmps/emails/email-details-cmp.js'
import emailList from '../cmps/emails/email-list-cmp.js'
import emailFilter from '../cmps/emails/email-filter-cmp.js'

export default {
    name: 'email-app',
    template: `
    <section class="email-app">
    <router-link tag="button" to="/email/compose" class="compose-btn">Compose</router-link>
    <header>
    <h1>Email Appsus</h1>
    </header>
    <main class="flex">
            <div class="flex column email-list-container" 
            :class="{'no-mobile': isEmailIdInUrl}">
                    <email-filter 
                    :emails="emails" 
                    @filter="setFilter"
                    ></email-filter>
                    <email-list :emails="emailsToShow" class="flex column" @opened="loadEmails">
                    </email-list>
            </div>

            <email-details :class="{'no-mobile': !isEmailIdInUrl}"></email-details>
    </main>
        <!-- <email-status></email-status> -->
    </section>
    `,

    methods: {
        goBack() {
            this.$router.push('/');
        },
        setFilter(filtBy) {
            this.filterBy = filtBy;
        },
        loadEmails(){
            emailService.query()
           .then(emails => {
               this.emails = emails
           })
       }
    },
    data() {
        return {
            emails: [],
            filterBy: {
                txt: '',
                ctg: 'all'
            },
            isEmailIdInUrl: false
        }
    },
    created() {
        this.loadEmails()
    },
    computed: {
        emailsToShow() {
            let filteredEmails = this.emails.filter(email => {
                let txtFilter = this.filterBy.txt.toLowerCase();

                return ((this.filterBy.ctg === 'all')
                    || (email.isRead && this.filterBy.ctg === 'read')
                    || (!email.isRead && this.filterBy.ctg === 'unread'))
                    && ((email.subject.toLowerCase().includes(txtFilter))
                        || (email.msg.toLowerCase().includes(txtFilter))
                        || (email.from.name.toLowerCase().includes(txtFilter))
                        || (email.from.address.toLowerCase().includes(txtFilter))
                        || (email.to.address.toLowerCase().includes(txtFilter))
                        || (email.to.name.toLowerCase().includes(txtFilter)));
            })
            return filteredEmails;
        },
    },
    components: {
        emailList,
        emailFilter,
        emailDetails
    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            if(!newEmailId) this.isEmailIdInUrl = false;
            else this.isEmailIdInUrl = true;
        }
    }
}