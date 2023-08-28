import{S as Pe,i as $e,s as qe,e as r,w,b as v,c as ve,f as b,g as d,h as n,m as he,x as I,O as ue,P as ge,k as ye,Q as Re,n as Be,t as Z,a as x,o as f,d as we,C as Ce,p as Se,r as L,u as Te,N as Me}from"./index-89fe258d.js";import{S as Ae}from"./SdkTabs-c31d09be.js";function me(a,s,l){const o=a.slice();return o[5]=s[l],o}function be(a,s,l){const o=a.slice();return o[5]=s[l],o}function _e(a,s){let l,o=s[5].code+"",_,m,i,p;function u(){return s[4](s[5])}return{key:a,first:null,c(){l=r("button"),_=w(o),m=v(),b(l,"class","tab-item"),L(l,"active",s[1]===s[5].code),this.first=l},m(P,$){d(P,l,$),n(l,_),n(l,m),i||(p=Te(l,"click",u),i=!0)},p(P,$){s=P,$&4&&o!==(o=s[5].code+"")&&I(_,o),$&6&&L(l,"active",s[1]===s[5].code)},d(P){P&&f(l),i=!1,p()}}}function ke(a,s){let l,o,_,m;return o=new Me({props:{content:s[5].body}}),{key:a,first:null,c(){l=r("div"),ve(o.$$.fragment),_=v(),b(l,"class","tab-item"),L(l,"active",s[1]===s[5].code),this.first=l},m(i,p){d(i,l,p),he(o,l,null),n(l,_),m=!0},p(i,p){s=i;const u={};p&4&&(u.content=s[5].body),o.$set(u),(!m||p&6)&&L(l,"active",s[1]===s[5].code)},i(i){m||(Z(o.$$.fragment,i),m=!0)},o(i){x(o.$$.fragment,i),m=!1},d(i){i&&f(l),we(o)}}}function Ue(a){var re,de;let s,l,o=a[0].name+"",_,m,i,p,u,P,$,D=a[0].name+"",N,ee,Q,q,z,B,G,g,H,te,O,C,se,J,E=a[0].name+"",K,le,V,S,W,T,X,M,Y,y,A,h=[],oe=new Map,ae,U,k=[],ne=new Map,R;q=new Ae({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        await pb.collection('${(re=a[0])==null?void 0:re.name}').requestPasswordReset('test@example.com');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await pb.collection('${(de=a[0])==null?void 0:de.name}').requestPasswordReset('test@example.com');
    `}});let F=a[2];const ie=e=>e[5].code;for(let e=0;e<F.length;e+=1){let t=be(a,F,e),c=ie(t);oe.set(c,h[e]=_e(c,t))}let j=a[2];const ce=e=>e[5].code;for(let e=0;e<j.length;e+=1){let t=me(a,j,e),c=ce(t);ne.set(c,k[e]=ke(c,t))}return{c(){s=r("h3"),l=w("Request password reset ("),_=w(o),m=w(")"),i=v(),p=r("div"),u=r("p"),P=w("Sends "),$=r("strong"),N=w(D),ee=w(" password reset email request."),Q=v(),ve(q.$$.fragment),z=v(),B=r("h6"),B.textContent="API details",G=v(),g=r("div"),H=r("strong"),H.textContent="POST",te=v(),O=r("div"),C=r("p"),se=w("/api/collections/"),J=r("strong"),K=w(E),le=w("/request-password-reset"),V=v(),S=r("div"),S.textContent="Body Parameters",W=v(),T=r("table"),T.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>email</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The auth record email address to send the password reset request (if exists).</td></tr></tbody>`,X=v(),M=r("div"),M.textContent="Responses",Y=v(),y=r("div"),A=r("div");for(let e=0;e<h.length;e+=1)h[e].c();ae=v(),U=r("div");for(let e=0;e<k.length;e+=1)k[e].c();b(s,"class","m-b-sm"),b(p,"class","content txt-lg m-b-sm"),b(B,"class","m-b-xs"),b(H,"class","label label-primary"),b(O,"class","content"),b(g,"class","alert alert-success"),b(S,"class","section-title"),b(T,"class","table-compact table-border m-b-base"),b(M,"class","section-title"),b(A,"class","tabs-header compact left"),b(U,"class","tabs-content"),b(y,"class","tabs")},m(e,t){d(e,s,t),n(s,l),n(s,_),n(s,m),d(e,i,t),d(e,p,t),n(p,u),n(u,P),n(u,$),n($,N),n(u,ee),d(e,Q,t),he(q,e,t),d(e,z,t),d(e,B,t),d(e,G,t),d(e,g,t),n(g,H),n(g,te),n(g,O),n(O,C),n(C,se),n(C,J),n(J,K),n(C,le),d(e,V,t),d(e,S,t),d(e,W,t),d(e,T,t),d(e,X,t),d(e,M,t),d(e,Y,t),d(e,y,t),n(y,A);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(A,null);n(y,ae),n(y,U);for(let c=0;c<k.length;c+=1)k[c]&&k[c].m(U,null);R=!0},p(e,[t]){var fe,pe;(!R||t&1)&&o!==(o=e[0].name+"")&&I(_,o),(!R||t&1)&&D!==(D=e[0].name+"")&&I(N,D);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(fe=e[0])==null?void 0:fe.name}').requestPasswordReset('test@example.com');
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(pe=e[0])==null?void 0:pe.name}').requestPasswordReset('test@example.com');
    `),q.$set(c),(!R||t&1)&&E!==(E=e[0].name+"")&&I(K,E),t&6&&(F=e[2],h=ue(h,t,ie,1,e,F,oe,A,ge,_e,null,be)),t&6&&(j=e[2],ye(),k=ue(k,t,ce,1,e,j,ne,U,Re,ke,null,me),Be())},i(e){if(!R){Z(q.$$.fragment,e);for(let t=0;t<j.length;t+=1)Z(k[t]);R=!0}},o(e){x(q.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);R=!1},d(e){e&&f(s),e&&f(i),e&&f(p),e&&f(Q),we(q,e),e&&f(z),e&&f(B),e&&f(G),e&&f(g),e&&f(V),e&&f(S),e&&f(W),e&&f(T),e&&f(X),e&&f(M),e&&f(Y),e&&f(y);for(let t=0;t<h.length;t+=1)h[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function je(a,s,l){let o,{collection:_}=s,m=204,i=[];const p=u=>l(1,m=u.code);return a.$$set=u=>{"collection"in u&&l(0,_=u.collection)},l(3,o=Ce.getApiExampleUrl(Se.baseUrl)),l(2,i=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[_,m,i,o,p]}class Oe extends Pe{constructor(s){super(),$e(this,s,je,Ue,qe,{collection:0})}}export{Oe as default};