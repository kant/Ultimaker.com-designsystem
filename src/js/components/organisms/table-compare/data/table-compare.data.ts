import { tinyCar as imageData } from 'components/atoms/c-image/data/examples/tiny-car';

const columnCta = {
    type: 'ContentButton',
    label: 'Get a quote',
    url: '/en/quote',
};

export const data = {
    default: {
        title: 'Lorem ipsum dolor sit amet consectetur',
        subtitle: 'Donec pulvinar arcu lorem, id scelerisque lectus cursus in',
        content: {
            columns: [
                {
                    title: 'Product title 1',
                    image: imageData,
                    cta: columnCta,
                },
                {
                    title: 'Product title 2',
                    image: imageData,
                    cta: columnCta,
                },
                {
                    title: 'Product title 3',
                    image: imageData,
                    cta: columnCta,
                },
            ],
            rows: [
                {
                    label: 'Great Feature One',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato. Celery quandong swiss chard chicory earthnut pea potato. Celery quandong swiss chard chicory earthnut pea potato. Celery quandong swiss chard chicory earthnut pea potato. ',
                    },
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Fantastic Feature Two',
                    cells: [
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Feature Three',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.',
                    },
                    cells: [
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                    ],
                },
                {
                    label: 'Feature Four',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato.',
                    },
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Feature Five',
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
            ],
        },
        ctas: {
            type: 'Ctas',
            ctas: [
                {
                    type: 'ContentLink',
                    label: 'Read more',
                    url: '/en/quote',
                },
            ],
        },
    },
};
