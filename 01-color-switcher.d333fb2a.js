!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body"),d=null;e.disabled=!0,t.addEventListener("click",(function(){d=setInterval((function(){t.disabled=!0,e.disabled=!1,a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d333fb2a.js.map
