import{S as k,i as D,s as B,e as C,w as p,k as T,c as q,a as y,x as _,m as z,d as l,b as P,g as u,y as $,M as S,q as d,o as h,B as g,Q as E,t as w,h as x,a6 as b}from"./index-060057ec.js";import"./Text.errors-13cae356.js";import{B as v}from"./Button-abb22114.js";import{w as I}from"./singletons-fc9b72e6.js";const m=I("one");function M(r){let e;return{c(){e=w("Documentation")},l(t){e=x(t,"Documentation")},m(t,n){u(t,e,n)},d(t){t&&l(e)}}}function Q(r){let e;return{c(){e=w("Component Props")},l(t){e=x(t,"Component Props")},m(t,n){u(t,e,n)},d(t){t&&l(e)}}}function V(r){let e,t,n,s,c;return t=new v({props:{variant:"gradient",size:"md",radius:"xl",$$slots:{default:[M]},$$scope:{ctx:r}}}),t.$on("click",r[3]),s=new v({props:{variant:"gradient",size:"md",radius:"xl",$$slots:{default:[Q]},$$scope:{ctx:r}}}),s.$on("click",r[4]),{c(){e=C("div"),p(t.$$.fragment),n=T(),p(s.$$.fragment),this.h()},l(a){e=q(a,"DIV",{class:!0});var o=y(e);_(t.$$.fragment,o),n=z(o),_(s.$$.fragment,o),o.forEach(l),this.h()},h(){P(e,"class","flex gap-4")},m(a,o){u(a,e,o),$(t,e,null),S(e,n),$(s,e,null),c=!0},p(a,[o]){const i={};o&32&&(i.$$scope={dirty:o,ctx:a}),t.$set(i);const f={};o&32&&(f.$$scope={dirty:o,ctx:a}),s.$set(f)},i(a){c||(d(t.$$.fragment,a),d(s.$$.fragment,a),c=!0)},o(a){h(t.$$.fragment,a),h(s.$$.fragment,a),c=!1},d(a){a&&l(e),g(t),g(s)}}}function j(r,e,t){let n;E(r,m,i=>t(0,n=i));let{active:s=void 0}=e,c=["one","two"];const a=()=>b(m,n=c[0],n),o=()=>b(m,n=c[1],n);return r.$$set=i=>{"active"in i&&t(2,s=i.active)},r.$$.update=()=>{r.$$.dirty&1&&t(2,s=n)},[n,c,s,a,o]}class J extends k{constructor(e){super(),D(this,e,j,V,B,{active:2})}}export{J as D,m as a};