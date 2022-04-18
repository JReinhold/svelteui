import{S as ks,i as ws,s as Ts,e as y,t as D,k as g,w as k,c as f,a as C,h as F,d as a,m as E,x as w,b as z,g as r,M as p,y as T,j as $s,q as d,o as _,B as x,Q as xs,V as Hs,a1 as Ps,n as Ls,p as Rs,G as qs,E as Ss}from"../../../chunks/index-060057ec.js";import"../../../chunks/Text.errors-13cae356.js";import{B as Bs}from"../../../chunks/Button-abb22114.js";import{P as js}from"../../../chunks/Preview-b3e65963.js";import{f as Gs}from"../../../chunks/scroll-ea580e6e.js";import{C as ms}from"../../../chunks/CodeFence-9b5871c3.js";import{T as Os}from"../../../chunks/TableWrapper-46c9ed1f.js";import{C as Us}from"../../../chunks/CodeInline-b0c918ba.js";import{L as As}from"../../../chunks/Link-77d01379.js";import"../../../chunks/Loader-078c5169.js";import"../../../chunks/rgba-d25d8fcf.js";import"../../../chunks/exception-5d79bab8.js";import"../../../chunks/singletons-fc9b72e6.js";import"../../../chunks/clsx.m-5abe7e4f.js";function Ws(o,n){const e=async()=>{if(n)try{await navigator.clipboard.writeText(n),o.dispatchEvent(new CustomEvent("useclipboard",{detail:n}))}catch(t){o.dispatchEvent(new CustomEvent("useclipboard-error",{detail:t}))}};return o.addEventListener("click",e,!0),{update:t=>n=t,destroy:()=>o.removeEventListener("click",e,!0)}}function Is(o){let n;return{c(){n=D("#")},l(e){n=F(e,"#")},m(e,t){r(e,n,t)},d(e){e&&a(n)}}}function Ms(o){let n,e;return n=new Bs({props:{$$slots:{default:[Vs]},$$scope:{ctx:o}}}),{c(){k(n.$$.fragment)},l(t){w(n.$$.fragment,t)},m(t,c){T(n,t,c),e=!0},i(t){e||(d(n.$$.fragment,t),e=!0)},o(t){_(n.$$.fragment,t),e=!1},d(t){x(n,t)}}}function Ns(o){let n,e;return n=new Bs({props:{color:"green",$$slots:{default:[Qs]},$$scope:{ctx:o}}}),{c(){k(n.$$.fragment)},l(t){w(n.$$.fragment,t)},m(t,c){T(n,t,c),e=!0},i(t){e||(d(n.$$.fragment,t),e=!0)},o(t){_(n.$$.fragment,t),e=!1},d(t){x(n,t)}}}function Vs(o){let n;return{c(){n=D("Click me to copy text")},l(e){n=F(e,"Click me to copy text")},m(e,t){r(e,n,t)},d(e){e&&a(n)}}}function Qs(o){let n;return{c(){n=D("copied")},l(e){n=F(e,"copied")},m(e,t){r(e,n,t)},d(e){e&&a(n)}}}function Ys(o){let n,e,t,c,A,v;const B=[Ns,Ms],m=[];function h(i,u){return i[0]?0:1}return e=h(o),t=m[e]=B[e](o),{c(){n=y("div"),t.c()},l(i){n=f(i,"DIV",{});var u=C(n);t.l(u),u.forEach(a)},m(i,u){r(i,n,u),m[e].m(n,null),c=!0,A||(v=[Hs(n,"useclipboard",o[2]),Ps(Ws.call(null,n,sn))],A=!0)},p(i,u){let $=e;e=h(i),e!==$&&(Ls(),_(m[$],1,1,()=>{m[$]=null}),Rs(),t=m[e],t||(t=m[e]=B[e](i),t.c()),d(t,1),t.m(n,null))},i(i){c||(d(t),c=!0)},o(i){_(t),c=!1},d(i){i&&a(n),m[e].d(),A=!1,qs(v)}}}function zs(o){let n;return{c(){n=D("#")},l(e){n=F(e,"#")},m(e,t){r(e,n,t)},d(e){e&&a(n)}}}function Js(o){let n,e,t,c,A,v,B,m,h,i,u,$,H,J,j,P,I;return{c(){n=y("table"),e=y("thead"),t=y("tr"),c=y("th"),A=D("Param"),v=g(),B=y("th"),m=D("Description"),h=g(),i=y("tbody"),u=y("tr"),$=y("td"),H=D("text"),J=g(),j=y("td"),P=D("The text that will be copied when the action is triggered"),I=g()},l(b){n=f(b,"TABLE",{});var q=C(n);e=f(q,"THEAD",{});var M=C(e);t=f(M,"TR",{});var G=C(t);c=f(G,"TH",{});var K=C(c);A=F(K,"Param"),K.forEach(a),v=E(G),B=f(G,"TH",{});var ts=C(B);m=F(ts,"Description"),ts.forEach(a),G.forEach(a),M.forEach(a),h=E(q),i=f(q,"TBODY",{});var X=C(i);u=f(X,"TR",{});var L=C(u);$=f(L,"TD",{});var R=C($);H=F(R,"text"),R.forEach(a),J=E(L),j=f(L,"TD",{});var S=C(j);P=F(S,"The text that will be copied when the action is triggered"),S.forEach(a),L.forEach(a),X.forEach(a),I=E(q),q.forEach(a)},m(b,q){r(b,n,q),p(n,e),p(e,t),p(t,c),p(c,A),p(t,v),p(t,B),p(B,m),p(n,h),p(n,i),p(i,u),p(u,$),p($,H),p(u,J),p(u,j),p(j,P),p(n,I)},p:Ss,d(b){b&&a(n)}}}function Ks(o){let n;return{c(){n=D("#")},l(e){n=F(e,"#")},m(e,t){r(e,n,t)},d(e){e&&a(n)}}}function Xs(o){let n;return{c(){n=D("#")},l(e){n=F(e,"#")},m(e,t){r(e,n,t)},d(e){e&&a(n)}}}function Zs(o){let n,e=o[1].title+"",t,c,A,v=o[1].description+"",B,m,h,i,u,$,H,J,j,P,I,b,q,M,G=o[1].title+"",K,ts,X,L,R,S,ds,Fs,N,O,V,_s,ys,U,vs,ps,rs=o[1].title+"",fs,hs,Z,Cs,ss,W,Q,bs,us,ns,Y;return h=new ms({props:{lang:"typescript",ext:"ts",linesCount:2,code:`<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">clipboard</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/actions</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),H=new As({props:{class:"header-anchor",href:"#usage","aria-hidden":"true",$$slots:{default:[Is]},$$scope:{ctx:o}}}),P=new js({props:{$$slots:{default:[Ys]},$$scope:{ctx:o}}}),L=new ms({props:{lang:"svelte",ext:"svelte",linesCount:24,rawCode:`<script>
	import { Button } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/actions';

	let textToCopy = 'This message was copied';
	let copied = false;
<\/script>

<div
    on:useclipboard={() => {
        copied = true;
        setTimeout(function () {
            copied = false;
        }, 1000);
    }}
    use:clipboard={textToCopy}
>
    {#if copied}
        <Button color="green">copied</Button>
    {:else}
        <Button>Click me to copy text</Button>
    {/if}
</div>
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Button</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/core</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">clipboard</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/actions</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> textToCopy </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">This message was copied</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> copied </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">useclipboard</span><span style="color: #89DDFF">={()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #A6ACCD">copied</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">true</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #82AAFF">setTimeout</span><span style="color: #F07178">(</span><span style="color: #C792EA">function</span><span style="color: #F07178"> </span><span style="color: #89DDFF">()</span><span style="color: #F07178"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">            </span><span style="color: #A6ACCD">copied</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #FF9CAC">false</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">        </span><span style="color: #89DDFF">},</span><span style="color: #F07178"> </span><span style="color: #F78C6C">1000</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #F07178">    </span><span style="color: #89DDFF">}}</span></span>
<span class="line"><span style="color: #89DDFF">    </span><span style="color: #89DDFF; font-style: italic">use</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD">clipboard</span><span style="color: #89DDFF">={</span><span style="color: #A6ACCD">textToCopy</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">{#</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #A6ACCD"> copied</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF"> </span><span style="color: #C792EA">color</span><span style="color: #89DDFF">=</span><span style="color: #89DDFF">&quot;</span><span style="color: #C3E88D">green</span><span style="color: #89DDFF">&quot;</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">copied</span><span style="color: #89DDFF">&lt;/</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">{:</span><span style="color: #89DDFF; font-style: italic">else</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #A6ACCD">        </span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">Click me to copy text</span><span style="color: #89DDFF">&lt;/</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #89DDFF">{/</span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #89DDFF">}</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre>`}}),S=new As({props:{class:"header-anchor",href:"#params","aria-hidden":"true",$$slots:{default:[zs]},$$scope:{ctx:o}}}),N=new Os({props:{$$slots:{default:[Js]},$$scope:{ctx:o}}}),V=new As({props:{class:"header-anchor",href:"#events","aria-hidden":"true",$$slots:{default:[Ks]},$$scope:{ctx:o}}}),Z=new Us({props:{code:"e.g. on:click={() => {}}"}}),ss=new ms({props:{lang:"typescript",ext:"ts",linesCount:3,code:`<pre><code><span class="line"><span style="color: #FFCB6B">on</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD">useclipboard</span><span style="color: #89DDFF">?:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">callback</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">unknown</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">void;</span></span>
<span class="line"><span style="color: #FFCB6B">on</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD">useclipboard</span><span style="color: #89DDFF">-</span><span style="color: #A6ACCD">error</span><span style="color: #89DDFF">?:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">callback</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">any</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">unknown</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">void;</span></span>
<span class="line"></span></code></pre>`}}),Q=new As({props:{class:"header-anchor",href:"#definition","aria-hidden":"true",$$slots:{default:[Xs]},$$scope:{ctx:o}}}),ns=new ms({props:{lang:"typescript",ext:"ts",linesCount:2,code:`<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">export</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">clipboard</span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">node</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">HTMLElement</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> text</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">):</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">ReturnType</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Action</span><span style="color: #89DDFF">&gt;;</span></span>
<span class="line"></span></code></pre>`}}),{c(){n=y("h1"),t=D(e),c=g(),A=y("p"),B=D(v),m=g(),k(h.$$.fragment),i=y("hr"),u=g(),$=y("h2"),k(H.$$.fragment),J=D(" Usage"),j=g(),k(P.$$.fragment),I=g(),b=y("p"),q=D("With the "),M=y("strong"),K=D(G),ts=D(" action, text passed into the text param will be copied to the users clipboard."),X=g(),k(L.$$.fragment),R=y("h2"),k(S.$$.fragment),ds=D(" Params"),Fs=g(),k(N.$$.fragment),O=y("h2"),k(V.$$.fragment),_s=D(" Events"),ys=g(),U=y("p"),vs=D("The "),ps=y("strong"),fs=D(rs),hs=D(" action dispatches custom events. Each custom event takes a callback function just like other events "),k(Z.$$.fragment),Cs=g(),k(ss.$$.fragment),W=y("h2"),k(Q.$$.fragment),bs=D(" Definition"),us=g(),k(ns.$$.fragment),this.h()},l(s){n=f(s,"H1",{});var l=C(n);t=F(l,e),l.forEach(a),c=E(s),A=f(s,"P",{});var cs=C(A);B=F(cs,v),cs.forEach(a),m=E(s),w(h.$$.fragment,s),i=f(s,"HR",{}),u=E(s),$=f(s,"H2",{id:!0,tabindex:!0});var as=C($);w(H.$$.fragment,as),J=F(as," Usage"),as.forEach(a),j=E(s),w(P.$$.fragment,s),I=E(s),b=f(s,"P",{});var es=C(b);q=F(es,"With the "),M=f(es,"STRONG",{});var is=C(M);K=F(is,G),is.forEach(a),ts=F(es," action, text passed into the text param will be copied to the users clipboard."),es.forEach(a),X=E(s),w(L.$$.fragment,s),R=f(s,"H2",{id:!0,tabindex:!0});var ls=C(R);w(S.$$.fragment,ls),ds=F(ls," Params"),ls.forEach(a),Fs=E(s),w(N.$$.fragment,s),O=f(s,"H2",{id:!0,tabindex:!0});var os=C(O);w(V.$$.fragment,os),_s=F(os," Events"),os.forEach(a),ys=E(s),U=f(s,"P",{});var Ds=C(U);vs=F(Ds,"The "),ps=f(Ds,"STRONG",{});var Es=C(ps);fs=F(Es,rs),Es.forEach(a),hs=F(Ds," action dispatches custom events. Each custom event takes a callback function just like other events "),w(Z.$$.fragment,Ds),Ds.forEach(a),Cs=E(s),w(ss.$$.fragment,s),W=f(s,"H2",{id:!0,tabindex:!0});var gs=C(W);w(Q.$$.fragment,gs),bs=F(gs," Definition"),gs.forEach(a),us=E(s),w(ns.$$.fragment,s),this.h()},h(){z($,"id","usage"),z($,"tabindex","-1"),z(R,"id","params"),z(R,"tabindex","-1"),z(O,"id","events"),z(O,"tabindex","-1"),z(W,"id","definition"),z(W,"tabindex","-1")},m(s,l){r(s,n,l),p(n,t),r(s,c,l),r(s,A,l),p(A,B),r(s,m,l),T(h,s,l),r(s,i,l),r(s,u,l),r(s,$,l),T(H,$,null),p($,J),r(s,j,l),T(P,s,l),r(s,I,l),r(s,b,l),p(b,q),p(b,M),p(M,K),p(b,ts),r(s,X,l),T(L,s,l),r(s,R,l),T(S,R,null),p(R,ds),r(s,Fs,l),T(N,s,l),r(s,O,l),T(V,O,null),p(O,_s),r(s,ys,l),r(s,U,l),p(U,vs),p(U,ps),p(ps,fs),p(U,hs),T(Z,U,null),r(s,Cs,l),T(ss,s,l),r(s,W,l),T(Q,W,null),p(W,bs),r(s,us,l),T(ns,s,l),Y=!0},p(s,[l]){(!Y||l&2)&&e!==(e=s[1].title+"")&&$s(t,e),(!Y||l&2)&&v!==(v=s[1].description+"")&&$s(B,v);const cs={};l&8&&(cs.$$scope={dirty:l,ctx:s}),H.$set(cs);const as={};l&9&&(as.$$scope={dirty:l,ctx:s}),P.$set(as),(!Y||l&2)&&G!==(G=s[1].title+"")&&$s(K,G);const es={};l&8&&(es.$$scope={dirty:l,ctx:s}),S.$set(es);const is={};l&8&&(is.$$scope={dirty:l,ctx:s}),N.$set(is);const ls={};l&8&&(ls.$$scope={dirty:l,ctx:s}),V.$set(ls),(!Y||l&2)&&rs!==(rs=s[1].title+"")&&$s(fs,rs);const os={};l&8&&(os.$$scope={dirty:l,ctx:s}),Q.$set(os)},i(s){Y||(d(h.$$.fragment,s),d(H.$$.fragment,s),d(P.$$.fragment,s),d(L.$$.fragment,s),d(S.$$.fragment,s),d(N.$$.fragment,s),d(V.$$.fragment,s),d(Z.$$.fragment,s),d(ss.$$.fragment,s),d(Q.$$.fragment,s),d(ns.$$.fragment,s),Y=!0)},o(s){_(h.$$.fragment,s),_(H.$$.fragment,s),_(P.$$.fragment,s),_(L.$$.fragment,s),_(S.$$.fragment,s),_(N.$$.fragment,s),_(V.$$.fragment,s),_(Z.$$.fragment,s),_(ss.$$.fragment,s),_(Q.$$.fragment,s),_(ns.$$.fragment,s),Y=!1},d(s){s&&a(n),s&&a(c),s&&a(A),s&&a(m),x(h,s),s&&a(i),s&&a(u),s&&a($),x(H),s&&a(j),x(P,s),s&&a(I),s&&a(b),s&&a(X),x(L,s),s&&a(R),x(S),s&&a(Fs),x(N,s),s&&a(O),x(V),s&&a(ys),s&&a(U),x(Z),s&&a(Cs),x(ss,s),s&&a(W),x(Q),s&&a(us),x(ns,s)}}}let sn="This message was copied";function nn(o,n,e){let t;xs(o,Gs,v=>e(1,t=v));let c=!1;return[c,t,()=>{e(0,c=!0),setTimeout(function(){e(0,c=!1)},1e3)}]}class $n extends ks{constructor(n){super(),ws(this,n,nn,Zs,Ts,{})}}export{$n as default};