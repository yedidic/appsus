import notesService from '../../services/notes-service.js'
import mapService from '../../services/map-service.js'
// import eventBus, { SAVE_NOTE } from '../../services/event-bus.service.js'

export default {
    name: 'edit-add-text',
    template: `
    <transition name="fade">
        <div class="modal-backdrop" @click.self="goBack">
            <section class='edit-add-txt modal'>
                <button @click="goBack">Back to notes</button>
                <div class="edit-add-input">
                    <input v-model="note.data.title" placeholder="Title"></input>
                    <div class="loc-input-container flex">
                        <input v-model="addressInput" placeholder="Address"></input>
                        <button class="btn my-loc-btn" @click="loadMyLoc">
                            <i class="fas fa-location-arrow"></i>
                        </button>
                    </div>
                    <div id="map" style="width: 300px; height: 200px;" ref="map" @click.stop=""></div>
                </div>
                <input type="color" value="AB8BA8" v-model="note.bgc">
                <button @click="saveNote">Save</button>
            </section>
        </div>
    </transition>
    `,
    created() {
        let paramsId = this.$route.params.noteId;
        let originalNote = notesService.getById(paramsId);
        if (originalNote) {
            this.note = JSON.parse(JSON.stringify(originalNote))
        } else {
            this.note = notesService.getEmptyNote('mapNote')
        }
    },
    mounted() {
        this.loadAndRenderMap(this.note.data.loc.lat, this.note.data.loc.lng)
    },
    data() {
        return {
            note: null,
            addressInput: ''
        }
    },
    methods: {
        goBack() {
            this.$router.push('/notes');
        },
        loadAndRenderMap(latitude, longitude) {
            return mapService.loadMap('', latitude, longitude)
        },
        saveNote() {
            notesService.saveNote(this.note)
                .then(() => {
                    this.$router.push('/notes');
                })
        },
        loadMyLoc() {
            let coords
            mapService.getPosition()
            .then(res => {
                coords = res.coords;
                this.note.data.loc = {'lat': coords.latitude, 'lng': coords.longitude};
                this.loadAndRenderMap(coords.latitude, coords.longitude)
            }).catch(console.warn);
        }
    },
    watch: {
        addressInput() {
            mapService.searchByAddress(this.addressInput)
            .then((res) => {
                console.log(res);
                if (!res.results.length) return
                let loc = res.results[0].geometry.location;
                this.note.data.loc = loc;
                this.loadAndRenderMap(loc.lat, loc.lng)
        })
        }
    },
    components: {
    }
}
