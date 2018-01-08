'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(a,b){b=b.toLowerCase();let c;switch(b){case'b':{c=a;break}case'kb':{c=a/1024;break}case'mb':{c=a/1024/1024;break}case'gb':{c=a/1024/1024/1024;break}default:c=-1;}return Math.ceil(c)}function b(c){let d=parseInt(c,10);if(isNaN(d)||0>d)return 0;const e=d;switch(!0){case 1024>e:return`${e} B`;case e<1048576:return`${a(e,'kb')} KB`;case e<1073741824:return`${a(e,'mb')} MB`;default:return`${a(e,'gb')} GB`;}}const c=require('react'),d=require('react-dom'),{model:f}=require('./63f52c9055d92f52ca0510da7d3dcadb.js'),e=(global.appConfig||{}).isDev;module.exports=class extends c.Component{constructor(){super(),this.state={events:[],askingForRetry:!1,retryCount:0,plain:''}}onAskForRetry(a){return new Promise((b)=>{this._askingForRetryResolver=b,this.setState({askingForRetry:!0,retryCount:a})})}handleAskingForRetryResult(a){this.setState({askingForRetry:!1}),this._askingForRetryResolver&&(this._askingForRetryResolver(!!a),this._askingForRetryResolver=null)}handleUsingLocalStorageCheckboxChange(a){const b=a.target.checked;b!==!!this.props.remote.usingLocalStorage&&this.props.changeUsingLocalStorage&&(this.props.changeUsingLocalStorage(b),this.setState({usingLocalStorageTipsShow:!0}))}componentDidMount(){f.subscribeChange(()=>{this.onStatusChange()}),f.subscribeEvent((a)=>{const b=[{event:a||{},timestamp:new Date},...this.state.events];this.setState({events:b})}),f.onAskForRetry(this.onAskForRetry.bind(this)),this.onStatusChange();const a=d.findDOMNode(this.container);if(!a)return;let b,c;b=this.webview=document.createElement('webview'),b.setAttribute('partition','persist:devtools'),b.src='about:blank',a.appendChild(b);const e=()=>{b.removeEventListener('loadcommit',e),b.addEventListener('dialog',(a)=>{a.preventDefault();const b=a.messageType,c=a.messageText,d=a.dialog;'alert'===b&&(d&&d.ok(),0<=c.indexOf('debugger:paused')?f.changeDebuggerStatus(1):0<=c.indexOf('debugger:resumed')&&f.changeDebuggerStatus(0))})},g=()=>{c.removeEventListener('loadcommit',g),c.showDevTools(!0,b);const d=`${b.getUserAgent()} remotedebugdevtools ${this.props.remote.usingLocalStorage?'usinglocalstorage':''} port/${global.messageCenterPort}`;b.setUserAgentOverride(d),b.src=`${this.props.remote.inspectUrl}`,b.setAttribute('style','position: absolute; width: 100%; height: 100%; margin: 0 auto;'),a.style.flex='1',b.addEventListener('loadcommit',e),c.parentNode.removeChild(c)},h=()=>{b.removeEventListener('loadcommit',h),c=document.createElement('webview'),c.style.visibility='hidden',c.src='about:blank',a.parentNode.insertBefore(c,a),c.addEventListener('loadcommit',g)};b.addEventListener('loadcommit',h)}onStatusChange(){let a=f.getStatus();if(a||(a={messager:{status:-1}}),this.setState(_extends({},this.state,a)),this.webview)if(a.currentSyncSdkName){const b=a.currentSyncSdkName;this.webview.executeScript({code:`(function() { try {
            var line = document.querySelector("#console-prompt .CodeMirror-lines[role='presentation']");
            line.setAttribute("data-sdkname", "${b}")
            line.classList.add("__sync");
          } catch(e) { } })();`})}else this.webview.executeScript({code:`(function() { try {
            var line = document.querySelector("#console-prompt .CodeMirror-lines[role='presentation']");
            line.setAttribute("data-sdkname", "")
            line.classList.remove("__sync");
          } catch(e) { } })();`})}handleTmpClick(){nw.Shell.openItem(this.state.dirs.tempDir)}handleDirClick(){nw.Shell.openItem(this.state.dirs.dir)}handleFinishClick(){f.endDebug()}handleOuterClick(){document.activeElement.blur()}render(){let a='';try{a=`data:image/png;base64,${this.props.remote.serverInfo.qrcode_img}`}catch(a){}const{messager:d={},_debugger:f={},dirs:g={},client:h={},syncCallIds:i={}}=this.state;return h.deviceInfo=h.deviceInfo||{},c.createElement('div',{onClick:this.handleOuterClick.bind(this),id:'outer'},c.createElement('div',{id:'container',ref:(a)=>this.container=a},c.createElement('div',{id:'mask',style:{display:this.state.askingForRetry?'block':'none'}})),c.createElement('div',{id:'sidebar'},c.createElement('div',{className:'device-info rd-cell'},c.createElement('h1',null,h.deviceInfo.device_name||'\u8FDC\u7A0B\u8BBE\u5907\u4FE1\u606F'),c.createElement('table',null,c.createElement('tr',null,c.createElement('td',null,'\u624B\u673A\u578B\u53F7'),c.createElement('td',null,h.deviceInfo.device_model||'\u672A\u77E5\u578B\u53F7')),c.createElement('tr',null,c.createElement('td',null,'\u8FD0\u884C\u7CFB\u7EDF'),c.createElement('td',null,h.deviceInfo.os||'\u672A\u77E5\u7CFB\u7EDF')),c.createElement('tr',null,c.createElement('td',null,'\u5FAE\u4FE1\u7248\u672C'),c.createElement('td',null,h.deviceInfo.wechat_version||'\u672A\u77E5\u7248\u672C')),c.createElement('tr',null,c.createElement('td',null,'\u57FA\u7840\u5E93\u7248\u672C'),c.createElement('td',null,h.deviceInfo.publib||'\u672A\u77E5\u7248\u672C')),c.createElement('tr',null,c.createElement('td',null,'\u901A\u4FE1\u5EF6\u65F6'),c.createElement('td',null,h.networkInterval&&isFinite(h.networkInterval)?h.networkInterval+'ms':c.createElement('span',{style:{fontWeight:'600'}},'\u8D85\u65F6'))),c.createElement('tr',null,c.createElement('td',null,'\u7F51\u7EDC\u7C7B\u578B'),c.createElement('td',null,(()=>{const a=h.networkType;return 0===a?'\u79BB\u7EBF':1===a?'2G':2===a?'3G':3===a?'4G':4===a?'Wi-Fi':'\u5176\u4ED6'})())))),c.createElement('div',{className:'connection-info rd-cell'},c.createElement('h1',null,'\u8FDE\u63A5\u4FE1\u606F'),c.createElement('table',null,c.createElement('tr',null,c.createElement('td',null,'\u8FDE\u63A5\u72B6\u6001'),c.createElement('td',null,(()=>{const a=d.status;return-1===a?c.createElement('span',{style:{color:'red',fontWeight:'600'}},'\u5DF2\u7ED3\u675F'):0===a?c.createElement('span',{style:{fontWeight:'600'}},'\u672A\u521D\u59CB\u5316'):1===a?c.createElement('span',{style:{fontWeight:'600'}},'\u672A\u8FDE\u63A5'):2===a?c.createElement('span',{style:{fontWeight:'600'}},'\u5DF2\u767B\u51FA'):3===a?c.createElement('span',{style:{fontWeight:'600'}},'\u6B63\u5728\u767B\u9646'):4===a?'\u7B49\u5F85\u8BBE\u5907':5===a?c.createElement('span',{style:{fontWeight:'600'}},'\u670D\u52A1\u5668\u963B\u585E'):6===a?'\u7B49\u5F85\u56DE\u5305':7===a?'\u6B63\u5E38':c.createElement('span',{style:{color:'red',fontWeight:'600'}},'\u672A\u77E5')})())),c.createElement('tr',null,c.createElement('td',null,'\u670D\u52A1\u5668\u72B6\u6001'),c.createElement('td',null,(()=>{const a=d.status;return-1===a||0===a||1===a?c.createElement('span',{style:{fontWeight:'600'}},'\u672A\u8FDE\u63A5'):2===a||3===a||4===a?'\u6B63\u5E38':5===a?c.createElement('span',{style:{fontWeight:'600'}},'\u670D\u52A1\u5668\u963B\u585E'):6===a||7===a?'\u6B63\u5E38':'\u672A\u77E5'})())),c.createElement('tr',null,c.createElement('td',null,'\u6536\u5230\u8C03\u8BD5\u4FE1\u606F\u6570'),c.createElement('td',null,d.inDebugMessageCount||0)),c.createElement('tr',null,c.createElement('td',null,'\u53D1\u51FA\u8C03\u8BD5\u4FE1\u606F\u6570'),c.createElement('td',null,d.outDebugMessageCount||0)),c.createElement('tr',null,c.createElement('td',null,'\u8C03\u8BD5\u4FE1\u606F\u53D1\u9001\u6548\u7387'),c.createElement('td',null,(d.outDebugMessageSpeed||0)+' \u4E2A/\u79D2')),c.createElement('tr',null,c.createElement('td',null,'\u8C03\u8BD5\u4FE1\u606F\u63A5\u6536\u6548\u7387'),c.createElement('td',null,(d.inDebugMessageSpeed||0)+' \u4E2A/\u79D2')),c.createElement('tr',null,c.createElement('td',null,'\u7B49\u5F85\u53D1\u9001\u8C03\u8BD5\u4FE1\u606F\u6570'),c.createElement('td',null,d.cachedDebugMessagesCount||0)),c.createElement('tr',null,c.createElement('td',null,'\u670D\u52A1\u5668\u672A\u786E\u8BA4\u8C03\u8BD5\u4FE1\u606F\u6570'),c.createElement('td',null,d.unconfirmedMessagesCount||0)),c.createElement('tr',null,c.createElement('td',null,'\u53D1\u51FA\u5305\u603B\u6570'),c.createElement('td',null,d.outCount||0)),c.createElement('tr',null,c.createElement('td',null,'\u6536\u5230\u5305\u603B\u6570'),c.createElement('td',null,d.inCount||0)),c.createElement('tr',null,c.createElement('td',null,'\u53D1\u51FA\u4FE1\u606F\u6D41\u91CF'),c.createElement('td',null,b(d.outBytesCount))),c.createElement('tr',null,c.createElement('td',null,'\u6536\u5230\u4FE1\u606F\u6D41\u91CF'),c.createElement('td',null,b(d.inBytesCount)))),c.createElement('img',{style:{width:'100px',height:'100px',display:4<d.status||0>d.status?'none':'block',margin:'0 auto'},src:a})),c.createElement('div',{className:'warns-info rd-cell'},c.createElement('h1',null,'\u8B66\u544A\u548C\u9519\u8BEF'),this.state.askingForRetry?c.createElement('div',{className:'disconnect-warn'},c.createElement('p',null,'\u5DF2\u7ECF\u65AD\u7EBF\uFF0C\u662F\u5426\u91CD\u65B0\u8FDE\u63A5\uFF1F'),c.createElement('button',{onClick:this.handleAskingForRetryResult.bind(this,!0),className:'mini'},'\u91CD\u65B0\u8FDE\u63A5'),c.createElement('button',{onClick:this.handleAskingForRetryResult.bind(this,!1),className:'mini'},'\u5426')):null,this.state.events.map((a,b)=>{return a&&a.event&&a.event.type?c.createElement('div',{className:'error-warn '+(a.event.kind?'error-'+a.event.kind:''),key:b},c.createElement('p',null,(a.timestamp||new Date).toLocaleTimeString()),c.createElement('p',null,'\u7C7B\u578B\uFF1A',a.event.type),c.createElement('p',null,'\u8BE6\u60C5\uFF1A',a.event.message||'\u65E0')):null}),1>this.state.events.length?c.createElement('p',null,'\u6682\u65E0\u8B66\u544A\u548C\u9519\u8BEF\u3002'):null),c.createElement('div',{className:'actions-info rd-cell'},c.createElement('p',{style:{textAlign:'center'}},c.createElement('input',{id:'usingLocalStorage',type:'checkbox',checked:this.props.remote.usingLocalStorage,value:this.props.remote.usingLocalStorage,onChange:this.handleUsingLocalStorageCheckboxChange.bind(this)}),c.createElement('label',{htmlFor:'usingLocalStorage',style:{cursor:'default',marginLeft:'5px'}},'\u4F7F\u7528\u5DE5\u5177\u7AEF\u7684 Storage')),c.createElement('p',{style:{textAlign:'center',color:'#999',fontSize:'12px',marginTop:'5px',display:this.state.usingLocalStorageTipsShow?'block':'none'}},'\u4E0B\u6B21\u8C03\u8BD5\u751F\u6548'),c.createElement('button',{className:'hero',onClick:this.handleFinishClick.bind(this)},'\u7ED3\u675F\u8C03\u8BD5'),e?c.createElement('button',{className:'hero',onClick:this.handleTmpClick.bind(this)},'\u6253\u5F00\u4E34\u65F6\u6587\u4EF6\u5939'):null)))}}}(require('lazyload'),require);