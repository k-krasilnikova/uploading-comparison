(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{144:function(e,n){},235:function(e,n){},248:function(e,n,t){e.exports=t(475)},253:function(e,n,t){},254:function(e,n,t){},294:function(e,n){},296:function(e,n){},314:function(e,n){},316:function(e,n){},407:function(e,n){},408:function(e,n){},475:function(e,n,t){"use strict";t.r(n);var a=t(7),r=t.n(a),o=t(228),c=t.n(o),l=(t(253),t(254),t(29)),u=t.n(l),i=t(69),s=t(44),f=t(46),p=t(229),m=t.n(p),d=t(497),w=function(){return{wrapper:{display:"flex",flexDirection:"column"},downloads:{display:"flex",flexDirection:"column",margin:"20px 0"},input:{width:120}}},b=Object(d.a)(w)((function(e){var n=e.classes,t=e.uploadFiles,a=e.uploads,o=e.counter;return console.log(a),r.a.createElement("div",{className:n.wrapper},r.a.createElement("h2",null,"AWS"),r.a.createElement("input",{className:n.input,type:"file",onChange:t,multiple:!0}),r.a.createElement("div",{className:n.downloads},a.map((function(e){return r.a.createElement("a",{href:e.location,key:e.key,download:!0,target:"_blank",rel:"noopener noreferrer"},e.key)}))),r.a.createElement("p",null,o," Seconds"))})),h={bucketName:"uploading-comparison",dirName:"test",region:"eu-central-1",accessKeyId:"AKIAIFZRA2GPRQUR6WYQ",secretAccessKey:"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"},v=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],o=n[1],c=r.a.useState(0),l=Object(f.a)(c,2),p=l[0],d=l[1],w=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o([]),d(0),t=n.target.files,a=Date.now(),r=setInterval((function(){return d((Date.now()-a)/1e3)}),500),Array.from(t).forEach((function(e){m.a.uploadFile(e,h).then((function(e){o((function(n){var a=[].concat(Object(i.a)(n),[e]);return a.length===t.length&&clearInterval(r),a}))})).catch((function(e){return console.error(e)}))}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(b,{uploadFiles:w,uploads:t,counter:p})},g=t(231),E=t.n(g),y=function(){return{wrapper:{display:"flex",flexDirection:"column"},downloads:{display:"flex",flexDirection:"column",margin:"20px 0"},input:{width:120}}},j=Object(d.a)(y)((function(e){var n=e.classes,t=e.uploadFiles,a=e.uploads,o=e.counter;return console.log(a),r.a.createElement("div",{className:n.wrapper},r.a.createElement("h2",null,"Azure v10"),r.a.createElement("input",{className:n.input,type:"file",onChange:t,multiple:!0}),r.a.createElement("div",{className:n.downloads},a.map((function(e){return r.a.createElement("a",{href:"https://".concat("testtabeebblob",".blob.core.windows.net/").concat(e&&e.container,"/").concat(e&&e.name),key:e&&e.requestId,download:!0,target:"_blank",rel:"noopener noreferrer"},e&&e.name)}))),r.a.createElement("p",null,o," Seconds"))})),k=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],o=n[1],c=r.a.useState(0),l=Object(f.a)(c,2),p=l[0],m=l[1],d=E.a.createBlobService("testtabeebblob","3R0ANZD7PesJGHXaSyQmDu/skzKy0W7FI3HjnQs21E4UJr310wD14yFtWakZMgaeJfMCevX0qjOC+eb62I53Ig=="),w=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o([]),m(0),t=n.target.files,a=Date.now(),r=setInterval((function(){return m((Date.now()-a)/1e3)}),500),Array.from(t).forEach((function(e){d.createBlockBlobFromBrowserFile("testcontainer",e.name,e,(function(e,n,a){o((function(e){var a=[].concat(Object(i.a)(e),[n]);return a.length===t.length&&clearInterval(r),a}))}))}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(j,{uploadFiles:w,uploads:t,counter:p})},O=t(238),x=t(498),D=function(){return{wrapper:{display:"flex",flexDirection:"column"},downloads:{display:"flex",flexDirection:"column",margin:"20px 0"},input:{width:120}}},I=Object(d.a)(D)((function(e){var n=e.classes,t=e.uploadFiles,a=e.uploads,o=e.counter;return console.log(a),r.a.createElement("div",{className:n.wrapper},r.a.createElement("h2",null,"Azure v12"),r.a.createElement("input",{className:n.input,type:"file",onChange:t,multiple:!0}),r.a.createElement("div",{className:n.downloads},a.map((function(e){return r.a.createElement("a",{href:e.url,key:e.requestId,download:!0,target:"_blank",rel:"noopener noreferrer"},e._name)}))),r.a.createElement("p",null,o," Seconds"))})),A=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],o=n[1],c=r.a.useState(0),l=Object(f.a)(c,2),p=l[0],m=l[1],d=new x.a("https://".concat("testtabeebblob",".blob.core.windows.net").concat("?sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2020-06-08T18:01:44Z&st=2020-04-08T10:01:44Z&spr=https,http&sig=19%2BD2fnViaf0CRmEMRw4gHwpIsgKugpBPC7PfBA2sz4%3D")),w=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o([]),m(0),t=n.target.files,a=Date.now(),r=setInterval((function(){return m((Date.now()-a)/1e3)}),500),Array.from(t).forEach((function(e){var n=d.getContainerClient("testcontainer").getBlockBlobClient(e.name);n.uploadBrowserData(e).then((function(e){o((function(a){var o=[].concat(Object(i.a)(a),[Object(O.a)({},e,{},n)]);return o.length===t.length&&clearInterval(r),o}))})).catch((function(e){console.log(e)}))}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(I,{uploadFiles:w,uploads:t,counter:p})};var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(k,null),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[248,1,2]]]);
//# sourceMappingURL=main.f96fa537.chunk.js.map