
export default {
    props: ['data', 'id'],
    template: `
    <section class='note text-note'>
        <h4 v-html="data.title"></h4>
        <div v-if="data.imgUrl" class="img-container">
            <img :src="data.imgUrl" class="note-image"/>
        </div>
        {{data.text}}
        <span class="time-note">{{timeNote}}</span>
    </section>
    `,
    data() {
        return {
            // data: this.data
        }
    },
    computed: {
        timeNote: function() {
            return moment.unix(this.data.time).format('dddd, MMMM Do YYYY, h:mm:ss a');
        }
    },
    created() {
        var email_regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
        var title = this.data.title;
        if (!title.includes('<a href="index.html#/email/compose/reply')) {
            this.data.title = title.replace(email_regex,'<a href="index.html#/email/compose/reply/$1/" target="_blank">$1</a>');
        }
        var text = this.data.text;
        if (!text.includes('<a href="index.html#/email/compose/reply')) {
            this.data.text = text.replace(email_regex,'<a href="index.html#/email/compose/reply/$1/" target="_blank">$1</a>');        
        } 
    },
    methods: {
    }
}