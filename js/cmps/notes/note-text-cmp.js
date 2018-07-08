
export default {
    props: ['data', 'id'],
    template: `
    <section class='note text-note'>
        <h4 v-html="data.title"></h4>
        <img v-if="data.imgUrl" :src="data.imgUrl" class="note-image"/>
        {{data.text}}
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
        var text = this.data.text;
        if (!text.includes('/email/compose/reply')) {
            this.data.text = text.replace(email_regex,'<a href="index.html#/email/compose/reply/$1/" target="_blank">$1</a>');        
        } 
    },
    methods: {
    }
}