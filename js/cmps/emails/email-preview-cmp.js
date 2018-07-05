


export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <section class="email-preview flex">
        <i class="fas fa-envelope-open" v-if="email.isRead"></i>
        <i class="fas fa-envelope-close" v-else></i>
    <div class="flex column">
            <h4 class="email-subj">{{email.subject}}</h4>
            <h4>{{email.from.name}}</h4>
        </div>
        <h5>{{email.sent}}</h5>
    </section>
                `,

    data() {
        return {
        }
    },

    created() {
        this.getImgUrl()
    },
    mounted() {
    },
    methods: {
    },
    components: {
    }


}