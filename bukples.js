(function(){var env,fs,getMode,init,initDev,initProd,readFile,readStyle,scripts,styles,__slice=Array.prototype.slice,__indexOf=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1};scripts=["js","coffee","ejs","kup"],styles=["css","less"],readFile=function(a){var b,c;env==="client"?(c=new XMLHttpRequest,c.open("GET",a,!1),c.send(null),b=c.responseText):env==="server"&&(b=fs.readFileSync(a,"utf-8"));return b},getMode=function(){var a,b,c,d,e,f,g,h,i;if(env==="client"){e=document.getElementsByTagName("script"),d="";for(f=0,h=e.length;f<h;f++)c=e[f],c.src.match("bukples.js")&&(d=c);b=d.src.split("?")[1]}else env==="server"&&(i=process.argv,a=2<=i.length?__slice.call(i,0,g=i.length-1):(g=0,[]),b=i[g++]);return b},init=function(){var a;a=getMode();return a==="dev"?initDev():a==="prod"?initProd():console.log("Invalid argument for loading bukples.js")},initDev=function(){var css,ext,file,files,js,url,_i,_j,_k,_l,_len,_len2,_len3,_ref,_results;css=[],js=[],files=JSON.parse(readFile("include.json"))[env],files=function(){var a,b,c;c=[];for(a=0,b=files.length;a<b;a++)file=files[a],c.push(""+env+".dev/"+file.url);return c}();for(_i=0,_len=files.length;_i<_len;_i++)file=files[_i],_ref=file.trim().split("."),file=2<=_ref.length?__slice.call(_ref,0,_j=_ref.length-1):(_j=0,[]),ext=_ref[_j++],file=file.join("."),__indexOf.call(styles,ext)>=0&&css.push(""+file+".css"),__indexOf.call(scripts,ext)>=0&&js.push(""+file+".js");if(env==="client")for(_k=0,_len2=css.length;_k<_len2;_k++)url=css[_k],readStyle(url);_results=[];for(_l=0,_len3=js.length;_l<_len3;_l++)url=js[_l],env==="server"&&console.log("  ::loading: loaded file "+url),_results.push(eval(readFile(url)));return _results},initProd=function(){env==="client"&&readStyle(""+env+".prod/prod.css");return eval(readFile(""+env+".prod/prod.js"))},typeof window!="undefined"&&window!==null?(env="client",readStyle=function(a){var b;b=document.createElement("link"),b.href=a,b.type="text/css",b.rel="stylesheet";return document.getElementsByTagName("head")[0].appendChild(b)},window.onload=function(){return init()}):typeof process!="undefined"&&process!==null&&(env="server",fs=require("fs"),init())}).call(this)