import Vue from 'vue';
import Component from 'vue-class-component';
import { Face as FaceData } from '../data/face';
import { textFit } from '../util/textFit';

@Component({
  props: {
    face: Object,
    titleDescription: Boolean,
  }
})
export default class Face extends Vue {
  face: FaceData;
  popupActive = false;
  mounted() {
    // Don't do this for titleDescriptions which are big anyway.
    if (!this.$props.titleDescription) {
      textFit(this.$el.getElementsByClassName("description"), {
        minFontSize: 10,
      });
    };
  }
};
