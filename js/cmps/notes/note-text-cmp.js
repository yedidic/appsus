
export default {
    props: ['data', 'id'],
    template: `
    <section class='note text-note'>
        <h4 v-html="data.title"></h4>
        <img v-if="data.imgUrl" :src="data.imgUrl" class="note-image"/> </br>
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
        var titleText = this.data.title;
        var result = titleText.replace(email_regex,'<a href="index.html#/email/compose/reply/$1/">$1</a>');
        this.data.title = result;
        console.log(result); // This two lines are enough.
    },
    methods: {
    }
}