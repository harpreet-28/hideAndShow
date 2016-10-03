var _id = function _id(id) {
    return document['getElementById'](id);
}
var h1 = _id('h1');
var h2 = _id('h2');
var par = _id('par');
var hideBtn = _id('hideBtn');
var showBtn = _id('showBtn');
var list = _id('list');
var shList = _id('shList');

function hideAll() {
    h1['style']['visibility'] = "hidden";
    h2['style']['visibility'] = "hidden";
    par['style']['visibility'] = "hidden";
}
hideBtn['addEventListener']('click', hideAll, false);

function showAll() {
    h1['style']['visibility'] = "visible";
    h2['style']['visibility'] = "visible";
    par['style']['visibility'] = "visible";
}
showBtn['addEventListener']('click', showAll, false);

function hideList() {
    list['style']['visibility'] = "hidden";
}

shList['addEventListener']('mouseover', hideList, false);

function showList() {
    list['style']['visibility'] = "visible";
}

shList['addEventListener']('mouseout', showList, false);
