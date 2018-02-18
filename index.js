/**
 * PlainJS alternative to jQuery
 */

'use strict';

// Element class check, add and remove
module.exports.hasClass = (el, className) => {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
};

module.exports.addClass = (el, className) => {
    if (el.classList) { el.classList.add(className); }
    else if (!hasClass(el, className)) { el.className += ' ' + className; }
}

module.exports.removeClass = (el, className) => {
    if (el.classList) { el.classList.remove(className); }
    else { el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), ''); }
}

// element modification

module.exports.insertAfter = (el, referenceNode) => {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

// event handlng

module.exports.addEvent = (el, type, handler) => {
    if (el.attachEvent) { el.attachEvent('on' + type, handler); } else { el.addEventListener(type, handler); }
}

// show elements

module.exports.show = (el, value) => {
    el.style.display = value;
}


module.exports.ready = (callback) => {
    // in case the document is already rendered
    if (document.readyState !== 'loading') { 
        callback(); 
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') {
                 callback();
             }
        });
    }
}