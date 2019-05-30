import { properties } from 'components/molecules/list-unordered/data/examples/properties-basic';
import { items as propertiesExtended } from 'components/molecules/list-unordered/data/examples/properties-extended';
import { nylon } from 'components/atoms/c-image/data/examples/nylon';
import { toughPla } from 'components/atoms/c-image/data/examples/tough-pla';

export const data = {
    noImageNoProperties: {
        properties: [],
        title: 'Ultimaker Nylon',
        type: 'CardProduct',
        url: 'https://ultimaker.com/en/products/materials/nylon',
    },
    noImage: {
        properties,
        title: 'Ultimaker Nylon',
        type: 'CardProduct',
        url: 'https://ultimaker.com/en/products/materials/nylon',
    },
    noProperties: {
        image: nylon,
        title: 'Ultimaker Nylon',
        type: 'CardProduct',
        url: 'https://ultimaker.com/en/products/materials/nylon',
    },
    nylon: {
        properties,
        image: nylon,
        title: 'Ultimaker Nylon',
        type: 'CardProduct',
        url: 'https://ultimaker.com/en/products/materials/nylon',
    },
    pla: {
        properties: propertiesExtended,
        image: toughPla,
        title: 'Ultimaker Tough PLA',
        type: 'CardProduct',
        url: 'https://ultimaker.com/en/products/materials/tough-pla',
    },
};
