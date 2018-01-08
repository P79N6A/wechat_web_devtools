'use strict';!function(require,directRequire){function a(a){let b=i.createHash('md5');return b.update(a).digest('hex')}async function b(a,b=()=>{}){return new Promise(async(c,d)=>{try{const d=Date.now(),e=[...a];b('compilejs','\u6B63\u5728\u5904\u7406 '+a[0].file);const f=await Promise.all(a.map((a)=>{return k({taskName:'processJS',config:{file:a.file,es6:a.es6?'yes':'no',minified:a.minified?'yes':'no',sourceMaps:'map'},dataStr:a.code,maxTimeout:180000,useBackup:!0,downgrade:!1,onAfterRun:()=>{const c=e.findIndex((b)=>b===a);0<=c&&e.splice(c,1),e[0]&&b('compilejs','\u6B63\u5728\u5904\u7406 '+e[0].file)}})}));console.log(`compilejs all files cost time: ${Date.now()-d}`),c(f)}catch(a){a instanceof Error?d(a):d(new Error(a))}})}const c=require('fs'),d=require('path'),e=require('mkdir-p'),f=require('babel-core'),g=require('uglify-js'),h=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('crypto'),j=require('./48679210e49dc5028a8b6642263eba75.js'),k=require('./9beb6be9c4f08fd7406b0e6f964234ea.js'),l=require('./common/locales/index.js'),{bufToUTF8:m}=require('./efc820e1b92d6e4063535296d4a24213.js'),{FILE_NOT_UTF8:n,BABEL_TRANS_JS_ERR:o,UGLIFY_JS_ERR:p,BABILI_JS_ERR:q}=require('./949d8235c744ced2a80121e4dba34c28.js');var r={};module.exports=function(f,g={}){r[f.hash]||(r[f.hash]={});let k=r[f.hash];const i=g.onProgressUpdate||function(){},o=g.onFilesIgnored||function(){};return new Promise(async(p,q)=>{let{es6:r,minified:s,newFeature:t}=f.setting,u=await j(f),v=u.subContext,{distPath:w}=g,x=await h(f),y=x.getAllJSFiles();const z=[],A=[];for(let b=0,e=y.length;b<e;b++){let e=y[b],f=v&&0===e.indexOf(v),g=d.normalize(e.replace(/\.js$/,'')),h=x.getFile(e,null),i=m(h);if(void 0===i){let a=new Error(l.config.FILE_NOT_UTF8.format(e));return a.code=n,q(a)}let j=Date.now(),o=a(i),p=`${e}_${r}_${s}`;if(k[p]&&k[p].md5===o)console.log('compile js',e,'in cache, skip.');else if((r||s)&&512000>i.length)z.push({file:e,code:i,es6:r,minified:s,md5:o});else{let a='';try{const b=/\/\/[#|@] sourceMappingURL=[\s]*(\S*)[\s]*$/.exec(i);if(b&&b[1])if(/\.js\.map$/.test(b[1])){let f=d.dirname(d.join(x.srcPath,e));a=c.readFileSync(d.join(f,b[1])),a=JSON.stringify(JSON.parse(a))}else{const c=b[1].split('base64,')[1];a=Buffer.from(c,'base64').toString(),a=JSON.stringify(JSON.parse(a))}}catch(b){a=''}k[`${e}_${r}_${s}`]={md5:o,jsCode:i,map:a,ignored:(r||s)&&512000<=i.length}}}if(0<z.length){let a=[];try{a=await b(z,i)}catch(a){return q(a)}for(let b=0,c=z.length;b<c;b++){if(a[b].error){const c=a[b].error,d=new Error(c.message);return d.code=c.code,q(d)}const{file:c,md5:d}=z[b];k[`${c}_${r}_${s}`]={md5:d,jsCode:a[b].code,map:a[b].map}}}for(let a=0,b=y.length;a<b;a++){const b=y[a];let f=d.join(w,b),g=d.dirname(f);e.sync(g);const h=k[`${b}_${r}_${s}`];if(h&&h.jsCode){const a=h.jsCode;c.writeFileSync(f,a),h.ignored&&A.push(b),h.map&&c.writeFileSync(d.join(w,`${b}.map`),h.map)}}o(A),p()})}}(require('lazyload'),require);