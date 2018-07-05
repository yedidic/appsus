
export default {
    props: ['id'],
    template: `
    <section class='edit-add-txt'>
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