(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(10),a(1)),u=a(2);function i(e){var t=Math.floor(e).toString().padStart(2,"0");return"".concat(t,":00")}function l(e){var t=Math.floor(e%3600/60).toString().padStart(2,"0"),a=Math.round(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(a)}function m(e){var t=e.timeModeMaster,a=t.mode,n=t.focusCurrent,o=t.breakCurrent,c=t.focusCount,s=t.breakCount,u=0;"Focus"===a?u=100-c/(60*n)*100:u=100-s/(60*o)*100;return console.log(u),"Initial"===a?null:r.a.createElement("div",null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},"Focus"===a?"Focusing for ".concat(i(n)," minutes"):"On Break for ".concat(i(o)," minutes")),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},"".concat(l("Focus"===a?c:s)," remaining")))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":u,style:{width:"".concat(u,"%")}})))))}function d(e){var t=e.timeModeMaster,a=e.setTimeModeMaster,n=e.isTimerRunning,o=t.focusCurrent,c=t.breakCurrent,u=t.focusChange,l=t.focusMin,m=t.focusMax,d=t.breakMin,b=t.breakMax,p=t.breakChange,f=function(e){if("fMinus"===e&&o>l&&o<=m){var n=o-u;a(Object(s.a)(Object(s.a)({},t),{},{focusCurrent:n,focusCount:60*n}))}if("fPlus"===e&&o>=l&&o<m){var r=o+u;a(Object(s.a)(Object(s.a)({},t),{},{focusCurrent:r,focusCount:60*r}))}if("bMinus"===e&&c>d&&c<=b){var i=c-p;a(Object(s.a)(Object(s.a)({},t),{},{breakCurrent:i,breakCount:60*i}))}if("bPlus"===e&&c>=d&&c<b){var f=c+p;a(Object(s.a)(Object(s.a)({},t),{},{breakCurrent:f,breakCount:60*f}))}};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",i(o)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",onClick:function(){return f("fMinus")},disabled:n},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",onClick:function(){return f("fPlus")},disabled:n},r.a.createElement("span",{className:"oi oi-plus"}))))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",i(c)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:function(){return f("bMinus")},disabled:n},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:function(){return f("bPlus")},disabled:n},r.a.createElement("span",{className:"oi oi-plus"})))))))}function b(e){var t,a=e.playPause,n=e.isTimerRunning,o=e.timeModeMaster,c=e.setTimeModeMaster,i=e.setIsTimerRunning,l=o.mode;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:a},r.a.createElement("span",{className:(t={oi:!0,"oi-media-play":!n,"oi-media-pause":n},Object.entries(t).reduce((function(e,t){var a=Object(u.a)(t,2),n=a[0],r=a[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})),r.a.createElement("button",{type:"button",className:"btn btn-secondary",title:"Stop the session",onClick:function(){i(!1),c(Object(s.a)(Object(s.a)({},o),{},{mode:"Initial",focusCurrent:25,breakCurrent:5,focusCount:1500,breakCount:300}))},disabled:"Focus"!==l},r.a.createElement("span",{className:"oi oi-media-stop"})))))}var p=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({focusCurrent:25,focusMin:5,focusMax:60,focusChange:5,focusCount:1500,breakCurrent:5,breakMin:1,breakMax:15,breakChange:1,breakCount:300,mode:"Initial"}),i=Object(u.a)(c,2),l=i[0],p=i[1],f=l.focusCurrent,E=l.focusCount,v=l.breakCurrent,C=l.breakCount,g=l.mode;return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){0===E?(p(Object(s.a)(Object(s.a)({},l),{},{focusCount:60*f,mode:"Break"})),new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play()):0===C?(p(Object(s.a)(Object(s.a)({},l),{},{breakCount:60*v,mode:"Focus"})),new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play()):"Focus"===g?p(Object(s.a)(Object(s.a)({},l),{},{focusCount:E-1})):"Break"===g&&p(Object(s.a)(Object(s.a)({},l),{},{breakCount:C-1}))}),a?1e3:null),r.a.createElement("div",{className:"pomodoro"},r.a.createElement(d,{isTimerRunning:a,timeModeMaster:l,setTimeModeMaster:p}),r.a.createElement(b,{playPause:function(){o((function(e){return!e})),p(Object(s.a)(Object(s.a)({},l),{},{mode:"Focus"}))},timeModeMaster:l,isTimerRunning:a,setTimeModeMaster:p,setIsTimerRunning:o}),r.a.createElement(m,{timeModeMaster:l}))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(p,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.26a34c32.chunk.js.map