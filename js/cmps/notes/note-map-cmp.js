import mapService from '../../services/map-service.js'

export default {
    props: ['data', 'id'],
    template: `
    <section class='note map-note'>
        <h4>{{data.title}}</h4>
        <div :id="'map' + id" style="width: 300px; height: 200px;" @click.stop=""></div>
    </section>
    `,
    data() {
        return {
            // loc: this.data.loc
        }
    },
    mounted() {
        this.loadAndRenderMap(this.data.loc.lat, this.data.loc.lng)
    },
    methods: {
        loadAndRenderMap(latitude, longitude) {
            return mapService.loadMap(this.id, latitude, longitude)
            .then(() => {
                mapService.addMarker(this.data.loc)
            })
        },
    },
    watch: {
        data() {
            this.loadAndRenderMap(this.data.loc.lat, this.data.loc.lng)
        }
    }
}