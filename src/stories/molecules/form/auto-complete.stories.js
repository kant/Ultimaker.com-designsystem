import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import data from './auto-complete.stories.json';
import AutoComplete from 'molecules/auto-complete';

storiesOf('Molecules|forms', module)
    .add(
        'Auto complete',
        () => {
            return {
                components: {
                    AutoComplete
                },
                data: () => ({
                    defaultOpen: data.defaultOpen,
                    items: data.items,
                    storedItems: data.storedItems,
                    storedLabel: data.storedLabel
                }),
                methods: {
                    input: action('input'),
                    close: action('close'),
                    changeFocus: action('changeFocus')
                },
                template: require('./auto-complete.stories.html')
            };
        },
        {
            notes: {markdown: require('./auto-complete.stories.md')}
        }
    );
