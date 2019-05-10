import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'FooterBlock',
    template: require('./footer-block.vue.html'),
})

export default class FooterBlock extends Vue {
    @Prop({ type: Object, required: false }) ctas?: object;
}
