
export default {
    props: ['data', 'id'],
    template: `
    <section class='note audio-note'>
        <h4>{{data.title}}</h4>
        <audio :src="data.audioSrc" id="player" controls @click.stop=""></audio>
        <span class="time-note">{{timeNote}}</span>
    </section>
    `,
    computed: {
        timeNote: function() {
            return moment.unix(this.data.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
        }
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}