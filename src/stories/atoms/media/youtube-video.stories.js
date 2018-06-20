import {storiesOf} from '@storybook/vue';

const stories = storiesOf('Atoms|media')
    .add(
        'Youtube Video',
        () => {
            return {
                data: () => ({
                    videoId: "w5Fgp-KihIA"
                }),
                template: require('./youtube-video.stories.html')
            }
        },
        {
            notes: {markdown: require('./youtube-video.stories.md')}
        }

    );
