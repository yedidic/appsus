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
        <input type="color" value="AB8BA8" v-model="note.bgc">
        <!-- <input class="jscolor" v-model="note.bgc"> -->
        <!-- <jscolor v-model="note.bgc"></jscolor> -->
        <button @click="saveNote">Save</button>

        <pre>
            {{note}}
        </pre>
    </section>
    `,
    created() {
        this.note = notesService.getById(this.$route.params.noteId);
        if (!this.note) {
            this.note = notesService.getEmptyNote('textNote')
        }
    },
    mounted() {
        // jscolor.bind()    
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
    },
}
