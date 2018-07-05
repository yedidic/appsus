


export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <section class="email-preview flex">
        <img :src="imgSrc"/>
        <div class="flex column">
            <h4 class="email-subj">{{email.subject}}</h4>
            <h4>{{email.from.name}}</h4>
        </div>
        <h5>{{email.sent}}</h5>
    </section>
                `,

    data() {
        return {
            imgSrc: ''
        }
    },

    created() {
        this.getImgUrl()
    },
    mounted() {
    },
    methods: {
        getImgUrl() {
            if (this.email.isRead) this.imgSrc = 'img/email/read-icon.png'
            else this.imgSrc = 'img/email/unread-icon.png'
        }
    },
    components: {
    }


}