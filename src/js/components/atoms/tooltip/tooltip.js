import Vue from 'vue';

export default Vue.component('tooltip', {
    name: 'tooltip',
    template: require('./tooltip.html'),
    props: {
        block: {
            type: String,
            default: ''
        }
    },
    computed: {
        classObject() {
            const classes = {};

            if (this.block !== '') {
                classes[`${ this.block }__tooltip`] = true;
            }

            return classes;
        }
    }
});
