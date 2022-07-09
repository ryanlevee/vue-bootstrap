(function(){"use strict";var n={2509:function(n,t,e){var r=e(9242),a=e(3396);const o={id:"app"};function u(n,t,e,r,u,i){const l=(0,a.up)("Header"),c=(0,a.up)("Main"),s=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(l),(0,a.Wm)(c),(0,a.Wm)(s)])}const i=(0,a.uE)('<nav class="navbar navbar-expand-lg navbar-dark"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarText"><ul class="navbar-nav mr-auto text-left"><li class="nav-item active"><a class="nav-link" href="/">Home</a></li></ul></div><a class="navbar-brand" href="/">Mathificent</a></nav>',1),l=[i];function c(n,t,e,r,o,u){return(0,a.wg)(),(0,a.iD)("header",null,l)}var s={name:"Header-El"},p=e(89);const f=(0,p.Z)(s,[["render",c]]);var m=f,v=e(7139);const d={id:"main-container"},b=(0,a._)("h1",null,"Mathificent",-1);function g(n,t,e,r,o,u){const i=(0,a.up)("SelectInput"),l=(0,a.up)("PlayButton");return(0,a.wg)(),(0,a.iD)("main",d,[b,(0,a.Wm)(i,{currentValue:n.operation,label:"Operation",id:"operation",modelValue:n.operation,"onUpdate:modelValue":t[0]||(t[0]=t=>n.operation=t),options:n.operations},null,8,["currentValue","modelValue","options"]),(0,a.Wm)(i,{currentValue:n.maxNumber,label:"Maximum Number",id:"max-number",modelValue:n.maxNumber,"onUpdate:modelValue":t[1]||(t[1]=t=>n.maxNumber=t),options:u.numbers},null,8,["currentValue","modelValue","options"]),(0,a.Wm)(l),(0,a._)("p",null,"current operation: "+(0,v.zw)(n.operation),1),(0,a._)("p",null,"max number: "+(0,v.zw)(n.maxNumber),1)])}const h=["for"],w=["id","value"],x=["value"];function y(n,t,e,r,o,u){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{for:e.id},(0,v.zw)(e.label),9,h),(0,a._)("select",{class:"form-control",id:e.id,value:e.currentValue,onInput:t[0]||(t[0]=t=>n.$emit("input",t.target.value))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.options,(n=>((0,a.wg)(),(0,a.iD)("option",{key:n[1],value:n[1]},(0,v.zw)(n[0]),9,x)))),128))],40,w),(0,a._)("p",null,(0,v.zw)(e.currentValue),1)])}var V={name:"SelectInput",props:{id:String,label:String,options:Array,currentValue:String}};const O=(0,p.Z)(V,[["render",y]]);var D=O;const _={class:"btn btn-primary"};function k(n,t,e,r,o,u){return(0,a.wg)(),(0,a.iD)("button",_,"Play!")}var M={name:"PlayButton"};const S=(0,p.Z)(M,[["render",k]]);var W=S,j={name:"Main-El",components:{SelectInput:D,PlayButton:W},data:function(){return{operations:[["Addition","+"],["Subtraction","-"],["Multiplication","x"],["Division","/"]],operation:"x",maxNumber:"10"}},computed:{numbers:function(){const n=[];for(let t=2;t<=100;t++)n.push([t,t]);return n}}};const z=(0,p.Z)(j,[["render",g]]);var N=z;const P={class:"navbar fixed-bottom"},Z={href:"https://www.webucator.com",class:"text-light"};function E(n,t,e,r,o,u){return(0,a.wg)(),(0,a.iD)("footer",P,[(0,a._)("a",Z," Copyright © "+(0,v.zw)((new Date).getFullYear())+" Webucator",1)])}var F={name:"Footer-El"};const H=(0,p.Z)(F,[["render",E]]);var I=H,T={name:"App",components:{Header:m,Main:N,Footer:I}};const A=(0,p.Z)(T,[["render",u]]);var B=A;(0,r.ri)(B).mount("#app")}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,r,a,o){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],a=n[s][1],o=n[s][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||u>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[l])}))?r.splice(l--,1):(i=!1,o<u&&(u=o));if(i){n.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=n.length;s>0&&n[s-1][2]>o;s--)n[s]=n[s-1];n[s]=[r,a,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var a,o,u=r[0],i=r[1],l=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(a in i)e.o(i,a)&&(e.m[a]=i[a]);if(l)var s=l(e)}for(t&&t(r);c<u.length;c++)o=u[c],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(s)},r=self["webpackChunkmathificent"]=self["webpackChunkmathificent"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(2509)}));r=e.O(r)})();
//# sourceMappingURL=app.86cf1636.js.map