(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{38:function(e,t,n){e.exports=n(88)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),i=n.n(a),c=(n(43),n(37)),l=n(11),d=n(15),s=n(14);n(44);function p(){return o.a.createElement("h1",null,"To Do List")}n(45);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=e.text,n=e.onClick,r=e.style;return console.log("style:",r),o.a.createElement("button",{onClick:n,style:m({},r)},t)}n(46);var g={color:"grey",textDecoration:"line-through"};function b(e){var t=e.innerRef,n=e.draggableProps,r=e.dragHandleProps,a=e.dragStyle,i=e.item,c=e.index,l=e.handleCheck;return o.a.createElement("div",Object.assign({className:"todo-item-container"},n,r,{ref:t,style:a}),o.a.createElement("span",{className:"todo-description-text",style:i.completed?g:{}},i.details),o.a.createElement("input",{type:"checkbox",checked:i.completed,onChange:function(){return l(c)}}))}n(47);function y(){return o.a.createElement("div",{class:"footer"},o.a.createElement("a",{href:"https://github.com/scotteratigan/todo-list",target:"_blank",rel:"noopener noreferrer"},"View Page Source"))}var O=[{id:1,details:"Talk to Recruiter",completed:!0},{id:2,details:"Read Coding Challenge",completed:!0},{id:3,details:"Read React DnD Docs",completed:!0},{id:4,details:"npx-create-react-app",completed:!0},{id:5,details:"npm install things",completed:!0},{id:6,details:"Implement requested features",completed:!0},{id:7,details:"Deploy to GitHub",completed:!0},{id:8,details:"Schedule Onsite Interview",completed:!1},{id:9,details:"Attend Onsite Interview",completed:!1},{id:10,details:"Begin Contract",completed:!1},{id:11,details:"Work Hard Daily",completed:!1},{id:12,details:"Accept Permanent Role",completed:!1},{id:13,details:"Continue to Grow into Role",completed:!1},{id:14,details:"Mentor New Team Members",completed:!1},{id:15,details:"Grow eCommerce traffic by developing amazing customer experiences",completed:!1},{id:16,details:"Propel Sam's club to #1 ecommerce site globally",completed:!1},{id:17,details:"Purchase Amazon.com",completed:!1},{id:18,details:"Reform Education - Teach All Children to Code",completed:!1},{id:19,details:"Announce Campaign for President",completed:!1},{id:20,details:"Win Primary Election",completed:!1},{id:21,details:"Win General Election",completed:!1},{id:22,details:"Implement World Peace",completed:!1},{id:23,details:"Explore the Galaxy",completed:!1}];n(48);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v=function(e,t,n){var r=Array.from(e),o=r.splice(t,1),a=Object(d.a)(o,1)[0];return r.splice(n,0,a),r},P=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({background:e?"#333":"#eee"},t)},j=function(e){return{background:e?"lightblue":"rgba(0, 0, 0, 0)"}};var w=function(){var e=Object(r.useState)(5),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(O),l=Object(d.a)(i,2),u=l[0],m=l[1];function g(e){var t=Object(c.a)(u),n=t[e];n.completed=!n.completed,t[e]=n,m(t)}return o.a.createElement("div",{className:"todos-container"},o.a.createElement(p,null),o.a.createElement(s.a,{onDragEnd:function(e){if(e.destination){var t=v(u,e.source.index,e.destination.index);m(t)}}},o.a.createElement(s.c,{droppableId:"droppable"},(function(e,t){return o.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:j(t.isDraggingOver)}),u.slice(0,n).map((function(e,t){return o.a.createElement(s.b,{key:e.id,draggableId:e.id,index:t},(function(n,r){return o.a.createElement(b,{innerRef:n.innerRef,draggableProps:n.draggableProps,dragHandleProps:n.dragHandleProps,dragStyle:P(r.isDragging,n.draggableProps.style),item:e,index:t,handleCheck:g})}))})),e.placeholder)}))),n<O.length&&o.a.createElement(f,{text:"Show More",onClick:function(){a(n+5)},style:{display:"block",width:"80%",margin:"10px auto"}}),o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.2d7c93d3.chunk.js.map