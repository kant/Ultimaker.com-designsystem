import data from './data';
import {text} from '@storybook/addon-knobs';

export const getKnobs = (obj) => {
    if (obj) {
        return {
            item: {
                item: text('item', data.item)
            },
            type: data.type
        };
    }

    return {
        item: text('item', data.item)
    };
};
