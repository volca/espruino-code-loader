$("body").append($("<script />", {
    src: chrome.extension.getURL("js/inject.js")
}));
