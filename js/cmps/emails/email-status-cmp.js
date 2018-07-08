
// Father: email-app-cmp

export default {
    name: 'email-status',
    props: ['emails'],
    template: `
    <section class="email-status" v-if="emails.length>0 " :class="{'no-mobile': $route.params.emailId }">
        <h4>{{statusPrecent}}</h4>
        <ul class="flex">       
            <li class="status-read" v-for="(n,idx) in isReadCount">
            &nbsp;
            </li>
            <li class="status-unread" v-for="(n,idx) in unReadCount">
            &nbsp;
            </li>
        </ul>
    </section>
                `,

    data() {
        return {
            isReadCount: 0,
            unReadCount: 0
        }
    },
    methods: {
        countRead(){
            this.isReadCount = 0;
            this.unReadCount = 0;
            this.emails.forEach(email => {
                if (email.isRead) this.isReadCount++
                else {
                    this.unReadCount++
                }
            });
            // this.unReadCount = this.emails.length - this.isReadCount;
        }
    },
    mounted() {
        this.countRead();
    },
    watch: {
        emails() {
            this.countRead();
        },
        '$route.params.emailId'(){
            // this.countRead();
        }
    },
    computed: {
        statusPrecent() {
            let str = (this.isReadCount / this.emails.length * 100).toFixed(2) + '% Done! 😇 ';
            if (this.unReadCount) str += this.unReadCount + ' New Email';
            if (this.unReadCount > 1) str += 's'
            return str;
        },

    }
}