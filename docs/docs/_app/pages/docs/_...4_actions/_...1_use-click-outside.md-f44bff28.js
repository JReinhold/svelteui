import{S as gs,i as ws,s as Bs,e as F,t as d,k as v,w as M,c as y,a as u,h as C,d as t,m as h,x as R,b as Z,g as i,M as o,y as S,j as ms,q,o as x,B as I,Q as Ts,a1 as Hs,H as Os,E as Ps,f as Es}from"../../../chunks/index-060057ec.js";import"../../../chunks/Text.errors-13cae356.js";import{B as Ls}from"../../../chunks/Button-abb22114.js";import{P as Ms}from"../../../chunks/Preview-b3e65963.js";import{f as Rs}from"../../../chunks/scroll-ea580e6e.js";import{C as As}from"../../../chunks/CodeFence-9b5871c3.js";import{T as Ss}from"../../../chunks/TableWrapper-46c9ed1f.js";import{L as _s}from"../../../chunks/Link-77d01379.js";import"../../../chunks/Loader-078c5169.js";import"../../../chunks/rgba-d25d8fcf.js";import"../../../chunks/exception-5d79bab8.js";import"../../../chunks/singletons-fc9b72e6.js";import"../../../chunks/clsx.m-5abe7e4f.js";function qs(r,e){const{enabled:n,callback:a}=e,p=({target:m})=>{r.contains(m)||a(r)};function $({enabled:m}){m?window.addEventListener("click",p):window.removeEventListener("click",p)}return $({enabled:n}),{update:$,destroy(){window.removeEventListener("click",p)}}}function xs(r){let e;return{c(){e=d("#")},l(n){e=C(n,"#")},m(n,a){i(n,e,a)},d(n){n&&t(e)}}}function Is(r){let e;return{c(){e=d("Open Modal")},l(n){e=C(n,"Open Modal")},m(n,a){i(n,e,a)},d(n){n&&t(e)}}}function Ns(r){let e,n;return{c(){e=F("div"),n=d("There is no modal")},l(a){e=y(a,"DIV",{});var p=u(e);n=C(p,"There is no modal"),p.forEach(t)},m(a,p){i(a,e,p),o(e,n)},d(a){a&&t(e)}}}function Us(r){let e,n;return{c(){e=F("div"),n=d("This is a modal"),this.h()},l(a){e=y(a,"DIV",{style:!0});var p=u(e);n=C(p,"This is a modal"),p.forEach(t),this.h()},h(){Es(e,"border","2px solid gray"),Es(e,"padding","2rem")},m(a,p){i(a,e,p),o(e,n)},d(a){a&&t(e)}}}function Vs(r){let e,n,a,p,$,m,k;n=new Ls({props:{$$slots:{default:[Is]},$$scope:{ctx:r}}}),n.$on("click",r[2]);function O(c,f){if(c[0])return Us;if(!c[0])return Ns}let A=O(r),D=A&&A(r);return{c(){e=F("div"),M(n.$$.fragment),a=v(),D&&D.c()},l(c){e=y(c,"DIV",{});var f=u(e);R(n.$$.fragment,f),a=h(f),D&&D.l(f),f.forEach(t)},m(c,f){i(c,e,f),S(n,e,null),o(e,a),D&&D.m(e,null),$=!0,m||(k=Hs(p=qs.call(null,e,{enabled:r[0],callback:r[3]})),m=!0)},p(c,f){const E={};f&16&&(E.$$scope={dirty:f,ctx:c}),n.$set(E),A!==(A=O(c))&&(D&&D.d(1),D=A&&A(c),D&&(D.c(),D.m(e,null))),p&&Os(p.update)&&f&1&&p.update.call(null,{enabled:c[0],callback:c[3]})},i(c){$||(q(n.$$.fragment,c),$=!0)},o(c){x(n.$$.fragment,c),$=!1},d(c){c&&t(e),I(n),D&&D.d(),m=!1,k()}}}function Ws(r){let e;return{c(){e=d("#")},l(n){e=C(n,"#")},m(n,a){i(n,e,a)},d(n){n&&t(e)}}}function Gs(r){let e,n,a,p,$,m,k,O,A,D,c,f,E,ss,N,H,Q,b,V,W,G,U,es,Y;return{c(){e=F("table"),n=F("thead"),a=F("tr"),p=F("th"),$=d("Param"),m=v(),k=F("th"),O=d("Description"),A=v(),D=F("tbody"),c=F("tr"),f=F("td"),E=d("enabled"),ss=v(),N=F("td"),H=d("Sets the action to an enabled state if true, if false, action will not trigger"),Q=v(),b=F("tr"),V=F("td"),W=d("callback"),G=v(),U=F("td"),es=d("The callback to be fired once the user clicks outside of the dom node"),Y=v()},l(w){e=y(w,"TABLE",{});var _=u(e);n=y(_,"THEAD",{});var P=u(n);a=y(P,"TR",{});var z=u(a);p=y(z,"TH",{});var ns=u(p);$=C(ns,"Param"),ns.forEach(t),m=h(z),k=y(z,"TH",{});var L=u(k);O=C(L,"Description"),L.forEach(t),z.forEach(t),P.forEach(t),A=h(_),D=y(_,"TBODY",{});var g=u(D);c=y(g,"TR",{});var B=u(c);f=y(B,"TD",{});var ps=u(f);E=C(ps,"enabled"),ps.forEach(t),ss=h(B),N=y(B,"TD",{});var ts=u(N);H=C(ts,"Sets the action to an enabled state if true, if false, action will not trigger"),ts.forEach(t),B.forEach(t),Q=h(g),b=y(g,"TR",{});var T=u(b);V=y(T,"TD",{});var rs=u(V);W=C(rs,"callback"),rs.forEach(t),G=h(T),U=y(T,"TD",{});var J=u(U);es=C(J,"The callback to be fired once the user clicks outside of the dom node"),J.forEach(t),T.forEach(t),g.forEach(t),Y=h(_),_.forEach(t)},m(w,_){i(w,e,_),o(e,n),o(n,a),o(a,p),o(p,$),o(a,m),o(a,k),o(k,O),o(e,A),o(e,D),o(D,c),o(c,f),o(f,E),o(c,ss),o(c,N),o(N,H),o(D,Q),o(D,b),o(b,V),o(V,W),o(b,G),o(b,U),o(U,es),o(e,Y)},p:Ps,d(w){w&&t(e)}}}function js(r){let e;return{c(){e=d("#")},l(n){e=C(n,"#")},m(n,a){i(n,e,a)},d(n){n&&t(e)}}}function Qs(r){let e;return{c(){e=d("#")},l(n){e=C(n,"#")},m(n,a){i(n,e,a)},d(n){n&&t(e)}}}function Ys(r){let e,n=r[1].title+"",a,p,$,m=r[1].description+"",k,O,A,D,c,f,E,ss,N,H,Q,b,V,W,G=r[1].title+"",U,es,Y,w,_,P,z,ns,L,g,B,ps,ts,T,rs,J,fs=r[1].title+"",ds,vs,us,ls,j,K,hs,Cs,as,X;return A=new As({props:{lang:"typescript",ext:"ts",linesCount:2,code:`<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">clickoutside</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/actions</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),E=new _s({props:{class:"header-anchor",href:"#usage","aria-hidden":"true",$$slots:{default:[xs]},$$scope:{ctx:r}}}),H=new Ms({props:{$$slots:{default:[Vs]},$$scope:{ctx:r}}}),w=new As({props:{lang:"svelte",ext:"svelte",linesCount:16,rawCode:`<script>
	import { clickoutside } from '@svelteuidev/actions';
	import { Button } from '@svelteuidev/core';

	let open = true;
<\/script>

<div use:clickoutside={{ enabled: open, callback: () => (open = false) }}>
	<Button on:click={() => (open = true)}>Open Modal</Button>
	{#if open}
		<div class="box">This is a modal</div>
	{:else}
		<div>There is no modal</div>
	{/if}
</div>
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">clickoutside</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/actions</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Button</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/core</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> open </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">use</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD">clickoutside</span><span style="color: #89DDFF">={{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">enabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> open</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">callback</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> (open </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #A6ACCD">) </span><span style="color: #89DDFF">}}&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">click</span><span style="color: #89DDFF">={()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> (open </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">true</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">}&gt;</span><span style="color: #A6ACCD">Open Modal</span><span style="color: #89DDFF">&lt;/</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{#</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #A6ACCD"> open</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">class</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">box</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">This is a modal</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{:</span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">		</span><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">There is no modal</span><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF">{/</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre>`}}),P=new _s({props:{class:"header-anchor",href:"#params","aria-hidden":"true",$$slots:{default:[Ws]},$$scope:{ctx:r}}}),L=new Ss({props:{$$slots:{default:[Gs]},$$scope:{ctx:r}}}),B=new _s({props:{class:"header-anchor",href:"#events","aria-hidden":"true",$$slots:{default:[js]},$$scope:{ctx:r}}}),ls=new As({props:{lang:"tsx",ext:"tsx",linesCount:2,code:`<pre><code><span class="line"><span style="color: #464B5D; font-style: italic">// No events to display</span></span>
<span class="line"></span></code></pre>`}}),K=new _s({props:{class:"header-anchor",href:"#definition","aria-hidden":"true",$$slots:{default:[Qs]},$$scope:{ctx:r}}}),as=new As({props:{lang:"typescript",ext:"ts",linesCount:5,code:`<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">export</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">clickOutside</span><span style="color: #89DDFF">(</span></span>
<span class="line"><span style="color: #A6ACCD">	node</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">HTMLElement</span><span style="color: #89DDFF">,</span></span>
<span class="line"><span style="color: #A6ACCD">	params</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">enabled</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">boolean</span><span style="color: #89DDFF">;</span><span style="color: #A6ACCD"> </span><span style="color: #F07178">callback</span><span style="color: #89DDFF">?:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">node</span><span style="color: #89DDFF">?:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">HTMLElement</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">void</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">):</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">ReturnType</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Action</span><span style="color: #89DDFF">&gt;;</span></span>
<span class="line"></span></code></pre>`}}),{c(){e=F("h1"),a=d(n),p=v(),$=F("p"),k=d(m),O=v(),M(A.$$.fragment),D=F("hr"),c=v(),f=F("h2"),M(E.$$.fragment),ss=d(" Usage"),N=v(),M(H.$$.fragment),Q=v(),b=F("p"),V=d("With the "),W=F("strong"),U=d(G),es=d(" action, a callback function will be fired whenever the user clicks outside of the dom node the action is applied to."),Y=v(),M(w.$$.fragment),_=F("h2"),M(P.$$.fragment),z=d(" Params"),ns=v(),M(L.$$.fragment),g=F("h2"),M(B.$$.fragment),ps=d(" Events"),ts=v(),T=F("p"),rs=d("The "),J=F("strong"),ds=d(fs),vs=d(" action does not dispatch any custom events`"),us=v(),M(ls.$$.fragment),j=F("h2"),M(K.$$.fragment),hs=d(" Definition"),Cs=v(),M(as.$$.fragment),this.h()},l(s){e=y(s,"H1",{});var l=u(e);a=C(l,n),l.forEach(t),p=h(s),$=y(s,"P",{});var Fs=u($);k=C(Fs,m),Fs.forEach(t),O=h(s),R(A.$$.fragment,s),D=y(s,"HR",{}),c=h(s),f=y(s,"H2",{id:!0,tabindex:!0});var cs=u(f);R(E.$$.fragment,cs),ss=C(cs," Usage"),cs.forEach(t),N=h(s),R(H.$$.fragment,s),Q=h(s),b=y(s,"P",{});var os=u(b);V=C(os,"With the "),W=y(os,"STRONG",{});var ys=u(W);U=C(ys,G),ys.forEach(t),es=C(os," action, a callback function will be fired whenever the user clicks outside of the dom node the action is applied to."),os.forEach(t),Y=h(s),R(w.$$.fragment,s),_=y(s,"H2",{id:!0,tabindex:!0});var is=u(_);R(P.$$.fragment,is),z=C(is," Params"),is.forEach(t),ns=h(s),R(L.$$.fragment,s),g=y(s,"H2",{id:!0,tabindex:!0});var Ds=u(g);R(B.$$.fragment,Ds),ps=C(Ds," Events"),Ds.forEach(t),ts=h(s),T=y(s,"P",{});var $s=u(T);rs=C($s,"The "),J=y($s,"STRONG",{});var ks=u(J);ds=C(ks,fs),ks.forEach(t),vs=C($s," action does not dispatch any custom events`"),$s.forEach(t),us=h(s),R(ls.$$.fragment,s),j=y(s,"H2",{id:!0,tabindex:!0});var bs=u(j);R(K.$$.fragment,bs),hs=C(bs," Definition"),bs.forEach(t),Cs=h(s),R(as.$$.fragment,s),this.h()},h(){Z(f,"id","usage"),Z(f,"tabindex","-1"),Z(_,"id","params"),Z(_,"tabindex","-1"),Z(g,"id","events"),Z(g,"tabindex","-1"),Z(j,"id","definition"),Z(j,"tabindex","-1")},m(s,l){i(s,e,l),o(e,a),i(s,p,l),i(s,$,l),o($,k),i(s,O,l),S(A,s,l),i(s,D,l),i(s,c,l),i(s,f,l),S(E,f,null),o(f,ss),i(s,N,l),S(H,s,l),i(s,Q,l),i(s,b,l),o(b,V),o(b,W),o(W,U),o(b,es),i(s,Y,l),S(w,s,l),i(s,_,l),S(P,_,null),o(_,z),i(s,ns,l),S(L,s,l),i(s,g,l),S(B,g,null),o(g,ps),i(s,ts,l),i(s,T,l),o(T,rs),o(T,J),o(J,ds),o(T,vs),i(s,us,l),S(ls,s,l),i(s,j,l),S(K,j,null),o(j,hs),i(s,Cs,l),S(as,s,l),X=!0},p(s,[l]){(!X||l&2)&&n!==(n=s[1].title+"")&&ms(a,n),(!X||l&2)&&m!==(m=s[1].description+"")&&ms(k,m);const Fs={};l&16&&(Fs.$$scope={dirty:l,ctx:s}),E.$set(Fs);const cs={};l&17&&(cs.$$scope={dirty:l,ctx:s}),H.$set(cs),(!X||l&2)&&G!==(G=s[1].title+"")&&ms(U,G);const os={};l&16&&(os.$$scope={dirty:l,ctx:s}),P.$set(os);const ys={};l&16&&(ys.$$scope={dirty:l,ctx:s}),L.$set(ys);const is={};l&16&&(is.$$scope={dirty:l,ctx:s}),B.$set(is),(!X||l&2)&&fs!==(fs=s[1].title+"")&&ms(ds,fs);const Ds={};l&16&&(Ds.$$scope={dirty:l,ctx:s}),K.$set(Ds)},i(s){X||(q(A.$$.fragment,s),q(E.$$.fragment,s),q(H.$$.fragment,s),q(w.$$.fragment,s),q(P.$$.fragment,s),q(L.$$.fragment,s),q(B.$$.fragment,s),q(ls.$$.fragment,s),q(K.$$.fragment,s),q(as.$$.fragment,s),X=!0)},o(s){x(A.$$.fragment,s),x(E.$$.fragment,s),x(H.$$.fragment,s),x(w.$$.fragment,s),x(P.$$.fragment,s),x(L.$$.fragment,s),x(B.$$.fragment,s),x(ls.$$.fragment,s),x(K.$$.fragment,s),x(as.$$.fragment,s),X=!1},d(s){s&&t(e),s&&t(p),s&&t($),s&&t(O),I(A,s),s&&t(D),s&&t(c),s&&t(f),I(E),s&&t(N),I(H,s),s&&t(Q),s&&t(b),s&&t(Y),I(w,s),s&&t(_),I(P),s&&t(ns),I(L,s),s&&t(g),I(B),s&&t(ts),s&&t(T),s&&t(us),I(ls,s),s&&t(j),I(K),s&&t(Cs),I(as,s)}}}function zs(r,e,n){let a;Ts(r,Rs,k=>n(1,a=k));let p=!0;return[p,a,()=>n(0,p=!0),()=>n(0,p=!1)]}class ce extends gs{constructor(e){super(),ws(this,e,zs,Ys,Bs,{})}}export{ce as default};
