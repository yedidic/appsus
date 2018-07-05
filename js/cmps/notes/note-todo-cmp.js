
export default {
    props: ['data'],
    template: `
    <section class='note todo-note'>
        <h4>{{data.title}}</h4>
        <ul>
            <li v-for="todo in data.todos" @click.stop="todoClicked(todo)" :class="{'todo-done': todo.isDone}">
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
        // console.log(this.data);
        
    },
    methods: {
        todoClicked(todo) {
            todo.isDone = !todo.isDone
            // console.log(todo);
        }
    }
}