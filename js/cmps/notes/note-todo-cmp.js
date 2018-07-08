import notesService from '../../services/notes-service.js'

export default {
    props: ['data', 'id'],
    template: `
    <section class='note todo-note'>
        <h4>{{data.title}}</h4>
        <ul>
            <li v-for="todo in data.todos" @click.stop="toggleTodoIsDone(todo)" :class="{'todo-done': todo.isDone}">
                <i v-if="todo.isDone" class="far fa-check-square"></i>
                <i v-else class="far fa-square"></i>
                {{todo.txt}}
            </li>
        </ul>
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
        if (!title.includes('/email/compose/reply')) {
            this.data.title = title.replace(email_regex,'<a href="index.html#/email/compose/reply/$1/" target="_blank">$1</a>');
        }
        this.data.todos.forEach(todo => {
            if (!todo.txt.includes('/email/compose/reply')) {
                this.todo.txt = this.todo.txt.replace(email_regex,'<a href="index.html#/email/compose/reply/$1/" target="_blank">$1</a>');        
            }
        })
    },
    methods: {
        toggleTodoIsDone(todo) {
            notesService.toggleTodoIsDone(todo)
        },
    }
}