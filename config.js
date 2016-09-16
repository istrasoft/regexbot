var config = {};

config.slack_api_token = 'xoxb-80456344403-mMUnztfYQ0ybWoCOIGDh1MHq';

config.regexes = [
  { regex: /DVL-[0-9]+/ig, message: ['Open this Devel in Efficy: <https://ivm.efficy.com/efficy.dll/dialog?page=tsvn.htm&reference=[0]>'] },
  { regex: /Devel ([0-9]+)/ig, message: ['Open this Devel in Efficy: <https://ivm.efficy.com/efficy.dll/dialog?page=tsvn.htm&reference=DVL-[0]>'] },
//  { regex: /[A-Z]+-[0-9]+/g, message: 'http://my-jira.com/?q=[0]' },
  { regex: /CFT-[0-9]+/ig, message: 'Open this Case in Efficy: <https://ivm.efficy.com/efficy.dll/dialog?page=tsvn.htm&reference=[0]>' },
  { regex: /Case ([0-9]+)/ig, message: 'Open this Devel in Efficy: <https://ivm.efficy.com/efficy.dll/dialog?page=tsvn.htm&reference=CFT-[0]>' }
];

module.exports = config;

