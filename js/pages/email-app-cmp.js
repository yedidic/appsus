import emailList from '../cmps/emails/email-list-cmp.js'

export default {
    name: 'email-app',
    template: `
    <section class="email-app">
        <button class="compose-btn">Compose</button>
        <main class="flex">
            <email-list class="flex column">
                <!-- <email-filter></email-filter>
                <email-preview></email-preview> -->
            </email-list>

            <!-- <email-details class="no-mobile"></email-details> -->
        </main>
        <!-- <email-status></email-status> -->
    </section>
    `,
    methods: {
        goBack() {
			this.$router.push('/');
		}
    },
    components:{
        emailList
    }
}