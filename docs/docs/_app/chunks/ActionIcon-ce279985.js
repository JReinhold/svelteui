import{S as N,i as R,s as H,e as q,c as E,a as L,d as p,Y as S,ac as h,g as C,n as Y,o as b,p as j,q as v,z as B,l as A,W,C as z,X as F,K,N as O,O as T,P as U,w as V,x as X,y as D,B as G,t as J,h as M}from"./index-060057ec.js";import{d as Q,c as Z}from"./Text.errors-13cae356.js";import{v as x,L as w}from"./Loader-078c5169.js";const k={xs:18,sm:22,md:28,lg:34,xl:44};function $(a,e){const t={from:"indigo",to:"cyan",deg:45};return e==="hover"||e==="transparent"?{[`${e}`]:{[`${Q.selector} &`]:{color:`$${a}800`,"&:hover":{backgroundColor:e==="transparent"?null:"$dark800"}},border:"1px solid transparent",backgroundColor:"transparent",color:`$${a}700`,"&:hover":{backgroundColor:e==="transparent"?null:`$${a}50`}}}:x(a,t)}function ee(a){let e;const t=a[12].default,r=K(t,a,a[11],null),l=r||le();return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,i){l&&l.m(o,i),e=!0},p(o,i){r&&r.p&&(!e||i&2048)&&O(r,t,o,o[11],e?U(t,o[11],i,null):T(o[11]),null)},i(o){e||(v(l,o),e=!0)},o(o){b(l,o),e=!1},d(o){l&&l.d(o)}}}function te(a){let e,t;return e=new w({props:{size:a[3].size,color:a[3].color,variant:a[3].variant}}),{c(){V(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,l){D(e,r,l),t=!0},p(r,l){const o={};l&8&&(o.size=r[3].size),l&8&&(o.color=r[3].color),l&8&&(o.variant=r[3].variant),e.$set(o)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){b(e.$$.fragment,r),t=!1},d(r){G(e,r)}}}function le(a){let e;return{c(){e=J("+")},l(t){e=M(t,"+")},m(t,r){C(t,e,r)},d(t){t&&p(e)}}}function y(a){let e,t,r,l,o,i;const g=[te,ee],u=[];function m(n,c){return n[4]?0:1}t=m(a),r=u[t]=g[t](a);let f=[{class:l=a[6]({css:a[0],variation:a[2]})},{disabled:o=a[5]||a[4]},a[7],{tabindex:"0"}],d={};for(let n=0;n<f.length;n+=1)d=z(d,f[n]);return{c(){e=q(a[1]),r.c(),this.h()},l(n){e=E(n,(a[1]||"null").toUpperCase(),{class:!0,disabled:!0,tabindex:!0});var c=L(e);r.l(c),c.forEach(p),this.h()},h(){S(e,d),h(e,"loading",a[4]),h(e,"disabled",a[5])},m(n,c){C(n,e,c),u[t].m(e,null),i=!0},p(n,c){let _=t;t=m(n),t===_?u[t].p(n,c):(Y(),b(u[_],1,1,()=>{u[_]=null}),j(),r=u[t],r?r.p(n,c):(r=u[t]=g[t](n),r.c()),v(r,1),r.m(e,null)),S(e,d=B(f,[(!i||c&5&&l!==(l=n[6]({css:n[0],variation:n[2]})))&&{class:l},(!i||c&48&&o!==(o=n[5]||n[4]))&&{disabled:o},c&128&&n[7],{tabindex:"0"}])),h(e,"loading",n[4]),h(e,"disabled",n[5])},i(n){i||(v(r),i=!0)},o(n){b(r),i=!1},d(n){n&&p(e),u[t].d()}}}function oe(a){let e=a[1],t,r,l=a[1]&&y(a);return{c(){l&&l.c(),t=A()},l(o){l&&l.l(o),t=A()},m(o,i){l&&l.m(o,i),C(o,t,i),r=!0},p(o,[i]){o[1]?e?H(e,o[1])?(l.d(1),l=y(o),l.c(),l.m(t.parentNode,t)):l.p(o,i):(l=y(o),l.c(),l.m(t.parentNode,t)):e&&(l.d(1),l=null),e=o[1]},i(o){r||(v(l),r=!0)},o(o){b(l),r=!1},d(o){o&&p(t),l&&l.d(o)}}}function re(a,e,t){const r=["override","root","color","variant","size","radius","loaderProps","loading","disabled"];let l=W(e,r),{$$slots:o={},$$scope:i}=e,{override:g={}}=e,{root:u="button"}=e,{color:m="gray"}=e,{variant:f="hover"}=e,{size:d="md"}=e,{radius:n="sm"}=e,{loaderProps:c={size:"xs",color:"gray",variant:"circle"}}=e,{loading:_=!1}=e,{disabled:P=!1}=e;const I=Z({focusRing:"auto",position:"relative",appearance:"none",WebkitAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",height:typeof d=="string"?k[d]:`${d}px`,minHeight:typeof d=="string"?k[d]:`${d}px`,width:typeof d=="string"?k[d]:`${d}px`,minWidth:typeof d=="string"?k[d]:`${d}px`,borderRadius:`$${n}`,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&:not(:disabled):active":{transform:"translateY(1px)"},["&.loading"]:{"&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:`$${n}`,cursor:"not-allowed"}},["&.disabled"]:{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"},variants:{variation:$(m,f)}});return a.$$set=s=>{e=z(z({},e),F(s)),t(7,l=W(e,r)),"override"in s&&t(0,g=s.override),"root"in s&&t(1,u=s.root),"color"in s&&t(8,m=s.color),"variant"in s&&t(2,f=s.variant),"size"in s&&t(9,d=s.size),"radius"in s&&t(10,n=s.radius),"loaderProps"in s&&t(3,c=s.loaderProps),"loading"in s&&t(4,_=s.loading),"disabled"in s&&t(5,P=s.disabled),"$$scope"in s&&t(11,i=s.$$scope)},[g,u,f,c,_,P,I,l,m,d,n,i,o]}class ie extends N{constructor(e){super(),R(this,e,re,oe,H,{override:0,root:1,color:8,variant:2,size:9,radius:10,loaderProps:3,loading:4,disabled:5})}}export{ie as A};
