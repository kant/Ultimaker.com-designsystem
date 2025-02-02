import { Vue, Component, Prop } from 'vue-property-decorator';
import { CtaBlockProps } from './cta-block.models';
import WithRender from './cta-block.vue.html';

@WithRender
@Component({
    name: 'CtaBlock',
})

export default class CtaBlock extends Vue implements CtaBlockProps {
    @Prop({ type: Array, required: true }) ctas!: CtaBlockProps['ctas'];
    @Prop({ type: String }) mod?: CtaBlockProps['mod'];
    @Prop({ type: String }) styleContentButton?: CtaBlockProps['styleContentButton'];
    @Prop({ type: String }) styleContentLink?: CtaBlockProps['styleContentLink'];
    @Prop({ type: String }) modContentLink?: CtaBlockProps['modContentLink'];
    @Prop({ type: String }) modContentButton?: CtaBlockProps['modContentButton'];

    modifiers: object = {
        ContentButton: this.modContentButton || 'primary',
        ContentLink: this.modContentLink || 'large',
    };

    classes: object = {
        ContentButton: this.styleContentButton || 'button',
        ContentLink: this.styleContentLink || 'link',
    };

    modifier(type: string) {
        return this.modifiers[type];
    }

    classObject(type: string) {
        return `${this.classes[type]} cta-link`;
    }

    get classMod() {
        const classes = {};

        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`cta-block--${mod}`] = true;
            });
        }

        return classes;
    }
}
