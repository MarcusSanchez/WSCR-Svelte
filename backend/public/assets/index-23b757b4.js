(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function y(){}function qe(n){return n()}function Le(){return Object.create(null)}function D(n){n.forEach(qe)}function He(n){return typeof n=="function"}function E(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Ie(n){return Object.keys(n).length===0}function De(n,...e){if(n==null)return y;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function v(n,e,t){n.$$.on_destroy.push(De(e,t))}function fe(n){return n??""}function S(n,e,t){return n.set(t),e}function a(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function C(n){n.parentNode&&n.parentNode.removeChild(n)}function ze(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function N(n){return document.createTextNode(n)}function h(){return N(" ")}function xe(){return N("")}function P(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function Ge(n){return function(e){return e.preventDefault(),n.call(this,e)}}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ue(n){return Array.from(n.childNodes)}function z(n,e){e=""+e,n.data!==e&&(n.data=e)}function I(n,e){n.value=e??""}let re;function se(n){re=n}function Ke(){if(!re)throw new Error("Function called outside component initialization");return re}function Fe(n){Ke().$$.on_mount.push(n)}const X=[],de=[];let te=[];const Se=[],Ye=Promise.resolve();let ve=!1;function Ze(){ve||(ve=!0,Ye.then(We))}function $e(n){te.push(n)}const ye=new Set;let Q=0;function We(){if(Q!==0)return;const n=re;do{try{for(;Q<X.length;){const e=X[Q];Q++,se(e),Qe(e.$$)}}catch(e){throw X.length=0,Q=0,e}for(se(null),X.length=0,Q=0;de.length;)de.pop()();for(let e=0;e<te.length;e+=1){const t=te[e];ye.has(t)||(ye.add(t),t())}te.length=0}while(X.length);for(;Se.length;)Se.pop()();ve=!1,ye.clear(),se(n)}function Qe(n){if(n.fragment!==null){n.update(),D(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach($e)}}function Ve(n){const e=[],t=[];te.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),te=e}const me=new Set;let G;function _e(){G={r:0,c:[],p:G}}function he(){G.r||D(G.c),G=G.p}function b(n,e){n&&n.i&&(me.delete(n),n.i(e))}function w(n,e,t,s){if(n&&n.o){if(me.has(n))return;me.add(n),G.c.push(()=>{me.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function B(n){n&&n.c()}function j(n,e,t,s){const{fragment:r,after_update:o}=n.$$;r&&r.m(e,t),s||$e(()=>{const i=n.$$.on_mount.map(qe).filter(He);n.$$.on_destroy?n.$$.on_destroy.push(...i):D(i),n.$$.on_mount=[]}),o.forEach($e)}function A(n,e){const t=n.$$;t.fragment!==null&&(Ve(t.after_update),D(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Xe(n,e){n.$$.dirty[0]===-1&&(X.push(n),Ze(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function O(n,e,t,s,r,o,i,u=[-1]){const l=re;se(n);const c=n.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:Le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Le(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};i&&i(c.root);let f=!1;if(c.ctx=t?t(n,e.props||{},(d,g,..._)=>{const $=_.length?_[0]:g;return c.ctx&&r(c.ctx[d],c.ctx[d]=$)&&(!c.skip_bound&&c.bound[d]&&c.bound[d]($),f&&Xe(n,d)),g}):[],c.update(),f=!0,D(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=Ue(e.target);c.fragment&&c.fragment.l(d),d.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&b(n.$$.fragment),j(n,e.target,e.anchor,e.customElement),We()}se(l)}class q{$destroy(){A(this,1),this.$destroy=y}$on(e,t){if(!He(t))return y;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Ie(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function et(n){let e,t,s,r;return{c(){e=p("div"),t=p("h1"),s=N(n[1]),m(t,"class","svelte-1aoblqe"),m(e,"class",r="flex justify-center content-center Box "+n[0]+" svelte-1aoblqe")},m(o,i){T(o,e,i),a(e,t),a(t,s)},p(o,[i]){i&2&&z(s,o[1]),i&1&&r!==(r="flex justify-center content-center Box "+o[0]+" svelte-1aoblqe")&&m(e,"class",r)},i:y,o:y,d(o){o&&C(e)}}}function tt(n,e,t){let{color:s,letter:r}=e;return n.$$set=o=>{"color"in o&&t(0,s=o.color),"letter"in o&&t(1,r=o.letter)},[s,r]}class ae extends q{constructor(e){super(),O(this,e,tt,et,E,{color:0,letter:1})}}function nt(n){let e,t,s,r,o,i,u,l,c,f;return s=new ae({props:{letter:"W",color:"Blue"}}),o=new ae({props:{letter:"S",color:"Red"}}),u=new ae({props:{letter:"C",color:"Blue"}}),c=new ae({props:{letter:"R",color:"Red"}}),{c(){e=p("nav"),t=p("a"),B(s.$$.fragment),r=h(),B(o.$$.fragment),i=h(),B(u.$$.fragment),l=h(),B(c.$$.fragment),m(t,"class","mx-auto md:mx-0 flex px-1 py-3 w-max"),m(t,"href",n[0]),m(e,"class","Navbar svelte-jwpo53")},m(d,g){T(d,e,g),a(e,t),j(s,t,null),a(t,r),j(o,t,null),a(t,i),j(u,t,null),a(t,l),j(c,t,null),f=!0},p:y,i(d){f||(b(s.$$.fragment,d),b(o.$$.fragment,d),b(u.$$.fragment,d),b(c.$$.fragment,d),f=!0)},o(d){w(s.$$.fragment,d),w(o.$$.fragment,d),w(u.$$.fragment,d),w(c.$$.fragment,d),f=!1},d(d){d&&C(e),A(s),A(o),A(u),A(c)}}}function st(n){return[window.location.origin+window.location.pathname]}class rt extends q{constructor(e){super(),O(this,e,st,nt,E,{})}}const V=[];function K(n,e=y){let t;const s=new Set;function r(u){if(E(n,u)&&(n=u,t)){const l=!V.length;for(const c of s)c[1](),V.push(c,n);if(l){for(let c=0;c<V.length;c+=2)V[c][0](V[c+1]);V.length=0}}}function o(u){r(u(n))}function i(u,l=y){const c=[u,l];return s.add(c),s.size===1&&(t=e(r)||y),u(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:r,update:o,subscribe:i}}const ge=K(""),pe=K(""),ke=K(!1),F=K([]),U=K(!1),ee=K(null),oe=K(null);function ot(n){return/^[a-zA-Z0-9]{3,16}$/.test(n)}function Ne(n){if(/^\d{4}$/.test(n)){let e=parseInt(n,10);if(e>=0&&e<=9999)return!0}}function we(n,e){return n.length>0&&e.length>0?`Join Room ${n} as ${e}`:n.length>0?`Join Room ${n}`:e.length>0?`Join Room as ${e}`:"Join Room"}function lt(n){let e,t,s,r,o,i,u,l,c,f,d,g,_,$;return{c(){e=p("div"),t=p("form"),s=p("h1"),s.textContent="Join or Create a Room",r=h(),o=p("input"),i=h(),u=p("div"),l=p("input"),c=h(),f=p("button"),f.textContent="Generate New Room",d=h(),g=p("input"),m(s,"id","header"),m(s,"class","mb-3 svelte-44sw79"),m(o,"class","form-control bottom svelte-44sw79"),m(o,"type","text"),m(o,"id","name"),m(o,"size","64"),o.autofocus=!0,m(o,"autocomplete","off"),m(o,"placeholder","Name"),m(l,"class","form-control bottom svelte-44sw79"),m(l,"type","text"),m(l,"id","room"),m(l,"size","64"),m(l,"autocomplete","off"),m(l,"placeholder","Room"),m(f,"type","button"),m(f,"class","btn btn-lg btn-outline top-btn svelte-44sw79"),m(f,"id","generateRoom"),m(u,"id","wrapper"),m(u,"class","svelte-44sw79"),m(g,"class","btn btn-lg btn-outline btm-btn form-control svelte-44sw79"),m(g,"type","submit"),m(g,"id","joinRoom"),m(t,"id","roomForm"),m(t,"class","form-signin svelte-44sw79"),m(e,"id","joiner"),m(e,"class","svelte-44sw79")},m(M,J){T(M,e,J),a(e,t),a(t,s),a(t,r),a(t,o),I(o,n[1]),a(t,i),a(t,u),a(u,l),I(l,n[0]),a(u,c),a(u,f),n[9](f),a(t,d),a(t,g),I(g,n[2]),o.focus(),_||($=[P(o,"input",n[7]),P(o,"input",n[5]),P(l,"input",n[8]),P(l,"input",n[5]),P(f,"click",n[4]),P(g,"input",n[10]),P(t,"submit",Ge(n[6]))],_=!0)},p(M,[J]){J&2&&o.value!==M[1]&&I(o,M[1]),J&1&&l.value!==M[0]&&I(l,M[0]),J&4&&I(g,M[2])},i:y,o:y,d(M){M&&C(e),n[9](null),_=!1,D($)}}}function it(n,e,t){let s,r,o;v(n,ke,x=>t(11,s=x)),v(n,pe,x=>t(12,r=x)),v(n,ge,x=>t(13,o=x));let u=new URLSearchParams(window.location.search).get("room"),l="",c="",f="Join Room",d;Fe(()=>{u!==null&&Ne(u)&&(t(0,l=u),t(2,f=we(l,c)),t(3,d.disabled=!0,d))});function g(){fetch(window.location.origin+"/generateRoom").then(x=>x.text()).then(x=>{t(0,l=x),t(2,f=we(x,c)),t(3,d.disabled=!0,d)})}function _(x){let H=x.target;H.id==="name"?t(1,c=H.value.replace(/[^a-zA-Z0-9]/g,"").substring(0,13)):H.id==="room"&&t(0,l=H.value.replace(/\D/g,"").substring(0,4)),t(2,f=we(l,c))}function $(){if(!c&&!l)return alert("Please enter a name and room number."),!1;if(c){if(!l)return alert("Please enter a room number."),!1}else return alert("Please enter a name."),!1;if(ot(c)){if(!Ne(l))return alert("Room must be a 4 digit number 0000-9999"),!1}else return alert("Name must be 3-16 characters long and may only consist of letters and numbers."),!1;return S(ge,o=c,o),S(pe,r=l,r),S(ke,s=!0,s),!0}function M(){c=this.value,t(1,c)}function J(){l=this.value,t(0,l)}function le(x){de[x?"unshift":"push"](()=>{d=x,t(3,d)})}function Y(){f=this.value,t(2,f)}return[l,c,f,d,g,_,$,M,J,le,Y]}class ct extends q{constructor(e){super(),O(this,e,it,lt,E,{})}}function ut(n){let e,t,s,r,o,i,u,l,c,f,d;return{c(){e=p("div"),t=p("div"),s=p("div"),r=p("b"),o=N(n[0]),i=h(),u=p("span"),l=N(n[3]),c=h(),f=p("span"),d=N(n[1]),m(u,"class","ToGrey svelte-xmpfuc"),m(s,"class","flex justify-between w-full"),m(f,"class","FmtWord svelte-xmpfuc"),m(t,"class","w-1/2 m-4 LeftMessage text-opacity-100 svelte-xmpfuc"),m(e,"class","flex flex-col justify-between item-start")},m(g,_){T(g,e,_),a(e,t),a(t,s),a(s,r),a(r,o),a(s,i),a(s,u),a(u,l),a(t,c),a(t,f),a(f,d)},p(g,_){_&1&&z(o,g[0]),_&8&&z(l,g[3]),_&2&&z(d,g[1])},d(g){g&&C(e)}}}function ft(n){let e,t,s,r,o,i,u,l,c,f,d;return{c(){e=p("div"),t=p("div"),s=p("div"),r=p("b"),o=N(n[0]),i=h(),u=p("span"),l=N(n[3]),c=h(),f=p("span"),d=N(n[1]),m(u,"class","ToGrey svelte-xmpfuc"),m(s,"class","flex justify-between w-full"),m(f,"class","FmtWord svelte-xmpfuc"),m(t,"class","w-1/2 m-4 RightMessage text-opacity-100 svelte-xmpfuc"),m(e,"class","flex flex-col justify-between items-end")},m(g,_){T(g,e,_),a(e,t),a(t,s),a(s,r),a(r,o),a(s,i),a(s,u),a(u,l),a(t,c),a(t,f),a(f,d)},p(g,_){_&1&&z(o,g[0]),_&8&&z(l,g[3]),_&2&&z(d,g[1])},d(g){g&&C(e)}}}function at(n){let e;function t(o,i){return o[2]?ft:ut}let s=t(n),r=s(n);return{c(){r.c(),e=xe()},m(o,i){r.m(o,i),T(o,e,i)},p(o,[i]){s===(s=t(o))&&r?r.p(o,i):(r.d(1),r=s(o),r&&(r.c(),r.m(e.parentNode,e)))},i:y,o:y,d(o){r.d(o),o&&C(e)}}}function mt(n,e,t){let{name:s,message:r,fromClient:o,time:i}=e;return n.$$set=u=>{"name"in u&&t(0,s=u.name),"message"in u&&t(1,r=u.message),"fromClient"in u&&t(2,o=u.fromClient),"time"in u&&t(3,i=u.time)},[s,r,o,i]}class dt extends q{constructor(e){super(),O(this,e,mt,at,E,{name:0,message:1,fromClient:2,time:3})}}function gt(n){let e,t,s;return{c(){e=p("div"),t=p("b"),s=N(n[0]),m(t,"class","Announcement svelte-14y7aog"),m(e,"class","flex justify-center")},m(r,o){T(r,e,o),a(e,t),a(t,s)},p(r,[o]){o&1&&z(s,r[0])},i:y,o:y,d(r){r&&C(e)}}}function pt(n,e,t){let{message:s}=e;return n.$$set=r=>{"message"in r&&t(0,s=r.message)},[s]}class _t extends q{constructor(e){super(),O(this,e,pt,gt,E,{message:0})}}function Be(n,e,t){const s=n.slice();return s[5]=e[t],s}function ht(n){let e,t;return e=new _t({props:{message:n[5].data.message}}),{c(){B(e.$$.fragment)},m(s,r){j(e,s,r),t=!0},p(s,r){const o={};r&2&&(o.message=s[5].data.message),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function bt(n){let e,t;return e=new dt({props:{name:n[5].data.name,message:n[5].data.message,fromClient:n[5].data.fromClient,time:n[5].data.time}}),{c(){B(e.$$.fragment)},m(s,r){j(e,s,r),t=!0},p(s,r){const o={};r&2&&(o.name=s[5].data.name),r&2&&(o.message=s[5].data.message),r&2&&(o.fromClient=s[5].data.fromClient),r&2&&(o.time=s[5].data.time),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function Pe(n){let e,t,s,r;const o=[bt,ht],i=[];function u(l,c){return l[5].type==="message"?0:1}return e=u(n),t=i[e]=o[e](n),{c(){t.c(),s=xe()},m(l,c){i[e].m(l,c),T(l,s,c),r=!0},p(l,c){let f=e;e=u(l),e===f?i[e].p(l,c):(_e(),w(i[f],1,1,()=>{i[f]=null}),he(),t=i[e],t?t.p(l,c):(t=i[e]=o[e](l),t.c()),b(t,1),t.m(s.parentNode,s))},i(l){r||(b(t),r=!0)},o(l){w(t),r=!1},d(l){i[e].d(l),l&&C(s)}}}function yt(n){let e,t,s,r,o=n[1],i=[];for(let l=0;l<o.length;l+=1)i[l]=Pe(Be(n,o,l));const u=l=>w(i[l],1,1,()=>{i[l]=null});return{c(){e=p("div");for(let l=0;l<i.length;l+=1)i[l].c();m(e,"class","p-3 Log svelte-aocl5y"),m(e,"id","message-log")},m(l,c){T(l,e,c);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(e,null);n[3](e),t=!0,s||(r=P(e,"scroll",n[2]),s=!0)},p(l,[c]){if(c&2){o=l[1];let f;for(f=0;f<o.length;f+=1){const d=Be(l,o,f);i[f]?(i[f].p(d,c),b(i[f],1)):(i[f]=Pe(d),i[f].c(),b(i[f],1),i[f].m(e,null))}for(_e(),f=o.length;f<i.length;f+=1)u(f);he()}},i(l){if(!t){for(let c=0;c<o.length;c+=1)b(i[c]);t=!0}},o(l){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)w(i[c]);t=!1},d(l){l&&C(e),ze(i,l),n[3](null),s=!1,r()}}}function wt(n,e,t){let s,r,o;v(n,U,l=>t(4,s=l)),v(n,oe,l=>t(0,r=l)),v(n,F,l=>t(1,o=l));function i(){let l=r.scrollTop>=r.scrollHeight-r.clientHeight-10;s&&l&&S(U,s=!1,s)}function u(l){de[l?"unshift":"push"](()=>{r=l,oe.set(r)})}return[r,o,i,u]}class vt extends q{constructor(e){super(),O(this,e,wt,yt,E,{})}}function $t(n){let e,t,s;return{c(){e=p("div"),e.innerHTML='<b class="Alert svelte-1mdzwfm">New Message...</b>',m(e,"class","NMA hover:cursor-pointer svelte-1mdzwfm")},m(r,o){T(r,e,o),t||(s=[P(e,"scroll",n[0]),P(e,"click",n[0])],t=!0)},p:y,i:y,o:y,d(r){r&&C(e),t=!1,D(s)}}}function kt(n,e,t){let s,r;v(n,U,i=>t(1,s=i)),v(n,oe,i=>t(2,r=i));function o(){r.scrollTo(0,r.scrollHeight),S(U,s=!1,s)}return[o]}class xt extends q{constructor(e){super(),O(this,e,kt,$t,E,{})}}function Ct(n){let e,t,s,r,o,i,u;return{c(){e=p("div"),t=p("div"),s=p("textarea"),r=h(),o=p("button"),o.textContent="Send",m(s,"class","TextArea svelte-jup3e6"),m(s,"rows","1"),m(s,"placeholder","Type a message..."),s.autofocus=!0,m(o,"class","Button svelte-jup3e6"),m(t,"class","MessageBox svelte-jup3e6"),m(e,"class","ChatContainer svelte-jup3e6")},m(l,c){T(l,e,c),a(e,t),a(t,s),I(s,n[0]),a(t,r),a(t,o),s.focus(),i||(u=[P(s,"input",n[3]),P(s,"keydown",n[2]),P(o,"click",n[1])],i=!0)},p(l,[c]){c&1&&I(s,l[0])},i:y,o:y,d(l){l&&C(e),i=!1,D(u)}}}function Rt(n,e,t){let s,r,o,i;v(n,oe,g=>t(5,s=g)),v(n,F,g=>t(6,r=g)),v(n,ge,g=>t(7,o=g)),v(n,ee,g=>t(8,i=g));let u=0,l="";function c(){if(!i||l.replace(/^]s+/,"").length===0||u>=3){if(u>=3){let $={type:"announcement",data:{name:"server",type:"cooldown",message:"You are on cooldown try again in 5 seconds."}};S(F,r=[...r,$],r),setTimeout(()=>{s.scrollTo(0,s.scrollHeight)},0)}return!1}u++,setTimeout(()=>{u--},5e3),i.send(l);let _={type:"message",data:{name:o,time:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),message:l,fromClient:!0}};return S(F,r=[...r,_],r),t(0,l=""),setTimeout(()=>{s.scrollTo(0,s.scrollHeight)},0),!0}function f(g){g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),c())}function d(){l=this.value,t(0,l)}return[l,c,f,d]}class Tt extends q{constructor(e){super(),O(this,e,Rt,Ct,E,{})}}function Ee(n){let e,t;return e=new xt({}),{c(){B(e.$$.fragment)},m(s,r){j(e,s,r),t=!0},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function Mt(n){let e,t,s,r,o,i;t=new vt({});let u=n[0]&&Ee();return o=new Tt({}),{c(){e=p("div"),B(t.$$.fragment),s=h(),u&&u.c(),r=h(),B(o.$$.fragment),m(e,"class","w-3/4 relative")},m(l,c){T(l,e,c),j(t,e,null),a(e,s),u&&u.m(e,null),a(e,r),j(o,e,null),i=!0},p(l,[c]){l[0]?u?c&1&&b(u,1):(u=Ee(),u.c(),b(u,1),u.m(e,r)):u&&(_e(),w(u,1,1,()=>{u=null}),he())},i(l){i||(b(t.$$.fragment,l),b(u),b(o.$$.fragment,l),i=!0)},o(l){w(t.$$.fragment,l),w(u),w(o.$$.fragment,l),i=!1},d(l){l&&C(e),A(t),u&&u.d(),A(o)}}}function jt(n,e,t){let s;return v(n,U,r=>t(0,s=r)),[s]}class At extends q{constructor(e){super(),O(this,e,jt,Mt,E,{})}}function Je(n,e,t){const s=n.slice();return s[10]=e[t],s}function Oe(n){let e,t=n[10]+"",s,r;return{c(){e=p("p"),s=N(t),r=h(),m(e,"class","Participant svelte-isfngi")},m(o,i){T(o,e,i),a(e,s),a(e,r)},p(o,i){i&2&&t!==(t=o[10]+"")&&z(s,t)},d(o){o&&C(e)}}}function Lt(n){let e,t,s,r,o,i,u,l,c,f,d,g,_,$,M,J,le,Y,x,H,Ce,Re,ie,ce,Te,ne,Me,ue,be,je,Z=n[1],L=[];for(let k=0;k<Z.length;k+=1)L[k]=Oe(Je(n,Z,k));return{c(){e=p("div"),t=p("h3"),t.textContent="Room Information",s=h(),r=p("hr"),o=h(),i=p("p"),u=p("b"),u.textContent="Room Number: ",l=N(n[4]),c=h(),f=p("p"),d=p("b"),d.textContent="Room Count: ",g=N(n[0]),_=h(),$=p("p"),$.innerHTML="<b>Room Participants:</b>",M=h(),J=p("div");for(let k=0;k<L.length;k+=1)L[k].c();le=h(),Y=p("p"),Y.innerHTML="<b>Invite Link:</b>",x=h(),H=p("p"),Ce=N(n[5]),Re=h(),ie=p("i"),Te=h(),ne=p("b"),Me=N("Copied"),m(t,"class","text-center font-semibold text-3xl my-4"),m(r,"class","mb-4 border-gray-400"),m(i,"class","svelte-isfngi"),m(f,"class","svelte-isfngi"),m($,"class","svelte-isfngi"),m(J,"class","Participants svelte-isfngi"),m(Y,"class","mt-3 mb-1 svelte-isfngi"),m(ie,"class",ce=fe(n[2])+" svelte-isfngi"),m(H,"class","mb-0 Link svelte-isfngi"),m(ne,"class",ue=fe(n[3])+" svelte-isfngi"),m(e,"class","w-1/4 SidePanel svelte-isfngi")},m(k,W){T(k,e,W),a(e,t),a(e,s),a(e,r),a(e,o),a(e,i),a(i,u),a(i,l),a(e,c),a(e,f),a(f,d),a(f,g),a(e,_),a(e,$),a(e,M),a(e,J);for(let R=0;R<L.length;R+=1)L[R]&&L[R].m(J,null);a(e,le),a(e,Y),a(e,x),a(e,H),a(H,Ce),a(H,Re),a(H,ie),a(e,Te),a(e,ne),a(ne,Me),be||(je=P(H,"click",n[6]),be=!0)},p(k,[W]){if(W&16&&z(l,k[4]),W&1&&z(g,k[0]),W&2){Z=k[1];let R;for(R=0;R<Z.length;R+=1){const Ae=Je(k,Z,R);L[R]?L[R].p(Ae,W):(L[R]=Oe(Ae),L[R].c(),L[R].m(J,null))}for(;R<L.length;R+=1)L[R].d(1);L.length=Z.length}W&4&&ce!==(ce=fe(k[2])+" svelte-isfngi")&&m(ie,"class",ce),W&8&&ue!==(ue=fe(k[3])+" svelte-isfngi")&&m(ne,"class",ue)},i:y,o:y,d(k){k&&C(e),ze(L,k),be=!1,je()}}}function St(n,e,t){let s,r;v(n,pe,_=>t(4,s=_)),v(n,F,_=>t(7,r=_));let o=0,i=[],u="fa-regular fa-clipboard Clipboard",l="hidden",c=window.location.host+`/?room=${s}`;function f(){fetch(window.location.origin+`/info/${s}`).then(_=>_.json()).then(_=>{_.error!=="true"&&(t(0,o=_.roomCount),t(1,i=_.participants))}).catch(_=>console.log(_))}function d(_){if(r.length===1&&r[0].data.type==="join"){f();return}let $=r[r.length-1];if($!==void 0&&$.type==="announcement"){if($.data.type==="join")t(0,o+=1),t(1,i=[...i,$.data.name]);else if($.data.type==="leave"){t(0,o-=1);const M=i.indexOf($.data.name);i.splice(M,1),t(1,i)}}}function g(){navigator.clipboard.writeText(window.location.origin+"/?room="+s).then(()=>{t(2,u="fa-solid fa-check Clipboard"),t(3,l="ps-2"),setTimeout(()=>{t(2,u="fa-regular fa-clipboard Clipboard"),t(3,l="hidden")},1e3)}).catch()}return n.$$.update=()=>{n.$$.dirty&128&&d()},[o,i,u,l,s,c,g,r]}class Nt extends q{constructor(e){super(),O(this,e,St,Lt,E,{})}}function Bt(n){let e,t,s,r,o;return t=new At({}),r=new Nt({}),{c(){e=p("div"),B(t.$$.fragment),s=h(),B(r.$$.fragment),m(e,"class","flex gap-4 Room svelte-47q47q")},m(i,u){T(i,e,u),j(t,e,null),a(e,s),j(r,e,null),o=!0},p:y,i(i){o||(b(t.$$.fragment,i),b(r.$$.fragment,i),o=!0)},o(i){w(t.$$.fragment,i),w(r.$$.fragment,i),o=!1},d(i){i&&C(e),A(t),A(r)}}}function Pt(n,e,t){let s,r,o,i,u,l;v(n,F,f=>t(0,s=f)),v(n,ee,f=>t(1,r=f)),v(n,U,f=>t(2,o=f)),v(n,oe,f=>t(3,i=f)),v(n,pe,f=>t(4,u=f)),v(n,ge,f=>t(5,l=f));function c(){if(window.WebSocket)S(ee,r=new WebSocket(`wss://${window.location.host}/ws/${l}/${u}`),r),S(ee,r.onmessage=function(f){let d=JSON.parse(f.data);d.type==="message"&&(d.data.time=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),d.data.fromClient=!1);let g=i.scrollHeight===i.scrollTop+i.clientHeight;S(F,s=[...s,d],s),setTimeout(()=>{g?i.scrollTo(0,i.scrollHeight):(console.log("we made it here"),S(U,o=!0,o))},0)},r),S(ee,r.onclose=function(){let f={type:"announcement",data:{type:"close",message:"Connection closed"}};S(F,s=[...s,f],s),S(ee,r=null,r)},r);else{let f={type:"announcement",data:{type:"close",message:"Your browser does not support WebSockets."}};S(F,s=[...s,f],s)}}return Fe(()=>{c()}),[]}class Et extends q{constructor(e){super(),O(this,e,Pt,Bt,E,{})}}function Jt(n){let e,t;return e=new Et({}),{c(){B(e.$$.fragment)},m(s,r){j(e,s,r),t=!0},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function Ot(n){let e,t;return e=new ct({}),{c(){B(e.$$.fragment)},m(s,r){j(e,s,r),t=!0},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function qt(n){let e,t,s,r;const o=[Ot,Jt],i=[];function u(l,c){return l[0]?1:0}return e=u(n),t=i[e]=o[e](n),{c(){t.c(),s=xe()},m(l,c){i[e].m(l,c),T(l,s,c),r=!0},p(l,[c]){let f=e;e=u(l),e!==f&&(_e(),w(i[f],1,1,()=>{i[f]=null}),he(),t=i[e],t||(t=i[e]=o[e](l),t.c()),b(t,1),t.m(s.parentNode,s))},i(l){r||(b(t),r=!0)},o(l){w(t),r=!1},d(l){i[e].d(l),l&&C(s)}}}function Ht(n,e,t){let s;return v(n,ke,r=>t(0,s=r)),[s]}class zt extends q{constructor(e){super(),O(this,e,Ht,qt,E,{})}}function Ft(n){let e,t,s,r;return e=new rt({}),s=new zt({}),{c(){B(e.$$.fragment),t=h(),B(s.$$.fragment)},m(o,i){j(e,o,i),T(o,t,i),j(s,o,i),r=!0},p:y,i(o){r||(b(e.$$.fragment,o),b(s.$$.fragment,o),r=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),r=!1},d(o){A(e,o),o&&C(t),A(s,o)}}}class Wt extends q{constructor(e){super(),O(this,e,null,Ft,E,{})}}new Wt({target:document.getElementById("app")});