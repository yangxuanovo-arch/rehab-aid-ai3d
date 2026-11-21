(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ns="179",hn={ROTATE:0,DOLLY:1,PAN:2},ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fo=0,Es=1,Oo=2,Da=1,Bo=2,c0=3,T0=0,At=1,h0=2,E0=0,un=1,ys=2,Ts=3,bs=4,zo=5,F0=100,Ho=101,ko=102,Vo=103,Go=104,Wo=200,Xo=201,Yo=202,qo=203,mr=204,_r=205,jo=206,Ko=207,Zo=208,$o=209,Jo=210,Qo=211,el=212,tl=213,nl=214,gr=0,vr=1,xr=2,pn=3,Mr=4,Sr=5,Er=6,yr=7,La=0,il=1,rl=2,y0=0,sl=1,al=2,ol=3,ll=4,cl=5,hl=6,ul=7,Ua=300,mn=301,_n=302,Tr=303,br=304,Ci=306,Ar=1e3,B0=1001,wr=1002,Xt=1003,dl=1004,Wn=1005,Kt=1006,Ni=1007,z0=1008,e0=1009,Ia=1010,Na=1011,Un=1012,is=1013,H0=1014,u0=1015,zn=1016,rs=1017,ss=1018,In=1020,Fa=35902,Oa=1021,Ba=1022,Wt=1023,Nn=1026,Fn=1027,za=1028,as=1029,Ha=1030,os=1031,ls=1033,mi=33776,_i=33777,gi=33778,vi=33779,Rr=35840,Cr=35841,Pr=35842,Dr=35843,Lr=36196,Ur=37492,Ir=37496,Nr=37808,Fr=37809,Or=37810,Br=37811,zr=37812,Hr=37813,kr=37814,Vr=37815,Gr=37816,Wr=37817,Xr=37818,Yr=37819,qr=37820,jr=37821,xi=36492,Kr=36494,Zr=36495,ka=36283,$r=36284,Jr=36285,Qr=36286,fl=3200,pl=3201,Va=0,ml=1,M0="",Ft="srgb",gn="srgb-linear",Si="linear",qe="srgb",Y0=7680,As=519,_l=512,gl=513,vl=514,Ga=515,xl=516,Ml=517,Sl=518,El=519,ws=35044,Rs="300 es",Zt=2e3,Ei=2001;class G0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cs=1234567;const Dn=Math.PI/180,On=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function cs(i,e){return(i%e+e)%e}function yl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Tl(i,e,t){return i!==e?(t-i)/(e-i):0}function Ln(i,e,t){return(1-t)*i+t*e}function bl(i,e,t,n){return Ln(i,e,1-Math.exp(-t*n))}function Al(i,e=1){return e-Math.abs(cs(i,e*2)-e)}function wl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pl(i,e){return i+Math.random()*(e-i)}function Dl(i){return i*(.5-Math.random())}function Ll(i){i!==void 0&&(Cs=i);let e=Cs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ul(i){return i*Dn}function Il(i){return i*On}function Nl(i){return(i&i-1)===0&&i!==0}function Fl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ol(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bl(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wa={DEG2RAD:Dn,RAD2DEG:On,generateUUID:xn,clamp:Be,euclideanModulo:cs,mapLinear:yl,inverseLerp:Tl,lerp:Ln,damp:bl,pingpong:Al,smoothstep:wl,smootherstep:Rl,randInt:Cl,randFloat:Pl,randFloatSpread:Dl,seededRandom:Ll,degToRad:Ul,radToDeg:Il,isPowerOfTwo:Nl,ceilPowerOfTwo:Fl,floorPowerOfTwo:Ol,setQuaternionFromProperEuler:Bl,normalize:St,denormalize:on};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class k0{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==p||u!==v){let m=1-o;const h=l*d+c*p+u*v+f*g,R=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const P=Math.sqrt(T),D=Math.atan2(P,h*R);m=Math.sin(m*D)/P,o=Math.sin(o*D)/P}const E=o*R;if(l=l*m+d*E,c=c*m+p*E,u=u*m+v*E,f=f*m+g*E,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*d,e[t+1]=l*v+u*d+c*f-o*p,e[t+2]=c*v+u*p+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),d=l(n/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ps.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ps.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fi.copy(this).projectOnVector(e),this.sub(Fi)}reflect(e){return this.sub(Fi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fi=new N,Ps=new k0;class Ie{constructor(e,t,n,r,s,a,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],v=n[8],g=r[0],m=r[3],h=r[6],R=r[1],T=r[4],E=r[7],P=r[2],D=r[5],w=r[8];return s[0]=a*g+o*R+l*P,s[3]=a*m+o*T+l*D,s[6]=a*h+o*E+l*w,s[1]=c*g+u*R+f*P,s[4]=c*m+u*T+f*D,s[7]=c*h+u*E+f*w,s[2]=d*g+p*R+v*P,s[5]=d*m+p*T+v*D,s[8]=d*h+p*E+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,v=t*f+n*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oi.makeScale(e,t)),this}rotate(e){return this.premultiply(Oi.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oi=new Ie;function Xa(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zl(){const i=yi("canvas");return i.style.display="block",i}const Ds={};function dn(i){i in Ds||(Ds[i]=!0,console.warn(i))}function Hl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ls=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Us=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kl(){const i={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===qe&&(r.r=d0(r.r),r.g=d0(r.g),r.b=d0(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qe&&(r.r=fn(r.r),r.g=fn(r.g),r.b=fn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===M0?Si:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gn]:{primaries:e,whitePoint:n,transfer:Si,toXYZ:Ls,fromXYZ:Us,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:Ls,fromXYZ:Us,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const Ge=kl();function d0(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let q0;class Vl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{q0===void 0&&(q0=yi("canvas")),q0.width=e.width,q0.height=e.height;const r=q0.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=q0}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=d0(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(d0(t[n]/255)*255):t[n]=d0(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gl=0;class hs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bi(r[a].image)):s.push(Bi(r[a]))}else s=Bi(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bi(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wl=0;const zi=new N;class wt extends G0{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=B0,r=B0,s=Kt,a=z0,o=Wt,l=e0,c=wt.DEFAULT_ANISOTROPY,u=M0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=xn(),this.name="",this.source=new hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zi).x}get height(){return this.source.getSize(zi).y}get depth(){return this.source.getSize(zi).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ua)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case B0:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case B0:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Ua;wt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(p+1)/2,P=(h+1)/2,D=(u+d)/4,w=(f+g)/4,L=(v+m)/4;return T>E&&T>P?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=w/n):E>P?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=D/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=w/s,r=L/s),this.set(n,r,s,t),this}let R=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(f-g)/R,this.z=(d-u)/R,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xl extends G0{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new wt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V0 extends Xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ya extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=B0,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yl extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=B0,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(s,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xn.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xn.copy(n.boundingBox)),Xn.applyMatrix4(e.matrixWorld),this.union(Xn)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yn),Yn.subVectors(this.max,yn),j0.subVectors(e.a,yn),K0.subVectors(e.b,yn),Z0.subVectors(e.c,yn),f0.subVectors(K0,j0),p0.subVectors(Z0,K0),R0.subVectors(j0,Z0);let t=[0,-f0.z,f0.y,0,-p0.z,p0.y,0,-R0.z,R0.y,f0.z,0,-f0.x,p0.z,0,-p0.x,R0.z,0,-R0.x,-f0.y,f0.x,0,-p0.y,p0.x,0,-R0.y,R0.x,0];return!Hi(t,j0,K0,Z0,Yn)||(t=[1,0,0,0,1,0,0,0,1],!Hi(t,j0,K0,Z0,Yn))?!1:(qn.crossVectors(f0,p0),t=[qn.x,qn.y,qn.z],Hi(t,j0,K0,Z0,Yn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(r0[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),r0[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),r0[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),r0[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),r0[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),r0[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),r0[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),r0[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(r0),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const r0=[new N,new N,new N,new N,new N,new N,new N,new N],Ht=new N,Xn=new Hn,j0=new N,K0=new N,Z0=new N,f0=new N,p0=new N,R0=new N,yn=new N,Yn=new N,qn=new N,C0=new N;function Hi(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){C0.fromArray(i,s);const o=r.x*Math.abs(C0.x)+r.y*Math.abs(C0.y)+r.z*Math.abs(C0.z),l=e.dot(C0),c=t.dot(C0),u=n.dot(C0);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ql=new Hn,Tn=new N,ki=new N;class Pi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ql.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tn.subVectors(e,this.center);const t=Tn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Tn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ki.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tn.copy(e.center).add(ki)),this.expandByPoint(Tn.copy(e.center).sub(ki))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const s0=new N,Vi=new N,jn=new N,m0=new N,Gi=new N,Kn=new N,Wi=new N;class us{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,s0)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=s0.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(s0.copy(this.origin).addScaledVector(this.direction,t),s0.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vi.copy(e).add(t).multiplyScalar(.5),jn.copy(t).sub(e).normalize(),m0.copy(this.origin).sub(Vi);const s=e.distanceTo(t)*.5,a=-this.direction.dot(jn),o=m0.dot(this.direction),l=-m0.dot(jn),c=m0.lengthSq(),u=Math.abs(1-a*a);let f,d,p,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vi).addScaledVector(jn,d),p}intersectSphere(e,t){s0.subVectors(e.center,this.origin);const n=s0.dot(this.direction),r=s0.dot(s0)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,s0)!==null}intersectTriangle(e,t,n,r,s){Gi.subVectors(t,e),Kn.subVectors(n,e),Wi.crossVectors(Gi,Kn);let a=this.direction.dot(Wi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;m0.subVectors(this.origin,e);const l=o*this.direction.dot(Kn.crossVectors(m0,Kn));if(l<0)return null;const c=o*this.direction.dot(Gi.cross(m0));if(c<0||l+c>a)return null;const u=-o*m0.dot(Wi);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,a,o,l,c,u,f,d,p,v,g,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,d,p,v,g,m)}set(e,t,n,r,s,a,o,l,c,u,f,d,p,v,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$0.setFromMatrixColumn(e,0).length(),s=1/$0.setFromMatrixColumn(e,1).length(),a=1/$0.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,v=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,g=c*f;t[0]=d+g*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,v=o*u,g=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jl,e,Kl)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),_0.crossVectors(n,Pt),_0.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),_0.crossVectors(n,Pt)),_0.normalize(),Zn.crossVectors(Pt,_0),r[0]=_0.x,r[4]=Zn.x,r[8]=Pt.x,r[1]=_0.y,r[5]=Zn.y,r[9]=Pt.y,r[2]=_0.z,r[6]=Zn.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],h=n[14],R=n[3],T=n[7],E=n[11],P=n[15],D=r[0],w=r[4],L=r[8],S=r[12],M=r[1],b=r[5],X=r[9],H=r[13],W=r[2],j=r[6],Y=r[10],K=r[14],z=r[3],se=r[7],he=r[11],Se=r[15];return s[0]=a*D+o*M+l*W+c*z,s[4]=a*w+o*b+l*j+c*se,s[8]=a*L+o*X+l*Y+c*he,s[12]=a*S+o*H+l*K+c*Se,s[1]=u*D+f*M+d*W+p*z,s[5]=u*w+f*b+d*j+p*se,s[9]=u*L+f*X+d*Y+p*he,s[13]=u*S+f*H+d*K+p*Se,s[2]=v*D+g*M+m*W+h*z,s[6]=v*w+g*b+m*j+h*se,s[10]=v*L+g*X+m*Y+h*he,s[14]=v*S+g*H+m*K+h*Se,s[3]=R*D+T*M+E*W+P*z,s[7]=R*w+T*b+E*j+P*se,s[11]=R*L+T*X+E*Y+P*he,s[15]=R*S+T*H+E*K+P*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],g=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*p-n*l*p)+g*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+n*a*p+s*o*u-n*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],g=e[13],m=e[14],h=e[15],R=f*m*c-g*d*c+g*l*p-o*m*p-f*l*h+o*d*h,T=v*d*c-u*m*c-v*l*p+a*m*p+u*l*h-a*d*h,E=u*g*c-v*f*c+v*o*p-a*g*p-u*o*h+a*f*h,P=v*f*l-u*g*l-v*o*d+a*g*d+u*o*m-a*f*m,D=t*R+n*T+r*E+s*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/D;return e[0]=R*w,e[1]=(g*d*s-f*m*s-g*r*p+n*m*p+f*r*h-n*d*h)*w,e[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*h+n*l*h)*w,e[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*p-n*l*p)*w,e[4]=T*w,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*h+t*d*h)*w,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*h-t*l*h)*w,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*w,e[8]=E*w,e[9]=(v*f*s-u*g*s-v*n*p+t*g*p+u*n*h-t*f*h)*w,e[10]=(a*g*s-v*o*s+v*n*c-t*g*c-a*n*h+t*o*h)*w,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*p-t*o*p)*w,e[12]=P*w,e[13]=(u*g*r-v*f*r+v*n*d-t*g*d-u*n*m+t*f*m)*w,e[14]=(v*o*r-a*g*r-v*n*l+t*g*l+a*n*m-t*o*m)*w,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,v=s*f,g=a*u,m=a*f,h=o*f,R=l*c,T=l*u,E=l*f,P=n.x,D=n.y,w=n.z;return r[0]=(1-(g+h))*P,r[1]=(p+E)*P,r[2]=(v-T)*P,r[3]=0,r[4]=(p-E)*D,r[5]=(1-(d+h))*D,r[6]=(m+R)*D,r[7]=0,r[8]=(v+T)*w,r[9]=(m-R)*w,r[10]=(1-(d+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$0.set(r[0],r[1],r[2]).length();const a=$0.set(r[4],r[5],r[6]).length(),o=$0.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/a,f=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=f,kt.elements[9]*=f,kt.elements[10]*=f,t.setFromRotationMatrix(kt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Zt,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let v,g;if(l)v=s/(a-s),g=a*s/(a-s);else if(o===Zt)v=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ei)v=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Zt,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let v,g;if(l)v=1/(a-s),g=a/(a-s);else if(o===Zt)v=-2/(a-s),g=-(a+s)/(a-s);else if(o===Ei)v=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $0=new N,kt=new lt,jl=new N(0,0,0),Kl=new N(1,1,1),_0=new N,Zn=new N,Pt=new N,Is=new lt,Ns=new k0;class t0{constructor(e=0,t=0,n=0,r=t0.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Is.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Is,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ns.setFromEuler(this),this.setFromQuaternion(Ns,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}t0.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zl=0;const Fs=new N,J0=new k0,a0=new lt,$n=new N,bn=new N,$l=new N,Jl=new k0,Os=new N(1,0,0),Bs=new N(0,1,0),zs=new N(0,0,1),Hs={type:"added"},Ql={type:"removed"},Q0={type:"childadded",child:null},Xi={type:"childremoved",child:null};class gt extends G0{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new N,t=new t0,n=new k0,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ie}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return J0.setFromAxisAngle(e,t),this.quaternion.multiply(J0),this}rotateOnWorldAxis(e,t){return J0.setFromAxisAngle(e,t),this.quaternion.premultiply(J0),this}rotateX(e){return this.rotateOnAxis(Os,e)}rotateY(e){return this.rotateOnAxis(Bs,e)}rotateZ(e){return this.rotateOnAxis(zs,e)}translateOnAxis(e,t){return Fs.copy(e).applyQuaternion(this.quaternion),this.position.add(Fs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Os,e)}translateY(e){return this.translateOnAxis(Bs,e)}translateZ(e){return this.translateOnAxis(zs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(a0.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$n.copy(e):$n.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?a0.lookAt(bn,$n,this.up):a0.lookAt($n,bn,this.up),this.quaternion.setFromRotationMatrix(a0),r&&(a0.extractRotation(r.matrixWorld),J0.setFromRotationMatrix(a0),this.quaternion.premultiply(J0.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hs),Q0.child=e,this.dispatchEvent(Q0),Q0.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ql),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),a0.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),a0.multiply(e.parent.matrixWorld)),e.applyMatrix4(a0),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hs),Q0.child=e,this.dispatchEvent(Q0),Q0.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,$l),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Jl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new N,o0=new N,Yi=new N,l0=new N,en=new N,tn=new N,ks=new N,qi=new N,ji=new N,Ki=new N,Zi=new ot,$i=new ot,Ji=new ot;class Gt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),o0.subVectors(n,t),Yi.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(o0),l=Vt.dot(Yi),c=o0.dot(o0),u=o0.dot(Yi),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,l0)===null?!1:l0.x>=0&&l0.y>=0&&l0.x+l0.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,l0)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,l0.x),l.addScaledVector(a,l0.y),l.addScaledVector(o,l0.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Zi.setScalar(0),$i.setScalar(0),Ji.setScalar(0),Zi.fromBufferAttribute(e,t),$i.fromBufferAttribute(e,n),Ji.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zi,s.x),a.addScaledVector($i,s.y),a.addScaledVector(Ji,s.z),a}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),o0.subVectors(e,t),Vt.cross(o0).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),o0.subVectors(this.a,this.b),Vt.cross(o0).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;en.subVectors(r,n),tn.subVectors(s,n),qi.subVectors(e,n);const l=en.dot(qi),c=tn.dot(qi);if(l<=0&&c<=0)return t.copy(n);ji.subVectors(e,r);const u=en.dot(ji),f=tn.dot(ji);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(en,a);Ki.subVectors(e,s);const p=en.dot(Ki),v=tn.dot(Ki);if(v>=0&&p<=v)return t.copy(s);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(tn,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return ks.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(ks,o);const h=1/(m+g+d);return a=g*h,o=d*h,t.copy(n).addScaledVector(en,a).addScaledVector(tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},g0={h:0,s:0,l:0},Jn={h:0,s:0,l:0};function Qi(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=cs(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qi(a,s,e+1/3),this.g=Qi(a,s,e),this.b=Qi(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=ja[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=d0(e.r),this.g=d0(e.g),this.b=d0(e.b),this}copyLinearToSRGB(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ge.workingToColorSpace(xt.copy(this),e),Math.round(Be(xt.r*255,0,255))*65536+Math.round(Be(xt.g*255,0,255))*256+Math.round(Be(xt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(xt.copy(this),t);const n=xt.r,r=xt.g,s=xt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Ft){Ge.workingToColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,r=xt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(g0),this.setHSL(g0.h+e,g0.s+t,g0.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(g0),e.getHSL(Jn);const n=Ln(g0.h,Jn.h,t),r=Ln(g0.s,Jn.s,t),s=Ln(g0.l,Jn.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new He;He.NAMES=ja;let e1=0;class Mn extends G0{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=un,this.side=T0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=_r,this.blendEquation=F0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=pn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=As,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Y0,this.stencilZFail=Y0,this.stencilZPass=Y0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==un&&(n.blending=this.blending),this.side!==T0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==F0&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==As&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Y0&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Y0&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Y0&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ka extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new t0,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new N,Qn=new Le;let t1=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ws,this.updateRanges=[],this.gpuType=u0,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXY(t,Qn.x,Qn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ws&&(e.usage=this.usage),e}}class Za extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $a extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let n1=0;const Nt=new lt,er=new gt,nn=new N,Dt=new Hn,An=new Hn,_t=new N;class n0 extends G0{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xa(e)?$a:Za)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return er.lookAt(e),er.updateMatrix(),this.applyMatrix4(er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nn).negate(),this.translate(nn.x,nn.y,nn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];An.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Dt.min,An.min),Dt.expandByPoint(_t),_t.addVectors(Dt.max,An.max),Dt.expandByPoint(_t)):(Dt.expandByPoint(An.min),Dt.expandByPoint(An.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(nn.fromBufferAttribute(e,c),_t.add(nn)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;const c=new N,u=new N,f=new N,d=new Le,p=new Le,v=new Le,g=new N,m=new N;function h(L,S,M){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(b),o[L].add(g),o[S].add(g),o[M].add(g),l[L].add(m),l[S].add(m),l[M].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,S=R.length;L<S;++L){const M=R[L],b=M.start,X=M.count;for(let H=b,W=b+X;H<W;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new N,E=new N,P=new N,D=new N;function w(L){P.fromBufferAttribute(r,L),D.copy(P);const S=o[L];T.copy(S),T.sub(P.multiplyScalar(P.dot(S))).normalize(),E.crossVectors(D,S);const b=E.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,b)}for(let L=0,S=R.length;L<S;++L){const M=R[L],b=M.start,X=M.count;for(let H=b,W=b+X;H<W;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new Jt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new n0,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vs=new lt,P0=new us,ei=new Pi,Gs=new N,ti=new N,ni=new N,ii=new N,tr=new N,ri=new N,Ws=new N,si=new N;class $t extends gt{constructor(e=new n0,t=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ri.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(tr.fromBufferAttribute(f,e),a?ri.addScaledVector(tr,u):ri.addScaledVector(tr.sub(t),u))}t.add(ri)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ei.copy(n.boundingSphere),ei.applyMatrix4(s),P0.copy(e.ray).recast(e.near),!(ei.containsPoint(P0.origin)===!1&&(P0.intersectSphere(ei,Gs)===null||P0.origin.distanceToSquared(Gs)>(e.far-e.near)**2))&&(Vs.copy(s).invert(),P0.copy(e.ray).applyMatrix4(Vs),!(n.boundingBox!==null&&P0.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,P0)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=a[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,P=T;E<P;E+=3){const D=o.getX(E),w=o.getX(E+1),L=o.getX(E+2);r=ai(this,h,e,n,c,u,f,D,w,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const R=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);r=ai(this,a,e,n,c,u,f,R,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=a[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,P=T;E<P;E+=3){const D=E,w=E+1,L=E+2;r=ai(this,h,e,n,c,u,f,D,w,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const R=m,T=m+1,E=m+2;r=ai(this,a,e,n,c,u,f,R,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function i1(i,e,t,n,r,s,a,o){let l;if(e.side===At?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===T0,o),l===null)return null;si.copy(o),si.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(si);return c<t.near||c>t.far?null:{distance:c,point:si.clone(),object:i}}function ai(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ti),i.getVertexPosition(l,ni),i.getVertexPosition(c,ii);const u=i1(i,e,t,n,ti,ni,ii,Ws);if(u){const f=new N;Gt.getBarycoord(Ws,ti,ni,ii,f),r&&(u.uv=Gt.getInterpolatedAttribute(r,o,l,c,f,new Le)),s&&(u.uv1=Gt.getInterpolatedAttribute(s,o,l,c,f,new Le)),a&&(u.normal=Gt.getInterpolatedAttribute(a,o,l,c,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Gt.getNormal(ti,ni,ii,d.normal),u.face=d,u.barycoord=f}return u}class kn extends n0{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function v(g,m,h,R,T,E,P,D,w,L,S){const M=E/w,b=P/L,X=E/2,H=P/2,W=D/2,j=w+1,Y=L+1;let K=0,z=0;const se=new N;for(let he=0;he<Y;he++){const Se=he*b-H;for(let Fe=0;Fe<j;Fe++){const nt=Fe*M-X;se[g]=nt*R,se[m]=Se*T,se[h]=W,c.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[h]=D>0?1:-1,u.push(se.x,se.y,se.z),f.push(Fe/w),f.push(1-he/L),K+=1}}for(let he=0;he<L;he++)for(let Se=0;Se<w;Se++){const Fe=d+Se+j*he,nt=d+Se+j*(he+1),Ke=d+(Se+1)+j*(he+1),G=d+(Se+1)+j*he;l.push(Fe,nt,G),l.push(nt,Ke,G),z+=6}o.addGroup(p,z,S),p+=z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=vn(i[t]);for(const r in n)e[r]=n[r]}return e}function r1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ja(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const s1={clone:vn,merge:Et};var a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class b0 extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vn(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qa extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const v0=new N,Xs=new Le,Ys=new Le;class Ot extends Qa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=On*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return On*2*Math.atan(Math.tan(Dn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){v0.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(v0.x,v0.y).multiplyScalar(-e/v0.z),v0.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(v0.x,v0.y).multiplyScalar(-e/v0.z)}getViewSize(e,t){return this.getViewBounds(e,Xs,Ys),t.subVectors(Ys,Xs)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rn=-90,sn=1;class l1 extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(rn,sn,e,t);r.layers=this.layers,this.add(r);const s=new Ot(rn,sn,e,t);s.layers=this.layers,this.add(s);const a=new Ot(rn,sn,e,t);a.layers=this.layers,this.add(a);const o=new Ot(rn,sn,e,t);o.layers=this.layers,this.add(o);const l=new Ot(rn,sn,e,t);l.layers=this.layers,this.add(l);const c=new Ot(rn,sn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ei)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class eo extends wt{constructor(e=[],t=mn,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c1 extends V0{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new eo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new kn(5,5,5),s=new b0({name:"CubemapFromEquirect",uniforms:vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:E0});s.uniforms.tEquirect.value=t;const a=new $t(r,s),o=t.minFilter;return t.minFilter===z0&&(t.minFilter=Kt),new l1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class oi extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class u1 extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new t0,this.environmentIntensity=1,this.environmentRotation=new t0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ir=new N,d1=new N,f1=new Ie;class x0{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ir.subVectors(n,t).cross(d1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ir),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||f1.getNormalMatrix(e),r=this.coplanarPoint(ir).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const D0=new Pi,p1=new Le(.5,.5),li=new N;class ds{constructor(e=new x0,t=new x0,n=new x0,r=new x0,s=new x0,a=new x0){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],v=s[8],g=s[9],m=s[10],h=s[11],R=s[12],T=s[13],E=s[14],P=s[15];if(r[0].setComponents(c-a,p-u,h-v,P-R).normalize(),r[1].setComponents(c+a,p+u,h+v,P+R).normalize(),r[2].setComponents(c+o,p+f,h+g,P+T).normalize(),r[3].setComponents(c-o,p-f,h-g,P-T).normalize(),n)r[4].setComponents(l,d,m,E).normalize(),r[5].setComponents(c-l,p-d,h-m,P-E).normalize();else if(r[4].setComponents(c-l,p-d,h-m,P-E).normalize(),t===Zt)r[5].setComponents(c+l,p+d,h+m,P+E).normalize();else if(t===Ei)r[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),D0.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),D0.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(D0)}intersectsSprite(e){D0.center.set(0,0,0);const t=p1.distanceTo(e.center);return D0.radius=.7071067811865476+t,D0.applyMatrix4(e.matrixWorld),this.intersectsSphere(D0)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(li.x=r.normal.x>0?e.max.x:e.min.x,li.y=r.normal.y>0?e.max.y:e.min.y,li.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(li)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class to extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ti=new N,bi=new N,qs=new lt,wn=new us,ci=new Pi,rr=new N,js=new N;class m1 extends gt{constructor(e=new n0,t=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ti.fromBufferAttribute(t,r-1),bi.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ti.distanceTo(bi);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere),ci.applyMatrix4(r),ci.radius+=s,e.ray.intersectsSphere(ci)===!1)return;qs.copy(r).invert(),wn.copy(e.ray).applyMatrix4(qs);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=c){const h=u.getX(g),R=u.getX(g+1),T=hi(this,e,wn,l,h,R,g);T&&t.push(T)}if(this.isLineLoop){const g=u.getX(v-1),m=u.getX(p),h=hi(this,e,wn,l,g,m,v-1);h&&t.push(h)}}else{const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=c){const h=hi(this,e,wn,l,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=hi(this,e,wn,l,v-1,p,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hi(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ti.fromBufferAttribute(o,r),bi.fromBufferAttribute(o,s),t.distanceSqToSegment(Ti,bi,rr,js)>n)return;rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rr);if(!(c<e.near||c>e.far))return{distance:c,point:js.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ks=new N,Zs=new N;class _1 extends m1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ks.fromBufferAttribute(t,r),Zs.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ks.distanceTo(Zs);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class no extends wt{constructor(e,t,n=H0,r,s,a,o=Xt,l=Xt,c,u=Nn,f=1){if(u!==Nn&&u!==Fn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Di extends n0{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],v=[],g=[],m=[];for(let h=0;h<u;h++){const R=h*d-a;for(let T=0;T<c;T++){const E=T*f-s;v.push(E,-R,0),g.push(0,0,1),m.push(T/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<o;R++){const T=R+c*h,E=R+c*(h+1),P=R+1+c*(h+1),D=R+1+c*h;p.push(T,E,D),p.push(E,P,D)}this.setIndex(p),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(g,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}class g1 extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new t0,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v1 extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x1 extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class io extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class M1 extends io{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sr=new lt,$s=new N,Js=new N;class S1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=e0,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$s.setFromMatrixPosition(e.matrixWorld),t.position.copy($s),Js.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Js),t.updateMatrixWorld(),sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ro extends Qa{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class E1 extends S1{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y1 extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new E1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class T1 extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qs{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b1 extends _1{constructor(e=10,t=10,n=4473924,r=8947848){n=new He(n),r=new He(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,v=-o;d<=t;d++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const g=d===s?n:r;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const u=new n0;u.setAttribute("position",new zt(l,3)),u.setAttribute("color",new zt(c,3));const f=new to({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class A1 extends G0{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ea(i,e,t,n){const r=w1(n);switch(t){case Oa:return i*e;case za:return i*e/r.components*r.byteLength;case as:return i*e/r.components*r.byteLength;case Ha:return i*e*2/r.components*r.byteLength;case os:return i*e*2/r.components*r.byteLength;case Ba:return i*e*3/r.components*r.byteLength;case Wt:return i*e*4/r.components*r.byteLength;case ls:return i*e*4/r.components*r.byteLength;case mi:case _i:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gi:case vi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cr:case Dr:return Math.max(i,16)*Math.max(e,8)/4;case Rr:case Pr:return Math.max(i,8)*Math.max(e,8)/2;case Lr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Or:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Br:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xi:case Kr:case Zr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ka:case $r:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jr:case Qr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w1(i){switch(i){case e0:case Ia:return{byteLength:1,components:1};case Un:case Na:case zn:return{byteLength:2,components:1};case rs:case ss:return{byteLength:2,components:4};case H0:case is:case u0:return{byteLength:4,components:1};case Fa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ns}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ns);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function so(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function R1(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],g=f[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const g=f[p];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var C1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,J1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ec=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ic=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sc="gl_FragColor = linearToOutputTexel( gl_FragColor );",ac=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_c=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ec=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ac=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ic=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$c=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,th=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ih=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ch=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ph=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_h=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ch=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ru=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,su=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,au=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:C1,alphahash_pars_fragment:P1,alphamap_fragment:D1,alphamap_pars_fragment:L1,alphatest_fragment:U1,alphatest_pars_fragment:I1,aomap_fragment:N1,aomap_pars_fragment:F1,batching_pars_vertex:O1,batching_vertex:B1,begin_vertex:z1,beginnormal_vertex:H1,bsdfs:k1,iridescence_fragment:V1,bumpmap_pars_fragment:G1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:q1,color_fragment:j1,color_pars_fragment:K1,color_pars_vertex:Z1,color_vertex:$1,common:J1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:ec,displacementmap_pars_vertex:tc,displacementmap_vertex:nc,emissivemap_fragment:ic,emissivemap_pars_fragment:rc,colorspace_fragment:sc,colorspace_pars_fragment:ac,envmap_fragment:oc,envmap_common_pars_fragment:lc,envmap_pars_fragment:cc,envmap_pars_vertex:hc,envmap_physical_pars_fragment:Sc,envmap_vertex:uc,fog_vertex:dc,fog_pars_vertex:fc,fog_fragment:pc,fog_pars_fragment:mc,gradientmap_pars_fragment:_c,lightmap_pars_fragment:gc,lights_lambert_fragment:vc,lights_lambert_pars_fragment:xc,lights_pars_begin:Mc,lights_toon_fragment:Ec,lights_toon_pars_fragment:yc,lights_phong_fragment:Tc,lights_phong_pars_fragment:bc,lights_physical_fragment:Ac,lights_physical_pars_fragment:wc,lights_fragment_begin:Rc,lights_fragment_maps:Cc,lights_fragment_end:Pc,logdepthbuf_fragment:Dc,logdepthbuf_pars_fragment:Lc,logdepthbuf_pars_vertex:Uc,logdepthbuf_vertex:Ic,map_fragment:Nc,map_pars_fragment:Fc,map_particle_fragment:Oc,map_particle_pars_fragment:Bc,metalnessmap_fragment:zc,metalnessmap_pars_fragment:Hc,morphinstance_vertex:kc,morphcolor_vertex:Vc,morphnormal_vertex:Gc,morphtarget_pars_vertex:Wc,morphtarget_vertex:Xc,normal_fragment_begin:Yc,normal_fragment_maps:qc,normal_pars_fragment:jc,normal_pars_vertex:Kc,normal_vertex:Zc,normalmap_pars_fragment:$c,clearcoat_normal_fragment_begin:Jc,clearcoat_normal_fragment_maps:Qc,clearcoat_pars_fragment:eh,iridescence_pars_fragment:th,opaque_fragment:nh,packing:ih,premultiplied_alpha_fragment:rh,project_vertex:sh,dithering_fragment:ah,dithering_pars_fragment:oh,roughnessmap_fragment:lh,roughnessmap_pars_fragment:ch,shadowmap_pars_fragment:hh,shadowmap_pars_vertex:uh,shadowmap_vertex:dh,shadowmask_pars_fragment:fh,skinbase_vertex:ph,skinning_pars_vertex:mh,skinning_vertex:_h,skinnormal_vertex:gh,specularmap_fragment:vh,specularmap_pars_fragment:xh,tonemapping_fragment:Mh,tonemapping_pars_fragment:Sh,transmission_fragment:Eh,transmission_pars_fragment:yh,uv_pars_fragment:Th,uv_pars_vertex:bh,uv_vertex:Ah,worldpos_vertex:wh,background_vert:Rh,background_frag:Ch,backgroundCube_vert:Ph,backgroundCube_frag:Dh,cube_vert:Lh,cube_frag:Uh,depth_vert:Ih,depth_frag:Nh,distanceRGBA_vert:Fh,distanceRGBA_frag:Oh,equirect_vert:Bh,equirect_frag:zh,linedashed_vert:Hh,linedashed_frag:kh,meshbasic_vert:Vh,meshbasic_frag:Gh,meshlambert_vert:Wh,meshlambert_frag:Xh,meshmatcap_vert:Yh,meshmatcap_frag:qh,meshnormal_vert:jh,meshnormal_frag:Kh,meshphong_vert:Zh,meshphong_frag:$h,meshphysical_vert:Jh,meshphysical_frag:Qh,meshtoon_vert:eu,meshtoon_frag:tu,points_vert:nu,points_frag:iu,shadow_vert:ru,shadow_frag:su,sprite_vert:au,sprite_frag:ou},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},jt={basic:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Et([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Et([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Et([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Et([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Et([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Et([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Et([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Et([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};jt.physical={uniforms:Et([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ui={r:0,b:0,g:0},L0=new t0,lu=new lt;function cu(i,e,t,n,r,s,a){const o=new He(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function g(T){let E=!1;const P=v(T);P===null?h(o,l):P&&P.isColor&&(h(P,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const P=v(E);P&&(P.isCubeTexture||P.mapping===Ci)?(u===void 0&&(u=new $t(new kn(1,1,1),new b0({name:"BackgroundCubeMaterial",uniforms:vn(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),L0.copy(E.backgroundRotation),L0.x*=-1,L0.y*=-1,L0.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(L0.y*=-1,L0.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lu.makeRotationFromEuler(L0)),u.material.toneMapped=Ge.getTransfer(P.colorSpace)!==qe,(f!==P||d!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new $t(new Di(2,2),new b0({name:"BackgroundMaterial",uniforms:vn(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:T0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(P.colorSpace)!==qe,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,E){T.getRGB(ui,Ja(i)),n.buffers.color.setClear(ui.r,ui.g,ui.b,E,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:g,addToRenderList:m,dispose:R}}function hu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,b,X,H,W){let j=!1;const Y=f(H,X,b);s!==Y&&(s=Y,c(s.object)),j=p(M,H,X,W),j&&v(M,H,X,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(M,b,X,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,b,X){const H=X.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[b.id];j===void 0&&(j={},W[b.id]=j);let Y=j[H];return Y===void 0&&(Y=d(l()),j[H]=Y),Y}function d(M){const b=[],X=[],H=[];for(let W=0;W<t;W++)b[W]=0,X[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:X,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,b,X,H){const W=s.attributes,j=b.attributes;let Y=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){const he=W[z];let Se=j[z];if(Se===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function v(M,b,X,H){const W={},j=b.attributes;let Y=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){let he=j[z];he===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),W[z]=Se,Y++}s.attributes=W,s.attributesNum=Y,s.index=H}function g(){const M=s.newAttributes;for(let b=0,X=M.length;b<X;b++)M[b]=0}function m(M){h(M,0)}function h(M,b){const X=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;X[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),W[M]!==b&&(i.vertexAttribDivisor(M,b),W[M]=b)}function R(){const M=s.newAttributes,b=s.enabledAttributes;for(let X=0,H=b.length;X<H;X++)b[X]!==M[X]&&(i.disableVertexAttribArray(X),b[X]=0)}function T(M,b,X,H,W,j,Y){Y===!0?i.vertexAttribIPointer(M,b,X,W,j):i.vertexAttribPointer(M,b,X,H,W,j)}function E(M,b,X,H){g();const W=H.attributes,j=X.getAttributes(),Y=b.defaultAttributeValues;for(const K in j){const z=j[K];if(z.location>=0){let se=W[K];if(se===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const he=se.normalized,Se=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const nt=Fe.buffer,Ke=Fe.type,G=Fe.bytesPerElement,ae=Ke===i.INT||Ke===i.UNSIGNED_INT||se.gpuType===is;if(se.isInterleavedBufferAttribute){const ne=se.data,be=ne.stride,Ae=se.offset;if(ne.isInstancedInterleavedBuffer){for(let Pe=0;Pe<z.locationSize;Pe++)h(z.location+Pe,ne.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<z.locationSize;Pe++)m(z.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Pe=0;Pe<z.locationSize;Pe++)T(z.location+Pe,Se/z.locationSize,Ke,he,be*G,(Ae+Se/z.locationSize*Pe)*G,ae)}else{if(se.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)h(z.location+ne,se.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ne=0;ne<z.locationSize;ne++)T(z.location+ne,Se/z.locationSize,Ke,he,Se*G,Se/z.locationSize*ne*G,ae)}}else if(Y!==void 0){const he=Y[K];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(z.location,he);break;case 3:i.vertexAttrib3fv(z.location,he);break;case 4:i.vertexAttrib4fv(z.location,he);break;default:i.vertexAttrib1fv(z.location,he)}}}}R()}function P(){L();for(const M in n){const b=n[M];for(const X in b){const H=b[X];for(const W in H)u(H[W].object),delete H[W];delete b[X]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const X in b){const H=b[X];for(const W in H)u(H[W].object),delete H[W];delete b[X]}delete n[M.id]}function w(M){for(const b in n){const X=n[b];if(X[M.id]===void 0)continue;const H=X[M.id];for(const W in H)u(H[W].object),delete H[W];delete X[M.id]}}function L(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:R}}function uu(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,n,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function du(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Wt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==e0&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==u0&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:P,maxSamples:D}}function fu(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new x0,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const R=s?0:n,T=R*4;let E=h.clippingState||null;l.value=E,E=u(v,d,T,p);for(let P=0;P!==T;++P)E[P]=t[P];h.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=p+g*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,E=p;T!==g;++T,E+=4)a.copy(f[T]).applyMatrix4(R,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function pu(i){let e=new WeakMap;function t(a,o){return o===Tr?a.mapping=mn:o===br&&(a.mapping=_n),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tr||o===br)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new c1(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const cn=4,ta=[.125,.215,.35,.446,.526,.582],O0=20,ar=new ro,na=new He;let or=null,lr=0,cr=0,hr=!1;const N0=(1+Math.sqrt(5))/2,an=1/N0,ia=[new N(-N0,an,0),new N(N0,an,0),new N(-an,0,N0),new N(an,0,N0),new N(0,N0,-an),new N(0,N0,an),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],mu=new N;class ra{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=mu}=s;or=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(or,lr,cr),this._renderer.xr.enabled=hr,e.scissorTest=!1,di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mn||e.mapping===_n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),or=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:zn,format:Wt,colorSpace:gn,depthBuffer:!1},r=sa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_u(s)),this._blurMaterial=gu(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,n,r,s){const l=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(na),f.toneMapping=y0,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const g=new Ka({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),m=new $t(new kn,g);let h=!1;const R=e.background;R?R.isColor&&(g.color.copy(R),e.background=null,h=!0):(g.color.copy(na),h=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const P=this._cubeSize;di(r,E*P,T>2?P:0,P,P),f.setRenderTarget(r),h&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===mn||e.mapping===_n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;di(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ar)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ia[(r-s-1)%ia.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*O0-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):O0;m>O0&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${O0}`);const h=[];let R=0;for(let w=0;w<O0;++w){const L=w/g,S=Math.exp(-L*L/2);h.push(S),w===0?R+=S:w<m&&(R+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=v,d.mipInt.value=T-n;const E=this._sizeLods[r],P=3*E*(r>T-cn?r-T+cn:0),D=4*(this._cubeSize-E);di(t,P,D,3*E,2*E),l.setRenderTarget(t),l.render(f,ar)}}function _u(i){const e=[],t=[],n=[];let r=i;const s=i-cn+1+ta.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-cn?l=ta[a-i+cn-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,g=3,m=2,h=1,R=new Float32Array(g*v*p),T=new Float32Array(m*v*p),E=new Float32Array(h*v*p);for(let D=0;D<p;D++){const w=D%3*2/3-1,L=D>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];R.set(S,g*v*D),T.set(d,m*v*D);const M=[D,D,D,D,D,D];E.set(M,h*v*D)}const P=new n0;P.setAttribute("position",new Jt(R,g)),P.setAttribute("uv",new Jt(T,m)),P.setAttribute("faceIndex",new Jt(E,h)),e.push(P),r>cn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sa(i,e,t){const n=new V0(i,e,t);return n.texture.mapping=Ci,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function di(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gu(i,e,t){const n=new Float32Array(O0),r=new N(0,1,0);return new b0({name:"SphericalGaussianBlur",defines:{n:O0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:E0,depthTest:!1,depthWrite:!1})}function aa(){return new b0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:E0,depthTest:!1,depthWrite:!1})}function oa(){return new b0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:E0,depthTest:!1,depthWrite:!1})}function fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Tr||l===br,u=l===mn||l===_n;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ra(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new ra(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&dn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Mu(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const R=p.array;g=p.version;for(let T=0,E=R.length;T<E;T+=3){const P=R[T+0],D=R[T+1],w=R[T+2];d.push(P,D,D,w,w,P)}}else if(v!==void 0){const R=v.array;g=v.version;for(let T=0,E=R.length/3-1;T<E;T+=3){const P=T+0,D=T+1,w=T+2;d.push(P,D,D,w,w,P)}}else return;const m=new(Xa(d)?$a:Za)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Su(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function c(d,p,v){v!==0&&(i.drawElementsInstanced(n,p,s,d*a,v),t.update(p,n,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,n,1)}function f(d,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,v);let h=0;for(let R=0;R<v;R++)h+=p[R]*g[R];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Eu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yu(i,e,t){const n=new WeakMap,r=new ot;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let P=o.attributes.position.count*E,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*D*4*f),L=new Ya(w,P,D,f);L.type=u0,L.needsUpdate=!0;const S=E*4;for(let b=0;b<f;b++){const X=h[b],H=R[b],W=T[b],j=P*D*4*b;for(let Y=0;Y<X.count;Y++){const K=Y*S;v===!0&&(r.fromBufferAttribute(X,Y),w[j+K+0]=r.x,w[j+K+1]=r.y,w[j+K+2]=r.z,w[j+K+3]=0),g===!0&&(r.fromBufferAttribute(H,Y),w[j+K+4]=r.x,w[j+K+5]=r.y,w[j+K+6]=r.z,w[j+K+7]=0),m===!0&&(r.fromBufferAttribute(W,Y),w[j+K+8]=r.x,w[j+K+9]=r.y,w[j+K+10]=r.z,w[j+K+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new Le(P,D)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Tu(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ao=new wt,la=new no(1,1),oo=new Ya,lo=new Yl,co=new eo,ca=[],ha=[],ua=new Float32Array(16),da=new Float32Array(9),fa=new Float32Array(4);function Sn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ca[r];if(s===void 0&&(s=new Float32Array(r),ca[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Li(i,e){let t=ha[e];t===void 0&&(t=new Int32Array(e),ha[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Au(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Ru(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Cu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;fa.set(n),i.uniformMatrix2fv(this.addr,!1,fa),pt(t,n)}}function Pu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;da.set(n),i.uniformMatrix3fv(this.addr,!1,da),pt(t,n)}}function Du(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;ua.set(n),i.uniformMatrix4fv(this.addr,!1,ua),pt(t,n)}}function Lu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Uu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Iu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Nu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Fu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ou(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Hu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(la.compareFunction=Ga,s=la):s=ao,t.setTexture2D(e||s,r)}function ku(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lo,r)}function Vu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||co,r)}function Gu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||oo,r)}function Wu(i){switch(i){case 5126:return bu;case 35664:return Au;case 35665:return wu;case 35666:return Ru;case 35674:return Cu;case 35675:return Pu;case 35676:return Du;case 5124:case 35670:return Lu;case 35667:case 35671:return Uu;case 35668:case 35672:return Iu;case 35669:case 35673:return Nu;case 5125:return Fu;case 36294:return Ou;case 36295:return Bu;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Hu;case 35679:case 36299:case 36307:return ku;case 35680:case 36300:case 36308:case 36293:return Vu;case 36289:case 36303:case 36311:case 36292:return Gu}}function Xu(i,e){i.uniform1fv(this.addr,e)}function Yu(i,e){const t=Sn(e,this.size,2);i.uniform2fv(this.addr,t)}function qu(i,e){const t=Sn(e,this.size,3);i.uniform3fv(this.addr,t)}function ju(i,e){const t=Sn(e,this.size,4);i.uniform4fv(this.addr,t)}function Ku(i,e){const t=Sn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zu(i,e){const t=Sn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $u(i,e){const t=Sn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ju(i,e){i.uniform1iv(this.addr,e)}function Qu(i,e){i.uniform2iv(this.addr,e)}function e2(i,e){i.uniform3iv(this.addr,e)}function t2(i,e){i.uniform4iv(this.addr,e)}function n2(i,e){i.uniform1uiv(this.addr,e)}function i2(i,e){i.uniform2uiv(this.addr,e)}function r2(i,e){i.uniform3uiv(this.addr,e)}function s2(i,e){i.uniform4uiv(this.addr,e)}function a2(i,e,t){const n=this.cache,r=e.length,s=Li(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ao,s[a])}function o2(i,e,t){const n=this.cache,r=e.length,s=Li(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lo,s[a])}function l2(i,e,t){const n=this.cache,r=e.length,s=Li(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||co,s[a])}function c2(i,e,t){const n=this.cache,r=e.length,s=Li(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||oo,s[a])}function h2(i){switch(i){case 5126:return Xu;case 35664:return Yu;case 35665:return qu;case 35666:return ju;case 35674:return Ku;case 35675:return Zu;case 35676:return $u;case 5124:case 35670:return Ju;case 35667:case 35671:return Qu;case 35668:case 35672:return e2;case 35669:case 35673:return t2;case 5125:return n2;case 36294:return i2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return o2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return c2}}class u2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wu(t.type)}}class d2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h2(t.type)}}class f2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function pa(i,e){i.seq.push(e),i.map[e.id]=e}function p2(i,e,t){const n=i.name,r=n.length;for(ur.lastIndex=0;;){const s=ur.exec(n),a=ur.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pa(t,c===void 0?new u2(o,i,e):new d2(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new f2(o),pa(t,f)),t=f}}}class Mi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);p2(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ma(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m2=37297;let _2=0;function g2(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _a=new Ie;function v2(i){Ge._getMatrix(_a,Ge.workingColorSpace,i);const e=`mat3( ${_a.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Si:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ga(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+g2(i.getShaderSource(e),o)}else return s}function x2(i,e){const t=v2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M2(i,e){let t;switch(e){case sl:t="Linear";break;case al:t="Reinhard";break;case ol:t="Cineon";break;case ll:t="ACESFilmic";break;case hl:t="AgX";break;case ul:t="Neutral";break;case cl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fi=new N;function S2(){Ge.getLuminanceCoefficients(fi);const i=fi.x.toFixed(4),e=fi.y.toFixed(4),t=fi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pn).join(`
`)}function y2(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function T2(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pn(i){return i!==""}function va(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function es(i){return i.replace(b2,w2)}const A2=new Map;function w2(i,e){let t=Ne[e];if(t===void 0){const n=A2.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return es(t)}const R2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ma(i){return i.replace(R2,C2)}function C2(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===c0&&(e="SHADOWMAP_TYPE_VSM"),e}function D2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mn:case _n:e="ENVMAP_TYPE_CUBE";break;case Ci:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _n:e="ENVMAP_MODE_REFRACTION";break}return e}function U2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case La:e="ENVMAP_BLENDING_MULTIPLY";break;case il:e="ENVMAP_BLENDING_MIX";break;case rl:e="ENVMAP_BLENDING_ADD";break}return e}function I2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N2(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=P2(t),c=D2(t),u=L2(t),f=U2(t),d=I2(t),p=E2(t),v=y2(s),g=r.createProgram();let m,h,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pn).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pn).join(`
`),h.length>0&&(h+=`
`)):(m=[Sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pn).join(`
`),h=[Sa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==y0?"#define TONE_MAPPING":"",t.toneMapping!==y0?Ne.tonemapping_pars_fragment:"",t.toneMapping!==y0?M2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,x2("linearToOutputTexel",t.outputColorSpace),S2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pn).join(`
`)),a=es(a),a=va(a,t),a=xa(a,t),o=es(o),o=va(o,t),o=xa(o,t),a=Ma(a),o=Ma(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Rs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=R+m+a,E=R+h+o,P=ma(r,r.VERTEX_SHADER,T),D=ma(r,r.FRAGMENT_SHADER,E);r.attachShader(g,P),r.attachShader(g,D),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(b){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(P)||"",W=r.getShaderInfoLog(D)||"",j=X.trim(),Y=H.trim(),K=W.trim();let z=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,D);else{const he=ga(r,P,"vertex"),Se=ga(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+j+`
`+he+`
`+Se)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||K==="")&&(se=!1);se&&(b.diagnostics={runnable:z,programLog:j,vertexShader:{log:Y,prefix:m},fragmentShader:{log:K,prefix:h}})}r.deleteShader(P),r.deleteShader(D),L=new Mi(r,g),S=T2(r,g)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,m2)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=D,this}let F2=0;class O2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B2(e),t.set(e,n)),n}}class B2{constructor(e){this.id=F2++,this.code=e,this.usedTimes=0}}function z2(i,e,t,n,r,s,a){const o=new qa,l=new O2,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,b,X,H){const W=X.fog,j=H.geometry,Y=S.isMeshStandardMaterial?X.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),z=K&&K.mapping===Ci?K.image.height:null,se=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=he!==void 0?he.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let nt,Ke,G,ae;if(se){const Xe=jt[se];nt=Xe.vertexShader,Ke=Xe.fragmentShader}else nt=S.vertexShader,Ke=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);const ne=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ae=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,ct=!!S.map,ke=!!S.matcap,A=!!K,Je=!!S.aoMap,ye=!!S.lightMap,We=!!S.bumpMap,Me=!!S.normalMap,it=!!S.displacementMap,fe=!!S.emissiveMap,Oe=!!S.metalnessMap,mt=!!S.roughnessMap,ht=S.anisotropy>0,y=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,V=S.sheen>0,Z=S.transmission>0,k=ht&&!!S.anisotropyMap,xe=y&&!!S.clearcoatMap,te=y&&!!S.clearcoatNormalMap,_e=y&&!!S.clearcoatRoughnessMap,ge=F&&!!S.iridescenceMap,Q=F&&!!S.iridescenceThicknessMap,ce=V&&!!S.sheenColorMap,Re=V&&!!S.sheenRoughnessMap,ve=!!S.specularMap,oe=!!S.specularColorMap,Ue=!!S.specularIntensityMap,C=Z&&!!S.transmissionMap,ee=Z&&!!S.thicknessMap,ie=!!S.gradientMap,de=!!S.alphaMap,$=S.alphaTest>0,q=!!S.alphaHash,me=!!S.extensions;let De=y0;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(De=i.toneMapping);const Qe={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:Ke,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&H.instanceColor!==null,instancingMorph:Ae&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:gn,alphaToCoverage:!!S.alphaToCoverage,map:ct,matcap:ke,envMap:A,envMapMode:A&&K.mapping,envMapCubeUVHeight:z,aoMap:Je,lightMap:ye,bumpMap:We,normalMap:Me,displacementMap:d&&it,emissiveMap:fe,normalMapObjectSpace:Me&&S.normalMapType===ml,normalMapTangentSpace:Me&&S.normalMapType===Va,metalnessMap:Oe,roughnessMap:mt,anisotropy:ht,anisotropyMap:k,clearcoat:y,clearcoatMap:xe,clearcoatNormalMap:te,clearcoatRoughnessMap:_e,dispersion:_,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:Q,sheen:V,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:oe,specularIntensityMap:Ue,transmission:Z,transmissionMap:C,thicknessMap:ee,gradientMap:ie,opaque:S.transparent===!1&&S.blending===un&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:$,alphaHash:q,combine:S.combine,mapUv:ct&&g(S.map.channel),aoMapUv:Je&&g(S.aoMap.channel),lightMapUv:ye&&g(S.lightMap.channel),bumpMapUv:We&&g(S.bumpMap.channel),normalMapUv:Me&&g(S.normalMap.channel),displacementMapUv:it&&g(S.displacementMap.channel),emissiveMapUv:fe&&g(S.emissiveMap.channel),metalnessMapUv:Oe&&g(S.metalnessMap.channel),roughnessMapUv:mt&&g(S.roughnessMap.channel),anisotropyMapUv:k&&g(S.anisotropyMap.channel),clearcoatMapUv:xe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(S.sheenRoughnessMap.channel),specularMapUv:ve&&g(S.specularMap.channel),specularColorMapUv:oe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ue&&g(S.specularIntensityMap.channel),transmissionMapUv:C&&g(S.transmissionMap.channel),thicknessMapUv:ee&&g(S.thicknessMap.channel),alphaMapUv:de&&g(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Me||ht),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(ct||de),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ct&&S.map.isVideoTexture===!0&&Ge.getTransfer(S.map.colorSpace)===qe,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(S.emissiveMap.colorSpace)===qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===h0,flipSided:S.side===At,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)M.push(b),M.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(R(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function R(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=v[S.type];let b;if(M){const X=jt[M];b=s1.clone(X.uniforms)}else b=S.uniforms;return b}function P(S,M){let b;for(let X=0,H=u.length;X<H;X++){const W=u[X];if(W.cacheKey===M){b=W,++b.usedTimes;break}}return b===void 0&&(b=new N2(i,M,S,s),u.push(b)),b}function D(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:P,releaseProgram:D,releaseShaderCache:w,programs:u,dispose:L}}function H2(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function k2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ea(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ya(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,p,v,g,m){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function o(f,d,p,v,g,m){const h=a(f,d,p,v,g,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,v,g,m){const h=a(f,d,p,v,g,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||k2),n.length>1&&n.sort(d||Ea),r.length>1&&r.sort(d||Ea)}function u(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function V2(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ya,i.set(n,[a])):r>=s.length?(a=new ya,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function G2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function W2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let X2=0;function Y2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q2(i){const e=new G2,t=W2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new lt,a=new lt;function o(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,h=0,R=0,T=0,E=0,P=0,D=0,w=0;c.sort(Y2);for(let S=0,M=c.length;S<M;S++){const b=c[S],X=b.color,H=b.intensity,W=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=X.r*H,f+=X.g*H,d+=X.b*H;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(b.sh.coefficients[Y],H);w++}else if(b.isDirectionalLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=b.shadow.matrix,R++}n.directional[p]=Y,p++}else if(b.isSpotLight){const Y=e.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(X).multiplyScalar(H),Y.distance=W,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,n.spot[g]=Y;const K=b.shadow;if(b.map&&(n.spotLightMap[P]=b.map,P++,K.updateMatrices(b),b.castShadow&&D++),n.spotLightMatrix[g]=K.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=j,E++}g++}else if(b.isRectAreaLight){const Y=e.get(b);Y.color.copy(X).multiplyScalar(H),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=Y,m++}else if(b.isPointLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,n.pointShadow[v]=z,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=b.shadow.matrix,T++}n.point[v]=Y,v++}else if(b.isHemisphereLight){const Y=e.get(b);Y.skyColor.copy(b.color).multiplyScalar(H),Y.groundColor.copy(b.groundColor).multiplyScalar(H),n.hemi[h]=Y,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==R||L.numPointShadows!==T||L.numSpotShadows!==E||L.numSpotMaps!==P||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+P-D,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=w,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=R,L.numPointShadows=T,L.numSpotShadows=E,L.numSpotMaps=P,L.numLightProbes=w,n.version=X2++)}function l(c,u){let f=0,d=0,p=0,v=0,g=0;const m=u.matrixWorldInverse;for(let h=0,R=c.length;h<R;h++){const T=c[h];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Ta(i){const e=new q2(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function j2(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ta(i),e.set(r,[o])):s>=a.length?(o=new Ta(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const K2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $2(i,e,t){let n=new ds;const r=new Le,s=new Le,a=new ot,o=new v1({depthPacking:pl}),l=new x1,c={},u=t.maxTextureSize,f={[T0]:At,[At]:T0,[h0]:h0},d=new b0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:K2,fragmentShader:Z2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new n0;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let h=this.type;this.render=function(D,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),X=i.state;X.setBlending(E0),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=h!==c0&&this.type===c0,W=h===c0&&this.type!==c0;for(let j=0,Y=D.length;j<Y;j++){const K=D[j],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const se=z.getFrameExtents();if(r.multiply(se),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||H===!0||W===!0){const Se=this.type!==c0?{minFilter:Xt,magFilter:Xt}:{};z.map!==null&&z.map.dispose(),z.map=new V0(r.x,r.y,Se),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const he=z.getViewportCount();for(let Se=0;Se<he;Se++){const Fe=z.getViewport(Se);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),X.viewport(a),z.updateMatrices(K,Se),n=z.getFrustum(),E(w,L,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===c0&&R(z,L),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,b)};function R(D,w){const L=e.update(g);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new V0(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,g,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(w,null,L,p,g,null)}function T(D,w,L,S){let M=null;const b=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(b!==void 0)M=b;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const X=M.uuid,H=w.uuid;let W=c[X];W===void 0&&(W={},c[X]=W);let j=W[H];j===void 0&&(j=M.clone(),W[H]=j,w.addEventListener("dispose",P)),M=j}if(M.visible=w.visible,M.wireframe=w.wireframe,S===c0?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=L}return M}function E(D,w,L,S,M){if(D.visible===!1)return;if(D.layers.test(w.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===c0)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const H=e.update(D),W=D.material;if(Array.isArray(W)){const j=H.groups;for(let Y=0,K=j.length;Y<K;Y++){const z=j[Y],se=W[z.materialIndex];if(se&&se.visible){const he=T(D,se,S,M);D.onBeforeShadow(i,D,w,L,H,he,z),i.renderBufferDirect(L,null,H,he,D,z),D.onAfterShadow(i,D,w,L,H,he,z)}}}else if(W.visible){const j=T(D,W,S,M);D.onBeforeShadow(i,D,w,L,H,j,null),i.renderBufferDirect(L,null,H,j,D,null),D.onAfterShadow(i,D,w,L,H,j,null)}}const X=D.children;for(let H=0,W=X.length;H<W;H++)E(X[H],w,L,S,M)}function P(D){D.target.removeEventListener("dispose",P);for(const L in c){const S=c[L],M=D.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const J2={[gr]:vr,[xr]:Er,[Mr]:yr,[pn]:Sr,[vr]:gr,[Er]:xr,[yr]:Mr,[Sr]:pn};function Q2(i,e){function t(){let C=!1;const ee=new ot;let ie=null;const de=new ot(0,0,0,0);return{setMask:function($){ie!==$&&!C&&(i.colorMask($,$,$,$),ie=$)},setLocked:function($){C=$},setClear:function($,q,me,De,Qe){Qe===!0&&($*=De,q*=De,me*=De),ee.set($,q,me,De),de.equals(ee)===!1&&(i.clearColor($,q,me,De),de.copy(ee))},reset:function(){C=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let C=!1,ee=!1,ie=null,de=null,$=null;return{setReversed:function(q){if(ee!==q){const me=e.get("EXT_clip_control");q?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ee=q;const De=$;$=null,this.setClear(De)}},getReversed:function(){return ee},setTest:function(q){q?ne(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(q){ie!==q&&!C&&(i.depthMask(q),ie=q)},setFunc:function(q){if(ee&&(q=J2[q]),de!==q){switch(q){case gr:i.depthFunc(i.NEVER);break;case vr:i.depthFunc(i.ALWAYS);break;case xr:i.depthFunc(i.LESS);break;case pn:i.depthFunc(i.LEQUAL);break;case Mr:i.depthFunc(i.EQUAL);break;case Sr:i.depthFunc(i.GEQUAL);break;case Er:i.depthFunc(i.GREATER);break;case yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=q}},setLocked:function(q){C=q},setClear:function(q){$!==q&&(ee&&(q=1-q),i.clearDepth(q),$=q)},reset:function(){C=!1,ie=null,de=null,$=null,ee=!1}}}function r(){let C=!1,ee=null,ie=null,de=null,$=null,q=null,me=null,De=null,Qe=null;return{setTest:function(Xe){C||(Xe?ne(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Xe){ee!==Xe&&!C&&(i.stencilMask(Xe),ee=Xe)},setFunc:function(Xe,i0,qt){(ie!==Xe||de!==i0||$!==qt)&&(i.stencilFunc(Xe,i0,qt),ie=Xe,de=i0,$=qt)},setOp:function(Xe,i0,qt){(q!==Xe||me!==i0||De!==qt)&&(i.stencilOp(Xe,i0,qt),q=Xe,me=i0,De=qt)},setLocked:function(Xe){C=Xe},setClear:function(Xe){Qe!==Xe&&(i.clearStencil(Xe),Qe=Xe)},reset:function(){C=!1,ee=null,ie=null,de=null,$=null,q=null,me=null,De=null,Qe=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,h=null,R=null,T=null,E=null,P=null,D=null,w=new He(0,0,0),L=0,S=!1,M=null,b=null,X=null,H=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=K>=2);let se=null,he={};const Se=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),nt=new ot().fromArray(Se),Ke=new ot().fromArray(Fe);function G(C,ee,ie,de){const $=new Uint8Array(4),q=i.createTexture();i.bindTexture(C,q),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<ie;me++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(ee+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return q}const ae={};ae[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(pn),We(!1),Me(Es),ne(i.CULL_FACE),Je(E0);function ne(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function be(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Ae(C,ee){return f[C]!==ee?(i.bindFramebuffer(C,ee),f[C]=ee,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ee),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Pe(C,ee){let ie=p,de=!1;if(C){ie=d.get(ee),ie===void 0&&(ie=[],d.set(ee,ie));const $=C.textures;if(ie.length!==$.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let q=0,me=$.length;q<me;q++)ie[q]=i.COLOR_ATTACHMENT0+q;ie.length=$.length,de=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,de=!0);de&&i.drawBuffers(ie)}function ct(C){return v!==C?(i.useProgram(C),v=C,!0):!1}const ke={[F0]:i.FUNC_ADD,[Ho]:i.FUNC_SUBTRACT,[ko]:i.FUNC_REVERSE_SUBTRACT};ke[Vo]=i.MIN,ke[Go]=i.MAX;const A={[Wo]:i.ZERO,[Xo]:i.ONE,[Yo]:i.SRC_COLOR,[mr]:i.SRC_ALPHA,[Jo]:i.SRC_ALPHA_SATURATE,[Zo]:i.DST_COLOR,[jo]:i.DST_ALPHA,[qo]:i.ONE_MINUS_SRC_COLOR,[_r]:i.ONE_MINUS_SRC_ALPHA,[$o]:i.ONE_MINUS_DST_COLOR,[Ko]:i.ONE_MINUS_DST_ALPHA,[Qo]:i.CONSTANT_COLOR,[el]:i.ONE_MINUS_CONSTANT_COLOR,[tl]:i.CONSTANT_ALPHA,[nl]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(C,ee,ie,de,$,q,me,De,Qe,Xe){if(C===E0){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),C!==zo){if(C!==m||Xe!==S){if((h!==F0||E!==F0)&&(i.blendEquation(i.FUNC_ADD),h=F0,E=F0),Xe)switch(C){case un:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ts:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bs:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,T=null,P=null,D=null,w.set(0,0,0),L=0,m=C,S=Xe}return}$=$||ee,q=q||ie,me=me||de,(ee!==h||$!==E)&&(i.blendEquationSeparate(ke[ee],ke[$]),h=ee,E=$),(ie!==R||de!==T||q!==P||me!==D)&&(i.blendFuncSeparate(A[ie],A[de],A[q],A[me]),R=ie,T=de,P=q,D=me),(De.equals(w)===!1||Qe!==L)&&(i.blendColor(De.r,De.g,De.b,Qe),w.copy(De),L=Qe),m=C,S=!1}function ye(C,ee){C.side===h0?be(i.CULL_FACE):ne(i.CULL_FACE);let ie=C.side===At;ee&&(ie=!ie),We(ie),C.blending===un&&C.transparent===!1?Je(E0):Je(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const de=C.stencilWrite;o.setTest(de),de&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),fe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(C){M!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),M=C)}function Me(C){C!==Fo?(ne(i.CULL_FACE),C!==b&&(C===Es?i.cullFace(i.BACK):C===Oo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),b=C}function it(C){C!==X&&(Y&&i.lineWidth(C),X=C)}function fe(C,ee,ie){C?(ne(i.POLYGON_OFFSET_FILL),(H!==ee||W!==ie)&&(i.polygonOffset(ee,ie),H=ee,W=ie)):be(i.POLYGON_OFFSET_FILL)}function Oe(C){C?ne(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function mt(C){C===void 0&&(C=i.TEXTURE0+j-1),se!==C&&(i.activeTexture(C),se=C)}function ht(C,ee,ie){ie===void 0&&(se===null?ie=i.TEXTURE0+j-1:ie=se);let de=he[ie];de===void 0&&(de={type:void 0,texture:void 0},he[ie]=de),(de.type!==C||de.texture!==ee)&&(se!==ie&&(i.activeTexture(ie),se=ie),i.bindTexture(C,ee||ae[C]),de.type=C,de.texture=ee)}function y(){const C=he[se];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function V(){try{i.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{i.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{i.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(C){nt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),nt.copy(C))}function Re(C){Ke.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ke.copy(C))}function ve(C,ee){let ie=c.get(ee);ie===void 0&&(ie=new WeakMap,c.set(ee,ie));let de=ie.get(C);de===void 0&&(de=i.getUniformBlockIndex(ee,C.name),ie.set(C,de))}function oe(C,ee){const de=c.get(ee).get(C);l.get(ee)!==de&&(i.uniformBlockBinding(ee,de,C.__bindingPointIndex),l.set(ee,de))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,he={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,h=null,R=null,T=null,E=null,P=null,D=null,w=new He(0,0,0),L=0,S=!1,M=null,b=null,X=null,H=null,W=null,nt.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:be,bindFramebuffer:Ae,drawBuffers:Pe,useProgram:ct,setBlending:Je,setMaterial:ye,setFlipSided:We,setCullFace:Me,setLineWidth:it,setPolygonOffset:fe,setScissorTest:Oe,activeTexture:mt,bindTexture:ht,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ge,texImage3D:Q,updateUBOMapping:ve,uniformBlockBinding:oe,texStorage2D:te,texStorage3D:_e,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:xe,scissor:ce,viewport:Re,reset:Ue}}function ed(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,_){return p?new OffscreenCanvas(y,_):yi("canvas")}function g(y,_,F){let V=1;const Z=ht(y);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(V*Z.width),xe=Math.floor(V*Z.height);f===void 0&&(f=v(k,xe));const te=_?v(k,xe):f;return te.width=k,te.height=xe,te.getContext("2d").drawImage(y,0,0,k,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+xe+")."),te}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function m(y){return y.generateMipmaps}function h(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,F,V,Z=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=_;if(_===i.RED&&(F===i.FLOAT&&(k=i.R32F),F===i.HALF_FLOAT&&(k=i.R16F),F===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.R8UI),F===i.UNSIGNED_SHORT&&(k=i.R16UI),F===i.UNSIGNED_INT&&(k=i.R32UI),F===i.BYTE&&(k=i.R8I),F===i.SHORT&&(k=i.R16I),F===i.INT&&(k=i.R32I)),_===i.RG&&(F===i.FLOAT&&(k=i.RG32F),F===i.HALF_FLOAT&&(k=i.RG16F),F===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RG8UI),F===i.UNSIGNED_SHORT&&(k=i.RG16UI),F===i.UNSIGNED_INT&&(k=i.RG32UI),F===i.BYTE&&(k=i.RG8I),F===i.SHORT&&(k=i.RG16I),F===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGB8UI),F===i.UNSIGNED_SHORT&&(k=i.RGB16UI),F===i.UNSIGNED_INT&&(k=i.RGB32UI),F===i.BYTE&&(k=i.RGB8I),F===i.SHORT&&(k=i.RGB16I),F===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),F===i.UNSIGNED_INT&&(k=i.RGBA32UI),F===i.BYTE&&(k=i.RGBA8I),F===i.SHORT&&(k=i.RGBA16I),F===i.INT&&(k=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),_===i.RGBA){const xe=Z?Si:Ge.getTransfer(V);F===i.FLOAT&&(k=i.RGBA32F),F===i.HALF_FLOAT&&(k=i.RGBA16F),F===i.UNSIGNED_BYTE&&(k=xe===qe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(y,_){let F;return y?_===null||_===H0||_===In?F=i.DEPTH24_STENCIL8:_===u0?F=i.DEPTH32F_STENCIL8:_===Un&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===H0||_===In?F=i.DEPTH_COMPONENT24:_===u0?F=i.DEPTH_COMPONENT32F:_===Un&&(F=i.DEPTH_COMPONENT16),F}function P(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xt&&y.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function D(y){const _=y.target;_.removeEventListener("dispose",D),L(_),_.isVideoTexture&&u.delete(_)}function w(y){const _=y.target;_.removeEventListener("dispose",w),M(_)}function L(y){const _=n.get(y);if(_.__webglInit===void 0)return;const F=y.source,V=d.get(F);if(V){const Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(y),Object.keys(V).length===0&&d.delete(F)}n.remove(y)}function S(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const F=y.source,V=d.get(F);delete V[_.__cacheKey],a.memory.textures--}function M(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=y.textures;for(let V=0,Z=F.length;V<Z;V++){const k=n.get(F[V]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(y)}let b=0;function X(){b=0}function H(){const y=b;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),b+=1,y}function W(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function j(y,_){const F=n.get(y);if(y.isVideoTexture&&Oe(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Y(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ae(F,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function K(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ae(F,y,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function z(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){ne(F,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const se={[Ar]:i.REPEAT,[B0]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},he={[Xt]:i.NEAREST,[dl]:i.NEAREST_MIPMAP_NEAREST,[Wn]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Ni]:i.LINEAR_MIPMAP_NEAREST,[z0]:i.LINEAR_MIPMAP_LINEAR},Se={[_l]:i.NEVER,[El]:i.ALWAYS,[gl]:i.LESS,[Ga]:i.LEQUAL,[vl]:i.EQUAL,[Sl]:i.GEQUAL,[xl]:i.GREATER,[Ml]:i.NOTEQUAL};function Fe(y,_){if(_.type===u0&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===Ni||_.magFilter===Wn||_.magFilter===z0||_.minFilter===Kt||_.minFilter===Ni||_.minFilter===Wn||_.minFilter===z0)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,se[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Wn&&_.minFilter!==z0||_.type===u0&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function nt(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",D));const V=_.source;let Z=d.get(V);Z===void 0&&(Z={},d.set(V,Z));const k=W(_);if(k!==y.__cacheKey){Z[k]===void 0&&(Z[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[k].usedTimes++;const xe=Z[y.__cacheKey];xe!==void 0&&(Z[y.__cacheKey].usedTimes--,xe.usedTimes===0&&S(_)),y.__cacheKey=k,y.__webglTexture=Z[k].texture}return F}function Ke(y,_,F){return Math.floor(Math.floor(y/F)/_)}function G(y,_,F,V){const k=y.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{k.sort((Q,ce)=>Q.start-ce.start);let xe=0;for(let Q=1;Q<k.length;Q++){const ce=k[xe],Re=k[Q],ve=ce.start+ce.count,oe=Ke(Re.start,_.width,4),Ue=Ke(ce.start,_.width,4);Re.start<=ve+1&&oe===Ue&&Ke(Re.start+Re.count-1,_.width,4)===oe?ce.count=Math.max(ce.count,Re.start+Re.count-ce.start):(++xe,k[xe]=Re)}k.length=xe+1;const te=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,ce=k.length;Q<ce;Q++){const Re=k[Q],ve=Math.floor(Re.start/4),oe=Math.ceil(Re.count/4),Ue=ve%_.width,C=Math.floor(ve/_.width),ee=oe,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,Ue,C,ee,ie,F,V,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function ae(y,_,F){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const Z=nt(y,_),k=_.source;t.bindTexture(V,y.__webglTexture,i.TEXTURE0+F);const xe=n.get(k);if(k.version!==xe.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const te=Ge.getPrimaries(Ge.workingColorSpace),_e=_.colorSpace===M0?null:Ge.getPrimaries(_.colorSpace),ge=_.colorSpace===M0||te===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Q=g(_.image,!1,r.maxTextureSize);Q=mt(_,Q);const ce=s.convert(_.format,_.colorSpace),Re=s.convert(_.type);let ve=T(_.internalFormat,ce,Re,_.colorSpace,_.isVideoTexture);Fe(V,_);let oe;const Ue=_.mipmaps,C=_.isVideoTexture!==!0,ee=xe.__version===void 0||Z===!0,ie=k.dataReady,de=P(_,Q);if(_.isDepthTexture)ve=E(_.format===Fn,_.type),ee&&(C?t.texStorage2D(i.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ve,Q.width,Q.height,0,ce,Re,null));else if(_.isDataTexture)if(Ue.length>0){C&&ee&&t.texStorage2D(i.TEXTURE_2D,de,ve,Ue[0].width,Ue[0].height);for(let $=0,q=Ue.length;$<q;$++)oe=Ue[$],C?ie&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,ce,Re,oe.data):t.texImage2D(i.TEXTURE_2D,$,ve,oe.width,oe.height,0,ce,Re,oe.data);_.generateMipmaps=!1}else C?(ee&&t.texStorage2D(i.TEXTURE_2D,de,ve,Q.width,Q.height),ie&&G(_,Q,ce,Re)):t.texImage2D(i.TEXTURE_2D,0,ve,Q.width,Q.height,0,ce,Re,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,Ue[0].width,Ue[0].height,Q.depth);for(let $=0,q=Ue.length;$<q;$++)if(oe=Ue[$],_.format!==Wt)if(ce!==null)if(C){if(ie)if(_.layerUpdates.size>0){const me=ea(oe.width,oe.height,_.format,_.type);for(const De of _.layerUpdates){const Qe=oe.data.subarray(De*me/oe.data.BYTES_PER_ELEMENT,(De+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,De,oe.width,oe.height,1,ce,Qe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,Q.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ve,oe.width,oe.height,Q.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,Q.depth,ce,Re,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ve,oe.width,oe.height,Q.depth,0,ce,Re,oe.data)}else{C&&ee&&t.texStorage2D(i.TEXTURE_2D,de,ve,Ue[0].width,Ue[0].height);for(let $=0,q=Ue.length;$<q;$++)oe=Ue[$],_.format!==Wt?ce!==null?C?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ie&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,ce,Re,oe.data):t.texImage2D(i.TEXTURE_2D,$,ve,oe.width,oe.height,0,ce,Re,oe.data)}else if(_.isDataArrayTexture)if(C){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,Q.width,Q.height,Q.depth),ie)if(_.layerUpdates.size>0){const $=ea(Q.width,Q.height,_.format,_.type);for(const q of _.layerUpdates){const me=Q.data.subarray(q*$/Q.data.BYTES_PER_ELEMENT,(q+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,ce,Re,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Re,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,ce,Re,Q.data);else if(_.isData3DTexture)C?(ee&&t.texStorage3D(i.TEXTURE_3D,de,ve,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Re,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,ce,Re,Q.data);else if(_.isFramebufferTexture){if(ee)if(C)t.texStorage2D(i.TEXTURE_2D,de,ve,Q.width,Q.height);else{let $=Q.width,q=Q.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,ve,$,q,0,ce,Re,null),$>>=1,q>>=1}}else if(Ue.length>0){if(C&&ee){const $=ht(Ue[0]);t.texStorage2D(i.TEXTURE_2D,de,ve,$.width,$.height)}for(let $=0,q=Ue.length;$<q;$++)oe=Ue[$],C?ie&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ce,Re,oe):t.texImage2D(i.TEXTURE_2D,$,ve,ce,Re,oe);_.generateMipmaps=!1}else if(C){if(ee){const $=ht(Q);t.texStorage2D(i.TEXTURE_2D,de,ve,$.width,$.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Re,Q)}else t.texImage2D(i.TEXTURE_2D,0,ve,ce,Re,Q);m(_)&&h(V),xe.__version=k.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ne(y,_,F){if(_.image.length!==6)return;const V=nt(y,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const k=n.get(Z);if(Z.version!==k.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const xe=Ge.getPrimaries(Ge.workingColorSpace),te=_.colorSpace===M0?null:Ge.getPrimaries(_.colorSpace),_e=_.colorSpace===M0||xe===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!ge&&!Q?ce[q]=g(_.image[q],!0,r.maxCubemapSize):ce[q]=Q?_.image[q].image:_.image[q],ce[q]=mt(_,ce[q]);const Re=ce[0],ve=s.convert(_.format,_.colorSpace),oe=s.convert(_.type),Ue=T(_.internalFormat,ve,oe,_.colorSpace),C=_.isVideoTexture!==!0,ee=k.__version===void 0||V===!0,ie=Z.dataReady;let de=P(_,Re);Fe(i.TEXTURE_CUBE_MAP,_);let $;if(ge){C&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ue,Re.width,Re.height);for(let q=0;q<6;q++){$=ce[q].mipmaps;for(let me=0;me<$.length;me++){const De=$[me];_.format!==Wt?ve!==null?C?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,De.width,De.height,ve,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,De.width,De.height,ve,oe,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,Ue,De.width,De.height,0,ve,oe,De.data)}}}else{if($=_.mipmaps,C&&ee){$.length>0&&de++;const q=ht(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ue,q.width,q.height)}for(let q=0;q<6;q++)if(Q){C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,ve,oe,ce[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,ce[q].width,ce[q].height,0,ve,oe,ce[q].data);for(let me=0;me<$.length;me++){const Qe=$[me].image[q].image;C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,Qe.width,Qe.height,ve,oe,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,Ue,Qe.width,Qe.height,0,ve,oe,Qe.data)}}else{C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ve,oe,ce[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,ve,oe,ce[q]);for(let me=0;me<$.length;me++){const De=$[me];C?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,ve,oe,De.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,Ue,ve,oe,De.image[q])}}}m(_)&&h(i.TEXTURE_CUBE_MAP),k.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function be(y,_,F,V,Z,k){const xe=s.convert(F.format,F.colorSpace),te=s.convert(F.type),_e=T(F.internalFormat,xe,te,F.colorSpace),ge=n.get(_),Q=n.get(F);if(Q.__renderTarget=_,!ge.__hasExternalTextures){const ce=Math.max(1,_.width>>k),Re=Math.max(1,_.height>>k);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,_e,ce,Re,_.depth,0,xe,te,null):t.texImage2D(Z,k,_e,ce,Re,0,xe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Q.__webglTexture,0,it(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Q.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(y,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,k=E(_.stencilBuffer,Z),xe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=it(_);fe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,k,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,y)}else{const V=_.textures;for(let Z=0;Z<V.length;Z++){const k=V[Z],xe=s.convert(k.format,k.colorSpace),te=s.convert(k.type),_e=T(k.internalFormat,xe,te,k.colorSpace),ge=it(_);F&&fe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,_e,_.width,_.height):fe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,_e,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_e,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Z=V.__webglTexture,k=it(_);if(_.depthTexture.format===Nn)fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Fn)fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ct(y){const _=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=y.texture.mipmaps;V&&V.length>0?Pe(_.__webglFramebuffer[0],y):Pe(_.__webglFramebuffer,y)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Ae(_.__webglDepthbuffer[V],y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}else{const V=y.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ae(_.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(y,_,F){const V=n.get(y);_!==void 0&&be(V.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ct(y)}function A(y){const _=y.texture,F=n.get(y),V=n.get(_);y.addEventListener("dispose",w);const Z=y.textures,k=y.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,a.memory.textures++),k){F.__webglFramebuffer=[];for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[te]=[];for(let _e=0;_e<_.mipmaps.length;_e++)F.__webglFramebuffer[te][_e]=i.createFramebuffer()}else F.__webglFramebuffer[te]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let te=0;te<_.mipmaps.length;te++)F.__webglFramebuffer[te]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(xe)for(let te=0,_e=Z.length;te<_e;te++){const ge=n.get(Z[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&fe(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let te=0;te<Z.length;te++){const _e=Z[te];F.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[te]);const ge=s.convert(_e.format,_e.colorSpace),Q=s.convert(_e.type),ce=T(_e.internalFormat,ge,Q,_e.colorSpace,y.isXRRenderTarget===!0),Re=it(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,F.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)be(F.__webglFramebuffer[te][_e],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e);else be(F.__webglFramebuffer[te],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let te=0,_e=Z.length;te<_e;te++){const ge=Z[te],Q=n.get(ge);let ce=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),Fe(ce,ge),be(F.__webglFramebuffer,y,ge,i.COLOR_ATTACHMENT0+te,ce,0),m(ge)&&h(ce)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(te=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,V.__webglTexture),Fe(te,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)be(F.__webglFramebuffer[_e],y,_,i.COLOR_ATTACHMENT0,te,_e);else be(F.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,te,0);m(_)&&h(te),t.unbindTexture()}y.depthBuffer&&ct(y)}function Je(y){const _=y.textures;for(let F=0,V=_.length;F<V;F++){const Z=_[F];if(m(Z)){const k=R(y),xe=n.get(Z).__webglTexture;t.bindTexture(k,xe),h(k),t.unbindTexture()}}}const ye=[],We=[];function Me(y){if(y.samples>0){if(fe(y)===!1){const _=y.textures,F=y.width,V=y.height;let Z=i.COLOR_BUFFER_BIT;const k=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(y),te=_.length>1;if(te)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const _e=y.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Q=n.get(_[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,Z,i.NEAREST),l===!0&&(ye.length=0,We.length=0,ye.push(i.COLOR_ATTACHMENT0+ge),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ye.push(k),We.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Q=n.get(_[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function it(y){return Math.min(r.maxSamples,y.samples)}function fe(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function mt(y,_){const F=y.colorSpace,V=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==gn&&F!==M0&&(Ge.getTransfer(F)===qe?(V!==Wt||Z!==e0)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ht(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=ke,this.setupRenderTarget=A,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=be,this.useMultisampledRTT=fe}function td(i,e){function t(n,r=M0){let s;const a=Ge.getTransfer(r);if(n===e0)return i.UNSIGNED_BYTE;if(n===rs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ss)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ia)return i.BYTE;if(n===Na)return i.SHORT;if(n===Un)return i.UNSIGNED_SHORT;if(n===is)return i.INT;if(n===H0)return i.UNSIGNED_INT;if(n===u0)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Oa)return i.ALPHA;if(n===Ba)return i.RGB;if(n===Wt)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===Fn)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===as)return i.RED_INTEGER;if(n===Ha)return i.RG;if(n===os)return i.RG_INTEGER;if(n===ls)return i.RGBA_INTEGER;if(n===mi||n===_i||n===gi||n===vi)if(a===qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mi)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mi)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_i)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gi)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vi)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===Cr||n===Pr||n===Dr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Ur||n===Ir)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lr||n===Ur)return a===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ir)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nr||n===Fr||n===Or||n===Br||n===zr||n===Hr||n===kr||n===Vr||n===Gr||n===Wr||n===Xr||n===Yr||n===qr||n===jr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Or)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Br)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jr)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xi||n===Kr||n===Zr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xi)return a===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===$r||n===Jr||n===Qr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xi)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$r)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===In?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class ho extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const nd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,id=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new b0({vertexShader:nd,fragmentShader:id,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sd extends G0{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const g=new rd,m={},h=t.getContextAttributes();let R=null,T=null;const E=[],P=[],D=new Le;let w=null;const L=new Ot;L.viewport=new ot;const S=new Ot;S.viewport=new ot;const M=[L,S],b=new T1;let X=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ae=E[G];return ae===void 0&&(ae=new nr,E[G]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(G){let ae=E[G];return ae===void 0&&(ae=new nr,E[G]=ae),ae.getGripSpace()},this.getHand=function(G){let ae=E[G];return ae===void 0&&(ae=new nr,E[G]=ae),ae.getHandSpace()};function W(G){const ae=P.indexOf(G.inputSource);if(ae===-1)return;const ne=E[ae];ne!==void 0&&(ne.update(G.inputSource,G.frame,c||a),ne.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let G=0;G<E.length;G++){const ae=P[G];ae!==null&&(P[G]=null,E[G].disconnect(ae))}X=null,H=null,g.reset();for(const G in m)delete m[G];e.setRenderTarget(R),p=null,d=null,f=null,r=null,T=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),h.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,be=null,Ae=null;h.depth&&(Ae=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=h.stencil?Fn:Nn,be=h.stencil?In:H0);const Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new V0(d.textureWidth,d.textureHeight,{format:Wt,type:e0,depthTexture:new no(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new V0(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:e0,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(G){for(let ae=0;ae<G.removed.length;ae++){const ne=G.removed[ae],be=P.indexOf(ne);be>=0&&(P[be]=null,E[be].disconnect(ne))}for(let ae=0;ae<G.added.length;ae++){const ne=G.added[ae];let be=P.indexOf(ne);if(be===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=P.length){P.push(ne),be=Pe;break}else if(P[Pe]===null){P[Pe]=ne,be=Pe;break}if(be===-1)break}const Ae=E[be];Ae&&Ae.connect(ne)}}const K=new N,z=new N;function se(G,ae,ne){K.setFromMatrixPosition(ae.matrixWorld),z.setFromMatrixPosition(ne.matrixWorld);const be=K.distanceTo(z),Ae=ae.projectionMatrix.elements,Pe=ne.projectionMatrix.elements,ct=Ae[14]/(Ae[10]-1),ke=Ae[14]/(Ae[10]+1),A=(Ae[9]+1)/Ae[5],Je=(Ae[9]-1)/Ae[5],ye=(Ae[8]-1)/Ae[0],We=(Pe[8]+1)/Pe[0],Me=ct*ye,it=ct*We,fe=be/(-ye+We),Oe=fe*-ye;if(ae.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Oe),G.translateZ(fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ae[10]===-1)G.projectionMatrix.copy(ae.projectionMatrix),G.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const mt=ct+fe,ht=ke+fe,y=Me-Oe,_=it+(be-Oe),F=A*ke/ht*mt,V=Je*ke/ht*mt;G.projectionMatrix.makePerspective(y,_,F,V,mt,ht),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function he(G,ae){ae===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ae.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ae=G.near,ne=G.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),b.near=S.near=L.near=ae,b.far=S.far=L.far=ne,(X!==b.near||H!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),X=b.near,H=b.far),b.layers.mask=G.layers.mask|6,L.layers.mask=b.layers.mask&3,S.layers.mask=b.layers.mask&5;const be=G.parent,Ae=b.cameras;he(b,be);for(let Pe=0;Pe<Ae.length;Pe++)he(Ae[Pe],be);Ae.length===2?se(b,L,S):b.projectionMatrix.copy(L.projectionMatrix),Se(G,b,be)};function Se(G,ae,ne){ne===null?G.matrix.copy(ae.matrixWorld):(G.matrix.copy(ne.matrixWorld),G.matrix.invert(),G.matrix.multiply(ae.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ae.projectionMatrix),G.projectionMatrixInverse.copy(ae.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=On*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)},this.getCameraTexture=function(G){return m[G]};let Fe=null;function nt(G,ae){if(u=ae.getViewerPose(c||a),v=ae,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let be=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,be=!0);for(let ke=0;ke<ne.length;ke++){const A=ne[ke];let Je=null;if(p!==null)Je=p.getViewport(A);else{const We=f.getViewSubImage(d,A);Je=We.viewport,ke===0&&(e.setRenderTargetTextures(T,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(T))}let ye=M[ke];ye===void 0&&(ye=new Ot,ye.layers.enable(ke),ye.viewport=new ot,M[ke]=ye),ye.matrix.fromArray(A.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(A.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Je.x,Je.y,Je.width,Je.height),ke===0&&(b.matrix.copy(ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),be===!0&&b.cameras.push(ye)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ke=f.getDepthInformation(ne[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,r.renderState)}if(Ae&&Ae.includes("camera-access")&&(e.state.unbindTexture(),f))for(let ke=0;ke<ne.length;ke++){const A=ne[ke].camera;if(A){let Je=m[A];Je||(Je=new ho,m[A]=Je);const ye=f.getCameraImage(A);Je.sourceTexture=ye}}}for(let ne=0;ne<E.length;ne++){const be=P[ne],Ae=E[ne];be!==null&&Ae!==void 0&&Ae.update(be,ae,c||a)}Fe&&Fe(G,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Ke=new so;Ke.setAnimationLoop(nt),this.setAnimationLoop=function(G){Fe=G},this.dispose=function(){}}}const U0=new t0,ad=new lt;function od(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Ja(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,R,T,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,R,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===At&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===At&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const R=e.get(h),T=R.envMap,E=R.envMapRotation;T&&(m.envMap.value=T,U0.copy(E),U0.x*=-1,U0.y*=-1,U0.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(U0.y*=-1,U0.z*=-1),m.envMapRotation.value.setFromMatrix4(ad.makeRotationFromEuler(U0)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,R,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*R,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,R){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===At&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const R=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ld(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const E=T.program;n.uniformBlockBinding(R,E)}function c(R,T){let E=r[R.id];E===void 0&&(v(R),E=u(R),r[R.id]=E,R.addEventListener("dispose",m));const P=T.program;n.updateUBOMapping(R,P);const D=e.render.frame;s[R.id]!==D&&(d(R),s[R.id]=D)}function u(R){const T=f();R.__bindingPointIndex=T;const E=i.createBuffer(),P=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const T=r[R.id],E=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,w=E.length;D<w;D++){const L=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,M=L.length;S<M;S++){const b=L[S];if(p(b,D,S,P)===!0){const X=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let j=0;j<H.length;j++){const Y=H[j],K=g(Y);typeof Y=="number"||typeof Y=="boolean"?(b.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,X+W,b.__data)):Y.isMatrix3?(b.__data[0]=Y.elements[0],b.__data[1]=Y.elements[1],b.__data[2]=Y.elements[2],b.__data[3]=0,b.__data[4]=Y.elements[3],b.__data[5]=Y.elements[4],b.__data[6]=Y.elements[5],b.__data[7]=0,b.__data[8]=Y.elements[6],b.__data[9]=Y.elements[7],b.__data[10]=Y.elements[8],b.__data[11]=0):(Y.toArray(b.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,T,E,P){const D=R.value,w=T+"_"+E;if(P[w]===void 0)return typeof D=="number"||typeof D=="boolean"?P[w]=D:P[w]=D.clone(),!0;{const L=P[w];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return P[w]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function v(R){const T=R.uniforms;let E=0;const P=16;for(let w=0,L=T.length;w<L;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let M=0,b=S.length;M<b;M++){const X=S[M],H=Array.isArray(X.value)?X.value:[X.value];for(let W=0,j=H.length;W<j;W++){const Y=H[W],K=g(Y),z=E%P,se=z%K.boundary,he=z+se;E+=se,he!==0&&P-he<K.storage&&(E+=P-he),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=K.storage}}}const D=E%P;return D>0&&(E+=P-D),R.__size=E,R.__cache={},this}function g(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class cd{constructor(e={}){const{canvas:t=zl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,h=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=y0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Ft;let D=0,w=0,L=null,S=-1,M=null;const b=new ot,X=new ot;let H=null;const W=new He(0);let j=0,Y=t.width,K=t.height,z=1,se=null,he=null;const Se=new ot(0,0,Y,K),Fe=new ot(0,0,Y,K);let nt=!1;const Ke=new ds;let G=!1,ae=!1;const ne=new lt,be=new N,Ae=new ot,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ke(){return L===null?z:1}let A=n;function Je(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ns}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",$,!1),A===null){const U="webgl2";if(A=Je(U,x),A===null)throw Je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ye,We,Me,it,fe,Oe,mt,ht,y,_,F,V,Z,k,xe,te,_e,ge,Q,ce,Re,ve,oe,Ue;function C(){ye=new xu(A),ye.init(),ve=new td(A,ye),We=new du(A,ye,e,ve),Me=new Q2(A,ye),We.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),it=new Eu(A),fe=new H2,Oe=new ed(A,ye,Me,fe,We,ve,it),mt=new pu(E),ht=new vu(E),y=new R1(A),oe=new hu(A,y),_=new Mu(A,y,it,oe),F=new Tu(A,_,y,it),Q=new yu(A,We,Oe),te=new fu(fe),V=new z2(E,mt,ht,ye,We,oe,te),Z=new od(E,fe),k=new V2,xe=new j2(ye),ge=new cu(E,mt,ht,Me,F,p,l),_e=new $2(E,F,We),Ue=new ld(A,it,We,Me),ce=new uu(A,ye,it),Re=new Su(A,ye,it),it.programs=V.programs,E.capabilities=We,E.extensions=ye,E.properties=fe,E.renderLists=k,E.shadowMap=_e,E.state=Me,E.info=it}C();const ee=new sd(E,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(Y,K,!1))},this.getSize=function(x){return x.set(Y,K)},this.setSize=function(x,U,O=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,K=U,t.width=Math.floor(x*z),t.height=Math.floor(U*z),O===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Y*z,K*z).floor()},this.setDrawingBufferSize=function(x,U,O){Y=x,K=U,z=O,t.width=Math.floor(x*O),t.height=Math.floor(U*O),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,U,O,B){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,U,O,B),Me.viewport(b.copy(Se).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(Fe)},this.setScissor=function(x,U,O,B){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,U,O,B),Me.scissor(X.copy(Fe).multiplyScalar(z).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(x){Me.setScissorTest(nt=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,O=!0){let B=0;if(x){let I=!1;if(L!==null){const J=L.texture.format;I=J===ls||J===os||J===as}if(I){const J=L.texture.type,le=J===e0||J===H0||J===Un||J===In||J===rs||J===ss,pe=ge.getClearColor(),ue=ge.getClearAlpha(),we=pe.r,Ce=pe.g,Ee=pe.b;le?(v[0]=we,v[1]=Ce,v[2]=Ee,v[3]=ue,A.clearBufferuiv(A.COLOR,0,v)):(g[0]=we,g[1]=Ce,g[2]=Ee,g[3]=ue,A.clearBufferiv(A.COLOR,0,g))}else B|=A.COLOR_BUFFER_BIT}U&&(B|=A.DEPTH_BUFFER_BIT),O&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",$,!1),ge.dispose(),k.dispose(),xe.dispose(),fe.dispose(),mt.dispose(),ht.dispose(),F.dispose(),oe.dispose(),Ue.dispose(),V.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",qt),ee.removeEventListener("sessionend",_s),A0.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const x=it.autoReset,U=_e.enabled,O=_e.autoUpdate,B=_e.needsUpdate,I=_e.type;C(),it.autoReset=x,_e.enabled=U,_e.autoUpdate=O,_e.needsUpdate=B,_e.type=I}function $(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const U=x.target;U.removeEventListener("dispose",q),me(U)}function me(x){De(x),fe.remove(x)}function De(x){const U=fe.get(x).programs;U!==void 0&&(U.forEach(function(O){V.releaseProgram(O)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,O,B,I,J){U===null&&(U=Pe);const le=I.isMesh&&I.matrixWorld.determinant()<0,pe=Po(x,U,O,B,I);Me.setMaterial(B,le);let ue=O.index,we=1;if(B.wireframe===!0){if(ue=_.getWireframeAttribute(O),ue===void 0)return;we=2}const Ce=O.drawRange,Ee=O.attributes.position;let ze=Ce.start*we,Ye=(Ce.start+Ce.count)*we;J!==null&&(ze=Math.max(ze,J.start*we),Ye=Math.min(Ye,(J.start+J.count)*we)),ue!==null?(ze=Math.max(ze,0),Ye=Math.min(Ye,ue.count)):Ee!=null&&(ze=Math.max(ze,0),Ye=Math.min(Ye,Ee.count));const at=Ye-ze;if(at<0||at===1/0)return;oe.setup(I,B,pe,O,ue);let et,Ze=ce;if(ue!==null&&(et=y.get(ue),Ze=Re,Ze.setIndex(et)),I.isMesh)B.wireframe===!0?(Me.setLineWidth(B.wireframeLinewidth*ke()),Ze.setMode(A.LINES)):Ze.setMode(A.TRIANGLES);else if(I.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),Me.setLineWidth(Te*ke()),I.isLineSegments?Ze.setMode(A.LINES):I.isLineLoop?Ze.setMode(A.LINE_LOOP):Ze.setMode(A.LINE_STRIP)}else I.isPoints?Ze.setMode(A.POINTS):I.isSprite&&Ze.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)dn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ze.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Te=I._multiDrawStarts,rt=I._multiDrawCounts,Ve=I._multiDrawCount,Rt=ue?y.get(ue).bytesPerElement:1,X0=fe.get(B).currentProgram.getUniforms();for(let Ct=0;Ct<Ve;Ct++)X0.setValue(A,"_gl_DrawID",Ct),Ze.render(Te[Ct]/Rt,rt[Ct])}else if(I.isInstancedMesh)Ze.renderInstances(ze,at,I.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,rt=Math.min(O.instanceCount,Te);Ze.renderInstances(ze,at,rt)}else Ze.render(ze,at)};function Qe(x,U,O){x.transparent===!0&&x.side===h0&&x.forceSinglePass===!1?(x.side=At,x.needsUpdate=!0,Gn(x,U,O),x.side=T0,x.needsUpdate=!0,Gn(x,U,O),x.side=h0):Gn(x,U,O)}this.compile=function(x,U,O=null){O===null&&(O=x),h=xe.get(O),h.init(U),T.push(h),O.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),x!==O&&x.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const B=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let le=0;le<J.length;le++){const pe=J[le];Qe(pe,O,I),B.add(pe)}else Qe(J,O,I),B.add(J)}),h=T.pop(),B},this.compileAsync=function(x,U,O=null){const B=this.compile(x,U,O);return new Promise(I=>{function J(){if(B.forEach(function(le){fe.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){I(x);return}setTimeout(J,10)}ye.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Xe=null;function i0(x){Xe&&Xe(x)}function qt(){A0.stop()}function _s(){A0.start()}const A0=new so;A0.setAnimationLoop(i0),typeof self<"u"&&A0.setContext(self),this.setAnimationLoop=function(x){Xe=x,ee.setAnimationLoop(x),x===null?A0.stop():A0.start()},ee.addEventListener("sessionstart",qt),ee.addEventListener("sessionend",_s),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,U,L),h=xe.get(x,T.length),h.init(U),T.push(h),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ke.setFromProjectionMatrix(ne,Zt,U.reversedDepth),ae=this.localClippingEnabled,G=te.init(this.clippingPlanes,ae),m=k.get(x,R.length),m.init(),R.push(m),ee.enabled===!0&&ee.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&Ui(J,U,-1/0,E.sortObjects)}Ui(x,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(se,he),ct=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ct&&ge.addToRenderList(m,x),this.info.render.frame++,G===!0&&te.beginShadows();const O=h.state.shadowsArray;_e.render(O,x,U),G===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,I=m.transmissive;if(h.setupLights(),U.isArrayCamera){const J=U.cameras;if(I.length>0)for(let le=0,pe=J.length;le<pe;le++){const ue=J[le];vs(B,I,x,ue)}ct&&ge.render(x);for(let le=0,pe=J.length;le<pe;le++){const ue=J[le];gs(m,x,ue,ue.viewport)}}else I.length>0&&vs(B,I,x,U),ct&&ge.render(x),gs(m,x,U);L!==null&&w===0&&(Oe.updateMultisampleRenderTarget(L),Oe.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(E,x,U),oe.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],G===!0&&te.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ui(x,U,O,B){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ke.intersectsSprite(x)){B&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ne);const le=F.update(x),pe=x.material;pe.visible&&m.push(x,le,pe,O,Ae.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ke.intersectsObject(x))){const le=F.update(x),pe=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ae.copy(le.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(ne)),Array.isArray(pe)){const ue=le.groups;for(let we=0,Ce=ue.length;we<Ce;we++){const Ee=ue[we],ze=pe[Ee.materialIndex];ze&&ze.visible&&m.push(x,le,ze,O,Ae.z,Ee)}}else pe.visible&&m.push(x,le,pe,O,Ae.z,null)}}const J=x.children;for(let le=0,pe=J.length;le<pe;le++)Ui(J[le],U,O,B)}function gs(x,U,O,B){const I=x.opaque,J=x.transmissive,le=x.transparent;h.setupLightsView(O),G===!0&&te.setGlobalState(E.clippingPlanes,O),B&&Me.viewport(b.copy(B)),I.length>0&&Vn(I,U,O),J.length>0&&Vn(J,U,O),le.length>0&&Vn(le,U,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function vs(x,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new V0(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?zn:e0,minFilter:z0,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const J=h.state.transmissionRenderTarget[B.id],le=B.viewport||b;J.setSize(le.z*E.transmissionResolutionScale,le.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),ue=E.getActiveCubeFace(),we=E.getActiveMipmapLevel();E.setRenderTarget(J),E.getClearColor(W),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),ct&&ge.render(O);const Ce=E.toneMapping;E.toneMapping=y0;const Ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),G===!0&&te.setGlobalState(E.clippingPlanes,B),Vn(x,O,B),Oe.updateMultisampleRenderTarget(J),Oe.updateRenderTargetMipmap(J),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ye=0,at=U.length;Ye<at;Ye++){const et=U[Ye],Ze=et.object,Te=et.geometry,rt=et.material,Ve=et.group;if(rt.side===h0&&Ze.layers.test(B.layers)){const Rt=rt.side;rt.side=At,rt.needsUpdate=!0,xs(Ze,O,B,Te,rt,Ve),rt.side=Rt,rt.needsUpdate=!0,ze=!0}}ze===!0&&(Oe.updateMultisampleRenderTarget(J),Oe.updateRenderTargetMipmap(J))}E.setRenderTarget(pe,ue,we),E.setClearColor(W,j),Ee!==void 0&&(B.viewport=Ee),E.toneMapping=Ce}function Vn(x,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let I=0,J=x.length;I<J;I++){const le=x[I],pe=le.object,ue=le.geometry,we=le.group;let Ce=le.material;Ce.allowOverride===!0&&B!==null&&(Ce=B),pe.layers.test(O.layers)&&xs(pe,U,O,ue,Ce,we)}}function xs(x,U,O,B,I,J){x.onBeforeRender(E,U,O,B,I,J),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(E,U,O,B,x,J),I.transparent===!0&&I.side===h0&&I.forceSinglePass===!1?(I.side=At,I.needsUpdate=!0,E.renderBufferDirect(O,U,B,I,x,J),I.side=T0,I.needsUpdate=!0,E.renderBufferDirect(O,U,B,I,x,J),I.side=h0):E.renderBufferDirect(O,U,B,I,x,J),x.onAfterRender(E,U,O,B,I,J)}function Gn(x,U,O){U.isScene!==!0&&(U=Pe);const B=fe.get(x),I=h.state.lights,J=h.state.shadowsArray,le=I.state.version,pe=V.getParameters(x,I.state,J,U,O),ue=V.getProgramCacheKey(pe);let we=B.programs;B.environment=x.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(x.isMeshStandardMaterial?ht:mt).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,we===void 0&&(x.addEventListener("dispose",q),we=new Map,B.programs=we);let Ce=we.get(ue);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===le)return Ss(x,pe),Ce}else pe.uniforms=V.getUniforms(x),x.onBeforeCompile(pe,E),Ce=V.acquireProgram(pe,ue),we.set(ue,Ce),B.uniforms=pe.uniforms;const Ee=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=te.uniform),Ss(x,pe),B.needsLights=Lo(x),B.lightsStateVersion=le,B.needsLights&&(Ee.ambientLightColor.value=I.state.ambient,Ee.lightProbe.value=I.state.probe,Ee.directionalLights.value=I.state.directional,Ee.directionalLightShadows.value=I.state.directionalShadow,Ee.spotLights.value=I.state.spot,Ee.spotLightShadows.value=I.state.spotShadow,Ee.rectAreaLights.value=I.state.rectArea,Ee.ltc_1.value=I.state.rectAreaLTC1,Ee.ltc_2.value=I.state.rectAreaLTC2,Ee.pointLights.value=I.state.point,Ee.pointLightShadows.value=I.state.pointShadow,Ee.hemisphereLights.value=I.state.hemi,Ee.directionalShadowMap.value=I.state.directionalShadowMap,Ee.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ee.spotShadowMap.value=I.state.spotShadowMap,Ee.spotLightMatrix.value=I.state.spotLightMatrix,Ee.spotLightMap.value=I.state.spotLightMap,Ee.pointShadowMap.value=I.state.pointShadowMap,Ee.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function Ms(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Mi.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Ss(x,U){const O=fe.get(x);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Po(x,U,O,B,I){U.isScene!==!0&&(U=Pe),Oe.resetTextureUnits();const J=U.fog,le=B.isMeshStandardMaterial?U.environment:null,pe=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:gn,ue=(B.isMeshStandardMaterial?ht:mt).get(B.envMap||le),we=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!O.morphAttributes.position,ze=!!O.morphAttributes.normal,Ye=!!O.morphAttributes.color;let at=y0;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(at=E.toneMapping);const et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ze=et!==void 0?et.length:0,Te=fe.get(B),rt=h.state.lights;if(G===!0&&(ae===!0||x!==M)){const Mt=x===M&&B.id===S;te.setState(B,x,Mt)}let Ve=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==rt.state.version||Te.outputColorSpace!==pe||I.isBatchedMesh&&Te.batching===!1||!I.isBatchedMesh&&Te.batching===!0||I.isBatchedMesh&&Te.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Te.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Te.instancing===!1||!I.isInstancedMesh&&Te.instancing===!0||I.isSkinnedMesh&&Te.skinning===!1||!I.isSkinnedMesh&&Te.skinning===!0||I.isInstancedMesh&&Te.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Te.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Te.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Te.instancingMorph===!1&&I.morphTexture!==null||Te.envMap!==ue||B.fog===!0&&Te.fog!==J||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==we||Te.vertexTangents!==Ce||Te.morphTargets!==Ee||Te.morphNormals!==ze||Te.morphColors!==Ye||Te.toneMapping!==at||Te.morphTargetsCount!==Ze)&&(Ve=!0):(Ve=!0,Te.__version=B.version);let Rt=Te.currentProgram;Ve===!0&&(Rt=Gn(B,U,I));let X0=!1,Ct=!1,En=!1;const st=Rt.getUniforms(),Ut=Te.uniforms;if(Me.useProgram(Rt.program)&&(X0=!0,Ct=!0,En=!0),B.id!==S&&(S=B.id,Ct=!0),X0||M!==x){Me.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(A,"projectionMatrix",x.projectionMatrix),st.setValue(A,"viewMatrix",x.matrixWorldInverse);const Tt=st.map.cameraPosition;Tt!==void 0&&Tt.setValue(A,be.setFromMatrixPosition(x.matrixWorld)),We.logarithmicDepthBuffer&&st.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&st.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ct=!0,En=!0)}if(I.isSkinnedMesh){st.setOptional(A,I,"bindMatrix"),st.setOptional(A,I,"bindMatrixInverse");const Mt=I.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),st.setValue(A,"boneTexture",Mt.boneTexture,Oe))}I.isBatchedMesh&&(st.setOptional(A,I,"batchingTexture"),st.setValue(A,"batchingTexture",I._matricesTexture,Oe),st.setOptional(A,I,"batchingIdTexture"),st.setValue(A,"batchingIdTexture",I._indirectTexture,Oe),st.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(A,"batchingColorTexture",I._colorsTexture,Oe));const It=O.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&Q.update(I,O,Rt),(Ct||Te.receiveShadow!==I.receiveShadow)&&(Te.receiveShadow=I.receiveShadow,st.setValue(A,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ut.envMap.value=ue,Ut.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Ut.envMapIntensity.value=U.environmentIntensity),Ct&&(st.setValue(A,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&Do(Ut,En),J&&B.fog===!0&&Z.refreshFogUniforms(Ut,J),Z.refreshMaterialUniforms(Ut,B,z,K,h.state.transmissionRenderTarget[x.id]),Mi.upload(A,Ms(Te),Ut,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mi.upload(A,Ms(Te),Ut,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&st.setValue(A,"center",I.center),st.setValue(A,"modelViewMatrix",I.modelViewMatrix),st.setValue(A,"normalMatrix",I.normalMatrix),st.setValue(A,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Mt=B.uniformsGroups;for(let Tt=0,Ii=Mt.length;Tt<Ii;Tt++){const w0=Mt[Tt];Ue.update(w0,Rt),Ue.bind(w0,Rt)}}return Rt}function Do(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Lo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,U,O){const B=fe.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),fe.get(x.texture).__webglTexture=U,fe.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const O=fe.get(x);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Uo=A.createFramebuffer();this.setRenderTarget=function(x,U=0,O=0){L=x,D=U,w=O;let B=!0,I=null,J=!1,le=!1;if(x){const ue=fe.get(x);if(ue.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(ue.__hasExternalTextures)Oe.rebindTextures(x,fe.get(x.texture).__webglTexture,fe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ee=x.depthTexture;if(ue.__boundDepthTexture!==Ee){if(Ee!==null&&fe.has(Ee)&&(x.width!==Ee.image.width||x.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}const we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(le=!0);const Ce=fe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?I=Ce[U][O]:I=Ce[U],J=!0):x.samples>0&&Oe.useMultisampledRTT(x)===!1?I=fe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[O]:I=Ce,b.copy(x.viewport),X.copy(x.scissor),H=x.scissorTest}else b.copy(Se).multiplyScalar(z).floor(),X.copy(Fe).multiplyScalar(z).floor(),H=nt;if(O!==0&&(I=Uo),Me.bindFramebuffer(A.FRAMEBUFFER,I)&&B&&Me.drawBuffers(x,I),Me.viewport(b),Me.scissor(X),Me.setScissorTest(H),J){const ue=fe.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,O)}else if(le){const ue=U;for(let we=0;we<x.textures.length;we++){const Ce=fe.get(x.textures[we]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+we,Ce.__webglTexture,O,ue)}}else if(x!==null&&O!==0){const ue=fe.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(x,U,O,B,I,J,le,pe=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=fe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){Me.bindFramebuffer(A.FRAMEBUFFER,ue);try{const we=x.textures[pe],Ce=we.format,Ee=we.type;if(!We.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-B&&O>=0&&O<=x.height-I&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(U,O,B,I,ve.convert(Ce),ve.convert(Ee),J))}finally{const we=L!==null?fe.get(L).__webglFramebuffer:null;Me.bindFramebuffer(A.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,U,O,B,I,J,le,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=fe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(U>=0&&U<=x.width-B&&O>=0&&O<=x.height-I){Me.bindFramebuffer(A.FRAMEBUFFER,ue);const we=x.textures[pe],Ce=we.format,Ee=we.type;if(!We.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,J.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(U,O,B,I,ve.convert(Ce),ve.convert(Ee),0);const Ye=L!==null?fe.get(L).__webglFramebuffer:null;Me.bindFramebuffer(A.FRAMEBUFFER,Ye);const at=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Hl(A,at,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,J),A.deleteBuffer(ze),A.deleteSync(at),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,O=0){const B=Math.pow(2,-O),I=Math.floor(x.image.width*B),J=Math.floor(x.image.height*B),le=U!==null?U.x:0,pe=U!==null?U.y:0;Oe.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,le,pe,I,J),Me.unbindTexture()};const Io=A.createFramebuffer(),No=A.createFramebuffer();this.copyTextureToTexture=function(x,U,O=null,B=null,I=0,J=null){J===null&&(I!==0?(dn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let le,pe,ue,we,Ce,Ee,ze,Ye,at;const et=x.isCompressedTexture?x.mipmaps[J]:x.image;if(O!==null)le=O.max.x-O.min.x,pe=O.max.y-O.min.y,ue=O.isBox3?O.max.z-O.min.z:1,we=O.min.x,Ce=O.min.y,Ee=O.isBox3?O.min.z:0;else{const It=Math.pow(2,-I);le=Math.floor(et.width*It),pe=Math.floor(et.height*It),x.isDataArrayTexture?ue=et.depth:x.isData3DTexture?ue=Math.floor(et.depth*It):ue=1,we=0,Ce=0,Ee=0}B!==null?(ze=B.x,Ye=B.y,at=B.z):(ze=0,Ye=0,at=0);const Ze=ve.convert(U.format),Te=ve.convert(U.type);let rt;U.isData3DTexture?(Oe.setTexture3D(U,0),rt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),rt=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),rt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Ve=A.getParameter(A.UNPACK_ROW_LENGTH),Rt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),X0=A.getParameter(A.UNPACK_SKIP_PIXELS),Ct=A.getParameter(A.UNPACK_SKIP_ROWS),En=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,et.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,et.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,we),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ce),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ee);const st=x.isDataArrayTexture||x.isData3DTexture,Ut=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const It=fe.get(x),Mt=fe.get(U),Tt=fe.get(It.__renderTarget),Ii=fe.get(Mt.__renderTarget);Me.bindFramebuffer(A.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let w0=0;w0<ue;w0++)st&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(x).__webglTexture,I,Ee+w0),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(U).__webglTexture,J,at+w0)),A.blitFramebuffer(we,Ce,le,pe,ze,Ye,le,pe,A.DEPTH_BUFFER_BIT,A.NEAREST);Me.bindFramebuffer(A.READ_FRAMEBUFFER,null),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||fe.has(x)){const It=fe.get(x),Mt=fe.get(U);Me.bindFramebuffer(A.READ_FRAMEBUFFER,Io),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,No);for(let Tt=0;Tt<ue;Tt++)st?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,I,Ee+Tt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,It.__webglTexture,I),Ut?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Mt.__webglTexture,J,at+Tt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Mt.__webglTexture,J),I!==0?A.blitFramebuffer(we,Ce,le,pe,ze,Ye,le,pe,A.COLOR_BUFFER_BIT,A.NEAREST):Ut?A.copyTexSubImage3D(rt,J,ze,Ye,at+Tt,we,Ce,le,pe):A.copyTexSubImage2D(rt,J,ze,Ye,we,Ce,le,pe);Me.bindFramebuffer(A.READ_FRAMEBUFFER,null),Me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ut?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(rt,J,ze,Ye,at,le,pe,ue,Ze,Te,et.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(rt,J,ze,Ye,at,le,pe,ue,Ze,et.data):A.texSubImage3D(rt,J,ze,Ye,at,le,pe,ue,Ze,Te,et):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,ze,Ye,le,pe,Ze,Te,et.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,ze,Ye,et.width,et.height,Ze,et.data):A.texSubImage2D(A.TEXTURE_2D,J,ze,Ye,le,pe,Ze,Te,et);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ve),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,X0),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ct),A.pixelStorei(A.UNPACK_SKIP_IMAGES,En),J===0&&U.generateMipmaps&&A.generateMipmap(rt),Me.unbindTexture()},this.copyTextureToTexture3D=function(x,U,O=null,B=null,I=0){return dn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,O,B,I)},this.initRenderTarget=function(x){fe.get(x).__webglFramebuffer===void 0&&Oe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){D=0,w=0,L=null,Me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const ba={type:"change"},ps={type:"start"},uo={type:"end"},pi=new us,Aa=new x0,hd=Math.cos(70*Wa.DEG2RAD),dt=new N,bt=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dr=1e-6;class ud extends A1{constructor(e,t=null){super(e,t),this.state=je.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hn.ROTATE,MIDDLE:hn.DOLLY,RIGHT:hn.PAN},this.touches={ONE:ln.ROTATE,TWO:ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new k0,this._lastTargetPosition=new N,this._quat=new k0().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qs,this._sphericalDelta=new Qs,this._scale=1,this._panOffset=new N,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new N,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fd.bind(this),this._onPointerDown=dd.bind(this),this._onPointerUp=pd.bind(this),this._onContextMenu=Sd.bind(this),this._onMouseWheel=gd.bind(this),this._onKeyDown=vd.bind(this),this._onTouchStart=xd.bind(this),this._onTouchMove=Md.bind(this),this._onMouseDown=md.bind(this),this._onMouseMove=_d.bind(this),this._interceptControlDown=Ed.bind(this),this._interceptControlUp=yd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ba),this.update(),this.state=je.NONE}update(e=null){const t=this.object.position;dt.copy(t).sub(this.target),dt.applyQuaternion(this._quat),this._spherical.setFromVector3(dt),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=bt:n>Math.PI&&(n-=bt),r<-Math.PI?r+=bt:r>Math.PI&&(r-=bt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(dt.setFromSpherical(this._spherical),dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pi.origin.copy(this.object.position),pi.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pi.direction))<hd?this.object.lookAt(this.target):(Aa.setFromNormalAndCoplanarPoint(this.object.up,this.target),pi.intersectPlane(Aa,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>dr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dr||this._lastTargetPosition.distanceToSquared(this.target)>dr?(this.dispatchEvent(ba),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bt/60*this.autoRotateSpeed*e:bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dt.setFromMatrixColumn(t,0),dt.multiplyScalar(-e),this._panOffset.add(dt)}_panUp(e,t){this.screenSpacePanning===!0?dt.setFromMatrixColumn(t,1):(dt.setFromMatrixColumn(t,0),dt.crossVectors(this.object.up,dt)),dt.multiplyScalar(e),this._panOffset.add(dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;dt.copy(r).sub(this.target);let s=dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dd(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fd(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pd(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uo),this.state=je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function md(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=je.DOLLY;break;case hn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}break;case hn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(ps)}function _d(i){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gd(i){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(i.preventDefault(),this.dispatchEvent(ps),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uo))}function vd(i){this.enabled!==!1&&this._handleKeyDown(i)}function xd(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ln.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=je.TOUCH_ROTATE;break;case ln.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case ln.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=je.TOUCH_DOLLY_PAN;break;case ln.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(ps)}function Md(i){switch(this._trackPointer(i),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=je.NONE}}function Sd(i){this.enabled!==!1&&i.preventDefault()}function Ed(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yd(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ai={pen:{label:"握笔器",length:45,diameter:28,bore:10,load:15},utensil:{label:"餐具手柄",length:95,diameter:34,bore:13,load:20},brace:{label:"矫形护具",length:65,circumference:180,wall:4,load:30}},fo=(i,e,t)=>Math.max(e,Math.min(i,t)),wi=(i,e,t)=>i+(e-i)*t,wa="([0-9]+(?:\\.[0-9]+)?)\\s*(毫米|厘米|mm|cm)?";function Rn(i,e){const t=i.match(new RegExp("(?:"+e+")\\s*(?:[:：=为]\\s*)?"+wa)),n=i.match(new RegExp(wa+"\\s*(?:的\\s*)?(?:"+e+")")),r=t??(n?.[2]?n:null);return r?Number(r[1])*(["厘米","cm"].includes(r[2])?10:1):void 0}function Cn(i,e,t,n,r,s){if(i===void 0)return n;const a=fo(i,e,t);return a!==i&&r.push(s+"超出模板范围，已限制为 "+a+" mm。"),a}function Td(i){const e=i.normalize("NFKC").toLowerCase(),t=/护具|护腕|护指|支具|矫形|brace|orthos|splint/.test(e)?"brace":/餐具|勺|筷|叉|utensil|spoon|fork|cutlery/.test(e)?"utensil":/笔|pencil|\bpen\b/.test(e)?"pen":void 0,n=/左手|左腕|左侧|\bleft\b/.test(e)?"left":/右手|右腕|右侧|\bright\b/.test(e)?"right":void 0;return{kind:t,side:n,support:/震颤|颤抖|握力弱|tremor|weak\s*grip/.test(e)||void 0,finger:/护指|手指|finger/.test(e)||void 0,length:Rn(e,"长度|(?<!周)长|\\blength\\b"),circumference:Rn(e,"周长|围度|腕围|指围|臂围|circumference|girth"),wall:Rn(e,"壁厚|wall thickness|wall"),diameter:Rn(e,"外径|直径|outer diameter|(?<!inner )\\bdiameter"),bore:Rn(e,"孔径|内径|bore|inner diameter")}}function po(i,e="auto"){const t=i.kind,n=e==="auto"?t??"pen":e;if(!Ai[n])throw new Error("未知辅具类别。");const r=[];!t&&e==="auto"&&r.push("未识别到类别关键词，使用握笔器模板。"),e!=="auto"&&t&&e!==t&&r.push("文字中的类别与所选类别不同，采用所选类别。");const s=Ai[n],a=i.side??"neutral",o=!!i.support,l=n==="brace"&&!!i.finger,c=Cn(i.length,n==="utensil"?55:22,l?70:140,l?34:s.length,r,"长度"),u={kind:n,side:a,support:o,finger:l,length:c,warnings:r};return n==="brace"?(u.circumference=Cn(i.circumference,l?42:100,l?95:320,l?60:s.circumference,r,"周长"),u.wall=Cn(i.wall,2,8,l?3:s.wall,r,"壁厚")):(u.diameter=Cn(i.diameter,16,55,s.diameter+(o?4:0),r,"外径"),u.bore=Cn(i.bore,5,Math.min(24,u.diameter-5),Math.min(s.bore,u.diameter-5),r,"孔径")),u}function bd(i,e){const{params:t,profile:n,provenance:r}=i,s={...t,...e,kind:t.kind};e.support!==void 0&&e.support!==t.support&&(e.diameter===void 0||e.diameter===t.diameter)&&r.diameter?.source==="default"&&delete s.diameter;const o=po(s),l={...r};for(const[c,u]of Object.entries(e))o[c]!==void 0&&u!==t[c]&&(l[c]={source:"manual"});return{..._o(o,n),provenance:l}}function mo(i){const e=i.flat();if(e.length<8)return null;const t=e.map(f=>f[0]),n=e.map(f=>f[1]),r=Math.min(...t),s=Math.max(...t),a=Math.min(...n),o=Math.max(...n);if(s-r<.05||o-a<.08)return null;const l=Array.from({length:13},(f,d)=>{const p=wi(o,a,(d+.5)/13),v=[];for(const g of i)for(let m=1;m<g.length;m++){const h=g[m-1],R=g[m];(h[1]<=p&&R[1]>p||R[1]<=p&&h[1]>p)&&v.push(wi(h[0],R[0],(p-h[1])/(R[1]-h[1])))}return v.length>=2?Math.max(...v)-Math.min(...v):null}),c=l.filter(f=>f!==null);if(c.length<7||Math.max(...c)<.04)return null;const u=Math.max(...c);return l.map(f=>f===null?null:f/u)}function Ad(i){const e=mo(i);if(!e)return null;const t=e.map((n,r)=>{if(n!==null)return n;const s=e.slice(0,r).findLastIndex(o=>o!==null),a=e.findIndex((o,l)=>l>r&&o!==null);return s<0?e[a]:a<0?e[s]:wi(e[s],e[a],(r-s)/(a-s))});return t.map((n,r)=>fo((t[Math.max(0,r-1)]+2*n+t[Math.min(r+1,t.length-1)])/4,.66,1))}function _o(i,e){const r=64+ +(i.kind==="brace"),s=i.kind==="brace",a=s?i.circumference/(2*Math.PI)+.75:i.bore/2,o=s?i.wall:i.diameter/2-a,l=i.finger?82:76,c=i.side==="left"?-15:i.side==="right"?15:0,u=[],f=[];for(let g=0;g<=24;g++){const m=g/24,h=m*((e?.length??1)-1),R=e?wi(e[Math.floor(h)],e[Math.ceil(h)],h%1):.79+.21*Math.sin(Math.PI*m),T=o*(s?1+.55*(R-.8):R);for(const E of[a+T,a])for(let P=0;P<r;P++){const D=(s?l/2+c+(360-l)*P/64:360*P/64)*Math.PI/180;u.push([E*Math.cos(D),E*Math.sin(D),i.length*m])}}const d=(g,m,h)=>2*g*r+m*r+h,p=(g,m,h,R)=>f.push([g,m,h],[g,h,R]);for(let g=0;g<64;g++){const m=(g+1)%r;for(let h=0;h<24;h++)p(d(h,0,g),d(h,0,m),d(h+1,0,m),d(h+1,0,g)),p(d(h,1,m),d(h,1,g),d(h+1,1,g),d(h+1,1,m));p(d(0,0,m),d(0,0,g),d(0,1,g),d(0,1,m)),p(d(24,0,g),d(24,0,m),d(24,1,m),d(24,1,g))}if(s)for(let g=0;g<24;g++)p(d(g,0,0),d(g+1,0,0),d(g+1,1,0),d(g,1,0)),p(d(g+1,0,64),d(g,0,64),d(g,1,64),d(g+1,1,64));const v=Math.min(...Array.from({length:25},(g,m)=>Math.hypot(...u[d(m,0,0)].slice(0,2))-a))*Math.cos(Math.PI/64);return{params:i,profile:e,vertices:u,faces:f,checks:Rd(u,f,v,i,a)}}function Ri(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function go(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function wd(i,e,t){const n=go(Ri(e,i),Ri(t,i)),r=Math.hypot(...n);return r?n.map(s=>s/r):n}function Rd(i,e,t,n,r){const s=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(const w of i)for(let L=0;L<3;L++)s[L]=Math.min(s[L],w[L]),a[L]=Math.max(a[L],w[L]);const o=a.map((w,L)=>w-s[L]),l=new Map,c=i.map(()=>[]);let u=0,f=0,d=0,p=0;for(const w of e){const[L,S,M]=w.map(H=>i[H]),b=go(Ri(S,L),Ri(M,L)),X=Math.hypot(...b);X<1e-8&&p++,d+=X/2,Math.max(L[2],S[2],M[2])>s[2]+1e-8&&b[2]<-X/Math.SQRT2&&(f+=X/2),u+=(L[0]*b[0]+L[1]*b[1]+L[2]*b[2])/6;for(let H=0;H<3;H++){const W=w[H],j=w[(H+1)%3],Y=w[(H+2)%3],K=W<j?W+":"+j:j+":"+W,z=l.get(K)??[0,0];z[0]++,z[1]+=W<j?1:-1,l.set(K,z),c[W].push([j,Y])}}let v=0;for(const[w,L]of l.values())(w!==2||L!==0)&&v++;const g=c.filter(w=>{if(!w.length)return!0;const L=new Map(w);if(L.size!==w.length)return!0;const S=w[0][0];let M=S,b=0;do if(M=L.get(M),M===void 0||++b>w.length)return!0;while(M!==S);return b!==w.length}).length,m=v===0&&g===0&&p===0&&u>0,h=o.every((w,L)=>w<=[220,220,250][L]),R=t>=1.6,T=f<=1e-8,E=n.finger?12:Ai[n.kind].load,P=r+t,D=n.kind==="brace"?6*E*r/(n.length*t**2):E*n.length*P/(Math.PI*(P**4-r**4)/4);return{manifold:m,nonManifold:v,badVertices:g,degenerate:p,size:o,fits:h,minWall:t,wallPass:R,overhangPass:T,overhangPercent:100*f/d,volume:u,mass:u*.00124,minutes:u/6/60+o[2]/.2*1.5/60,printable:m&&h&&R&&T,structure:{load:E,stress:D,factor:35/D,model:n.kind==="brace"?"开口环近似":"空心悬臂梁近似"}}}function Cd({vertices:i,faces:e}){const t=new ArrayBuffer(84+e.length*50),n=new DataView(t);n.setUint32(80,e.length,!0);for(const[r,s]of e.entries()){const[a,o,l]=s.map(u=>i[u]);[...wd(a,o,l),...a,...o,...l].forEach((u,f)=>n.setFloat32(84+r*50+4*f,u,!0))}return t}const Bn={featureWidth:768,labels:{kind:["pen","utensil","brace","unknown"],side:["neutral","left","right"],support:[!1,!0],finger:[!1,!0],slot:["ignore","length","diameter","bore","circumference","wall"]},heads:{side:{bias:[2.398128,-1.226589,-1.171539],weights:[[.075351,1.712245,-.089463,.008951,.114131,-.227204,-.25256,.253854,-.004865,-.735071,-.254748,-.71706,.247012,.137412,.555496,0,.09414,.054413,.162836,.464585,.285803,.210625,-.157032,.149968,.128852,-2.322235,-.045044,.097347,.431444,.310557,.471476,.020227,.326811,.071374,.915766,.074221,.045974,.296389,.008259,-.040833,-.622329,.110004,-1.555714,.12487,.328962,.058042,-.226627,-.008228,-.024001,.388158,.26131,-.066057,-.028608,.374284,.07511,-.867069,-.164595,0,.060412,.050395,-1.003676,-.020796,.086244,-.142417,.325764,-.084463,-.057541,-1.809964,-.055901,-.007912,.06806,.047515,.067383,.221392,.163687,.319154,.140351,.055323,-.033323,-.231742,.083765,.138968,-.092759,-.493656,-.079053,.022672,.143112,.080803,-.052786,-.00629,-.033782,.040975,.113072,.182712,-.002101,.269262,.480116,-.019004,1.019201,-2.86611,.815819,-.348365,.028792,.073553,-.220541,.794094,-.066476,.010955,-.218981,-.075135,.021542,0,-.042605,.357519,.08512,-.505496,-.043226,.179074,.648031,-.105642,.290166,-.024115,-.398697,-.109498,.2935,-.014098,-.064318,-2.110858,.204002,-.057405,.617774,26e-6,.949664,-.057966,-.1454,.373721,-.07366,.166916,.090183,-.057307,-.012604,.070944,-.445811,-.266663,.28049,-1.699388,.344428,.128176,-.068303,-2.510241,-.135483,-.015134,-.163127,-2.702345,-.517811,-.535518,.04724,0,.2922,-.157319,.856837,-.168783,-.061444,.064668,-3.742656,-.010345,-.107052,-.083441,.089455,-2.560155,.279297,-.024529,.20071,-.035568,-.046177,.26982,-.003981,.018457,-1.894284,-.11871,-.067962,-.022961,-.146138,.062495,.255597,-.022659,-.484876,.164338,-.099898,.07209,-.338002,0,.210198,.081187,.597059,-.096971,.360196,-.013795,-1.833873,-.162448,.422519,-.055759,.163513,-.647499,.010083,.13543,-.136112,-.692169,.44302,.133198,-.079384,-.256862,.235459,.247844,.07482,-.729344,.262693,.280738,-.028554,-2.956949,-.21799,-.221711,.226538,.32861,.660824,-.219455,-.099041,-.031828,.515995,.365048,.037283,.326587,.238807,.088493,.423488,-.071698,.156631,-.764459,-.124702,.743862,-1.645736,.661857,-2.506024,.196231,-.324603,.159298,-.021622,.411708,.051135,-.147993,.061718,.086992,-.021002,.011439,.031101,.060252,.106384,.148827,-.015388,.165675,.068978,-.150834,.296789,.405321,-.123296,.665477,.102721,.179183,.427989,0,.323083,.10842,-.143952,.444293,-.02004,-.01686,.279481,-.156075,-2.104553,.015288,-.087989,-.327818,.078921,.079077,.229502,-.141374,-.016174,.075906,.086817,-.055346,.351186,.149449,.100142,.522237,.073562,.504076,-.105368,-.033518,.182054,.079096,.041127,-.030577,.076563,.417931,-.11799,.261309,.222536,0,.232212,.086539,.102852,.321441,.007043,.466195,.466099,.022605,.186703,.137831,-.110908,.219161,.097108,.052148,.042018,.144725,-.065365,-.154151,.084254,.01966,.040009,.291231,.102629,.025051,-.385102,-1.258902,-2.452334,-.002343,.188413,.021115,.22469,-.07013,.279729,.133755,-.009142,-1.036295,-.016712,-.019565,.126337,.062459,-.296723,.143512,.334496,-.25706,0,-.043702,.234607,-.117968,-3.610103,.136034,.006053,.109967,.143183,.434374,-.152371,.03979,-.022787,.069223,.02715,.071323,.050455,0,-.015167,-.13617,.020372,-.03209,.228801,.034255,.077707,.014671,-.144776,.082448,-.099046,.205405,-.138761,.079589,-.201686,.236176,-.039461,-.383728,-.071598,.081783,.093405,-.965287,.483776,.140845,-3.157259,-.109715,-.047388,-.510523,.083814,.453364,.074419,.072622,.313206,.112336,-.279449,-.046108,-.010483,-1.098637,-.12028,-.010581,-.035759,.04891,.208642,-.13678,.015653,-.078582,.2008,.238161,.152079,-.078978,.269539,-1.812089,-.702164,.408427,.003317,.046005,-.064048,.075015,-.051128,-.094697,.094149,.061658,.565948,.224327,-.352952,.210288,-.105707,.093806,-.145012,-.142461,.01009,.155061,-.034738,-1.775043,.080369,.121505,-507e-6,-2.164699,-.302493,.006253,-.06587,.377171,.11958,.080872,-.420083,0,.033492,.264797,-.272626,.211129,-1.888775,.400512,.158519,-.019004,.184243,-.142298,-.008636,.020338,.371122,.227697,-.028547,-.162704,.118624,-.091807,.190174,-.109756,-.238158,-.112951,.08836,.168641,-.158483,.525243,.088493,-.002101,.059274,-.008909,-.984831,-.288263,.00245,-.002947,-.136028,-2.532482,.163931,.212952,.450473,-.075743,-.001747,-.028247,-.044031,-.34092,-.096107,0,-2.008684,.006342,.209903,-1.086854,-.090516,.067971,-.032244,.179394,-.130272,.125874,.259619,.015271,-6.707406,.050563,-1.127447,.256997,.149601,0,.007567,-.726457,-.24632,.030923,.393021,-.159489,.15222,.004553,0,-.070217,-.067565,0,.505767,-.05746,-.192726,-2.83798,-2.094222,-3.690431,-1.946271,.013909,.079063,.490086,-.257481,.294034,-1.081966,.328569,-1.938164,.148387,.143726,.25385,-.845259,.201769,.03384,-.292958,-2.595079,.05317,1.008091,-.019584,-.191138,-.032449,.277033,.484211,-.001297,1.661158,-3.415168,.012043,.239445,0,-1.25912,-2.313506,.105999,.093463,.011656,.561286,.148089,.059551,.044595,-.299074,.073174,.0073,-.135278,.167491,-3.833555,-.441167,.408449,.236593,-.053705,-.007012,-.124493,.123985,-1.085663,.029852,-.084981,.104576,.110826,.427044,-.170521,.454656,.026868,.309867,.148329,-.136791,.027072,.035018,.167567,.133401,-.091419,-.046857,-.005196,.318225,.047127,.059977,.04811,0,.128549,.203306,.045457,.068097,.016822,-.044159,-.207202,-.040185,.167196,.436107,.017311,.01353,0,-.013145,.092903,-.057609,.4216,-2.027002,.029883,.102595,.108164,.077904,-.073935,.025266,.782607,.029742,.25989,.09197,-.070175,-.763635,-1.799243,.303465,.233076,-.009324,-.21849,.157427,-1.850351,-.042257,.171422,.026417,-.19877,.052513,.088493,-.049805,-4.022183,.114871,.123489,.046689,.282289,0,.152095,-1.206703,-.033562,-.207735,-.022552,-.100715,-4.058569,-.111169,-.025317,-.052772,-1.598549,-.729175,.111134,.338285,-.124826,.269075,.048939,.152672,-.542166,.148951,-.141835,.456017,-.021913,.121568,-1.369243,0,.213526,.013296,.141186,-.010476,.191398,.121169,-.361449,-.036931,.084598,.113835,-.024356,.311838,-.106559,.28836,-.098491,.04766,.072532,.872727,.020669,.003021,.036075,-.053598,-.02485,-.044704,-.982488,-.047441,.158256,-.237711,-.220179,.012498,.135743,.102162,.048887,-.235104,-.013852,.199097,-.179743,.042264,-.073338,.065544,0,-.217687,-.19775,-.069003,-.025785,.087334,.617634,.16455,-.212248,.422499,.024373,-.077715,.264238,.328864,.370932,-.754295,.19106,-.042565,.319174,.02004,.225212,.05081,.562501,.062321,-3.049376,.57462,-.09347,-.206319,-.05978,.169488,-.222163,.068165,-2.855306,-.086479,.342172,-1.404871,.110093,-.048284],[-.123643,-.906536,.3106,-.004699,-.149133,.041869,-.991399,.089295,.140307,.465181,.144176,.669377,-.041181,-.064983,-.123216,0,.081598,-.157284,-421e-6,-.706102,-.017938,-.673943,.145613,.065781,-.076084,-1.460789,.06091,.08173,-.174121,-.497789,-.174172,-.138109,-.485382,-.142973,-.567789,-.482487,-.243505,-.307502,-.017899,.037828,1.07284,.069981,2.852011,-.033429,.072379,-.093859,.042904,-.06774,.043217,-.311051,-.092248,.084542,.149929,-.097278,-.118038,.525974,.035732,0,-.109191,.082411,-.926012,.852193,.112441,.227372,-.161584,.162686,-.102897,1.081243,.071404,.02277,-.029671,.04659,-.030607,.010624,-.094621,-.116772,-.363378,-.081119,.038359,-.040152,-.053251,.113313,.150981,1.050817,.038109,.149164,-.063533,-.072466,.102125,.067993,.052783,-.054922,-.187454,-.110638,.127588,-.466172,-.609393,.049343,-.73405,-2.127178,-.233876,.251879,-.048981,-.045291,.257852,-.433438,.032827,-.075621,.219139,.001576,-.123978,0,-.085511,-.335797,.016052,.479245,.020497,-.2253,-.089831,.125591,.056199,.201904,.239253,.100236,-.291375,-.02099,.030349,1.103593,.038705,.209988,-.029061,-.025877,-.277765,.104768,.161696,.064855,-.040524,-.04873,.219987,-.11594,.015267,-.233458,-.527524,.220105,-.28408,-1.721951,-.442288,.051273,-.01043,3.475251,.039475,-.169627,.177289,-1.99262,.375629,-.047177,-.062139,0,-.14999,-.01652,-.775437,.269748,.112276,.007056,5.771344,.011453,.113766,.118083,-.036171,-.564416,.035927,.040086,.150373,.009742,.124672,-.199153,.05016,-.131752,1.080681,.030011,-.070824,.059329,.092731,-.033574,.121737,.101185,.243043,-.08532,-.042969,-.123346,.463459,0,-.106093,-.049083,-.219618,.006566,-.130351,-.009883,.998809,.224645,-.048194,-.06034,.147671,.052398,.007288,-.157076,-.013635,.626353,-.240269,.092101,-.079488,.18921,-.409421,-.073759,-.31418,-.385813,-.073996,-.219715,-.108539,5.453215,-.859188,-.128078,-.074578,-.330016,.40317,.056311,-.139639,.027902,-.215884,-.136236,-.086882,.038668,-.037301,-.058631,-.290064,-.028819,.331777,.364589,.048168,-.275642,.936893,-.183273,4.348737,-.085191,.882757,.021224,-.17499,-.037861,-.090823,.030256,.159709,-.012042,.016681,.123555,-.189738,-.05875,-.072926,-.083338,-.025792,-.082235,-.083113,.061085,-.092598,-.027159,.137286,-.381614,.07263,-.02394,-.013048,0,-.161778,.072496,.161684,-.5588,.015469,.137216,-.158583,.00288,4.526276,-.017933,-.071472,.003843,.001093,.035092,.105484,.024331,-.042385,-.051733,.013263,.027203,-.168549,-.019624,-.267591,-.075632,-.342524,-.20383,.155774,-.021877,-.065802,.035418,.244453,-.072314,.008024,-.212451,.042251,-.16188,-.040938,0,-.007998,.06134,-.114372,-.273237,-.014517,-.406897,-.850907,-.06523,-.09437,.098043,.002037,-.142042,-.023428,-.049577,-.104125,-.056182,.012065,.121199,.137455,.069034,-.043484,-.144553,-.044557,-.009954,.127259,-1.636027,4.057493,.14671,-.079301,.025399,-.43059,.043567,-.132033,-.009693,.025188,-.399002,.012502,.037534,-.076997,-.052246,.043516,-.213995,.014545,-.104554,0,.111888,-.121261,-.132342,.292532,-.020743,.006327,.061989,-.018794,-.118615,.182683,-.081437,-.262483,-.157396,.01857,-.011268,-.090092,0,-.055092,.044685,.287255,-.021547,-.170633,.063703,-.041121,-.057983,.103861,-.039414,.13824,-.056183,.157862,.006319,.085138,-.073409,.046476,.151035,-.101234,.106147,-.042267,-.962042,-.469972,-.138323,1.568529,.024956,.009407,-.140828,-.027755,-.156713,.022333,-.242271,-.009294,-.114013,.199164,.172977,-.036416,1.936279,.110252,.085636,.031395,-.065184,-.215474,.061056,.022832,.095643,-.01996,-.001388,.259497,.280506,-.114222,3.281758,.596542,-.075391,-.014168,-.013589,.017133,-.087649,.04664,-.154983,-.085246,-.153542,-.129213,-.099355,.192398,-.098461,.110637,-.152615,-.08037,-.001834,-.181128,-.023435,.011872,-.846102,-.070615,.140518,-.031431,-2.001751,.153087,.058793,.1803,-.273694,-.644998,.054677,.069217,0,-.151167,-.10151,.089239,-.128959,1.000225,-.181054,-.020941,.049343,-.115985,.157247,.008926,-.042029,.041152,.051864,-.106271,.252117,-.247361,.057228,.209859,.133481,.100382,.067539,-.014825,-.096842,.108863,-.275003,-.058631,.127588,.002561,.060677,.562325,-.013532,-.111734,-.005947,.150892,-1.834898,-.03996,.014665,-.115479,.10669,.007191,.062265,.079013,.275403,.05582,0,-.405272,-.239968,-.157198,-.989695,.184344,.005181,.024935,-.196323,.120402,-.092013,-.206359,-.097007,.365944,.152395,.722435,-.305029,-.145704,0,.051802,-.83764,.04485,.046764,-.183094,.242839,-.10753,-.132513,0,-.024783,.241553,0,-.793198,468e-6,.044381,4.903181,3.358213,7.422957,3.373484,-.034554,.003196,-.040108,.075366,.02081,-.825955,.02648,-1.509788,.014875,-.087337,-.049843,1.522219,.091081,-.02883,.089665,-1.968905,-.057751,-.378118,-.033703,.044897,.062473,-.039946,-.042918,-.24475,-.786445,.971339,.015221,-.066876,0,.352315,1.220206,-.070966,-.019389,.035702,.189476,-.144207,-.120848,-.022573,.296729,.153693,.014606,-.075264,-.17184,1.865408,.031332,.058591,-.014993,-.129803,-.158118,-.039575,-.006495,2.332188,-.075766,.042889,.050909,-.079652,-.616223,.04918,-.366126,.095808,-.235263,-.054998,.198425,-.02742,-.106296,-.068682,-.157343,.133759,.007,.039639,-.265394,-.111513,-.054749,.084512,0,-.168433,-.147863,.00936,-.049276,.021767,.051883,.043859,.054581,-.114759,-.11994,-.05011,-.021057,0,-.005666,.046502,-.070814,-.16511,-1.480674,-.004901,.028832,-.118111,-.144823,.004448,766e-6,-.496926,.008888,-.095532,-.00246,.004553,-.797146,1.068321,-.103524,-.1526,-.026873,.177707,-.013417,1.029436,.0451,-.180246,.054321,.057931,-.077867,-.058631,-.009653,1.806791,-.20784,.007441,.271744,-.110831,0,.057773,2.466712,-.004704,.17277,.201588,-.14311,2.333571,-.018117,.023412,.112262,.855385,.845329,-.13381,-.51568,.003601,.012473,-.076535,-.327976,1.000582,-.128503,.214074,-.317426,.007411,-.045853,2.786545,0,-.355525,-.019797,-.219048,-.065475,-.028459,-.065538,.116822,-.150136,.011711,.082057,.082162,-.017037,.020623,-.13651,.115536,.025981,-.1011,-.282868,.050479,.128227,-.002047,.003726,.033444,.042133,.5502,.130324,.017046,.012423,-.017426,-.01261,-.041804,-.115064,.238065,.02805,.003902,-.233253,-.18946,-.012663,.123037,-.00158,0,.052951,-193e-6,-.052569,.111144,486e-6,-.264174,-.012067,.167156,-.597291,-.134501,-.005566,-.040995,-.146872,-.375354,1.850095,-.113756,-.03813,-.002679,-.131425,-.127183,-.013599,-.131594,-.003257,5.50515,-.201923,-.100525,.127684,.149806,-.088002,.015394,-.174256,-2.212772,.067271,-.253492,-1.335498,-.14301,.025855],[.048292,-.805708,-.221137,-.004252,.035003,.185335,1.243959,-.34315,-.135443,.26989,.110572,.047682,-.205831,-.072429,-.43228,0,-.175738,.102871,-.162416,.241517,-.267866,.463319,.011419,-.215749,-.052767,3.783024,-.015866,-.179076,-.257323,.187231,-.297304,.117882,.158571,.0716,-.347977,.408266,.197531,.011113,.00964,.003005,-.450512,-.179985,-1.296297,-.091441,-.401341,.035817,.183723,.075968,-.019217,-.077107,-.169063,-.018485,-.121321,-.277006,.042927,.341095,.128863,0,.048779,-.132805,1.929688,-.831397,-.198685,-.084955,-.16418,-.078222,.160438,.728721,-.015504,-.014858,-.038388,-.094105,-.036775,-.232015,-.069066,-.202382,.223027,.025795,-.005036,.271894,-.030515,-.252281,-.058222,-.557161,.040944,-.171836,-.07958,-.008337,-.04934,-.061703,-.019001,.013948,.074382,-.072073,-.125488,.19691,.129278,-.030338,-.285151,4.993288,-.581943,.096486,.020189,-.028261,-.037311,-.360656,.033649,.064666,-158e-6,.073559,.102436,0,.128116,-.021722,-.101173,.02625,.02273,.046226,-.558201,-.01995,-.346364,-.177789,.159443,.009262,-.002126,.035088,.033969,1.007264,-.242707,-.152584,-.588713,.02585,-.671898,-.046802,-.016296,-.438576,.114184,-.118186,-.31017,.173247,-.002664,.162514,.973335,.046558,.00359,3.421339,.097861,-.17945,.078733,-.96501,.096008,.184761,-.014162,4.694965,.142182,.582695,.014899,0,-.14221,.173838,-.081399,-.100965,-.050832,-.071725,-2.028688,-.001108,-.006714,-.034643,-.053284,3.124571,-.315224,-.015557,-.351083,.025827,-.078495,-.070666,-.046179,.113296,.813603,.088699,.138786,-.036368,.053407,-.028921,-.377334,-.078526,.241833,-.079018,.142867,.051256,-.125457,0,-.104105,-.032104,-.377441,.090406,-.229845,.023678,.835063,-.062197,-.374324,.116099,-.311184,.5951,-.017371,.021646,.149747,.065817,-.202751,-.225299,.158872,.067652,.173963,-.174085,.23936,1.115157,-.188697,-.061022,.137093,-2.496266,1.077178,.34979,-.15196,.001406,-1.063994,.163144,.23868,.003926,-.300111,-.228811,.049599,-.365255,-.201506,-.029862,-.133423,.100517,-.488407,.39987,.076534,-.46822,.708843,-.478585,-1.842713,-.11104,-.558154,-.180522,.196612,-.373847,.039688,.117737,-.221427,-.07495,.004321,-.134994,.158637,-.001503,-.033458,-.065489,.041179,-.08344,.014135,.089749,-.204191,-.378161,-.01399,-.283862,-.175351,-.155243,-.414941,0,-.161305,-.180916,-.017732,.114507,.004571,-.120356,-.120898,.153195,-2.421723,.002645,.159462,.323975,-.080014,-.11417,-.334986,.117043,.058559,-.024173,-.10008,.028143,-.182637,-.129825,.167449,-.446605,.268963,-.300246,-.050406,.055395,-.116251,-.114514,-.285579,.10289,-.084587,-.205481,.075739,-.099429,-.181598,0,-.224214,-.147879,.01152,-.048203,.007474,-.059298,.384808,.042625,-.092333,-.235874,.10887,-.077119,-.073681,-.002571,.062107,-.088543,.053299,.032952,-.221708,-.088694,.003474,-.146678,-.058072,-.015097,.257843,2.89493,-1.605159,-.144367,-.109112,-.046514,.2059,.026563,-.147697,-.124063,-.016046,1.435297,.00421,-.017969,-.04934,-.010214,.253207,.070483,-.349041,.361614,0,-.068186,-.113346,.250311,3.317571,-.115291,-.01238,-.171955,-.124389,-.315759,-.030313,.041647,.285269,.088173,-.04572,-.060055,.039637,0,.070259,.091486,-.307628,.053637,-.058168,-.097958,-.036586,.043311,.040915,-.043034,-.039194,-.149223,-.019101,-.085908,.116548,-.162767,-.007015,.232693,.172832,-.18793,-.051138,1.92733,-.013803,-.002521,1.588731,.084759,.037981,.65135,-.05606,-.296651,-.096752,.169649,-.303912,.001677,.080286,-.126869,.046899,-.837642,.010028,-.075055,.004364,.016274,.006833,.075724,-.038486,-.017061,-.18084,-.236772,-.411577,-.201527,-.155317,-1.469669,.105622,-.333036,.010851,-.032417,.046915,.012634,.004488,.24968,-.008903,.091884,-.436735,-.124972,.160553,-.111827,-.00493,.058808,.225381,.144295,.171038,-.131625,.022866,2.621145,-.009754,-.262023,.031938,4.16645,.149406,-.065046,-.11443,-.103477,.525418,-.135549,.350866,0,.117676,-.163288,.183386,-.08217,.888549,-.219457,-.137577,-.030338,-.068258,-.014949,-29e-5,.021691,-.412274,-.279561,.134817,-.089413,.128737,.034579,-.400033,-.023726,.137777,.045412,-.073536,-.071799,.049619,-.25024,-.029862,-.125488,-.061836,-.051768,.422506,.301795,.109284,.008894,-.014864,4.36738,-.123971,-.227617,-.334995,-.030947,-.005444,-.034018,-.034983,.065517,.040287,0,2.413956,.233627,-.052705,2.07655,-.093828,-.073152,.007309,.016929,.00987,-.033861,-.053261,.081736,6.341462,-.202958,.405012,.048032,-.003897,0,-.059369,1.564097,.20147,-.077687,-.209928,-.083351,-.04469,.12796,0,.094999,-.173988,0,.287432,.056992,.148345,-2.065201,-1.263991,-3.732526,-1.427212,.020645,-.082259,-.449978,.182115,-.314843,1.907921,-.355049,3.447952,-.163263,-.05639,-.204007,-.676961,-.29285,-.00501,.203292,4.563984,.004581,-.629974,.053286,.146241,-.030023,-.237087,-.441293,.246047,-.874713,2.443829,-.027264,-.172569,0,.906806,1.0933,-.035033,-.074074,-.047357,-.750762,-.003882,.061297,-.022022,.002345,-.226867,-.021907,.210542,.004348,1.968147,.409835,-.46704,-.2216,.183507,.16513,.164069,-.117491,-1.246525,.045914,.042092,-.155485,-.031174,.189179,.121341,-.088531,-.122677,-.074604,-.093331,-.061633,348e-6,.071278,-.098885,.023942,-.04234,.039857,-.034443,-.052831,.064386,-.005228,-.132622,0,.039885,-.055442,-.054818,-.018821,-.038589,-.007724,.163343,-.014396,-.052437,-.316167,.032799,.007528,0,.018812,-.139404,.128422,-.25649,3.507676,-.024982,-.131426,.009947,.066919,.069487,-.026032,-.285681,-.03863,-.164358,-.08951,.065622,1.560781,.730922,-.19994,-.080475,.036196,.040783,-.14401,.820914,-.002844,.008824,-.080738,.140839,.025355,-.029862,.059458,2.215392,.092969,-.130931,-.318433,-.171458,0,-.209867,-1.260008,.038266,.034965,-.179036,.243824,1.724998,.129286,.001905,-.05949,.743165,-.116154,.022676,.177396,.121225,-.281548,.027596,.175304,-.458417,-.020448,-.072238,-.138591,.014502,-.075715,-1.417303,0,.141999,.006501,.077862,.075951,-.162939,-.05563,.244627,.187067,-.096309,-.195892,-.057806,-.294801,.085936,-.15185,-.017046,-.073641,.028567,-.589859,-.071147,-.131248,-.034028,.049873,-.008594,.002571,.432289,-.082883,-.175302,.225287,.237605,112e-6,-.093939,.012902,-.286952,.207054,.00995,.034156,.369203,-.0296,-.049699,-.063964,0,.164736,.197943,.121572,-.085359,-.08782,-.35346,-.152483,.045092,.174792,.110128,.08328,-.223243,-.181992,.004422,-1.0958,-.077304,.080696,-.316495,.111385,-.098029,-.03721,-.430908,-.059064,-2.455774,-.372698,.193995,.078635,-.090026,-.081485,.206768,.106091,5.068077,.019208,-.08868,2.740369,.032916,.022429]]},support:{bias:[1.942227,-1.942227],weights:[[-.054865,1.801612,.125768,.007718,.180463,.002309,.282057,.229538,.037653,-1.158181,.037076,.91758,.179978,.033593,.093243,0,.425738,-.029233,.399442,-1.868235,.113193,-.799833,-.084664,.122042,.028938,-2.106356,.195455,.182542,.312196,.053898,-.236153,.086302,.027361,.251533,.167232,.195528,.177268,.157023,-.179028,.192712,-.302755,-.024968,.198087,-.581975,.267988,-.197748,.28412,.008357,.044475,.006325,-2.39618,.081548,-.042457,-3.640113,.150734,-.376006,-.127162,0,.093512,-.160331,-.728105,-.920058,.005245,.186605,.651548,.567382,.299707,.189858,.200434,.023837,-2.489928,-.075657,.039551,.257441,-.080267,-.005558,-.082665,.231604,.013806,-2.450064,.079617,-2.014457,-.131063,-1.036943,.072153,.150972,.039174,-.002479,.062813,-.009328,.14736,.082517,-2.190352,.137412,-.046752,.160772,-.112427,-.084547,.440208,.255715,-.035564,-.103412,-2.418982,.149106,-.031151,-.213799,-.147481,.097602,.198735,.032301,-.017325,0,-.228818,-1.180342,.081511,.129942,-.103591,-.014295,.030329,-.019423,-1.513959,-.080011,-.530541,.050253,.205533,-.119644,.043778,-1.470976,.131284,.005142,.582066,-.062409,-1.851328,.045004,-.218379,-.144303,.199371,.125665,.016915,-.093585,.026345,.069436,-.043751,.201934,.177558,-1.714764,.319501,-.089686,-.085897,.043882,-.111069,-.019268,.330793,.259798,.008444,-2.432412,-.056949,0,-.084686,-.06984,-.454388,-.051004,.055936,-.147306,-.0186,.032325,-.05638,.065591,.022843,-.008134,.207206,-.04721,-2.294235,-.199568,-.080546,-1.748551,.08988,-.00417,.042927,-.120541,-.056306,.359594,-.182074,.119532,.420306,.028508,-2.061107,-.320199,.291041,-.081593,-.173162,0,.09342,.231766,-.08003,.045557,.058427,-.134683,.486732,-.156507,-.873879,-.059699,-.39639,-.711689,.099974,-2.092186,-.126996,-.302457,.341381,.04105,.055004,-.596878,.142448,.006892,.139792,-.109842,.13223,.081712,-.04297,-2.187833,.374225,.311985,.113358,.275675,.20075,.087161,.096738,.003129,.498861,.003492,.175371,-1.92501,.502906,.040985,-1.240477,-.110939,-.054136,-.567205,-.165665,-.578853,.18471,.455866,.048817,.034051,.251798,.440566,-.099975,-3.216924,-.101774,-.199052,-2.576115,.516459,-.007145,-.150178,-2.091149,.278642,-.32396,-.176327,.256153,-3.293525,.160706,-.111339,-.044163,-3.251916,.07273,-.116019,.063557,.136749,-1.041411,0,-.116573,.129818,.360531,.120512,-.177139,.060116,-.367367,.155302,-.053174,.003988,-.054208,-.071835,.186022,.02231,-2.813037,-.030787,.052685,.088178,.188619,.069974,-.190422,-.089664,-.024092,.270328,-.011325,.44529,.349623,.12885,.185882,.015241,-2.714293,-.427059,-.069169,-.13385,.151007,.132028,-.045213,0,.178183,-1.206892,-.096785,.368558,8e-6,.22182,.86043,-.041926,.05517,.008372,.033431,-1.981851,.499836,.033412,.098238,.020909,-.063136,.057715,.454956,.069515,.03106,.083608,.340471,-.097011,-1.916878,-.053674,.47651,.230781,-2.348964,.027813,.235281,-.072342,-.202572,.119675,-.079676,.521644,.286103,-.113915,.322867,-.004488,-.092638,.032147,.681035,-.204818,0,-.187375,.026191,-.015041,.140605,-.00275,-.096857,-.005218,.216328,-2.065722,.045305,.092777,.052487,-.080365,-.043678,.066631,-.1684,0,-.129897,-.052364,-3.002207,-.09061,-.037712,-.312978,.211076,-.034836,-.165957,.037676,.011746,.174169,.193179,.030774,.04791,-.036044,.288226,-.390262,.061503,-.069897,.041175,.104562,.087791,.146715,-.667958,.360493,.180901,.304738,-.237903,-.189782,.088613,.460546,-3.732066,.04944,-.02249,.259434,.009271,.392853,-.999447,.089045,-.101661,.236411,.184838,.030105,.359737,-.113111,-.144349,.344076,.057242,-.105186,.128525,.149394,-.505655,.428694,.024507,.043072,.036971,.022943,-.115115,.053151,.163455,-.028864,-.068596,.009492,-.032091,-3.884891,.062665,.024621,.027207,.05352,-.009538,.041266,.123251,.2409,.046837,.258171,.049477,-.24704,.317982,.244836,.199767,-.220479,.679487,-3.555733,-1.127378,0,.228254,-.188059,.103737,.715967,.144397,.114574,-.31399,-.084547,-.269688,.253605,.006971,.248966,.208472,.161445,.03104,-1.767435,-2.434239,-.179589,-.361247,.35398,-1.270466,-.184894,-.1038,.272303,-.135904,-.394687,.040985,-.046752,-.349705,.075213,-.656667,.074498,-2.794172,.021157,-.224049,.369892,-.03267,.353713,.44572,-.189437,.062164,.086668,.345149,-2.696922,.02403,0,.323099,-.080285,-.190918,.251743,.492631,.131754,-.036424,-.022566,.01671,-.013078,-.159895,-.121534,.238995,-.05024,-.902336,.129469,-.156436,0,-233e-6,.230596,.031805,.179134,.402899,.031585,.113217,.079463,0,.011087,-.080086,0,.026868,-.054868,-.104062,.116523,-.034086,.574911,-1.38314,-.066919,-.012428,.5426,-.11265,.439389,.285747,-.173377,.15309,.20428,.142588,.185555,.072314,.112448,.088953,-.039914,.326078,.063431,-.322765,.217577,.063163,-.001852,.30872,.265321,.039014,1.703539,-.792516,.01136,-1.241655,0,.114271,.71676,.038181,-.251338,-.007817,.366537,.357699,-.160392,-.060089,.016204,1.032171,.089087,-.023289,.048508,.499133,-2.368857,-3.308969,.161768,.08748,.002654,-.128844,-.011059,-.144697,-.133291,.150436,-.216779,.018651,.296081,-.016052,-.059711,-.041401,.096873,.16183,-.137316,-.010516,.083645,-1.510651,.379143,.273876,-.095344,.155288,-.760861,-.009016,-.115738,.110866,0,-2.215067,.378291,-1.948101,-.00377,-.010164,-.059969,.005191,.221161,-.178565,-1.200919,-2.26765,-.018098,0,-.004011,-.082001,-.092304,.067505,.085514,-.183851,-.064123,-.028164,.185921,.004017,.072998,-.1073,.031055,.102896,-.189995,-.002306,-.188031,.227963,.394818,.044792,.132502,.149885,.028703,.151696,.163187,.205406,-.308601,-.043737,-.031682,.040985,.130396,.296952,.123728,.027031,-2.473447,.086778,0,.409327,.557902,.143691,.4257,-1.421222,.073294,.272008,-.063323,.03695,.071233,.098427,-2.411877,-.008955,.121775,-.076509,.38006,.087426,-4.414267,.193267,-1.766924,-.012325,.135021,-.047981,.089581,.158149,0,.162196,-.169317,.313877,.08086,.49962,.025906,-.104156,.072025,-.044612,.432727,-2.069031,.064988,.200407,-.001318,-.039035,.202524,-.047139,.287113,-.093571,-1.424789,-.016055,-.124177,-.41775,.04284,-.631334,-.193132,-.032691,-.613324,.157094,-.014913,-.010913,-.154364,.023862,.041158,-.066429,.0244,-.240919,.04627,.044663,.076458,0,-.109145,-1.945182,-1.428369,-.100087,.021613,-.20461,.131428,-.020322,.282724,.033057,-.171353,-.068423,.303311,.0681,.225023,.162931,.158786,.179482,.307802,.328457,.067309,.238678,.176202,.012894,.360618,-.111916,.185386,-.073645,.141809,.200392,-.008839,.314714,.016283,.143535,.043762,.048947,.58327],[.054865,-1.801612,-.125768,-.007718,-.180463,-.002309,-.282057,-.229538,-.037653,1.158181,-.037076,-.91758,-.179978,-.033593,-.093243,0,-.425738,.029233,-.399442,1.868235,-.113193,.799833,.084664,-.122042,-.028938,2.106356,-.195455,-.182542,-.312196,-.053898,.236153,-.086302,-.027361,-.251533,-.167232,-.195528,-.177268,-.157023,.179028,-.192712,.302755,.024968,-.198087,.581975,-.267988,.197748,-.28412,-.008357,-.044475,-.006325,2.39618,-.081548,.042457,3.640113,-.150734,.376006,.127162,0,-.093512,.160331,.728105,.920058,-.005245,-.186605,-.651548,-.567382,-.299707,-.189858,-.200434,-.023837,2.489928,.075657,-.039551,-.257441,.080267,.005558,.082665,-.231604,-.013806,2.450064,-.079617,2.014457,.131063,1.036943,-.072153,-.150972,-.039174,.002479,-.062813,.009328,-.14736,-.082517,2.190352,-.137412,.046752,-.160772,.112427,.084547,-.440208,-.255715,.035564,.103412,2.418982,-.149106,.031151,.213799,.147481,-.097602,-.198735,-.032301,.017325,0,.228818,1.180342,-.081511,-.129942,.103591,.014295,-.030329,.019423,1.513959,.080011,.530541,-.050253,-.205533,.119644,-.043778,1.470976,-.131284,-.005142,-.582066,.062409,1.851328,-.045004,.218379,.144303,-.199371,-.125665,-.016915,.093585,-.026345,-.069436,.043751,-.201934,-.177558,1.714764,-.319501,.089686,.085897,-.043882,.111069,.019268,-.330793,-.259798,-.008444,2.432412,.056949,0,.084686,.06984,.454388,.051004,-.055936,.147306,.0186,-.032325,.05638,-.065591,-.022843,.008134,-.207206,.04721,2.294235,.199568,.080546,1.748551,-.08988,.00417,-.042927,.120541,.056306,-.359594,.182074,-.119532,-.420306,-.028508,2.061107,.320199,-.291041,.081593,.173162,0,-.09342,-.231766,.08003,-.045557,-.058427,.134683,-.486732,.156507,.873879,.059699,.39639,.711689,-.099974,2.092186,.126996,.302457,-.341381,-.04105,-.055004,.596878,-.142448,-.006892,-.139792,.109842,-.13223,-.081712,.04297,2.187833,-.374225,-.311985,-.113358,-.275675,-.20075,-.087161,-.096738,-.003129,-.498861,-.003492,-.175371,1.92501,-.502906,-.040985,1.240477,.110939,.054136,.567205,.165665,.578853,-.18471,-.455866,-.048817,-.034051,-.251798,-.440566,.099975,3.216924,.101774,.199052,2.576115,-.516459,.007145,.150178,2.091149,-.278642,.32396,.176327,-.256153,3.293525,-.160706,.111339,.044163,3.251916,-.07273,.116019,-.063557,-.136749,1.041411,0,.116573,-.129818,-.360531,-.120512,.177139,-.060116,.367367,-.155302,.053174,-.003988,.054208,.071835,-.186022,-.02231,2.813037,.030787,-.052685,-.088178,-.188619,-.069974,.190422,.089664,.024092,-.270328,.011325,-.44529,-.349623,-.12885,-.185882,-.015241,2.714293,.427059,.069169,.13385,-.151007,-.132028,.045213,0,-.178183,1.206892,.096785,-.368558,-8e-6,-.22182,-.86043,.041926,-.05517,-.008372,-.033431,1.981851,-.499836,-.033412,-.098238,-.020909,.063136,-.057715,-.454956,-.069515,-.03106,-.083608,-.340471,.097011,1.916878,.053674,-.47651,-.230781,2.348964,-.027813,-.235281,.072342,.202572,-.119675,.079676,-.521644,-.286103,.113915,-.322867,.004488,.092638,-.032147,-.681035,.204818,0,.187375,-.026191,.015041,-.140605,.00275,.096857,.005218,-.216328,2.065722,-.045305,-.092777,-.052487,.080365,.043678,-.066631,.1684,0,.129897,.052364,3.002207,.09061,.037712,.312978,-.211076,.034836,.165957,-.037676,-.011746,-.174169,-.193179,-.030774,-.04791,.036044,-.288226,.390262,-.061503,.069897,-.041175,-.104562,-.087791,-.146715,.667958,-.360493,-.180901,-.304738,.237903,.189782,-.088613,-.460546,3.732066,-.04944,.02249,-.259434,-.009271,-.392853,.999447,-.089045,.101661,-.236411,-.184838,-.030105,-.359737,.113111,.144349,-.344076,-.057242,.105186,-.128525,-.149394,.505655,-.428694,-.024507,-.043072,-.036971,-.022943,.115115,-.053151,-.163455,.028864,.068596,-.009492,.032091,3.884891,-.062665,-.024621,-.027207,-.05352,.009538,-.041266,-.123251,-.2409,-.046837,-.258171,-.049477,.24704,-.317982,-.244836,-.199767,.220479,-.679487,3.555733,1.127378,0,-.228254,.188059,-.103737,-.715967,-.144397,-.114574,.31399,.084547,.269688,-.253605,-.006971,-.248966,-.208472,-.161445,-.03104,1.767435,2.434239,.179589,.361247,-.35398,1.270466,.184894,.1038,-.272303,.135904,.394687,-.040985,.046752,.349705,-.075213,.656667,-.074498,2.794172,-.021157,.224049,-.369892,.03267,-.353713,-.44572,.189437,-.062164,-.086668,-.345149,2.696922,-.02403,0,-.323099,.080285,.190918,-.251743,-.492631,-.131754,.036424,.022566,-.01671,.013078,.159895,.121534,-.238995,.05024,.902336,-.129469,.156436,0,233e-6,-.230596,-.031805,-.179134,-.402899,-.031585,-.113217,-.079463,0,-.011087,.080086,0,-.026868,.054868,.104062,-.116523,.034086,-.574911,1.38314,.066919,.012428,-.5426,.11265,-.439389,-.285747,.173377,-.15309,-.20428,-.142588,-.185555,-.072314,-.112448,-.088953,.039914,-.326078,-.063431,.322765,-.217577,-.063163,.001852,-.30872,-.265321,-.039014,-1.703539,.792516,-.01136,1.241655,0,-.114271,-.71676,-.038181,.251338,.007817,-.366537,-.357699,.160392,.060089,-.016204,-1.032171,-.089087,.023289,-.048508,-.499133,2.368857,3.308969,-.161768,-.08748,-.002654,.128844,.011059,.144697,.133291,-.150436,.216779,-.018651,-.296081,.016052,.059711,.041401,-.096873,-.16183,.137316,.010516,-.083645,1.510651,-.379143,-.273876,.095344,-.155288,.760861,.009016,.115738,-.110866,0,2.215067,-.378291,1.948101,.00377,.010164,.059969,-.005191,-.221161,.178565,1.200919,2.26765,.018098,0,.004011,.082001,.092304,-.067505,-.085514,.183851,.064123,.028164,-.185921,-.004017,-.072998,.1073,-.031055,-.102896,.189995,.002306,.188031,-.227963,-.394818,-.044792,-.132502,-.149885,-.028703,-.151696,-.163187,-.205406,.308601,.043737,.031682,-.040985,-.130396,-.296952,-.123728,-.027031,2.473447,-.086778,0,-.409327,-.557902,-.143691,-.4257,1.421222,-.073294,-.272008,.063323,-.03695,-.071233,-.098427,2.411877,.008955,-.121775,.076509,-.38006,-.087426,4.414267,-.193267,1.766924,.012325,-.135021,.047981,-.089581,-.158149,0,-.162196,.169317,-.313877,-.08086,-.49962,-.025906,.104156,-.072025,.044612,-.432727,2.069031,-.064988,-.200407,.001318,.039035,-.202524,.047139,-.287113,.093571,1.424789,.016055,.124177,.41775,-.04284,.631334,.193132,.032691,.613324,-.157094,.014913,.010913,.154364,-.023862,-.041158,.066429,-.0244,.240919,-.04627,-.044663,-.076458,0,.109145,1.945182,1.428369,.100087,-.021613,.20461,-.131428,.020322,-.282724,-.033057,.171353,.068423,-.303311,-.0681,-.225023,-.162931,-.158786,-.179482,-.307802,-.328457,-.067309,-.238678,-.176202,-.012894,-.360618,.111916,-.185386,.073645,-.141809,-.200392,.008839,-.314714,-.016283,-.143535,-.043762,-.048947,-.58327]]},finger:{bias:[1.892766,-1.892766],weights:[[.284451,.458036,-.377003,.002087,.272066,.51347,-.845193,.059406,.418627,-.913286,.016988,-.143846,1.370776,1.033415,.267875,0,-.381187,.357598,-.759695,.387718,.283372,.482562,-.886493,-.781842,-.024931,-.441739,-.052473,.155167,.333868,-.044465,.107059,-.088115,-.037415,-.356583,1.090301,1.720009,.439315,-.566591,.05378,.243638,.459988,-.01873,.147771,.16378,.095935,-.270739,.48202,-.046701,.052675,-1.954008,.002932,1.040626,.24197,-.276038,.161591,.124052,.341202,0,-.573048,.319369,-.166783,.58904,.450383,.246985,-.719988,.549397,-.79925,.678585,.288114,.003691,-.13367,.089982,.163754,.473903,.205703,-.068406,-.174398,.094166,-.035752,-.667365,.504856,.386727,.144993,1.528458,.074833,.001001,-.171224,-.360827,.253716,.115337,.223342,-.989003,-.452149,.106218,-.072199,.087969,-.119447,.030374,-1.128514,-.176946,.030538,-.042751,.021998,.270234,.131603,.439305,.71204,.471804,.123511,-.034974,-.081665,0,-.087755,.171043,-.103204,.253171,.050809,-.413197,.013926,.306913,.249818,-.00544,.414701,.244033,.062229,.091391,.013235,.039733,-.045179,.249661,.483557,-.002301,-.216969,-.110825,.292694,-.314579,1.17469,.173074,-.159037,-.328952,.286803,-1.315494,-.480123,.410177,.012541,-.041321,-.215699,-.31166,-.622915,.306141,.872539,-.244209,-.220898,-.451501,-.390608,.027325,.741018,0,-1.441616,.20191,-.229828,.071644,-.034268,-.117111,-.137622,.311879,-.107176,.981465,-.118756,-.629783,.15895,-.717747,.502513,.055644,-.265952,.160752,.161207,.071423,-.062614,.133817,-.650501,.641944,-.093365,.086397,.079513,.207563,-.134355,-.05518,.12108,.126556,-.299544,0,.250772,-1.346394,.430567,-.534883,.536158,.069064,-.195188,-.449002,.114398,-.619357,-.288815,.221601,-.887132,.077262,.164409,.199476,-1.748156,-.05934,-.585055,.150109,-.005058,.188177,.299021,-.070301,.164152,-2.04604,.065088,-.425098,.336905,-.087868,.20545,-.555293,.548248,-.543134,-.871441,.036647,-.21499,1.087099,.057975,-.021894,.696038,.057292,-.569258,-.07489,-.979952,.431687,.174947,.113767,.130653,.176091,-.397825,.247245,-.045907,-.307225,-.3271,-1.329669,-.736025,.273989,-.759712,-1.647236,1.423594,.218344,-.084373,.347545,-.549038,.117097,.030057,.827508,-.09105,.148148,.231285,-.318559,-.110695,-.648677,.122098,-.05083,-.681162,0,.052131,-.96581,-.603196,.055264,.681649,.021913,-1.284015,.047082,-.007932,.005725,.489075,.212763,-.531571,.018744,.065266,1.023675,.019421,-.087212,-.677046,.336809,-.219896,-.653803,-.421517,.013455,-.065138,.802671,-.029926,1.392779,.544989,.013253,-.008693,-1.397032,-.461502,.15614,-.812332,.143961,.121836,0,.243735,.429106,-.178581,.063099,.302077,.701991,.043929,-.75553,-.058374,-.029161,.56614,.565488,-.099056,.090387,1.131536,-.052069,-.608112,-.361224,.550672,-.0853,-.369322,.182305,-.399799,.474868,-.202424,.603789,.170309,.18552,.812271,-.018091,-1.129841,.609654,-.565566,.348412,-.64212,.255114,-.0793,-.058918,-.082428,-.18073,-1.092711,-.211256,.501128,.09057,0,.141934,.343361,-1.679371,-.157832,.118767,-5.866417,.054002,-.2493,-.125319,-.932578,.14394,.101582,-.38594,.052912,.264204,.149639,0,-.735602,-.091679,-.395626,-.600732,.129749,-.397663,.083187,.043069,-.084593,-.081183,-.073081,-.052276,.372108,.044775,.043174,.225116,-.819255,.125502,.201091,.034377,.011433,.124337,.07964,-.071699,-.466224,.01836,.13026,-.863404,.07783,.399439,.118579,-.287811,-.037822,-.143204,.42164,.531249,.019709,.507936,.991363,.047286,.530214,.563803,.140793,.414018,-.069244,.138803,-.106015,.615521,-.255379,.434991,.434613,.268567,-.048411,.805349,-.121857,.178356,.558604,.131135,.381867,-.148791,.116169,.107157,1.590421,-.988168,-.307119,.158785,-.545631,.129025,-1.282029,-.026152,.052631,-.071586,.02911,-.695198,-.26256,-.349243,.01778,-.040002,1.124498,-1.643043,-.668086,.154833,-.86751,-.055726,-.282198,0,-.405054,-.679831,.412034,-.778588,.149765,.056013,-.299195,.030374,.062186,.056506,-.037306,.116574,-.21235,-.183926,-.317891,1.007366,11e-5,-.857832,-.006736,-.871536,-.759189,-.954273,-.013326,-.153494,.241201,.147252,.057292,-.072199,-.266167,.376456,.066363,.523116,-2.01054,-.140943,-.100244,-.456818,.186129,-.305335,-.607084,-.374939,-.280207,.42829,-.667012,-.080327,.131011,0,.216676,-.982936,.224665,-.376077,1.270926,-.302832,.535999,.158094,.208753,134e-6,.160762,-.201628,-.017948,.176964,-.121023,-2.333603,-.292475,0,-.151362,-.358858,-.672943,-.278044,-.18196,.457695,-.098355,-.366853,0,.089253,.019042,0,-.501769,-.310103,-1.010503,-.410266,.368215,.100206,-2.026205,-.076973,-.198364,-.677059,.836627,-.101639,.090429,.050346,-.158134,.204003,.132834,.048534,.160291,.137488,.344477,.448663,-.103483,.290938,.6768,.347056,-.061757,.172253,.203257,-.776956,-.082298,.446487,1.428762,.110544,-.11637,0,-.349013,.567231,.136177,.204548,-.753926,.440592,.356589,.041316,1.157344,-.504852,.358455,.054151,.105383,.459645,-.734744,-.774795,-.419111,.088398,-.646791,.482664,-.974482,-.376266,-.573063,.10884,-1.368481,.513748,.062489,.772328,.054425,.070564,-.610422,.509147,.25546,-.187305,-.25348,.200291,.009336,-.024143,-.6907,.112232,.089801,-.083439,-.054359,.101344,-.602577,0,-.547115,.121141,-.360469,-.346136,-.005107,-.583391,.720685,.202248,-.183888,-.60617,.192823,-.198104,0,.011804,.036601,-.037215,-.031534,-.180729,.044887,-.075171,.083513,.307541,-.765769,-.016968,.10422,.345956,-.679517,.451189,-.213067,.0751,.185605,-.315945,-.240694,-.886157,1.018072,.361991,.092649,-.210783,.202689,-1.022355,-.437406,.07873,.057292,.070124,.302043,.34082,-.646421,.04198,.028594,0,-.084703,-.861968,.059187,.199217,.546626,-.100896,.550578,.453912,.011583,.668822,-.106022,.643253,.022863,.037614,-.031845,-.021849,.37138,-.232161,-.066731,.544235,.016134,-.193978,.072665,-.108889,-.107601,0,-.176043,-.83532,-1.31234,.190237,-.531988,.05754,.058634,-.136605,.335923,.326271,-.245835,-.432484,.339935,.296771,-.176512,.279575,.089792,-.683881,-.418299,.877389,.017439,-.491275,.221113,-.11202,.193799,.480084,.162752,.723222,-.540399,.051881,-.623489,-.391887,.313934,.235954,.232781,.13184,-.307998,-.026621,.841637,.147311,0,1.018177,.17495,-.239097,-.622147,.04676,.31916,.112478,.173816,.056328,-.192001,-.211193,.096174,-.071136,-.015161,-.081824,-.115786,.017813,-.019993,.129585,-.163308,-.128129,-.147989,-.096173,-.157073,-1.027644,-.065881,.044135,.106375,-.009962,-.46654,.199932,.062112,-.008152,.086464,-.025184,-.006642,1.649893],[-.284451,-.458036,.377003,-.002087,-.272066,-.51347,.845193,-.059406,-.418627,.913286,-.016988,.143846,-1.370776,-1.033415,-.267875,0,.381187,-.357598,.759695,-.387718,-.283372,-.482562,.886493,.781842,.024931,.441739,.052473,-.155167,-.333868,.044465,-.107059,.088115,.037415,.356583,-1.090301,-1.720009,-.439315,.566591,-.05378,-.243638,-.459988,.01873,-.147771,-.16378,-.095935,.270739,-.48202,.046701,-.052675,1.954008,-.002932,-1.040626,-.24197,.276038,-.161591,-.124052,-.341202,0,.573048,-.319369,.166783,-.58904,-.450383,-.246985,.719988,-.549397,.79925,-.678585,-.288114,-.003691,.13367,-.089982,-.163754,-.473903,-.205703,.068406,.174398,-.094166,.035752,.667365,-.504856,-.386727,-.144993,-1.528458,-.074833,-.001001,.171224,.360827,-.253716,-.115337,-.223342,.989003,.452149,-.106218,.072199,-.087969,.119447,-.030374,1.128514,.176946,-.030538,.042751,-.021998,-.270234,-.131603,-.439305,-.71204,-.471804,-.123511,.034974,.081665,0,.087755,-.171043,.103204,-.253171,-.050809,.413197,-.013926,-.306913,-.249818,.00544,-.414701,-.244033,-.062229,-.091391,-.013235,-.039733,.045179,-.249661,-.483557,.002301,.216969,.110825,-.292694,.314579,-1.17469,-.173074,.159037,.328952,-.286803,1.315494,.480123,-.410177,-.012541,.041321,.215699,.31166,.622915,-.306141,-.872539,.244209,.220898,.451501,.390608,-.027325,-.741018,0,1.441616,-.20191,.229828,-.071644,.034268,.117111,.137622,-.311879,.107176,-.981465,.118756,.629783,-.15895,.717747,-.502513,-.055644,.265952,-.160752,-.161207,-.071423,.062614,-.133817,.650501,-.641944,.093365,-.086397,-.079513,-.207563,.134355,.05518,-.12108,-.126556,.299544,0,-.250772,1.346394,-.430567,.534883,-.536158,-.069064,.195188,.449002,-.114398,.619357,.288815,-.221601,.887132,-.077262,-.164409,-.199476,1.748156,.05934,.585055,-.150109,.005058,-.188177,-.299021,.070301,-.164152,2.04604,-.065088,.425098,-.336905,.087868,-.20545,.555293,-.548248,.543134,.871441,-.036647,.21499,-1.087099,-.057975,.021894,-.696038,-.057292,.569258,.07489,.979952,-.431687,-.174947,-.113767,-.130653,-.176091,.397825,-.247245,.045907,.307225,.3271,1.329669,.736025,-.273989,.759712,1.647236,-1.423594,-.218344,.084373,-.347545,.549038,-.117097,-.030057,-.827508,.09105,-.148148,-.231285,.318559,.110695,.648677,-.122098,.05083,.681162,0,-.052131,.96581,.603196,-.055264,-.681649,-.021913,1.284015,-.047082,.007932,-.005725,-.489075,-.212763,.531571,-.018744,-.065266,-1.023675,-.019421,.087212,.677046,-.336809,.219896,.653803,.421517,-.013455,.065138,-.802671,.029926,-1.392779,-.544989,-.013253,.008693,1.397032,.461502,-.15614,.812332,-.143961,-.121836,0,-.243735,-.429106,.178581,-.063099,-.302077,-.701991,-.043929,.75553,.058374,.029161,-.56614,-.565488,.099056,-.090387,-1.131536,.052069,.608112,.361224,-.550672,.0853,.369322,-.182305,.399799,-.474868,.202424,-.603789,-.170309,-.18552,-.812271,.018091,1.129841,-.609654,.565566,-.348412,.64212,-.255114,.0793,.058918,.082428,.18073,1.092711,.211256,-.501128,-.09057,0,-.141934,-.343361,1.679371,.157832,-.118767,5.866417,-.054002,.2493,.125319,.932578,-.14394,-.101582,.38594,-.052912,-.264204,-.149639,0,.735602,.091679,.395626,.600732,-.129749,.397663,-.083187,-.043069,.084593,.081183,.073081,.052276,-.372108,-.044775,-.043174,-.225116,.819255,-.125502,-.201091,-.034377,-.011433,-.124337,-.07964,.071699,.466224,-.01836,-.13026,.863404,-.07783,-.399439,-.118579,.287811,.037822,.143204,-.42164,-.531249,-.019709,-.507936,-.991363,-.047286,-.530214,-.563803,-.140793,-.414018,.069244,-.138803,.106015,-.615521,.255379,-.434991,-.434613,-.268567,.048411,-.805349,.121857,-.178356,-.558604,-.131135,-.381867,.148791,-.116169,-.107157,-1.590421,.988168,.307119,-.158785,.545631,-.129025,1.282029,.026152,-.052631,.071586,-.02911,.695198,.26256,.349243,-.01778,.040002,-1.124498,1.643043,.668086,-.154833,.86751,.055726,.282198,0,.405054,.679831,-.412034,.778588,-.149765,-.056013,.299195,-.030374,-.062186,-.056506,.037306,-.116574,.21235,.183926,.317891,-1.007366,-11e-5,.857832,.006736,.871536,.759189,.954273,.013326,.153494,-.241201,-.147252,-.057292,.072199,.266167,-.376456,-.066363,-.523116,2.01054,.140943,.100244,.456818,-.186129,.305335,.607084,.374939,.280207,-.42829,.667012,.080327,-.131011,0,-.216676,.982936,-.224665,.376077,-1.270926,.302832,-.535999,-.158094,-.208753,-134e-6,-.160762,.201628,.017948,-.176964,.121023,2.333603,.292475,0,.151362,.358858,.672943,.278044,.18196,-.457695,.098355,.366853,0,-.089253,-.019042,0,.501769,.310103,1.010503,.410266,-.368215,-.100206,2.026205,.076973,.198364,.677059,-.836627,.101639,-.090429,-.050346,.158134,-.204003,-.132834,-.048534,-.160291,-.137488,-.344477,-.448663,.103483,-.290938,-.6768,-.347056,.061757,-.172253,-.203257,.776956,.082298,-.446487,-1.428762,-.110544,.11637,0,.349013,-.567231,-.136177,-.204548,.753926,-.440592,-.356589,-.041316,-1.157344,.504852,-.358455,-.054151,-.105383,-.459645,.734744,.774795,.419111,-.088398,.646791,-.482664,.974482,.376266,.573063,-.10884,1.368481,-.513748,-.062489,-.772328,-.054425,-.070564,.610422,-.509147,-.25546,.187305,.25348,-.200291,-.009336,.024143,.6907,-.112232,-.089801,.083439,.054359,-.101344,.602577,0,.547115,-.121141,.360469,.346136,.005107,.583391,-.720685,-.202248,.183888,.60617,-.192823,.198104,0,-.011804,-.036601,.037215,.031534,.180729,-.044887,.075171,-.083513,-.307541,.765769,.016968,-.10422,-.345956,.679517,-.451189,.213067,-.0751,-.185605,.315945,.240694,.886157,-1.018072,-.361991,-.092649,.210783,-.202689,1.022355,.437406,-.07873,-.057292,-.070124,-.302043,-.34082,.646421,-.04198,-.028594,0,.084703,.861968,-.059187,-.199217,-.546626,.100896,-.550578,-.453912,-.011583,-.668822,.106022,-.643253,-.022863,-.037614,.031845,.021849,-.37138,.232161,.066731,-.544235,-.016134,.193978,-.072665,.108889,.107601,0,.176043,.83532,1.31234,-.190237,.531988,-.05754,-.058634,.136605,-.335923,-.326271,.245835,.432484,-.339935,-.296771,.176512,-.279575,-.089792,.683881,.418299,-.877389,-.017439,.491275,-.221113,.11202,-.193799,-.480084,-.162752,-.723222,.540399,-.051881,.623489,.391887,-.313934,-.235954,-.232781,-.13184,.307998,.026621,-.841637,-.147311,0,-1.018177,-.17495,.239097,.622147,-.04676,-.31916,-.112478,-.173816,-.056328,.192001,.211193,-.096174,.071136,.015161,.081824,.115786,-.017813,.019993,-.129585,.163308,.128129,.147989,.096173,.157073,1.027644,.065881,-.044135,-.106375,.009962,.46654,-.199932,-.062112,.008152,-.086464,.025184,.006642,-1.649893]]},kind:{bias:[-.864645,-.800977,-.517016,2.182638],weights:[[-1.886883,-.705772,.89196,-.02299,-.448044,1.005304,.859375,.039499,.315801,.148921,.523416,.402148,1.042411,-.263575,-.727086,-.401188,.643841,-.127296,.465619,.275975,.767478,-1.458412,.039461,-.723714,.480324,.371566,.055869,1.844503,-.465184,.126628,.011637,-.619468,.347881,-.705825,-.059857,-.050445,-.004123,.259367,-.137887,-.892233,1.048357,-.219074,1.047828,-1.067498,.468025,-.023808,-.342027,1.152584,1.042492,-.377007,.654161,-.185707,-.014876,.010566,-.708358,.27762,-.281763,0,-.256245,1.125685,-1.013417,-1.414727,-.300073,.863739,-.695744,.205588,-.423566,-.645017,-1.016519,-.137114,-.471009,-.16344,.098229,-.795219,-.219205,-.14514,.017844,-.164852,.495615,-.267046,-.161358,.119957,.167972,-.014397,.960839,-.172385,.948436,-.192479,.263581,.054385,.284547,-.639464,-.517629,-.024372,-.03093,.469743,.087383,1.203583,.262266,1.204603,-.498046,-1.198008,1.054868,.73618,-.121251,1.712116,.740408,-.12747,.467389,-.152465,-.399561,-.284433,.355625,1.134662,-.060484,.205841,-.023207,-.322271,-.045418,-1.042193,-.426857,-.189517,-.098776,.665453,1.628778,-1.046824,.063143,-.583896,-.326592,.685122,-.636581,-.04393,.058389,-.333692,-.46749,-1.013051,.317153,-.346326,2.305042,.002443,-.276743,-.072233,1.053367,.421901,1.080109,-1.164196,.7568,-.698206,-.065568,-.3222,1.356553,.080416,.799631,-.118381,.309454,-.900978,-.43006,-.247935,.243497,1.505925,.433094,-.515295,-.061709,-.424013,-.315251,-.107199,.228583,.997574,-.015591,-.105463,-.269911,-.389721,.068844,.5798,-.791795,-.063041,-.364916,.11086,-.504399,-.237728,-.457681,-.298148,-.356295,.494091,-.02919,.003105,.421118,1.397761,.36799,1.166805,-.463824,-.171666,2.375669,-.12092,-.335508,-.509374,-.240282,.544459,-.444477,-.155753,.736359,-.643271,-.170752,-.586261,.098861,-.311812,1.211168,-.904394,-1.881642,-.327751,-.264922,-.377832,-1.04417,.662375,1.605597,-.343593,.286019,.024962,-.306711,-1.355505,-.927692,-.35146,-.686186,-.03319,-.118149,1.59763,.355884,.322051,-.718362,-.603581,.816503,-.0509,.061535,.031033,-.631921,.474871,.721369,.99736,-.665837,1.328164,1.646508,.470612,.246493,-.379734,-.573826,-.326139,.716152,-.075904,-.465925,-1.03511,-.286683,1.221912,-.653018,-.154436,1.4754,.140311,-.091142,-.256038,.710771,3.185821,.567396,-.396388,.258215,.155456,.54135,-.260792,.058092,-.097066,.44983,.344606,-1.024849,.706787,.908554,-.509815,.50249,-.885045,.335328,-1.006482,.064986,-.011391,.165051,-.592016,-.449248,.020031,-.201705,-.897861,-.640883,.058003,-.663985,1.083235,.047633,-.038749,.04219,-.230784,.250881,.221345,-.657879,-.880652,.029369,-.127736,-.258009,-.31204,-.225165,1.049015,-.234966,-.318842,.218155,.179064,-.263582,-.486413,-.708184,-.578075,-.008946,3.170893,-.893137,-.101376,-.059818,.082093,-.108795,-.083904,.700108,.223321,-.987987,-.885271,-.013298,.189236,.21037,.362126,.03282,-.214429,.058044,-.338242,-.337763,-1.113095,.37079,-1.115254,1.191676,-.108902,.749512,1.364259,.472652,.0221,-.377003,.92525,-.250584,.404309,.079257,-.643813,.529535,.516025,.437874,1.391893,-.205301,-.088015,-.725969,-.765901,.189379,1.037242,-1.093468,-.069455,-.690264,-.272481,.834527,.309479,-.099705,-.193993,-.27882,-.586626,3.861746,-.132357,-.160444,.268403,-.036734,.14307,.278233,-1.393722,-.291184,.301745,-.19128,-.343009,-.620568,-.638003,-.272895,-.003742,-.875894,.134603,-.646185,.368664,.407259,1.363006,-.295378,.14496,-1.108745,-.246391,-.781148,.21512,.821006,.501465,-.031958,-1.752941,-.278794,.219272,.054755,.974603,-.511591,.615482,-.328097,-.261888,.28884,.789264,-.20441,-585e-6,-.146296,1.858061,1.424812,-.247594,.008154,.230921,-.408858,.079039,.725602,.530939,.854093,.127413,.389674,-.004879,.310007,1.015637,-.103733,.417929,-.229558,.235582,-1.767579,.396679,.12391,-1.094119,.388959,-.288495,-.80961,.501746,-.961544,-.489788,-.097688,-.984268,-2.105874,-1.051022,.301327,-.045892,.391177,-.317238,.313558,-.062571,-.200124,.182075,-.751141,-.356652,.671802,-.080893,-.288042,-.016819,-.257403,.402477,.017078,1.167503,-.579207,.29754,0,.149994,.712805,.826509,-.222341,.199414,-1.156998,-.294089,.094478,-.073873,-.549832,.829646,-.091451,-1.29023,.277489,.579492,.228859,-.084507,-.786453,.556051,-1.035515,-.491656,.156162,-.26448,.759374,1.311975,-.403576,.274934,-.835139,.314709,.343082,.079939,.626862,.192773,-.566561,-.688352,.375511,.486237,.184361,-.578362,1.388508,-.45542,-1.648673,-.794642,-.627239,-.241655,.425454,0,-.147954,-.486243,.041764,-.373948,-.553681,-.227851,.201898,.003943,-.320949,.158142,.130571,-.323536,.874373,-.06893,-.082998,.228586,-.049483,.71891,-.73265,.040917,.599751,.224419,.698874,.339006,.176547,.261049,-.290204,-.196416,-.294715,.275008,-.933604,.179154,.132009,.432398,-.198925,-.54191,.090239,-.512247,-.873636,-.058181,-.919438,-.230589,-.484323,-.373496,-.20401,-.351302,-.507332,-.121908,-.131145,-.490999,.035307,-.467281,.774202,-.112252,1.16519,-432e-6,-.052439,.81278,.33794,-.668043,3.131146,-.193585,.430016,.415729,-1.098142,.554573,1.109316,.087373,-.471275,-.079952,.193322,.577979,-.150715,-.288047,-.313012,-.360135,-.521691,2.696482,.893324,.568376,-.257452,-.612073,-.968199,-.232341,-1.238163,.100933,-.565199,.186341,-.775958,.737554,.035506,-.306752,.12227,-.158124,-.412708,.207977,.025329,.096176,.265494,-.32173,.734332,1.26209,2.858431,.511039,-.325116,.382792,-1.266845,-.116583,-.191938,.420072,.075068,-.233208,-.284457,.102275,-.303107,-.230496,-.095083,.431822,-.824986,.183477,-.115568,1.034857,.046214,.542569,.241898,-.329723,.653417,-.648579,-.358401,-.939963,-.435335,.572913,.187014,-.032901,.917504,1.434387,.145876,.789124,.057453,-.676165,.886754,.440894,.328583,-.223809,-.67179,-.418557,1.746811,-.683877,.044085,.185322,.892478,-.571975,-1.293359,1.290665,.573461,.707687,-.532302,.438118,-.170701,-.273832,-.122834,-1.051127,-.101411,1.403987,.070104,1.009714,.844697,.234436,-.347949,.604956,-.697174,-.579951,.029547,-.491956,.919498,.813151,-.712524,-1.383562,.298776,-.773989,-.023021,.623741,.511231,.189602,-.47994,.491119,-.002361,.65352,-.290311,-.830782,1.12462,1.220825,-.049278,-.43673,1.622777,-.93799,-.329518,.510603,-.290281,.12335,-.715437,.368755,.006678,.561261,1.344223,.572891,-.20946,-.536084,.402214,-.564647,-.887715,.122408,1.543856,-.097674,.258342,.042312,-.090553,-.214549,.159205,.383893,-.256455,-.023188,-.357774,.406393,-.405631,1.13006,-.962372,-.283278,-.711889,-.384279,-.505752,-.333814,.86919,.24296,-.413487,.209553,-.337017,-.306601,-.297031,-1.003033,-.582801,-.479323,.643434,.078215,-.506641,.001887,-.199101,.306726,-2.125149,.068538,-.260138,.157578,-.118618,.22539],[.837267,-.040706,-.822379,-.024651,1.006205,.630962,-.762809,.641011,-.653255,-.921257,77e-6,.154975,.108702,-.005261,-.200098,.038603,.645861,-.075271,-.692575,-.020304,-.846018,.921774,-.052442,.45308,.158636,-.550441,-.808164,-1.13389,.118802,.397694,.1079,-.145554,-.029049,.459901,.771081,-.347547,-.616925,-.752017,-.081136,1.105056,.090828,-.311123,.907549,.790049,.146986,-.032061,-.455201,1.289069,-.422875,.554813,.663185,-.00481,.439027,-.559203,.788728,-.615097,-.063998,0,-.059688,-.994455,.77339,2.414892,.538252,.492619,-.322487,-.363276,.165217,-.332792,1.783025,.400344,.286309,.037549,-.006572,.733765,-.022787,-.76892,.290646,-.183472,-.703413,.720814,-.042279,-.942989,.162357,.479089,-1.561002,-.032891,-.063782,.621961,-.863552,-.025941,.301843,.111508,.043211,.134144,.521351,.093367,-.829935,-1.396892,-.783362,-.615855,-.429918,-.04619,-.885286,.533335,-.198092,.215357,.728069,.54031,.301285,-.042412,-.527361,.185938,.085377,-.371546,-.115944,.482832,-.051861,-.331733,-.516066,1.731387,.039106,-.161549,-.30089,.006536,.852655,.571155,-.146154,-.445939,.627813,-.088536,.504991,.90055,.82178,.372183,-.483438,1.532088,-.53693,-.20312,-1.146675,.569769,.380765,-.436504,.662002,-.028282,1.624149,.683687,-.46338,.225412,-.084384,-.350016,1.132466,-.778467,-.142319,.137929,-.672415,-.133573,-.516527,.18723,-.949874,-1.489537,-.252298,1.241476,-.182602,-.684706,-.076654,.07159,.397871,.129968,-.093065,-.549544,-.29843,-.405726,1.073645,.281847,1.350156,.710945,1.094286,-.354168,.206913,.30933,.028434,-.557004,-.072247,-.510632,.441976,-.001238,-.40623,-.270701,.109902,.99006,.616303,-.08403,2.552827,-.048777,-.290025,.453173,-.644759,-.211146,-.054061,.378494,.181564,.04307,.34025,1.201619,.897339,-.025779,-.368177,.567689,.954437,-.120491,.3558,.655129,-.309485,-.818481,-.002754,.236748,-.387102,-1.260986,.131468,1.756306,.71109,.075337,1.06956,.238589,.804671,-.55821,.905012,-.290424,-.093175,-1.399952,-.694844,-.448572,.076788,-.169461,.222332,.314659,-.082099,-1.036369,.89451,-.249496,-1.657496,-.450211,-.545224,.375828,.054769,-.80128,1.007801,-.38472,.216673,-.945352,-.098666,.183449,-.222635,.406887,1.048161,.477616,.587377,.203602,.85077,-1.986662,.123082,.60139,-.752449,.160868,-.472368,.095687,-.125154,1.091205,.102721,.077028,1.841608,-.243359,-.821871,-.709094,-.082492,-.149096,.581519,-.288641,-.333319,-.154014,.37919,-.610473,-.152281,-.014068,-.072688,.823617,-.905343,-.271729,.074747,.255281,-.086764,-.187013,.143613,-.075348,-.139455,-.222833,.20033,-.893827,.058235,.386697,-.016539,-.420201,-.368881,1.537282,-.233586,.526755,-.837529,-.099642,1.134759,.706273,.549835,-.532911,.219833,-1.268658,.796166,-.075524,-.3455,1.424766,.076812,-.539284,-.060699,-.589064,.492467,-.957204,-.025093,.420509,.215399,.149272,-.920564,.622239,-.208174,.501949,.143532,-.059578,-.215498,1.178942,-.674325,-.181042,-1.082826,.125116,-.325994,.070206,-.131334,-.1341,-.561858,.707288,.41792,.709118,.409157,.377251,-2.20411,.489733,.316991,-.172758,.737931,.601412,.110241,-.360565,-.668966,.348636,-.156521,.192603,-.267266,-.272885,.679583,-.015724,.167256,-.277994,-2.244456,-.099709,-.02206,.344891,-.400718,1.787889,-.516053,.988025,.454892,.243813,.165175,.27154,-.346086,.719273,-.306043,.479616,-.263335,-.014054,.582503,.180794,.246132,-1.159198,.312273,-.251612,1.752183,-.111981,-.127695,.189575,-.137647,.646586,-.02283,1.898913,-2.094124,-.095581,.193239,-.334342,-.256628,-.673454,.163838,-.121462,-.588656,-.163469,-.380136,-.581929,.096877,-1.301326,-1.260394,-1.383667,-.257648,-1.030879,.737038,-.196211,.535966,-.357697,.036656,-.436984,-.253314,.443744,-.228104,1.096226,-.05053,-.093221,-.010678,.015907,.784444,.262562,-.894181,-1.689825,-.511116,.808224,.099796,.214461,.320672,1.290892,-.126936,-.331556,3.077279,1.808611,-.00378,-.219864,-.499214,-.579962,.144391,-.050159,-1.01319,.908898,.841451,.199572,-.401385,-.435984,.680019,.325881,-.088408,-.11469,-.020959,-.685058,1.012783,.86406,0,.049272,-1.388691,-.802164,.346741,-.501112,.857488,-.002057,.583846,.129783,-.44592,.151905,-.338815,-.98724,.979836,-.805863,.261955,575e-6,.911299,-.43191,.503308,-.423603,.308479,-.165638,.688111,-.480452,.027833,-.243805,-.5527,.073328,.720185,-.206938,.395659,-.431447,.37283,1.097862,-.384696,-1.283017,.174141,.299796,.346201,-.547375,1.894073,.645075,1.032722,-.303763,-.474018,0,-.444072,.022041,.218392,-.51267,-.237357,-.095029,-.231553,-.274024,-.29645,-.038746,.463893,.314925,-.669255,-.088591,.419704,-.346783,.082548,-.383216,.184602,-.842345,-1.016734,-.07397,1.085408,-.666652,-.886123,.2751,.349556,-.47294,-.237818,-.395211,-.487641,.312282,.112791,-.601273,.477446,.550857,.164519,.562161,.211278,-.417227,.952028,.647025,-.589276,1.154791,.30415,.250624,.852466,.090315,-.298062,-.507926,.64976,.297225,-.27492,.084076,1.180025,-.434604,.00652,-.951443,.187997,-.810134,-2.036333,-.738732,.188863,.111557,-.992373,-.36951,.626539,.17441,-.074771,-.837869,-.251956,.174968,-.72185,.137422,-.312163,-.598985,-.136394,-1.873814,-.113694,-.517581,-.358459,1.215068,1.134678,.484335,.64474,.826293,.843261,.296335,.997544,-.755521,-.011622,-.199559,-.405192,.71505,-.41306,.212445,-.107609,.213013,-.771357,1.039817,.125423,1.870725,-2.036691,-1.433151,-.152242,.75736,1.628574,.10311,-.149482,-.18175,-.203445,-.028865,.701706,.660752,.555021,.395447,-.077239,-.54354,-.078565,.568461,-.146126,-1.327742,-.240802,-.494961,-.340091,-.468361,.762173,.98205,-.317204,1.719463,-.026822,-.802864,-.481083,-.106438,-.155552,1.133634,-.209209,-.699888,-.295173,.675064,.426777,-.100636,-.176808,-.219117,1.232503,3.02924,-1.606337,-.014065,.790933,-.304816,-.999465,-.564701,2.25952,-.780333,-.502212,-.616376,-.061427,.008522,-.565965,.285015,-.655019,-.035084,.109797,.984265,-.484936,-.124141,-.263539,.5999,.475714,1.716276,.288345,-1.243839,-.085059,.46277,-.81775,-.491348,.406106,.049061,-.328931,-.359234,-.2222,-.942225,1.240333,-.072602,-.365351,-1.247145,-.057259,.216713,.475858,.057712,-.232272,.202143,-.061432,-.415225,-.86196,-.661087,.534359,1.046675,-.69172,1.385408,.472091,.183079,.273434,-.348722,-1.001533,.081994,-.086011,.916813,.083,.514041,.535441,-.306756,-.932458,-.071727,-.383079,.818288,-.10996,1.017933,-.044558,.262195,.01107,.030101,.019487,-.375804,.982122,.913409,.761587,.707366,1.094986,-.336093,-.052467,-.492442,-.28491,-.328292,.040226,-.067311,-.629137,-.309119,-.457081,1.031907,-.402878,-.087407,-.379565,-.037106,-.542037,-.239561,-.013512,-.346129,1.480792,-.011907,1.825384,-.533514,.446721,.172071],[.319903,.036799,.490156,-.041484,-.851164,-1.170715,.528037,-.723265,.422292,1.673543,-.314735,-.73396,-.17876,.626832,-.503183,.225902,-.76962,-.18953,-.443922,.343803,-.244806,.545279,.566697,-.022526,.282158,-.085428,.650396,-.096012,-.054446,.307623,-.325017,.597346,.687855,.423766,-.939243,.847826,.325927,.287943,-.167293,-.480201,-.757499,1.133656,-1.413068,.850879,-.156175,.100045,.414284,-1.249553,-.374059,.630773,-.665965,.561607,.264992,.504701,.613077,.234994,-.069415,0,-.038472,.374684,.335115,-.509016,-.077457,-1.95202,.541144,.311555,.861114,1.100042,-.272106,-.164326,-.217016,.29734,-.043693,-.019637,-.141502,.766253,-.184976,.141137,-.359507,-.276765,.100796,-.318274,-.463497,-.345489,.496224,-.382799,-.957555,.121475,.58021,-.057681,-.709123,.743381,-.016588,-.488864,.079422,.382434,.242793,.475118,.054755,.155872,.384221,.441765,-.614447,-1.3336,.272728,-.728218,-.77802,-.644852,-.302398,.468325,-.637022,.20881,-.426286,-.640458,.72502,-.641261,.056473,.100372,.290905,-.365733,.765067,-.152304,.61176,-.821089,-1.037708,.414996,.185696,-.651645,-.190159,-.219881,.115567,.430313,-.422991,.372059,1.355864,-1.266423,.55819,.12016,-.701621,.077526,.536044,.651197,-.641225,.088651,-1.79119,.558011,.140832,.293937,.194799,-.245454,-1.587596,.296267,.229814,-.438883,-.409856,.196563,.690016,-.010204,.575209,.689563,-.647041,-.453504,.373376,.957654,.469007,.126478,-.464465,-.809861,.254276,-.32723,-.440957,1.230328,-.883523,-.375803,-.109599,-.372062,-.270682,.636281,.180093,-.376362,1.068395,.639619,.010368,.919454,-.24566,-.199615,-.066114,.159072,.001756,-1.270548,.034167,.160065,-4.043663,.400131,.620603,.331568,1.803903,-.334021,.015362,-.459298,.10686,1.115395,-.087284,-.422364,-.739328,.362581,-.481607,.273258,1.794397,-.01554,.168343,-.203223,.934392,-.674146,-1.017997,.207623,-.014152,1.559396,.007208,-.523157,-.100779,-.189269,-.124007,-.503125,-1.371281,.044045,-.889592,.170771,-.090248,2.212616,-.090275,.264895,-.89911,-.136396,-.274263,-.625583,.14416,-.359755,.14674,-.672424,.054442,.035827,.399781,-.240829,-.147161,.849098,-.61658,.658399,.171571,2.679267,.75198,.754415,.248578,-.440271,-1.639117,-.127911,-.082262,.466919,-.773515,-1.087714,-.543988,-.112338,-.391507,-.180389,-.262628,.286697,-.122449,-.417535,-.635151,-.092872,-.381889,-.726586,-.182482,.928276,-.02867,.523087,-.554068,1.62337,.033369,.269706,-.057383,1.381166,.754163,-.004702,-.498992,.135408,1.953805,-.159816,1.057932,-.824778,-.298029,.150864,.012499,.152304,-.44711,.497083,.515664,.851151,.13649,-.146533,.418938,.851272,-.094032,-1.890927,.473104,-.120135,.754241,-.030918,-.94555,.092921,.835751,1.206305,.065652,-1.300475,-.611748,.259203,.177158,-1.013057,1.314534,.221972,.651851,.291111,1.195896,2.558887,-.056676,.351868,.218,.319325,-.272566,-.69077,-.145773,.252503,.313206,-.311203,-.373632,.426128,-.365883,.15516,.437821,-1.05043,.275881,.060226,.514251,-.209868,.439814,-.025888,-.423555,-.344205,-.551483,-.503032,1.151172,.679085,-.063034,1.072164,-.293944,-.066176,-.468718,-.627274,2.708437,-.097134,.640344,-.703901,-.092754,-.431738,-.426199,-.553327,.014184,-.133131,-1.061489,.120645,.318389,1.648788,1.258569,-.463101,-.432475,1.02335,.218528,-.246514,.184057,.226757,1.336669,-.539761,.973067,.431519,1.380159,-.676536,-.206792,-.34163,-.146253,-.055697,-.029443,.356093,-.727401,-.215467,1.143445,-.245849,-.662549,-.628357,-.016408,.204148,1.524107,-.184992,-.205361,-.117518,.650669,-.440156,-.046421,-.446871,.92142,-.606658,.440097,.053535,-.123707,-.529143,.159001,1.817608,.038974,-.412541,-.127747,.157016,.063613,-.482932,-.46053,-.435967,.212019,-.223869,.084436,1.110179,.070256,.15347,-.656727,-.491073,1.563498,-.219068,1.181588,3.293872,.430059,-1.075666,1.23578,-.506638,.171818,-.294423,-.363497,2.305731,-.880607,.144454,-.178673,-.511469,.246402,1.328916,-.420166,-.502433,.930823,.105039,-.069568,.357491,-.005835,1.31564,-.489206,-.025926,.093099,.148038,-.165641,-.080813,-.374218,.337784,0,-.587707,1.327007,.39981,.003378,.531306,-.459783,.53233,.940384,-.071533,1.240931,.853215,.120592,2.148,-.663692,-.357377,-.021623,.156324,-.069183,.1255,.326105,1.340337,.475631,.599842,-.995686,.051817,.256798,1.076901,.184904,-.49645,-.720729,1.493718,-.337817,-.189189,.013081,-.523153,-.190317,.722973,-.655225,-.089031,-1.709405,1.377021,-.841712,.372609,-.219078,-.341586,-.231797,0,.632556,-.17367,-.168638,1.279451,1.02407,-.030412,-.068188,.050005,.699816,-.532924,-.574706,.385438,-.65212,.221548,.136675,.377669,-.090968,-.397754,.369611,1.183773,.843591,.481893,-1.836826,.092825,-.109485,-.372524,.119562,.558622,.346558,-.404152,1.756654,-.410625,-.104302,-.274204,-.20774,-.621441,-.497889,-.63534,1.307005,.410533,-.803547,-.220913,-.043999,-.611359,-.361946,.543337,-.464801,-.012537,-.299355,-.146188,-.112672,-.115055,.040383,.244332,1.217519,.49483,-.220549,.462415,-.148306,-.496114,-.732032,1.463362,-.404826,.296801,2.708518,-.105711,-.19535,.165837,2.564851,1.275919,.114222,-.780293,.960993,-.24105,.76299,1.09626,.865742,-.216228,-.39593,-.199599,-.157506,-.548819,.274447,-.08345,1.116541,-1.02716,-.479806,-.239167,.096508,-.398834,-.328358,-.211086,.842982,-.111449,1.159807,1.512089,-.046867,-.352058,1.390061,-.723816,-.25313,-1.933631,-.203532,.48889,-.328046,.494453,-.549828,.446063,.49806,.520712,-.316823,.124789,-.287973,-.470089,-.149896,-.378393,.044237,.13774,1.43508,.105173,.359054,-.078346,.082107,.382863,-.270166,1.056581,.186332,.234015,.307139,-.472756,.056852,-.058872,.10613,.265528,.664521,-1.222004,-.278722,.185344,.210492,.868957,-.778888,-.196117,.226972,-.052735,-.029976,-.97575,-.351722,.477709,-.777632,.182683,-.204387,.892911,-.517164,-1.073093,-.147012,-.279173,.492014,-.221077,-.43645,.28947,.051726,.48228,-.276975,1.579219,1.270434,.774897,-.579244,-.794754,-.954232,-1.464497,.958799,1.867357,-.132536,-.585279,-.517191,-.169293,-.099097,2.227056,.837662,.85691,.471935,.134104,.309097,.416801,1.399075,.268451,-.024313,-.504001,-.047047,.400022,-.511292,-.043628,-.159349,.410526,-.5307,1.493071,-.073754,-.966626,.938127,.039202,-.391715,-.345361,-.353897,.106864,-.671666,-.156464,.572297,-.171151,-.514719,.094312,.337195,-.326042,-.26795,-.100892,.353128,-.424888,.293517,-.435208,-.883581,-.103727,.172066,-.004765,-.130509,-.28456,-.003748,-.958088,.085731,-.286211,.518926,.278963,1.235627,.821684,-.328805,-.400554,1.106785,-.442105,.259103,.9457,.840493,-.004054,.181129,.029258,-.179327,.099733,1.144766,-.469277,-.014857,-.376752,1.909557,.866686,-1.294019,.302836,-.522987,.765453],[.729713,.709679,-.559738,.089125,.293004,-.465551,-.624602,.042756,-.084838,-.901208,-.208758,.176837,-.972354,-.357996,1.430367,.136683,-.520082,.392097,.670878,-.599474,.323346,-.008641,-.553716,.293159,-.921117,.264304,.1019,-.614601,.400828,-.831944,.20548,.167675,-1.006688,-.177843,.22802,-.449833,.295121,.204707,.386315,.267378,-.381687,-.603458,-.54231,-.573431,-.458836,-.044176,.382944,-1.1921,-.245558,-.808578,-.651381,-.37109,-.689143,.043936,-.693447,.102482,.415176,0,.354405,-.505914,-.095088,-.491149,-.160721,.595662,.477086,-.153867,-.602766,-.122234,-.494399,-.098905,.401716,-.17145,-.047964,.081092,.383493,.147807,-.123514,.207187,.567304,-.177002,.102841,1.141306,.133168,-.119203,.103939,.588074,.072901,-.550957,.01976,.029238,.122733,-.215424,.491007,.379092,-.569843,-.945544,.499759,-.281809,.466341,-.74462,.543743,.802434,.444865,.064084,.046615,-1.199254,-.690458,.232012,-.466276,-.273447,1.563945,-.110316,-.014717,-.122658,-.548591,-.047412,.018595,.553632,.270579,-.323461,-.377316,.503371,-.212094,.1491,-1.443726,.060672,-.102685,1.681481,-.111061,-.376706,.016024,-1.286933,-.457178,-.41055,-.404936,.747387,-.338414,.429286,-.456746,-.649738,-.640066,-.14246,-1.074144,-.482271,-.913069,-.077502,-.434252,.178856,-.044847,.91767,-.901423,.401784,-.887125,.419335,.772816,.837988,.256571,.070908,.131167,-.705951,.466245,-.272677,-.129065,.151065,-.077102,-.090869,-.161989,-.317681,-.14562,.982236,1.009298,-.434881,-.258966,-.485845,-.448762,-.275842,-.458687,-.392973,.117394,.304761,-.639148,.215533,.418173,-.902914,-.167125,.197749,.051225,-1.286133,-.479648,-.886317,-.186646,.095632,-.884832,-.230433,.00493,-.275367,-.918862,708e-6,.483176,.236558,-1.024783,-.515194,-.082214,-.192994,-.256872,-.024991,-.361383,.063448,-.867193,.463782,-.259221,-.074074,.419264,.830253,-.584846,-.100778,.115234,-.323373,.168036,.122356,.317381,.465392,-.259367,.297725,.68476,-1.083465,-.371304,-.202398,.901785,-.209083,-.031384,.234576,.760786,.274825,.683852,-.163947,-.783431,.398764,-.375413,-.406244,-.043454,-.056229,-.101051,.244736,.666218,.278321,-1.107374,-.197775,.077681,-.698805,-.36663,-2.159777,.627074,.187821,-.884444,-.490016,-.413973,-.414483,-.788026,-.111444,-.14649,-.092665,.88574,-.135934,.193646,-.121592,.189512,-.576604,.082601,-.328763,-.43487,.263158,.0958,.290633,-.391327,.511054,-.362779,-.328247,.234963,-.104301,-.486858,-.178677,-.152634,-.001262,.773385,-.061165,-.407579,.373542,-.468694,-.513739,.337161,.074899,-.198302,.153828,.335684,-.495594,-.058115,.923328,-.224095,-.112427,-.14439,-.119032,.688078,-.69537,-.004552,-.087778,-.134867,-.048504,.074373,-.312781,-.677402,-.09532,-.276538,-.601759,.708719,-.082303,.228161,-.493802,-1.28255,.401215,-1.291259,.074632,-.700376,-.716411,.095067,-.961613,-.643768,-.830723,1.160311,.28296,.295903,-.41621,-.118975,1.483876,.21834,-.489817,-.151467,.134784,-.104507,-.438945,-.422539,-.152533,-.005913,-.581281,.372628,-1.085709,-.073621,.278901,-.387209,-.390245,.615064,-2.560711,-.048656,-.811391,.281982,.230666,.169097,-.049403,-.946003,-.182046,.206441,.783778,-.474508,.395144,-.153679,.763044,.097379,.99775,-.555801,.111421,-.135884,-2.262081,-.821117,-1.467859,.670296,-.617653,-.382236,-.299044,-.157953,-.155288,-.370015,.458491,-.394129,-.907393,-.240929,.555987,.270475,-.207827,-.507138,-.14811,.012548,-.249441,.083963,.573838,-.234602,-.158847,-.020809,-.519694,.071196,-.35012,.84881,.0613,-.042633,-.522744,.11755,.498128,.210679,.830222,-.621603,-.019137,.144449,.52898,.173126,-.027592,-.323419,-.186347,.21052,1.212499,-.200432,-.039843,-1.325181,.309689,-.43022,.745537,-.348378,-.214996,-.166339,-3.222042,.084007,-.478178,.896963,.239584,-.580363,-.440173,-.411316,-.509928,-.307903,.555938,-.525966,-.209569,.469054,-.506682,.588121,-.989907,-.090799,-.902043,-.118874,.777225,-.138365,-.431716,-.037783,.615164,.282491,-1.196012,-.020742,-.200411,-.264582,-.798764,.09723,-.283136,.252713,-.435825,.169522,-.401633,-.059358,-1.499383,0,.388441,-.651122,-.424155,-.127778,-.229608,.759294,-.236184,-1.618708,.015623,-.245179,-1.834765,.309674,.129471,-.593633,.583749,-.469191,-.072392,-.055663,-.249641,.206102,-.425078,-.940271,-.169724,-.4518,-.883341,.118945,-1.10803,1.202935,.108413,-.342537,-1.366719,-.684705,.427864,.180649,.113643,.199502,.073808,.296723,.367597,-.025304,-.374226,.596311,-.223041,-.186405,.887004,.280361,0,-.04053,.637872,-.091518,-.392834,-.233031,.353293,.097842,.220075,-.082417,.413528,-.019758,-.376827,.447001,-.064027,-.473381,-.259472,.057904,.06206,.178437,-.382346,-.426608,-.632342,.052543,.234821,.819061,-.163626,-.178914,.110734,.185974,.524355,-.335409,-.080811,-.140497,.443079,-.070782,.612494,.243131,.585426,-.644647,.064875,.770957,-.195524,1.117599,-.169936,.261805,-.442658,.119667,.04413,.728562,1.145112,-.572395,.28511,-.539665,-.216155,-3.562734,-.059795,.266467,-.323752,-.37763,1.97429,-.362781,-.531046,-.214053,-.824087,-.618003,-.079353,-1.540505,-.427621,-2.018805,-.358099,-.055587,.027347,-.088429,.391675,-.137815,-.13714,-.207657,-.60644,-.3837,.148804,.773416,-.054175,-.440926,-.168544,-.523117,.099933,.201744,-.243509,-.318094,.416801,.304474,.717398,-.56006,-.445477,-.334039,-1.932512,.129147,.04287,-.884197,.005729,-.606625,-1.199184,-.618209,.433222,.805405,-1.634606,.188099,-.43259,-.156641,-.759033,.4452,.137283,-.129276,-.292939,-.102018,.213442,.128085,-.026021,-.531529,-.857111,-.09736,.371231,.112481,-.430471,.368359,-.258496,-1.601922,-.567487,.368465,-.306743,.405305,.288823,.187939,-.126189,-1.426474,-1.346016,.342055,-.27458,.027228,-.867856,-.534644,-.14414,-.378747,.495662,-.530737,-1.634933,.211247,.220233,-.057385,-.063189,.311374,.243765,-.448997,.562761,.075763,.187862,.101715,-.225562,1.173116,-.300653,.726127,.603932,.268588,-3.967471,-.855603,-1.660469,-.001914,-.039583,.826467,-.856735,-.54997,-.043566,.188048,.614465,.415443,-.152509,.405515,-.892555,-.807506,.276313,-.226714,.184381,-2.060662,-.533802,-.553783,.487574,.083934,-.366232,-.138499,.373048,-.381056,-1.37934,.270059,.441429,-.230117,.106006,-.131087,-.590652,.043874,-1.54796,.635061,-.206474,.073785,-.319403,.328975,-.498421,-.276827,-.209578,.029505,-.043705,.015079,.51039,-.343448,.270293,-.228391,-.435711,-.093004,-.368176,.768933,-.54236,.073319,-.002148,.468795,.25397,-.572743,-1.085381,.115054,-.137877,-.902023,.441408,-.677407,.004572,-.255475,.485885,-.733524,.299864,.707051,-.32998,-.086381,-.02482,.804549,.537472,-.084542,-.140843,-.096088,.706951,.22747,.416155,-1.2652,-.923318,-.271227,.0731,.194884,-1.162915]],temperature:.5},slot:{bias:[.219728,-.118743,-.329495,.096681,.337767,-.205939],weights:[[-.13921,.201247,-.483847,0,0,-1.299806,.439854,-.467131,-.42216,-.554407,.057613,-1.079867,-.245103,-.320259,-.200951,0,.106987,-.174053,0,0,0,.38382,-.107118,-.403027,0,1.564173,0,0,-.827384,-.317855,-.239534,-.174053,-.140443,-.418779,-.38186,-1.503094,0,-.696044,0,0,-.423353,-.702872,-.329463,-.837096,-.207534,0,.507886,-.03399,0,2.372119,0,-.511247,0,-1.133108,-.21512,.834924,-.042943,0,-.332224,0,-.178163,-.371948,-.511247,.645465,-.003605,.833821,-.231762,-.948894,0,1.424921,-.183839,0,0,1.199994,0,1.083943,0,-.361043,0,-.353173,.720631,.607866,0,-1.009449,-.082623,.73628,-.335088,-.571917,1.199994,.47751,-.420006,-.105875,0,0,.061193,-.113639,1.642287,-.082972,-.92579,.423369,.535163,-.522588,1.556465,-.261819,0,-.369667,.963556,0,-.467131,0,.744968,0,.268286,0,-.366956,-.70136,0,-.280857,-.403027,0,-.520768,-.085256,0,0,-1.033417,-.13921,.646065,-.353405,0,0,1.733253,0,-.672391,.518638,-.285808,.422454,-.136064,-.082972,-.735251,0,-.111586,-.215294,0,-.341606,-1.025228,-1.262322,0,-.361043,0,0,-.745579,.345985,.291825,.415483,-.559282,.118076,0,.600617,.075319,-.851185,0,.31421,0,-.662685,0,0,-.46366,-.454139,0,.411367,-.178163,-.259684,-.180331,0,.4385,0,.283077,-.336249,0,1.199994,-.13921,0,1.556465,-.21512,-.182939,0,0,0,-.267009,.445579,2.476107,0,-.34544,0,-.587478,.963556,.562309,0,0,.08729,-.106701,0,0,-.207534,-.412192,-.099403,.833821,-.69332,-.007867,-.40049,-.362849,-.345669,.488548,0,1.124328,0,-.32435,1.0958,0,0,.936,0,-.507589,-.325811,.022009,-.552958,-.375839,-.478837,-.180331,-1.34379,-.161898,0,0,0,-.227058,-.267009,-1.720409,-.264006,-.708292,1.564173,-.136064,1.37928,0,0,.763099,-.521716,.814623,2.05718,.131855,-.569617,0,-.825758,.344768,0,.150883,0,0,0,-1.817729,.600617,0,0,0,0,1.755167,-.217476,0,0,-.727377,-.371948,0,1.198789,.891943,.707028,0,-.13921,.675082,-.558438,.600617,0,-.34581,-.630379,0,-.302608,0,-.708292,.786935,-.227058,1.049933,.423003,0,-.915835,0,-.106701,-.416062,-.499538,0,-.790915,.006786,-.220734,-.285808,0,.199142,1.979075,0,-.206329,-.285808,0,1.142213,1.556465,0,0,.403946,-.220553,-.403027,0,-.734347,.578549,-.082623,-.079143,-.264486,0,-.285808,-.563615,.703772,-.230743,-.597039,.058972,-.13921,0,.350924,-.948377,0,.624629,0,.045675,-.009651,.656567,-.771011,-.522689,0,-.134535,0,-1.400417,.061692,.419515,-.986547,-.516007,1.595715,0,-.041279,-.213147,0,-.397629,0,1.029766,.561856,1.932133,.18384,0,-.227058,-.227058,.834924,0,-.416062,.191599,.600617,0,-.105875,0,-.305768,-.444149,0,-.220553,-.335088,-.302608,-.195636,0,1.556465,0,-.475008,-.111961,0,-.264486,.677748,-.286959,-.744066,0,-.121457,0,0,-.371948,-1.120419,0,-.366268,.891943,.262183,.173181,0,-.506064,-.18935,0,-.501018,-.239534,.453872,0,0,-1.002087,.289373,0,0,0,-.17353,0,-.200951,-.9652,.125047,-.102225,1.14786,1.383776,-1.072726,.483038,.703772,0,-.34128,-.416247,0,0,-.254808,-.588226,0,.367523,-.32435,-.891352,-.414848,-.770113,.496294,.97926,0,-.292406,0,0,0,-.169671,.272733,-.814346,.100294,2.025609,-.757772,-.272631,-.332224,0,-.605619,.356357,0,-.534047,0,239e-6,0,1.092697,-.280857,-.288813,0,0,.073001,.963556,0,0,-.231987,0,.296093,-.578228,0,-1.574692,0,-.439093,-.114218,0,0,-.468161,-.105875,0,-.220734,0,0,-.227058,.891943,-.285808,-.220553,-.259684,-.167992,.699606,-.235962,-.159456,.703872,1.400272,-.107271,0,0,-.588226,0,.269789,-.198684,0,-.257257,0,-.339404,-.227058,-.342256,.118076,0,-.315,0,0,-.671725,.304957,0,-.302337,-.266125,-.207534,.954306,-.18798,0,.606763,.165562,.338999,0,0,1.541179,0,.703772,-.467131,-.148385,-.645488,-.471435,-.264486,.401153,0,-.106701,.214217,1.183085,-.285808,0,0,-.71379,1.440998,0,-.809586,-.53061,.893884,-.185134,.600617,0,1.499076,-.185134,-.128844,1.944463,0,-.895865,.357621,-.113282,1.248495,.352653,.14359,.578164,.963556,-.020666,-.239534,.907989,.815171,-.149833,0,0,0,.891943,-.551933,-.8652,-.371948,.204802,0,.50152,-.818053,-1.682806,-.285808,0,-.314805,.417964,1.029597,-1.072753,0,0,0,0,-.248779,0,.828962,-.240049,.337966,0,-.710008,0,-.454904,0,0,.956279,-.227058,.356092,-.581928,-.13921,-1.922974,-.280857,.703772,.08304,0,-.331868,-.787983,-.758319,.24284,.703772,-.479606,-.215294,0,.55118,-.491446,0,0,0,0,-.417413,-.286959,.813723,0,-.395865,.095881,-.236174,.600617,0,0,0,.404496,-.636433,-.547166,.237189,-.286959,-.123597,-.176888,-.1181,0,-.810065,-.74106,-.467131,.183513,-.285808,.809831,0,0,.497239,0,.42346,-.003657,0,.972165,.696914,1.199994,.600617,-.792071,-.267009,0,1.906273,.600617,.353304,0,.399588,0,-.391684,-.091753,0,-.752939,-.188847,-.550294,0,.833821,0,-1.152032,-.231905,0,.504222,-.366634,1.022728,0,-.890767,.168115,-.239018,-.280857,-.364953,.703772,-.713561,0,.935005,-.42332,0,-.808701,.671509,.077101,.111788,1.736052,0,.364959,-.439093,1.763294,0,-.148385,-.107118,-.309544,-.182939,0,.333335,-.105875,-2.033007,0,0,-.136511,0,-.190363,-.285808,.289373,0,0,0,-.618519,0,-.708292,0,-.272631,-.166407,0,0,-.149833,-.182939,1.79317,0,0,0,-.368526,-1.012077,-.317373,0,.454005,.913849,-.815926,-.227058,-.18798,0,0,-.416777,-.207534,0,0,-.417845,.893884,-.488534,0,-.468161,.376081,-.403723,-.347551,0,-.461757],[-.120262,.189329,.659903,0,0,-.958026,2.050201,-.257057,-.176617,-.278014,.71793,1.360288,-.835093,-.22949,-.264176,0,-.663447,-.103638,0,0,0,-2.33524,-.251494,1.647928,0,-.282065,0,0,1.16542,1.477899,.853745,-.103638,-.525649,-.407682,-.192708,-.84316,0,-.862459,0,0,.703749,.91551,1.025521,-1.09285,.888009,0,-.578241,-.344869,0,-.868617,0,-.235649,0,.66634,.77239,-.186801,-.397662,0,-.123485,0,.699472,1.124648,-.235649,-.03548,-.99135,-.212679,-.396046,-.640005,0,-.348176,-.077065,0,0,-.227813,0,-.627056,0,-.527394,0,.780795,-.247446,-.406284,0,-1.920496,-.113262,.377564,-.132255,-.946438,-.227813,-.120883,.846973,-.049837,0,0,1.036837,-.07295,-.374651,-.034267,2.86539,-.104537,-.134467,-.275743,-.345174,-.121809,0,-.210865,-.136582,0,-.257057,0,.274463,0,-.05323,0,-.256992,-1.320577,0,-.143332,1.647928,0,1.059485,-.093348,0,0,-1.075383,-.120262,.224735,.078455,0,0,-.913676,0,-.311986,-.206661,-.146131,.553989,.40756,-.034267,1.524443,0,-.069596,-.10494,0,-.188813,-.631264,1.235273,0,-.527394,0,0,-.878921,-.73874,-.549426,-.231616,-.342968,-.176201,0,-.145483,-.265384,-.94425,0,-.340327,0,-.345405,0,0,1.855565,.644491,0,-.261042,.699472,-.20261,-.144497,0,-.190048,0,-.673827,-.153733,0,-.227813,-.120262,0,-.345174,.77239,-.080124,0,0,0,.954157,-.632009,-.587331,0,-1.384455,0,-.524596,-.136582,-.755045,0,0,.380972,-.122302,0,0,.888009,-.305615,-.11208,-.212679,.365715,-.497234,-.50049,.308578,-.243667,-.590215,0,-.424128,0,-.403548,-.657625,0,0,-.518164,0,1.754045,-.329141,-1.005467,-.22869,-1.204378,-.418211,-.144497,-1.443055,.572754,0,0,0,-.219483,.954157,-1.02427,-.173232,-.378227,-.282065,.40756,-.475117,0,0,.426679,-.591437,-.242242,-.724089,-1.066967,.689273,0,2.118462,-.582684,0,-.553468,0,0,0,.695335,-.145483,0,0,0,0,-.524313,-.112752,0,0,1.24438,1.124648,0,-.376988,-.173303,-1.034924,0,-.120262,-.589741,.68765,-.145483,0,-.341745,-.499364,0,-.264885,0,-.378227,-.516431,-.219483,1.149896,-.10365,0,-.98783,0,-.122302,1.339764,.303227,0,-.491489,.429429,-.105205,-.146131,0,-.229912,-.909913,0,.398753,-.146131,0,-.332684,-.345174,0,0,-.223751,-.111439,1.647928,0,-.703155,-.139989,-.113262,-.069689,1.229378,0,-.146131,-.323437,-.120528,1.942805,-.286072,.527552,-.120262,0,-.065613,-1.109299,0,-.190217,0,-.273943,-.571814,.489403,-1.006882,-.277888,0,-.792441,0,.100445,-.767226,.504457,3.728364,-.428454,-.293831,0,.333797,-.104219,0,.433779,0,-.535813,1.080013,-.319313,-.364021,0,-.219483,-.219483,-.186801,0,1.339764,-.059164,-.145483,0,-.049837,0,-.381492,-.22204,0,-.111439,-.132255,-.264885,-.357696,0,-.345174,0,-.453633,-.040083,0,1.229378,-.282713,-.138912,-.580519,0,.677544,0,0,1.124648,.102475,0,-.339745,-.173303,-.29726,.713029,0,-.369458,-.869388,0,-.346725,.853745,.870509,0,0,2.388195,.076894,0,0,0,-.092561,0,-.264176,.058919,1.404197,-.14848,1.354788,1.207148,-.741539,-.225733,-.120528,0,-.378136,-.337835,0,0,-.155497,2.551387,0,-.274261,-.403548,-.119,-.236748,-.729433,-.555825,-.333018,0,-.140514,0,0,0,-.583327,-.054459,-1.223348,-.150971,-.625839,-.349044,-.336772,-.123485,0,.410965,-.163623,0,.443292,0,-.337682,0,-.471661,-.143332,-.367007,0,0,.551214,-.136582,0,0,-.440737,0,-1.229885,.591255,0,1.595424,0,-.478175,-1.453742,0,0,-.778888,-.049837,0,-.105205,0,0,-.219483,-.173303,-.146131,-.111439,-.20261,-.09774,.459354,.348487,-.098862,-.339192,-.49165,-.054382,0,0,2.551387,0,-.652669,.772802,0,-.094542,0,-.557255,-.219483,-.208619,-.176201,0,-.268799,0,0,-.78518,.440525,0,-.479998,-.311974,.888009,-.314116,.3401,0,-.432163,-.452568,-.411101,0,0,.408105,0,-.120528,-.257057,-.046421,-.347385,-.243747,1.229378,-.712849,0,-.122302,.010732,-.180551,-.146131,0,0,.442393,-.299277,0,-.402254,.917404,.350501,-.086132,-.145483,0,-.924012,-.086132,.599982,-.566275,0,-.478117,.76394,-.057057,2.170817,.474603,.250879,-.313482,-.136582,.216882,.853745,-.604832,-.183002,-.13279,0,0,0,-.173303,-.458105,-.470648,1.124648,-.868469,0,.560491,.162586,2.027247,-.146131,0,.833627,-.266659,-.833904,-.746569,0,0,0,0,-.442837,0,-.610119,-.332644,-.234285,0,-.426313,0,.512981,0,0,-.022197,-.219483,-.112374,-.615293,-.120262,3.046979,-.143332,-.120528,-.369607,0,-.613795,-.403799,1.131145,-.613005,-.120528,2.001768,-.10494,0,-.124085,-.598657,0,0,0,0,.979863,-.138912,-.269371,0,-.383944,-.029583,-.338151,-.145483,0,0,0,-.243626,2.354027,-.290723,.400159,-.138912,-.070708,-.268452,.35945,0,-.039132,-.380165,-.257057,-.221155,-.146131,-.215823,0,0,.515674,0,-.692354,-1.299997,0,-.389497,-.457809,-.227813,-.145483,1.021695,.954157,0,-.655851,-.145483,1.905809,0,.362558,0,-.195968,-.409995,0,-.403188,-.084104,1.083247,0,-.212679,0,1.469139,-.139927,0,-.106939,-.510354,-.249481,0,-.515161,2.055901,1.004436,-.143332,.6396,-.120528,2.846603,0,-.308002,-.405696,0,-.465744,-.680772,.184664,-.011153,-.838744,0,-.062958,-.478175,-.54015,0,-.046421,-.251494,-.243269,-.080124,0,-.59961,-.049837,4.624093,0,0,-.151155,0,-.152257,-.146131,.076894,0,0,0,-.290031,0,-.378227,0,-.336772,-.068946,0,0,-.13279,-.080124,-.92812,0,0,0,.547215,.588524,.579211,0,-.033588,-.324719,.820614,-.219483,.3401,0,0,-.218537,.888009,0,0,-.217623,.350501,.505754,0,-.778888,-.354457,-.236716,-.246807,0,-.338863],[-.13069,-.211007,-.293637,0,0,.891489,-1.168847,-.128663,-.552806,-.319254,-.127654,-.944839,-1.446961,.888356,-.080504,0,2.05454,-.460736,0,0,0,.118358,-.050516,-.211204,0,-.263666,0,0,-.37367,-.263312,-.144439,-.460736,1.068057,-.77516,2.065148,2.202488,0,-.286055,0,0,-.00306,-.387109,.065877,.390446,-.124095,0,-.346799,-.18707,0,-1.32727,0,-.327949,0,2.693979,-.086354,-.149887,-.067158,0,-.134534,0,-.094927,-.121061,-.327949,-.035777,-.827765,-.067225,.469818,-.962988,0,-.17666,-.075442,0,0,-.32842,0,-1.138025,0,-.186672,0,-.69566,-.267258,-.241137,0,3.586463,-.044216,-.250133,1.14407,-.28359,-.32842,-.05654,.611514,.595939,0,0,-.179467,-.551222,-.222927,-.054029,-.38943,-.055355,-.103516,.933911,-.392135,-.669498,0,.087203,-.14468,0,-.128663,0,-.144646,0,-.053767,0,.464617,1.843772,0,1.203117,-.211204,0,-.539473,-.033669,0,0,1.39731,-.13069,-.260696,-.594739,0,0,-.197021,0,-.390748,-.684779,-.144205,-.213914,-.04236,-.054029,-.345739,0,-.384602,1.411542,0,.005369,1.760601,-.634532,0,-.186672,0,0,2.191602,.157192,-.441718,-.592393,-.225784,.353156,0,-.118987,-.735612,-.326138,0,-.330151,0,1.696045,0,0,-.226775,.317039,0,-.146079,-.094927,-.074083,-.62562,0,-.136675,0,-.842011,1.682678,0,-.32842,-.13069,0,-.392135,-.086354,-.642989,0,0,0,-.098668,.905303,-.290152,0,2.202017,0,-.241462,-.14468,-.282139,0,0,-.531934,-.055305,0,0,-.124095,-.564656,-.046392,-.067225,-.523096,-.186452,-.154376,-.123985,.910472,-.390124,0,.874926,0,-.153578,-.368693,0,0,.974535,0,-.2164,-.123371,1.686857,.717951,1.130179,-.227436,-.62562,2.014795,-.043481,0,0,0,-.09125,-.098668,2.118404,-.105166,1.215932,-.263666,-.04236,1.263579,0,0,-.298448,-.226586,-.909962,-.430416,-.494964,-.196464,0,-.434696,.97859,0,1.00737,0,0,0,2.139762,-.118987,0,0,0,0,-.411356,.665752,0,0,-.364782,-.121061,0,.490382,-.179673,-.691182,0,-.13069,-.356722,.592831,-.118987,0,-.498559,.368742,0,-.097796,0,1.215932,-.331171,-.09125,-.356792,-.054998,0,-.48598,0,-.055305,-.122921,.32405,0,1.171716,1.208161,.852485,-.144205,0,-.192275,.745172,0,-.118775,-.144205,0,-.228059,-.392135,0,0,-.720572,1.101123,-.211204,0,-.887817,-.066307,-.044216,-.072038,-.214114,0,-.144205,-.579514,-.211373,-.622673,1.062658,-.315194,-.13069,0,-.084606,1.050307,0,-.283411,0,-.132549,-.529708,-.149935,.272939,-.75991,0,1.045372,0,-.770863,1.077487,-.3974,-.453636,-.215504,-.391046,0,-.408749,1.134639,0,-.634051,0,-.213473,-.518415,-.524947,-.316117,0,-.09125,-.09125,-.149887,0,-.122921,.031313,-.118987,0,.595939,0,.168445,-.236411,0,1.101123,1.14407,-.097796,-.078649,0,-.392135,0,-.245444,-.041968,0,-.214114,-.288884,-.169339,-.413778,0,.208717,0,0,-.121061,1.719703,0,-.22194,-.179673,-.263814,-.441677,0,-.173148,-.508451,0,1.050821,-.144439,-.334324,0,0,.226981,-.261161,0,0,0,-.146596,0,-.080504,-1.559696,-.470096,-.071203,-.512089,-.744341,.603912,.641112,-.211373,0,-.122249,-.649018,0,0,-.169344,-.312904,0,1.471305,-.153578,-.381367,-.178751,-.355504,-.666655,.524066,0,.065294,0,0,0,-.463326,-.041299,.388281,.680957,.282594,-1.198868,-.148553,-.134534,0,-.793908,-.084159,0,-.322073,0,-.610152,0,-.311194,1.203117,-.183908,0,0,-1.557454,-.14468,0,0,-.110916,0,.626375,.31873,0,-.801796,0,-.18237,-.789543,0,0,-.237188,.595939,0,.852485,0,0,-.09125,-.179673,-.144205,1.101123,-.074083,.734724,.05092,-.169291,-.165814,-.218763,-.816165,.5387,0,0,-.312904,0,-.376171,.236244,0,-.244713,0,.653922,-.09125,-.209901,.353156,0,1.119616,0,0,-.417717,-.118616,0,-.133954,-.093829,-.124095,-.269463,-.120256,0,-.158475,.383196,.919169,0,0,.007032,0,-.211373,-.128663,-.059092,-.725961,-.265225,-.214114,.958984,0,-.055305,-.28958,-.178363,-.144205,0,0,-.328404,-.184762,0,-.235882,-.307943,-.222078,-.473406,-.118987,0,2.211532,-.473406,-.118775,.405778,0,-.338164,-.382079,.562423,-2.110734,-.337037,-.232258,.412383,-.14468,-.407355,-.144439,-.342015,-.203771,-.05317,0,0,0,-.179673,-.238034,1.169164,-.121061,-.481147,0,.110593,-1.00768,-.7961,-.144205,0,.414605,-.355578,.791814,-.420195,0,0,0,0,-.00457,0,.917535,-.113383,-.744288,0,1.615904,0,-.250035,0,0,-.748242,-.09125,.225384,1.173057,-.13069,-.885965,1.203117,-.211373,-.414996,0,-.170208,1.420007,-.332822,-.420482,-.211373,-.300468,1.411542,0,-.074915,.395735,0,0,0,0,-.163086,-.169339,-.197849,0,-.173406,-.314455,-.126272,-.118987,0,0,0,-.527043,-.335175,.00327,-.558983,-.169339,-.053135,-.082031,-.03708,0,.838375,1.187043,-.128663,-.175578,-.144205,-1.543631,0,0,.929272,0,.478431,.198152,0,-.464894,1.550374,-.32842,-.118987,-.922831,-.098668,0,-.524761,-.118987,-.56284,0,-.1168,0,.451734,1.565179,0,-.272868,.54191,-.358318,0,-.067225,0,.95685,-.819312,0,-.070428,-.238485,-.103303,0,1.481526,-.576049,-.126964,1.203117,-.139524,-.211373,-.349726,0,-.173623,-.686687,0,1.025001,-1.312139,.976325,-.158735,-1.003795,0,-.037318,-.18237,-.28363,0,-.059092,-.050516,-.033015,-.642989,0,-1.346879,.595939,-.959989,0,0,-.048151,0,1.068445,-.144205,-.261161,0,0,0,.210751,0,1.215932,0,-.148553,-.093768,0,0,-.05317,-.642989,.784444,0,0,0,.973518,-.648535,-.225618,0,-.250404,-.368032,.06976,-.09125,-.120256,0,0,-.197131,-.124095,0,0,-.225403,-.222078,-.765982,0,-.237188,-.096492,.144154,-.141219,0,-.223502],[-.171058,-.321806,.156558,0,0,.165339,-1.308323,1.262129,.577824,-.41821,-.169934,-.231951,1.540819,.141795,-.114326,0,-1.191086,1.036409,0,0,0,.361647,-.085601,-.269398,0,-.476044,0,0,-.423076,-.326956,-.118881,1.036409,.385979,.570467,-1.072669,1.106594,0,-.414825,0,0,.039553,-.46872,1.09434,-.899406,-.135299,0,-.349679,1.173502,0,-.200384,0,1.67831,0,-1.070275,-.125642,-.115969,1.317421,0,-.187821,0,-.11881,-.178989,1.67831,-.135356,.48137,-.223942,.490512,2.621247,0,-.288064,-.116928,0,0,-.144969,0,.763037,0,-.250464,0,.727196,.42472,-.268707,0,2.72791,-.092239,-.379809,-.34278,-.338561,-.144969,-.128465,-.413542,-.324008,0,0,-.267616,.846077,-.463676,-.05933,-.660607,-.077714,-.075234,-.668917,-.249417,1.217829,0,.900415,-.353553,0,1.262129,0,-.303041,0,-.040394,0,-.468566,1.250728,0,-.522249,-.269398,0,-.202477,-.06099,0,0,.826872,-.171058,-.212327,1.770304,0,0,-.691321,0,1.597672,.709738,-.20346,-.241302,-.084149,-.05933,-.457219,0,.767295,-.823805,0,.880808,.712348,-.864376,0,-.250464,0,0,1.077167,-.674883,-.783009,.738643,-.340559,.050938,0,-.122492,.937545,-.521013,0,-.316112,0,-.464281,0,0,-.24288,1.160863,0,.427061,-.11881,-.18589,1.203512,0,-.235275,0,1.518155,-.845919,0,-.144969,-.171058,0,-.249417,-.125642,1.099343,0,0,0,-.108187,.231467,-.687618,0,2.155325,0,-.302829,-.353553,-.51689,0,0,-.783625,-.085016,0,0,-.135299,.708397,-.046945,-.223942,1.651918,-.336947,-.256357,-.261116,.130768,-.663649,0,-.747102,0,-.249237,-.632554,0,0,-.830103,0,-.307964,-.200628,1.637207,-.496226,-1.315131,-.269246,1.203512,1.191954,-.14679,0,0,0,-.152738,-.108187,2.586232,-.140106,.720094,-.476044,-.084149,-1.374534,0,0,-.277396,-.324174,.855267,-.611355,-.489958,-.192316,0,-.625213,.499523,0,.371069,0,0,0,.969689,-.122492,0,0,0,0,-.538668,-.168639,0,0,-.518635,-.178989,0,-.493758,-.137402,1.251502,0,-.171058,1.038157,-.141232,-.122492,0,.652306,.536527,0,-.084129,0,.720094,-.39572,-.152738,-.570889,-.075028,0,-.640757,0,-.085016,-.306192,.582423,0,.627855,-1.016514,-.308405,-.20346,0,.295849,-.296454,0,-.135289,-.20346,0,-.223972,-.249417,0,0,.934962,-.576501,-.269398,0,.697368,-.135322,-.092239,-.100181,-.268969,0,-.20346,.871695,-.151397,-.572321,-.140882,-.375247,-.171058,0,-.052715,.704422,0,-.251578,0,-.19703,1.266546,-.316214,.975301,2.057702,0,1.086757,0,.19978,.907641,-.595804,-.49256,-.284345,-.288799,0,-.486576,-.606684,0,1.058026,0,-.451708,-.60267,-.56725,-.338797,0,-.152738,-.152738,-.115969,0,-.306192,-.298836,-.122492,0,-.324008,0,-.103044,-.329499,0,-.576501,-.34278,-.084129,-.125208,0,-.249417,0,-.310097,-.066265,0,-.268969,-.557013,.852887,-.548447,0,-.067944,0,0,-.178989,.652868,0,-.323796,-.137402,.470416,-.519153,0,-.246414,-.514567,0,-.447331,-.118881,-.293252,0,0,-.677632,-.090416,0,0,0,.625609,0,-.114326,.955581,-.786869,-.050588,-.48537,-.849453,.901803,-.459802,-.151397,0,-.219943,.761947,0,0,.884812,-.409828,0,-.997316,-.249237,-.551484,-.28006,-.49494,.260713,-.453374,0,.578458,0,0,0,-.423739,-.044292,1.274427,-.32629,-.605629,2.9638,-.189567,-.187821,0,.177033,-.121981,0,-.349711,0,-.798148,0,-.475885,-.522249,-.253128,0,0,1.252851,-.353553,0,0,-.180585,0,-.080055,.587118,0,-.851525,0,-.231936,.247478,0,0,-.336065,-.324008,0,-.308405,0,0,-.152738,-.137402,-.20346,-.576501,-.18589,-.285895,-.575972,-.225595,.614952,-.539442,.314935,-.282676,0,0,-.409828,0,.832147,.051754,0,.750119,0,1.188314,-.152738,1.180842,.050938,0,-.814776,0,0,.331367,-.057353,0,-.210225,-.175149,-.135299,-.268461,-.14966,0,-.37668,.830234,.002127,0,0,-.738098,0,-.151397,1.262129,-.070894,.677529,-.35888,-.268969,.284499,0,-.085016,-.135211,-.393936,-.20346,0,0,-.417818,-.283506,0,-.303235,-.444117,-.366516,.861135,-.122492,0,-1.2921,.861135,-.139994,-.514897,0,-.430036,-.359765,-.293825,.240168,-.554179,-.372355,-.577512,-.353553,-.634958,-.118881,-.338961,-.424446,-.097288,0,0,0,-.137402,-.378609,1.280366,-.178989,-.573011,0,-.296528,2.667143,-1.004817,-.20346,0,-.417976,-.354857,.465237,-.541486,0,0,0,0,.346204,0,.176948,-.139149,1.015222,0,-.581249,0,-.249529,0,0,-.704265,-.152738,-.04494,-.972949,-.171058,-1.249791,-.522249,-.151397,-.46125,0,-.199411,.386764,.87465,-.474571,-.151397,-.394611,-.823805,0,-.132357,.304622,0,0,0,0,-.258166,.852887,-.450841,0,-.209915,.432374,-.155481,-.122492,0,0,0,.901087,-.447958,1.484358,1.199115,.852887,-.056298,-.11145,-.075253,0,-1.056222,.508471,1.262129,.380146,-.20346,-.205378,0,0,-.846923,0,-.800245,1.020941,0,-.46171,-.773645,-.144969,-.122492,-1.392608,-.108187,0,-.698935,-.122492,.729195,0,-.210281,0,-.527468,-1.636029,0,1.058668,-.383338,-.472429,0,-.223942,0,.190914,1.14949,0,-.166937,-.149144,-.226522,0,.425346,-.142609,-.141249,-.522249,-.22293,-.151397,-.384735,0,-.298031,.6011,0,1.257205,2.331959,.247731,-.451412,1.545696,0,-.076782,-.231936,-.492685,0,-.070894,-.085601,.460013,1.099343,0,2.632481,-.324008,-1.074607,0,0,-.069137,0,-.481095,-.20346,-.090416,0,0,0,1.395633,0,.720094,0,-.189567,.490579,0,0,-.097288,1.099343,-.092607,0,0,0,-.599905,.565666,-.289869,0,-.09262,-.391629,-.087848,-.152738,-.14966,0,0,-.216306,-.135299,0,0,-.28283,-.366516,.976043,0,-.336065,-.200111,.91892,-.198579,0,-.263068],[-.334732,-.019767,.229405,0,0,1.291038,.217453,-.216663,.058135,.943642,-.295749,-1.410325,-.271145,-.301068,.845694,0,.475253,-.191935,0,0,0,.549668,-.110991,-.453594,0,-.302306,0,0,.798403,-.321615,-.214877,-.191935,-.432511,.328072,-.258998,-1.017775,0,-.64128,0,0,.393647,-.514311,-1.010269,1.022549,-.252968,0,.393266,-.334377,0,.632407,0,-.416116,0,-.615134,-.201441,-.25501,-.496149,0,1.001344,0,-.131514,-.175192,-.416116,.022087,-.694395,-.152785,-.018127,.312102,0,-.419164,.58129,0,0,-.247527,0,.329762,0,-.535434,0,-.267105,-.433688,-.488577,0,-2.159824,.404008,-.117236,-.162709,2.399899,-.247527,-.121541,-.411871,-.073391,0,0,-.292906,-.052228,-.378574,.277031,-.306289,-.129664,-.128024,.848158,-.337018,-.073912,0,-.225297,-.164541,0,-.216663,0,-.083083,0,-.08743,0,.791,-.164933,0,-.154584,-.453594,0,-1.093718,-.106143,0,0,-.990028,-.334732,-.325186,-.770556,0,0,-.289383,0,.011213,-.169977,.902681,-.269278,-.07657,.277031,.54775,0,-.114983,-.17968,0,-.210999,-.28685,1.293491,0,-.535434,0,0,-.933529,1.342974,1.376982,-.190028,.767776,-.183771,0,-.137764,.179975,1.510764,0,.901697,0,.017222,0,0,-.566062,-.968822,0,-.227192,-.131514,.848215,-.153181,0,.283535,0,.22143,-.208748,0,-.247527,-.334732,0,-.337018,-.201441,-.112913,0,0,0,-.297125,-.512786,-.531359,0,-1.50867,0,.04403,-.164541,1.488163,0,0,1.025101,.417414,0,0,-.252968,-.285831,-.099243,-.152785,-.475692,1.318575,.900499,.721218,-.268268,-.641492,0,-.544736,0,1.326715,.92245,0,0,-.320129,0,-.347127,-.307536,-1.124583,.873434,-1.128903,74e-6,-.153181,-.213534,-.124476,0,0,0,-.233567,-.297125,-1.397902,.782954,-.52107,-.302306,-.07657,-.350321,0,0,-.389142,.027984,-.261929,.14575,2.282186,.523205,0,.368455,-.771394,0,-.578048,0,0,0,-1.136533,-.137764,0,0,0,0,-.652853,-.094986,0,0,.873122,-.175192,0,-.432755,-.283302,.283864,0,-.334732,-.44181,.216568,-.137764,0,.715849,.541849,0,.820329,0,-.52107,.775362,-.233567,-.826768,-.121816,0,3.078291,0,.417414,-.270109,-.412207,0,-.117061,-.387083,-.127909,.902681,0,.091845,-.909111,0,.224882,.902681,0,-.225147,-.337018,0,0,-.249432,-.113922,-.453594,0,.980235,-.167683,.404008,-.199994,-.277775,0,.902681,.827475,-.117714,.086328,.234786,-.037769,-.334732,0,-.101563,.650056,0,-.317708,0,-.327876,.432443,-.352754,-.124561,-.281806,0,-.735083,0,1.423262,-.743614,.023757,-1.287659,1.657451,-.401015,0,.326307,-.130606,0,-.262084,0,-.508168,-.803187,-.335866,1.047165,0,-.233567,-.233567,-.25501,0,-.270109,.079606,-.137764,0,-.073391,0,.923417,.718509,0,-.113922,-.162709,.820329,.939506,0,-.337018,0,-.476951,.327817,0,-.277775,.738139,-.144199,1.799058,0,-.398649,0,0,-.175192,-.695395,0,-.5683,-.283302,.015691,.538491,0,.912741,2.56772,0,.552324,-.214877,-.406243,0,0,-.389626,-.202077,0,0,0,-.1513,0,.845694,.007421,.463613,.494417,-1.085652,-.45067,.718208,-.245623,-.117714,0,.959648,.768102,0,0,-.170778,-.768736,0,-.326462,1.326715,-.781991,1.405352,2.855217,1.009514,-.375436,0,-.109479,0,0,0,-.680372,-.094309,.66243,-.17583,-1.557275,-.420539,1.132446,1.001344,0,.564733,-.183201,0,-.020771,0,.926741,0,.58218,-.154584,-.47398,0,0,-.979535,-.164541,0,0,-.244728,0,1.527721,-.559334,0,.355748,0,-.376024,1.491424,0,0,-.646425,-.073391,0,-.127909,0,0,-.233567,-.283302,.902681,-.113922,.848215,-.0884,-.381852,-.216831,-.132738,.683674,-.061254,-.057215,0,0,-.768736,0,.405163,-.562406,0,-.091194,0,-.51658,-.233567,-.285413,-.183771,0,.483027,0,0,2.014568,-.522567,0,1.356919,1.025687,-.252968,-.324293,.271648,0,-.386352,-.545821,-.547308,0,0,-.777427,0,-.117714,-.216663,.420054,.474676,.666612,-.277775,-.519893,0,.417414,-.268116,-.22186,.902681,0,0,-.235029,-.429222,0,.798494,.747912,-.386695,-.052264,-.137764,0,-.894674,-.052264,-.10584,-1.928571,0,-.439122,-.614832,-.056707,-.942107,.503145,.768875,.210054,-.164541,-.40588,-.214877,.605685,.255512,-.154264,0,0,0,-.283302,1.928368,-.680079,-.175192,2.294885,0,-.066396,-.641953,-.212813,.902681,0,-.310183,.784967,-.913642,-.630268,0,0,0,0,.682494,0,-.775474,.941807,-.227471,0,-.621488,0,.179223,0,0,1.119528,-.233567,.224164,1.484592,-.334732,.941467,-.154584,-.117714,.465805,0,1.458092,-.318235,-.555522,.832219,-.117714,-.479215,-.17968,0,-.135888,.830088,0,0,0,0,.105751,-.144199,-.318806,0,-.276957,-.291821,-.401698,-.137764,0,0,0,-.359619,-.452967,-.389981,-.782098,-.144199,.342216,-.191146,-.069062,0,-.677773,-.294746,-.216663,.080046,.902681,-1.450991,0,0,-.669019,0,.068633,.380878,0,.745866,-.498635,-.247527,-.137764,1.501944,-.297125,0,.387322,-.137764,-1.320965,0,-.019797,0,.82929,1.222804,0,.686018,.20364,.624906,0,-.152785,0,-.863513,.179643,0,-.106168,1.664272,-.280855,0,-.626836,-.866635,-.304499,-.154584,-.355705,-.117714,-.854592,0,.10445,.118213,0,-.669747,-.455497,-.817125,-.28327,-.853755,0,-.124526,-.376024,-.107256,0,.420054,-.110991,.295074,-.112913,0,-.663226,-.073391,.562147,0,0,-.111084,0,-.153186,.902681,-.202077,0,0,0,-.473331,0,-.52107,0,1.132446,-.11443,0,0,-.154264,-.112913,-.956622,0,0,0,-.2847,.127767,-.466246,0,-.087788,-.585057,.413873,-.233567,.271648,0,0,1.18493,-.252968,0,0,1.318066,-.386695,.084188,0,-.646425,-.250108,-.226007,.45778,0,1.601443],[.895953,.162005,-.268384,0,0,-.090035,-.230338,-.192614,.515623,.626243,-.182206,2.306694,1.257483,-.179334,-.185736,0,-.782247,-.106047,0,0,0,.921746,.605721,-.310705,0,-.240091,0,0,-.339694,-.248161,-.136014,-.106047,-.355433,.703082,-.158912,.054946,0,2.900663,0,0,-.710536,1.157501,-.846005,1.416357,-.168113,0,.373567,-.273197,0,-.608255,0,-.187348,0,-.541802,-.143833,-.127257,-.313508,0,-.223279,0,-.176058,-.277459,-.187348,-.460939,2.035746,-.177189,-.314395,-.381462,0,-.192857,-.128016,0,0,-.251264,0,-.41166,0,1.861007,0,-.192053,-.19696,.796839,0,-1.224604,-.071668,-.366665,-.171238,-.259393,-.251264,-.050081,-.213067,-.042828,0,0,-.358042,-.056038,-.202459,-.046432,-.583275,-.056099,-.093922,-.314822,-.23272,-.090791,0,-.18179,-.164201,0,-.192614,0,-.48866,0,-.033464,0,-.163103,-.90763,0,-.102095,-.310705,0,1.296951,.379407,0,0,.874645,.895953,-.072591,-.13006,0,0,.358148,0,-.23376,-.166959,-.123077,-.251948,-.068416,-.046432,-.533984,0,-.086527,-.087824,0,-.144759,-.529606,.232466,0,1.861007,0,0,-.71074,-.432529,.105344,-.140089,.700817,-.162197,0,-.075891,-.191843,1.131823,0,-.229317,0,-.240896,0,0,-.356188,-.699431,0,-.204114,-.176058,-.125948,-.099883,0,-.160037,0,-.506824,-.138029,0,-.251264,.895953,0,-.23272,-.143833,-.080378,0,0,0,-.183169,-.437554,-.379648,0,-1.118777,0,1.612335,-.164201,-.496397,0,0,-.177804,-.04809,0,0,-.168113,.859897,.404063,-.177189,-.325524,-.290075,.411214,-.281846,-.183635,1.796932,0,-.283287,0,-.196002,-.359378,0,0,-.242139,0,-.374966,1.286487,-1.216023,-.313512,2.894071,1.393656,-.099883,-.206369,-.09611,0,0,0,.924096,-.183169,-.562055,-.100444,-.328438,-.240091,-.068416,-.442887,0,0,-.224792,1.63593,-.255758,-.437069,-.362153,-.25408,0,-.601251,-.468802,0,-.397807,0,0,0,-.850523,-.075891,0,0,0,0,.372024,-.071898,0,0,-.506707,-.277459,0,-.385672,-.118264,-.516288,0,.895953,-.324966,-.797378,-.075891,0,-.182041,-.317375,0,-.070911,0,-.328438,-.318975,.924096,-.445381,-.067511,0,-.04789,0,-.04809,-.22448,-.297955,0,-.400105,-.240779,-.090233,-.123077,0,-.164649,-.608769,0,-.163242,-.123077,0,-.132352,-.23272,0,0,-.145153,-.078708,-.310705,0,.647716,-.069248,-.071668,.521045,-.204035,0,-.123077,-.232604,-.10276,-.603396,-.273451,.141685,.895953,0,-.046427,-.347109,0,.418285,0,.885723,-.587816,-.327067,.654214,-.215409,0,-.47007,0,.447792,-.53598,.045474,-.507961,-.21314,-.221024,0,.2765,-.079983,0,-.198041,0,.679396,.282402,-.184757,-.21207,0,.924096,.924096,-.127257,0,-.22448,.055482,-.075891,0,-.042828,0,-.301558,.51359,0,-.078708,-.171238,-.070911,-.182317,0,-.23272,0,1.961132,-.06754,0,-.204035,-.287277,-.113478,.487752,0,-.298211,0,0,-.277459,-.659232,0,1.820049,-.118264,-.187216,-.463871,0,.382344,-.485964,0,-.308071,-.136014,-.290561,0,0,-.54583,.187386,0,0,0,-.061623,0,-.185736,1.502975,-.735892,-.12192,-.419538,-.546459,-.40966,-.192993,-.10276,0,.101961,-.126949,0,0,-.134385,-.471694,0,-.240789,-.196002,2.725194,-.294946,-.505227,-.544042,-.341497,0,-.101354,0,0,0,2.320434,-.038373,-.287443,-.12816,.48054,-.237577,-.184922,-.223279,0,.246796,.196607,0,.78331,0,.819003,0,-.416136,-.102095,1.566835,0,0,.659924,-.164201,0,0,1.208952,0,-1.140249,-.35954,0,1.276841,0,1.707597,.618601,0,0,2.466728,-.042828,0,-.090233,0,0,.924096,-.118264,-.123077,-.078708,-.125948,-.094697,-.252057,.499192,-.058083,-.290149,-.346139,-.037155,0,0,-.471694,0,-.478259,-.29971,0,-.062413,0,-.428998,.924096,-.134652,-.162197,0,-.204069,0,0,-.471313,-.046945,0,-.230406,-.17861,-.168113,.222027,-.153853,0,.746907,-.380603,-.301886,0,0,-.440791,0,-.10276,-.192614,-.095262,.566627,.672674,-.204035,-.411894,0,-.04809,.467957,-.208375,-.123077,0,0,1.252648,-.244231,0,.952462,-.382645,-.269097,-.064199,-.075891,0,-.599822,-.064199,-.106529,.659501,0,2.581304,.235116,-.041553,-.606638,-.439185,-.558731,-.309607,-.164201,1.251976,-.136014,-.227866,-.259463,.587345,0,0,0,-.118264,-.301687,-.433603,-.277459,-.577059,0,-.80968,-.362043,1.669289,-.123077,0,-.205269,-.225837,-.539102,3.41127,0,0,0,0,-.332513,0,-.537852,-.116583,-.147144,0,.723154,0,.262265,0,0,-.601104,.924096,-.648326,-.487478,.895953,.070283,-.102095,-.10276,.697006,0,-.14281,-.296754,-.359132,.432999,-.10276,-.347868,-.087824,0,-.083934,-.440343,0,0,0,0,-.246949,-.113478,.423144,0,1.440088,.107603,1.257776,-.075891,0,0,0,-.175295,-.481494,-.259758,-.495382,-.113478,-.038478,.829966,-.059954,0,1.744817,-.279543,-.192614,-.246972,-.123077,2.605991,0,0,-.426242,0,.522074,-.296315,0,-.401929,-.517199,-.251264,-.075891,.583871,-.183169,0,-.414048,-.075891,-1.104503,0,-.415266,0,-.165905,-.650206,0,-.315691,-.08926,-.327112,0,-.177189,0,-.601359,-.137989,0,-.05375,-.399655,-.162568,0,.125892,-.638723,-.192706,-.102095,.443511,-.10276,-.543989,0,-.2598,.79639,0,-.338014,-.555059,-.668696,.792782,-.585455,0,-.063376,1.707597,-.339572,0,-.095262,.605721,-.169259,-.080378,0,-.356102,-.042828,-1.118636,0,0,.516038,0,-.091544,-.123077,.187386,0,0,0,-.224503,0,-.328438,0,-.184922,-.047028,0,0,.587345,-.080378,-.600265,0,0,0,-.267601,.378655,.719895,0,.010396,.755588,-.400473,.924096,-.153853,0,0,-.136179,-.168113,0,0,-.174366,-.269097,-.311469,0,2.466728,.525087,-.196627,.476376,0,-.314253]]}},sketch:{hidden:{bias:[-.023322,.029061,.017083,.007727,-.017201,-294e-6,.026263,.027833,.00789,.0089,.016417,.006445,-.00161,-.04502,-.019333,.003855,.012083,.007271,-.009306,183e-6,.006085,-.015462,.031946,-.009375,.018234,-.006376,.039073,-.024571,-.012132,-.003771,-.009237,-.032968],weights:[[-.060751,-.24035,-.005564,.047451,.088283,.039633,.167959,.199234,.220366,.033374,-.082425,.081412,-.318637,.183891,-.098441,.087691,.032937,-.002758,-.111298,-.205279,-.160126,-.136593,.205502,.097439,.137639,-.040375],[.038633,.222147,.090894,-.337963,-.048667,-.179287,-.081101,-.00909,-.160493,.026948,-.04821,-.102784,.092612,-.152493,-.038895,-.021023,.03782,-.042619,.089159,.35659,.417587,.115016,-.236576,.024568,.025884,-.028059],[-.02858,-.099714,.076344,-.063813,.065577,-.115232,.077307,.267719,.045737,.078145,.185103,-.01312,.049264,-.130048,-.260367,.047133,-.030107,.131309,-.078946,-.130276,.319508,-.062012,-.105317,-.003325,.135853,.12652],[-.146408,-.241094,.037578,.088878,.275172,.167983,.100596,-.215768,.065885,-.040976,-.116061,.132206,.134379,.296739,.191572,-.179163,-.064895,.044857,-.154174,-.109672,-.260784,.145131,.047364,.195494,.006991,-.050698],[-.331339,-.315987,.114286,213e-6,-.02503,.074881,-.202038,.044023,.112517,.156438,.09292,.113792,.133229,.208459,.007061,-.083199,-.166071,.030598,-.454196,-.051918,.127771,.232979,.021455,-.125224,.030842,.115077],[.150995,-.024344,.310532,-.200473,-.027969,.081372,.005612,.177957,.017818,-.041633,.222648,.049791,.011095,-.281476,.031354,.152581,.164359,.043181,.008766,.080964,-.153293,.269752,.242147,-.177284,-.014634,.129387],[-.028068,403e-6,-.220963,.088389,.093085,.079139,-.222151,.081146,.013503,-.064536,.032233,.110644,.019378,-.018209,.117795,.054351,-.16787,.125854,.037102,-.14019,.09094,.156666,-.139805,.120727,-.214575,-.067019],[.062565,.135488,.053602,.180577,-.14733,-.099142,-.089299,-.080523,-.138365,.048689,-.03561,-.143531,-.188375,-.203581,-.145541,.015454,-.111606,-.055256,.04004,.12129,.048721,-.049632,.056494,-.047832,.036617,-.143688],[-.244241,-.107884,.046253,-.121273,.058803,-.030976,.037312,.101332,-.023017,-.070925,.211344,-.035892,.025456,-.005464,.174219,.107225,-.012615,.108001,-.077815,.041352,-.397244,.118308,.095429,.016279,.183039,-.334903],[.147899,-.151422,-.012893,-.192367,.090994,-.365359,.213844,-.052537,-.11845,.066863,-.061495,.106682,.047195,-.077066,.037345,-.142653,.140158,-.19983,.214304,-.030468,.01427,-.206151,-.095185,-.220717,.084653,.063776],[.1736,.10579,.21114,.184897,-.014935,-.086113,-.267822,-.028749,.202128,.203534,.085823,-.122768,.027945,.011112,.029455,.044986,-.021638,-.486996,-.057784,-.112241,.209184,-.051212,-.150395,-.153285,.303061,-.036433],[.02218,-.143727,-.062056,-.11257,-.001585,-.040462,-.128368,-.118613,-.097707,.015193,.007536,.065351,-.246284,-.03879,.315975,.188074,.229542,.095645,.234764,.009163,.055626,-.100696,-.067047,-.181467,.055413,-.020004],[-.089326,-.205644,-.177693,-.086062,-.030743,-.322209,.07584,.148244,-.105206,-.047934,.207134,.030467,.181087,-.195294,-.173025,.089914,.039715,.098539,-.031311,-.05842,.242507,-.031305,-.194829,.301194,.311979,-.114814],[-.027424,.223717,.15758,.278487,-.099967,.327002,.098762,.081198,.014707,.193277,.071131,.08554,.115099,-.22981,-.085104,.087312,-.065697,-.099761,-.193668,-.340597,-.122486,-.022236,-.039876,-382e-6,-.026205,-.098716],[-.103162,-.004505,-.416894,.013404,-.236785,.153464,.133238,.350735,.008367,-.172387,-.030746,.147589,-.116293,-.280942,.306195,-.122455,-.133676,-.198133,-.070509,.047464,.254752,.140646,.149914,-.049212,.044704,.030474],[.018773,.092501,-.065332,-.064154,.11091,-.157019,-.134134,.11234,-.048999,.013636,.209713,.211303,-.054777,-.038095,-.10639,-.036799,-.061321,.200232,.072729,-.083708,.001788,.039369,-.123653,-.086774,-.066629,-.116588],[.004102,.10645,.412523,-.087035,.38767,.178845,.083956,-.176524,-.084094,-.099559,-.238944,-.322519,-.356158,-.050267,.04781,-.180098,-.001611,-.160082,-.062904,-.03852,-.121164,-.150979,.175434,.153736,.276579,.320026],[.093017,-.080688,.036148,.157079,962e-6,.142027,.080573,.209746,-.157331,-.156366,.007033,-.139707,.014705,.164196,-.001989,-.078338,.089675,-.107288,.148412,-.140225,.081129,.038229,-.242371,.047464,-.041433,-.072838],[-.00401,.018126,.126923,.096589,.14122,-.01878,.136826,-.210573,-.005165,-.002464,.001511,.106869,-.019784,.086083,.086589,-.189274,-.161954,-.192248,-.071518,-.124149,.244351,.153538,-.198676,.119584,.104358,-.0949],[-.104804,-.003804,-.258599,-.219357,-.282564,.00978,-.057715,-.022467,.053614,.023109,-.031528,-.117435,-.32737,.079999,.175183,.152286,.2235,.201878,.142612,-.062383,.012628,.032735,.074978,.280137,-.139614,.025303],[.087456,-.133417,-.065712,.066487,-.101491,-.064329,-.045821,-.03006,.052901,.250284,-.162155,.297054,.364289,-.073896,.107871,.105438,.08744,-.265058,.150348,-.077816,-.004014,-.079989,-.04286,-.113252,-.205949,-.028928],[-.170112,-.031277,-.102512,-.229596,-.152054,-.060807,.026782,-.136505,-.053868,-.187488,.017022,.147735,.226442,.282907,-.140554,.148938,-.063068,.039983,.082905,-.064319,.003222,-.131663,-.031331,.308673,.114819,-.235589],[-.240179,.001046,.243499,-.212801,-.1325,.150186,-.107808,-.001003,-.061715,-.038908,-.131821,-.128608,.043534,.009651,.110542,.291048,.202743,-.103336,.284471,-.065578,-.284286,-.05497,-.187924,-.18823,.188884,.255115],[.095842,-.125232,-.091063,-.041976,.0309,.089457,.113778,-.046776,-.012878,-.06883,.058021,-.101863,.066298,-.211417,.060267,496e-6,-.252217,-.062216,-.145043,.093851,.308817,.137617,-.076707,.049655,.161662,-.227265],[-.319733,.174533,-.378238,.041905,.171516,.082894,-.130852,.008942,-.259891,.031723,.330665,-.181243,-.154395,.049481,.024425,.097888,.053783,.026206,-.12259,.074971,.311633,-.22785,.241764,-.049501,-.029073,.024943],[.026988,-.146239,.058567,-.237371,.063394,.049805,.05819,.029152,.206635,.107951,-.078005,.028732,-.03012,.098207,-.067235,.048516,-.098849,-.123627,-.228383,.04466,.210178,-.086784,.02158,.070147,-.022102,.060218],[.139346,.10209,.267254,-.145911,-.022349,.187883,-.130577,-.046042,-.06198,.047348,.16534,-.064359,.103487,.207061,-.075965,-.235887,.223083,-.015335,-.006653,.200642,.093765,.281078,.139472,-.123586,-.182197,-.151836],[-.054544,-.075561,-.138861,-.219861,.128944,.153134,.253546,.353028,.380683,.293332,.215713,-.070204,.004939,-.004507,.251628,-.032477,.121719,-.22945,-.305532,-.130451,-.086495,-.225384,-.157765,-.21272,-.088073,.026425],[.026789,.159235,-.28531,.029784,.04366,-.19742,-.020042,.064621,.049316,.044145,-.184701,-.199281,-.020126,-.297628,.126412,.001492,-.159741,-.076755,.039695,.024154,-.068717,.179556,.178661,.021844,.125547,.136885],[-.355104,-.189574,-.186325,-.108562,.255344,-.073162,.340033,.105104,-.016028,-.181776,.048591,.050084,-.074229,.251399,.037425,.013686,.120502,-.208362,-.140252,-.108994,.224146,.080972,-.073625,-.136004,.067115,.161918],[.067348,-.08044,.069565,.152896,-.195147,.195908,-.331441,.11752,-.08095,-.194796,-.109564,-.142906,-.179714,-.055137,-.003753,-.031951,-.330756,-.01303,.051409,-.114108,.12456,-.213905,-.25695,.468765,.04324,.02232],[.071526,-.017636,-.064874,-.36082,.403547,.222447,.173555,.279449,.123541,.014148,-.01334,-.08329,.093847,-.088461,.228503,-.147745,.070548,-.037863,.017601,.117004,-.270778,-.222743,-.212071,.153966,-.116208,.005073]]},output:{bias:[.882172,.850937,.834996,.818901,.932164,.850905,.84615,.843355,.838985,.796811,.827962,.855349,.788353],weights:[[-.15453,.033534,.056398,-.220771,-.060682,-.17206,.029064,-.028519,-.203841,-.017362,.00485,.05646,.068145,.184494,-.049771,.02221,.117385,-.044769,.003059,-.117862,-.078114,-.018362,-.253455,.122719,-.249802,-.117171,.026689,-.113024,.067399,-.286285,-.143128,-.020878],[-.037562,.083848,.158177,.104144,-.24735,.056044,.019822,.359717,-.20723,-.034046,.094441,-.213348,.01202,.05433,-.013403,.191327,.084928,-.115778,.083515,-.145478,-.014603,-.085735,-.083981,-.026071,-.129367,-.11266,.066906,-.074082,.062803,-.132814,.011816,.008288],[-.008445,.059025,-.040685,.105171,-.020332,.245537,-.052921,.153671,-.124679,-.041071,-.039976,-.106598,-.038607,.111189,.036886,.029998,.070109,.157277,.181038,-.301135,-.078539,-.130929,-.139548,-.013399,.011132,.007739,-.139945,-.092098,.054478,-.229479,.107677,-.027574],[-.080369,-.299332,.03567,-.117083,-.011327,-.082506,-.086906,.029144,.007823,-.127087,.120769,-.17149,-.086754,.072095,.016805,-.033877,.106942,-.00881,.181007,-.298434,-.116784,-.15788,.024635,.20204,.119539,-.008117,.206152,-.177253,-.016319,.048376,.086262,.130289],[.143528,-.042319,.03097,.126887,-.071918,-.199085,.159638,.210824,.010762,-.078521,-.044563,-.144356,.020251,.13549,-.035182,-.165021,.264395,.023645,.244251,-.229542,.165561,-.196629,.031229,.127158,.040734,.060647,.155528,.042712,-.0436,.078006,.101699,.064568],[.064549,-.077469,.007531,.140177,.045662,-.065489,-.165474,-.056221,-.052652,-.108991,.006566,-.135395,-.135014,.210261,.124569,.065396,.210442,.200453,-.016913,-.042416,-.183369,.029958,.052281,-.010906,.018041,.08208,-.134759,.125229,-.071949,.13745,-.034057,.022688],[.274384,-.095107,-.080398,-.060584,.06815,-.007039,-.027158,-.21369,-.02954,-.028214,-.066367,.095183,-.02659,.200273,-.145285,-.17966,.063657,.282681,.085182,-.121786,.010717,.089059,.006576,.221914,.039191,-319e-6,-.139213,.266268,.204828,.038865,-.037485,.138974],[.009263,-.326403,-.025071,.008269,-.137233,.040052,.051001,-.071182,-.029607,-.110744,.064435,.070149,.060194,-.025107,.064243,-.060803,-.014465,-.007895,-.122344,-.081144,-.066567,-.032836,.057691,.094227,-.045499,.201531,-.212673,.361918,-.147397,.011579,-.056441,.094718],[.2463,.015708,.073417,-.221949,.043122,-.030997,.011318,-.045282,.047317,.091564,.067384,-.089255,.027058,.035866,-.008476,.128119,.036662,.025235,-.099838,.156045,.048756,.130666,.005911,-.168152,-.207524,-.19858,-.032899,.311152,-.005574,.012601,-.166029,.27085],[.044806,-.066043,-.093011,-.114561,-.018267,.179809,-.208238,-.198568,-.04387,.139154,-836e-6,.004524,-.035246,.175519,-.017214,.262242,-.347096,-.212737,-.029166,.095663,-.084993,-.054367,.030665,-.074841,-.037615,.012472,.016503,.147762,-.13309,.068336,.11319,.21064],[-.124525,-.129457,.137496,-.006244,-.072316,-.060154,.049142,.104443,.096011,.066444,-.058543,.173329,.022214,.074143,-.147261,-.013954,-.33379,-.08921,.196208,-.011981,.236556,.003378,.020029,.072657,.023805,.124562,.072615,.135051,-.04488,-.076718,-.128573,.147302],[-.0532,.046554,.083302,.074394,-.082988,-.014616,.183834,.064414,.053715,.219619,.029453,.070954,-.006923,.152645,-.142076,-.061497,-.382916,-.112567,-.056799,-.134525,.106852,.102405,-.032522,.169454,.020871,-.108446,.098099,.112452,-.062153,-.149898,-.136933,.08477],[-.140055,.074708,-.137362,-.090745,-.064757,.036555,.077635,-.119919,.145704,-.21426,-.169943,.127571,.008933,.036723,-.04479,.117294,-.262778,-.004585,.015723,-.36996,.373703,.082471,-.181474,.050134,.044984,-.004116,-.029069,.094922,-.149114,-.180984,-.04566,-.08037]]}}},Ra=/([0-9]+(?:\.[0-9]+)?)[ \t]*(毫米|厘米|mm|cm)?/g,fr=/[,，;；、。!?！？\n]/,vo=["length","diameter","bore","circumference","wall"],ms=["kind","side","support","finger"],Pd=.65,Dd=.62;function pr(...i){const e=new Float64Array(Bn.featureWidth);let t=0;if(i.forEach((n,r)=>{const s=Array.from("^"+n.replace(/\s+/gu," ").trim()+"$",a=>a.codePointAt(0));for(let a=1;a<=3;a++)for(let o=0;o<=s.length-a;o++){let l=2166136261^r;for(let c=o;c<o+a;c++)l=Math.imul(l^s[c],16777619);e[(l>>>0)%e.length]++,t++}}),t)for(let n=0;n<e.length;n++)e[n]=Math.sqrt(e[n]/t);return e}function ts(i,e){return i.weights.map((t,n)=>t.reduce((r,s,a)=>r+s*e[a],i.bias[n]))}function Ca(i,e){const t=Bn.heads[i],n=ts(t,e),r=Math.max(...n),s=n.indexOf(r);return{value:Bn.labels[i][s],confidence:1/n.reduce((a,o)=>a+Math.exp((o-r)/(t.temperature??1)),0)}}function Ld(i){const e=i.normalize("NFKC").toLowerCase(),t=e.replace(Ra,"#"),n=pr(t),r=pr(t.split(fr,1)[0],t),s=Object.fromEntries(ms.map(l=>[l,Ca(l,l==="kind"?r:n)])),a=Array.from(e.matchAll(Ra)),o=a.map((l,c)=>{const u=c?a[c-1].index+a[c-1][0].length:0,f=l.index+l[0].length,d=e.slice(u,l.index).split(fr).at(-1).slice(-25),p=e.slice(f,a[c+1]?.index).split(fr)[0].slice(0,25);return{...Ca("slot",pr(d,p)),mm:Number(l[1])*(["厘米","cm"].includes(l[2])?10:1)}});return{intent:s,slots:o}}function Ud(i){const e=mo(i);if(!e)return null;const t=[...e.map(s=>s??0),...e.map(s=>+(s!==null))],n=ts(Bn.sketch.hidden,t).map(Math.tanh);return{profile:ts(Bn.sketch.output,n).map(s=>Math.max(.66,Math.min(1,s))),coverage:t.slice(13).reduce((s,a)=>s+a,0)/13}}function Id(i,e="auto"){const t=Td(i),n=Object.fromEntries([...ms,...vo].map(s=>[s,{source:t[s]===void 0?"default":"rule"}]));let r;try{r=Ld(i)}catch{}if(r&&i.trim()){for(const[l,{value:c,confidence:u}]of Object.entries(r.intent))u>=Pd&&c!=="unknown"&&(l!=="kind"||e==="auto")&&(t[l]===void 0||t[l]===c)&&(t[l]=c,n[l]={source:"text",confidence:u});const s={},o=(e==="auto"?t.kind??"pen":e)==="brace"?["length","circumference","wall"]:["length","diameter","bore"];for(const l of r.slots)o.includes(l.value)&&l.confidence>=Dd&&l.confidence>(s[l.value]?.confidence??0)&&(s[l.value]=l);for(const[l,{mm:c,confidence:u}]of Object.entries(s))t[l]!==void 0&&Math.abs(t[l]-c)>1e-8||(t[l]=c,n[l]={source:"text",confidence:u})}return e!=="auto"&&(n.kind={source:"manual"}),{raw:t,provenance:n}}function Nd(i,e=[],t="auto"){const{raw:n,provenance:r}=Id(i,t);let s;try{s=Ud(e)}catch{}const a=po(n,t),o=s?.profile??Ad(e);r.profile=s?{source:"sketch",coverage:s.coverage}:{source:o?"rule":"default"};for(const l of[...ms,...vo])(!(l in a)||l==="finger"&&a.kind!=="brace"||l==="support"&&a.kind==="brace")&&delete r[l];return{..._o(a,o),provenance:r}}const Fd=[{kind:"pen",icon:"✎",label:"握笔器",note:"细杆适配 · 握力辅助",description:"右手握力弱，握笔器直径28mm，孔径10mm，长度45mm",profile:[.7,.86,1,.91,.96,.69]},{kind:"utensil",icon:"♧",label:"餐具手柄",note:"加粗握持 · 勺叉套筒",description:"左手轻微震颤，需要勺子手柄，直径36mm，孔径13mm，长度95mm",profile:[.65,.8,1,.92,.83,.69]},{kind:"brace",icon:"◫",label:"矫形护具",note:"开口结构 · 腕指适配",description:"右侧 wrist brace，前臂周长18cm，长度65mm，壁厚4mm",profile:[.66,.74,.88,.98,1,.83]}];function Od(i){const e=[],t=[];return i.forEach((n,r)=>{const s=.15+.7*r/(i.length-1);e.push([.5-.23*n,s]),t.push([.5+.23*n,s])}),[[...e,...t.reverse(),e[0]]]}const tt=i=>document.getElementById(i),Bt=tt("sketch"),I0=Bt.getContext("2d");let Yt=[],S0=null,Qt=null,yt=null,xo=!1;function W0(){const i=Bt.getBoundingClientRect(),e=window.devicePixelRatio||1;Bt.width=Math.max(1,Math.round(i.width*e)),Bt.height=Math.max(1,Math.round(i.height*e)),I0.strokeStyle="#007867",I0.lineWidth=2.75*e,I0.lineCap="round",I0.lineJoin="round";for(const t of Yt)I0.beginPath(),t.forEach(([n,r],s)=>I0[s?"lineTo":"moveTo"](n*Bt.width,r*Bt.height)),I0.stroke();tt("sketch-hint").hidden=Yt.length>0,tt("undo").disabled=tt("clear").disabled=Yt.length===0}function Mo(i){const e=Bt.getBoundingClientRect();return[(i.clientX-e.left)/e.width,(i.clientY-e.top)/e.height].map(t=>Math.max(0,Math.min(1,t)))}Bt.addEventListener("pointerdown",i=>{Qt!==null||i.button!==0||Yt.length>=60||(Qt=i.pointerId,Bt.setPointerCapture(Qt),S0=[Mo(i)],Yt.push(S0),W0())});Bt.addEventListener("pointermove",i=>{if(i.pointerId!==Qt||!S0||S0.length>=1200)return;const e=Mo(i),t=S0.at(-1);Math.hypot(e[0]-t[0],e[1]-t[1])<.002||(S0.push(e),W0())});for(const i of["pointerup","pointercancel","lostpointercapture"])Bt.addEventListener(i,e=>{e.pointerId===Qt&&(S0.length<2&&Yt.pop(),S0=Qt=null,W0())});tt("undo").onclick=()=>{Qt===null&&(Yt.pop(),W0())};tt("clear").onclick=()=>{Qt===null&&(Yt=[],W0())};new ResizeObserver(W0).observe(Bt);function Bd(){const i=tt("preview"),e=new cd({antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(e.domElement);const t=new u1,n=new Ot(36,1,.1,2500),r=new ud(n,e.domElement);r.enablePan=!1;const s=()=>e.render(t,n);r.addEventListener("change",s),t.add(new M1(15204341,2966088,2.1));for(const[f,d,p,v,g]of[[16777215,2.6,80,110,130],[7661770,2.2,-85,10,-60]]){const m=new y1(f,d);m.position.set(p,v,g),t.add(m)}const a=new b1(130,20,4552565,3365722);t.add(a);const o=new g1({color:6610619,metalness:.15,roughness:.37});let l;function c(){if(!l)return;const{center:f,radius:d}=l.geometry.boundingSphere,p=Wa.degToRad(n.fov/2),v=1.12*d/Math.sin(Math.atan(Math.tan(p)*Math.min(1,n.aspect)));n.position.copy(new N(1.15,.72,1.2).normalize().multiplyScalar(v).add(f)),r.target.copy(f),r.minDistance=d*.85,r.maxDistance=d*6,r.update()}function u(){const f=i.clientWidth,d=i.clientHeight;e.setSize(f,d),n.aspect=f/d,n.updateProjectionMatrix(),c(),s()}return new ResizeObserver(u).observe(i),({vertices:f,faces:d})=>{l&&(t.remove(l),l.geometry.dispose());const p=new n0;p.setAttribute("position",new zt(f.flat(),3)),p.setIndex(d.flat()),p.rotateX(-Math.PI/2),p.computeVertexNormals(),p.computeBoundingSphere(),l=new $t(p,o),t.add(l),a.scale.setScalar(Math.max(.65,p.boundingSphere.radius/49)),a.position.y=-.13,c(),s()}}let So;try{So=Bd()}catch{tt("preview-error").hidden=!1,tt("preview-error").textContent="此设备无法启用 WebGL。仍可生成模型、查看检查结果并下载 STL。"}const Lt=(i,e=1)=>i.toFixed(e),Pa=tt("results"),Eo={kind:"类别",side:"侧别",support:"握力辅助",finger:"腕／指模板",length:"长度",diameter:"外径",bore:"孔径",circumference:"周长",wall:"壁厚",profile:"轮廓"},zd={pass:"通过",warn:"警告",fail:"未通过"},yo="浏览器几何筛查和简化力学估算，不是实际切片、实体打印或临床验证；护具仅用于设计展示。",To={left:"左侧",right:"右侧",neutral:"未注明侧别"};function $e(i,e,t){const n=document.createElement(i);return t&&(n.className=t),n.textContent=e,n}function Hd(i){const e={text:"文字模型",sketch:"草图模型",rule:"规则回退",default:"模板默认",manual:"手动输入"},t=Object.entries(i).map(([s,a])=>{const o=a.confidence!==void 0?" "+Lt(a.confidence*100,0)+"%":a.coverage!==void 0?"（采样覆盖 "+Lt(a.coverage*100,0)+"%）":"";return Eo[s]+"："+e[a.source]+o}),n=$e("details","","result-text"),r=Object.values(i).filter(s=>s.source==="text"||s.source==="sketch").length;return n.append($e("summary","参数来源："+r+" 项由本地模型推断"),$e("p",t.join("；")+"。文字百分比为模型分数，不代表真实请求上的正确概率；草图覆盖率为有效扫描线比例。")),n}function kd(){const{params:i}=yt,e=tt("parameter-fields");e.replaceChildren();function t(n,r){const s=$e(r?"select":"input","");if(s.name=n,r)for(const[o,l]of Object.entries(r)){const c=$e("option",l);c.value=o,s.append(c)}else s.type="number",s.required=!0,s.step="any";const a=$e("label",Eo[n]+(r?"":"（mm）"));s.value=i[n],a.append(s),e.append(a)}t("length"),i.kind==="brace"?(t("circumference"),t("wall"),t("finger",{false:"护腕",true:"护指"})):(t("diameter"),t("bore"),t("support",{false:"标准",true:"加粗默认外径"})),t("side",To),tt("parameter-editor").hidden=!1}function bo(i){return[{name:"闭合流形",status:i.manifold?"pass":"fail",explanation:i.manifold?"网格闭合、面方向一致且无退化三角形。":"网格未满足闭合定向要求：异常边 "+i.nonManifold+"、异常顶点 "+i.badVertices+"、退化三角形 "+i.degenerate+"；有向体积 "+Lt(i.volume/1e3,3)+" cm³。"},{name:"最小壁厚",status:i.wallPass?"pass":"fail",explanation:Lt(i.minWall,2)+" mm；筛查要求至少 1.60 mm。"},{name:"下向悬垂",status:i.overhangPass?"pass":"warn",explanation:i.overhangPass?"未检测到非底面超过 45° 的下向悬垂。":Lt(i.overhangPercent,2)+"% 的表面属于非底面超过 45° 的下向悬垂；请调整朝向或在切片时评估支撑。"},{name:"构建空间",status:i.fits?"pass":"fail",explanation:"外包尺寸 "+i.size.map(e=>Lt(e)).join(" × ")+" mm；"+(i.fits?"在":"超出")+" 220 × 220 × 250 mm 的参考构建空间。"}]}function Ao(i){const{params:e,profile:t,checks:n}=i,r=[...e.warnings];return xo&&!t&&r.push("未提取到可用轮廓，改用默认外形。"),n.printable||r.push("几何筛查未全部通过，建议修改尺寸或轮廓后再导出。"),r}function wo(i,e){const{params:t,checks:n,profile:r}=yt,s=t.kind==="brace"?t.finger?"护指":"护腕":Ai[t.kind].label,a=To[t.side];tt("model-label").textContent=s+" · "+a+" · "+(r?"已应用草图":"默认轮廓")+" · "+Lt(i)+" ms",So?.(yt);const o=$e("ul","","check-list");for(const{name:d,status:p,explanation:v}of bo(n)){const g=$e("li","");g.append($e("span",zd[p],"badge "+p),$e("strong",d),$e("p",v,"result-text")),o.append(g)}const l=$e("dl","","metrics");for(const[d,p]of[["体积",Lt(n.volume/1e3)+" cm³"],["PLA 实心质量",Lt(n.mass)+" g"],["预计用时（实心）",Lt(n.minutes)+" min"],["最小壁厚",Lt(n.minWall,2)+" mm"]]){const v=$e("div","");v.append($e("dt",d),$e("dd",p)),l.append(v)}const c=t.kind==="brace"?"周长 "+t.circumference+" mm · 名义壁厚 "+t.wall+" mm":"名义外径 "+t.diameter+" mm · 孔径 "+t.bore+" mm",u=n.structure;Pa.replaceChildren($e("h3","校验报告"),o,$e("p",yo,"result-text"),l,$e("p",c,"result-text"),$e("p","仿真估算："+u.model+"，载荷 "+u.load+" N，弯曲应力 "+Lt(u.stress,2)+" MPa，参考裕量 "+Lt(u.factor,2)+"×（PLA 参考强度 35 MPa）。","result-text"),Hd(yt.provenance));const f=Ao(yt);f.length&&Pa.append($e("p",f.join(" "),"result-text warnings")),tt("download").disabled=!1,tt("download-report").disabled=!1,document.querySelectorAll(".preset").forEach(d=>d.setAttribute("aria-pressed",String(d.dataset.kind===e))),kd()}function Ro(i){if(Qt!==null)return;const e=performance.now();xo=Yt.length>0,yt=Nd(tt("description").value,Yt,tt("family").value),wo(performance.now()-e,i)}for(const i of Fd){const e=$e("button","","preset");e.type="button",e.dataset.kind=i.kind,e.setAttribute("aria-pressed","false");const t=$e("span","");t.append($e("strong",i.label),$e("small",i.note));const n=$e("span",i.icon,"symbol"),r=$e("span","↗","arrow");n.setAttribute("aria-hidden","true"),r.setAttribute("aria-hidden","true"),e.append(n,t,r),e.onclick=()=>{Qt===null&&(tt("description").value=i.description,tt("family").value="auto",Yt=Od(i.profile),W0(),Ro(i.kind))},tt("presets").append(e)}tt("generate").onclick=()=>Ro();tt("parameter-editor").onsubmit=i=>{if(i.preventDefault(),!yt)return;const e=Object.fromEntries(Array.from(new FormData(i.currentTarget),([n,r])=>[n,n==="side"?r:["finger","support"].includes(n)?r==="true":Number(r)])),t=performance.now();yt=bd(yt,e),wo(performance.now()-t)};function Co(i,e,t){const n=URL.createObjectURL(new Blob([i],{type:e})),r=$e("a","");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}tt("download").onclick=()=>{yt&&Co(Cd(yt),"model/stl",yt.params.kind+"-prototype.stl")};tt("download-report").onclick=()=>{if(!yt)return;const{params:i,checks:e,provenance:t,profile:n}=yt,r={notice:yo,lengthUnit:"mm",params:i,checks:e,screening:bo(e),warnings:Ao(yt),provenance:t,profile:n};Co(JSON.stringify(r,null,2),"application/json",i.kind+"-check-report.json")};tt("presets").firstElementChild.click();
