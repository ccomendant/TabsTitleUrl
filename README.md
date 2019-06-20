## About (TabsTitleUrl)
This does something similar to [CopyTabTitleUrl](https://addons.mozilla.org/en-US/firefox/addon/copytabtitleurl/)-extension for Firefox - get URLs and Titles of tabs in Firefox.

## Usage
Paste the code in the `.js`-file into the *Browser Console* of [Firefox](https://firefox.org/) (not tested)
or [PaleMoon](https://www.palemoon.org/).

## Firefox / PaleMoon "hacking"
- using the **Browser Console** (`Ctrl+Shift+J`; should be enabled **separately** \
  by setting `devtools.chrome.enabled`=`true` in *about:config*). \
  Then you can try to use the [Tabs API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API), available for new extensions.
- Using [XPath](https://developer.mozilla.org/en-US/docs/Web/XPath) in the
  **Web console** (`Ctrl+Shift+C`), e.g. `$x('//head/title')[0].text`
