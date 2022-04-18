import{S as ds,i as Bs,s as gs,e as I,t as f,k as g,w as $,c as j,a as G,h as D,d as o,m as v,x as u,b as N,g as r,M as B,y as C,j as rs,q as m,o as A,B as _,Q as vs}from"../../../chunks/index-060057ec.js";import"../../../chunks/Text.errors-13cae356.js";import{B as As}from"../../../chunks/Button-abb22114.js";import{T as ws}from"../../../chunks/Text-60233a97.js";import{P as ks}from"../../../chunks/Preview-b3e65963.js";import{f as bs}from"../../../chunks/scroll-ea580e6e.js";import{C as os}from"../../../chunks/CodeFence-9b5871c3.js";import{C as _s}from"../../../chunks/CodeInline-b0c918ba.js";import{L as ps}from"../../../chunks/Link-77d01379.js";import"../../../chunks/Loader-078c5169.js";import"../../../chunks/rgba-d25d8fcf.js";import"../../../chunks/exception-5d79bab8.js";import"../../../chunks/singletons-fc9b72e6.js";import"../../../chunks/clsx.m-5abe7e4f.js";const Es=()=>typeof window!="undefined",hs=Es();function Ps(p,t={}){const{immediate:n=!0}=t;let e=!1;async function i(){if(!!e)try{p(),hs&&await window.requestAnimationFrame(i)}catch(l){console.error(l)}}function c(){e||(e=!0,i())}function y(){e=!1}return n&&c(),{isActive:e,pause:y,resume:c}}function Rs(p){let t;return{c(){t=f("#")},l(n){t=D(n,"#")},m(n,e){r(n,t,e)},d(n){n&&o(t)}}}function qs(p){let t,n;return{c(){t=f("Count: "),n=f(p[0])},l(e){t=D(e,"Count: "),n=D(e,p[0])},m(e,i){r(e,t,i),r(e,n,i)},p(e,i){i&1&&rs(n,e[0])},d(e){e&&o(t),e&&o(n)}}}function xs(p){let t;return{c(){t=f("Pause")},l(n){t=D(n,"Pause")},m(n,e){r(n,t,e)},d(n){n&&o(t)}}}function Ss(p){let t;return{c(){t=f("Resume")},l(n){t=D(n,"Resume")},m(n,e){r(n,t,e)},d(n){n&&o(t)}}}function Ts(p){let t,n,e,i,c,y;return t=new ws({props:{size:"xl",$$slots:{default:[qs]},$$scope:{ctx:p}}}),e=new As({props:{$$slots:{default:[xs]},$$scope:{ctx:p}}}),e.$on("click",p[4]),c=new As({props:{$$slots:{default:[Ss]},$$scope:{ctx:p}}}),c.$on("click",p[5]),{c(){$(t.$$.fragment),n=g(),$(e.$$.fragment),i=g(),$(c.$$.fragment)},l(l){u(t.$$.fragment,l),n=v(l),u(e.$$.fragment,l),i=v(l),u(c.$$.fragment,l)},m(l,F){C(t,l,F),r(l,n,F),C(e,l,F),r(l,i,F),C(c,l,F),y=!0},p(l,F){const d={};F&65&&(d.$$scope={dirty:F,ctx:l}),t.$set(d);const O={};F&64&&(O.$$scope={dirty:F,ctx:l}),e.$set(O);const U={};F&64&&(U.$$scope={dirty:F,ctx:l}),c.$set(U)},i(l){y||(m(t.$$.fragment,l),m(e.$$.fragment,l),m(c.$$.fragment,l),y=!0)},o(l){A(t.$$.fragment,l),A(e.$$.fragment,l),A(c.$$.fragment,l),y=!1},d(l){_(t,l),l&&o(n),_(e,l),l&&o(i),_(c,l)}}}function Hs(p){let t;return{c(){t=f("requestAnimationFrame")},l(n){t=D(n,"requestAnimationFrame")},m(n,e){r(n,t,e)},d(n){n&&o(t)}}}function Is(p){let t;return{c(){t=f("#")},l(n){t=D(n,"#")},m(n,e){r(n,t,e)},d(n){n&&o(t)}}}function js(p){let t;return{c(){t=f("#")},l(n){t=D(n,"#")},m(n,e){r(n,t,e)},d(n){n&&o(t)}}}function Os(p){let t,n=p[1].title+"",e,i,c,y=p[1].description+"",l,F,d,O,U,b,q,cs,Z,x,ss,w,is,V=p[1].title+"",ns,fs,S,Ds,ts,z,E,T,Fs,es,k,ys,L,$s,W,us,as,Y,h,H,Cs,ls,M,Q;return d=new os({props:{lang:"typescript",ext:"ts",linesCount:2,code:`<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">rafFn</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/utilities</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),q=new ps({props:{class:"header-anchor",href:"#usage","aria-hidden":"true",$$slots:{default:[Rs]},$$scope:{ctx:p}}}),x=new ks({props:{$$slots:{default:[Ts]},$$scope:{ctx:p}}}),S=new ps({props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Hs]},$$scope:{ctx:p}}}),z=new os({props:{lang:"svelte",ext:"svelte",linesCount:14,rawCode:`<script>
	import { rafFn } from '@svelteuidev/utilities';
	import { Button } from '@svelteuidev/core';

	let count = 0;
	const { pause, resume } = rafFn(() => {
		count++;
	});
<\/script>

<div>Count: {count}</div>
<Button on:click={() => pause()}>Pause</Button>
<Button on:click={() => resume()}>Resume</Button>
`,showCopyCode:!0,code:`<pre><code><span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">rafFn</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/utilities</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #89DDFF; font-style: italic">import</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">Button</span><span style="color: #F07178"> </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF; font-style: italic">from</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">&#39;</span><span style="color: #C3E88D">@svelteuidev/core</span><span style="color: #89DDFF">&#39;</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">let</span><span style="color: #A6ACCD"> count </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #F78C6C">0</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #C792EA">const</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD"> pause</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> resume </span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">rafFn</span><span style="color: #A6ACCD">(</span><span style="color: #89DDFF">()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #F07178">		</span><span style="color: #A6ACCD">count</span><span style="color: #89DDFF">++;</span></span>
<span class="line"><span style="color: #F07178">	</span><span style="color: #89DDFF">}</span><span style="color: #A6ACCD">)</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;/</span><span style="color: #F07178">script</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span><span style="color: #A6ACCD">Count: </span><span style="color: #89DDFF">{</span><span style="color: #A6ACCD">count</span><span style="color: #89DDFF">}&lt;/</span><span style="color: #F07178">div</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">click</span><span style="color: #89DDFF">={()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">pause</span><span style="color: #A6ACCD">()</span><span style="color: #89DDFF">}&gt;</span><span style="color: #A6ACCD">Pause</span><span style="color: #89DDFF">&lt;/</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF"> </span><span style="color: #89DDFF; font-style: italic">on</span><span style="color: #89DDFF">:</span><span style="color: #FFCB6B">click</span><span style="color: #89DDFF">={()</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">=&gt;</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">resume</span><span style="color: #A6ACCD">()</span><span style="color: #89DDFF">}&gt;</span><span style="color: #A6ACCD">Resume</span><span style="color: #89DDFF">&lt;/</span><span style="color: #FFCB6B">Button</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre>`}}),T=new ps({props:{class:"header-anchor",href:"#typescript","aria-hidden":"true",$$slots:{default:[Is]},$$scope:{ctx:p}}}),L=new _s({props:{code:"RafFnOptions"}}),W=new _s({props:{code:"@svelteuidev/utilities"}}),Y=new os({props:{lang:"typescript",ext:"ts",linesCount:9,code:`<pre><code><span class="line"><span style="color: #89DDFF; font-style: italic">export</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">interface</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">RafFnOptions</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">extends</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">ConfigurableWindow</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #464B5D; font-style: italic">/**</span></span>
<span class="line"><span style="color: #464B5D; font-style: italic">	 * Start the requestAnimationFrame loop immediately on creation</span></span>
<span class="line"><span style="color: #464B5D; font-style: italic">	 *</span></span>
<span class="line"><span style="color: #464B5D; font-style: italic">	 * </span><span style="color: #89DDFF; font-style: italic">@</span><span style="color: #C792EA; font-style: italic">default</span><span style="color: #464B5D; font-style: italic"> </span><span style="color: #A6ACCD; font-style: italic">true</span></span>
<span class="line"><span style="color: #464B5D; font-style: italic">	 */</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #F07178">immediate</span><span style="color: #89DDFF">?:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">boolean</span><span style="color: #89DDFF">;</span></span>
<span class="line"><span style="color: #89DDFF">}</span></span>
<span class="line"></span></code></pre>`}}),H=new ps({props:{class:"header-anchor",href:"#definition","aria-hidden":"true",$$slots:{default:[js]},$$scope:{ctx:p}}}),M=new os({props:{lang:"typescript",ext:"ts",linesCount:2,code:`<pre><code><span class="line"><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">rafFn</span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">fn</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Fn</span><span style="color: #89DDFF">,</span><span style="color: #A6ACCD"> options</span><span style="color: #89DDFF">:</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">RafFnOptions</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">=</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{}):</span><span style="color: #A6ACCD"> </span><span style="color: #FFCB6B">Pauseable</span><span style="color: #89DDFF">;</span></span>
<span class="line"></span></code></pre>`}}),{c(){t=I("h1"),e=f(n),i=g(),c=I("p"),l=f(y),F=g(),$(d.$$.fragment),O=I("hr"),U=g(),b=I("h2"),$(q.$$.fragment),cs=f(" Usage"),Z=g(),$(x.$$.fragment),ss=g(),w=I("p"),is=f("The "),ns=f(V),fs=f(" utility takes a callback function as its first argument, and calls that function on every "),$(S.$$.fragment),Ds=f(". It returns an object with controls of pausing and resuming."),ts=g(),$(z.$$.fragment),E=I("h2"),$(T.$$.fragment),Fs=f(" TypeScript"),es=g(),k=I("p"),ys=f("You can import "),$(L.$$.fragment),$s=f(" interface type from "),$(W.$$.fragment),us=f(":"),as=g(),$(Y.$$.fragment),h=I("h2"),$(H.$$.fragment),Cs=f(" Definition"),ls=g(),$(M.$$.fragment),this.h()},l(s){t=j(s,"H1",{});var a=G(t);e=D(a,n),a.forEach(o),i=v(s),c=j(s,"P",{});var X=G(c);l=D(X,y),X.forEach(o),F=v(s),u(d.$$.fragment,s),O=j(s,"HR",{}),U=v(s),b=j(s,"H2",{id:!0,tabindex:!0});var J=G(b);u(q.$$.fragment,J),cs=D(J," Usage"),J.forEach(o),Z=v(s),u(x.$$.fragment,s),ss=v(s),w=j(s,"P",{});var P=G(w);is=D(P,"The "),ns=D(P,V),fs=D(P," utility takes a callback function as its first argument, and calls that function on every "),u(S.$$.fragment,P),Ds=D(P,". It returns an object with controls of pausing and resuming."),P.forEach(o),ts=v(s),u(z.$$.fragment,s),E=j(s,"H2",{id:!0,tabindex:!0});var K=G(E);u(T.$$.fragment,K),Fs=D(K," TypeScript"),K.forEach(o),es=v(s),k=j(s,"P",{});var R=G(k);ys=D(R,"You can import "),u(L.$$.fragment,R),$s=D(R," interface type from "),u(W.$$.fragment,R),us=D(R,":"),R.forEach(o),as=v(s),u(Y.$$.fragment,s),h=j(s,"H2",{id:!0,tabindex:!0});var ms=G(h);u(H.$$.fragment,ms),Cs=D(ms," Definition"),ms.forEach(o),ls=v(s),u(M.$$.fragment,s),this.h()},h(){N(b,"id","usage"),N(b,"tabindex","-1"),N(E,"id","typescript"),N(E,"tabindex","-1"),N(h,"id","definition"),N(h,"tabindex","-1")},m(s,a){r(s,t,a),B(t,e),r(s,i,a),r(s,c,a),B(c,l),r(s,F,a),C(d,s,a),r(s,O,a),r(s,U,a),r(s,b,a),C(q,b,null),B(b,cs),r(s,Z,a),C(x,s,a),r(s,ss,a),r(s,w,a),B(w,is),B(w,ns),B(w,fs),C(S,w,null),B(w,Ds),r(s,ts,a),C(z,s,a),r(s,E,a),C(T,E,null),B(E,Fs),r(s,es,a),r(s,k,a),B(k,ys),C(L,k,null),B(k,$s),C(W,k,null),B(k,us),r(s,as,a),C(Y,s,a),r(s,h,a),C(H,h,null),B(h,Cs),r(s,ls,a),C(M,s,a),Q=!0},p(s,[a]){(!Q||a&2)&&n!==(n=s[1].title+"")&&rs(e,n),(!Q||a&2)&&y!==(y=s[1].description+"")&&rs(l,y);const X={};a&64&&(X.$$scope={dirty:a,ctx:s}),q.$set(X);const J={};a&65&&(J.$$scope={dirty:a,ctx:s}),x.$set(J),(!Q||a&2)&&V!==(V=s[1].title+"")&&rs(ns,V);const P={};a&64&&(P.$$scope={dirty:a,ctx:s}),S.$set(P);const K={};a&64&&(K.$$scope={dirty:a,ctx:s}),T.$set(K);const R={};a&64&&(R.$$scope={dirty:a,ctx:s}),H.$set(R)},i(s){Q||(m(d.$$.fragment,s),m(q.$$.fragment,s),m(x.$$.fragment,s),m(S.$$.fragment,s),m(z.$$.fragment,s),m(T.$$.fragment,s),m(L.$$.fragment,s),m(W.$$.fragment,s),m(Y.$$.fragment,s),m(H.$$.fragment,s),m(M.$$.fragment,s),Q=!0)},o(s){A(d.$$.fragment,s),A(q.$$.fragment,s),A(x.$$.fragment,s),A(S.$$.fragment,s),A(z.$$.fragment,s),A(T.$$.fragment,s),A(L.$$.fragment,s),A(W.$$.fragment,s),A(Y.$$.fragment,s),A(H.$$.fragment,s),A(M.$$.fragment,s),Q=!1},d(s){s&&o(t),s&&o(i),s&&o(c),s&&o(F),_(d,s),s&&o(O),s&&o(U),s&&o(b),_(q),s&&o(Z),_(x,s),s&&o(ss),s&&o(w),_(S),s&&o(ts),_(z,s),s&&o(E),_(T),s&&o(es),s&&o(k),_(L),_(W),s&&o(as),_(Y,s),s&&o(h),_(H),s&&o(ls),_(M,s)}}}function Us(p,t,n){let e;vs(p,bs,d=>n(1,e=d));let i=0;const{pause:c,resume:y}=Ps(()=>{n(0,i++,i)});return[i,e,c,y,()=>c(),()=>y()]}class nn extends ds{constructor(t){super(),Bs(this,t,Us,Os,gs,{})}}export{nn as default};
