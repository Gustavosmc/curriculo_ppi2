!function(e){e.extend(e.inputmask.defaults.definitions,{A:{validator:"[A-Za-z]",cardinality:1,casing:"upper"},"#":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1,casing:"upper"}}),e.extend(e.inputmask.defaults.aliases,{url:{mask:"ir",placeholder:"",separator:"",defaultPrefix:"http://",regex:{urlpre1:/[fh]/,urlpre2:/(ft|ht)/,urlpre3:/(ftp|htt)/,urlpre4:/(ftp:|http|ftps)/,urlpre5:/(ftp:\/|ftps:|http:|https)/,urlpre6:/(ftp:\/\/|ftps:\/|http:\/|https:)/,urlpre7:/(ftp:\/\/|ftps:\/\/|http:\/\/|https:\/)/,urlpre8:/(ftp:\/\/|ftps:\/\/|http:\/\/|https:\/\/)/},definitions:{i:{validator:function(){return!0},cardinality:8,prevalidator:function(){for(var e=[],t=0;8>t;t++)e[t]=function(){var e=t;return{validator:function(t,n,i,r,o){if(o.regex["urlpre"+(e+1)]){var a=t;if(0<e+1-t.length&&(a=n.join("").substring(0,e+1-t.length)+""+a),t=o.regex["urlpre"+(e+1)].test(a),!r&&!t){for(i-=e,r=0;r<o.defaultPrefix.length;r++)n[i]=o.defaultPrefix[r],i++;for(r=0;r<a.length-1;r++)n[i]=a[r],i++;return{pos:i}}return t}return!1},cardinality:e}}();return e}()},r:{validator:".",cardinality:50}},insertMode:!1,autoUnmask:!1},ip:{mask:["[[x]y]z.[[x]y]z.[[x]y]z.x[yz]","[[x]y]z.[[x]y]z.[[x]y]z.[[x]y][z]"],definitions:{x:{validator:"[012]",cardinality:1,definitionSymbol:"i"},y:{validator:function(e,t,n){return e=-1<n-1&&"."!=t[n-1]?t[n-1]+e:"0"+e,/2[0-5]|[01][0-9]/.test(e)},cardinality:1,definitionSymbol:"i"},z:{validator:function(e,t,n){return-1<n-1&&"."!=t[n-1]?(e=t[n-1]+e,e=-1<n-2&&"."!=t[n-2]?t[n-2]+e:"0"+e):e="00"+e,/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/.test(e)},cardinality:1,definitionSymbol:"i"}}}})}(jQuery);