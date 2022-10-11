const request = require('request');
const gitHubApi = 'https://github.com/RawdneyGoncalves?tab=repositories'

request(gitHubApi, { 'User-Agent': 'node.js' }, (err, res, body) => {
    console.log(JSON.parse(body))
})