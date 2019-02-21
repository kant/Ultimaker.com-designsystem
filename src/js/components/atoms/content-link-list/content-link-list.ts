import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentLink } from 'components/atoms/content-link/content-link.models';
import { IContentLinkListProps } from 'components/atoms/content-link-list/content-link-list.models';

@Component({
    name: 'content-link-list',
    template: require('./content-link-list.html'),
})

export default class ContentLinkList extends Vue implements IContentLinkListProps {
    @Prop({ type: String, required: true }) block!: string;
    @Prop({ type: Array, default: [] }) links!: IContentLink[];
}