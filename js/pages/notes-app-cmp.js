import notesService from '../services/notes-service.js'
import textNote from '../cmps/notes/note-text-cmp.js'
import todoNote from '../cmps/notes/note-todo-cmp.js'
import mapNote from '../cmps/notes/note-map-cmp.js'
import audioNote from '../cmps/notes/note-audio-cmp.js'

export default {
    name: 'notes-app',
    template: `
    <section class="notes-app">
        <button @click="goBack" class="btn">Back to Appsus</button>
        <header>
            <h1>Notes Appsus:</h1>
            <div class="actions-bar">
                <div class="add-note-btns">
                    <i class="fas fa-pen-square fa-2x" @click="$router.push('/notes/edit-add/text/')"></i>
                    <i class="fas fa-image fa-2x" @click="$router.push('/notes/edit-add/text/image')"></i>
                    <i class="fas fa-list fa-2x" @click="$router.push('/notes/edit-add/todo/')"></i>
                    <i class="fas fa-map-marked-alt fa-2x" @click="$router.push('/notes/edit-add/map/')"></i>
                    <i class="far fa-file-audio fa-2x" @click="$router.push('/notes/edit-add/audio/')"></i>
                </div>
                <div class="search-bar-container">
                    Search: <input type="search" class="search-input" v-model="filterBy">
                </div>
            </div>
        </header>
        <section class="notes-container">
            <div class="note-container" v-for="note in notes">
                <img v-if="note.isPinned" class="pin-note-btn" @click.stop="pinNote(note)" 
                    src="https://raw.githubusercontent.com/yedidic/appsus/master/img/pushed-pin-icon.png"/>
                <img v-else class="pin-note-btn" @click.stop="pinNote(note)" 
                    src="https://raw.githubusercontent.com/yedidic/appsus/master/img/unpushed-pin-icon.png"/>  
                <component :is="note.type" 
                            :data="note.data" 
                            :id="note.id" 
                            :key="note.id" 
                            :style="{'background-color': note.bgc}" 
                            @click.native="editNote(note)">
                </component>
                <button class="btn delete-note-btn" @click="deleteNote(note.id)">X</button>
            </div>
        </section>
        <footer></footer>
    <router-view></router-view>
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: ''
        }
    },
    created() {
        notesService.query()
            .then((data) => {
                this.notes = data;
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
    watch: {
        filterBy() {
            notesService.getNotesForDisplay(this.filterBy)
            .then((data) => {
                this.notes = data;
            })
        }
    },
    components: {
        textNote,
        todoNote,
        audioNote,
        mapNote,
    }

}