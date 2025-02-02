import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { ContentGeneral as IContentGeneral } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/contentGeneral/ContentGeneral';
import WithRender from './content-general.vue.html';

@WithRender
@Component({
    name: 'ContentGeneral',
})

export default class GeneralContent extends Vue implements IContentGeneral {
    @Prop({ type: String, required: true }) title!: IContentGeneral['title'];
    @Prop({ type: String, required: true }) description!: IContentGeneral['description'];
    @Prop({ type: Object }) cta?: IContentGeneral['cta'] | undefined;
    @Prop({ type: Object }) image?: IContentGeneral['image'] | undefined;
    @Prop({ type: Boolean, required: true }) reversed!: IContentGeneral['reversed'];

    getClassNames(type): string {
        return {
            ContentButton: 'content-general__button button',
            ContentLink: 'content-general__link link link--medium',
            YoutubeLink: 'content-general__link link link--medium',
        }[type] || '';
    }
}
