import notesService from '../../services/notes-service.js'
// import eventBus, { SAVE_NOTE } from '../../services/event-bus.service.js'

export default {
    template: `
    <transition name="fade">
        <div class="modal-backdrop" @click.self="goBack">
            <section class='edit-add-txt modal'>
                <button @click="goBack">Back to notes</button>
                <div class="edit-add-input">
                    <input v-model="note.data.title"></input>
                    <textarea v-model="note.data.text"></textarea>
                    <img v-if="note.data.imgUrl && !imageInputShown" :src="note.data.imgUrl"/>
                    <canvas v-if="uploadedImg" ref="canvas"/>
                    <!-- <div v-if="imageInputShown" class="flex"> -->
                    <picture-input v-if="imageInputShown" 
                                    ref="pictureInput"
                                    width="400" 
                                    height="300" 
                                    :crop="false"
                                    margin="16" 
                                    accept="image/jpeg,image/png" 
                                    size="5" 
                                    button-class="btn" >
                    </picture-input>
                    <!-- <input type="text" v-model="enteredImgUrl" placeholder="Enter an image url"> -->
                    <!-- <input type="file" @change="onFileUpload" @click="getReadyForUpload"> -->
                    <!-- <i class="fas fa-file-upload"></i> -->
                    <!-- </input> -->
                <!-- </div> -->
                    <i class="far fa-image" @click="imageInputShown = true"></i>
                </div>
                <input type="color" value="AB8BA8" v-model="note.bgc">
                <button @click="saveNote">Save</button>
                <!-- <pre>
                    {{note}}
                </pre> -->
            </section>
        </div>
    </transition>
    `,
    created() {
        let paramsId = this.$route.params.noteId;
        this.note = notesService.getById(paramsId);
        if (!this.note) {
            if (paramsId === 'image') {
                this.imageInputShown = true;
            }
            this.note = notesService.getEmptyNote('textNote')
        }
    },
    mounted() {
        // jscolor.bind()    
    },
    data() {
        return {
            note: null,
            imageInputShown: false,
            enteredImgUrl: '',
            uploadedImg: null
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
            if (this.$refs.pictureInput) {
                this.note.data.imgUrl = this.$refs.pictureInput.image
            }
            notesService.saveNote(this.note)
                .then(() => {
                    this.$router.push('/notes');
                })
        }
    },
    components: {
        'picture-input': PictureInput
      }
}
