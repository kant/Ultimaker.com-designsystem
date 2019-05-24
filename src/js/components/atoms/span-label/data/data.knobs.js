import data from './data';
import {text} from '@storybook/addon-knobs';

export const getKnobs = () => ({
    item: text('item', data.item)
});
