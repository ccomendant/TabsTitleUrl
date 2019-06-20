/**
Attributes of interest for gBrowser.tabs[..]:
  .label //=> Google Search
  .linkedBrowser.lastURI.asciiSpec //=> https://google.com/search?ei=...
  .treestyletab-id
  .treestyletab-insert-after
  .treestyletab-nest
  .treestyletab-parent // if .treestyletab-nest > 0
 */

var s = '';
function procTab(tab)
{
  var nest = 0;
  if(tab.hasAttribute("treestyletab-nest")) {
    nest = Number(tab.getAttribute("treestyletab-nest"));
  }

  var res = ' '.repeat(2 * nest);
  res += '-';
  return res;
}

/**
 * link/anchor formatting
 */
function orgmodeUrl(url, text)
{
  return "[["+url+"]["+text+"]]";
}
function markdownUrl(url, text) {
  return "["+text+"]("+url+")";
}

var urlFormatter = orgmodeUrl;
//var urlFormatter = markdownUrl;

for(const tab of gBrowser.tabs) {
  s += procTab(tab);
  s += ' ';
  var tabLabel = tab.label;
  //var tabUrl = tab.linkedBrowser.lastURI.asciiSpec;
  var tabUrl = tab.linkedBrowser.currentURI.spec;
  s += urlFormatter(tabUrl, tabLabel);
  s += '\n';
}
s
