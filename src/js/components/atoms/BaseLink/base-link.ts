import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Events from 'constants/events';
import WithRender from './base-link.vue.html';

@WithRender
@Component({
    name: 'base-link',
})

export default class BaseLink extends Vue {
    @Prop({ type: String }) type?: string;
    @Prop({ type: String }) block?: string;
    @Prop({ type: String }) mod?: string;
    @Prop({ type: String }) icon?: string;
    @Prop({ type: String }) url?: string;
    @Prop({ type: String }) label?: string;
    @Prop({ type: Object }) clickEvent?: any;

    absoluteUrlRegex: RegExp = /^(http(s)?):\/\//;
    domainRegex: RegExp = /(http(s)?):\/\/(www.)?ultimaker\.com/;
    $emitPublic;
    $route;

    get urlTarget() {
        if (this.url) {
            return this.url.match(this.domainRegex) ? '_self' : '_blank';
        }
        return '';
    }

    get slots() {
        return this.$slots &&
            this.$slots.default &&
            this.$slots.default.length;
    }

    get classObject() {
        const classes = {};

        if (this.block !== '' && typeof this.block === 'string') {
            classes[`${this.block}__link`] = true;
        }
        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`link--${mod}`] = true;
            });
        }
        if (this.icon !== '' && typeof this.icon === 'string') {
            classes['link--icon'] = true;
        }

        return classes;
    }

    get linkProps(): object {
        if (this.url && this.url.match(this.absoluteUrlRegex)) {
            return {
                is: 'a',
                href: this.url,
                target: this.urlTarget,
                rel: 'noopener',
            };
        }
        return {
            is: 'router-link',
            to: this.url,
            ref: 'link',
        };
    }

    get clickEventData() {
        if (this.clickEvent) {
            return {
                dataType: this.clickEvent.name,
                data: {
                    ...this.clickEvent.data,
                    pageSlug: this.$route.fullPath,
                    ctaUrlTarget: this.urlTarget,
                },
            };
        }
        return null;
    }

    triggerEventClick(): void {
        if (this.clickEvent) {
            this.$emitPublic(Events.click, this.clickEventData);
        }
    }
}
