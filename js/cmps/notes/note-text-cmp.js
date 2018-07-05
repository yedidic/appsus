
export default {
    props: ['data'],
    template: `
    <section class='note text-note'>
        <h4>{{data.title}}</h4>
        <img v-if="data.imgUrl" :src="data.imgUrl"/>
        {{data.text}}
    </section>
    `,
    data() {
        return {
            // data: this.data
        }
    },
    methods: {
    }
}