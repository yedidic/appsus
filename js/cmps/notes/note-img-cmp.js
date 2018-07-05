
export default {
    props: ['data'],
    template: `
    <section class='note img-note'>
        <h4>{{data.title}}</h4>
        <img :src="data.imgUrl"/>
    </section>
    `,
    data() {
        return {
            // data: this.data
        }
    },
    created() {
        // console.log(this.data);
        
    }
}