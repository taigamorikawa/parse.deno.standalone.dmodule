HTTP/1.1 200 OK
Date: Thu, 19 Jan 2023 19:58:56 GMT
Transfer-Encoding: chunked
Connection: keep-alive
CF-Ray: 78c225dfef7df6bd-NRT
Access-Control-Allow-Origin: *
Age: 60
Cache-Control: public, max-age=31536000, immutable
Vary: Origin
CF-Cache-Status: HIT
X-Content-Source: workers-kv
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=7%2FAMDRyycFyjZlI9yYhpy2iZzLVcYltCrAr3uFUJpq7M5XDQ%2FLmViKHsdCKjqxEcw7aHfJjLJyrsmy4Ea79Al6QEZKiM%2FjUuE3bPxlH2MuDpztqVgpQhDIRJBBs4EvcuN7vrx9M%3D"}],"group":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Server: cloudflare
Alt-Svc: h3=":443"
Alt-Svc: h3-29=":443"
Content-Type: text/javascript; charset=utf-8
Last-Modified: Thu, 19 Jan 2023 19:57:55 GMT

/* esm.sh - esbuild bundle(preact@10.11.0/hooks) esnext production */
import{options as e,Fragment as T}from"/stable/preact@10.11.0/esnext/preact.js";var i,n,d,N,f=0,q=[],l=[],V=e.__b,g=e.__r,b=e.diffed,C=e.__c,A=e.unmount;function a(_,t){e.__h&&e.__h(n,_,f||t),f=0;var u=n.__H||(n.__H={__:[],__h:[]});return _>=u.__.length&&u.__.push({__V:l}),u.__[_]}function P(_){return f=1,B(D,_)}function B(_,t,u){var o=a(i++,2);if(o.t=_,!o.__c&&(o.__=[u?u(t):D(void 0,t),function(v){var s=o.__N?o.__N[0]:o.__[0],h=o.t(s,v);s!==h&&(o.__N=[h,o.__[1]],o.__c.setState({}))}],o.__c=n,!n.u)){n.u=!0;var r=n.shouldComponentUpdate;n.shouldComponentUpdate=function(v,s,h){if(!o.__c.__H)return!0;var y=o.__c.__H.__.filter(function(c){return c.__c});if(y.every(function(c){return!c.__N}))return!r||r.call(this,v,s,h);var E=!1;return y.forEach(function(c){if(c.__N){var k=c.__[0];c.__=c.__N,c.__N=void 0,k!==c.__[0]&&(E=!0)}}),!!E&&(!r||r.call(this,v,s,h))}}return o.__N||o.__}function j(_,t){var u=a(i++,3);!e.__s&&H(u.__H,t)&&(u.__=_,u.i=t,n.__H.__h.push(u))}function I(_,t){var u=a(i++,4);!e.__s&&H(u.__H,t)&&(u.__=_,u.i=t,n.__h.push(u))}function w(_){return f=5,x(function(){return{current:_}},[])}function z(_,t,u){f=6,I(function(){return typeof _=="function"?(_(t()),function(){return _(null)}):_?(_.current=t(),function(){return _.current=null}):void 0},u==null?u:u.concat(_))}function x(_,t){var u=a(i++,7);return H(u.__H,t)?(u.__V=_(),u.i=t,u.__h=_,u.__V):u.__}function L(_,t){return f=8,x(function(){return _},t)}function M(_){var t=n.context[_.__c],u=a(i++,9);return u.c=_,t?(u.__==null&&(u.__=!0,t.sub(n)),t.props.value):_.__}function O(_,t){e.useDebugValue&&e.useDebugValue(t?t(_):_)}function G(_){var t=a(i++,10),u=P();return t.__=_,n.componentDidCatch||(n.componentDidCatch=function(o,r){t.__&&t.__(o,r),u[1](o)}),[u[0],function(){u[1](void 0)}]}function J(){var _=a(i++,11);return _.__||(_.__="P"+function(t){for(var u=0,o=t.length;o>0;)u=(u<<5)-u+t.charCodeAt(--o)|0;return u}(n.__v.o)+i),_.__}function R(){for(var _;_=q.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(m),_.__H.__h.forEach(p),_.__H.__h=[]}catch(t){_.__H.__h=[],e.__e(t,_.__v)}}e.__b=function(_){typeof _.type!="function"||_.o||_.type===T?_.o||(_.o=_.__&&_.__.o?_.__.o:""):_.o=(_.__&&_.__.o?_.__.o:"")+(_.__&&_.__.__k?_.__.__k.indexOf(_):0),n=null,V&&V(_)},e.__r=function(_){g&&g(_),i=0;var t=(n=_.__c).__H;t&&(d===n?(t.__h=[],n.__h=[],t.__.forEach(function(u){u.__N&&(u.__=u.__N),u.__V=l,u.__N=u.i=void 0})):(t.__h.forEach(m),t.__h.forEach(p),t.__h=[])),d=n},e.diffed=function(_){b&&b(_);var t=_.__c;t&&t.__H&&(t.__H.__h.length&&(q.push(t)!==1&&N===e.requestAnimationFrame||((N=e.requestAnimationFrame)||S)(R)),t.__H.__.forEach(function(u){u.i&&(u.__H=u.i),u.__V!==l&&(u.__=u.__V),u.i=void 0,u.__V=l})),d=n=null},e.__c=function(_,t){t.some(function(u){try{u.__h.forEach(m),u.__h=u.__h.filter(function(o){return!o.__||p(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],e.__e(o,u.__v)}}),C&&C(_,t)},e.unmount=function(_){A&&A(_);var t,u=_.__c;u&&u.__H&&(u.__H.__.forEach(function(o){try{m(o)}catch(r){t=r}}),u.__H=void 0,t&&e.__e(t,u.__v))};var F=typeof requestAnimationFrame=="function";function S(_){var t,u=function(){clearTimeout(o),F&&cancelAnimationFrame(t),setTimeout(_)},o=setTimeout(u,100);F&&(t=requestAnimationFrame(u))}function m(_){var t=n,u=_.__c;typeof u=="function"&&(_.__c=void 0,u()),n=t}function p(_){var t=n;_.__c=_.__(),n=t}function H(_,t){return!_||_.length!==t.length||t.some(function(u,o){return u!==_[o]})}function D(_,t){return typeof t=="function"?t(_):t}export{L as useCallback,M as useContext,O as useDebugValue,j as useEffect,G as useErrorBoundary,J as useId,z as useImperativeHandle,I as useLayoutEffect,x as useMemo,B as useReducer,w as useRef,P as useState};

