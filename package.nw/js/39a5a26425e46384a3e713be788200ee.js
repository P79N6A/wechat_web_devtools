'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(){g.info(`IDE is going to suicide because the inactive time has exceeded ${j/1e3/60} minutes`),h.quit()}const b=require('./8f5981105740200e87abfc379e4a36f6.js'),c=require('./8201c9f7be7447a385da48a3a5af0d42.js'),d=require('./b4fb47d5f3cee5536f111697f701f083.js'),e=require('./15da66bcecf19293a1e4cee6d641ac07.js'),f=require('./c016c015550b8c8e4a79e8e85062bd17.js'),g=require('./72653d4b93cdd7443296229431a7aa9a.js'),h=require('./84b183688a46c9e2626d3e6f83365e13.js');let i,j=3600000;const k=_extends({},b,c,d,e),l=async(a,b)=>{let c=null;try{c=f.parse(a.method,a.url)}catch(b){return`unknown command: ${a.url}`}if(!c)return`unknown command: ${a.url}`;const d=c.getName();if(k[d]){let a={};try{a=JSON.parse(b)}catch(a){}return await k[d](c,a)}return`unknown command: ${a.url}`},m=(b,c)=>{global.CLI.isTestMode&&(clearTimeout(i),i=setTimeout(a,j));let d;(function(a){var c=[];b.on('data',function(a){c.push(a)}),b.on('end',function(){d=Buffer.concat(c),a()})})(async()=>{let a=await l(b,d),e='object'==typeof a?JSON.stringify(a):a.toString(),f={"Content-Type":'object'==typeof a?'application/json':'text/plain'};c.writeHead(200,f),c.end(e)})};m.init=()=>{global.CLI.isTestMode&&(clearTimeout(i),i=setTimeout(a,j))},module.exports=m}(require('lazyload'),require);