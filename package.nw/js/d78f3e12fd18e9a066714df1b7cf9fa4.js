'use strict';!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('http'),d=require('request'),e=require('./72653d4b93cdd7443296229431a7aa9a.js'),f=require('./74af8a23ddee45c6c1265c88746b66bc.js'),g=require('./c74067b2c1f476fa940f6315c56fb29e.js'),h=require('./84b183688a46c9e2626d3e6f83365e13.js');module.exports={start:(i,j)=>new Promise((k,l)=>{try{e.info(`start cli server, local port ${i}, cli client port ${j||'undefined'}`);const l=c.createServer(f.userRequestHandler);l.listen(i,'127.0.0.1');const m=nw.App.getDataPath();if(a.writeFileSync(b.join(m,'.ide'),i,'utf8'),j)d({url:`http://127.0.0.1:${j}/updatePort?port=${i}`},(a)=>{a&&e.error('fail to notify remote cli program:',a)}),d({url:`http://127.0.0.1:${j}/wechatdevtools/${encodeURIComponent(nw.App.manifest.name)}/updateport/${i}`},(a)=>{a&&(e.error('fail to notify remote driver program:',a),global.CLI.isTestMode&&(e.error('quit ide...'),h.quit()))});else try{j=parseInt(a.readFileSync(b.join(m,'.cli'),'utf8')),d({url:`${'http://127.0.0.1'}:${j}/updatePort?port=${i}`,timeout:2e3},(a)=>{a?e.info(`no cli client started`):g.updateRemoteCLIPort(j)})}catch(a){e.info(`no cli client started`)}k()}catch(a){l(a)}})}}(require('lazyload'),require);