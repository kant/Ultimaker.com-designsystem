import {storiesOf} from '@storybook/vue';
import blockIconDefault from 'molecules/block-icon/data/block-icon.data';

storiesOf('Molecules|block-icon/block-icon', module)
    .add('default',
        () => {
            return {
                data: () => {
                    return {
                        data: blockIconDefault
                    };
                },
                template: require('./block-icon.html')
            };
        },
        {
            notes: require('./block-icon.md')
        }
    );