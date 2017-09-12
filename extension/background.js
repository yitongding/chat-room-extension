console.log('Background.html starting!');

chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.pageAction.show(tabId);
});

chrome.tabs.getSelected(null, (tab) => {
  chrome.pageAction.show(tab.id);
});

chrome.pageAction.onClicked.addListener(() => {
  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'url',
      url: tabs[0].url,
    }, null);
  });
});

console.log('Background.html done.');
