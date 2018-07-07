import notesService from '../services/notes-service.js'
import textNote from '../cmps/notes/note-text-cmp.js'
import todoNote from '../cmps/notes/note-todo-cmp.js'

export default {
    name: 'email',
    template: `
    <section class="notes-app">
        <button @click="goBack">Back to Appsus</button>
        <h1>Notes:</h1>
        <div class="add-note-btns">
            <i class="fas fa-image" ></i>
            <i class="fas fa-pen-square" @click="$router.push('/notes/edit-add/text/')"></i>
            <i class="fas fa-list" @click="$router.push('/notes/edit-add/todo/')"></i>
        </div>
        <template v-for="note in notes">
        <div class="note-container">
            <button :class="['btn' ,'pin-note-btn', {'pin-btn-pinned':note.isPinned}]" 
                    @click.stop="pinNote(note)">
                <i class="fas fa-thumbtack"></i>
            </button>
            <component  
                :is="note.type" 
                :data="note.data" 
                :key="note.id" 
                :style="{'background-color': note.bgc}" 
                @click.native="editNote(note)">
            </component>
            <button class="btn delete-note-btn" @click="deleteNote(note.id)">X</button>
        </div>
        </template>
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
                // console.log(this.notes);
            })
    },
    methods: {
        goBack() {
            this.$router.push('/');
        },
        editNote(note) {
            let noteType = note.type.slice(0, -4);
            this.$router.push(`/notes/edit-add/${noteType}/${note.id}`);
        },
        deleteNote(id) {
            notesService.deleteNote(id)
        },
        pinNote(note) {
            notesService.handlePinNote(note)
        }
    },
    components: {
        textNote,
        todoNote,
        // audioNote,
        // mapNote
    }

}