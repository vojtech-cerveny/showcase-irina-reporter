const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
exports.config = {
    // WDIO CONFIG
    runner: 'local',
    specs: [
        './test/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // TIMELINE-REPORTER CONFIG 
    
    // add [TimelineService]
    services: ['chromedriver', [TimelineService]],
    // add timeline into array 
    reporters: ['spec', ['timeline', {
        outputDir: './reports', 
        embedImages: true, 
        images: {
            quality: 80,
            resize: false,
            reductionRatio: 2
        },
        screenshotStrategy: 'on:error'
    }]],

    // MOCHA
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
