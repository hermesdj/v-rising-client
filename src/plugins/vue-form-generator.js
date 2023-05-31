import Vue from 'vue';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import TimePickerField from "@/components/fields/TimePickerField.vue";

window.noUiSlider = noUiSlider;

Vue.component('fieldTimePicker', TimePickerField);

Vue.use(VueFormGenerator);
