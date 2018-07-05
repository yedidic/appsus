import notesService from '../../services/notes-service.js'

export default {
    template: `
    <section class='edit-add-txt'>
        <button @click="goBack">Back to notes</button>
        <input v-model="note.title"></input>
        <textarea contenteditable="true" v-model="note.txt"></textarea>
    </section>
    `,
    created() {
        console.log('hiii edit add');
        this.note = notesService.getById(this.$route.params.noteId);
    },    
    data() {
        return {
            note: null,
            // data: this.data
        }
    },
    methods: {
        goBack() {
			this.$router.push('/notes');
        },
    }
}