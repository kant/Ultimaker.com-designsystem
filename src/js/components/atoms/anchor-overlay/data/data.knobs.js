import data from './data';
import {text} from '@storybook/addon-knobs';

export const getKnobs = () => ({
    title: text('title', data.title),
    url: text('url', data.url)
});
