import notesService from '../services/notes-service.js'
import textNote from '../cmps/notes/note-text-cmp.js'
import todoNote from '../cmps/notes/note-todo-cmp.js'

export default {
    name: 'email',
    template: `
    <section class="notes-app">
        <button @click="goBack">Back to Appsus</button>
        <h1>Notes APp down here</h1>
        <i class="fas fa-image"></i>
        <i class="fas fa-pen-square"></i>
        <i class="fas fa-list"></i>
        <component v-for="note in notes" :is="note.type" :data="note.data" :key="note.key"></component>
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
        textNote,
        todoNote,
        // audioNote,
        // mapNote
    }

}