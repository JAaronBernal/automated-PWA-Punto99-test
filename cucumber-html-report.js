const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: "jsonlogs", // ** Path of the json file ** //
    reportPath: ".reports/cucumber-htmlreport.html",
    displayDuration: true,
    durationInMS: false,
    displayReportTime: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "XX",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Selfservices'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: (new Date).getTime()},
            {label: 'Execution End Time', value: (new Date).getTime()}
        ]
    }
});