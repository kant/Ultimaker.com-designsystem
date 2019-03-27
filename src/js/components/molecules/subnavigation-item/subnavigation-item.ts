import { Component, Prop, Vue } from 'vue-property-decorator';
import { SubNavigationItem as ISubNavigationItem } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/SubNavigationItem';

@Component({
    name: 'SubNavigationItem',
    template: require('./subnavigation-item.html'),
})

export default class SubNavigationItem extends Vue implements ISubNavigationItem {
    @Prop({ type: String, required: true }) url!: ISubNavigationItem['url'];
    @Prop({ type: Object, required: true }) image!: ISubNavigationItem['image'];
    @Prop({ type: String, required: true }) label!: ISubNavigationItem['label'];
}