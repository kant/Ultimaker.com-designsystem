const fs = require('fs');
const webpackConfig = require('../webpack.test.config');

const enableDebug = process.argv.indexOf('--debug') > 0,
    localChrome = process.argv.indexOf('--chrome') > 0;

const getBrowsers = () => {
    if (enableDebug) {
        return [];
    }
    if (localChrome) {
        return ['ChromeHeadless'];
    }

    return ['bs_chrome_mac'];
};

function getKarmaConfig() {
    if (!localChrome && !enableDebug) {
        if (process.env.BROWSERSTACK_USER && process.env.BROWSERSTACK_ACCESS_KEY) {
            return {
                browserStack: {
                    username: process.env.BROWSERSTACK_USER,
                    accessKey: process.env.BROWSERSTACK_ACCESS_KEY
                }
            };
        } else if (fs.existsSync(`${ __dirname }/karma.conf.json`)) {
            return require('./karma.conf.json');
        }

        throw new Error('karma.config.json missing and BROWSERSTACK_* environment variables missing');
    }

    return {};
}

module.exports = function(config) {
    const karmaConfig = getKarmaConfig();

    config.set(karmaConfig);
    config.set({
        // logLevel: config.LOG_DEBUG,
        customLaunchers: {
            'bs_chrome_mac': {
                'base': 'BrowserStack',
                'browser': 'Chrome',
                'browser_version': '61',
                'os': 'OS X',
                'os_version': 'High Sierra'
            }
        },
        browsers: getBrowsers(),
        browserNoActivityTimeout: 30000,
        frameworks: ['jasmine-ajax', 'jasmine'],
        reporters: (localChrome || enableDebug) ? ['spec', 'coverage'] : ['spec', 'coverage', 'BrowserStack'],
        specReporter: {
            suppressSkipped: true
        },
        files: [
            '../src/js/**/*.unit.spec.js'
        ],
        preprocessors: {
            '../src/js/**/*.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                {
                    type: 'lcov',
                    subdir: '.'
                },
                {
                    type: 'text-summary'
                }
            ],
            check: {
                global: {
                    statements: 70,
                    branches: 50,
                    functions: 70,
                    lines: 70
                }
            },
            watermarks: {
                statements: [70, 80],
                functions: [70, 80],
                branches: [50, 75],
                lines: [70, 80]
            }
        }
    });
};