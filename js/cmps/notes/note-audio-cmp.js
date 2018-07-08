
export default {
    props: ['data', 'id'],
    template: `
    <section class='note audio-note'>
        <h4>{{data.title}}</h4>
        <audio :src="data.audioSrc" id="player" controls @click.stop=""></audio>
    </section>
    `,
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}