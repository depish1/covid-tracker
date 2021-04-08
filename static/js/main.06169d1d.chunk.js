(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{195:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s=t(0),l=t.n(s),d=t(69),u=t.n(d),b=t(6),h=t(2),f=t(3),j=h.c.div(r||(r=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n\n  & h2 {\n    margin: 1rem 0;\n    font-size: 2rem;\n  }\n  & h4 {\n    margin: 0.5rem 0;\n  }\n"]))),p=t(1),m=function(e){var n=e.size,t=e.children;switch(n){case"1":return Object(p.jsx)(j,{children:Object(p.jsx)("h1",{children:t})});case"2":return Object(p.jsx)(j,{children:Object(p.jsx)("h2",{children:t})});case"3":return Object(p.jsx)(j,{children:Object(p.jsx)("h3",{children:t})});case"4":return Object(p.jsx)(j,{children:Object(p.jsx)("h4",{children:t})});default:return Object(p.jsx)("h2",{children:t})}},x=h.c.header(o||(o=Object(f.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  height: 70px;\n  background-color: ",";\n  color: ",";\n  border-bottom: 1px solid ",";\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-box-shadow: 0px 12px 24px -4px rgba(0, 0, 0, 0.73);\n  box-shadow: 0px 12px 24px -4px rgba(0, 0, 0, 0.73);\n"])),(function(e){return e.theme.colors.primaryColor}),(function(e){return e.theme.colors.fontSecondary}),(function(e){return e.theme.colors.border})),g=function(){return Object(p.jsx)(x,{children:Object(p.jsx)(m,{size:"1",children:"Covid-19 Tracker"})})},O=h.c.div(c||(c=Object(f.a)(["\n  display: flex;\n  align-items: start;\n  position: fixed;\n  top: 0;\n  left: 0;\n"])));function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function w(e,n){var t=e.title,r=e.titleId,o=y(e,["title","titleId"]);return s.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#ffffff",ref:n,"aria-labelledby":r},o),t?s.createElement("title",{id:r},t):null,a||(a=s.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),i||(i=s.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))}var k,C,z=s.forwardRef(w);t.p;function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function N(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function S(e,n){var t=e.title,r=e.titleId,o=N(e,["title","titleId"]);return s.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#ffffff",ref:n,"aria-labelledby":r},o),t?s.createElement("title",{id:r},t):null,k||(k=s.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),C||(C=s.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})))}var R,E,P,T,M,F,G,V,H,I,A,Z,D,U,W=s.forwardRef(S),L=(t.p,h.c.button(R||(R=Object(f.a)(["\n  margin: 1rem 1rem;\n  border: none;\n  background: ",";\n  cursor: pointer;\n\n  &:focus {\n    outline-color: ",";\n  }\n\n  &.close-button {\n    border: 2px ridge ",";\n    border-radius: 0.5rem;\n  }\n"])),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.fontColor}),(function(e){return e.theme.colors.backgroundComponent}))),J=function(e){var n=e.isNavOpen,t=e.toggleNavVisibility,r=n?"close-button":"";return Object(p.jsx)(L,{className:r,onClick:function(){return t()},children:n?Object(p.jsx)(W,{}):Object(p.jsx)(z,{})})},q=h.c.nav(E||(E=Object(f.a)(["\n  z-index: 2;\n  background-color: ",";\n  height: 100vh;\n  transition: width 1s;\n\n  &.hidden {\n    display: none;\n  }\n"])),(function(e){return e.theme.colors.navBg})),K=h.c.ul(P||(P=Object(f.a)(["\n  margin-top: 1rem;\n"]))),Q=q,X=h.c.li(T||(T=Object(f.a)(["\n  & a {\n    text-decoration: none;\n    text-align: center;\n    margin-left: 1rem;\n    margin-bottom: 0.5rem;\n    display: block;\n    padding: 1rem 2rem;\n    background-color: ",";\n    border: 2px ridge ",";\n    border-right: none;\n    cursor: pointer;\n    font-weight: bold;\n    border-radius: 1.5rem 0 0 1.5rem;\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &.selected {\n      background-color: ",";\n      border: 2px ridge ",";\n      border-right: none;\n      color: ",";\n      cursor: auto;\n\n      &:hover {\n        background-color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.theme.colors.primaryColor}),(function(e){return e.theme.colors.backgroundComponent}),(function(e){return e.theme.colors.fontSecondary}),(function(e){return e.theme.colors.navHover}),(function(e){return e.theme.colors.backgroundComponent}),(function(e){return e.theme.colors.primaryColor}),(function(e){return e.theme.colors.fontPrimary}),(function(e){return e.theme.colors.backgroundComponent})),Y=t(29),$=function(e){var n=e.path,t=e.toggleNavVisibility,r=e.children,o=e.selectedTab,c=e.selectTabFunction,a=e.idForLi,i=o===a?"selected":"";return Object(p.jsx)(X,{onClick:function(e){c(e.target.id),t()},children:Object(p.jsx)(Y.b,{className:i,id:a,to:n,children:r})})},_=function(e){var n=e.toggleNavVisibility,t=e.isNavOpen,r=e.navArr,o=e.selectedTab,c=e.selectTabFunction;return Object(p.jsx)(Q,{className:t?null:"hidden",children:Object(p.jsx)(K,{children:r.map((function(e,r){return Object(p.jsx)($,{toggleNavVisibility:n,isNavOpen:t,selectedTab:o,idForLi:e.id,path:e.path,selectTabFunction:c,children:e.text},r)}))})})},ee=function(e){var n=e.selectTabFunction,t=e.navArr,r=e.isNavOpen,o=e.toggleNavVisibility,c=e.selectedTab;return Object(p.jsxs)(O,{children:[Object(p.jsx)(_,{toggleNavVisibility:o,isNavOpen:r,navArr:t,selectedTab:c,selectTabFunction:n}),Object(p.jsx)(J,{toggleNavVisibility:o,isNavOpen:r})]})},ne=Object(h.b)(M||(M=Object(f.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\nhtml {\n    box-sizing: border-box;\n}\n\ncanvas {\n    width: 100%; height: 100%;\n}\n\n*, *::after, *::before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n\na, button {\n    font-family: 'Roboto', sans-serif;\n}\n"]))),te={colors:{border:"#8d99ae",backgroundComponent:"#edf2f4",navBg:"rgba(43, 45, 66, 0.9)",navHover:"#8d99ae",headerColor:"#2b2d42",fontPrimary:"#0b090a",fontSecondary:"#ffffff",primaryColor:"#2b2d42",cases:"#404040",recovered:"#008000",deaths:"#d90429",chartBorderBlue:"#1565C0",chartBgBlue:"rgba(21, 101, 192, 0.5)",chartBorderGrey:"#404040",chartBgGrey:"rgba(64, 64, 64, 0.5)",chartBorderGreen:"#008000",chartBgGreen:"rgba(0, 128, 0, 0.5)",chartBorderRed:"#d90429",chartBgRed:"rgba(186, 24, 27, 0.8)"}},re=[{id:"home",path:"/",text:"Strona g\u0142\xf3wna"},{id:"charts",path:"/charts",text:"Wykresy"},{id:"vaccine",path:"/vaccines",text:"Szczepienia"}],oe=t(4),ce=h.c.div(F||(F=Object(f.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])),(function(e){return e.theme.colors.backgroundComponent})),ae=h.c.div(G||(G=Object(f.a)(["\n  width: 100%;\n  height: calc(100% - 2rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 2rem;\n\n  @media only screen and (max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),ie=ce,se=h.c.div(V||(V=Object(f.a)(["\n  width: 25%;\n\n  margin: 1rem 1rem;\n  border-left: 1px solid ",";\n  border-right: 1px solid ",";\n  border-bottom: 1px solid ",";\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  -webkit-box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.73);\n  box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.73);\n\n  @media only screen and (max-width: 800px) {\n    width: 60%;\n  }\n"])),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.backgroundComponent})),le=h.c.div(H||(H=Object(f.a)(["\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  font-size: 1.5rem;\n  padding: 1rem;\n  border-bottom: 1px solid ",";\n  border-top: 1px solid ",";\n  color: white;\n\n  &.cases {\n    background-color: ",";\n  }\n  &.recovered {\n    background-color: ",";\n  }\n  &.deaths {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.cases}),(function(e){return e.theme.colors.recovered}),(function(e){return e.theme.colors.deaths})),de=function(e){var n=e.type;return Object(p.jsx)(le,{className:n,children:Object(p.jsx)("h3",{children:function(e){switch(e){case"cases":return"Zara\u017ceni";case"recovered":return"Wyzdrowieli";case"deaths":return"Zmarli";default:return null}}(n)})})},ue=h.c.div(I||(I=Object(f.a)(["\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n"]))),be=h.c.div(A||(A=Object(f.a)(["\n  margin-top: 1rem;\n  & span {\n    margin-left: 0.5rem;\n    font-weight: bold;\n    &.cases {\n      color: ",";\n    }\n    &.recovered {\n      color: ",";\n    }\n    &.deaths {\n      color: ",";\n    }\n  }\n\n  &:last-child {\n    margin-bottom: 1rem;\n  }\n"])),(function(e){return e.theme.colors.cases}),(function(e){return e.theme.colors.recovered}),(function(e){return e.theme.colors.deaths})),he=function(e){var n=e.type,t=e.content,r=e.children;return Object(p.jsxs)(be,{className:n,children:[r," ",Object(p.jsx)("span",{className:n,children:t})]})},fe=function(e){var n=e.oneMilion,t=e.sum,r=e.today,o=e.type;return Object(p.jsxs)(ue,{children:[Object(p.jsx)(he,{type:o,content:t,children:"Suma:"}),Object(p.jsx)(he,{type:o,content:r,children:"Nowe dzisiaj:"}),Object(p.jsx)(he,{type:o,content:n,children:"Na 1 milion:"})]})},je=function(e){var n=e.sum,t=e.today,r=e.oneMilion,o=e.type;return Object(p.jsxs)(se,{children:[Object(p.jsx)(de,{type:o}),Object(p.jsx)(fe,{sum:n,today:t,oneMilion:r,type:o})]})},pe=t(13),me=t.n(pe),xe=h.c.div(D||(D=Object(f.a)(["\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin-top: 35vh;\n"]))),ge=h.c.div(U||(U=Object(f.a)(["\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: ",";\n  height: ",";\n  margin: 6px;\n  border: 6px solid ",";\n  border-radius: 50%;\n  animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: "," transparent transparent transparent;\n  :nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  :nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  :nth-child(3) {\n    animation-delay: -0.15s;\n  }\n"])),(function(e){return"".concat(e.size).concat(e.sizeUnit)}),(function(e){return"".concat(e.size).concat(e.sizeUnit)}),(function(e){return e.color}),(function(e){return Object(h.d)(Z||(Z=Object(f.a)(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])))}),(function(e){return e.color})),Oe=function(e){var n=e.color,t=e.size,r=e.sizeUnit;return Object(p.jsx)(xe,{children:Object(p.jsx)(ge,{color:n,size:t,sizeUnit:r})})};Oe.defaultProps={size:100,color:te.colors.primaryColor,sizeUnit:"px"};var ve,ye,we,ke,Ce,ze=Oe,Be=function(){var e=Object(s.useState)(null),n=Object(b.a)(e,2),t=n[0],r=n[1];Object(s.useEffect)((function(){me.a.get("https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false").then((function(e){return r(e.data)})).catch((function(e){return console.error(e)}))}),[]);return Object(p.jsx)(ie,{children:function(e){return e?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{size:"2",children:"Podstawowe dane"}),Object(p.jsxs)(ae,{children:[Object(p.jsx)(je,{className:"BasicData",sum:e.active,today:e.todayCases,oneMilion:e.casesPerOneMillion,type:"cases"}),Object(p.jsx)(je,{className:"BasicData",sum:e.recovered,today:e.todayRecovered,oneMilion:e.recoveredPerOneMillion,type:"recovered"}),Object(p.jsx)(je,{className:"BasicData",sum:e.deaths,today:e.todayDeaths,oneMilion:e.deathsPerOneMillion,type:"deaths"})]})]}):Object(p.jsx)(ze,{})}(t)})},Ne=t(74),Se=function(e){var n=Object(Ne.a)(e.split("/"));return"20".concat(n[2],"-").concat(n[0].length>1?n[0]:"0".concat(n[0]),"-").concat(n[1].length>1?n[1]:"0".concat(n[1]))},Re=h.c.div(ve||(ve=Object(f.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])),(function(e){return e.theme.colors.backgroundComponent})),Ee=t(73),Pe=h.c.div(ye||(ye=Object(f.a)(["\n  height: 50vh;\n  width: 60vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media only screen and (max-width: 800px) {\n    width: 80vw;\n  }\n\n  @media only screen and (max-width: 600px) {\n    width: 88vw;\n  }\n"]))),Te=function(e){var n=e.datasets,t={labels:e.labels,datasets:n};return Object(p.jsx)(Pe,{children:Object(p.jsx)(Ee.Line,{data:t,height:400,width:800,options:{maintainAspectRatio:!1}})})},Me=h.c.select(we||(we=Object(f.a)(["\n  display: block;\n  margin: 0 auto;\n  border: 3px solid ",";\n  border-radius: 5px;\n  padding: 2px;\n"])),(function(e){return e.theme.colors.primaryColor})),Fe=function(e){var n=e.countries,t=e.data,r=e.callback,o=Object(s.useState)("Poland"),c=Object(b.a)(o,2),a=c[0],i=c[1];return Object(p.jsx)(Me,{value:a,onChange:function(e){i(e.target.value);var n=t.filter((function(n){return n.country===e.target.value}))[0].datasets.datasets;r(n)},children:n.map((function(e,n){return Object(p.jsx)("option",{value:e,children:e},n)}))})},Ge=h.c.div(ke||(ke=Object(f.a)(["\n  padding: 1rem;\n  -webkit-box-shadow: 5px 5px 30px -5px #000000;\n  box-shadow: 5px 5px 30px -5px #000000;\n  border-radius: 5px;\n  margin: 1rem 0;\n"]))),Ve=function(e){var n=e.datasets,t=void 0===n?null:n,r=e.labels,o=e.data,c=void 0===o?null:o,a=e.countries,i=void 0===a?null:a,l=e.children,d=Object(s.useState)(t),u=Object(b.a)(d,2),h=u[0],f=u[1];Object(s.useEffect)((function(){if(c){var e=c.filter((function(e){return"Poland"===e.country}))[0].datasets.datasets;f(e)}}),[c]);return Object(p.jsxs)(Ge,{children:[Object(p.jsx)(m,{size:"4",children:l}),function(e){return e?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Fe,{countries:i,callback:f,data:e}),Object(p.jsx)(Te,{datasets:h,labels:r})]}):Object(p.jsx)(Te,{datasets:h,labels:r})}(c)]})},He=function(){var e=Object(s.useState)(null),n=Object(b.a)(e,2),t=n[0],r=n[1],o=Object(s.useState)(null),c=Object(b.a)(o,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){me.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((function(e){return r(function(e){var n=e.cases,t=e.recovered,r=e.deaths,o=Object.keys(n).map((function(e){return[Se(e),n[e]]}));return{datasets:[{label:"Zara\u017ceni",data:Object.keys(n).map((function(e){return[Se(e),n[e]]})).map((function(e){return e[1]})),borderColor:te.colors.chartBorderGrey,backgroundColor:te.colors.chartBgGrey,pointRadius:1},{label:"Wyzdrowieli",data:Object.keys(t).map((function(e){return[Se(e),t[e]]})).map((function(e){return e[1]})),borderColor:te.colors.chartBorderGreen,backgroundColor:te.colors.chartBgGreen,pointRadius:1},{label:"Zmarli",data:Object.keys(r).map((function(e){return[Se(e),r[e]]})).map((function(e){return e[1]})),borderColor:te.colors.chartBorderRed,backgroundColor:te.colors.chartBgRed,pointRadius:1}],labels:o.map((function(e){return e[0]}))}}(e.data))})).catch((function(e){return console.error(e)})),me.a.get("https://disease.sh/v3/covid-19/historical?lastdays=all").then((function(e){return i(function(e){var n=e.map((function(e){var n=e.timeline.cases,t=e.timeline.recovered,r=e.timeline.deaths,o=Object.keys(n).map((function(e){return[Se(e),n[e]]})),c={datasets:[{label:"Zara\u017ceni",data:Object.keys(n).map((function(e){return[Se(e),n[e]]})).map((function(e){return e[1]})),borderColor:te.colors.chartBorderGrey,backgroundColor:te.colors.chartBgGrey,pointRadius:1},{label:"Wyzdrowieli",data:Object.keys(t).map((function(e){return[Se(e),t[e]]})).map((function(e){return e[1]})),borderColor:te.colors.chartBorderGreen,backgroundColor:te.colors.chartBgGreen,pointRadius:1},{label:"Zmarli",data:Object.keys(r).map((function(e){return[Se(e),r[e]]})).map((function(e){return e[1]})),borderColor:te.colors.chartBorderRed,backgroundColor:te.colors.chartBgRed,pointRadius:1}],labels:o.map((function(e){return e[0]}))};return[{country:e.country,datasets:c},o.map((function(e){return e[0]}))]})),t=n[0][1];return[n.map((function(e){return e[0]})),t,e.map((function(e){return e.country}))]}(e.data))})).catch((function(e){return console.error(e)}))}),[]),Object(p.jsx)(Re,{children:a&&t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{size:"2",children:"Wykresy"}),Object(p.jsx)(Ve,{datasets:t.datasets,labels:t.labels,children:"Covid-19 na \u015bwiecie"}),Object(p.jsx)(Ve,{labels:a[1],data:a[0],countries:a[2],children:"Covid-19 wg. kraju"})]}):Object(p.jsx)(ze,{})})},Ie=h.c.div(Ce||(Ce=Object(f.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])),(function(e){return e.theme.colors.backgroundComponent})),Ae=function(){var e=Object(s.useState)(null),n=Object(b.a)(e,2),t=n[0],r=n[1],o=Object(s.useState)(null),c=Object(b.a)(o,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){me.a.get("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all").then((function(e){return r(function(e){var n=Object.keys(e).map((function(n){return[Se(n),e[n]]}));return{datasets:[{label:"Total",data:n.map((function(e){return e[1]})),borderColor:te.colors.chartBorderBlue,backgroundColor:te.colors.chartBgBlue,pointRadius:2}],labels:n.map((function(e){return e[0]}))}}(e.data))})).catch((function(e){return console.error(e)})),me.a.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=all").then((function(e){return i(function(e){var n=e.map((function(e){var n=Object.keys(e.timeline).map((function(n){return[Se(n),e.timeline[n]]})),t={datasets:[{label:"Total",data:n.map((function(e){return e[1]})),borderColor:te.colors.chartBorderBlue,backgroundColor:te.colors.chartBgBlue,pointRadius:2}],labels:n.map((function(e){return e[0]}))};return[{country:e.country,datasets:t},n.map((function(e){return e[0]}))]})),t=n[0][1];return[n.map((function(e){return e[0]})),t,e.map((function(e){return e.country}))]}(e.data))})).catch((function(e){return console.error(e)}))}),[]),Object(p.jsx)(Ie,{children:a&&t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{size:"2",children:"Szczepienia"}),Object(p.jsx)(Ve,{datasets:t.datasets,labels:t.labels,children:"Szczepienia na \u015bwiecie"}),Object(p.jsx)(Ve,{labels:a[1],data:a[0],countries:a[2],children:"Szczepienia wg. kraju"})]}):Object(p.jsx)(ze,{})})},Ze=function(){var e=Object(s.useState)("home"),n=Object(b.a)(e,2),t=n[0],r=n[1],o=Object(s.useState)(!1),c=Object(b.a)(o,2),a=c[0],i=c[1];return Object(p.jsx)(Y.a,{children:Object(p.jsxs)(h.a,{theme:te,children:[Object(p.jsx)(ne,{}),Object(p.jsx)(g,{}),Object(p.jsx)(ee,{toggleNavVisibility:function(){i((function(e){return!e}))},isNavOpen:a,navArr:re,selectedTab:t,selectTabFunction:function(e){r(e)}}),Object(p.jsxs)(oe.c,{children:[Object(p.jsx)(oe.a,{path:"/charts",children:Object(p.jsx)(He,{})}),Object(p.jsx)(oe.a,{path:"/vaccines",children:Object(p.jsx)(Ae,{})}),Object(p.jsx)(oe.a,{path:"/",children:Object(p.jsx)(Be,{})})]})]})})};u.a.render(Object(p.jsx)(l.a.StrictMode,{children:Object(p.jsx)(Ze,{})}),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.06169d1d.chunk.js.map