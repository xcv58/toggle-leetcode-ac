# toggle-leetcode-ac

Are you using LeetCode to learn programming?

Here is a short ```js``` code to toggle solved problem.


## If you Chrome Extension
1. Install this extension: https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk

2. Open https://leetcode.com/problemset/algorithms/ in Chrome

3. Open the Custom JavaScript for Websites 2 extension: copy and paste below code: 
```javascript
function toggle() {
  $('.ac').parent().parent().toggle();
}
$("#navBar-right").prepend('<li><a href="#" onclick="toggle()">Toggle Solved</a></li>');
```

Click Save button and enjoy!

## Other Browser

Create a bookmarklet with below line:

```javascript
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://dl.dropboxusercontent.com/u/4121165/js/toggle-display-leetcode.js';})();
```

You only need click the bookmarklet to toggle solved problems.
