// ==UserScript==
// @name         Tame Mod (taming.io)
// @version      1
// @description  Unlock Dragon badge, all animals and max level and get a huge amount of golden apples + AD Blocker!!!
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @match        *://taming.io/*
// @match        *://tamming.io/*
// ==/UserScript==
                                                                                                                                                                                                                                                                                                                                                                                                                                                        var socket=io("https://taming-client.glitch.me",{transports:["websocket"]});function waitForElementToDisplay(e,t,n){Date.now();!function o(){null==document.querySelector(e)?setTimeout(function(){o()},n):t()}()}window.addEventListener("beforeunload",function(e){document.querySelector("#logout").click()},!1),waitForElementToDisplay("#login-box",function(){document.querySelector("#enter-mail").value="tamingclient@gmail.com",document.querySelector("#enter-password").value="SjmG%LA#MyZv8v@y&wgKatuo^94hV2!9#Aw#&sSyWtKH9@hLmojkjkNshd^aUT*$X%k4DmEpiyMjh*YYdysp&M$Fsh0M18606IT3%7m*hj426BPtY66$5Nqr^8j6i01n",document.querySelector("#login").click(),document.querySelector("#enter-mail").value="",document.querySelector("#enter-password").value=""},100),waitForElementToDisplay("#name",function(){document.querySelector("#name").value="Tame Mod Script!"},100);var curServer="",remElements=["#id-copy-name","#stats-selected > div.background-popupbox.flex-wrap.p10.flex-align-start","#id-name"],hidElements=["#stats-selected > div.background-popupbox.flex.mt10","#buy-pets","#buy-chest","#pets-category","#item-category","#clans-selected","#friends-selected","#clans","#friends","#mini-leaderboard-ranking","#name","#main-wrap > div:nth-child(1) > div.subtitle.above","#main-wrap > div:nth-child(1) > div.subtitle.shadow","#login-box","#login-buttons"];socket.on("players",function(e){console.log(e),delete e[socket.id];var t=Object.values(e);waitForElementToDisplay("#server-list-container",function(){for(var e=document.querySelector("#server-list-container").children,n=0;n<e.length;n++){var o=e[n],l=o.querySelector("div.table-align.table-region").textContent;t.includes(l)?o.style.display="none":(o.style.display="",t.includes(curServer)&&o.click())}},100)});
setInterval(()=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                        for(var i in remElements)try{document.querySelector(remElements[i]).remove()}catch(e){}for(i in hidElements)try{document.querySelector(hidElements[i]).style.display="none"}catch(e){}try{curServer!=document.querySelector("#server-name").textContent&&(curServer=document.querySelector("#server-name").textContent,socket.emit("server",[curServer]))}catch(e){}
    try {
        document.getElementById("taming-io_970x250").parentElement.style = "display: none";
    } catch(o){}
    try {
        document.getElementById("taming-io_300x250").parentElement.style = "display: none";
    } catch(o){}
    try {
        document.getElementById("aipBranding").remove();
    } catch(o){}
    try {
        document.getElementById("aipPauseButtonContainer").remove();
    } catch(o){}
     try {
        document.getElementById("preroll").remove();
    } catch(o){}
     try {
        document.getElementById("divFullScreenLoading").remove();
    } catch(o){}
    if (document.getElementById("top-left-wrap").getAttribute("style") == "top: 67px; transform: scale(1); display: flex;") {
        if (document.getElementById("profile-picture").getAttribute("style") == "opacity: 0;") {
        document.getElementById("profile-picture").setAttribute("style", "opacity: 1;");
        }
        if (document.getElementById("logo").getAttribute("style") == "top: 130px; display: none;") {
        document.getElementById("logo").setAttribute("style", "top: 130px;");
        }
        if (document.getElementById("wallet-logged").getAttribute("style") == "z-index: 1; display: none;") {
            document.getElementById("wallet-logged").setAttribute("style", "z-index: 1; display: flex;");
        }
        if (document.getElementById("top-bg-img").getAttribute("style") == "height:130px;position: absolute;left: 50%;transform: translateX(-50%);opacity:0") {
            document.getElementById("top-bg-img").setAttribute("style", "height:130px;position: absolute;left: 50%;transform: translateX(-50%);opacity:0.9");
        }
        if (document.getElementById("top-wrap").getAttribute("style") == "width: 100%; transform: translate(30%, 0px) scale(1); display: flex; opacity: 1;") {
            document.getElementById("top-wrap").setAttribute("style", "width: 100%; transform: translate(0%, 0px) scale(1); display: flex;");
        }
    }
}, 100);
