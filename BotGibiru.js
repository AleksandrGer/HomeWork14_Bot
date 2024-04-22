// ==UserScript==
// @name         Homework Bot
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Bot for Gibiru
// @author       Gerasimov AS
// @match        https://gibiru.com/*
// @grant        none
// ==/UserScript==

let img = document.getElementsByClassName("gppwording")[0]; //Пришлось зацепиться за картинку
let gibiruInput = document.getElementsByName("q")[0];
let gibiruBtn = document.getElementsByClassName("fas fa-search new")[0]; // Потому что кнопка не меняет значение на undefined
let links = document.links;
let keywords = ["javascript", "ниндзя код", "массивы", "привет мир"];
let keyword = keywords[getRandom(0, keywords.length)];

if (img != undefined) {
    gibiruInput.value = keyword;
    gibiruBtn.click();
} else {
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("learn.javascript.ru") != -1) {
            let link = links[i];
            console.log("Нашел строку " + link);
            link.click(); //Не понимаю почему не переходит по ссылке? В консоли цикл работает
            break;
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
