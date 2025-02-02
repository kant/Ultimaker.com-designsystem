import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import headerKnobs from 'src/stories/organisms/page-header/page-header.knobs.stories';
import footerKnobs from 'src/stories/organisms/page-footer/page-footer.knobs.stories';
import subNavigationKnobs from '../../organisms/subnavigation/subnavigation.stories.knobs';
import { data as heroProduct } from 'organisms/hero-product/data/hero-product.data';
import tabbedContentKnobs from '../../organisms/tabbed-content/tabbed-content.knobs.stories';
import examplesKnobs from '../../organisms/examples/examples.knobs.stories';
import { data as colors } from 'organisms/colors/data/colors.data';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials details',
        () => ({
            data: () => ({
                ...headerKnobs(),
                ...footerKnobs(),
            }),
            props: {
                subNavigationKnobs: { default: subNavigationKnobs().subnavigation },
                heroProduct: { default: heroProduct.default },
                tabbedContent: { default: tabbedContentKnobs().TabbedContent },
                examples: { default: examplesKnobs().examples },
                colors: { default: colors.default },
            },
            template: require('./materials-details.stories.html'),
        }),
        {
            notes: { markdown: require('./materials-details.stories.md') },
        });
