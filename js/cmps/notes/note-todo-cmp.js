
export default {
    props: ['data'],
    template: `
    <section class='note todo-note'>
        <h4>{{data.title}}</h4>
        <ul>
            <li v-for="todo in data.todos">
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
        console.log(this.data);
        
    }
}