'use strict';!function(require,directRequire){function a(a,b,c,e){c=0<c?c:1;let f=d(a,b,c);return`${e}\n${f}`}const b=require('path'),c=require('fs'),d=require('babel-code-frame'),e=require('./84b183688a46c9e2626d3e6f83365e13.js'),f=require('./libs/jsonlint.js').parser,g=require('./common/locales/index.js'),h=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./2bc7cd511c5a7e0e403126d943b041b1.js'),j=require('./9fdd4ac31a05c27355910f0d74accd4c.js');f.parseError=f.lexer.parseError=function(a,b){throw b},module.exports=async function(d){let k=await h(d),l=k.srcPath,m=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),n='game.json',o='';try{o=k.getFile(n)}catch(a){o='';let b=new Error(a.message);throw b.code=i.GAME_JSON_READ_ERR,b}let p={};try{p=f.parse(o),p.configFrom=n}catch(b){let c=`编译 game.json 文件出错: Expecting ${b.expected}, got ${b.token}`,d=a(o,b.line,b.loc.first_column,c),e=new Error(d);throw e.code=i.GAME_JSON_PARSE_ERR,e}let q=p.deviceOrientation;if(q)if('string'!=e.getType(q)){let a=new Error(g.config.JSON_CONTENT_SHOULD_BE.formateLocales(['deviceOrientation','String \u7C7B\u578B']));throw a.code=i.GAME_JSON_CONTENT_ERR,a}else if('portrait'!=q&&'landscape'!=q){let a=new Error(g.config.JSON_CONTENT_SHOULD_BE.formateLocales(['deviceOrientation','"portrait" \u6216 "landscape"']));throw a.code=i.GAME_JSON_CONTENT_ERR,a}if(p.networkTimeout&&'object'!=e.getType(p.networkTimeout)){let a=new Error(g.config.JSON_CONTENT_SHOULD_BE.formateLocales(['networkTimeout','Object']));throw a.code=i.GAME_JSON_CONTENT_ERR,a}if(p.subContext){let a;if(a=p.subContext.replace('./',''),/\/$/.test(a)||(a=`${a}/`),'/'===a||'./'===a||0===a.indexOf('.')){let a=new Error('subContext \u8BBE\u7F6E\u4E0D\u5408\u6CD5\uFF0C\u5FC5\u987B\u4E3A\u9879\u76EE\u76EE\u5F55\u4E2D\u7684\u4E00\u4E2A\u5B50\u76EE\u5F55\u3002');throw a.code=i.GAME_SUBCONTEXT_ERR,a}let c=b.join(a,'sub.js');try{k.getFile(c)}catch(a){let b=new Error(a.message);throw b.code=i.GAME_SUBJS_NOT_FOUND,b}p.subContext=a}let r=d.compileType;if(r==j.conversation||r==j.search){let a,f=p.widgets,h='';if(!f)a=new Error(g.config.JSON_WIDGETS_EMPTY.format('game.json'));else if('array'!=e.getType(f))a=new Error(g.config.JSON_WIDGETS_NOT_ARRAY.format('game.json'));else{let i=[];f.forEach((a,f)=>{if('object'!=e.getType(a))i.push(g.config.JSON_WIDGETS_ITEM_NOT_OBJECT.format(['game.json',f]));else if('conversation'!=a.type&&'search'!=a.type)i.push(g.config.JSON_WIDGETS_TYPE_INVALID.format(['game.json',f,'conversation\u3001search']));else if(!a.path||'string'!=e.getType(a.path))i.push(g.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['game.json',f]));else if(!c.existsSync(b.join(l,a.path)))i.push(g.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['game.json',f]));else{let d=c.statSync(b.join(l,a.path));d.isDirectory()?!c.existsSync(b.join(l,a.path,'widget.js'))&&i.push(g.config.JSON_WIDGETS_JS_NOT_FOUND.format(['game.json',f,'widget.js'])):i.push(g.config.JSON_WIDGETS_PATH_SHOULD_BE_DIR.format(['game.json',f]))}h||a.type!=d.compileType||(h=a.path)}),h||i.push(g.config.JSON_WIDGETS_TYPE_NOT_FOUND.format(['game.json',d.compileType])),0<i.length&&(a=new Error(i.join('\n')))}if(a)throw a.code=i.GAME_JSON_CONTENT_ERR,a}return p}}(require('lazyload'),require);