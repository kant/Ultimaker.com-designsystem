import path from 'path';
import initStoryshots, {multiSnapshotWithOptions} from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = ({ context: { kind, story }, url }) => {
    return {
        failureThreshold: 0.1,
        failureThresholdType: 'percent',
    };
};

const beforeScreenshot = (page) => {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, 200)
    );
};

initStoryshots({
    framework: 'vue',
    configPath: path.join(__dirname, '../.storybook'),
    test: imageSnapshot({ storybookUrl: `file://${path.join(__dirname, '../storybook-static')}`, getMatchOptions, beforeScreenshot })
});
