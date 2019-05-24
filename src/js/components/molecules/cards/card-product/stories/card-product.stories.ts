import { addNotes } from 'src/stories/helpers/add-notes';
import { addStories } from 'src/stories/helpers/add-stories';
import { getKnobs } from 'src/stories/helpers/get-knobs';

import { data } from '../data/card-product.data';
import { knobsFormat } from './card-product.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                type: { default: knobs.type },
                title: { default: knobs.title },
                image: { default: knobs.image },
                contentLink: { default: knobs.contentLink },
                properties: { default: knobs.properties },
                url: { default: knobs.url },
            },
            template: require('./card-product.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|cards/card-product',
    notes: addNotes(require('./card-product.md')),
});
