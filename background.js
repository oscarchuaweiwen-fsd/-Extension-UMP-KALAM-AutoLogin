async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  console.log(tabs);
  return tabs[0];
}

chrome.tabs.onUpdated.addListener(async function () {
  let tab = await getTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ["foregroup.js"],
  });
});
