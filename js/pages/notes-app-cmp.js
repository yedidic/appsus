

export default {
    name: 'email',
    template: `
    <section class="notes-app">
        <button @click="goBack">Back to Appsus</button>
        <h1>Notes APp down here</h1>
    </section>
    `,
    methods: {
        goBack() {
			this.$router.push('/');
		}
    }

}