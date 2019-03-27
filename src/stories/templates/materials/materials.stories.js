import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import getKnobs from './materials.knobs.stories.js';

const knobs = getKnobs();

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials', () => ({
        data: () => ({

        }),
        props: {
            headerKnobs: {default: knobs.headerKnobs},
            subNavigationKnobs: {default: knobs.subNavigationKnobs},
            footerKnobs: {default: knobs.footerKnobs},
            heroVideo: {default: knobs.heroVideo}
        },
        template: require('./materials.stories.html')
    }),
    {
        notes: {markdown: require('./materials.stories.md')}
    });