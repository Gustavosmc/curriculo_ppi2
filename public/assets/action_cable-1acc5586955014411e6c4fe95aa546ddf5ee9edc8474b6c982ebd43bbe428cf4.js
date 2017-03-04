(function(){(function(){(function(){var t=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},createConsumer:function(t){var n;return null==t&&(t=null!=(n=this.getConfig("url"))?n:this.INTERNAL.default_mount_path),new e.Consumer(this.createWebSocketURL(t))},getConfig:function(e){var t;return t=document.head.querySelector("meta[name='action-cable-"+e+"']"),null!=t?t.getAttribute("content"):void 0},createWebSocketURL:function(e){var t;return e&&!/^wss?:/i.test(e)?(t=document.createElement("a"),t.href=e,t.href=t.href,t.protocol=t.protocol.replace("http","ws"),t.href):e},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var e;if(e=1<=arguments.length?t.call(arguments,0):[],this.debugging)return e.push(Date.now()),console.log.apply(console,["[ActionCable]"].concat(t.call(e)))}}}).call(this)}).call(this);var e=this.ActionCable;(function(){(function(){var t=function(e,t){return function(){return e.apply(t,arguments)}};e.ConnectionMonitor=function(){function n(e){this.connection=e,this.visibilityDidChange=t(this.visibilityDidChange,this),this.reconnectAttempts=0}var i,r,o;return n.pollInterval={min:3,max:30},n.staleThreshold=6,n.prototype.start=function(){if(!this.isRunning())return this.startedAt=r(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),e.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},n.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=r(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),e.log("ConnectionMonitor stopped")},n.prototype.isRunning=function(){return null!=this.startedAt&&null==this.stoppedAt},n.prototype.recordPing=function(){return this.pingedAt=r()},n.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,e.log("ConnectionMonitor recorded connect")},n.prototype.recordDisconnect=function(){return this.disconnectedAt=r(),e.log("ConnectionMonitor recorded disconnect")},n.prototype.startPolling=function(){return this.stopPolling(),this.poll()},n.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},n.prototype.poll=function(){return this.pollTimeout=setTimeout(function(e){return function(){return e.reconnectIfStale(),e.poll()}}(this),this.getPollInterval())},n.prototype.getPollInterval=function(){var e,t,n,r;return r=this.constructor.pollInterval,n=r.min,t=r.max,e=5*Math.log(this.reconnectAttempts+1),Math.round(1e3*i(e,n,t))},n.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return e.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+o(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?e.log("ConnectionMonitor skipping reopening recent disconnect"):(e.log("ConnectionMonitor reopening"),this.connection.reopen())},n.prototype.connectionIsStale=function(){var e;return o(null!=(e=this.pingedAt)?e:this.startedAt)>this.constructor.staleThreshold},n.prototype.disconnectedRecently=function(){return this.disconnectedAt&&o(this.disconnectedAt)<this.constructor.staleThreshold},n.prototype.visibilityDidChange=function(){if("visible"===document.visibilityState)return setTimeout(function(t){return function(){if(t.connectionIsStale()||!t.connection.isOpen())return e.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),t.connection.reopen()}}(this),200)},r=function(){return(new Date).getTime()},o=function(e){return(r()-e)/1e3},i=function(e,t,n){return Math.max(t,Math.min(n,e))},n}()}).call(this),function(){var t,n,i,r,o,a,s=[].slice,l=function(e,t){return function(){return e.apply(t,arguments)}},u=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};r=e.INTERNAL,n=r.message_types,i=r.protocols,o=2<=i.length?s.call(i,0,t=i.length-1):(t=0,[]),a=i[t++],e.Connection=function(){function t(t){this.consumer=t,this.open=l(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new e.ConnectionMonitor(this),this.disconnected=!0}return t.reopenDelay=500,t.prototype.send=function(e){return!!this.isOpen()&&(this.webSocket.send(JSON.stringify(e)),!0)},t.prototype.open=function(){if(this.isActive())throw e.log("Attempted to open WebSocket, but existing socket is "+this.getState()),new Error("Existing connection must be closed before opening");return e.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+i),null!=this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new WebSocket(this.consumer.url,i),this.installEventHandlers(),this.monitor.start(),!0},t.prototype.close=function(e){var t,n;if(t=(null!=e?e:{allowReconnect:!0}).allowReconnect,t||this.monitor.stop(),this.isActive())return null!=(n=this.webSocket)?n.close():void 0},t.prototype.reopen=function(){var t;if(e.log("Reopening WebSocket, current state is "+this.getState()),!this.isActive())return this.open();try{return this.close()}catch(n){return t=n,e.log("Failed to reopen WebSocket",t)}finally{e.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}},t.prototype.getProtocol=function(){var e;return null!=(e=this.webSocket)?e.protocol:void 0},t.prototype.isOpen=function(){return this.isState("open")},t.prototype.isActive=function(){return this.isState("open","connecting")},t.prototype.isProtocolSupported=function(){var e;return e=this.getProtocol(),u.call(o,e)>=0},t.prototype.isState=function(){var e,t;return t=1<=arguments.length?s.call(arguments,0):[],e=this.getState(),u.call(t,e)>=0},t.prototype.getState=function(){var e,t,n;for(t in WebSocket)if(n=WebSocket[t],n===(null!=(e=this.webSocket)?e.readyState:void 0))return t.toLowerCase();return null},t.prototype.installEventHandlers=function(){var e,t;for(e in this.events)t=this.events[e].bind(this),this.webSocket["on"+e]=t},t.prototype.uninstallEventHandlers=function(){var e;for(e in this.events)this.webSocket["on"+e]=function(){}},t.prototype.events={message:function(e){var t,i,r,o;if(this.isProtocolSupported())switch(r=JSON.parse(e.data),t=r.identifier,i=r.message,o=r.type,o){case n.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case n.ping:return this.monitor.recordPing();case n.confirmation:return this.subscriptions.notify(t,"connected");case n.rejection:return this.subscriptions.reject(t);default:return this.subscriptions.notify(t,"received",i)}},open:function(){if(e.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return e.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(){if(e.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return e.log("WebSocket onerror event")}},t}()}.call(this),function(){var t=[].slice;e.Subscriptions=function(){function n(e){this.consumer=e,this.subscriptions=[]}return n.prototype.create=function(t,n){var i,r,o;return i=t,r="object"==typeof i?i:{channel:i},o=new e.Subscription(this.consumer,r,n),this.add(o)},n.prototype.add=function(e){return this.subscriptions.push(e),this.consumer.ensureActiveConnection(),this.notify(e,"initialized"),this.sendCommand(e,"subscribe"),e},n.prototype.remove=function(e){return this.forget(e),this.findAll(e.identifier).length||this.sendCommand(e,"unsubscribe"),e},n.prototype.reject=function(e){var t,n,i,r,o;for(i=this.findAll(e),r=[],t=0,n=i.length;t<n;t++)o=i[t],this.forget(o),this.notify(o,"rejected"),r.push(o);return r},n.prototype.forget=function(e){var t;return this.subscriptions=function(){var n,i,r,o;for(r=this.subscriptions,o=[],n=0,i=r.length;n<i;n++)t=r[n],t!==e&&o.push(t);return o}.call(this),e},n.prototype.findAll=function(e){var t,n,i,r,o;for(i=this.subscriptions,r=[],t=0,n=i.length;t<n;t++)o=i[t],o.identifier===e&&r.push(o);return r},n.prototype.reload=function(){var e,t,n,i,r;for(n=this.subscriptions,i=[],e=0,t=n.length;e<t;e++)r=n[e],i.push(this.sendCommand(r,"subscribe"));return i},n.prototype.notifyAll=function(){var e,n,i,r,o,a,s;for(n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],o=this.subscriptions,a=[],i=0,r=o.length;i<r;i++)s=o[i],a.push(this.notify.apply(this,[s,n].concat(t.call(e))));return a},n.prototype.notify=function(){var e,n,i,r,o,a,s;for(a=arguments[0],n=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],s="string"==typeof a?this.findAll(a):[a],o=[],i=0,r=s.length;i<r;i++)a=s[i],o.push("function"==typeof a[n]?a[n].apply(a,e):void 0);return o},n.prototype.sendCommand=function(e,t){var n;return n=e.identifier,this.consumer.send({command:t,identifier:n})},n}()}.call(this),function(){e.Subscription=function(){function e(e,n,i){this.consumer=e,null==n&&(n={}),this.identifier=JSON.stringify(n),t(this,i)}var t;return e.prototype.perform=function(e,t){return null==t&&(t={}),t.action=e,this.send(t)},e.prototype.send=function(e){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(e)})},e.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},t=function(e,t){var n,i;if(null!=t)for(n in t)i=t[n],e[n]=i;return e},e}()}.call(this),function(){e.Consumer=function(){function t(t){this.url=t,this.subscriptions=new e.Subscriptions(this),this.connection=new e.Connection(this)}return t.prototype.send=function(e){return this.connection.send(e)},t.prototype.connect=function(){return this.connection.open()},t.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},t.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},t}()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);