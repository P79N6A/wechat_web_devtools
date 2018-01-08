'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('path'),b=require('react'),{connect:c}=require('react-redux'),d=require('prop-types'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),e=require('./a8c87029da0fa06e986298d447ab0fe2.js'),g=require('./e98c60a262d8d98e69e574a9d12a21df.js'),h=require('./5451dfc4d939398d913dc724d952b02b.js'),i=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),j=require('./efaddce19b790978e16990920754b000.js'),k=require('./584aae91d7c83393222029103ba1ac29.js'),l=require('./925e13dda17a5a2e1cbaf0212c56c31c.js'),m=require('./0df497a6fb76113a0a8e66dad897263e.js'),n=require('./aee2b6963336bb84d2ce0e0ed38dae60.js'),o=require('redux'),p=require('./0ac4da1c7ab84710f2c94e3bf0cf4861.js'),q=require('./fe312864f5142b11bfe28ad1bc5ad2f8.js'),r=require('./a1fed34995a9fdae4b41f1acb9c2e5a9.js'),s=require('./d3ca3f15cb99fc14bb8fbfeeb32ad0f5.js'),t=require('./444cd5bc8c3d312afefcdada704d0f95.js'),u=require('./b1ba6dfcea5ed09bd8f7edf39a8149d6.js'),v=require('./7d9f39319673925120c4a1020d58dbd7.js'),w=require('./a3b5b3f603a2b65817dc1171b7ec7a8d.js'),x=require('./a254abb81b6346b59aa82a08652fe610.js'),y=require('./d51f6457067a06cf51fac263b2c25b60.js'),z=require('./8e764a20d4ff4876a256ceb36e40c37e.js'),A=require('./da7c31daaf542cf1796023d8e344b98a.js'),B=require('./d326caa17e34aabeda5187fbed6e1e47.js'),C=require('./00bb746364abbf48ca081de687ce505a.js'),D=require('./bf5bd8b977a68a4f788a29b92aa86a0e.js'),E=require('./d24cc22e4b11eda71b5615ee005c61df.js'),F=require('./c465c4038a3000251743734c502c80ed.js'),G=require('./5fce949eb42d709c19a90da9440a955b.js'),H=require('./dc59f57d54946e61d27c95ab24d8cb4f.js'),I=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),J=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),K=require('./3b66d845db4d098b7a16cb0357f5c072.js'),L=require('./eadce02c750c875a10680bcfedadec88.js'),M=require('./2a36cc34e5f44e62f9188b9fc0871d70.js'),N=require('./37d8b9297fb1bd87f9a3ac407b8006a0.js'),O=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),P=require('./f4b122ca93225892eb1487c959c929f6.js'),Q=require('./d62fc37d7aa6416d5dcc240ba94175cd.js'),R=require('./106eac0139723db6a35b934f19cb4aa5.js'),S=require('./03b7faa8f76486fc3878b17c9a674a7e.js'),T=require('./5dc59f418d85e854c1a12d402d29e2d7.js'),U=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),V=require('./42191d95974f14b18961c9f2c730464e.js'),W='darwin'===process.platform;class X extends b.Component{constructor(a){super(a),this.state={},this.lastWorkbenchShowWindowWidth=0,this._onConfigUpdate=this.onConfigUpdate.bind(this),this.reportMemoryTimer=null,this.lastReportMemory=0,this.lastReportMemoryTime=0,this._onResize=this.onResize.bind(this),this._onMove=this.onMove.bind(this)}componentDidMount(){this.props.win&&(global.windowMap.set('MAIN',this.props.win),this.props.win.setMinimumSize(f.MIN_MAIN_WINDOW_WIDTH,f.MIN_MAIN_WINDOW_HEIGHT),this.props.win.on('resize',this._onResize),h.init(this.props.win),h.update());let a=H.get();a&&a.scene&&this.props.updateSceneConfig(a),M.startSync(),H.on('CONFIG_UPDATE',this._onConfigUpdate),this.reportMemoryTimer=setInterval(this.reportMemory.bind(this),300000),this.props.requestProjectAttr(),this.watchProjectConfig()}componentWillUnmount(){H.off('CONFIG_UPDATE',this._onConfigUpdate),M.stopSync(),clearInterval(this.reportMemoryTimer)}componentWillReceiveProps(a){a.workbenchShow!=this.props.workbenchShow&&(a.workbenchShow?a.win.width=Math.max(this.lastWorkbenchShowWindowWidth,a.win.width,a.simulatorWindowWidth+100):(this.lastWorkbenchShowWindowWidth=a.win.width,a.win.width=a.simulatorWindowWidth))}getChildContext(){return{currentNWWindow:this.props.win?this.props.win:global.Win}}async watchProjectConfig(){let b=this.props.project;this.projectFiles=await Q(b.projectpath),this.projectFiles.on('all',(c,d)=>{d=a.relative(b.projectpath,d),'project.config.json'==d&&this.projectConfigFileChanged()}),this.projectConfigFileChanged()}async projectConfigFileChanged(){const a=this.props.project,b=V.getConfigFileInfo(a);if(!b.error)this.props.setProjectConfig(b.config);else{let a=null;'readerror'===b.error.type?a={title:'',content:'\u8BFB\u53D6 project.config.json \u6587\u4EF6\u5931\u8D25\u3002',showCancel:!1}:'parseerror'===b.error.type?a={title:'',content:'\u89E3\u6790 project.config.json \u6587\u4EF6\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5176\u5185\u5BB9\u6216\u5220\u9664\u6B64\u6587\u4EF6\u3002',showCancel:!1}:'contenterror'===b.error.type&&(a={title:'',content:`解析 project.config.json 文件失败，${b.error.message}`,showCancel:!1}),a&&this.props.confirm(a)}}onResize(a,b){this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.props.windowActions.appResize({width:a,height:b}),this.resizeTimer=null},20)}onMove(a,b){this.moveTimer&&clearTimeout(this.moveTimer),this.moveTimer=setTimeout(()=>{this.props.windowActions.appResize({x:a,y:b}),this.moveTimer=null},20)}checkWindowStatus(){let a=this.props.windowStatus.mode;if(a==f.WINDOW_MODE.FULLSCREEN)this.props.win.enterFullscreen();else if(a==f.WINDOW_MODE.WINDOW_MAXIMIZE)this.props.win.maximize();else if(a==f.WINDOW_MODE.FREE){let a=this.props.windowStatus.position;this.props.win.moveTo(a.x,a.y),this.props.win.resizeTo(a.width,a.height)}}onBodyClick(a){this.props.clickkey!=L.NONE&&this.props.bodyClick(a),a.target.partition?'persist:editor'===a.target.partition?this.props.recordFocus(f.WINDOW_FOCUS.EDITOR):'persist:devtools'===a.target.partition?this.props.recordFocus(f.WINDOW_FOCUS.DEVTOOLS):'persist:remotedebugdevtools'===a.target.partition&&this.props.recordFocus(f.WINDOW_FOCUS.REMOTE_DEBUG_DEVTOOLS):this.props.recordFocus(f.WINDOW_FOCUS.BODY)}reportMemory(){chrome.processes.getProcessInfo([],!0,(a)=>{let b=0;for(let c in a){let d=a[c];d.privateMemory&&(b+=d.privateMemory)}b=parseInt(b/1024/1024);isNaN(b)||(Date.now()-this.lastReportMemoryTime>7200000||100<Math.abs(b-this.lastReportMemory))&&(console.log('memory_monitor',this.props.project.appid,`${b},${this.props.restartTimes}`),A('memory_monitor',this.props.project.appid,`${b},${this.props.restartTimes}`),this.lastReportMemoryTime=Date.now(),this.lastReportMemory=b)})}onConfigUpdate(a){this.props.updateSceneConfig(a)}onAboutClick(){this.props.windowActions.setAboutWindow({show:!0})}getSimulator(a){let c=this.props,d=c.simulatorWindowWidth;return(c.simulatorShow?!c.workbenchShow&&(d='100%'):d=0,c.project.attr&&c.project.attr.gameApp)?a==J.conversation||a==J.search?b.createElement(w,{width:d}):b.createElement(x,{width:d}):a===J.weapp?b.createElement(k,{width:d}):a===J.search||a===J.conversation?b.createElement(w,{width:d}):null}getService(a){let c=this.props,d=c.debuggerHeight;if(c.project.attr&&c.project.attr.gameApp)return a==J.conversation||a==J.search?b.createElement(v,{height:d}):b.createElement(y,{height:d});return a===J.weapp?b.createElement(u,{height:d}):a===J.search||a===J.conversation?b.createElement(v,{height:d}):null}getOptionsComponents(){let a=this.props,c=[];return a.uploadinfoShow&&c.push(b.createElement(C,{key:'upload'})),a.confirmShow&&c.push(b.createElement(D,{key:'confirm'})),a.noticecenterShow&&c.push(b.createElement(z,{key:'noticecenter'})),a.addDeviceShow&&c.push(b.createElement(R,{key:'adddevice'})),a.qcloudUploadDialogShow&&c.push(b.createElement(q,{key:'qclouduploaddialog'})),a.qcloudDeployDialogShow&&c.push(b.createElement(t,{key:'qclouddeploydialog'})),a.qcloudUploadIDCShow&&c.push(b.createElement(r,{key:'qclouduploadidc'})),a.musicShow&&c.push(b.createElement(S,{key:'music'})),c}render(){let a=this.props,c=a.project.compileType,d='workbench';a.workbenchShow||(d+=' ui-invisible');let e=null;return this.props.maskType&&this.props.maskType===f.MASK_TYPE.GLOBAL_BLOCKING&&(e=b.createElement('div',{className:'ui-mask ui-mask-transparent'})),b.createElement('div',{style:{height:'inherit'},onClick:this.onBodyClick.bind(this)},b.createElement(l,null),b.createElement('div',{className:'left'===a.simulatorPosition?'main':'main main-reverse'},b.createElement(p,{compileType:c,project:this.props.project}),this.getOptionsComponents(),this.getSimulator(c),b.createElement('div',{className:d},b.createElement(j,null),this.getService(c)),b.createElement(B,null),this.props.showQCloudUploading?b.createElement(s,null):null,this.props.showCustomAnalysis?b.createElement(m,null):null,this.props.showMobileTest?b.createElement(n,null):null,this.props.showSelectProject?b.createElement(E,{detach:!0}):null,this.props.showCreateProject?b.createElement(F,{detach:!0}):null,this.props.showRemoteDebugWindow?b.createElement(G,null):null),b.createElement(P,null),e)}}X.childContextTypes={currentNWWindow:d.object},module.exports=c((a)=>{let b=a.window.debug||{},c=a.window.editor||{},d=a.window.simulator||{},e=a.info.uploadInfo||{},f=a.info.confirmInfo||{},g=a.toolbar.clickKey,h=a.simulator.music&&a.simulator.music.status;return{debuggerHeight:b.height||100,simulatorWindowWidth:d.width||500,workbenchShow:b.show||c.show,simulatorShow:d.show,simulatorPosition:d.position,uploadinfoShow:e.show,addDeviceShow:a.info.addDeviceInfo&&a.info.addDeviceInfo.show,noticecenterShow:L.NOTICECENTER==g||L.LOGINQRCODE==g,clickkey:g,confirmShow:f.show,maskType:a.window.mask.show?a.window.mask.type:'',showCustomAnalysis:a.debug.customAnalysis.isOpen,showMobileTest:a.debug.mobileTest.isOpen,showSelectProject:!!a.window.popup.selectProject&&a.window.popup.selectProject.show,showCreateProject:!!a.window.popup.createProject&&a.window.popup.createProject.show,showRemoteDebugWindow:!!a.window.remoteDebugWindow.show,showQCloudUploading:a.window.qcloud.uploading&&a.window.qcloud.uploading.show,project:a.project.current||{},restartTimes:a.simulator.restartTimes,windowStatus:a.window.windowStatus,qcloudUploadIDCShow:a.window.qcloud.uploadIDCShow,qcloudUploadDialogShow:a.window.qcloud.uploadShow,qcloudDeployDialogShow:a.window.qcloud.deployShow,musicShow:h==T.MUSIC_STATE_PLAY||h==T.MUSIC_STATE_PAUSE}},(a)=>{return{bodyClick:(b)=>{a(N.bodyClick(b))},recordFocus:(b)=>a(e.recordFocus(b)),maximizeWindow:()=>a(e.appMax()),requestProjectAttr:()=>{a(O.requestProjectAttr())},windowActions:I.bindActionCreators(e,a),updateSceneConfig:I.bindActionCreators(K.updateSceneConfig,a),setProjectConfig:I.bindActionCreators(O.setProjectConfig,a),confirm(b,c){a(U.setConfirmInfo(_extends({show:!0,showCancel:!1,callback:c},b)))}}})(X)}(require('lazyload'),require);