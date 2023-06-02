import Vue from 'vue';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import TimePickerField from "@/components/fields/TimePickerField.vue";
import VueMultiSelect from "vue-multiselect";
import 'vue-multiselect/dist/vue-multiselect.min.css';

window.noUiSlider = noUiSlider;

// eslint-disable-next-line
Vue.component('multiselect', VueMultiSelect);
Vue.component('fieldTimePicker', TimePickerField);

Vue.use(VueFormGenerator);
