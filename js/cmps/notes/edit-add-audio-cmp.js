import notesService from '../../services/notes-service.js'
// import eventBus, { SAVE_NOTE } from '../../services/event-bus.service.js'

export default {
    name: 'edit-add-audio',
    template: `
    <transition name="fade">
        <div class="modal-backdrop" @click.self="goBack">
            <section class='edit-add-audio modal'>
                <button @click="goBack">Back to notes</button>
                <div class="edit-add-input">
                    <input v-model="note.data.title" placeholder="Title"></input>
                    <audio :src="note.data.audioSrc" id="player" controls @click.stop=""></audio>
                    <input type="file" @change="onFileUpload" ref="audioUpload">
                    <input type="text" v-model="enteredAudioUrl" placeholder="Or enter an audio url">
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
            this.note = notesService.getEmptyNote('audioNote')
        }
    },
    mounted() {
        // jscolor.bind()    
    },
    data() {
        return {
            note: null,
            enteredAudioUrl: ''
            // data: this.data
        }
    },
    methods: {
        // thingClicked() {
        //     console.log('click!');
        // },
        goBack() {
            this.$router.push('/notes');
        },
        saveNote() {
            if (this.enteredAudioUrl) {
                console.log('this.enteredAudioUrl:', this.enteredAudioUrl);
                
                this.note.data.audioSrc = this.enteredAudioUrl
            }
            notesService.saveNote(this.note)
                .then((res) => {
                    this.$router.push('/notes');
                    console.log('saved notes:', res);
                    
                })
        },
        onFileUpload(ev) {
            var that = this
            var reader = new FileReader();
            reader.onload = function() { 
                var srcBase64 = this.result;
                that.note.data.audioSrc = srcBase64
            }
            reader.readAsDataURL(ev.target.files[0]); 
        }
    },
    components: {
        'picture-input': PictureInput
      }
}
