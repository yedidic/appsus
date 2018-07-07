import notesService from '../../services/notes-service.js'
// import eventBus, { SAVE_NOTE } from '../../services/event-bus.service.js'

export default {
    template: `
    <transition name="fade">
        <div class="modal-backdrop" @click.self="goBack">
            <section class='edit-add-todo modal'>
                <button @click="goBack">Back to notes</button>
                <div class="edit-add-input">
                    <input v-model="note.data.title"></input>
                    <div class="flex" v-for="(todo, todoIdx) in note.data.todos">
                        <button @click="deleteTodo(todoIdx)">X</button>
                        <input type="text" v-model="todo.txt" :class="{'todo-done': todo.isDone}"/>
                        <i v-if="todo.isDone" class="far fa-check-square" @click="toggleTodoIsDone(todo)"></i>
                        <i v-else class="far fa-square" @click="toggleTodoIsDone(todo)"></i>
                    </div>
                    <button @click="addTodo">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <input type="color" value="AB8BA8" v-model="note.bgc">
                <button @click="saveNote">Save</button>

                <!-- <pre>
                    {{note}}
                </pre> -->
            </section>
        </div>
    </transition>
    `,
    created() {
        let originalNote = notesService.getById(this.$route.params.noteId);
        this.note = JSON.parse(JSON.stringify(originalNote))
        console.log(this.note);
        if (!this.note) {
            this.note = notesService.getEmptyNote('todoNote')
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
        // thingClicked() {
        //     console.log('click!');
        // },
        goBack() {
            this.$router.push('/notes');
        },
        addTodo() {
            let newTodo = {txt:'', isDone: false}
            this.note.data.todos.push(newTodo)
        },
        deleteTodo(idx) {
            this.note.data.todos.splice(idx, 1)
        },
        saveNote() {
            notesService.saveNote(this.note)
                .then(() => {   
                    this.$router.push('/notes');
                })
        },
        toggleTodoIsDone(todo) {
            todo.isDone = !todo.isDone
        }
    },
    components: {
        'picture-input': PictureInput
      }
}
