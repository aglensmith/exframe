/**
 * @fileOverview Event listeners that listen and respond to Chrome events
 */

//Tabs Event Listeners
var currentLocation;
chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo['tabId'], function (tab) {
        if (tab.url) {
            currentLocation = tab.url;
        }   
    });
    
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if(changeInfo['url']) {
        currentLocation = changeInfo['url'];
    }
});


// Omnibox Event Listeners
chrome.omnibox.onInputChanged.addListener(function (text, suggest) { 
    var suggestions = [];
    var query = {currentWindow: true, active: true};
    chrome.omnibox.setDefaultSuggestion({description:'default suggestion'});
    sugs.forEach(function(sug) {
        suggestions.push({content: sug, description: sug})
    });
    suggest(suggestions);
});
chrome.omnibox.onInputEntered.addListener(function(text, disposition) {
});
chrome.commands.onCommand.addListener(function(command) {
});
