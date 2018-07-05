// on mobile
//Display none by id - id===true => email-status &  email-list - style.display=none
// no-id => email-details => display: none;

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <section class="email-preview flex center-items">
        <i class="fas fa-envelope-open" v-if="email.isRead"></i>
        <i class="fas fa-envelope" v-else></i>
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
}