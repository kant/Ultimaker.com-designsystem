import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './ecosystem.stories.json';

storiesOf('organisms|ecosystem', module)
    .addDecorator(withKnobs)
    .add(
        'Ecosystem',
        () => {
            const title = text('Title', data.title),
                items = object('Items', data.items);

            return {
                data: () => ({
                    ecosystem: {
                        title,
                        items
                    }
                }),
                template: require('./ecosystem.stories.html')
            };
        },
        {
            notes: {markdown: require('./ecosystem.stories.md')}
        }
    );