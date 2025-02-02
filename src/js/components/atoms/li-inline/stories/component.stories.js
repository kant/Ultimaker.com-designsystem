import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import getKnobs from 'atoms/li-item/data/data.knobs';

storiesOf('Atoms|list items/li-inline', module)
    .addDecorator(withKnobs)
    .add('text',
        () => {
            const knobs = getKnobs();

            return {
                props: {
                    item: {
                        default: knobs.item,
                    },
                },
                template: require('./template.html'),
            };
        },
        {
            notes: require('./notes.md'),
        })
    .add('span-label',
        () => ({
            props: {
                item: {
                    default: getKnobs(true),
                },
            },
            template: require('./template.html'),
        }),
        {
            notes: require('./notes.md'),
        });
