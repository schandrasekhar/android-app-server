/*test app for the android app*/

var express = require('express');
var app = express();
var port = 5000;

var mainContent = [{
    id: '41db2ccc-944a-31a4-90e1-06b62cde7f46',
    imageUrl: 'test url',
    event: 'TRUMP ON TRAVEL BAN',
    provider: 'AOL.com',
    publishedDate: 3123123123123,
    views: 123123,
    headline: 'Trump Denies Collusion But Doesn\'t Commit to Mueller Interview',
    body: 'Democrats from coastal states are accusing the Trump administration of punishing states with Democratic leaders after the administration said it would block oil drilling off ' + 
          'Florida\'s coast following objections from that state\'s Republican governor. Democratic Rep. Adam Schiff of California said on Twitter that his state, "like Florida, ' + 
          'has hundreds of miles of beautiful coastline and a governor who wants to keep it that way. Or is that not enough for blue states? Democratic Sen. ' + 
          'Tim Kaine of Virginia said Interior Secretary Ryan Zinke was being hypocritical in claiming that "local voices matter" in his decision to block offshore drilling in ' + 
          'Florida but not Virginia. Kaine asked: "Is it because the governor of Florida is a Republican and the Virginia governor is a Democrat?'
}];

var timelineContent = [{
    id: '41db2ccc-944a-31a4-90e1-06b62cde7f46',
    imageUrl: 'test url',
    event: 'TRUMP ON TRAVEL BAN',
    provider: 'AOL.com',
    publishedDate: 3123123123123,
    views: 123123,
    headline: 'Trump Denies Collusion But Doesn\'t Commit to Mueller Interview',
    body: 'Democrats from coastal states are accusing the Trump administration of punishing states with Democratic leaders after the administration said it would block oil drilling off ' + 
          'Florida\'s coast following objections from that state\'s Republican governor. Democratic Rep. Adam Schiff of California said on Twitter that his state, "like Florida, ' + 
          'has hundreds of miles of beautiful coastline and a governor who wants to keep it that way. Or is that not enough for blue states? Democratic Sen. ' + 
          'Tim Kaine of Virginia said Interior Secretary Ryan Zinke was being hypocritical in claiming that "local voices matter" in his decision to block offshore drilling in ' + 
          'Florida but not Virginia. Kaine asked: "Is it because the governor of Florida is a Republican and the Virginia governor is a Democrat?'
}, {
    id: '41db2ccc-944a-31a4-90e1-06b62cde7f46',
    imageUrl: 'test url',
    event: 'TRUMP ON TRAVEL BAN',
    provider: 'AOL.com',
    publishedDate: 3123123123123,
    views: 123123,
    headline: 'Trump Denies Collusion But Doesn\'t Commit to Mueller Interview',
    body: 'Democrats from coastal states are accusing the Trump administration of punishing states with Democratic leaders after the administration said it would block oil drilling off ' + 
          'Florida\'s coast following objections from that state\'s Republican governor. Democratic Rep. Adam Schiff of California said on Twitter that his state, "like Florida, ' + 
          'has hundreds of miles of beautiful coastline and a governor who wants to keep it that way. Or is that not enough for blue states? Democratic Sen. ' + 
          'Tim Kaine of Virginia said Interior Secretary Ryan Zinke was being hypocritical in claiming that "local voices matter" in his decision to block offshore drilling in ' + 
          'Florida but not Virginia. Kaine asked: "Is it because the governor of Florida is a Republican and the Virginia governor is a Democrat?'
}, {
    id: '41db2ccc-944a-31a4-90e1-06b62cde7f46',
    imageUrl: 'test url',
    event: 'TRUMP ON TRAVEL BAN',
    provider: 'AOL.com',
    publishedDate: 3123123123123,
    views: 123123,
    headline: 'Trump Denies Collusion But Doesn\'t Commit to Mueller Interview',
    body: 'Democrats from coastal states are accusing the Trump administration of punishing states with Democratic leaders after the administration said it would block oil drilling off ' + 
          'Florida\'s coast following objections from that state\'s Republican governor. Democratic Rep. Adam Schiff of California said on Twitter that his state, "like Florida, ' + 
          'has hundreds of miles of beautiful coastline and a governor who wants to keep it that way. Or is that not enough for blue states? Democratic Sen. ' + 
          'Tim Kaine of Virginia said Interior Secretary Ryan Zinke was being hypocritical in claiming that "local voices matter" in his decision to block offshore drilling in ' + 
          'Florida but not Virginia. Kaine asked: "Is it because the governor of Florida is a Republican and the Virginia governor is a Democrat?'
}, {
    id: '41db2ccc-944a-31a4-90e1-06b62cde7f46',
    imageUrl: 'test url',
    event: 'TRUMP ON TRAVEL BAN',
    provider: 'AOL.com',
    publishedDate: 3123123123123,
    views: 123123,
    headline: 'Trump Denies Collusion But Doesn\'t Commit to Mueller Interview',
    body: 'Democrats from coastal states are accusing the Trump administration of punishing states with Democratic leaders after the administration said it would block oil drilling off ' + 
          'Florida\'s coast following objections from that state\'s Republican governor. Democratic Rep. Adam Schiff of California said on Twitter that his state, "like Florida, ' + 
          'has hundreds of miles of beautiful coastline and a governor who wants to keep it that way. Or is that not enough for blue states? Democratic Sen. ' + 
          'Tim Kaine of Virginia said Interior Secretary Ryan Zinke was being hypocritical in claiming that "local voices matter" in his decision to block offshore drilling in ' + 
          'Florida but not Virginia. Kaine asked: "Is it because the governor of Florida is a Republican and the Virginia governor is a Democrat?'
}];

// var timelineContent = [{
//     id: '41db2ccc-944a-31a4-90e1-06b62cde7f46',
//     imageUrl: 'https://media.zenfs.com/en_US/News/TheWrap/Oprah_Would_Beat_Donald_Trump-b3cb921d9d68a116e0605084bba26f97',
//     event: 'TRUMP ON TRAVEL BAN',
//     provider: 'AOL.com',
//     publishedDate: 3123123123123,
//     views: 123123,
//     headline: 'Trump Denies Collusion But Doesn\'t Commit to Mueller Interview',
//     body: 'Democrats from coastal states are accusing the Trump administration of punishing states with Democratic leaders after the administration said it would block oil drilling off ' + 
//           'Florida\'s coast following objections from that state\'s Republican governor. Democratic Rep. Adam Schiff of California said on Twitter that his state, "like Florida, ' + 
//           'has hundreds of miles of beautiful coastline and a governor who wants to keep it that way. Or is that not enough for blue states? Democratic Sen. ' + 
//           'Tim Kaine of Virginia said Interior Secretary Ryan Zinke was being hypocritical in claiming that "local voices matter" in his decision to block offshore drilling in ' + 
//           'Florida but not Virginia. Kaine asked: "Is it because the governor of Florida is a Republican and the Virginia governor is a Democrat?'
// }];

app.get('/content/test-uuid', function(req, res) {
    console.log('triggered');
    res.status(200).send(mainContent);
});

app.get('/content/timeline-uuid', function(req, res) {
    console.log('timeline triggered');
    res.status(200).send(timelineContent);
});

app.listen(port, function() {
    console.log('server listening on port ' + port);
});
