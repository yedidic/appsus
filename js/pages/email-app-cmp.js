import emailService from '../services/email-service.js';

import emailDetails from '../cmps/emails/email-details-cmp.js'
import emailList from '../cmps/emails/email-list-cmp.js'
import emailFilter from '../cmps/emails/email-filter-cmp.js'

export default {
    name: 'email-app',
    template: `
    <section class="email-app">
        <button class="compose-btn">Compose</button>
        <main class="flex">
            <div class="flex column">
                    <email-filter 
                    :emails="emails" 
                    @filter="setFilter"
                    ></email-filter>
                    <email-list :emails="emailsToShow" class="flex column">
                    </email-list>
            </div>

            <email-details class="no-mobile"></email-details>
        </main>
        <!-- <email-status></email-status> -->
    </section>
    `,

    methods: {
        goBack() {
            this.$router.push('/');
        },
        setFilter(filtBy) {
            console.log('filtering...', filtBy)
            this.filterBy = filtBy;
        }
    },
    data() {
        return {
            emails: [],
            filterBy: {
                txt: '',
                ctg: 'all'
            }
        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })

        // this.emails = this.emailsToShow;
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
                        || (email.from.email.toLowerCase().includes(txtFilter))
                        || (email.to.email.toLowerCase().includes(txtFilter))
                        || (email.to.name.toLowerCase().includes(txtFilter)));
            })
            return filteredEmails;
        }
    },
    components: {
        emailList,
        emailFilter,
        emailDetails
    },
}