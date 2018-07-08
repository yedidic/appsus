import notesService from '../../services/notes-service.js'

export default {
    props: ['data', 'id'],
    template: `
    <section class='note todo-note'>
        <h4 v-html="data.title"></h4>
        <ul>
            <li v-for="todo in data.todos" @click.stop="toggleTodoIsDone(todo)" :class="{'todo-done': todo.isDone}">
                <i v-if="todo.isDone" class="far fa-check-square"></i>
                <i v-else class="far fa-square"></i>
                <span v-html="todo.txt">
                </span>
            </li>
        </ul>
        <span class="time-note">{{timeNote}}</span>
    </section>
    `,
    data() {
        return {
            // data: this.data
        }
    },
    created() {
        var email_regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
        var title = this.data.title;
        if (!title.includes('<a @click.native="" href="index.html#/email/compose/reply')) {
            this.data.title = title.replace(email_regex,'<a @click.native="" href="index.html#/email/compose/reply/$1/" target="_blank">$1</a>');
        }
        this.data.todos.forEach(todo => {
            if (!todo.txt.includes('<a @click.native="" href="index.html#/email/compose/reply')) {
                todo.txt = todo.txt.replace(email_regex,'<a @click.native="" href="index.html#/email/compose/reply/$1/" target="_blank">$1</a>');        
            }
        })
    },
    computed: {
        timeNote: function() {
            return moment.unix(this.data.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
        }
    },
    methods: {
        toggleTodoIsDone(todo) {
            notesService.toggleTodoIsDone(todo)
        },
    }
}