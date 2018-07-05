
export default {
    props: ['data'],
    template: `
    <section class='note text-note'>
        <h4>{{data.title}}</h4>
        {{data.text}}
    </section>
    `,
    data() {
        return {
            // data: this.data
        }
    }
}