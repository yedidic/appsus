import notesService from '../services/notes-service.js'

export default {
    name: 'email',
    template: `
    <section class="notes-app">
        <button @click="goBack">Back to Appsus</button>
        <h1>Notes APp down here</h1>
        <ul>
            <li v-for="note in notes">
            <h4>{{note.title}}</h4>
            {{note.text}}
            </li>
        </ul>
        <!-- <component v-for:"note in notes" :is="note"></component> -->
    </section>
    `,
    data() {
        return {
            notes: []
        }
    },
    created() {
        notesService.query()
        .then((data) => {
            this.notes = data;
            console.log(this.notes);
        })  
    },
    methods: {
        goBack() {
			this.$router.push('/');
		}
    },
    components: {
        // textNote,
        // imgNote,
        // todoNote,
        // audioNote,
        // mapNote
    }

}