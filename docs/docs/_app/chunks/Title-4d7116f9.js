import{S as b,i as k,s as B,w as K,x as O,y as P,q as T,o as q,B as j,K as A,N as D,O as E,P as F}from"./index-060057ec.js";import{T as G}from"./Text-60233a97.js";import{c as I}from"./Text.errors-13cae356.js";const H={1:{fontSize:34,lineHeight:1.3},2:{fontSize:26,lineHeight:1.35},3:{fontSize:22,lineHeight:1.4},4:{fontSize:18,lineHeight:1.45},5:{fontSize:16,lineHeight:1.5},6:{fontSize:14,lineHeight:1.5}};function J(t){let i;const f=t[16].default,e=A(f,t,t[17],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,a){e&&e.m(n,a),i=!0},p(n,a){e&&e.p&&(!i||a&131072)&&D(e,f,n,n[17],i?F(f,n[17],a,null):E(n[17]),null)},i(n){i||(T(e,n),i=!0)},o(n){q(e,n),i=!1},d(n){e&&e.d(n)}}}function L(t){let i,f;return i=new G({props:{class:"title "+t[0]+" "+t[15]({css:t[1]}),root:t[14],align:t[2],size:H[t[3]].fontSize,color:t[4],transform:t[5],variant:t[6],weight:t[7],gradient:t[8],inline:t[9],lineClamp:t[10],underline:t[11],inherit:t[12],href:t[13],$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){K(i.$$.fragment)},l(e){O(i.$$.fragment,e)},m(e,n){P(i,e,n),f=!0},p(e,[n]){const a={};n&3&&(a.class="title "+e[0]+" "+e[15]({css:e[1]})),n&16384&&(a.root=e[14]),n&4&&(a.align=e[2]),n&8&&(a.size=H[e[3]].fontSize),n&16&&(a.color=e[4]),n&32&&(a.transform=e[5]),n&64&&(a.variant=e[6]),n&128&&(a.weight=e[7]),n&256&&(a.gradient=e[8]),n&512&&(a.inline=e[9]),n&1024&&(a.lineClamp=e[10]),n&2048&&(a.underline=e[11]),n&4096&&(a.inherit=e[12]),n&8192&&(a.href=e[13]),n&131072&&(a.$$scope={dirty:n,ctx:e}),i.$set(a)},i(e){f||(T(i.$$.fragment,e),f=!0)},o(e){q(i.$$.fragment,e),f=!1},d(e){j(i,e)}}}function M(t,i,f){let{$$slots:e={},$$scope:n}=i,{class:a=""}=i,{override:o={}}=i,{align:s="left"}=i,{order:r=1}=i,{color:m="dark"}=i,{transform:u="none"}=i,{variant:g="text"}=i,{weight:h="normal"}=i,{gradient:_={from:"indigo",to:"cyan",deg:45}}=i,{inline:c=!0}=i,{lineClamp:S=void 0}=i,{underline:z=void 0}=i,{inherit:d=!1}=i,{href:w=""}=i,C;const N=I({margin:0});return t.$$set=l=>{"class"in l&&f(0,a=l.class),"override"in l&&f(1,o=l.override),"align"in l&&f(2,s=l.align),"order"in l&&f(3,r=l.order),"color"in l&&f(4,m=l.color),"transform"in l&&f(5,u=l.transform),"variant"in l&&f(6,g=l.variant),"weight"in l&&f(7,h=l.weight),"gradient"in l&&f(8,_=l.gradient),"inline"in l&&f(9,c=l.inline),"lineClamp"in l&&f(10,S=l.lineClamp),"underline"in l&&f(11,z=l.underline),"inherit"in l&&f(12,d=l.inherit),"href"in l&&f(13,w=l.href),"$$scope"in l&&f(17,n=l.$$scope)},t.$$.update=()=>{t.$$.dirty&8&&f(14,C=`h${r}`)},[a,o,s,r,m,u,g,h,_,c,S,z,d,w,C,N,e,n]}class V extends b{constructor(i){super(),k(this,i,M,L,B,{class:0,override:1,align:2,order:3,color:4,transform:5,variant:6,weight:7,gradient:8,inline:9,lineClamp:10,underline:11,inherit:12,href:13})}}export{V as T};