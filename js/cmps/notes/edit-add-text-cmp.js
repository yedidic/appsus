import notesService from '../../services/notes-service.js'
// import eventBus, { SAVE_NOTE } from '../../services/event-bus.service.js'

export default {
    template: `
    <section class='edit-add-txt'>
        <button @click="goBack">Back to notes</button>
        <div class="edit-add-input">
            <input v-model="note.data.title"></input>
            <textarea v-model="note.data.text"></textarea>
            <img v-if="note.data.imgUrl" :src="note.data.imgUrl"/>
        </div>
        <button @click="saveNote">Save</button>
    </section>
    `,
    created() {
        this.note = notesService.getById(this.$route.params.noteId);
        if (!this.note) {
            this.note = notesService.getEmptyNote('textNote')
        }
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
        saveNote() {
            notesService.saveNote(this.note)
            .then(() => {
                this.$router.push('/notes');
            })
        }
    }
}