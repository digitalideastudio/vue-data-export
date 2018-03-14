import VueDataExport from './VueDataExport.vue';

export default {
    install(Vue, options) {
        Vue.component('vue-data-export', VueDataExport);
    },
}
export { VueDataExport }
