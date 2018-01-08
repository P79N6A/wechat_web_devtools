'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('fs'),c=require('glob'),d=require('path'),e=require('classnames'),f=require('./72653d4b93cdd7443296229431a7aa9a.js'),g=require('./15ba1827c7f6564a45df6bd44da3a977.js'),h=require('./da7c31daaf542cf1796023d8e344b98a.js'),i=require('./f171257bbcaef547a3cf27266ccb0db2.js'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),k=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),l=require('./common/locales/index.js'),m=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),n=require('./d28a711224425b00101635efe1034c99.js'),o=require('./bc04f89cf8edab62335086e0a2a5a103.js'),p=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),q=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),r=require('./42191d95974f14b18961c9f2c730464e.js'),{DEV_INVALID_APPID:s,DEV_APP_NOT_BAND:t}=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),{default_weapp_header:u,default_tourist_weapp_header:v}=require('./5498e660c05c574f739a28bd5d202cfa.js'),{TOURIST_APPID:w,GAME_TOURIST_APPID:x}=q,y='darwin'===process.platform,z={network:{RequestDomain:[],WsRequestDomain:[],UploadDomain:[],DownloadDomain:[]},setting:_extends({},q.setting)},A=[{type:k.QUICKSTART_TYPE.WEAPP,name:'\u5EFA\u7ACB\u666E\u901A\u5FEB\u901F\u542F\u52A8\u6A21\u677F'}],B=[{type:k.QUICKSTART_TYPE.WEAPP,name:'\u5EFA\u7ACB\u666E\u901A\u5FEB\u901F\u542F\u52A8\u6A21\u677F'},{type:k.QUICKSTART_TYPE.QCLOUD_NODEJS,name:'\u5EFA\u7ACB\u817E\u8BAF\u4E91 Node.js \u542F\u52A8\u6A21\u677F'},{type:k.QUICKSTART_TYPE.QCLOUD_PHP,name:'\u5EFA\u7ACB\u817E\u8BAF\u4E91 PHP \u542F\u52A8\u6A21\u677F'}],C=[{type:k.QUICKSTART_TYPE.GAME,name:'\u5EFA\u7ACB\u6E38\u620F\u5FEB\u901F\u542F\u52A8\u6A21\u677F'}];module.exports=class extends a.Component{constructor(a){super(a),this.handleMaskClick=()=>{this.setState({quickstartDDOpen:!1,showMask:!1})},this.state={projectpath:'',appid:'',appname:'',saveBtnDisable:!0,showQuickStart:!1,checked:!0,showLoading:!1,isTourist:!1,isGameTourist:!1,errorLoc:'',errorMsg:'.',compileType:{name:'\u5C0F\u7A0B\u5E8F\u6A21\u5F0F',value:p.weapp},showCompileTypeSelect:!1,quickstartDDOpen:!1,quickstartItems:A,quickstartSelected:A[0].type,quickstartHost:''},this.compileTypeConstants=[{name:'\u5C0F\u7A0B\u5E8F\u6A21\u5F0F',value:p.weapp},{name:'\u4F1A\u8BDD\u52A8\u6001\u9875',value:p.conversation},{name:'\u641C\u7D22\u52A8\u6001\u9875',value:p.search}],this.setupDropdownController()}componentDidMount(){this.resize()}componentWillUnmount(){this.props.detach&&this.props.close()}resize(){try{let a=this.props.win?this.props.win:global.Win;this.props.detach||(a.show(),a.setResizable(!0),a.resizeTo(k.SIZE.CREATE_PROJECT.WIDTH,k.SIZE.CREATE_PROJECT.HEIGHT),a.setResizable(!1))}catch(a){}}jumpRegistration(){nw.Shell.openExternal('https://mp.weixin.qq.com/wxopen/waregister?action=step1')}setupDropdownController(){this.quickstartDDControl={},this.quickstartDDControl.toggle=()=>{if(!this.state.quickstartDDOpen){const a=this.qsInput.getBoundingClientRect();this.quickstartDDControl.left=a.left+'px',this.quickstartDDControl.top=a.top+25+'px',this.setState({quickstartDDOpen:!0,showMask:!0})}else this.setState({quickstartDDOpen:!1,showMask:!1})},this.quickstartDDControl.onItemSelected=(a)=>{this.setState({quickstartDDOpen:!1,quickstartSelected:this.state.quickstartItems[a].type})}}editAppid(a){let b=a.target,c=b.value;const d={appid:c.trim()};'appid'===this.state.errorLoc&&(d.errorLoc=''),d.appid?g({url:`${i.getWeappAttrURL}?appid=${d.appid}`,body:JSON.stringify({appid_list:[d.appid]}),method:'post',needToken:1}).then((a)=>{let b=a.body.attr_list[0];if(b.qcloud_attr_json){let a,c,d=1;try{a=JSON.parse(b.qcloud_attr_json),d=a.qcloud_dev_info.current_language,c=a.qcloud_dev_info.networking.request_domain[0]}catch(a){}const e={quickstartItems:B,quickstartSelected:k.QUICKSTART_TYPE.QCLOUD_NODEJS,quickstartHost:c};switch(d){case 1:{e.quickstartSelected=k.QUICKSTART_TYPE.QCLOUD_NODEJS;break}case 2:{e.quickstartSelected=k.QUICKSTART_TYPE.QCLOUD_PHP;break}}this.setState(e)}else if(b.game_app)this.setState({quickstartItems:C,quickstartSelected:k.QUICKSTART_TYPE.GAME,quickstartHost:''});else{const a={quickstartItems:A,quickstartHost:''};a.quickstartItems.find((a)=>a.type===this.state.quickstartSelected)||(a.quickstartSelected=k.QUICKSTART_TYPE.WEAPP),this.setState(a)}}).catch(()=>{this.resetQuickstartDropdown()}):this.resetQuickstartDropdown(),this.setState(d)}editAppname(a){let b=a.target,c=b.value;const d={appname:c};'projectname'===this.state.errorLoc&&(d.errorLoc=''),this.setState(d)}resetQuickstartDropdown(){if(this.state.showQuickStart){const a={quickstartHost:''};this.state.quickstartItems!==A&&(a.quickstartItems=A),a.quickstartItems&&!a.quickstartItems.find((a)=>a.type===this.state.quickstartSelected)&&(a.quickstartSelected=k.QUICKSTART_TYPE.WEAPP),0<Object.keys(a).length&&this.setState(a)}}tourist(a){if(!this.state.isTourist&&!this.state.isGameTourist&&a&&a.target&&'register'===a.target.dataset.type)return void this.jumpRegistration();if('tourist'===a.target.dataset.type){let a=!this.state.isTourist,b={isTourist:a};a&&'appid'===this.state.errorLoc&&(b.errorLoc=''),this.setState(b)}else if('gametourist'===a.target.dataset.type){let a=!this.state.isGameTourist,b={isGameTourist:a,appid:x};a&&'appid'===this.state.errorLoc&&(b.errorLoc=''),this.editAppid({target:{value:x}}),this.setState(b)}else{let a={isTourist:!1};this.state.isGameTourist&&(a.isGameTourist=!1,a.appid='',this.editAppid({target:{value:''}})),'appid'===this.state.errorLoc&&(a.errorLoc=''),this.setState(a)}}chooseDir(){let a=this.props.win?this.props.win.window.document.body:global.contentDocumentBody,c=document.createElement('input');c.setAttribute('type','file'),c.setAttribute('nwdirectory',!0),c.style.display='none',a.appendChild(c),c.addEventListener('change',()=>{let d;try{d=b.readdirSync(c.value)}catch(a){return void this.setState({errorLoc:'projectpath',errorMsg:a.toString()})}let e=0===d.length,f={projectpath:c.value,showQuickStart:e};if(!this.state.appname){let a='';if(e)try{a=y?c.value.match(/[^\/]*?$/)[0]:c.value.match(/[^\\]*?$/)[0]}catch(a){}f.appname=a}const g=r.getConfigFileInfo({projectpath:c.value});g.error||(f=_extends({},f,{appname:`${decodeURIComponent(g.config.projectname||'')}`}),g.config.isGameTourist?(f.appid=q.GAME_TOURIST_APPID,f.isGameTourist=!0):g.config.appid===w?f.isTourist=!0:(f.isTourist=!1,f.appid=`${g.config.appid||''}`)),'projectpath'===this.state.errorLoc&&(f.errorLoc=''),this.setState(f),a.removeChild(c)}),c.addEventListener('cancel',()=>{a.removeChild(c)}),c.click()}changeCheckbox(){this.setState({checked:!this.state.checked})}onTypeSelectClick(a){let b=this.compileTypeConstants[a],c={showCompileTypeSelect:!1};b&&(c.compileType=b),this.setState(c)}onCompileTypeClick(a){a.stopPropagation();let b=a.currentTarget.getBoundingClientRect();this.setState({compileTypeLeft:b.left,compileTypeTop:b.top+24,showCompileTypeSelect:!this.state.showCompileTypeSelect})}onContainerClick(){this.setState({showCompileTypeSelect:!1})}async addProject(){let a=this.state.projectpath,c=this.state.isTourist,d=c?w:this.state.appid,e=encodeURIComponent(this.state.appname.trim()),m=n.getVendorConfig(),o=m.currentLibVersion;if(!d)return void this.setState({errorLoc:'appid',errorMsg:l.config.CREATE_PROJECT_TIP_NO_APPID});if(!e)return void this.setState({errorLoc:'projectname',errorMsg:l.config.CREATE_PROJECT_TIP_NO_NAME});if(!a)return void this.setState({errorLoc:'projectpath',errorMsg:l.config.CREATE_PROJECT_TIP_NO_DIR});let q=`${d}_${e}`,r=j.strToHash(q),x=this.props.project.list[q];if(x)return void this.setState({appname:'',saveBtnDisable:!0,errorLoc:'projectname',errorMsg:l.config.CREATE_PROJECT_TIP_HASH_EXIST.format([d,decodeURIComponent(e)])});let y=this.state.showQuickStart&&this.state.checked;if(y)try{y=this.state.quickstartSelected||k.QUICKSTART_TYPE.WEAPP}catch(a){y=k.QUICKSTART_TYPE.WEAPP}try{let c=b.readdirSync(a);if('darwin'===process.platform&&(c=c.filter((a)=>{return 0!==a.indexOf('.')})),0!==c.length&&0>c.indexOf('app.json')&&0>c.indexOf('project.config.json')&&0>c.indexOf('game.json'))return void this.setState({errorLoc:'projectpath',errorMsg:l.config.CREATE_PROJECT_TIP_MUST_USE_EMPTY_FOLDER})}catch(a){return void this.setState({errorLoc:'projectpath',errorMsg:a.toString()})}this.setState({showLoading:!0});let A={projectpath:'',appid:'',appname:'',error:'',saveBtnDisable:!0,showLoading:!1,isTourist:!1};if(c){let b={projectid:q,hash:r,appid:d,projectname:e,projectpath:a,appShowImageUrl:v,isAdmin:!1,isTourist:!0,urlCheck:!1,compileType:this.state.compileType.value,libVersion:o,attr:_extends({},z)};this.props.createProjectSuccess(b,{initQuickStart:y}),this.setState(A),this.props.detach?(this.props.win.hide(),this.props.setConfirmInfo({show:!0,title:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_TITLE,content:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_CONTENT.format(e),callback:async(a)=>{if(a)try{this.props.setConfirmInfo({show:!1}),this.props.closeProject(),setTimeout(()=>{this.props.openProject(b.projectid),this.props.win.close()},50)}catch(a){this.props.win.close()}else this.props.win.close()}})):this.props.openProject(b.projectid),h(`project_createsuc`,d),g({url:`${i.touristCreateURL}?appid=${d}`,needToken:1}).then(()=>{}).catch((a)=>{f.error(`create tourist project error ${a}`)})}else try{const{resp:b,body:c}=await g({url:`${i.createWeappURL}?appid=${d}`,needToken:1,needCheckErrCode:1});this.setState({showLoading:!1}),f.info(`createstep.js create  ${c}`);let j=c,k=j.baseresponse,m=k?parseInt(k.errcode):0;if(m===t)return this.setState({errorLoc:'appid',errorMsg:'\u5F53\u524D\u5F00\u53D1\u8005\u672A\u7ED1\u5B9A\u6B64 AppID \uFF0C\u8BF7\u5230\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0\u64CD\u4F5C\u540E\u91CD\u8BD5'}),nw.Shell.openExternal('https://mp.weixin.qq.com/'),void f.error(`createstep.js create project error ${m}`);if(m===s)return this.setState({errorLoc:'appid',errorMsg:'\u4E0D\u5B58\u5728\u6B64 AppID \u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u8F93\u5165\u6216\u4F7F\u7528\u65E0 AppID \u6A21\u5F0F'}),void f.error(`createstep.js create project error ${m}`);if(0===m){let b=j.app_head_img?`${j.app_head_img}/0`:u,c=e;return j.app_nickname&&(c=encodeURIComponent(j.app_nickname)),x={isAdmin:j.is_admin,isTourist:!1,isGameTourist:this.state.isGameTourist,projectid:q,hash:r,appid:d,projectname:e,projectpath:a,appShowImageUrl:b,libVersion:o,attr:_extends({},z,{platform:!!j.is_platform,gameApp:!!j.game_app,platformNickname:j.platform_nickname||'',appNickName:c})},!j.game_app||(x.compileType=p.game),x.appShowName=e,c!==e&&(x.appShowName=c),x.platform&&x.platformNickname&&(x.appShowName=x.platformNickname),this.props.createProjectSuccess(x,{initQuickStart:y,quickstartHost:this.state.quickstartHost}),this.setState(A),this.props.detach?(this.props.win.hide(),this.props.setConfirmInfo({show:!0,title:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_TITLE,content:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_CONTENT.format(e),callback:async(a)=>{if(a)try{this.props.setConfirmInfo({show:!1}),this.props.closeProject(),setTimeout(()=>{this.props.openProject(x.projectid),this.props.win.close()},50)}catch(a){this.props.win.close()}else this.props.win.close()}})):this.props.openProject(x.projectid),void h(`project_createsuc`,d)}this.setState({errorMsg:c||'\u7CFB\u7EDF\u9519\u8BEF',errorLoc:'appid'})}catch(a){f.error(`create project error: ${a.toString()}`),this.setState({showLoading:!1,errorMsg:a.toString(),errorLoc:'appid'})}}render(){global.ll=this;let b=this.state.showQuickStart?{}:{display:'none'},c=this.props.cancel,d=this.state.isTourist,e=this.state.isGameTourist,f=this.state.appid;d?f='\u65E0\u5C0F\u7A0B\u5E8F AppID \u90E8\u5206\u529F\u80FD\u53D7\u9650':e&&(f='\u65E0\u5C0F\u6E38\u620F AppID \u90E8\u5206\u529F\u80FD\u53D7\u9650');let g=d?'':'\u586B\u5199\u5C0F\u7A0B\u5E8FAppID ',h=d?'\u8FD4\u56DE\u586B\u5199 AppID':'\u65E0 AppID ';const i='ui-form-item ui-form-item-inline',j=i+' ui-form-item-error',l={WebkitAppRegion:'no-drag'},m=this.compileTypeConstants.map((a)=>{return a.name}),n=a.createElement('div',{className:'ui-popover',style:{display:'none',position:'relative'}},a.createElement('div',{className:'ui-dropdown'},this.state.quickstartItems.map((b)=>a.createElement('div',{key:b.type,className:'ui-dropdown-item'+(b.type===this.state.quickstartSelected?' ui-dropdown-item-active':'')},b.name))));let p=this.state.quickstartItems.findIndex((a)=>a.type===this.state.quickstartSelected),q='';-1===p?(p=0,q!==k.QUICKSTART_TYPE.WEAPP&&(q=A[0].name)):q=this.state.quickstartItems[p].name;let r=0<44*(this.state.quickstartItems.length-1)?44*(this.state.quickstartItems.length-1):44;return a.createElement('div',{className:'dashboard',style:{WebkitAppRegion:'drag'},onClick:this.onContainerClick.bind(this)},this.state.showMask?a.createElement('div',{className:'ui-mask ui-mask-transparent',onClick:this.handleMaskClick}):null,n,a.createElement('div',{className:'dashboard-commands'},a.createElement('div',{className:'dashboard-navigator',style:this.props.detach?{display:'none'}:{}},a.createElement('a',{onClick:c,style:l},a.createElement('i',{className:'ui-icon-back'}),a.createElement('span',null,'\xA0\u5C0F\u7A0B\u5E8F\u9879\u76EE\u7BA1\u7406'))),a.createElement('div',{className:'dashboard-brand'},a.createElement('div',{className:'dashboard-logo'},a.createElement('i',{className:'ui-icon-mini-app'})),a.createElement('h3',{className:'dashboard-caption'},'\u5C0F\u7A0B\u5E8F\u9879\u76EE'),a.createElement('p',{className:'dashboard-subtitle'},'\u7F16\u8F91\u3001\u8C03\u8BD5\u5C0F\u7A0B\u5E8F')),a.createElement('div',{className:'dashboard-content'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'projectpath'===this.state.errorLoc?j:i},a.createElement('label',{className:'ui-form-label'},'\u9879\u76EE\u76EE\u5F55'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-flex',onClick:this.chooseDir.bind(this),style:l},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',readOnly:!0,placeholder:this.state.projectpath,className:'ui-input'})),a.createElement('div',{className:'ui-selector ui-selector-default'},a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:'ui-icon-arrow-down-o'})))))),a.createElement('div',{className:'appid'===this.state.errorLoc?j:i},a.createElement('label',{className:'ui-form-label'},'AppID'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{ref:(a)=>this.appidInput=a,style:l,className:'ui-input',value:f,onChange:this.editAppid.bind(this),type:'text',disabled:d||e,placeholder:''})),a.createElement('p',{className:'ui-form-tips',onClick:this.tourist.bind(this),style:l},d||e?'\u70B9\u6B64\u8FD4\u56DE\u586B\u5199 AppID':'\u82E5\u65E0 Appid \u53EF',d||e?null:a.createElement('span',null,a.createElement('a',{"data-type":'register'},' \u6CE8\u518C '),'\u6216\u4F53\u9A8C\uFF1A',a.createElement('a',{"data-type":'tourist'},'\u5C0F\u7A0B\u5E8F'),' / ',a.createElement('a',{"data-type":'gametourist'},'\u5C0F\u6E38\u620F'))))),a.createElement('div',{className:'projectname'===this.state.errorLoc?j:i},a.createElement('label',{className:'ui-form-label'},'\u9879\u76EE\u540D\u79F0'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',placeholder:'',className:'ui-input',style:l,value:this.state.appname,onChange:this.editAppname.bind(this)})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.state.showQuickStart?{}:{display:'none'}},a.createElement('label',{htmlFor:'',className:'ui-form-label'}),a.createElement('div',{className:'ui-form-controls',style:l},a.createElement('div',{className:'ui-flex'},a.createElement('label',{className:'ui-checkbox',style:{marginRight:'10px'}},a.createElement('input',{type:'checkbox'}),a.createElement('i',{className:this.state.checked?'ui-icon-checkbox-o':'ui-icon-checkbox',onClick:this.changeCheckbox.bind(this)})),a.createElement('div',{className:'ui-flex-item ui-selector'+(this.state.checked?'':' ui-selector-plain'),onClick:this.quickstartDDControl.toggle},a.createElement('p',{className:'ui-selector-input',ref:(a)=>this.qsInput=a},q),a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:'ui-icon-arrow-down-o'})),a.createElement(o,{width:'100%',height:r+'px',open:this.state.quickstartDDOpen,left:this.quickstartDDControl.left,top:this.quickstartDDControl.top,items:this.state.quickstartItems.map((a)=>a.name),onItemSelected:this.quickstartDDControl.onItemSelected,selectedIndex:p}))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.state.errorLoc?{}:{display:'none'}},a.createElement('label',{className:'ui-form-label'}),a.createElement('div',{className:'ui-form-controls'},a.createElement('p',{className:'dashboard-error-tips'},this.state.errorMsg))))),a.createElement('div',{className:'dashboard-command-ft'},a.createElement('div',{className:'dashboard-command-action'},a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.addProject.bind(this),style:l},'\u786E\u5B9A')))))}}}(require('lazyload'),require);