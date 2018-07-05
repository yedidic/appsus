

export default {
    name: 'email-app',
    template: `
    <section class="email-app">
        <h1>Email APP down here</h1>
        <button @click="goBack">Back to Appsus</button>
    </section>
    `,
    methods: {
        goBack() {
			this.$router.push('/');
		}
    }
}