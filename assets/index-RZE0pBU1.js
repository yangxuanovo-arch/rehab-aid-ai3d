(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ar="179",dn={ROTATE:0,DOLLY:1,PAN:2},hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xa=0,Rr=1,Ya=2,Hs=1,qa=2,ct=3,Tt=0,Ae=1,ht=2,Et=0,fn=1,Cr=2,Pr=3,Dr=4,ja=5,Ft=100,Ka=101,Za=102,$a=103,Ja=104,Qa=200,eo=201,to=202,no=203,_1=204,g1=205,io=206,ro=207,so=208,ao=209,oo=210,lo=211,co=212,ho=213,uo=214,v1=0,x1=1,M1=2,_n=3,S1=4,E1=5,y1=6,T1=7,ks=0,fo=1,po=2,yt=0,mo=1,_o=2,go=3,vo=4,xo=5,Mo=6,So=7,Vs=300,gn=301,vn=302,b1=303,A1=304,Pi=306,w1=1e3,Bt=1001,R1=1002,Xe=1003,Eo=1004,Wn=1005,Ke=1006,Fi=1007,zt=1008,et=1009,Gs=1010,Ws=1011,In=1012,or=1013,kt=1014,ut=1015,zn=1016,lr=1017,cr=1018,Nn=1020,Xs=35902,Ys=1021,qs=1022,We=1023,Fn=1026,On=1027,js=1028,hr=1029,Ks=1030,ur=1031,dr=1033,mi=33776,_i=33777,gi=33778,vi=33779,C1=35840,P1=35841,D1=35842,L1=35843,U1=36196,I1=37492,N1=37496,F1=37808,O1=37809,B1=37810,z1=37811,H1=37812,k1=37813,V1=37814,G1=37815,W1=37816,X1=37817,Y1=37818,q1=37819,j1=37820,K1=37821,xi=36492,Z1=36494,$1=36495,Zs=36283,J1=36284,Q1=36285,er=36286,yo=3200,To=3201,$s=0,bo=1,Mt="",Fe="srgb",xn="srgb-linear",Ei="linear",q0="srgb",jt=7680,Lr=519,Ao=512,wo=513,Ro=514,Js=515,Co=516,Po=517,Do=518,Lo=519,Ur=35044,Ir="300 es",Ze=2e3,yi=2001;class Xt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nr=1234567;const Ln=Math.PI/180,Bn=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[e&255]+ve[e>>8&255]+"-"+ve[e>>16&15|64]+ve[e>>24&255]+"-"+ve[t&63|128]+ve[t>>8&255]+"-"+ve[t>>16&255]+ve[t>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function B0(i,e,t){return Math.max(e,Math.min(t,i))}function fr(i,e){return(i%e+e)%e}function Uo(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Io(i,e,t){return i!==e?(t-i)/(e-i):0}function Un(i,e,t){return(1-t)*i+t*e}function No(i,e,t,n){return Un(i,e,1-Math.exp(-t*n))}function Fo(i,e=1){return e-Math.abs(fr(i,e*2)-e)}function Oo(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bo(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zo(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ho(i,e){return i+Math.random()*(e-i)}function ko(i){return i*(.5-Math.random())}function Vo(i){i!==void 0&&(Nr=i);let e=Nr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Go(i){return i*Ln}function Wo(i){return i*Bn}function Xo(i){return(i&i-1)===0&&i!==0}function Yo(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jo(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qs={DEG2RAD:Ln,RAD2DEG:Bn,generateUUID:Sn,clamp:B0,euclideanModulo:fr,mapLinear:Uo,inverseLerp:Io,lerp:Un,damp:No,pingpong:Fo,smoothstep:Oo,smootherstep:Bo,randInt:zo,randFloat:Ho,randFloatSpread:ko,seededRandom:Vo,degToRad:Go,radToDeg:Wo,isPowerOfTwo:Xo,ceilPowerOfTwo:Yo,floorPowerOfTwo:qo,setQuaternionFromProperEuler:jo,normalize:Se,denormalize:cn};class L0{constructor(e=0,t=0){L0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B0(this.x,e.x,t.x),this.y=B0(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B0(this.x,e,t),this.y=B0(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(B0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(B0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[a+0],p=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(u!==g||l!==f||c!==p||h!==v){let m=1-o;const d=l*f+c*p+h*v+u*g,R=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const C=Math.sqrt(T),D=Math.atan2(C,d*R);m=Math.sin(m*D)/C,o=Math.sin(o*D)/C}const E=o*R;if(l=l*m+f*E,c=c*m+p*E,h=h*m+v*E,u=u*m+g*E,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+h*u+l*p-c*f,e[t+1]=l*v+h*f+c*u-o*p,e[t+2]=c*v+h*p+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),f=l(n/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"YXZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"ZXY":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"ZYX":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"YZX":this._x=f*h*u+c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u-f*p*v;break;case"XZY":this._x=f*h*u-c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B0(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B0(this.x,e.x,t.x),this.y=B0(this.y,e.y,t.y),this.z=B0(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B0(this.x,e,t),this.y=B0(this.y,e,t),this.z=B0(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(B0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oi.copy(this).projectOnVector(e),this.sub(Oi)}reflect(e){return this.sub(Oi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(B0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oi=new N,Fr=new Vt;class I0{constructor(e,t,n,r,s,a,o,l,c){I0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],v=n[8],g=r[0],m=r[3],d=r[6],R=r[1],T=r[4],E=r[7],C=r[2],D=r[5],A=r[8];return s[0]=a*g+o*R+l*C,s[3]=a*m+o*T+l*D,s[6]=a*d+o*E+l*A,s[1]=c*g+h*R+u*C,s[4]=c*m+h*T+u*D,s[7]=c*d+h*E+u*A,s[2]=f*g+p*R+v*C,s[5]=f*m+p*T+v*D,s[8]=f*d+p*E+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,p=c*s-a*l,v=t*u+n*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(o*n-r*a)*g,e[3]=f*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bi.makeScale(e,t)),this}rotate(e){return this.premultiply(Bi.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bi=new I0;function ea(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ti(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ko(){const i=Ti("canvas");return i.style.display="block",i}const Or={};function pn(i){i in Or||(Or[i]=!0,console.warn(i))}function Zo(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Br=new I0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zr=new I0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $o(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===q0&&(r.r=dt(r.r),r.g=dt(r.g),r.b=dt(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===q0&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mt?Ei:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:e,whitePoint:n,transfer:Ei,toXYZ:Br,fromXYZ:zr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:e,whitePoint:n,transfer:q0,toXYZ:Br,fromXYZ:zr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}const G0=$o();function dt(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kt;class Jo{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kt===void 0&&(Kt=Ti("canvas")),Kt.width=e.width,Kt.height=e.height;const r=Kt.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ti("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=dt(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dt(t[n]/255)*255):t[n]=dt(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qo=0;class pr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qo++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zi(r[a].image)):s.push(zi(r[a]))}else s=zi(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function zi(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e2=0;const Hi=new N;class we extends Xt{constructor(e=we.DEFAULT_IMAGE,t=we.DEFAULT_MAPPING,n=Bt,r=Bt,s=Ke,a=zt,o=We,l=et,c=we.DEFAULT_ANISOTROPY,h=Mt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=Sn(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new L0(0,0),this.repeat=new L0(1,1),this.center=new L0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new I0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hi).x}get height(){return this.source.getSize(Hi).y}get depth(){return this.source.getSize(Hi).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case w1:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case R1:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case w1:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case R1:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Vs;we.DEFAULT_ANISOTROPY=1;class oe{constructor(e=0,t=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(p+1)/2,C=(d+1)/2,D=(h+f)/4,A=(u+g)/4,L=(v+m)/4;return T>E&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=A/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=D/r,s=L/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=L/s),this.set(n,r,s,t),this}let R=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(u-g)/R,this.z=(f-h)/R,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B0(this.x,e.x,t.x),this.y=B0(this.y,e.y,t.y),this.z=B0(this.z,e.z,t.z),this.w=B0(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B0(this.x,e,t),this.y=B0(this.y,e,t),this.z=B0(this.z,e,t),this.w=B0(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(B0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t2 extends Xt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new oe(0,0,e,t),this.scissorTest=!1,this.viewport=new oe(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new we(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gt extends t2{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ta extends we{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n2 extends we{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(He.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(He.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=He.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,He):He.fromBufferAttribute(s,a),He.applyMatrix4(e.matrixWorld),this.expandByPoint(He);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xn.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xn.copy(n.boundingBox)),Xn.applyMatrix4(e.matrixWorld),this.union(Xn)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,He),He.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bn),Yn.subVectors(this.max,bn),Zt.subVectors(e.a,bn),$t.subVectors(e.b,bn),Jt.subVectors(e.c,bn),ft.subVectors($t,Zt),pt.subVectors(Jt,$t),Rt.subVectors(Zt,Jt);let t=[0,-ft.z,ft.y,0,-pt.z,pt.y,0,-Rt.z,Rt.y,ft.z,0,-ft.x,pt.z,0,-pt.x,Rt.z,0,-Rt.x,-ft.y,ft.x,0,-pt.y,pt.x,0,-Rt.y,Rt.x,0];return!ki(t,Zt,$t,Jt,Yn)||(t=[1,0,0,0,1,0,0,0,1],!ki(t,Zt,$t,Jt,Yn))?!1:(qn.crossVectors(ft,pt),t=[qn.x,qn.y,qn.z],ki(t,Zt,$t,Jt,Yn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,He).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(He).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rt=[new N,new N,new N,new N,new N,new N,new N,new N],He=new N,Xn=new Hn,Zt=new N,$t=new N,Jt=new N,ft=new N,pt=new N,Rt=new N,bn=new N,Yn=new N,qn=new N,Ct=new N;function ki(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ct.fromArray(i,s);const o=r.x*Math.abs(Ct.x)+r.y*Math.abs(Ct.y)+r.z*Math.abs(Ct.z),l=e.dot(Ct),c=t.dot(Ct),h=n.dot(Ct);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const i2=new Hn,An=new N,Vi=new N;class Di{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):i2.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;An.subVectors(e,this.center);const t=An.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(An,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(An.copy(e.center).add(Vi)),this.expandByPoint(An.copy(e.center).sub(Vi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const st=new N,Gi=new N,jn=new N,mt=new N,Wi=new N,Kn=new N,Xi=new N;class mr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,st)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=st.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(st.copy(this.origin).addScaledVector(this.direction,t),st.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gi.copy(e).add(t).multiplyScalar(.5),jn.copy(t).sub(e).normalize(),mt.copy(this.origin).sub(Gi);const s=e.distanceTo(t)*.5,a=-this.direction.dot(jn),o=mt.dot(this.direction),l=-mt.dot(jn),c=mt.lengthSq(),h=Math.abs(1-a*a);let u,f,p,v;if(h>0)if(u=a*l-o,f=a*o-l,v=s*h,u>=0)if(f>=-v)if(f<=v){const g=1/h;u*=g,f*=g,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gi).addScaledVector(jn,f),p}intersectSphere(e,t){st.subVectors(e.center,this.origin);const n=st.dot(this.direction),r=st.dot(st)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,st)!==null}intersectTriangle(e,t,n,r,s){Wi.subVectors(t,e),Kn.subVectors(n,e),Xi.crossVectors(Wi,Kn);let a=this.direction.dot(Xi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mt.subVectors(this.origin,e);const l=o*this.direction.dot(Kn.crossVectors(mt,Kn));if(l<0)return null;const c=o*this.direction.dot(Wi.cross(mt));if(c<0||l+c>a)return null;const h=-o*mt.dot(Xi);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(e,t,n,r,s,a,o,l,c,h,u,f,p,v,g,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,f,p,v,g,m)}set(e,t,n,r,s,a,o,l,c,h,u,f,p,v,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qt.setFromMatrixColumn(e,0).length(),s=1/Qt.setFromMatrixColumn(e,1).length(),a=1/Qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*u,v=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,v=c*h,g=c*u;t[0]=f+g*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,v=c*h,g=c*u;t[0]=f-g*o,t[4]=-a*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,v=o*h,g=o*u;t[0]=l*h,t[4]=v*c-p,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=g-f*u,t[8]=v*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+v,t[10]=f-g*u}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=a*h,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r2,e,s2)}lookAt(e,t,n){const r=this.elements;return Pe.subVectors(e,t),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),_t.crossVectors(n,Pe),_t.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),_t.crossVectors(n,Pe)),_t.normalize(),Zn.crossVectors(Pe,_t),r[0]=_t.x,r[4]=Zn.x,r[8]=Pe.x,r[1]=_t.y,r[5]=Zn.y,r[9]=Pe.y,r[2]=_t.z,r[6]=Zn.z,r[10]=Pe.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],R=n[3],T=n[7],E=n[11],C=n[15],D=r[0],A=r[4],L=r[8],S=r[12],M=r[1],b=r[5],X=r[9],H=r[13],W=r[2],j=r[6],Y=r[10],K=r[14],z=r[3],s0=r[7],h0=r[11],S0=r[15];return s[0]=a*D+o*M+l*W+c*z,s[4]=a*A+o*b+l*j+c*s0,s[8]=a*L+o*X+l*Y+c*h0,s[12]=a*S+o*H+l*K+c*S0,s[1]=h*D+u*M+f*W+p*z,s[5]=h*A+u*b+f*j+p*s0,s[9]=h*L+u*X+f*Y+p*h0,s[13]=h*S+u*H+f*K+p*S0,s[2]=v*D+g*M+m*W+d*z,s[6]=v*A+g*b+m*j+d*s0,s[10]=v*L+g*X+m*Y+d*h0,s[14]=v*S+g*H+m*K+d*S0,s[3]=R*D+T*M+E*W+C*z,s[7]=R*A+T*b+E*j+C*s0,s[11]=R*L+T*X+E*Y+C*h0,s[15]=R*S+T*H+E*K+C*S0,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+s*l*u-r*c*u-s*o*f+n*c*f+r*o*p-n*l*p)+g*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*h-s*l*h)+m*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+d*(-r*o*h-t*l*u+t*o*f+r*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],R=u*m*c-g*f*c+g*l*p-o*m*p-u*l*d+o*f*d,T=v*f*c-h*m*c-v*l*p+a*m*p+h*l*d-a*f*d,E=h*g*c-v*u*c+v*o*p-a*g*p-h*o*d+a*u*d,C=v*u*l-h*g*l-v*o*f+a*g*f+h*o*m-a*u*m,D=t*R+n*T+r*E+s*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=R*A,e[1]=(g*f*s-u*m*s-g*r*p+n*m*p+u*r*d-n*f*d)*A,e[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*d+n*l*d)*A,e[3]=(u*l*s-o*f*s-u*r*c+n*f*c+o*r*p-n*l*p)*A,e[4]=T*A,e[5]=(h*m*s-v*f*s+v*r*p-t*m*p-h*r*d+t*f*d)*A,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*d-t*l*d)*A,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*p+t*l*p)*A,e[8]=E*A,e[9]=(v*u*s-h*g*s-v*n*p+t*g*p+h*n*d-t*u*d)*A,e[10]=(a*g*s-v*o*s+v*n*c-t*g*c-a*n*d+t*o*d)*A,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*A,e[12]=C*A,e[13]=(h*g*r-v*u*r+v*n*f-t*g*f-h*n*m+t*u*m)*A,e[14]=(v*o*r-a*g*r-v*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,p=s*h,v=s*u,g=a*h,m=a*u,d=o*u,R=l*c,T=l*h,E=l*u,C=n.x,D=n.y,A=n.z;return r[0]=(1-(g+d))*C,r[1]=(p+E)*C,r[2]=(v-T)*C,r[3]=0,r[4]=(p-E)*D,r[5]=(1-(f+d))*D,r[6]=(m+R)*D,r[7]=0,r[8]=(v+T)*A,r[9]=(m-R)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Qt.set(r[0],r[1],r[2]).length();const a=Qt.set(r[4],r[5],r[6]).length(),o=Qt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ke.copy(this);const c=1/s,h=1/a,u=1/o;return ke.elements[0]*=c,ke.elements[1]*=c,ke.elements[2]*=c,ke.elements[4]*=h,ke.elements[5]*=h,ke.elements[6]*=h,ke.elements[8]*=u,ke.elements[9]*=u,ke.elements[10]*=u,t.setFromRotationMatrix(ke),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Ze,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let v,g;if(l)v=s/(a-s),g=a*s/(a-s);else if(o===Ze)v=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===yi)v=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ze,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let v,g;if(l)v=1/(a-s),g=a/(a-s);else if(o===Ze)v=-2/(a-s),g=-(a+s)/(a-s);else if(o===yi)v=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qt=new N,ke=new le,r2=new N(0,0,0),s2=new N(1,1,1),_t=new N,Zn=new N,Pe=new N,Hr=new le,kr=new Vt;class tt{constructor(e=0,t=0,n=0,r=tt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(B0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-B0(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(B0(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-B0(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(B0(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-B0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kr.setFromEuler(this),this.setFromQuaternion(kr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tt.DEFAULT_ORDER="XYZ";class na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a2=0;const Vr=new N,en=new Vt,at=new le,$n=new N,wn=new N,o2=new N,l2=new Vt,Gr=new N(1,0,0),Wr=new N(0,1,0),Xr=new N(0,0,1),Yr={type:"added"},c2={type:"removed"},tn={type:"childadded",child:null},Yi={type:"childremoved",child:null};class ge extends Xt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const e=new N,t=new tt,n=new Vt,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new I0}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return en.setFromAxisAngle(e,t),this.quaternion.multiply(en),this}rotateOnWorldAxis(e,t){return en.setFromAxisAngle(e,t),this.quaternion.premultiply(en),this}rotateX(e){return this.rotateOnAxis(Gr,e)}rotateY(e){return this.rotateOnAxis(Wr,e)}rotateZ(e){return this.rotateOnAxis(Xr,e)}translateOnAxis(e,t){return Vr.copy(e).applyQuaternion(this.quaternion),this.position.add(Vr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gr,e)}translateY(e){return this.translateOnAxis(Wr,e)}translateZ(e){return this.translateOnAxis(Xr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(at.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$n.copy(e):$n.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?at.lookAt(wn,$n,this.up):at.lookAt($n,wn,this.up),this.quaternion.setFromRotationMatrix(at),r&&(at.extractRotation(r.matrixWorld),en.setFromRotationMatrix(at),this.quaternion.premultiply(en.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yr),tn.child=e,this.dispatchEvent(tn),tn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c2),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),at.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),at.multiply(e.parent.matrixWorld)),e.applyMatrix4(at),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yr),tn.child=e,this.dispatchEvent(tn),tn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,e,o2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,l2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ge.DEFAULT_UP=new N(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new N,ot=new N,qi=new N,lt=new N,nn=new N,rn=new N,qr=new N,ji=new N,Ki=new N,Zi=new N,$i=new oe,Ji=new oe,Qi=new oe;class Ge{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ve.subVectors(e,t),r.cross(Ve);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ve.subVectors(r,t),ot.subVectors(n,t),qi.subVectors(e,t);const a=Ve.dot(Ve),o=Ve.dot(ot),l=Ve.dot(qi),c=ot.dot(ot),h=ot.dot(qi),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,lt)===null?!1:lt.x>=0&&lt.y>=0&&lt.x+lt.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,lt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lt.x),l.addScaledVector(a,lt.y),l.addScaledVector(o,lt.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return $i.setScalar(0),Ji.setScalar(0),Qi.setScalar(0),$i.fromBufferAttribute(e,t),Ji.fromBufferAttribute(e,n),Qi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($i,s.x),a.addScaledVector(Ji,s.y),a.addScaledVector(Qi,s.z),a}static isFrontFacing(e,t,n,r){return Ve.subVectors(n,t),ot.subVectors(e,t),Ve.cross(ot).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ve.subVectors(this.c,this.b),ot.subVectors(this.a,this.b),Ve.cross(ot).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ge.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ge.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ge.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ge.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ge.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;nn.subVectors(r,n),rn.subVectors(s,n),ji.subVectors(e,n);const l=nn.dot(ji),c=rn.dot(ji);if(l<=0&&c<=0)return t.copy(n);Ki.subVectors(e,r);const h=nn.dot(Ki),u=rn.dot(Ki);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(nn,a);Zi.subVectors(e,s);const p=nn.dot(Zi),v=rn.dot(Zi);if(v>=0&&p<=v)return t.copy(s);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(rn,o);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return qr.subVectors(s,r),o=(u-h)/(u-h+(p-v)),t.copy(r).addScaledVector(qr,o);const d=1/(m+g+f);return a=g*d,o=f*d,t.copy(n).addScaledVector(nn,a).addScaledVector(rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ia={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={h:0,s:0,l:0},Jn={h:0,s:0,l:0};function e1(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class H0{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,G0.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=G0.workingColorSpace){return this.r=e,this.g=t,this.b=n,G0.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=G0.workingColorSpace){if(e=fr(e,1),t=B0(t,0,1),n=B0(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=e1(a,s,e+1/3),this.g=e1(a,s,e),this.b=e1(a,s,e-1/3)}return G0.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const n=ia[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dt(e.r),this.g=dt(e.g),this.b=dt(e.b),this}copyLinearToSRGB(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return G0.workingToColorSpace(xe.copy(this),e),Math.round(B0(xe.r*255,0,255))*65536+Math.round(B0(xe.g*255,0,255))*256+Math.round(B0(xe.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=G0.workingColorSpace){G0.workingToColorSpace(xe.copy(this),t);const n=xe.r,r=xe.g,s=xe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=G0.workingColorSpace){return G0.workingToColorSpace(xe.copy(this),t),e.r=xe.r,e.g=xe.g,e.b=xe.b,e}getStyle(e=Fe){G0.workingToColorSpace(xe.copy(this),e);const t=xe.r,n=xe.g,r=xe.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gt),this.setHSL(gt.h+e,gt.s+t,gt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gt),e.getHSL(Jn);const n=Un(gt.h,Jn.h,t),r=Un(gt.s,Jn.s,t),s=Un(gt.l,Jn.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new H0;H0.NAMES=ia;let h2=0;class En extends Xt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=fn,this.side=Tt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_1,this.blendDst=g1,this.blendEquation=Ft,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H0(0,0,0),this.blendAlpha=0,this.depthFunc=_n,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jt,this.stencilZFail=jt,this.stencilZPass=jt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fn&&(n.blending=this.blending),this.side!==Tt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_1&&(n.blendSrc=this.blendSrc),this.blendDst!==g1&&(n.blendDst=this.blendDst),this.blendEquation!==Ft&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_n&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jt&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jt&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jt&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ra extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new H0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tt,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ue=new N,Qn=new L0;let u2=0;class Je{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ur,this.updateRanges=[],this.gpuType=ut,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXY(t,Qn.x,Qn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ue.fromBufferAttribute(this,t),ue.applyMatrix3(e),this.setXYZ(t,ue.x,ue.y,ue.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ue.fromBufferAttribute(this,t),ue.applyMatrix4(e),this.setXYZ(t,ue.x,ue.y,ue.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ue.fromBufferAttribute(this,t),ue.applyNormalMatrix(e),this.setXYZ(t,ue.x,ue.y,ue.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ue.fromBufferAttribute(this,t),ue.transformDirection(e),this.setXYZ(t,ue.x,ue.y,ue.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Se(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),n=Se(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ur&&(e.usage=this.usage),e}}class sa extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class aa extends Je{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ze extends Je{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d2=0;const Ne=new le,t1=new ge,sn=new N,De=new Hn,Rn=new Hn,_e=new N;class nt extends Xt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d2++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ea(e)?aa:sa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new I0().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ne.makeRotationFromQuaternion(e),this.applyMatrix4(Ne),this}rotateX(e){return Ne.makeRotationX(e),this.applyMatrix4(Ne),this}rotateY(e){return Ne.makeRotationY(e),this.applyMatrix4(Ne),this}rotateZ(e){return Ne.makeRotationZ(e),this.applyMatrix4(Ne),this}translate(e,t,n){return Ne.makeTranslation(e,t,n),this.applyMatrix4(Ne),this}scale(e,t,n){return Ne.makeScale(e,t,n),this.applyMatrix4(Ne),this}lookAt(e){return t1.lookAt(e),t1.updateMatrix(),this.applyMatrix4(t1.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sn).negate(),this.translate(sn.x,sn.y,sn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];De.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(De.min,Rn.min),De.expandByPoint(_e),_e.addVectors(De.max,Rn.max),De.expandByPoint(_e)):(De.expandByPoint(Rn.min),De.expandByPoint(Rn.max))}De.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_e.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_e));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(sn.fromBufferAttribute(e,c),_e.add(sn)),r=Math.max(r,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;const c=new N,h=new N,u=new N,f=new L0,p=new L0,v=new L0,g=new N,m=new N;function d(L,S,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(f),v.sub(f);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(b),o[L].add(g),o[S].add(g),o[M].add(g),l[L].add(m),l[S].add(m),l[M].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,S=R.length;L<S;++L){const M=R[L],b=M.start,X=M.count;for(let H=b,W=b+X;H<W;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new N,E=new N,C=new N,D=new N;function A(L){C.fromBufferAttribute(r,L),D.copy(C);const S=o[L];T.copy(S),T.sub(C.multiplyScalar(C.dot(S))).normalize(),E.crossVectors(D,S);const b=E.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,b)}for(let L=0,S=R.length;L<S;++L){const M=R[L],b=M.start,X=M.count;for(let H=b,W=b+X;H<W;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_e.fromBufferAttribute(e,t),_e.normalize(),e.setXYZ(t,_e.x,_e.y,_e.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let d=0;d<h;d++)f[v++]=c[p++]}return new Je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jr=new le,Pt=new mr,ei=new Di,Kr=new N,ti=new N,ni=new N,ii=new N,n1=new N,ri=new N,Zr=new N,si=new N;class $e extends ge{constructor(e=new nt,t=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ri.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(n1.fromBufferAttribute(u,e),a?ri.addScaledVector(n1,h):ri.addScaledVector(n1.sub(t),h))}t.add(ri)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ei.copy(n.boundingSphere),ei.applyMatrix4(s),Pt.copy(e.ray).recast(e.near),!(ei.containsPoint(Pt.origin)===!1&&(Pt.intersectSphere(ei,Kr)===null||Pt.origin.distanceToSquared(Kr)>(e.far-e.near)**2))&&(jr.copy(s).invert(),Pt.copy(e.ray).applyMatrix4(jr),!(n.boundingBox!==null&&Pt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pt)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=a[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,C=T;E<C;E+=3){const D=o.getX(E),A=o.getX(E+1),L=o.getX(E+2);r=ai(this,d,e,n,c,h,u,D,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const R=o.getX(m),T=o.getX(m+1),E=o.getX(m+2);r=ai(this,a,e,n,c,h,u,R,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=a[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,C=T;E<C;E+=3){const D=E,A=E+1,L=E+2;r=ai(this,d,e,n,c,h,u,D,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const R=m,T=m+1,E=m+2;r=ai(this,a,e,n,c,h,u,R,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function f2(i,e,t,n,r,s,a,o){let l;if(e.side===Ae?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Tt,o),l===null)return null;si.copy(o),si.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(si);return c<t.near||c>t.far?null:{distance:c,point:si.clone(),object:i}}function ai(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ti),i.getVertexPosition(l,ni),i.getVertexPosition(c,ii);const h=f2(i,e,t,n,ti,ni,ii,Zr);if(h){const u=new N;Ge.getBarycoord(Zr,ti,ni,ii,u),r&&(h.uv=Ge.getInterpolatedAttribute(r,o,l,c,u,new L0)),s&&(h.uv1=Ge.getInterpolatedAttribute(s,o,l,c,u,new L0)),a&&(h.normal=Ge.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Ge.getNormal(ti,ni,ii,f.normal),h.face=f,h.barycoord=u}return h}class kn extends nt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function v(g,m,d,R,T,E,C,D,A,L,S){const M=E/A,b=C/L,X=E/2,H=C/2,W=D/2,j=A+1,Y=L+1;let K=0,z=0;const s0=new N;for(let h0=0;h0<Y;h0++){const S0=h0*b-H;for(let F0=0;F0<j;F0++){const ne=F0*M-X;s0[g]=ne*R,s0[m]=S0*T,s0[d]=W,c.push(s0.x,s0.y,s0.z),s0[g]=0,s0[m]=0,s0[d]=D>0?1:-1,h.push(s0.x,s0.y,s0.z),u.push(F0/A),u.push(1-h0/L),K+=1}}for(let h0=0;h0<L;h0++)for(let S0=0;S0<A;S0++){const F0=f+S0+j*h0,ne=f+S0+j*(h0+1),Z0=f+(S0+1)+j*(h0+1),G=f+(S0+1)+j*h0;l.push(F0,ne,G),l.push(ne,Z0,G),z+=6}o.addGroup(p,z,S),p+=z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ee(i){const e={};for(let t=0;t<i.length;t++){const n=Mn(i[t]);for(const r in n)e[r]=n[r]}return e}function p2(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oa(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:G0.workingColorSpace}const m2={clone:Mn,merge:Ee};var _2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_2,this.fragmentShader=g2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mn(e.uniforms),this.uniformsGroups=p2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class la extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vt=new N,$r=new L0,Jr=new L0;class Oe extends la{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ln*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bn*2*Math.atan(Math.tan(Ln*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vt.x,vt.y).multiplyScalar(-e/vt.z),vt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vt.x,vt.y).multiplyScalar(-e/vt.z)}getViewSize(e,t){return this.getViewBounds(e,$r,Jr),t.subVectors(Jr,$r)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ln*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const an=-90,on=1;class v2 extends ge{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oe(an,on,e,t);r.layers=this.layers,this.add(r);const s=new Oe(an,on,e,t);s.layers=this.layers,this.add(s);const a=new Oe(an,on,e,t);a.layers=this.layers,this.add(a);const o=new Oe(an,on,e,t);o.layers=this.layers,this.add(o);const l=new Oe(an,on,e,t);l.layers=this.layers,this.add(l);const c=new Oe(an,on,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ca extends we{constructor(e=[],t=gn,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x2 extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kn(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:Mn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:Et});s.uniforms.tEquirect.value=t;const a=new $e(r,s),o=t.minFilter;return t.minFilter===zt&&(t.minFilter=Ke),new v2(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class oi extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M2={type:"move"};class i1{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class S2 extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tt,this.environmentIntensity=1,this.environmentRotation=new tt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const r1=new N,E2=new N,y2=new I0;class xt{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=r1.subVectors(n,t).cross(E2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(r1),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||y2.getNormalMatrix(e),r=this.coplanarPoint(r1).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dt=new Di,T2=new L0(.5,.5),li=new N;class _r{constructor(e=new xt,t=new xt,n=new xt,r=new xt,s=new xt,a=new xt){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ze,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],v=s[8],g=s[9],m=s[10],d=s[11],R=s[12],T=s[13],E=s[14],C=s[15];if(r[0].setComponents(c-a,p-h,d-v,C-R).normalize(),r[1].setComponents(c+a,p+h,d+v,C+R).normalize(),r[2].setComponents(c+o,p+u,d+g,C+T).normalize(),r[3].setComponents(c-o,p-u,d-g,C-T).normalize(),n)r[4].setComponents(l,f,m,E).normalize(),r[5].setComponents(c-l,p-f,d-m,C-E).normalize();else if(r[4].setComponents(c-l,p-f,d-m,C-E).normalize(),t===Ze)r[5].setComponents(c+l,p+f,d+m,C+E).normalize();else if(t===yi)r[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dt.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dt)}intersectsSprite(e){Dt.center.set(0,0,0);const t=T2.distanceTo(e.center);return Dt.radius=.7071067811865476+t,Dt.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dt)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(li.x=r.normal.x>0?e.max.x:e.min.x,li.y=r.normal.y>0?e.max.y:e.min.y,li.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(li)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ha extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new H0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bi=new N,Ai=new N,Qr=new le,Cn=new mr,ci=new Di,s1=new N,es=new N;class b2 extends ge{constructor(e=new nt,t=new ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)bi.fromBufferAttribute(t,r-1),Ai.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=bi.distanceTo(Ai);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere),ci.applyMatrix4(r),ci.radius+=s,e.ray.intersectsSphere(ci)===!1)return;Qr.copy(r).invert(),Cn.copy(e.ray).applyMatrix4(Qr);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=c){const d=h.getX(g),R=h.getX(g+1),T=hi(this,e,Cn,l,d,R,g);T&&t.push(T)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),d=hi(this,e,Cn,l,g,m,v-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=c){const d=hi(this,e,Cn,l,g,g+1,g);d&&t.push(d)}if(this.isLineLoop){const g=hi(this,e,Cn,l,v-1,p,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hi(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(bi.fromBufferAttribute(o,r),Ai.fromBufferAttribute(o,s),t.distanceSqToSegment(bi,Ai,s1,es)>n)return;s1.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(s1);if(!(c<e.near||c>e.far))return{distance:c,point:es.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ts=new N,ns=new N;class A2 extends b2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ts.fromBufferAttribute(t,r),ns.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ts.distanceTo(ns);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ua extends we{constructor(e,t,n=kt,r,s,a,o=Xe,l=Xe,c,h=Fn,u=1){if(h!==Fn&&h!==On)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Li extends nt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,p=[],v=[],g=[],m=[];for(let d=0;d<h;d++){const R=d*f-a;for(let T=0;T<c;T++){const E=T*u-s;v.push(E,-R,0),g.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){const T=R+c*d,E=R+c*(d+1),C=R+1+c*(d+1),D=R+1+c*d;p.push(T,E,D),p.push(E,C,D)}this.setIndex(p),this.setAttribute("position",new ze(v,3)),this.setAttribute("normal",new ze(g,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}class w2 extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new H0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new L0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R2 extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C2 extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class da extends ge{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new H0(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class P2 extends da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H0(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const a1=new le,is=new N,rs=new N;class D2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L0(512,512),this.mapType=et,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new L0(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;is.setFromMatrixPosition(e.matrixWorld),t.position.copy(is),rs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rs),t.updateMatrixWorld(),a1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a1,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(a1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fa extends la{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class L2 extends D2{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U2 extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new L2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I2 extends Oe{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ss{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=B0(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(B0(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class N2 extends A2{constructor(e=10,t=10,n=4473924,r=8947848){n=new H0(n),r=new H0(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,p=0,v=-o;f<=t;f++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const g=f===s?n:r;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const h=new nt;h.setAttribute("position",new ze(l,3)),h.setAttribute("color",new ze(c,3));const u=new ha({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class F2 extends Xt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function as(i,e,t,n){const r=O2(n);switch(t){case Ys:return i*e;case js:return i*e/r.components*r.byteLength;case hr:return i*e/r.components*r.byteLength;case Ks:return i*e*2/r.components*r.byteLength;case ur:return i*e*2/r.components*r.byteLength;case qs:return i*e*3/r.components*r.byteLength;case We:return i*e*4/r.components*r.byteLength;case dr:return i*e*4/r.components*r.byteLength;case mi:case _i:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gi:case vi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case P1:case L1:return Math.max(i,16)*Math.max(e,8)/4;case C1:case D1:return Math.max(i,8)*Math.max(e,8)/2;case U1:case I1:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case N1:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case F1:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case O1:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case B1:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case z1:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case H1:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case k1:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case V1:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case G1:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case W1:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case X1:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Y1:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case q1:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case j1:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case K1:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xi:case Z1:case $1:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zs:case J1:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Q1:case er:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O2(i){switch(i){case et:case Gs:return{byteLength:1,components:1};case In:case Ws:case zn:return{byteLength:2,components:1};case lr:case cr:return{byteLength:2,components:4};case kt:case or:case ut:return{byteLength:4,components:1};case Xs:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ar}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ar);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pa(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function B2(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){const v=u[f],g=u[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){const g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var z2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H2=`#ifdef USE_ALPHAHASH
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
#endif`,k2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X2=`#ifdef USE_AOMAP
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
#endif`,Y2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q2=`#ifdef USE_BATCHING
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
#endif`,j2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J2=`#ifdef USE_IRIDESCENCE
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
#endif`,Q2=`#ifdef USE_BUMPMAP
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
#endif`,e3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,l3=`#define PI 3.141592653589793
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
} // validated`,c3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h3=`vec3 transformedNormal = objectNormal;
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
#endif`,u3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m3="gl_FragColor = linearToOutputTexel( gl_FragColor );",_3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g3=`#ifdef USE_ENVMAP
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
#endif`,v3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x3=`#ifdef USE_ENVMAP
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
#endif`,M3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S3=`#ifdef USE_ENVMAP
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
#endif`,E3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A3=`#ifdef USE_GRADIENTMAP
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
}`,w3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P3=`uniform bool receiveShadow;
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
#endif`,D3=`#ifdef USE_ENVMAP
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
#endif`,L3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F3=`PhysicalMaterial material;
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
#endif`,O3=`struct PhysicalMaterial {
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
}`,B3=`
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
#endif`,z3=`#if defined( RE_IndirectDiffuse )
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
#endif`,H3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j3=`#if defined( USE_POINTS_UV )
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
#endif`,K3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e4=`#ifdef USE_MORPHTARGETS
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
#endif`,t4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o4=`#ifdef USE_NORMALMAP
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
#endif`,l4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y4=`float getShadowMask() {
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
}`,T4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b4=`#ifdef USE_SKINNING
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
#endif`,A4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w4=`#ifdef USE_SKINNING
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
#endif`,R4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L4=`#ifdef USE_TRANSMISSION
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
#endif`,U4=`#ifdef USE_TRANSMISSION
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
#endif`,I4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z4=`uniform sampler2D t2D;
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
}`,H4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k4=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W4=`#include <common>
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
}`,X4=`#if DEPTH_PACKING == 3200
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
}`,Y4=`#define DISTANCE
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
}`,q4=`#define DISTANCE
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
}`,j4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z4=`uniform float scale;
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
}`,$4=`uniform vec3 diffuse;
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
}`,J4=`#include <common>
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
}`,Q4=`uniform vec3 diffuse;
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
}`,e5=`#define LAMBERT
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
}`,t5=`#define LAMBERT
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
}`,n5=`#define MATCAP
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
}`,i5=`#define MATCAP
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
}`,r5=`#define NORMAL
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
}`,s5=`#define NORMAL
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
}`,a5=`#define PHONG
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
}`,o5=`#define PHONG
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
}`,l5=`#define STANDARD
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
}`,c5=`#define STANDARD
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
}`,h5=`#define TOON
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
}`,u5=`#define TOON
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
}`,d5=`uniform float size;
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
}`,f5=`uniform vec3 diffuse;
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
}`,p5=`#include <common>
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
}`,m5=`uniform vec3 color;
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
}`,_5=`uniform float rotation;
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
}`,g5=`uniform vec3 diffuse;
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
}`,N0={alphahash_fragment:z2,alphahash_pars_fragment:H2,alphamap_fragment:k2,alphamap_pars_fragment:V2,alphatest_fragment:G2,alphatest_pars_fragment:W2,aomap_fragment:X2,aomap_pars_fragment:Y2,batching_pars_vertex:q2,batching_vertex:j2,begin_vertex:K2,beginnormal_vertex:Z2,bsdfs:$2,iridescence_fragment:J2,bumpmap_pars_fragment:Q2,clipping_planes_fragment:e3,clipping_planes_pars_fragment:t3,clipping_planes_pars_vertex:n3,clipping_planes_vertex:i3,color_fragment:r3,color_pars_fragment:s3,color_pars_vertex:a3,color_vertex:o3,common:l3,cube_uv_reflection_fragment:c3,defaultnormal_vertex:h3,displacementmap_pars_vertex:u3,displacementmap_vertex:d3,emissivemap_fragment:f3,emissivemap_pars_fragment:p3,colorspace_fragment:m3,colorspace_pars_fragment:_3,envmap_fragment:g3,envmap_common_pars_fragment:v3,envmap_pars_fragment:x3,envmap_pars_vertex:M3,envmap_physical_pars_fragment:D3,envmap_vertex:S3,fog_vertex:E3,fog_pars_vertex:y3,fog_fragment:T3,fog_pars_fragment:b3,gradientmap_pars_fragment:A3,lightmap_pars_fragment:w3,lights_lambert_fragment:R3,lights_lambert_pars_fragment:C3,lights_pars_begin:P3,lights_toon_fragment:L3,lights_toon_pars_fragment:U3,lights_phong_fragment:I3,lights_phong_pars_fragment:N3,lights_physical_fragment:F3,lights_physical_pars_fragment:O3,lights_fragment_begin:B3,lights_fragment_maps:z3,lights_fragment_end:H3,logdepthbuf_fragment:k3,logdepthbuf_pars_fragment:V3,logdepthbuf_pars_vertex:G3,logdepthbuf_vertex:W3,map_fragment:X3,map_pars_fragment:Y3,map_particle_fragment:q3,map_particle_pars_fragment:j3,metalnessmap_fragment:K3,metalnessmap_pars_fragment:Z3,morphinstance_vertex:$3,morphcolor_vertex:J3,morphnormal_vertex:Q3,morphtarget_pars_vertex:e4,morphtarget_vertex:t4,normal_fragment_begin:n4,normal_fragment_maps:i4,normal_pars_fragment:r4,normal_pars_vertex:s4,normal_vertex:a4,normalmap_pars_fragment:o4,clearcoat_normal_fragment_begin:l4,clearcoat_normal_fragment_maps:c4,clearcoat_pars_fragment:h4,iridescence_pars_fragment:u4,opaque_fragment:d4,packing:f4,premultiplied_alpha_fragment:p4,project_vertex:m4,dithering_fragment:_4,dithering_pars_fragment:g4,roughnessmap_fragment:v4,roughnessmap_pars_fragment:x4,shadowmap_pars_fragment:M4,shadowmap_pars_vertex:S4,shadowmap_vertex:E4,shadowmask_pars_fragment:y4,skinbase_vertex:T4,skinning_pars_vertex:b4,skinning_vertex:A4,skinnormal_vertex:w4,specularmap_fragment:R4,specularmap_pars_fragment:C4,tonemapping_fragment:P4,tonemapping_pars_fragment:D4,transmission_fragment:L4,transmission_pars_fragment:U4,uv_pars_fragment:I4,uv_pars_vertex:N4,uv_vertex:F4,worldpos_vertex:O4,background_vert:B4,background_frag:z4,backgroundCube_vert:H4,backgroundCube_frag:k4,cube_vert:V4,cube_frag:G4,depth_vert:W4,depth_frag:X4,distanceRGBA_vert:Y4,distanceRGBA_frag:q4,equirect_vert:j4,equirect_frag:K4,linedashed_vert:Z4,linedashed_frag:$4,meshbasic_vert:J4,meshbasic_frag:Q4,meshlambert_vert:e5,meshlambert_frag:t5,meshmatcap_vert:n5,meshmatcap_frag:i5,meshnormal_vert:r5,meshnormal_frag:s5,meshphong_vert:a5,meshphong_frag:o5,meshphysical_vert:l5,meshphysical_frag:c5,meshtoon_vert:h5,meshtoon_frag:u5,points_vert:d5,points_frag:f5,shadow_vert:p5,shadow_frag:m5,sprite_vert:_5,sprite_frag:g5},r0={common:{diffuse:{value:new H0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new I0},alphaMap:{value:null},alphaMapTransform:{value:new I0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new I0}},envmap:{envMap:{value:null},envMapRotation:{value:new I0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new I0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new I0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new I0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new I0},normalScale:{value:new L0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new I0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new I0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new I0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new I0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new I0},alphaTest:{value:0},uvTransform:{value:new I0}},sprite:{diffuse:{value:new H0(16777215)},opacity:{value:1},center:{value:new L0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new I0},alphaMap:{value:null},alphaMapTransform:{value:new I0},alphaTest:{value:0}}},je={basic:{uniforms:Ee([r0.common,r0.specularmap,r0.envmap,r0.aomap,r0.lightmap,r0.fog]),vertexShader:N0.meshbasic_vert,fragmentShader:N0.meshbasic_frag},lambert:{uniforms:Ee([r0.common,r0.specularmap,r0.envmap,r0.aomap,r0.lightmap,r0.emissivemap,r0.bumpmap,r0.normalmap,r0.displacementmap,r0.fog,r0.lights,{emissive:{value:new H0(0)}}]),vertexShader:N0.meshlambert_vert,fragmentShader:N0.meshlambert_frag},phong:{uniforms:Ee([r0.common,r0.specularmap,r0.envmap,r0.aomap,r0.lightmap,r0.emissivemap,r0.bumpmap,r0.normalmap,r0.displacementmap,r0.fog,r0.lights,{emissive:{value:new H0(0)},specular:{value:new H0(1118481)},shininess:{value:30}}]),vertexShader:N0.meshphong_vert,fragmentShader:N0.meshphong_frag},standard:{uniforms:Ee([r0.common,r0.envmap,r0.aomap,r0.lightmap,r0.emissivemap,r0.bumpmap,r0.normalmap,r0.displacementmap,r0.roughnessmap,r0.metalnessmap,r0.fog,r0.lights,{emissive:{value:new H0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:N0.meshphysical_vert,fragmentShader:N0.meshphysical_frag},toon:{uniforms:Ee([r0.common,r0.aomap,r0.lightmap,r0.emissivemap,r0.bumpmap,r0.normalmap,r0.displacementmap,r0.gradientmap,r0.fog,r0.lights,{emissive:{value:new H0(0)}}]),vertexShader:N0.meshtoon_vert,fragmentShader:N0.meshtoon_frag},matcap:{uniforms:Ee([r0.common,r0.bumpmap,r0.normalmap,r0.displacementmap,r0.fog,{matcap:{value:null}}]),vertexShader:N0.meshmatcap_vert,fragmentShader:N0.meshmatcap_frag},points:{uniforms:Ee([r0.points,r0.fog]),vertexShader:N0.points_vert,fragmentShader:N0.points_frag},dashed:{uniforms:Ee([r0.common,r0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N0.linedashed_vert,fragmentShader:N0.linedashed_frag},depth:{uniforms:Ee([r0.common,r0.displacementmap]),vertexShader:N0.depth_vert,fragmentShader:N0.depth_frag},normal:{uniforms:Ee([r0.common,r0.bumpmap,r0.normalmap,r0.displacementmap,{opacity:{value:1}}]),vertexShader:N0.meshnormal_vert,fragmentShader:N0.meshnormal_frag},sprite:{uniforms:Ee([r0.sprite,r0.fog]),vertexShader:N0.sprite_vert,fragmentShader:N0.sprite_frag},background:{uniforms:{uvTransform:{value:new I0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:N0.background_vert,fragmentShader:N0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new I0}},vertexShader:N0.backgroundCube_vert,fragmentShader:N0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:N0.cube_vert,fragmentShader:N0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N0.equirect_vert,fragmentShader:N0.equirect_frag},distanceRGBA:{uniforms:Ee([r0.common,r0.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:N0.distanceRGBA_vert,fragmentShader:N0.distanceRGBA_frag},shadow:{uniforms:Ee([r0.lights,r0.fog,{color:{value:new H0(0)},opacity:{value:1}}]),vertexShader:N0.shadow_vert,fragmentShader:N0.shadow_frag}};je.physical={uniforms:Ee([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new I0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new I0},clearcoatNormalScale:{value:new L0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new I0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new I0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new I0},sheen:{value:0},sheenColor:{value:new H0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new I0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new I0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new I0},transmissionSamplerSize:{value:new L0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new I0},attenuationDistance:{value:0},attenuationColor:{value:new H0(0)},specularColor:{value:new H0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new I0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new I0},anisotropyVector:{value:new L0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new I0}}]),vertexShader:N0.meshphysical_vert,fragmentShader:N0.meshphysical_frag};const ui={r:0,b:0,g:0},Lt=new tt,v5=new le;function x5(i,e,t,n,r,s,a){const o=new H0(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function g(T){let E=!1;const C=v(T);C===null?d(o,l):C&&C.isColor&&(d(C,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const C=v(E);C&&(C.isCubeTexture||C.mapping===Pi)?(h===void 0&&(h=new $e(new kn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Mn(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Lt.copy(E.backgroundRotation),Lt.x*=-1,Lt.y*=-1,Lt.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Lt.y*=-1,Lt.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v5.makeRotationFromEuler(Lt)),h.material.toneMapped=G0.getTransfer(C.colorSpace)!==q0,(u!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new $e(new Li(2,2),new bt({name:"BackgroundMaterial",uniforms:Mn(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=G0.getTransfer(C.colorSpace)!==q0,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,E){T.getRGB(ui,oa(i)),n.buffers.color.setClear(ui.r,ui.g,ui.b,E,a)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:g,addToRenderList:m,dispose:R}}function M5(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,b,X,H,W){let j=!1;const Y=u(H,X,b);s!==Y&&(s=Y,c(s.object)),j=p(M,H,X,W),j&&v(M,H,X,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(M,b,X,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,b,X){const H=X.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[b.id];j===void 0&&(j={},W[b.id]=j);let Y=j[H];return Y===void 0&&(Y=f(l()),j[H]=Y),Y}function f(M){const b=[],X=[],H=[];for(let W=0;W<t;W++)b[W]=0,X[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:X,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,b,X,H){const W=s.attributes,j=b.attributes;let Y=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){const h0=W[z];let S0=j[z];if(S0===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(S0=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(S0=M.instanceColor)),h0===void 0||h0.attribute!==S0||S0&&h0.data!==S0.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function v(M,b,X,H){const W={},j=b.attributes;let Y=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){let h0=j[z];h0===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(h0=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(h0=M.instanceColor));const S0={};S0.attribute=h0,h0&&h0.data&&(S0.data=h0.data),W[z]=S0,Y++}s.attributes=W,s.attributesNum=Y,s.index=H}function g(){const M=s.newAttributes;for(let b=0,X=M.length;b<X;b++)M[b]=0}function m(M){d(M,0)}function d(M,b){const X=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;X[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),W[M]!==b&&(i.vertexAttribDivisor(M,b),W[M]=b)}function R(){const M=s.newAttributes,b=s.enabledAttributes;for(let X=0,H=b.length;X<H;X++)b[X]!==M[X]&&(i.disableVertexAttribArray(X),b[X]=0)}function T(M,b,X,H,W,j,Y){Y===!0?i.vertexAttribIPointer(M,b,X,W,j):i.vertexAttribPointer(M,b,X,H,W,j)}function E(M,b,X,H){g();const W=H.attributes,j=X.getAttributes(),Y=b.defaultAttributeValues;for(const K in j){const z=j[K];if(z.location>=0){let s0=W[K];if(s0===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(s0=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(s0=M.instanceColor)),s0!==void 0){const h0=s0.normalized,S0=s0.itemSize,F0=e.get(s0);if(F0===void 0)continue;const ne=F0.buffer,Z0=F0.type,G=F0.bytesPerElement,a0=Z0===i.INT||Z0===i.UNSIGNED_INT||s0.gpuType===or;if(s0.isInterleavedBufferAttribute){const n0=s0.data,b0=n0.stride,A0=s0.offset;if(n0.isInstancedInterleavedBuffer){for(let P0=0;P0<z.locationSize;P0++)d(z.location+P0,n0.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=n0.meshPerAttribute*n0.count)}else for(let P0=0;P0<z.locationSize;P0++)m(z.location+P0);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let P0=0;P0<z.locationSize;P0++)T(z.location+P0,S0/z.locationSize,Z0,h0,b0*G,(A0+S0/z.locationSize*P0)*G,a0)}else{if(s0.isInstancedBufferAttribute){for(let n0=0;n0<z.locationSize;n0++)d(z.location+n0,s0.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=s0.meshPerAttribute*s0.count)}else for(let n0=0;n0<z.locationSize;n0++)m(z.location+n0);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let n0=0;n0<z.locationSize;n0++)T(z.location+n0,S0/z.locationSize,Z0,h0,S0*G,S0/z.locationSize*n0*G,a0)}}else if(Y!==void 0){const h0=Y[K];if(h0!==void 0)switch(h0.length){case 2:i.vertexAttrib2fv(z.location,h0);break;case 3:i.vertexAttrib3fv(z.location,h0);break;case 4:i.vertexAttrib4fv(z.location,h0);break;default:i.vertexAttrib1fv(z.location,h0)}}}}R()}function C(){L();for(const M in n){const b=n[M];for(const X in b){const H=b[X];for(const W in H)h(H[W].object),delete H[W];delete b[X]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const X in b){const H=b[X];for(const W in H)h(H[W].object),delete H[W];delete b[X]}delete n[M.id]}function A(M){for(const b in n){const X=n[b];if(X[M.id]===void 0)continue;const H=X[M.id];for(const W in H)h(H[W].object),delete H[W];delete X[M.id]}}function L(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:R}}function S5(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*f[g];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function E5(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==We&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==et&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ut&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:C,maxSamples:D}}function y5(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new xt,o=new I0,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const R=s?0:n,T=R*4;let E=d.clippingState||null;l.value=E,E=h(v,f,T,p);for(let C=0;C!==T;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,E=p;T!==g;++T,E+=4)a.copy(u[T]).applyMatrix4(R,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function T5(i){let e=new WeakMap;function t(a,o){return o===b1?a.mapping=gn:o===A1&&(a.mapping=vn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===b1||o===A1)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new x2(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const un=4,os=[.125,.215,.35,.446,.526,.582],Ot=20,o1=new fa,ls=new H0;let l1=null,c1=0,h1=0,u1=!1;const Nt=(1+Math.sqrt(5))/2,ln=1/Nt,cs=[new N(-Nt,ln,0),new N(Nt,ln,0),new N(-ln,0,Nt),new N(ln,0,Nt),new N(0,Nt,-ln),new N(0,Nt,ln),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],b5=new N;class hs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=b5}=s;l1=this._renderer.getRenderTarget(),c1=this._renderer.getActiveCubeFace(),h1=this._renderer.getActiveMipmapLevel(),u1=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ds(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(l1,c1,h1),this._renderer.xr.enabled=u1,e.scissorTest=!1,di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gn||e.mapping===vn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),l1=this._renderer.getRenderTarget(),c1=this._renderer.getActiveCubeFace(),h1=this._renderer.getActiveMipmapLevel(),u1=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:zn,format:We,colorSpace:xn,depthBuffer:!1},r=us(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=us(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A5(s)),this._blurMaterial=w5(s,e,t)}return r}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,o1)}_sceneToCubeUV(e,t,n,r,s){const l=new Oe(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(ls),u.toneMapping=yt,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const g=new ra({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),m=new $e(new kn,g);let d=!1;const R=e.background;R?R.isColor&&(g.color.copy(R),e.background=null,d=!0):(g.color.copy(ls),d=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));const C=this._cubeSize;di(r,E*C,T>2?C:0,C,C),u.setRenderTarget(r),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gn||e.mapping===vn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ds());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;di(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,o1)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cs[(r-s-1)%cs.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $e(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ot-1),g=s/v,m=isFinite(s)?1+Math.floor(h*g):Ot;m>Ot&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ot}`);const d=[];let R=0;for(let A=0;A<Ot;++A){const L=A/g,S=Math.exp(-L*L/2);d.push(S),A===0?R+=S:A<m&&(R+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-n;const E=this._sizeLods[r],C=3*E*(r>T-un?r-T+un:0),D=4*(this._cubeSize-E);di(t,C,D,3*E,2*E),l.setRenderTarget(t),l.render(u,o1)}}function A5(i){const e=[],t=[],n=[];let r=i;const s=i-un+1+os.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-un?l=os[a-i+un-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,g=3,m=2,d=1,R=new Float32Array(g*v*p),T=new Float32Array(m*v*p),E=new Float32Array(d*v*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,L=D>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];R.set(S,g*v*D),T.set(f,m*v*D);const M=[D,D,D,D,D,D];E.set(M,d*v*D)}const C=new nt;C.setAttribute("position",new Je(R,g)),C.setAttribute("uv",new Je(T,m)),C.setAttribute("faceIndex",new Je(E,d)),e.push(C),r>un&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function us(i,e,t){const n=new Gt(i,e,t);return n.texture.mapping=Pi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function di(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function w5(i,e,t){const n=new Float32Array(Ot),r=new N(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Ot,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gr(),fragmentShader:`

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
		`,blending:Et,depthTest:!1,depthWrite:!1})}function ds(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gr(),fragmentShader:`

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
		`,blending:Et,depthTest:!1,depthWrite:!1})}function fs(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Et,depthTest:!1,depthWrite:!1})}function gr(){return`

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
	`}function R5(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===b1||l===A1,h=l===gn||l===vn;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new hs(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new hs(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function C5(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&pn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function P5(i,e,t,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,v=u.attributes.position;let g=0;if(p!==null){const R=p.array;g=p.version;for(let T=0,E=R.length;T<E;T+=3){const C=R[T+0],D=R[T+1],A=R[T+2];f.push(C,D,D,A,A,C)}}else if(v!==void 0){const R=v.array;g=v.version;for(let T=0,E=R.length/3-1;T<E;T+=3){const C=T+0,D=T+1,A=T+2;f.push(C,D,D,A,A,C)}}else return;const m=new(ea(f)?aa:sa)(f,1);m.version=g;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function D5(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,s,f*a,v),t.update(p,n,v))}function h(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,n,1)}function u(f,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,g,0,v);let d=0;for(let R=0;R<v;R++)d+=p[R]*g[R];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L5(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function U5(i,e,t){const n=new WeakMap,r=new oe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let C=o.attributes.position.count*E,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*D*4*u),L=new ta(A,C,D,u);L.type=ut,L.needsUpdate=!0;const S=E*4;for(let b=0;b<u;b++){const X=d[b],H=R[b],W=T[b],j=C*D*4*b;for(let Y=0;Y<X.count;Y++){const K=Y*S;v===!0&&(r.fromBufferAttribute(X,Y),A[j+K+0]=r.x,A[j+K+1]=r.y,A[j+K+2]=r.z,A[j+K+3]=0),g===!0&&(r.fromBufferAttribute(H,Y),A[j+K+4]=r.x,A[j+K+5]=r.y,A[j+K+6]=r.z,A[j+K+7]=0),m===!0&&(r.fromBufferAttribute(W,Y),A[j+K+8]=r.x,A[j+K+9]=r.y,A[j+K+10]=r.z,A[j+K+11]=W.itemSize===4?r.w:1)}}f={count:u,texture:L,size:new L0(C,D)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function I5(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ma=new we,ps=new ua(1,1),_a=new ta,ga=new n2,va=new ca,ms=[],_s=[],gs=new Float32Array(16),vs=new Float32Array(9),xs=new Float32Array(4);function yn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ms[r];if(s===void 0&&(s=new Float32Array(r),ms[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function fe(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pe(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ui(i,e){let t=_s[e];t===void 0&&(t=new Int32Array(e),_s[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function N5(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function F5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fe(t,e))return;i.uniform2fv(this.addr,e),pe(t,e)}}function O5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fe(t,e))return;i.uniform3fv(this.addr,e),pe(t,e)}}function B5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fe(t,e))return;i.uniform4fv(this.addr,e),pe(t,e)}}function z5(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(fe(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pe(t,e)}else{if(fe(t,n))return;xs.set(n),i.uniformMatrix2fv(this.addr,!1,xs),pe(t,n)}}function H5(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(fe(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pe(t,e)}else{if(fe(t,n))return;vs.set(n),i.uniformMatrix3fv(this.addr,!1,vs),pe(t,n)}}function k5(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(fe(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pe(t,e)}else{if(fe(t,n))return;gs.set(n),i.uniformMatrix4fv(this.addr,!1,gs),pe(t,n)}}function V5(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function G5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fe(t,e))return;i.uniform2iv(this.addr,e),pe(t,e)}}function W5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fe(t,e))return;i.uniform3iv(this.addr,e),pe(t,e)}}function X5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fe(t,e))return;i.uniform4iv(this.addr,e),pe(t,e)}}function Y5(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function q5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fe(t,e))return;i.uniform2uiv(this.addr,e),pe(t,e)}}function j5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fe(t,e))return;i.uniform3uiv(this.addr,e),pe(t,e)}}function K5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fe(t,e))return;i.uniform4uiv(this.addr,e),pe(t,e)}}function Z5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ps.compareFunction=Js,s=ps):s=ma,t.setTexture2D(e||s,r)}function $5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ga,r)}function J5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||va,r)}function Q5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_a,r)}function e6(i){switch(i){case 5126:return N5;case 35664:return F5;case 35665:return O5;case 35666:return B5;case 35674:return z5;case 35675:return H5;case 35676:return k5;case 5124:case 35670:return V5;case 35667:case 35671:return G5;case 35668:case 35672:return W5;case 35669:case 35673:return X5;case 5125:return Y5;case 36294:return q5;case 36295:return j5;case 36296:return K5;case 35678:case 36198:case 36298:case 36306:case 35682:return Z5;case 35679:case 36299:case 36307:return $5;case 35680:case 36300:case 36308:case 36293:return J5;case 36289:case 36303:case 36311:case 36292:return Q5}}function t6(i,e){i.uniform1fv(this.addr,e)}function n6(i,e){const t=yn(e,this.size,2);i.uniform2fv(this.addr,t)}function i6(i,e){const t=yn(e,this.size,3);i.uniform3fv(this.addr,t)}function r6(i,e){const t=yn(e,this.size,4);i.uniform4fv(this.addr,t)}function s6(i,e){const t=yn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function a6(i,e){const t=yn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o6(i,e){const t=yn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l6(i,e){i.uniform1iv(this.addr,e)}function c6(i,e){i.uniform2iv(this.addr,e)}function h6(i,e){i.uniform3iv(this.addr,e)}function u6(i,e){i.uniform4iv(this.addr,e)}function d6(i,e){i.uniform1uiv(this.addr,e)}function f6(i,e){i.uniform2uiv(this.addr,e)}function p6(i,e){i.uniform3uiv(this.addr,e)}function m6(i,e){i.uniform4uiv(this.addr,e)}function _6(i,e,t){const n=this.cache,r=e.length,s=Ui(t,r);fe(n,s)||(i.uniform1iv(this.addr,s),pe(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ma,s[a])}function g6(i,e,t){const n=this.cache,r=e.length,s=Ui(t,r);fe(n,s)||(i.uniform1iv(this.addr,s),pe(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ga,s[a])}function v6(i,e,t){const n=this.cache,r=e.length,s=Ui(t,r);fe(n,s)||(i.uniform1iv(this.addr,s),pe(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||va,s[a])}function x6(i,e,t){const n=this.cache,r=e.length,s=Ui(t,r);fe(n,s)||(i.uniform1iv(this.addr,s),pe(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||_a,s[a])}function M6(i){switch(i){case 5126:return t6;case 35664:return n6;case 35665:return i6;case 35666:return r6;case 35674:return s6;case 35675:return a6;case 35676:return o6;case 5124:case 35670:return l6;case 35667:case 35671:return c6;case 35668:case 35672:return h6;case 35669:case 35673:return u6;case 5125:return d6;case 36294:return f6;case 36295:return p6;case 36296:return m6;case 35678:case 36198:case 36298:case 36306:case 35682:return _6;case 35679:case 36299:case 36307:return g6;case 35680:case 36300:case 36308:case 36293:return v6;case 36289:case 36303:case 36311:case 36292:return x6}}class S6{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=e6(t.type)}}class E6{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M6(t.type)}}class y6{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const d1=/(\w+)(\])?(\[|\.)?/g;function Ms(i,e){i.seq.push(e),i.map[e.id]=e}function T6(i,e,t){const n=i.name,r=n.length;for(d1.lastIndex=0;;){const s=d1.exec(n),a=d1.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ms(t,c===void 0?new S6(o,i,e):new E6(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new y6(o),Ms(t,u)),t=u}}}class Mi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);T6(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ss(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const b6=37297;let A6=0;function w6(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Es=new I0;function R6(i){G0._getMatrix(Es,G0.workingColorSpace,i);const e=`mat3( ${Es.elements.map(t=>t.toFixed(4))} )`;switch(G0.getTransfer(i)){case Ei:return[e,"LinearTransferOETF"];case q0:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ys(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+w6(i.getShaderSource(e),o)}else return s}function C6(i,e){const t=R6(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function P6(i,e){let t;switch(e){case mo:t="Linear";break;case _o:t="Reinhard";break;case go:t="Cineon";break;case vo:t="ACESFilmic";break;case Mo:t="AgX";break;case So:t="Neutral";break;case xo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fi=new N;function D6(){G0.getLuminanceCoefficients(fi);const i=fi.x.toFixed(4),e=fi.y.toFixed(4),t=fi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L6(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dn).join(`
`)}function U6(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I6(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Dn(i){return i!==""}function Ts(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bs(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N6=/^[ \t]*#include +<([\w\d./]+)>/gm;function tr(i){return i.replace(N6,O6)}const F6=new Map;function O6(i,e){let t=N0[e];if(t===void 0){const n=F6.get(e);if(n!==void 0)t=N0[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tr(t)}const B6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function As(i){return i.replace(B6,z6)}function z6(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ws(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function H6(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hs?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ct&&(e="SHADOWMAP_TYPE_VSM"),e}function k6(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gn:case vn:e="ENVMAP_TYPE_CUBE";break;case Pi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V6(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vn:e="ENVMAP_MODE_REFRACTION";break}return e}function G6(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ks:e="ENVMAP_BLENDING_MULTIPLY";break;case fo:e="ENVMAP_BLENDING_MIX";break;case po:e="ENVMAP_BLENDING_ADD";break}return e}function W6(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X6(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=H6(t),c=k6(t),h=V6(t),u=G6(t),f=W6(t),p=L6(t),v=U6(s),g=r.createProgram();let m,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Dn).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Dn).join(`
`),d.length>0&&(d+=`
`)):(m=[ws(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dn).join(`
`),d=[ws(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yt?"#define TONE_MAPPING":"",t.toneMapping!==yt?N0.tonemapping_pars_fragment:"",t.toneMapping!==yt?P6("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",N0.colorspace_pars_fragment,C6("linearToOutputTexel",t.outputColorSpace),D6(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dn).join(`
`)),a=tr(a),a=Ts(a,t),a=bs(a,t),o=tr(o),o=Ts(o,t),o=bs(o,t),a=As(a),o=As(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ir?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ir?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=R+m+a,E=R+d+o,C=Ss(r,r.VERTEX_SHADER,T),D=Ss(r,r.FRAGMENT_SHADER,E);r.attachShader(g,C),r.attachShader(g,D),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(b){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(D)||"",j=X.trim(),Y=H.trim(),K=W.trim();let z=!0,s0=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,C,D);else{const h0=ys(r,C,"vertex"),S0=ys(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+j+`
`+h0+`
`+S0)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||K==="")&&(s0=!1);s0&&(b.diagnostics={runnable:z,programLog:j,vertexShader:{log:Y,prefix:m},fragmentShader:{log:K,prefix:d}})}r.deleteShader(C),r.deleteShader(D),L=new Mi(r,g),S=I6(r,g)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,b6)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A6++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=D,this}let Y6=0;class q6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j6(e),t.set(e,n)),n}}class j6{constructor(e){this.id=Y6++,this.code=e,this.usedTimes=0}}function K6(i,e,t,n,r,s,a){const o=new na,l=new q6,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,b,X,H){const W=X.fog,j=H.geometry,Y=S.isMeshStandardMaterial?X.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),z=K&&K.mapping===Pi?K.image.height:null,s0=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const h0=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,S0=h0!==void 0?h0.length:0;let F0=0;j.morphAttributes.position!==void 0&&(F0=1),j.morphAttributes.normal!==void 0&&(F0=2),j.morphAttributes.color!==void 0&&(F0=3);let ne,Z0,G,a0;if(s0){const X0=je[s0];ne=X0.vertexShader,Z0=X0.fragmentShader}else ne=S.vertexShader,Z0=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),a0=l.getFragmentShaderID(S);const n0=i.getRenderTarget(),b0=i.state.buffers.depth.getReversed(),A0=H.isInstancedMesh===!0,P0=H.isBatchedMesh===!0,ce=!!S.map,k0=!!S.matcap,w=!!K,J0=!!S.aoMap,y0=!!S.lightMap,W0=!!S.bumpMap,M0=!!S.normalMap,ie=!!S.displacementMap,f0=!!S.emissiveMap,O0=!!S.metalnessMap,me=!!S.roughnessMap,he=S.anisotropy>0,y=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,V=S.sheen>0,Z=S.transmission>0,k=he&&!!S.anisotropyMap,x0=y&&!!S.clearcoatMap,t0=y&&!!S.clearcoatNormalMap,_0=y&&!!S.clearcoatRoughnessMap,g0=F&&!!S.iridescenceMap,Q=F&&!!S.iridescenceThicknessMap,c0=V&&!!S.sheenColorMap,R0=V&&!!S.sheenRoughnessMap,v0=!!S.specularMap,o0=!!S.specularColorMap,U0=!!S.specularIntensityMap,P=Z&&!!S.transmissionMap,e0=Z&&!!S.thicknessMap,i0=!!S.gradientMap,d0=!!S.alphaMap,$=S.alphaTest>0,q=!!S.alphaHash,m0=!!S.extensions;let D0=yt;S.toneMapped&&(n0===null||n0.isXRRenderTarget===!0)&&(D0=i.toneMapping);const Q0={shaderID:s0,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:Z0,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:a0,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:P0,batchingColor:P0&&H._colorsTexture!==null,instancing:A0,instancingColor:A0&&H.instanceColor!==null,instancingMorph:A0&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:n0===null?i.outputColorSpace:n0.isXRRenderTarget===!0?n0.texture.colorSpace:xn,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:k0,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:z,aoMap:J0,lightMap:y0,bumpMap:W0,normalMap:M0,displacementMap:f&&ie,emissiveMap:f0,normalMapObjectSpace:M0&&S.normalMapType===bo,normalMapTangentSpace:M0&&S.normalMapType===$s,metalnessMap:O0,roughnessMap:me,anisotropy:he,anisotropyMap:k,clearcoat:y,clearcoatMap:x0,clearcoatNormalMap:t0,clearcoatRoughnessMap:_0,dispersion:_,iridescence:F,iridescenceMap:g0,iridescenceThicknessMap:Q,sheen:V,sheenColorMap:c0,sheenRoughnessMap:R0,specularMap:v0,specularColorMap:o0,specularIntensityMap:U0,transmission:Z,transmissionMap:P,thicknessMap:e0,gradientMap:i0,opaque:S.transparent===!1&&S.blending===fn&&S.alphaToCoverage===!1,alphaMap:d0,alphaTest:$,alphaHash:q,combine:S.combine,mapUv:ce&&g(S.map.channel),aoMapUv:J0&&g(S.aoMap.channel),lightMapUv:y0&&g(S.lightMap.channel),bumpMapUv:W0&&g(S.bumpMap.channel),normalMapUv:M0&&g(S.normalMap.channel),displacementMapUv:ie&&g(S.displacementMap.channel),emissiveMapUv:f0&&g(S.emissiveMap.channel),metalnessMapUv:O0&&g(S.metalnessMap.channel),roughnessMapUv:me&&g(S.roughnessMap.channel),anisotropyMapUv:k&&g(S.anisotropyMap.channel),clearcoatMapUv:x0&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:t0&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_0&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:g0&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:c0&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:R0&&g(S.sheenRoughnessMap.channel),specularMapUv:v0&&g(S.specularMap.channel),specularColorMapUv:o0&&g(S.specularColorMap.channel),specularIntensityMapUv:U0&&g(S.specularIntensityMap.channel),transmissionMapUv:P&&g(S.transmissionMap.channel),thicknessMapUv:e0&&g(S.thicknessMap.channel),alphaMapUv:d0&&g(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(M0||he),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(ce||d0),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:b0,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:S0,morphTextureStride:F0,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:D0,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&G0.getTransfer(S.map.colorSpace)===q0,decodeVideoTextureEmissive:f0&&S.emissiveMap.isVideoTexture===!0&&G0.getTransfer(S.emissiveMap.colorSpace)===q0,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ht,flipSided:S.side===Ae,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:m0&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(m0&&S.extensions.multiDraw===!0||P0)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Q0.vertexUv1s=c.has(1),Q0.vertexUv2s=c.has(2),Q0.vertexUv3s=c.has(3),c.clear(),Q0}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)M.push(b),M.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(R(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function R(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=v[S.type];let b;if(M){const X=je[M];b=m2.clone(X.uniforms)}else b=S.uniforms;return b}function C(S,M){let b;for(let X=0,H=h.length;X<H;X++){const W=h[X];if(W.cacheKey===M){b=W,++b.usedTimes;break}}return b===void 0&&(b=new X6(i,M,S,s),h.push(b)),b}function D(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:D,releaseShaderCache:A,programs:h,dispose:L}}function Z6(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function $6(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rs(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cs(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,p,v,g,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=g,d.group=m),e++,d}function o(u,f,p,v,g,m){const d=a(u,f,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,v,g,m){const d=a(u,f,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||$6),n.length>1&&n.sort(f||Rs),r.length>1&&r.sort(f||Rs)}function h(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function J6(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Cs,i.set(n,[a])):r>=s.length?(a=new Cs,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q6(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new H0};break;case"SpotLight":t={position:new N,direction:new N,color:new H0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new H0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new H0,groundColor:new H0};break;case"RectAreaLight":t={color:new H0,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function e7(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t7=0;function n7(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i7(i){const e=new Q6,t=e7(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new le,a=new le;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,d=0,R=0,T=0,E=0,C=0,D=0,A=0;c.sort(n7);for(let S=0,M=c.length;S<M;S++){const b=c[S],X=b.color,H=b.intensity,W=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=X.r*H,u+=X.g*H,f+=X.b*H;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(b.sh.coefficients[Y],H);A++}else if(b.isDirectionalLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=b.shadow.matrix,R++}n.directional[p]=Y,p++}else if(b.isSpotLight){const Y=e.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(X).multiplyScalar(H),Y.distance=W,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,n.spot[g]=Y;const K=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,K.updateMatrices(b),b.castShadow&&D++),n.spotLightMatrix[g]=K.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=j,E++}g++}else if(b.isRectAreaLight){const Y=e.get(b);Y.color.copy(X).multiplyScalar(H),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=Y,m++}else if(b.isPointLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){const K=b.shadow,z=t.get(b);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,n.pointShadow[v]=z,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=b.shadow.matrix,T++}n.point[v]=Y,v++}else if(b.isHemisphereLight){const Y=e.get(b);Y.skyColor.copy(b.color).multiplyScalar(H),Y.groundColor.copy(b.groundColor).multiplyScalar(H),n.hemi[d]=Y,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=r0.LTC_FLOAT_1,n.rectAreaLTC2=r0.LTC_FLOAT_2):(n.rectAreaLTC1=r0.LTC_HALF_1,n.rectAreaLTC2=r0.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==R||L.numPointShadows!==T||L.numSpotShadows!==E||L.numSpotMaps!==C||L.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+C-D,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=R,L.numPointShadows=T,L.numSpotShadows=E,L.numSpotMaps=C,L.numLightProbes=A,n.version=t7++)}function l(c,h){let u=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const T=c[d];if(T.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),u++}else if(T.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Ps(i){const e=new i7(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function r7(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ps(i),e.set(r,[o])):s>=a.length?(o=new Ps(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const s7=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a7=`uniform sampler2D shadow_pass;
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
}`;function o7(i,e,t){let n=new _r;const r=new L0,s=new L0,a=new oe,o=new R2({depthPacking:To}),l=new C2,c={},h=t.maxTextureSize,u={[Tt]:Ae,[Ae]:Tt,[ht]:ht},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L0},radius:{value:4}},vertexShader:s7,fragmentShader:a7}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new nt;v.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $e(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let d=this.type;this.render=function(D,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Et),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=d!==ct&&this.type===ct,W=d===ct&&this.type!==ct;for(let j=0,Y=D.length;j<Y;j++){const K=D[j],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const s0=z.getFrameExtents();if(r.multiply(s0),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/s0.x),r.x=s.x*s0.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/s0.y),r.y=s.y*s0.y,z.mapSize.y=s.y)),z.map===null||H===!0||W===!0){const S0=this.type!==ct?{minFilter:Xe,magFilter:Xe}:{};z.map!==null&&z.map.dispose(),z.map=new Gt(r.x,r.y,S0),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const h0=z.getViewportCount();for(let S0=0;S0<h0;S0++){const F0=z.getViewport(S0);a.set(s.x*F0.x,s.y*F0.y,s.x*F0.z,s.y*F0.w),X.viewport(a),z.updateMatrices(K,S0),n=z.getFrustum(),E(A,L,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===ct&&R(z,L),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,b)};function R(D,A){const L=e.update(g);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Gt(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(A,null,L,f,g,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(A,null,L,p,g,null)}function T(D,A,L,S){let M=null;const b=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(b!==void 0)M=b;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const X=M.uuid,H=A.uuid;let W=c[X];W===void 0&&(W={},c[X]=W);let j=W[H];j===void 0&&(j=M.clone(),W[H]=j,A.addEventListener("dispose",C)),M=j}if(M.visible=A.visible,M.wireframe=A.wireframe,S===ct?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=L}return M}function E(D,A,L,S,M){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===ct)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const H=e.update(D),W=D.material;if(Array.isArray(W)){const j=H.groups;for(let Y=0,K=j.length;Y<K;Y++){const z=j[Y],s0=W[z.materialIndex];if(s0&&s0.visible){const h0=T(D,s0,S,M);D.onBeforeShadow(i,D,A,L,H,h0,z),i.renderBufferDirect(L,null,H,h0,D,z),D.onAfterShadow(i,D,A,L,H,h0,z)}}}else if(W.visible){const j=T(D,W,S,M);D.onBeforeShadow(i,D,A,L,H,j,null),i.renderBufferDirect(L,null,H,j,D,null),D.onAfterShadow(i,D,A,L,H,j,null)}}const X=D.children;for(let H=0,W=X.length;H<W;H++)E(X[H],A,L,S,M)}function C(D){D.target.removeEventListener("dispose",C);for(const L in c){const S=c[L],M=D.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const l7={[v1]:x1,[M1]:y1,[S1]:T1,[_n]:E1,[x1]:v1,[y1]:M1,[T1]:S1,[E1]:_n};function c7(i,e){function t(){let P=!1;const e0=new oe;let i0=null;const d0=new oe(0,0,0,0);return{setMask:function($){i0!==$&&!P&&(i.colorMask($,$,$,$),i0=$)},setLocked:function($){P=$},setClear:function($,q,m0,D0,Q0){Q0===!0&&($*=D0,q*=D0,m0*=D0),e0.set($,q,m0,D0),d0.equals(e0)===!1&&(i.clearColor($,q,m0,D0),d0.copy(e0))},reset:function(){P=!1,i0=null,d0.set(-1,0,0,0)}}}function n(){let P=!1,e0=!1,i0=null,d0=null,$=null;return{setReversed:function(q){if(e0!==q){const m0=e.get("EXT_clip_control");q?m0.clipControlEXT(m0.LOWER_LEFT_EXT,m0.ZERO_TO_ONE_EXT):m0.clipControlEXT(m0.LOWER_LEFT_EXT,m0.NEGATIVE_ONE_TO_ONE_EXT),e0=q;const D0=$;$=null,this.setClear(D0)}},getReversed:function(){return e0},setTest:function(q){q?n0(i.DEPTH_TEST):b0(i.DEPTH_TEST)},setMask:function(q){i0!==q&&!P&&(i.depthMask(q),i0=q)},setFunc:function(q){if(e0&&(q=l7[q]),d0!==q){switch(q){case v1:i.depthFunc(i.NEVER);break;case x1:i.depthFunc(i.ALWAYS);break;case M1:i.depthFunc(i.LESS);break;case _n:i.depthFunc(i.LEQUAL);break;case S1:i.depthFunc(i.EQUAL);break;case E1:i.depthFunc(i.GEQUAL);break;case y1:i.depthFunc(i.GREATER);break;case T1:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}d0=q}},setLocked:function(q){P=q},setClear:function(q){$!==q&&(e0&&(q=1-q),i.clearDepth(q),$=q)},reset:function(){P=!1,i0=null,d0=null,$=null,e0=!1}}}function r(){let P=!1,e0=null,i0=null,d0=null,$=null,q=null,m0=null,D0=null,Q0=null;return{setTest:function(X0){P||(X0?n0(i.STENCIL_TEST):b0(i.STENCIL_TEST))},setMask:function(X0){e0!==X0&&!P&&(i.stencilMask(X0),e0=X0)},setFunc:function(X0,it,qe){(i0!==X0||d0!==it||$!==qe)&&(i.stencilFunc(X0,it,qe),i0=X0,d0=it,$=qe)},setOp:function(X0,it,qe){(q!==X0||m0!==it||D0!==qe)&&(i.stencilOp(X0,it,qe),q=X0,m0=it,D0=qe)},setLocked:function(X0){P=X0},setClear:function(X0){Q0!==X0&&(i.clearStencil(X0),Q0=X0)},reset:function(){P=!1,e0=null,i0=null,d0=null,$=null,q=null,m0=null,D0=null,Q0=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,d=null,R=null,T=null,E=null,C=null,D=null,A=new H0(0,0,0),L=0,S=!1,M=null,b=null,X=null,H=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=K>=2);let s0=null,h0={};const S0=i.getParameter(i.SCISSOR_BOX),F0=i.getParameter(i.VIEWPORT),ne=new oe().fromArray(S0),Z0=new oe().fromArray(F0);function G(P,e0,i0,d0){const $=new Uint8Array(4),q=i.createTexture();i.bindTexture(P,q),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let m0=0;m0<i0;m0++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(e0,0,i.RGBA,1,1,d0,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(e0+m0,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return q}const a0={};a0[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),a0[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),a0[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),a0[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),n0(i.DEPTH_TEST),a.setFunc(_n),W0(!1),M0(Rr),n0(i.CULL_FACE),J0(Et);function n0(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function b0(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function A0(P,e0){return u[P]!==e0?(i.bindFramebuffer(P,e0),u[P]=e0,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=e0),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=e0),!0):!1}function P0(P,e0){let i0=p,d0=!1;if(P){i0=f.get(e0),i0===void 0&&(i0=[],f.set(e0,i0));const $=P.textures;if(i0.length!==$.length||i0[0]!==i.COLOR_ATTACHMENT0){for(let q=0,m0=$.length;q<m0;q++)i0[q]=i.COLOR_ATTACHMENT0+q;i0.length=$.length,d0=!0}}else i0[0]!==i.BACK&&(i0[0]=i.BACK,d0=!0);d0&&i.drawBuffers(i0)}function ce(P){return v!==P?(i.useProgram(P),v=P,!0):!1}const k0={[Ft]:i.FUNC_ADD,[Ka]:i.FUNC_SUBTRACT,[Za]:i.FUNC_REVERSE_SUBTRACT};k0[$a]=i.MIN,k0[Ja]=i.MAX;const w={[Qa]:i.ZERO,[eo]:i.ONE,[to]:i.SRC_COLOR,[_1]:i.SRC_ALPHA,[oo]:i.SRC_ALPHA_SATURATE,[so]:i.DST_COLOR,[io]:i.DST_ALPHA,[no]:i.ONE_MINUS_SRC_COLOR,[g1]:i.ONE_MINUS_SRC_ALPHA,[ao]:i.ONE_MINUS_DST_COLOR,[ro]:i.ONE_MINUS_DST_ALPHA,[lo]:i.CONSTANT_COLOR,[co]:i.ONE_MINUS_CONSTANT_COLOR,[ho]:i.CONSTANT_ALPHA,[uo]:i.ONE_MINUS_CONSTANT_ALPHA};function J0(P,e0,i0,d0,$,q,m0,D0,Q0,X0){if(P===Et){g===!0&&(b0(i.BLEND),g=!1);return}if(g===!1&&(n0(i.BLEND),g=!0),P!==ja){if(P!==m||X0!==S){if((d!==Ft||E!==Ft)&&(i.blendEquation(i.FUNC_ADD),d=Ft,E=Ft),X0)switch(P){case fn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFunc(i.ONE,i.ONE);break;case Pr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}R=null,T=null,C=null,D=null,A.set(0,0,0),L=0,m=P,S=X0}return}$=$||e0,q=q||i0,m0=m0||d0,(e0!==d||$!==E)&&(i.blendEquationSeparate(k0[e0],k0[$]),d=e0,E=$),(i0!==R||d0!==T||q!==C||m0!==D)&&(i.blendFuncSeparate(w[i0],w[d0],w[q],w[m0]),R=i0,T=d0,C=q,D=m0),(D0.equals(A)===!1||Q0!==L)&&(i.blendColor(D0.r,D0.g,D0.b,Q0),A.copy(D0),L=Q0),m=P,S=!1}function y0(P,e0){P.side===ht?b0(i.CULL_FACE):n0(i.CULL_FACE);let i0=P.side===Ae;e0&&(i0=!i0),W0(i0),P.blending===fn&&P.transparent===!1?J0(Et):J0(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const d0=P.stencilWrite;o.setTest(d0),d0&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),f0(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?n0(i.SAMPLE_ALPHA_TO_COVERAGE):b0(i.SAMPLE_ALPHA_TO_COVERAGE)}function W0(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function M0(P){P!==Xa?(n0(i.CULL_FACE),P!==b&&(P===Rr?i.cullFace(i.BACK):P===Ya?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):b0(i.CULL_FACE),b=P}function ie(P){P!==X&&(Y&&i.lineWidth(P),X=P)}function f0(P,e0,i0){P?(n0(i.POLYGON_OFFSET_FILL),(H!==e0||W!==i0)&&(i.polygonOffset(e0,i0),H=e0,W=i0)):b0(i.POLYGON_OFFSET_FILL)}function O0(P){P?n0(i.SCISSOR_TEST):b0(i.SCISSOR_TEST)}function me(P){P===void 0&&(P=i.TEXTURE0+j-1),s0!==P&&(i.activeTexture(P),s0=P)}function he(P,e0,i0){i0===void 0&&(s0===null?i0=i.TEXTURE0+j-1:i0=s0);let d0=h0[i0];d0===void 0&&(d0={type:void 0,texture:void 0},h0[i0]=d0),(d0.type!==P||d0.texture!==e0)&&(s0!==i0&&(i.activeTexture(i0),s0=i0),i.bindTexture(P,e0||a0[P]),d0.type=P,d0.texture=e0)}function y(){const P=h0[s0];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function x0(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function t0(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _0(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function g0(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function c0(P){ne.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function R0(P){Z0.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Z0.copy(P))}function v0(P,e0){let i0=c.get(e0);i0===void 0&&(i0=new WeakMap,c.set(e0,i0));let d0=i0.get(P);d0===void 0&&(d0=i.getUniformBlockIndex(e0,P.name),i0.set(P,d0))}function o0(P,e0){const d0=c.get(e0).get(P);l.get(e0)!==d0&&(i.uniformBlockBinding(e0,d0,P.__bindingPointIndex),l.set(e0,d0))}function U0(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},s0=null,h0={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,d=null,R=null,T=null,E=null,C=null,D=null,A=new H0(0,0,0),L=0,S=!1,M=null,b=null,X=null,H=null,W=null,ne.set(0,0,i.canvas.width,i.canvas.height),Z0.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:n0,disable:b0,bindFramebuffer:A0,drawBuffers:P0,useProgram:ce,setBlending:J0,setMaterial:y0,setFlipSided:W0,setCullFace:M0,setLineWidth:ie,setPolygonOffset:f0,setScissorTest:O0,activeTexture:me,bindTexture:he,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:g0,texImage3D:Q,updateUBOMapping:v0,uniformBlockBinding:o0,texStorage2D:t0,texStorage3D:_0,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:x0,scissor:c0,viewport:R0,reset:U0}}function h7(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new L0,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,_){return p?new OffscreenCanvas(y,_):Ti("canvas")}function g(y,_,F){let V=1;const Z=he(y);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(V*Z.width),x0=Math.floor(V*Z.height);u===void 0&&(u=v(k,x0));const t0=_?v(k,x0):u;return t0.width=k,t0.height=x0,t0.getContext("2d").drawImage(y,0,0,k,x0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+x0+")."),t0}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,F,V,Z=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=_;if(_===i.RED&&(F===i.FLOAT&&(k=i.R32F),F===i.HALF_FLOAT&&(k=i.R16F),F===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.R8UI),F===i.UNSIGNED_SHORT&&(k=i.R16UI),F===i.UNSIGNED_INT&&(k=i.R32UI),F===i.BYTE&&(k=i.R8I),F===i.SHORT&&(k=i.R16I),F===i.INT&&(k=i.R32I)),_===i.RG&&(F===i.FLOAT&&(k=i.RG32F),F===i.HALF_FLOAT&&(k=i.RG16F),F===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RG8UI),F===i.UNSIGNED_SHORT&&(k=i.RG16UI),F===i.UNSIGNED_INT&&(k=i.RG32UI),F===i.BYTE&&(k=i.RG8I),F===i.SHORT&&(k=i.RG16I),F===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGB8UI),F===i.UNSIGNED_SHORT&&(k=i.RGB16UI),F===i.UNSIGNED_INT&&(k=i.RGB32UI),F===i.BYTE&&(k=i.RGB8I),F===i.SHORT&&(k=i.RGB16I),F===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),F===i.UNSIGNED_INT&&(k=i.RGBA32UI),F===i.BYTE&&(k=i.RGBA8I),F===i.SHORT&&(k=i.RGBA16I),F===i.INT&&(k=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),_===i.RGBA){const x0=Z?Ei:G0.getTransfer(V);F===i.FLOAT&&(k=i.RGBA32F),F===i.HALF_FLOAT&&(k=i.RGBA16F),F===i.UNSIGNED_BYTE&&(k=x0===q0?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(y,_){let F;return y?_===null||_===kt||_===Nn?F=i.DEPTH24_STENCIL8:_===ut?F=i.DEPTH32F_STENCIL8:_===In&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===kt||_===Nn?F=i.DEPTH_COMPONENT24:_===ut?F=i.DEPTH_COMPONENT32F:_===In&&(F=i.DEPTH_COMPONENT16),F}function C(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xe&&y.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function D(y){const _=y.target;_.removeEventListener("dispose",D),L(_),_.isVideoTexture&&h.delete(_)}function A(y){const _=y.target;_.removeEventListener("dispose",A),M(_)}function L(y){const _=n.get(y);if(_.__webglInit===void 0)return;const F=y.source,V=f.get(F);if(V){const Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(y),Object.keys(V).length===0&&f.delete(F)}n.remove(y)}function S(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const F=y.source,V=f.get(F);delete V[_.__cacheKey],a.memory.textures--}function M(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=y.textures;for(let V=0,Z=F.length;V<Z;V++){const k=n.get(F[V]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(y)}let b=0;function X(){b=0}function H(){const y=b;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),b+=1,y}function W(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function j(y,_){const F=n.get(y);if(y.isVideoTexture&&O0(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{a0(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Y(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){a0(F,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function K(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){a0(F,y,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function z(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){n0(F,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const s0={[w1]:i.REPEAT,[Bt]:i.CLAMP_TO_EDGE,[R1]:i.MIRRORED_REPEAT},h0={[Xe]:i.NEAREST,[Eo]:i.NEAREST_MIPMAP_NEAREST,[Wn]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Fi]:i.LINEAR_MIPMAP_NEAREST,[zt]:i.LINEAR_MIPMAP_LINEAR},S0={[Ao]:i.NEVER,[Lo]:i.ALWAYS,[wo]:i.LESS,[Js]:i.LEQUAL,[Ro]:i.EQUAL,[Do]:i.GEQUAL,[Co]:i.GREATER,[Po]:i.NOTEQUAL};function F0(y,_){if(_.type===ut&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===Fi||_.magFilter===Wn||_.magFilter===zt||_.minFilter===Ke||_.minFilter===Fi||_.minFilter===Wn||_.minFilter===zt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,s0[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,s0[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,s0[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,h0[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,h0[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,S0[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xe||_.minFilter!==Wn&&_.minFilter!==zt||_.type===ut&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ne(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",D));const V=_.source;let Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));const k=W(_);if(k!==y.__cacheKey){Z[k]===void 0&&(Z[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[k].usedTimes++;const x0=Z[y.__cacheKey];x0!==void 0&&(Z[y.__cacheKey].usedTimes--,x0.usedTimes===0&&S(_)),y.__cacheKey=k,y.__webglTexture=Z[k].texture}return F}function Z0(y,_,F){return Math.floor(Math.floor(y/F)/_)}function G(y,_,F,V){const k=y.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{k.sort((Q,c0)=>Q.start-c0.start);let x0=0;for(let Q=1;Q<k.length;Q++){const c0=k[x0],R0=k[Q],v0=c0.start+c0.count,o0=Z0(R0.start,_.width,4),U0=Z0(c0.start,_.width,4);R0.start<=v0+1&&o0===U0&&Z0(R0.start+R0.count-1,_.width,4)===o0?c0.count=Math.max(c0.count,R0.start+R0.count-c0.start):(++x0,k[x0]=R0)}k.length=x0+1;const t0=i.getParameter(i.UNPACK_ROW_LENGTH),_0=i.getParameter(i.UNPACK_SKIP_PIXELS),g0=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,c0=k.length;Q<c0;Q++){const R0=k[Q],v0=Math.floor(R0.start/4),o0=Math.ceil(R0.count/4),U0=v0%_.width,P=Math.floor(v0/_.width),e0=o0,i0=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,U0),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,U0,P,e0,i0,F,V,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,t0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_0),i.pixelStorei(i.UNPACK_SKIP_ROWS,g0)}}function a0(y,_,F){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const Z=ne(y,_),k=_.source;t.bindTexture(V,y.__webglTexture,i.TEXTURE0+F);const x0=n.get(k);if(k.version!==x0.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const t0=G0.getPrimaries(G0.workingColorSpace),_0=_.colorSpace===Mt?null:G0.getPrimaries(_.colorSpace),g0=_.colorSpace===Mt||t0===_0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,g0);let Q=g(_.image,!1,r.maxTextureSize);Q=me(_,Q);const c0=s.convert(_.format,_.colorSpace),R0=s.convert(_.type);let v0=T(_.internalFormat,c0,R0,_.colorSpace,_.isVideoTexture);F0(V,_);let o0;const U0=_.mipmaps,P=_.isVideoTexture!==!0,e0=x0.__version===void 0||Z===!0,i0=k.dataReady,d0=C(_,Q);if(_.isDepthTexture)v0=E(_.format===On,_.type),e0&&(P?t.texStorage2D(i.TEXTURE_2D,1,v0,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,v0,Q.width,Q.height,0,c0,R0,null));else if(_.isDataTexture)if(U0.length>0){P&&e0&&t.texStorage2D(i.TEXTURE_2D,d0,v0,U0[0].width,U0[0].height);for(let $=0,q=U0.length;$<q;$++)o0=U0[$],P?i0&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,o0.width,o0.height,c0,R0,o0.data):t.texImage2D(i.TEXTURE_2D,$,v0,o0.width,o0.height,0,c0,R0,o0.data);_.generateMipmaps=!1}else P?(e0&&t.texStorage2D(i.TEXTURE_2D,d0,v0,Q.width,Q.height),i0&&G(_,Q,c0,R0)):t.texImage2D(i.TEXTURE_2D,0,v0,Q.width,Q.height,0,c0,R0,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&e0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,d0,v0,U0[0].width,U0[0].height,Q.depth);for(let $=0,q=U0.length;$<q;$++)if(o0=U0[$],_.format!==We)if(c0!==null)if(P){if(i0)if(_.layerUpdates.size>0){const m0=as(o0.width,o0.height,_.format,_.type);for(const D0 of _.layerUpdates){const Q0=o0.data.subarray(D0*m0/o0.data.BYTES_PER_ELEMENT,(D0+1)*m0/o0.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,D0,o0.width,o0.height,1,c0,Q0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,o0.width,o0.height,Q.depth,c0,o0.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,v0,o0.width,o0.height,Q.depth,0,o0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?i0&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,o0.width,o0.height,Q.depth,c0,R0,o0.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,v0,o0.width,o0.height,Q.depth,0,c0,R0,o0.data)}else{P&&e0&&t.texStorage2D(i.TEXTURE_2D,d0,v0,U0[0].width,U0[0].height);for(let $=0,q=U0.length;$<q;$++)o0=U0[$],_.format!==We?c0!==null?P?i0&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,o0.width,o0.height,c0,o0.data):t.compressedTexImage2D(i.TEXTURE_2D,$,v0,o0.width,o0.height,0,o0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?i0&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,o0.width,o0.height,c0,R0,o0.data):t.texImage2D(i.TEXTURE_2D,$,v0,o0.width,o0.height,0,c0,R0,o0.data)}else if(_.isDataArrayTexture)if(P){if(e0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,d0,v0,Q.width,Q.height,Q.depth),i0)if(_.layerUpdates.size>0){const $=as(Q.width,Q.height,_.format,_.type);for(const q of _.layerUpdates){const m0=Q.data.subarray(q*$/Q.data.BYTES_PER_ELEMENT,(q+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,c0,R0,m0)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,c0,R0,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,v0,Q.width,Q.height,Q.depth,0,c0,R0,Q.data);else if(_.isData3DTexture)P?(e0&&t.texStorage3D(i.TEXTURE_3D,d0,v0,Q.width,Q.height,Q.depth),i0&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,c0,R0,Q.data)):t.texImage3D(i.TEXTURE_3D,0,v0,Q.width,Q.height,Q.depth,0,c0,R0,Q.data);else if(_.isFramebufferTexture){if(e0)if(P)t.texStorage2D(i.TEXTURE_2D,d0,v0,Q.width,Q.height);else{let $=Q.width,q=Q.height;for(let m0=0;m0<d0;m0++)t.texImage2D(i.TEXTURE_2D,m0,v0,$,q,0,c0,R0,null),$>>=1,q>>=1}}else if(U0.length>0){if(P&&e0){const $=he(U0[0]);t.texStorage2D(i.TEXTURE_2D,d0,v0,$.width,$.height)}for(let $=0,q=U0.length;$<q;$++)o0=U0[$],P?i0&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,c0,R0,o0):t.texImage2D(i.TEXTURE_2D,$,v0,c0,R0,o0);_.generateMipmaps=!1}else if(P){if(e0){const $=he(Q);t.texStorage2D(i.TEXTURE_2D,d0,v0,$.width,$.height)}i0&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,c0,R0,Q)}else t.texImage2D(i.TEXTURE_2D,0,v0,c0,R0,Q);m(_)&&d(V),x0.__version=k.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function n0(y,_,F){if(_.image.length!==6)return;const V=ne(y,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const k=n.get(Z);if(Z.version!==k.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const x0=G0.getPrimaries(G0.workingColorSpace),t0=_.colorSpace===Mt?null:G0.getPrimaries(_.colorSpace),_0=_.colorSpace===Mt||x0===t0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_0);const g0=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,c0=[];for(let q=0;q<6;q++)!g0&&!Q?c0[q]=g(_.image[q],!0,r.maxCubemapSize):c0[q]=Q?_.image[q].image:_.image[q],c0[q]=me(_,c0[q]);const R0=c0[0],v0=s.convert(_.format,_.colorSpace),o0=s.convert(_.type),U0=T(_.internalFormat,v0,o0,_.colorSpace),P=_.isVideoTexture!==!0,e0=k.__version===void 0||V===!0,i0=Z.dataReady;let d0=C(_,R0);F0(i.TEXTURE_CUBE_MAP,_);let $;if(g0){P&&e0&&t.texStorage2D(i.TEXTURE_CUBE_MAP,d0,U0,R0.width,R0.height);for(let q=0;q<6;q++){$=c0[q].mipmaps;for(let m0=0;m0<$.length;m0++){const D0=$[m0];_.format!==We?v0!==null?P?i0&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0,0,0,D0.width,D0.height,v0,D0.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0,U0,D0.width,D0.height,0,D0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?i0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0,0,0,D0.width,D0.height,v0,o0,D0.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0,U0,D0.width,D0.height,0,v0,o0,D0.data)}}}else{if($=_.mipmaps,P&&e0){$.length>0&&d0++;const q=he(c0[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,d0,U0,q.width,q.height)}for(let q=0;q<6;q++)if(Q){P?i0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,c0[q].width,c0[q].height,v0,o0,c0[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,U0,c0[q].width,c0[q].height,0,v0,o0,c0[q].data);for(let m0=0;m0<$.length;m0++){const Q0=$[m0].image[q].image;P?i0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0+1,0,0,Q0.width,Q0.height,v0,o0,Q0.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0+1,U0,Q0.width,Q0.height,0,v0,o0,Q0.data)}}else{P?i0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,v0,o0,c0[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,U0,v0,o0,c0[q]);for(let m0=0;m0<$.length;m0++){const D0=$[m0];P?i0&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0+1,0,0,v0,o0,D0.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,m0+1,U0,v0,o0,D0.image[q])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),k.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function b0(y,_,F,V,Z,k){const x0=s.convert(F.format,F.colorSpace),t0=s.convert(F.type),_0=T(F.internalFormat,x0,t0,F.colorSpace),g0=n.get(_),Q=n.get(F);if(Q.__renderTarget=_,!g0.__hasExternalTextures){const c0=Math.max(1,_.width>>k),R0=Math.max(1,_.height>>k);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,_0,c0,R0,_.depth,0,x0,t0,null):t.texImage2D(Z,k,_0,c0,R0,0,x0,t0,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),f0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Q.__webglTexture,0,ie(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Q.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function A0(y,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,k=E(_.stencilBuffer,Z),x0=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,t0=ie(_);f0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,t0,k,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,t0,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,x0,i.RENDERBUFFER,y)}else{const V=_.textures;for(let Z=0;Z<V.length;Z++){const k=V[Z],x0=s.convert(k.format,k.colorSpace),t0=s.convert(k.type),_0=T(k.internalFormat,x0,t0,k.colorSpace),g0=ie(_);F&&f0(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,g0,_0,_.width,_.height):f0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,g0,_0,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_0,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function P0(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Z=V.__webglTexture,k=ie(_);if(_.depthTexture.format===Fn)f0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===On)f0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ce(y){const _=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=y.texture.mipmaps;V&&V.length>0?P0(_.__webglFramebuffer[0],y):P0(_.__webglFramebuffer,y)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),A0(_.__webglDepthbuffer[V],y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}else{const V=y.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),A0(_.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function k0(y,_,F){const V=n.get(y);_!==void 0&&b0(V.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ce(y)}function w(y){const _=y.texture,F=n.get(y),V=n.get(_);y.addEventListener("dispose",A);const Z=y.textures,k=y.isWebGLCubeRenderTarget===!0,x0=Z.length>1;if(x0||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,a.memory.textures++),k){F.__webglFramebuffer=[];for(let t0=0;t0<6;t0++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[t0]=[];for(let _0=0;_0<_.mipmaps.length;_0++)F.__webglFramebuffer[t0][_0]=i.createFramebuffer()}else F.__webglFramebuffer[t0]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let t0=0;t0<_.mipmaps.length;t0++)F.__webglFramebuffer[t0]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(x0)for(let t0=0,_0=Z.length;t0<_0;t0++){const g0=n.get(Z[t0]);g0.__webglTexture===void 0&&(g0.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&f0(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let t0=0;t0<Z.length;t0++){const _0=Z[t0];F.__webglColorRenderbuffer[t0]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[t0]);const g0=s.convert(_0.format,_0.colorSpace),Q=s.convert(_0.type),c0=T(_0.internalFormat,g0,Q,_0.colorSpace,y.isXRRenderTarget===!0),R0=ie(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,R0,c0,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+t0,i.RENDERBUFFER,F.__webglColorRenderbuffer[t0])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),A0(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),F0(i.TEXTURE_CUBE_MAP,_);for(let t0=0;t0<6;t0++)if(_.mipmaps&&_.mipmaps.length>0)for(let _0=0;_0<_.mipmaps.length;_0++)b0(F.__webglFramebuffer[t0][_0],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+t0,_0);else b0(F.__webglFramebuffer[t0],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+t0,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(x0){for(let t0=0,_0=Z.length;t0<_0;t0++){const g0=Z[t0],Q=n.get(g0);let c0=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(c0=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(c0,Q.__webglTexture),F0(c0,g0),b0(F.__webglFramebuffer,y,g0,i.COLOR_ATTACHMENT0+t0,c0,0),m(g0)&&d(c0)}t.unbindTexture()}else{let t0=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(t0=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(t0,V.__webglTexture),F0(t0,_),_.mipmaps&&_.mipmaps.length>0)for(let _0=0;_0<_.mipmaps.length;_0++)b0(F.__webglFramebuffer[_0],y,_,i.COLOR_ATTACHMENT0,t0,_0);else b0(F.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,t0,0);m(_)&&d(t0),t.unbindTexture()}y.depthBuffer&&ce(y)}function J0(y){const _=y.textures;for(let F=0,V=_.length;F<V;F++){const Z=_[F];if(m(Z)){const k=R(y),x0=n.get(Z).__webglTexture;t.bindTexture(k,x0),d(k),t.unbindTexture()}}}const y0=[],W0=[];function M0(y){if(y.samples>0){if(f0(y)===!1){const _=y.textures,F=y.width,V=y.height;let Z=i.COLOR_BUFFER_BIT;const k=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x0=n.get(y),t0=_.length>1;if(t0)for(let g0=0;g0<_.length;g0++)t.bindFramebuffer(i.FRAMEBUFFER,x0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+g0,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,x0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+g0,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,x0.__webglMultisampledFramebuffer);const _0=y.texture.mipmaps;_0&&_0.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,x0.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,x0.__webglFramebuffer);for(let g0=0;g0<_.length;g0++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),t0){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,x0.__webglColorRenderbuffer[g0]);const Q=n.get(_[g0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,Z,i.NEAREST),l===!0&&(y0.length=0,W0.length=0,y0.push(i.COLOR_ATTACHMENT0+g0),y.depthBuffer&&y.resolveDepthBuffer===!1&&(y0.push(k),W0.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W0)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,y0))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),t0)for(let g0=0;g0<_.length;g0++){t.bindFramebuffer(i.FRAMEBUFFER,x0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+g0,i.RENDERBUFFER,x0.__webglColorRenderbuffer[g0]);const Q=n.get(_[g0]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,x0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+g0,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,x0.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ie(y){return Math.min(r.maxSamples,y.samples)}function f0(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O0(y){const _=a.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function me(y,_){const F=y.colorSpace,V=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==xn&&F!==Mt&&(G0.getTransfer(F)===q0?(V!==We||Z!==et)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function he(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=k0,this.setupRenderTarget=w,this.updateRenderTargetMipmap=J0,this.updateMultisampleRenderTarget=M0,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=b0,this.useMultisampledRTT=f0}function u7(i,e){function t(n,r=Mt){let s;const a=G0.getTransfer(r);if(n===et)return i.UNSIGNED_BYTE;if(n===lr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xs)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gs)return i.BYTE;if(n===Ws)return i.SHORT;if(n===In)return i.UNSIGNED_SHORT;if(n===or)return i.INT;if(n===kt)return i.UNSIGNED_INT;if(n===ut)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Ys)return i.ALPHA;if(n===qs)return i.RGB;if(n===We)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===On)return i.DEPTH_STENCIL;if(n===js)return i.RED;if(n===hr)return i.RED_INTEGER;if(n===Ks)return i.RG;if(n===ur)return i.RG_INTEGER;if(n===dr)return i.RGBA_INTEGER;if(n===mi||n===_i||n===gi||n===vi)if(a===q0)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mi)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mi)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_i)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gi)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vi)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===C1||n===P1||n===D1||n===L1)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===C1)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===P1)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===D1)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===L1)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===U1||n===I1||n===N1)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===U1||n===I1)return a===q0?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===N1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===F1||n===O1||n===B1||n===z1||n===H1||n===k1||n===V1||n===G1||n===W1||n===X1||n===Y1||n===q1||n===j1||n===K1)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===F1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===O1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===B1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===z1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===H1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===k1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===V1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===G1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===W1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===X1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Y1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===q1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===j1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===K1)return a===q0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xi||n===Z1||n===$1)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xi)return a===q0?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Z1)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$1)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zs||n===J1||n===Q1||n===er)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xi)return s.COMPRESSED_RED_RGTC1_EXT;if(n===J1)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Q1)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===er)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xa extends we{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const d7=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f7=`
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

}`;class p7{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:d7,fragmentShader:f7,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m7 extends Xt{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,v=null;const g=new p7,m={},d=t.getContextAttributes();let R=null,T=null;const E=[],C=[],D=new L0;let A=null;const L=new Oe;L.viewport=new oe;const S=new Oe;S.viewport=new oe;const M=[L,S],b=new I2;let X=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let a0=E[G];return a0===void 0&&(a0=new i1,E[G]=a0),a0.getTargetRaySpace()},this.getControllerGrip=function(G){let a0=E[G];return a0===void 0&&(a0=new i1,E[G]=a0),a0.getGripSpace()},this.getHand=function(G){let a0=E[G];return a0===void 0&&(a0=new i1,E[G]=a0),a0.getHandSpace()};function W(G){const a0=C.indexOf(G.inputSource);if(a0===-1)return;const n0=E[a0];n0!==void 0&&(n0.update(G.inputSource,G.frame,c||a),n0.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let G=0;G<E.length;G++){const a0=C[G];a0!==null&&(C[G]=null,E[G].disconnect(a0))}X=null,H=null,g.reset();for(const G in m)delete m[G];e.setRenderTarget(R),p=null,f=null,u=null,r=null,T=null,Z0.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let n0=null,b0=null,A0=null;d.depth&&(A0=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n0=d.stencil?On:Fn,b0=d.stencil?Nn:kt);const P0={colorFormat:t.RGBA8,depthFormat:A0,scaleFactor:s};f=u.createProjectionLayer(P0),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Gt(f.textureWidth,f.textureHeight,{format:We,type:et,depthTexture:new ua(f.textureWidth,f.textureHeight,b0,void 0,void 0,void 0,void 0,void 0,void 0,n0),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const n0={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,n0),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Gt(p.framebufferWidth,p.framebufferHeight,{format:We,type:et,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Z0.setContext(r),Z0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(G){for(let a0=0;a0<G.removed.length;a0++){const n0=G.removed[a0],b0=C.indexOf(n0);b0>=0&&(C[b0]=null,E[b0].disconnect(n0))}for(let a0=0;a0<G.added.length;a0++){const n0=G.added[a0];let b0=C.indexOf(n0);if(b0===-1){for(let P0=0;P0<E.length;P0++)if(P0>=C.length){C.push(n0),b0=P0;break}else if(C[P0]===null){C[P0]=n0,b0=P0;break}if(b0===-1)break}const A0=E[b0];A0&&A0.connect(n0)}}const K=new N,z=new N;function s0(G,a0,n0){K.setFromMatrixPosition(a0.matrixWorld),z.setFromMatrixPosition(n0.matrixWorld);const b0=K.distanceTo(z),A0=a0.projectionMatrix.elements,P0=n0.projectionMatrix.elements,ce=A0[14]/(A0[10]-1),k0=A0[14]/(A0[10]+1),w=(A0[9]+1)/A0[5],J0=(A0[9]-1)/A0[5],y0=(A0[8]-1)/A0[0],W0=(P0[8]+1)/P0[0],M0=ce*y0,ie=ce*W0,f0=b0/(-y0+W0),O0=f0*-y0;if(a0.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(O0),G.translateZ(f0),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),A0[10]===-1)G.projectionMatrix.copy(a0.projectionMatrix),G.projectionMatrixInverse.copy(a0.projectionMatrixInverse);else{const me=ce+f0,he=k0+f0,y=M0-O0,_=ie+(b0-O0),F=w*k0/he*me,V=J0*k0/he*me;G.projectionMatrix.makePerspective(y,_,F,V,me,he),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function h0(G,a0){a0===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(a0.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let a0=G.near,n0=G.far;g.texture!==null&&(g.depthNear>0&&(a0=g.depthNear),g.depthFar>0&&(n0=g.depthFar)),b.near=S.near=L.near=a0,b.far=S.far=L.far=n0,(X!==b.near||H!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),X=b.near,H=b.far),b.layers.mask=G.layers.mask|6,L.layers.mask=b.layers.mask&3,S.layers.mask=b.layers.mask&5;const b0=G.parent,A0=b.cameras;h0(b,b0);for(let P0=0;P0<A0.length;P0++)h0(A0[P0],b0);A0.length===2?s0(b,L,S):b.projectionMatrix.copy(L.projectionMatrix),S0(G,b,b0)};function S0(G,a0,n0){n0===null?G.matrix.copy(a0.matrixWorld):(G.matrix.copy(n0.matrixWorld),G.matrix.invert(),G.matrix.multiply(a0.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(a0.projectionMatrix),G.projectionMatrixInverse.copy(a0.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Bn*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)},this.getCameraTexture=function(G){return m[G]};let F0=null;function ne(G,a0){if(h=a0.getViewerPose(c||a),v=a0,h!==null){const n0=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let b0=!1;n0.length!==b.cameras.length&&(b.cameras.length=0,b0=!0);for(let k0=0;k0<n0.length;k0++){const w=n0[k0];let J0=null;if(p!==null)J0=p.getViewport(w);else{const W0=u.getViewSubImage(f,w);J0=W0.viewport,k0===0&&(e.setRenderTargetTextures(T,W0.colorTexture,W0.depthStencilTexture),e.setRenderTarget(T))}let y0=M[k0];y0===void 0&&(y0=new Oe,y0.layers.enable(k0),y0.viewport=new oe,M[k0]=y0),y0.matrix.fromArray(w.transform.matrix),y0.matrix.decompose(y0.position,y0.quaternion,y0.scale),y0.projectionMatrix.fromArray(w.projectionMatrix),y0.projectionMatrixInverse.copy(y0.projectionMatrix).invert(),y0.viewport.set(J0.x,J0.y,J0.width,J0.height),k0===0&&(b.matrix.copy(y0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),b0===!0&&b.cameras.push(y0)}const A0=r.enabledFeatures;if(A0&&A0.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const k0=u.getDepthInformation(n0[0]);k0&&k0.isValid&&k0.texture&&g.init(k0,r.renderState)}if(A0&&A0.includes("camera-access")&&(e.state.unbindTexture(),u))for(let k0=0;k0<n0.length;k0++){const w=n0[k0].camera;if(w){let J0=m[w];J0||(J0=new xa,m[w]=J0);const y0=u.getCameraImage(w);J0.sourceTexture=y0}}}for(let n0=0;n0<E.length;n0++){const b0=C[n0],A0=E[n0];b0!==null&&A0!==void 0&&A0.update(b0,a0,c||a)}F0&&F0(G,a0),a0.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:a0}),v=null}const Z0=new pa;Z0.setAnimationLoop(ne),this.setAnimationLoop=function(G){F0=G},this.dispose=function(){}}}const Ut=new tt,_7=new le;function g7(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,oa(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,R,T,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,R,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ae&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ae&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const R=e.get(d),T=R.envMap,E=R.envMapRotation;T&&(m.envMap.value=T,Ut.copy(E),Ut.x*=-1,Ut.y*=-1,Ut.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ut.y*=-1,Ut.z*=-1),m.envMapRotation.value.setFromMatrix4(_7.makeRotationFromEuler(Ut)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ae&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const R=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function v7(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const E=T.program;n.uniformBlockBinding(R,E)}function c(R,T){let E=r[R.id];E===void 0&&(v(R),E=h(R),r[R.id]=E,R.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(R,C);const D=e.render.frame;s[R.id]!==D&&(f(R),s[R.id]=D)}function h(R){const T=u();R.__bindingPointIndex=T;const E=i.createBuffer(),C=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function u(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const T=r[R.id],E=R.uniforms,C=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,A=E.length;D<A;D++){const L=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,M=L.length;S<M;S++){const b=L[S];if(p(b,D,S,C)===!0){const X=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let j=0;j<H.length;j++){const Y=H[j],K=g(Y);typeof Y=="number"||typeof Y=="boolean"?(b.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,X+W,b.__data)):Y.isMatrix3?(b.__data[0]=Y.elements[0],b.__data[1]=Y.elements[1],b.__data[2]=Y.elements[2],b.__data[3]=0,b.__data[4]=Y.elements[3],b.__data[5]=Y.elements[4],b.__data[6]=Y.elements[5],b.__data[7]=0,b.__data[8]=Y.elements[6],b.__data[9]=Y.elements[7],b.__data[10]=Y.elements[8],b.__data[11]=0):(Y.toArray(b.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,T,E,C){const D=R.value,A=T+"_"+E;if(C[A]===void 0)return typeof D=="number"||typeof D=="boolean"?C[A]=D:C[A]=D.clone(),!0;{const L=C[A];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return C[A]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function v(R){const T=R.uniforms;let E=0;const C=16;for(let A=0,L=T.length;A<L;A++){const S=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,b=S.length;M<b;M++){const X=S[M],H=Array.isArray(X.value)?X.value:[X.value];for(let W=0,j=H.length;W<j;W++){const Y=H[W],K=g(Y),z=E%C,s0=z%K.boundary,h0=z+s0;E+=s0,h0!==0&&C-h0<K.storage&&(E+=C-h0),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=K.storage}}}const D=E%C;return D>0&&(E+=C-D),R.__size=E,R.__cache={},this}function g(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class x7{constructor(e={}){const{canvas:t=Ko(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=Fe;let D=0,A=0,L=null,S=-1,M=null;const b=new oe,X=new oe;let H=null;const W=new H0(0);let j=0,Y=t.width,K=t.height,z=1,s0=null,h0=null;const S0=new oe(0,0,Y,K),F0=new oe(0,0,Y,K);let ne=!1;const Z0=new _r;let G=!1,a0=!1;const n0=new le,b0=new N,A0=new oe,P0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function k0(){return L===null?z:1}let w=n;function J0(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ar}`),t.addEventListener("webglcontextlost",i0,!1),t.addEventListener("webglcontextrestored",d0,!1),t.addEventListener("webglcontextcreationerror",$,!1),w===null){const U="webgl2";if(w=J0(U,x),w===null)throw J0(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let y0,W0,M0,ie,f0,O0,me,he,y,_,F,V,Z,k,x0,t0,_0,g0,Q,c0,R0,v0,o0,U0;function P(){y0=new C5(w),y0.init(),v0=new u7(w,y0),W0=new E5(w,y0,e,v0),M0=new c7(w,y0),W0.reversedDepthBuffer&&f&&M0.buffers.depth.setReversed(!0),ie=new L5(w),f0=new Z6,O0=new h7(w,y0,M0,f0,W0,v0,ie),me=new T5(E),he=new R5(E),y=new B2(w),o0=new M5(w,y),_=new P5(w,y,ie,o0),F=new I5(w,_,y,ie),Q=new U5(w,W0,O0),t0=new y5(f0),V=new K6(E,me,he,y0,W0,o0,t0),Z=new g7(E,f0),k=new J6,x0=new r7(y0),g0=new x5(E,me,he,M0,F,p,l),_0=new o7(E,F,W0),U0=new v7(w,ie,W0,M0),c0=new S5(w,y0,ie),R0=new D5(w,y0,ie),ie.programs=V.programs,E.capabilities=W0,E.extensions=y0,E.properties=f0,E.renderLists=k,E.shadowMap=_0,E.state=M0,E.info=ie}P();const e0=new m7(E,w);this.xr=e0,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=y0.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=y0.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(Y,K,!1))},this.getSize=function(x){return x.set(Y,K)},this.setSize=function(x,U,O=!0){if(e0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,K=U,t.width=Math.floor(x*z),t.height=Math.floor(U*z),O===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Y*z,K*z).floor()},this.setDrawingBufferSize=function(x,U,O){Y=x,K=U,z=O,t.width=Math.floor(x*O),t.height=Math.floor(U*O),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(S0)},this.setViewport=function(x,U,O,B){x.isVector4?S0.set(x.x,x.y,x.z,x.w):S0.set(x,U,O,B),M0.viewport(b.copy(S0).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(F0)},this.setScissor=function(x,U,O,B){x.isVector4?F0.set(x.x,x.y,x.z,x.w):F0.set(x,U,O,B),M0.scissor(X.copy(F0).multiplyScalar(z).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(x){M0.setScissorTest(ne=x)},this.setOpaqueSort=function(x){s0=x},this.setTransparentSort=function(x){h0=x},this.getClearColor=function(x){return x.copy(g0.getClearColor())},this.setClearColor=function(){g0.setClearColor(...arguments)},this.getClearAlpha=function(){return g0.getClearAlpha()},this.setClearAlpha=function(){g0.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,O=!0){let B=0;if(x){let I=!1;if(L!==null){const J=L.texture.format;I=J===dr||J===ur||J===hr}if(I){const J=L.texture.type,l0=J===et||J===kt||J===In||J===Nn||J===lr||J===cr,p0=g0.getClearColor(),u0=g0.getClearAlpha(),w0=p0.r,C0=p0.g,E0=p0.b;l0?(v[0]=w0,v[1]=C0,v[2]=E0,v[3]=u0,w.clearBufferuiv(w.COLOR,0,v)):(g[0]=w0,g[1]=C0,g[2]=E0,g[3]=u0,w.clearBufferiv(w.COLOR,0,g))}else B|=w.COLOR_BUFFER_BIT}U&&(B|=w.DEPTH_BUFFER_BIT),O&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",i0,!1),t.removeEventListener("webglcontextrestored",d0,!1),t.removeEventListener("webglcontextcreationerror",$,!1),g0.dispose(),k.dispose(),x0.dispose(),f0.dispose(),me.dispose(),he.dispose(),F.dispose(),o0.dispose(),U0.dispose(),V.dispose(),e0.dispose(),e0.removeEventListener("sessionstart",qe),e0.removeEventListener("sessionend",Er),At.stop()};function i0(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function d0(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=ie.autoReset,U=_0.enabled,O=_0.autoUpdate,B=_0.needsUpdate,I=_0.type;P(),ie.autoReset=x,_0.enabled=U,_0.autoUpdate=O,_0.needsUpdate=B,_0.type=I}function $(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const U=x.target;U.removeEventListener("dispose",q),m0(U)}function m0(x){D0(x),f0.remove(x)}function D0(x){const U=f0.get(x).programs;U!==void 0&&(U.forEach(function(O){V.releaseProgram(O)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,O,B,I,J){U===null&&(U=P0);const l0=I.isMesh&&I.matrixWorld.determinant()<0,p0=za(x,U,O,B,I);M0.setMaterial(B,l0);let u0=O.index,w0=1;if(B.wireframe===!0){if(u0=_.getWireframeAttribute(O),u0===void 0)return;w0=2}const C0=O.drawRange,E0=O.attributes.position;let z0=C0.start*w0,Y0=(C0.start+C0.count)*w0;J!==null&&(z0=Math.max(z0,J.start*w0),Y0=Math.min(Y0,(J.start+J.count)*w0)),u0!==null?(z0=Math.max(z0,0),Y0=Math.min(Y0,u0.count)):E0!=null&&(z0=Math.max(z0,0),Y0=Math.min(Y0,E0.count));const ae=Y0-z0;if(ae<0||ae===1/0)return;o0.setup(I,B,p0,O,u0);let ee,$0=c0;if(u0!==null&&(ee=y.get(u0),$0=R0,$0.setIndex(ee)),I.isMesh)B.wireframe===!0?(M0.setLineWidth(B.wireframeLinewidth*k0()),$0.setMode(w.LINES)):$0.setMode(w.TRIANGLES);else if(I.isLine){let T0=B.linewidth;T0===void 0&&(T0=1),M0.setLineWidth(T0*k0()),I.isLineSegments?$0.setMode(w.LINES):I.isLineLoop?$0.setMode(w.LINE_LOOP):$0.setMode(w.LINE_STRIP)}else I.isPoints?$0.setMode(w.POINTS):I.isSprite&&$0.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)pn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$0.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(y0.get("WEBGL_multi_draw"))$0.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const T0=I._multiDrawStarts,re=I._multiDrawCounts,V0=I._multiDrawCount,Re=u0?y.get(u0).bytesPerElement:1,qt=f0.get(B).currentProgram.getUniforms();for(let Ce=0;Ce<V0;Ce++)qt.setValue(w,"_gl_DrawID",Ce),$0.render(T0[Ce]/Re,re[Ce])}else if(I.isInstancedMesh)$0.renderInstances(z0,ae,I.count);else if(O.isInstancedBufferGeometry){const T0=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,re=Math.min(O.instanceCount,T0);$0.renderInstances(z0,ae,re)}else $0.render(z0,ae)};function Q0(x,U,O){x.transparent===!0&&x.side===ht&&x.forceSinglePass===!1?(x.side=Ae,x.needsUpdate=!0,Gn(x,U,O),x.side=Tt,x.needsUpdate=!0,Gn(x,U,O),x.side=ht):Gn(x,U,O)}this.compile=function(x,U,O=null){O===null&&(O=x),d=x0.get(O),d.init(U),T.push(d),O.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),x!==O&&x.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const B=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let l0=0;l0<J.length;l0++){const p0=J[l0];Q0(p0,O,I),B.add(p0)}else Q0(J,O,I),B.add(J)}),d=T.pop(),B},this.compileAsync=function(x,U,O=null){const B=this.compile(x,U,O);return new Promise(I=>{function J(){if(B.forEach(function(l0){f0.get(l0).currentProgram.isReady()&&B.delete(l0)}),B.size===0){I(x);return}setTimeout(J,10)}y0.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let X0=null;function it(x){X0&&X0(x)}function qe(){At.stop()}function Er(){At.start()}const At=new pa;At.setAnimationLoop(it),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(x){X0=x,e0.setAnimationLoop(x),x===null?At.stop():At.start()},e0.addEventListener("sessionstart",qe),e0.addEventListener("sessionend",Er),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),e0.enabled===!0&&e0.isPresenting===!0&&(e0.cameraAutoUpdate===!0&&e0.updateCamera(U),U=e0.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,U,L),d=x0.get(x,T.length),d.init(U),T.push(d),n0.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z0.setFromProjectionMatrix(n0,Ze,U.reversedDepth),a0=this.localClippingEnabled,G=t0.init(this.clippingPlanes,a0),m=k.get(x,R.length),m.init(),R.push(m),e0.enabled===!0&&e0.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&Ii(J,U,-1/0,E.sortObjects)}Ii(x,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(s0,h0),ce=e0.enabled===!1||e0.isPresenting===!1||e0.hasDepthSensing()===!1,ce&&g0.addToRenderList(m,x),this.info.render.frame++,G===!0&&t0.beginShadows();const O=d.state.shadowsArray;_0.render(O,x,U),G===!0&&t0.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,I=m.transmissive;if(d.setupLights(),U.isArrayCamera){const J=U.cameras;if(I.length>0)for(let l0=0,p0=J.length;l0<p0;l0++){const u0=J[l0];Tr(B,I,x,u0)}ce&&g0.render(x);for(let l0=0,p0=J.length;l0<p0;l0++){const u0=J[l0];yr(m,x,u0,u0.viewport)}}else I.length>0&&Tr(B,I,x,U),ce&&g0.render(x),yr(m,x,U);L!==null&&A===0&&(O0.updateMultisampleRenderTarget(L),O0.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(E,x,U),o0.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],G===!0&&t0.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ii(x,U,O,B){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Z0.intersectsSprite(x)){B&&A0.setFromMatrixPosition(x.matrixWorld).applyMatrix4(n0);const l0=F.update(x),p0=x.material;p0.visible&&m.push(x,l0,p0,O,A0.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Z0.intersectsObject(x))){const l0=F.update(x),p0=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),A0.copy(x.boundingSphere.center)):(l0.boundingSphere===null&&l0.computeBoundingSphere(),A0.copy(l0.boundingSphere.center)),A0.applyMatrix4(x.matrixWorld).applyMatrix4(n0)),Array.isArray(p0)){const u0=l0.groups;for(let w0=0,C0=u0.length;w0<C0;w0++){const E0=u0[w0],z0=p0[E0.materialIndex];z0&&z0.visible&&m.push(x,l0,z0,O,A0.z,E0)}}else p0.visible&&m.push(x,l0,p0,O,A0.z,null)}}const J=x.children;for(let l0=0,p0=J.length;l0<p0;l0++)Ii(J[l0],U,O,B)}function yr(x,U,O,B){const I=x.opaque,J=x.transmissive,l0=x.transparent;d.setupLightsView(O),G===!0&&t0.setGlobalState(E.clippingPlanes,O),B&&M0.viewport(b.copy(B)),I.length>0&&Vn(I,U,O),J.length>0&&Vn(J,U,O),l0.length>0&&Vn(l0,U,O),M0.buffers.depth.setTest(!0),M0.buffers.depth.setMask(!0),M0.buffers.color.setMask(!0),M0.setPolygonOffset(!1)}function Tr(x,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new Gt(1,1,{generateMipmaps:!0,type:y0.has("EXT_color_buffer_half_float")||y0.has("EXT_color_buffer_float")?zn:et,minFilter:zt,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:G0.workingColorSpace}));const J=d.state.transmissionRenderTarget[B.id],l0=B.viewport||b;J.setSize(l0.z*E.transmissionResolutionScale,l0.w*E.transmissionResolutionScale);const p0=E.getRenderTarget(),u0=E.getActiveCubeFace(),w0=E.getActiveMipmapLevel();E.setRenderTarget(J),E.getClearColor(W),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),ce&&g0.render(O);const C0=E.toneMapping;E.toneMapping=yt;const E0=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),G===!0&&t0.setGlobalState(E.clippingPlanes,B),Vn(x,O,B),O0.updateMultisampleRenderTarget(J),O0.updateRenderTargetMipmap(J),y0.has("WEBGL_multisampled_render_to_texture")===!1){let z0=!1;for(let Y0=0,ae=U.length;Y0<ae;Y0++){const ee=U[Y0],$0=ee.object,T0=ee.geometry,re=ee.material,V0=ee.group;if(re.side===ht&&$0.layers.test(B.layers)){const Re=re.side;re.side=Ae,re.needsUpdate=!0,br($0,O,B,T0,re,V0),re.side=Re,re.needsUpdate=!0,z0=!0}}z0===!0&&(O0.updateMultisampleRenderTarget(J),O0.updateRenderTargetMipmap(J))}E.setRenderTarget(p0,u0,w0),E.setClearColor(W,j),E0!==void 0&&(B.viewport=E0),E.toneMapping=C0}function Vn(x,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let I=0,J=x.length;I<J;I++){const l0=x[I],p0=l0.object,u0=l0.geometry,w0=l0.group;let C0=l0.material;C0.allowOverride===!0&&B!==null&&(C0=B),p0.layers.test(O.layers)&&br(p0,U,O,u0,C0,w0)}}function br(x,U,O,B,I,J){x.onBeforeRender(E,U,O,B,I,J),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(E,U,O,B,x,J),I.transparent===!0&&I.side===ht&&I.forceSinglePass===!1?(I.side=Ae,I.needsUpdate=!0,E.renderBufferDirect(O,U,B,I,x,J),I.side=Tt,I.needsUpdate=!0,E.renderBufferDirect(O,U,B,I,x,J),I.side=ht):E.renderBufferDirect(O,U,B,I,x,J),x.onAfterRender(E,U,O,B,I,J)}function Gn(x,U,O){U.isScene!==!0&&(U=P0);const B=f0.get(x),I=d.state.lights,J=d.state.shadowsArray,l0=I.state.version,p0=V.getParameters(x,I.state,J,U,O),u0=V.getProgramCacheKey(p0);let w0=B.programs;B.environment=x.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(x.isMeshStandardMaterial?he:me).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,w0===void 0&&(x.addEventListener("dispose",q),w0=new Map,B.programs=w0);let C0=w0.get(u0);if(C0!==void 0){if(B.currentProgram===C0&&B.lightsStateVersion===l0)return wr(x,p0),C0}else p0.uniforms=V.getUniforms(x),x.onBeforeCompile(p0,E),C0=V.acquireProgram(p0,u0),w0.set(u0,C0),B.uniforms=p0.uniforms;const E0=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(E0.clippingPlanes=t0.uniform),wr(x,p0),B.needsLights=ka(x),B.lightsStateVersion=l0,B.needsLights&&(E0.ambientLightColor.value=I.state.ambient,E0.lightProbe.value=I.state.probe,E0.directionalLights.value=I.state.directional,E0.directionalLightShadows.value=I.state.directionalShadow,E0.spotLights.value=I.state.spot,E0.spotLightShadows.value=I.state.spotShadow,E0.rectAreaLights.value=I.state.rectArea,E0.ltc_1.value=I.state.rectAreaLTC1,E0.ltc_2.value=I.state.rectAreaLTC2,E0.pointLights.value=I.state.point,E0.pointLightShadows.value=I.state.pointShadow,E0.hemisphereLights.value=I.state.hemi,E0.directionalShadowMap.value=I.state.directionalShadowMap,E0.directionalShadowMatrix.value=I.state.directionalShadowMatrix,E0.spotShadowMap.value=I.state.spotShadowMap,E0.spotLightMatrix.value=I.state.spotLightMatrix,E0.spotLightMap.value=I.state.spotLightMap,E0.pointShadowMap.value=I.state.pointShadowMap,E0.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=C0,B.uniformsList=null,C0}function Ar(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Mi.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function wr(x,U){const O=f0.get(x);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function za(x,U,O,B,I){U.isScene!==!0&&(U=P0),O0.resetTextureUnits();const J=U.fog,l0=B.isMeshStandardMaterial?U.environment:null,p0=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xn,u0=(B.isMeshStandardMaterial?he:me).get(B.envMap||l0),w0=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,C0=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),E0=!!O.morphAttributes.position,z0=!!O.morphAttributes.normal,Y0=!!O.morphAttributes.color;let ae=yt;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ae=E.toneMapping);const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$0=ee!==void 0?ee.length:0,T0=f0.get(B),re=d.state.lights;if(G===!0&&(a0===!0||x!==M)){const Me=x===M&&B.id===S;t0.setState(B,x,Me)}let V0=!1;B.version===T0.__version?(T0.needsLights&&T0.lightsStateVersion!==re.state.version||T0.outputColorSpace!==p0||I.isBatchedMesh&&T0.batching===!1||!I.isBatchedMesh&&T0.batching===!0||I.isBatchedMesh&&T0.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&T0.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&T0.instancing===!1||!I.isInstancedMesh&&T0.instancing===!0||I.isSkinnedMesh&&T0.skinning===!1||!I.isSkinnedMesh&&T0.skinning===!0||I.isInstancedMesh&&T0.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&T0.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&T0.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&T0.instancingMorph===!1&&I.morphTexture!==null||T0.envMap!==u0||B.fog===!0&&T0.fog!==J||T0.numClippingPlanes!==void 0&&(T0.numClippingPlanes!==t0.numPlanes||T0.numIntersection!==t0.numIntersection)||T0.vertexAlphas!==w0||T0.vertexTangents!==C0||T0.morphTargets!==E0||T0.morphNormals!==z0||T0.morphColors!==Y0||T0.toneMapping!==ae||T0.morphTargetsCount!==$0)&&(V0=!0):(V0=!0,T0.__version=B.version);let Re=T0.currentProgram;V0===!0&&(Re=Gn(B,U,I));let qt=!1,Ce=!1,Tn=!1;const se=Re.getUniforms(),Ue=T0.uniforms;if(M0.useProgram(Re.program)&&(qt=!0,Ce=!0,Tn=!0),B.id!==S&&(S=B.id,Ce=!0),qt||M!==x){M0.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),se.setValue(w,"projectionMatrix",x.projectionMatrix),se.setValue(w,"viewMatrix",x.matrixWorldInverse);const Te=se.map.cameraPosition;Te!==void 0&&Te.setValue(w,b0.setFromMatrixPosition(x.matrixWorld)),W0.logarithmicDepthBuffer&&se.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ce=!0,Tn=!0)}if(I.isSkinnedMesh){se.setOptional(w,I,"bindMatrix"),se.setOptional(w,I,"bindMatrixInverse");const Me=I.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),se.setValue(w,"boneTexture",Me.boneTexture,O0))}I.isBatchedMesh&&(se.setOptional(w,I,"batchingTexture"),se.setValue(w,"batchingTexture",I._matricesTexture,O0),se.setOptional(w,I,"batchingIdTexture"),se.setValue(w,"batchingIdTexture",I._indirectTexture,O0),se.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&se.setValue(w,"batchingColorTexture",I._colorsTexture,O0));const Ie=O.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&Q.update(I,O,Re),(Ce||T0.receiveShadow!==I.receiveShadow)&&(T0.receiveShadow=I.receiveShadow,se.setValue(w,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ue.envMap.value=u0,Ue.flipEnvMap.value=u0.isCubeTexture&&u0.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Ue.envMapIntensity.value=U.environmentIntensity),Ce&&(se.setValue(w,"toneMappingExposure",E.toneMappingExposure),T0.needsLights&&Ha(Ue,Tn),J&&B.fog===!0&&Z.refreshFogUniforms(Ue,J),Z.refreshMaterialUniforms(Ue,B,z,K,d.state.transmissionRenderTarget[x.id]),Mi.upload(w,Ar(T0),Ue,O0)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mi.upload(w,Ar(T0),Ue,O0),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(w,"center",I.center),se.setValue(w,"modelViewMatrix",I.modelViewMatrix),se.setValue(w,"normalMatrix",I.normalMatrix),se.setValue(w,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Me=B.uniformsGroups;for(let Te=0,Ni=Me.length;Te<Ni;Te++){const wt=Me[Te];U0.update(wt,Re),U0.bind(wt,Re)}}return Re}function Ha(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function ka(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,U,O){const B=f0.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),f0.get(x.texture).__webglTexture=U,f0.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const O=f0.get(x);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Va=w.createFramebuffer();this.setRenderTarget=function(x,U=0,O=0){L=x,D=U,A=O;let B=!0,I=null,J=!1,l0=!1;if(x){const u0=f0.get(x);if(u0.__useDefaultFramebuffer!==void 0)M0.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(u0.__webglFramebuffer===void 0)O0.setupRenderTarget(x);else if(u0.__hasExternalTextures)O0.rebindTextures(x,f0.get(x.texture).__webglTexture,f0.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const E0=x.depthTexture;if(u0.__boundDepthTexture!==E0){if(E0!==null&&f0.has(E0)&&(x.width!==E0.image.width||x.height!==E0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O0.setupDepthRenderbuffer(x)}}const w0=x.texture;(w0.isData3DTexture||w0.isDataArrayTexture||w0.isCompressedArrayTexture)&&(l0=!0);const C0=f0.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(C0[U])?I=C0[U][O]:I=C0[U],J=!0):x.samples>0&&O0.useMultisampledRTT(x)===!1?I=f0.get(x).__webglMultisampledFramebuffer:Array.isArray(C0)?I=C0[O]:I=C0,b.copy(x.viewport),X.copy(x.scissor),H=x.scissorTest}else b.copy(S0).multiplyScalar(z).floor(),X.copy(F0).multiplyScalar(z).floor(),H=ne;if(O!==0&&(I=Va),M0.bindFramebuffer(w.FRAMEBUFFER,I)&&B&&M0.drawBuffers(x,I),M0.viewport(b),M0.scissor(X),M0.setScissorTest(H),J){const u0=f0.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,u0.__webglTexture,O)}else if(l0){const u0=U;for(let w0=0;w0<x.textures.length;w0++){const C0=f0.get(x.textures[w0]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+w0,C0.__webglTexture,O,u0)}}else if(x!==null&&O!==0){const u0=f0.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,u0.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(x,U,O,B,I,J,l0,p0=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let u0=f0.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&l0!==void 0&&(u0=u0[l0]),u0){M0.bindFramebuffer(w.FRAMEBUFFER,u0);try{const w0=x.textures[p0],C0=w0.format,E0=w0.type;if(!W0.textureFormatReadable(C0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W0.textureTypeReadable(E0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-B&&O>=0&&O<=x.height-I&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+p0),w.readPixels(U,O,B,I,v0.convert(C0),v0.convert(E0),J))}finally{const w0=L!==null?f0.get(L).__webglFramebuffer:null;M0.bindFramebuffer(w.FRAMEBUFFER,w0)}}},this.readRenderTargetPixelsAsync=async function(x,U,O,B,I,J,l0,p0=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let u0=f0.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&l0!==void 0&&(u0=u0[l0]),u0)if(U>=0&&U<=x.width-B&&O>=0&&O<=x.height-I){M0.bindFramebuffer(w.FRAMEBUFFER,u0);const w0=x.textures[p0],C0=w0.format,E0=w0.type;if(!W0.textureFormatReadable(C0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W0.textureTypeReadable(E0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const z0=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,z0),w.bufferData(w.PIXEL_PACK_BUFFER,J.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+p0),w.readPixels(U,O,B,I,v0.convert(C0),v0.convert(E0),0);const Y0=L!==null?f0.get(L).__webglFramebuffer:null;M0.bindFramebuffer(w.FRAMEBUFFER,Y0);const ae=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Zo(w,ae,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,z0),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,J),w.deleteBuffer(z0),w.deleteSync(ae),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,O=0){const B=Math.pow(2,-O),I=Math.floor(x.image.width*B),J=Math.floor(x.image.height*B),l0=U!==null?U.x:0,p0=U!==null?U.y:0;O0.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,l0,p0,I,J),M0.unbindTexture()};const Ga=w.createFramebuffer(),Wa=w.createFramebuffer();this.copyTextureToTexture=function(x,U,O=null,B=null,I=0,J=null){J===null&&(I!==0?(pn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let l0,p0,u0,w0,C0,E0,z0,Y0,ae;const ee=x.isCompressedTexture?x.mipmaps[J]:x.image;if(O!==null)l0=O.max.x-O.min.x,p0=O.max.y-O.min.y,u0=O.isBox3?O.max.z-O.min.z:1,w0=O.min.x,C0=O.min.y,E0=O.isBox3?O.min.z:0;else{const Ie=Math.pow(2,-I);l0=Math.floor(ee.width*Ie),p0=Math.floor(ee.height*Ie),x.isDataArrayTexture?u0=ee.depth:x.isData3DTexture?u0=Math.floor(ee.depth*Ie):u0=1,w0=0,C0=0,E0=0}B!==null?(z0=B.x,Y0=B.y,ae=B.z):(z0=0,Y0=0,ae=0);const $0=v0.convert(U.format),T0=v0.convert(U.type);let re;U.isData3DTexture?(O0.setTexture3D(U,0),re=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(O0.setTexture2DArray(U,0),re=w.TEXTURE_2D_ARRAY):(O0.setTexture2D(U,0),re=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const V0=w.getParameter(w.UNPACK_ROW_LENGTH),Re=w.getParameter(w.UNPACK_IMAGE_HEIGHT),qt=w.getParameter(w.UNPACK_SKIP_PIXELS),Ce=w.getParameter(w.UNPACK_SKIP_ROWS),Tn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ee.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,w0),w.pixelStorei(w.UNPACK_SKIP_ROWS,C0),w.pixelStorei(w.UNPACK_SKIP_IMAGES,E0);const se=x.isDataArrayTexture||x.isData3DTexture,Ue=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Ie=f0.get(x),Me=f0.get(U),Te=f0.get(Ie.__renderTarget),Ni=f0.get(Me.__renderTarget);M0.bindFramebuffer(w.READ_FRAMEBUFFER,Te.__webglFramebuffer),M0.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let wt=0;wt<u0;wt++)se&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,f0.get(x).__webglTexture,I,E0+wt),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,f0.get(U).__webglTexture,J,ae+wt)),w.blitFramebuffer(w0,C0,l0,p0,z0,Y0,l0,p0,w.DEPTH_BUFFER_BIT,w.NEAREST);M0.bindFramebuffer(w.READ_FRAMEBUFFER,null),M0.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||f0.has(x)){const Ie=f0.get(x),Me=f0.get(U);M0.bindFramebuffer(w.READ_FRAMEBUFFER,Ga),M0.bindFramebuffer(w.DRAW_FRAMEBUFFER,Wa);for(let Te=0;Te<u0;Te++)se?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ie.__webglTexture,I,E0+Te):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ie.__webglTexture,I),Ue?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.__webglTexture,J,ae+Te):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Me.__webglTexture,J),I!==0?w.blitFramebuffer(w0,C0,l0,p0,z0,Y0,l0,p0,w.COLOR_BUFFER_BIT,w.NEAREST):Ue?w.copyTexSubImage3D(re,J,z0,Y0,ae+Te,w0,C0,l0,p0):w.copyTexSubImage2D(re,J,z0,Y0,w0,C0,l0,p0);M0.bindFramebuffer(w.READ_FRAMEBUFFER,null),M0.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ue?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(re,J,z0,Y0,ae,l0,p0,u0,$0,T0,ee.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(re,J,z0,Y0,ae,l0,p0,u0,$0,ee.data):w.texSubImage3D(re,J,z0,Y0,ae,l0,p0,u0,$0,T0,ee):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,J,z0,Y0,l0,p0,$0,T0,ee.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,J,z0,Y0,ee.width,ee.height,$0,ee.data):w.texSubImage2D(w.TEXTURE_2D,J,z0,Y0,l0,p0,$0,T0,ee);w.pixelStorei(w.UNPACK_ROW_LENGTH,V0),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Re),w.pixelStorei(w.UNPACK_SKIP_PIXELS,qt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Tn),J===0&&U.generateMipmaps&&w.generateMipmap(re),M0.unbindTexture()},this.copyTextureToTexture3D=function(x,U,O=null,B=null,I=0){return pn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,O,B,I)},this.initRenderTarget=function(x){f0.get(x).__webglFramebuffer===void 0&&O0.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?O0.setTextureCube(x,0):x.isData3DTexture?O0.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?O0.setTexture2DArray(x,0):O0.setTexture2D(x,0),M0.unbindTexture()},this.resetState=function(){D=0,A=0,L=null,M0.reset(),o0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=G0._getDrawingBufferColorSpace(e),t.unpackColorSpace=G0._getUnpackColorSpace()}}const Ds={type:"change"},vr={type:"start"},Ma={type:"end"},pi=new mr,Ls=new xt,M7=Math.cos(70*Qs.DEG2RAD),de=new N,be=2*Math.PI,K0={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},f1=1e-6;class S7 extends F2{constructor(e,t=null){super(e,t),this.state=K0.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dn.ROTATE,MIDDLE:dn.DOLLY,RIGHT:dn.PAN},this.touches={ONE:hn.ROTATE,TWO:hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Vt,this._lastTargetPosition=new N,this._quat=new Vt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ss,this._sphericalDelta=new ss,this._scale=1,this._panOffset=new N,this._rotateStart=new L0,this._rotateEnd=new L0,this._rotateDelta=new L0,this._panStart=new L0,this._panEnd=new L0,this._panDelta=new L0,this._dollyStart=new L0,this._dollyEnd=new L0,this._dollyDelta=new L0,this._dollyDirection=new N,this._mouse=new L0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y7.bind(this),this._onPointerDown=E7.bind(this),this._onPointerUp=T7.bind(this),this._onContextMenu=D7.bind(this),this._onMouseWheel=w7.bind(this),this._onKeyDown=R7.bind(this),this._onTouchStart=C7.bind(this),this._onTouchMove=P7.bind(this),this._onMouseDown=b7.bind(this),this._onMouseMove=A7.bind(this),this._interceptControlDown=L7.bind(this),this._interceptControlUp=U7.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ds),this.update(),this.state=K0.NONE}update(e=null){const t=this.object.position;de.copy(t).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===K0.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=be:n>Math.PI&&(n-=be),r<-Math.PI?r+=be:r>Math.PI&&(r-=be),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),t.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=de.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pi.origin.copy(this.object.position),pi.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pi.direction))<M7?this.object.lookAt(this.target):(Ls.setFromNormalAndCoplanarPoint(this.object.up,this.target),pi.intersectPlane(Ls,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>f1||8*(1-this._lastQuaternion.dot(this.object.quaternion))>f1||this._lastTargetPosition.distanceToSquared(this.target)>f1?(this.dispatchEvent(Ds),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?be/60*this.autoRotateSpeed*e:be/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){de.setFromMatrixColumn(t,0),de.multiplyScalar(-e),this._panOffset.add(de)}_panUp(e,t){this.screenSpacePanning===!0?de.setFromMatrixColumn(t,1):(de.setFromMatrixColumn(t,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(e),this._panOffset.add(de)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;de.copy(r).sub(this.target);let s=de.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(be*this._rotateDelta.x/t.clientHeight),this._rotateUp(be*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(be*this._rotateDelta.x/t.clientHeight),this._rotateUp(be*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new L0,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function E7(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function y7(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T7(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ma),this.state=K0.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function b7(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=K0.DOLLY;break;case dn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=K0.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=K0.ROTATE}break;case dn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=K0.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=K0.PAN}break;default:this.state=K0.NONE}this.state!==K0.NONE&&this.dispatchEvent(vr)}function A7(i){switch(this.state){case K0.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case K0.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case K0.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function w7(i){this.enabled===!1||this.enableZoom===!1||this.state!==K0.NONE||(i.preventDefault(),this.dispatchEvent(vr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ma))}function R7(i){this.enabled!==!1&&this._handleKeyDown(i)}function C7(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=K0.TOUCH_ROTATE;break;case hn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=K0.TOUCH_PAN;break;default:this.state=K0.NONE}break;case 2:switch(this.touches.TWO){case hn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=K0.TOUCH_DOLLY_PAN;break;case hn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=K0.TOUCH_DOLLY_ROTATE;break;default:this.state=K0.NONE}break;default:this.state=K0.NONE}this.state!==K0.NONE&&this.dispatchEvent(vr)}function P7(i){switch(this._trackPointer(i),this.state){case K0.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case K0.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case K0.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case K0.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=K0.NONE}}function D7(i){this.enabled!==!1&&i.preventDefault()}function L7(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U7(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ht=Object.fromEntries(Array.from("零一二三四五六七八九",(i,e)=>[i,e]));Ht["〇"]=0;Ht.两=2;const I7={十:10,百:100,千:1e3},N7=/(负|[-+−])?([零〇一二两三四五六七八九十百千]+)(?:点([零〇一二两三四五六七八九]+))?[ \t]*(毫米|厘米|公分|mm|cm)(?!半)/g;function nr(i){if(!/[十百千]/.test(i))return Array.from(i,s=>Ht[s]).join("");let e=0,t=1/0,n,r=!1;for(const s of i)if(s in Ht){if(n!==void 0)return null;Ht[s]===0&&t!==1/0?r=!0:n=Ht[s]}else{const a=I7[s];if(a>=t||n===void 0&&t!==1/0)return null;e+=(n??1)*a,t=a,n=void 0,r=!1}return n!==void 0&&t>10&&!r?null:String(e+(n??0))}function xr(i){return i.normalize("NFKC").toLowerCase().replace(N7,(e,t,n,r,s)=>{const a=nr(n);if(a===null)return e;const o=r?"."+Array.from(r,c=>Ht[c]).join(""):"";return(["负","-","−"].includes(t)?"-":"")+a+o+s}).replaceAll("公分","厘米")}const F7={"¼":"1/4","½":"1/2","¾":"3/4","⅛":"1/8","⅜":"3/8","⅝":"5/8","⅞":"7/8","⅓":"1/3","⅔":"2/3","⅕":"1/5","⅖":"2/5","⅗":"3/5","⅘":"4/5","⅙":"1/6","⅚":"5/6"},p1=String.raw`[+\-−]?(?:\d+(?:[ \t]+|又))?\d+\s*[/⁄]\s*\d+|[+\-−]?(?:\d+(?:\.\d+)?|\.\d+)`,Sa=String.raw`英寸|[″”"]|\bin(?:ch(?:es)?)?\b(?!\s+(?:diameter|length|width|thickness)\b)`,Us=String.raw`毫米|厘米|(?:mm|cm)\b|`+Sa;function O7(i){const e=i.replace(/^[+\-−]/,""),t=e.match(/^(?:([0-9]+)(?:[ \t]+|又))?([0-9]+)\s*[/⁄]\s*([0-9]+)$/),n=t?Number(t[1]??0)+Number(t[2])/Number(t[3]):Number(e);return/^[\-−]/.test(i)?-n:n}function Si(i,e){return O7(i)*(e==="厘米"||e==="cm"?10:/^(?:mm|毫米)$/.test(e)?1:25.4)}function Ea(i){const e=i.replaceAll("″",'"').replace(/([0-9])?(¼|½|¾|⅛|⅜|⅝|⅞|⅓|⅔|⅕|⅖|⅗|⅘|⅙|⅚)/g,(a,o,l)=>(o?o+" ":"")+F7[l]).replace(/(?:([零〇一二两三四五六七八九十百千]+)又)?([零〇一二两三四五六七八九十]+)分之([零〇一二两三四五六七八九十]+)(?=\s*英寸)/g,(a,o,l,c)=>{const h=[o,c,l].map(u=>u?nr(u):"");return h.includes(null)?a:(h[0]?h[0]+" ":"")+h[1]+"/"+h[2]}).replace(/([零〇一二两三四五六七八九十百千]+)(?=\s*(?:又\d|英寸))/g,(a,o)=>nr(o)??a),t=xr(e).replace(/\bmillimet(?:er|re)s?\b/g,"mm").replace(/\bcentimet(?:er|re)s?\b/g,"cm"),n=new RegExp("(?<![\\d./])(?:\\bbetween\\s+|\\bfrom\\s+)?("+p1+")\\s*("+Us+")?\\s*(?:[-–—~～]|到|至|\\bto\\b|(?<=\\S)\\s+and\\s+)\\s*("+p1+")\\s*("+Us+")","gi"),r=new RegExp("(?<![\\d./])("+p1+")[ \\t]*-?[ \\t]*("+Sa+")","gi"),s=a=>Number(a.toFixed(6))+"mm";return t.replace(n,(a,o,l,c,h)=>{if(/\band\b/i.test(a)&&!/^between\b/i.test(a))return a;const u=Si(o,l??h),f=Si(c,h);return Number.isFinite(u+f)&&u<=f?s((u+f)/2):a}).replace(r,(a,o,l)=>{const c=Si(o,l);return Number.isFinite(c)?s(c):a})}const ya=/(?:\s|[:：=为~～]|(?:大约|约莫|差不多|大概|约|做成|在)|\b(?:is|of|about|approx(?:imately)?\.?|around|roughly|near|needs?\s+to\s+be|should\s+be|measures?|measuring|between|from)\b)*$/u,B7=/^(?:\s|的|(?:\b(?:in|for|of)\b))*/u,z7=/(?:\b(?:finger|forearm|arm|wrist|shaft|box|photo|the (?:pencil|pen|spoon|fork))(?:\s+itself)?\s*(?:is\s+|measures?\s+)?|(?:手指|前臂|手腕|盒子|铅笔|笔|勺子)(?:本身|本体)?)$/u,H7={length:[new RegExp("\\b(?:length|long)\\b|长度|全长|(?<!周|围)长","u"),/\b(?:length|long)\b|长度|长/u],circumference:[/\b(?:circumference|girth)\b|周长|围度|腕围|指围|臂围|(?:绕)?一圈/u,/\b(?:circumference|girth|around)\b|周长|围度|腕围|指围|臂围|一圈/u],bore:[/\b(?:inner(?: hole)? diameter|internal (?:diameter|opening)|opening diameter|inner opening|hole|opening|bore)\b|孔径|内径|内孔|开孔/u,/\b(?:inner(?: hole)? diameter|internal (?:diameter|opening)|opening diameter|inner opening|hole|opening|bore)\b|孔径|内径|内孔|开孔/u],diameter:[new RegExp("\\b(?:outer diameter|outer width|width)\\b|(?<!inner |inner hole |internal |opening )\\bdiameter\\b|外径|直径|横宽|最宽处|宽度|宽|粗","u"),new RegExp("\\b(?:outer diameter|outer width|width|wide|across|from side to side)\\b|(?<!inner |inner hole |internal |opening )\\bdiameter\\b|外径|直径|宽度|宽|粗","u")],wall:[new RegExp("\\b(?:wall thickness|shell thickness|wall|shell|thickness)\\b|壁厚|壳厚|(?<!壁)厚度|厚","u"),/\b(?:wall thickness|wall|walls|thickness|thick)\b|壁厚|壳厚|厚度|厚/u]},k7=Object.fromEntries(Object.entries(H7).map(([i,[e,t]])=>[i,[new RegExp("("+e.source+")"+ya.source),new RegExp(B7.source+"("+t.source+")")]]));function V7(i,e){const t={},n=new Set,r=[];for(const a of i.matchAll(new RegExp("(?<![\\d./⁄])([-+−]?(?:\\d+(?:\\.\\d+)?|\\.\\d+))[ \\t]*(毫米|厘米|mm|cm)?(?![\\d/⁄]|\\.\\d)","g"))){const[o,l,c]=a,h=a.index,u=h+o.length,f=i.slice(0,h).split(/[,;，；。!?！？\n]|\.(?!\d)/).at(-1),p=i.slice(u),v=f.replace(ya,""),g=/\b(?:reference photo|shaft|box|the pencil|the spoon itself)\b|笔本体|勺子本身|盒子/u.test(f)&&!/\b(?:grip|handle|splint|brace)\b|握笔器|握套|握柄|手柄|护具/u.test(f),m=Si(l,c??"mm"),d=[h,h+l.length];for(const[R,[T,E]]of Object.entries(k7)){const C=f.match(T),D=c&&p.match(E);if(!C&&!D)continue;const A=C?f.slice(0,C.index):v,L=z7.test(A);if((g||L)&&["length","diameter","wall"].includes(R)){n.add(h);continue}const S=(C??D)[1];if(R==="wall"&&e!=="brace"&&!/wall|shell|壁|壳/u.test(S)||R==="circumference"&&S==="around"&&e!=="brace"&&!L||R==="diameter"&&S==="宽"&&e==="brace")continue;const b=(/^(?:wall|shell|thickness|thick|厚|wide|width|across|粗|宽|around)$/u.test(S)?0:4)+(C?2:1)+ +!!c;r.push({key:R,mm:m,span:d,unit:c??null,forward:!!C,priority:b})}}const s=new Set;for(const a of r.sort((o,l)=>l.priority-o.priority)){const{key:o,span:l}=a;s.has(l[0])||t[o]||(t[o]=a,s.add(l[0]))}return{dimensions:t,blocked:n}}const wi={pen:{label:"握笔器",length:45,diameter:28,bore:10,load:15},utensil:{label:"餐具手柄",length:95,diameter:34,bore:13,load:20},brace:{label:"矫形护具",length:65,circumference:180,wall:4,load:30}},Ta=(i,e,t)=>Math.max(e,Math.min(i,t)),Ri=(i,e,t)=>i+(e-i)*t,Is="([-+−]?(?:[0-9]+(?:\\.[0-9]+)?|\\.[0-9]+))\\s*(毫米|厘米|mm|cm)?",G7={length:"长度",diameter:"外径",bore:"孔径",circumference:"周长",wall:"壁厚"};function W7(i,e,t=!1,n=e){const r=t?"[:：=为]|\\b(?:is|of)\\b":"[:：=为]",s=t?"的|\\bfor\\b":"的",a=i.match(new RegExp("(?:"+e+")\\s*(?:(?:"+r+")\\s*)?"+Is,"d")),o=i.match(new RegExp(Is+"\\s*(?:(?:"+s+")\\s*)?(?:"+n+")","d")),l=a??(o?.[2]?o:null);if(l)return{mm:Number(l[1].replace("−","-"))*(["厘米","cm"].includes(l[2])?10:1),span:l.indices[1],unit:l[2]??null,forward:l===a}}function Pn(i,e,t,n,r,s){if(i===void 0)return n;const a=Ta(i,e,t);return a!==i&&r.set(s,G7[s]+"超出模板范围，已限制为 "+a+" mm。"),a}function X7(i,e="auto"){const t=xr(i),n=/护具|护腕|护指|支具|矫形|brace|orthos|splint/.test(t)?"brace":/餐具|勺|筷|叉|utensil|spoon|fork|cutlery/.test(t)?"utensil":/笔|pencil|\bpen\b/.test(t)?"pen":void 0,r=/左手|左腕|左侧|\bleft\b/.test(t)?"left":/右手|右腕|右侧|\bright\b/.test(t)?"right":void 0,s=Ea(i),{dimensions:a,blocked:o}=V7(s,e==="auto"?n:e),l=new Set(Object.values(a).map(u=>u.span[0])),c={length:"长度|(?<!周)长|\\blength\\b",circumference:"周长|围度|腕围|指围|臂围|circumference|girth",wall:"壁厚|wall thickness|wall",diameter:"外径|直径|(?<!inner |inner hole |internal |opening )\\bdiameter",bore:"孔径|内径|\\bbore\\b|\\b(?:inner(?: hole)? diameter|internal (?:diameter|opening))\\b"};for(const[u,f]of Object.entries(c)){if(a[u])continue;const p=W7(s,f,!0);!p||l.has(p.span[0])||o.has(p.span[0])||(a[u]=p,l.add(p.span[0]))}return{raw:{kind:n,side:r,support:/震颤|颤抖|握力弱|tremor|weak\s*grip/.test(t)||void 0,finger:/护指|手指|finger/.test(t)||void 0,...Object.fromEntries(Object.entries(a).map(([u,f])=>[u,f?.mm]))},dimensions:a,blocked:o}}function ba(i,e="auto",t=new Map){const n=i.kind,r=e==="auto"?n??"pen":e;if(!wi[r])throw new Error("未知辅具类别。");!n&&e==="auto"&&t.set("kind","未识别到类别关键词，使用握笔器模板。"),e!=="auto"&&n&&e!==n&&t.set("kind","文字中的类别与所选类别不同，采用所选类别。");const s=wi[r],a=i.side??"neutral",o=!!i.support,l=r==="brace"&&!!i.finger,c=Pn(i.length,r==="utensil"?55:22,l?70:140,l?34:s.length,t,"length"),h={kind:r,side:a,support:o,finger:l,length:c};return r==="brace"?(h.circumference=Pn(i.circumference,l?42:100,l?95:320,l?60:s.circumference,t,"circumference"),h.wall=Pn(i.wall,2,8,l?3:s.wall,t,"wall")):(h.diameter=Pn(i.diameter,16,55,s.diameter+(o?4:0),t,"diameter"),h.bore=Pn(i.bore,5,Math.min(24,h.diameter-5),Math.min(s.bore,h.diameter-5),t,"bore")),{...h,warnings:[...t.values()]}}function Y7(i,e){const{params:t,profile:n,provenance:r,parameterWarnings:s}=i,a=Object.entries(e).filter(([f,p])=>p!==t[f]),o={...t,...Object.fromEntries(a),kind:t.kind};e.support!==void 0&&e.support!==t.support&&(e.diameter===void 0||e.diameter===t.diameter)&&r.diameter?.source==="default"&&delete o.diameter;const c=new Map(s);for(const[f]of a)c.delete(f);const h=ba(o,"auto",c),u={...r};for(const[f]of a)h[f]!==void 0&&(u[f]={source:"manual"});return{...wa(h,n),extracted:i.extracted,provenance:u,parameterWarnings:c}}function Aa(i){const e=i.flat();if(e.length<8)return null;const t=e.map(u=>u[0]),n=e.map(u=>u[1]),r=Math.min(...t),s=Math.max(...t),a=Math.min(...n),o=Math.max(...n);if(s-r<.05||o-a<.08)return null;const l=Array.from({length:13},(u,f)=>{const p=Ri(o,a,(f+.5)/13),v=[];for(const g of i)for(let m=1;m<g.length;m++){const d=g[m-1],R=g[m];(d[1]<=p&&R[1]>p||R[1]<=p&&d[1]>p)&&v.push(Ri(d[0],R[0],(p-d[1])/(R[1]-d[1])))}return v.length>=2?Math.max(...v)-Math.min(...v):null}),c=l.filter(u=>u!==null);if(c.length<7||Math.max(...c)<.04)return null;const h=Math.max(...c);return l.map(u=>u===null?null:u/h)}function q7(i){const e=Aa(i);if(!e)return null;const t=e.map((n,r)=>{if(n!==null)return n;const s=e.slice(0,r).findLastIndex(o=>o!==null),a=e.findIndex((o,l)=>l>r&&o!==null);return s<0?e[a]:a<0?e[s]:Ri(e[s],e[a],(r-s)/(a-s))});return t.map((n,r)=>Ta((t[Math.max(0,r-1)]+2*n+t[Math.min(r+1,t.length-1)])/4,.66,1))}function wa(i,e){const r=64+ +(i.kind==="brace"),s=i.kind==="brace",a=s?i.circumference/(2*Math.PI)+.75:i.bore/2,o=s?i.wall:i.diameter/2-a,l=i.finger?82:76,c=i.side==="left"?-15:i.side==="right"?15:0,h=[],u=[];for(let g=0;g<=24;g++){const m=g/24,d=m*((e?.length??1)-1),R=e?Ri(e[Math.floor(d)],e[Math.ceil(d)],d%1):.79+.21*Math.sin(Math.PI*m),T=o*(s?1+.55*(R-.8):R);for(const E of[a+T,a])for(let C=0;C<r;C++){const D=(s?l/2+c+(360-l)*C/64:360*C/64)*Math.PI/180;h.push([E*Math.cos(D),E*Math.sin(D),i.length*m])}}const f=(g,m,d)=>2*g*r+m*r+d,p=(g,m,d,R)=>u.push([g,m,d],[g,d,R]);for(let g=0;g<64;g++){const m=(g+1)%r;for(let d=0;d<24;d++)p(f(d,0,g),f(d,0,m),f(d+1,0,m),f(d+1,0,g)),p(f(d,1,m),f(d,1,g),f(d+1,1,g),f(d+1,1,m));p(f(0,0,m),f(0,0,g),f(0,1,g),f(0,1,m)),p(f(24,0,g),f(24,0,m),f(24,1,m),f(24,1,g))}if(s)for(let g=0;g<24;g++)p(f(g,0,0),f(g+1,0,0),f(g+1,1,0),f(g,1,0)),p(f(g+1,0,64),f(g,0,64),f(g,1,64),f(g+1,1,64));const v=Math.min(...Array.from({length:25},(g,m)=>Math.hypot(...h[f(m,0,0)].slice(0,2))-a))*Math.cos(Math.PI/64);return{params:i,profile:e,vertices:h,faces:u,checks:K7(h,u,v,i,a)}}function Ci(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function Ra(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function j7(i,e,t){const n=Ra(Ci(e,i),Ci(t,i)),r=Math.hypot(...n);return r?n.map(s=>s/r):n}function K7(i,e,t,n,r){const s=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(const A of i)for(let L=0;L<3;L++)s[L]=Math.min(s[L],A[L]),a[L]=Math.max(a[L],A[L]);const o=a.map((A,L)=>A-s[L]),l=new Map,c=i.map(()=>[]);let h=0,u=0,f=0,p=0;for(const A of e){const[L,S,M]=A.map(H=>i[H]),b=Ra(Ci(S,L),Ci(M,L)),X=Math.hypot(...b);X<1e-8&&p++,f+=X/2,Math.max(L[2],S[2],M[2])>s[2]+1e-8&&b[2]<-X/Math.SQRT2&&(u+=X/2),h+=(L[0]*b[0]+L[1]*b[1]+L[2]*b[2])/6;for(let H=0;H<3;H++){const W=A[H],j=A[(H+1)%3],Y=A[(H+2)%3],K=W<j?W+":"+j:j+":"+W,z=l.get(K)??[0,0];z[0]++,z[1]+=W<j?1:-1,l.set(K,z),c[W].push([j,Y])}}let v=0;for(const[A,L]of l.values())(A!==2||L!==0)&&v++;const g=c.filter(A=>{if(!A.length)return!0;const L=new Map(A);if(L.size!==A.length)return!0;const S=A[0][0];let M=S,b=0;do if(M=L.get(M),M===void 0||++b>A.length)return!0;while(M!==S);return b!==A.length}).length,m=v===0&&g===0&&p===0&&h>0,d=o.every((A,L)=>A<=[220,220,250][L]),R=t>=1.6,T=u<=1e-8,E=n.finger?12:wi[n.kind].load,C=r+t,D=n.kind==="brace"?6*E*r/(n.length*t**2):E*n.length*C/(Math.PI*(C**4-r**4)/4);return{manifold:m,nonManifold:v,badVertices:g,degenerate:p,size:o,fits:d,minWall:t,wallPass:R,overhangPass:T,overhangPercent:100*u/f,volume:h,mass:h*.00124,minutes:h/6/60+o[2]/.2*1.5/60,printable:m&&d&&R&&T,structure:{load:E,stress:D,factor:35/D,model:n.kind==="brace"?"开口环近似":"空心悬臂梁近似"}}}function Z7({vertices:i,faces:e}){const t=new ArrayBuffer(84+e.length*50),n=new DataView(t);n.setUint32(80,e.length,!0);for(const[r,s]of e.entries()){const[a,o,l]=s.map(h=>i[h]);[...j7(a,o,l),...a,...o,...l].forEach((h,u)=>n.setFloat32(84+r*50+4*u,h,!0))}return t}const Wt={featureWidth:768,categoryWidth:2048,labels:{kind:["pen","utensil","brace","unknown"],kindLatin:["pen","utensil","brace","unknown"],side:["neutral","left","right"],support:[!1,!0],finger:[!1,!0],slot:["ignore","length","diameter","bore","circumference","wall"]},heads:{side:{bias:[2.398128,-1.226589,-1.171539],weights:[[.075351,1.712245,-.089463,.008951,.114131,-.227204,-.25256,.253854,-.004865,-.735071,-.254748,-.71706,.247012,.137412,.555496,0,.09414,.054413,.162836,.464585,.285803,.210625,-.157032,.149968,.128852,-2.322235,-.045044,.097347,.431444,.310557,.471476,.020227,.326811,.071374,.915766,.074221,.045974,.296389,.008259,-.040833,-.622329,.110004,-1.555714,.12487,.328962,.058042,-.226627,-.008228,-.024001,.388158,.26131,-.066057,-.028608,.374284,.07511,-.867069,-.164595,0,.060412,.050395,-1.003676,-.020796,.086244,-.142417,.325764,-.084463,-.057541,-1.809964,-.055901,-.007912,.06806,.047515,.067383,.221392,.163687,.319154,.140351,.055323,-.033323,-.231742,.083765,.138968,-.092759,-.493656,-.079053,.022672,.143112,.080803,-.052786,-.00629,-.033782,.040975,.113072,.182712,-.002101,.269262,.480116,-.019004,1.019201,-2.86611,.815819,-.348365,.028792,.073553,-.220541,.794094,-.066476,.010955,-.218981,-.075135,.021542,0,-.042605,.357519,.08512,-.505496,-.043226,.179074,.648031,-.105642,.290166,-.024115,-.398697,-.109498,.2935,-.014098,-.064318,-2.110858,.204002,-.057405,.617774,26e-6,.949664,-.057966,-.1454,.373721,-.07366,.166916,.090183,-.057307,-.012604,.070944,-.445811,-.266663,.28049,-1.699388,.344428,.128176,-.068303,-2.510241,-.135483,-.015134,-.163127,-2.702345,-.517811,-.535518,.04724,0,.2922,-.157319,.856837,-.168783,-.061444,.064668,-3.742656,-.010345,-.107052,-.083441,.089455,-2.560155,.279297,-.024529,.20071,-.035568,-.046177,.26982,-.003981,.018457,-1.894284,-.11871,-.067962,-.022961,-.146138,.062495,.255597,-.022659,-.484876,.164338,-.099898,.07209,-.338002,0,.210198,.081187,.597059,-.096971,.360196,-.013795,-1.833873,-.162448,.422519,-.055759,.163513,-.647499,.010083,.13543,-.136112,-.692169,.44302,.133198,-.079384,-.256862,.235459,.247844,.07482,-.729344,.262693,.280738,-.028554,-2.956949,-.21799,-.221711,.226538,.32861,.660824,-.219455,-.099041,-.031828,.515995,.365048,.037283,.326587,.238807,.088493,.423488,-.071698,.156631,-.764459,-.124702,.743862,-1.645736,.661857,-2.506024,.196231,-.324603,.159298,-.021622,.411708,.051135,-.147993,.061718,.086992,-.021002,.011439,.031101,.060252,.106384,.148827,-.015388,.165675,.068978,-.150834,.296789,.405321,-.123296,.665477,.102721,.179183,.427989,0,.323083,.10842,-.143952,.444293,-.02004,-.01686,.279481,-.156075,-2.104553,.015288,-.087989,-.327818,.078921,.079077,.229502,-.141374,-.016174,.075906,.086817,-.055346,.351186,.149449,.100142,.522237,.073562,.504076,-.105368,-.033518,.182054,.079096,.041127,-.030577,.076563,.417931,-.11799,.261309,.222536,0,.232212,.086539,.102852,.321441,.007043,.466195,.466099,.022605,.186703,.137831,-.110908,.219161,.097108,.052148,.042018,.144725,-.065365,-.154151,.084254,.01966,.040009,.291231,.102629,.025051,-.385102,-1.258902,-2.452334,-.002343,.188413,.021115,.22469,-.07013,.279729,.133755,-.009142,-1.036295,-.016712,-.019565,.126337,.062459,-.296723,.143512,.334496,-.25706,0,-.043702,.234607,-.117968,-3.610103,.136034,.006053,.109967,.143183,.434374,-.152371,.03979,-.022787,.069223,.02715,.071323,.050455,0,-.015167,-.13617,.020372,-.03209,.228801,.034255,.077707,.014671,-.144776,.082448,-.099046,.205405,-.138761,.079589,-.201686,.236176,-.039461,-.383728,-.071598,.081783,.093405,-.965287,.483776,.140845,-3.157259,-.109715,-.047388,-.510523,.083814,.453364,.074419,.072622,.313206,.112336,-.279449,-.046108,-.010483,-1.098637,-.12028,-.010581,-.035759,.04891,.208642,-.13678,.015653,-.078582,.2008,.238161,.152079,-.078978,.269539,-1.812089,-.702164,.408427,.003317,.046005,-.064048,.075015,-.051128,-.094697,.094149,.061658,.565948,.224327,-.352952,.210288,-.105707,.093806,-.145012,-.142461,.01009,.155061,-.034738,-1.775043,.080369,.121505,-507e-6,-2.164699,-.302493,.006253,-.06587,.377171,.11958,.080872,-.420083,0,.033492,.264797,-.272626,.211129,-1.888775,.400512,.158519,-.019004,.184243,-.142298,-.008636,.020338,.371122,.227697,-.028547,-.162704,.118624,-.091807,.190174,-.109756,-.238158,-.112951,.08836,.168641,-.158483,.525243,.088493,-.002101,.059274,-.008909,-.984831,-.288263,.00245,-.002947,-.136028,-2.532482,.163931,.212952,.450473,-.075743,-.001747,-.028247,-.044031,-.34092,-.096107,0,-2.008684,.006342,.209903,-1.086854,-.090516,.067971,-.032244,.179394,-.130272,.125874,.259619,.015271,-6.707406,.050563,-1.127447,.256997,.149601,0,.007567,-.726457,-.24632,.030923,.393021,-.159489,.15222,.004553,0,-.070217,-.067565,0,.505767,-.05746,-.192726,-2.83798,-2.094222,-3.690431,-1.946271,.013909,.079063,.490086,-.257481,.294034,-1.081966,.328569,-1.938164,.148387,.143726,.25385,-.845259,.201769,.03384,-.292958,-2.595079,.05317,1.008091,-.019584,-.191138,-.032449,.277033,.484211,-.001297,1.661158,-3.415168,.012043,.239445,0,-1.25912,-2.313506,.105999,.093463,.011656,.561286,.148089,.059551,.044595,-.299074,.073174,.0073,-.135278,.167491,-3.833555,-.441167,.408449,.236593,-.053705,-.007012,-.124493,.123985,-1.085663,.029852,-.084981,.104576,.110826,.427044,-.170521,.454656,.026868,.309867,.148329,-.136791,.027072,.035018,.167567,.133401,-.091419,-.046857,-.005196,.318225,.047127,.059977,.04811,0,.128549,.203306,.045457,.068097,.016822,-.044159,-.207202,-.040185,.167196,.436107,.017311,.01353,0,-.013145,.092903,-.057609,.4216,-2.027002,.029883,.102595,.108164,.077904,-.073935,.025266,.782607,.029742,.25989,.09197,-.070175,-.763635,-1.799243,.303465,.233076,-.009324,-.21849,.157427,-1.850351,-.042257,.171422,.026417,-.19877,.052513,.088493,-.049805,-4.022183,.114871,.123489,.046689,.282289,0,.152095,-1.206703,-.033562,-.207735,-.022552,-.100715,-4.058569,-.111169,-.025317,-.052772,-1.598549,-.729175,.111134,.338285,-.124826,.269075,.048939,.152672,-.542166,.148951,-.141835,.456017,-.021913,.121568,-1.369243,0,.213526,.013296,.141186,-.010476,.191398,.121169,-.361449,-.036931,.084598,.113835,-.024356,.311838,-.106559,.28836,-.098491,.04766,.072532,.872727,.020669,.003021,.036075,-.053598,-.02485,-.044704,-.982488,-.047441,.158256,-.237711,-.220179,.012498,.135743,.102162,.048887,-.235104,-.013852,.199097,-.179743,.042264,-.073338,.065544,0,-.217687,-.19775,-.069003,-.025785,.087334,.617634,.16455,-.212248,.422499,.024373,-.077715,.264238,.328864,.370932,-.754295,.19106,-.042565,.319174,.02004,.225212,.05081,.562501,.062321,-3.049376,.57462,-.09347,-.206319,-.05978,.169488,-.222163,.068165,-2.855306,-.086479,.342172,-1.404871,.110093,-.048284],[-.123643,-.906536,.3106,-.004699,-.149133,.041869,-.991399,.089295,.140307,.465181,.144176,.669377,-.041181,-.064983,-.123216,0,.081598,-.157284,-421e-6,-.706102,-.017938,-.673943,.145613,.065781,-.076084,-1.460789,.06091,.08173,-.174121,-.497789,-.174172,-.138109,-.485382,-.142973,-.567789,-.482487,-.243505,-.307502,-.017899,.037828,1.07284,.069981,2.852011,-.033429,.072379,-.093859,.042904,-.06774,.043217,-.311051,-.092248,.084542,.149929,-.097278,-.118038,.525974,.035732,0,-.109191,.082411,-.926012,.852193,.112441,.227372,-.161584,.162686,-.102897,1.081243,.071404,.02277,-.029671,.04659,-.030607,.010624,-.094621,-.116772,-.363378,-.081119,.038359,-.040152,-.053251,.113313,.150981,1.050817,.038109,.149164,-.063533,-.072466,.102125,.067993,.052783,-.054922,-.187454,-.110638,.127588,-.466172,-.609393,.049343,-.73405,-2.127178,-.233876,.251879,-.048981,-.045291,.257852,-.433438,.032827,-.075621,.219139,.001576,-.123978,0,-.085511,-.335797,.016052,.479245,.020497,-.2253,-.089831,.125591,.056199,.201904,.239253,.100236,-.291375,-.02099,.030349,1.103593,.038705,.209988,-.029061,-.025877,-.277765,.104768,.161696,.064855,-.040524,-.04873,.219987,-.11594,.015267,-.233458,-.527524,.220105,-.28408,-1.721951,-.442288,.051273,-.01043,3.475251,.039475,-.169627,.177289,-1.99262,.375629,-.047177,-.062139,0,-.14999,-.01652,-.775437,.269748,.112276,.007056,5.771344,.011453,.113766,.118083,-.036171,-.564416,.035927,.040086,.150373,.009742,.124672,-.199153,.05016,-.131752,1.080681,.030011,-.070824,.059329,.092731,-.033574,.121737,.101185,.243043,-.08532,-.042969,-.123346,.463459,0,-.106093,-.049083,-.219618,.006566,-.130351,-.009883,.998809,.224645,-.048194,-.06034,.147671,.052398,.007288,-.157076,-.013635,.626353,-.240269,.092101,-.079488,.18921,-.409421,-.073759,-.31418,-.385813,-.073996,-.219715,-.108539,5.453215,-.859188,-.128078,-.074578,-.330016,.40317,.056311,-.139639,.027902,-.215884,-.136236,-.086882,.038668,-.037301,-.058631,-.290064,-.028819,.331777,.364589,.048168,-.275642,.936893,-.183273,4.348737,-.085191,.882757,.021224,-.17499,-.037861,-.090823,.030256,.159709,-.012042,.016681,.123555,-.189738,-.05875,-.072926,-.083338,-.025792,-.082235,-.083113,.061085,-.092598,-.027159,.137286,-.381614,.07263,-.02394,-.013048,0,-.161778,.072496,.161684,-.5588,.015469,.137216,-.158583,.00288,4.526276,-.017933,-.071472,.003843,.001093,.035092,.105484,.024331,-.042385,-.051733,.013263,.027203,-.168549,-.019624,-.267591,-.075632,-.342524,-.20383,.155774,-.021877,-.065802,.035418,.244453,-.072314,.008024,-.212451,.042251,-.16188,-.040938,0,-.007998,.06134,-.114372,-.273237,-.014517,-.406897,-.850907,-.06523,-.09437,.098043,.002037,-.142042,-.023428,-.049577,-.104125,-.056182,.012065,.121199,.137455,.069034,-.043484,-.144553,-.044557,-.009954,.127259,-1.636027,4.057493,.14671,-.079301,.025399,-.43059,.043567,-.132033,-.009693,.025188,-.399002,.012502,.037534,-.076997,-.052246,.043516,-.213995,.014545,-.104554,0,.111888,-.121261,-.132342,.292532,-.020743,.006327,.061989,-.018794,-.118615,.182683,-.081437,-.262483,-.157396,.01857,-.011268,-.090092,0,-.055092,.044685,.287255,-.021547,-.170633,.063703,-.041121,-.057983,.103861,-.039414,.13824,-.056183,.157862,.006319,.085138,-.073409,.046476,.151035,-.101234,.106147,-.042267,-.962042,-.469972,-.138323,1.568529,.024956,.009407,-.140828,-.027755,-.156713,.022333,-.242271,-.009294,-.114013,.199164,.172977,-.036416,1.936279,.110252,.085636,.031395,-.065184,-.215474,.061056,.022832,.095643,-.01996,-.001388,.259497,.280506,-.114222,3.281758,.596542,-.075391,-.014168,-.013589,.017133,-.087649,.04664,-.154983,-.085246,-.153542,-.129213,-.099355,.192398,-.098461,.110637,-.152615,-.08037,-.001834,-.181128,-.023435,.011872,-.846102,-.070615,.140518,-.031431,-2.001751,.153087,.058793,.1803,-.273694,-.644998,.054677,.069217,0,-.151167,-.10151,.089239,-.128959,1.000225,-.181054,-.020941,.049343,-.115985,.157247,.008926,-.042029,.041152,.051864,-.106271,.252117,-.247361,.057228,.209859,.133481,.100382,.067539,-.014825,-.096842,.108863,-.275003,-.058631,.127588,.002561,.060677,.562325,-.013532,-.111734,-.005947,.150892,-1.834898,-.03996,.014665,-.115479,.10669,.007191,.062265,.079013,.275403,.05582,0,-.405272,-.239968,-.157198,-.989695,.184344,.005181,.024935,-.196323,.120402,-.092013,-.206359,-.097007,.365944,.152395,.722435,-.305029,-.145704,0,.051802,-.83764,.04485,.046764,-.183094,.242839,-.10753,-.132513,0,-.024783,.241553,0,-.793198,468e-6,.044381,4.903181,3.358213,7.422957,3.373484,-.034554,.003196,-.040108,.075366,.02081,-.825955,.02648,-1.509788,.014875,-.087337,-.049843,1.522219,.091081,-.02883,.089665,-1.968905,-.057751,-.378118,-.033703,.044897,.062473,-.039946,-.042918,-.24475,-.786445,.971339,.015221,-.066876,0,.352315,1.220206,-.070966,-.019389,.035702,.189476,-.144207,-.120848,-.022573,.296729,.153693,.014606,-.075264,-.17184,1.865408,.031332,.058591,-.014993,-.129803,-.158118,-.039575,-.006495,2.332188,-.075766,.042889,.050909,-.079652,-.616223,.04918,-.366126,.095808,-.235263,-.054998,.198425,-.02742,-.106296,-.068682,-.157343,.133759,.007,.039639,-.265394,-.111513,-.054749,.084512,0,-.168433,-.147863,.00936,-.049276,.021767,.051883,.043859,.054581,-.114759,-.11994,-.05011,-.021057,0,-.005666,.046502,-.070814,-.16511,-1.480674,-.004901,.028832,-.118111,-.144823,.004448,766e-6,-.496926,.008888,-.095532,-.00246,.004553,-.797146,1.068321,-.103524,-.1526,-.026873,.177707,-.013417,1.029436,.0451,-.180246,.054321,.057931,-.077867,-.058631,-.009653,1.806791,-.20784,.007441,.271744,-.110831,0,.057773,2.466712,-.004704,.17277,.201588,-.14311,2.333571,-.018117,.023412,.112262,.855385,.845329,-.13381,-.51568,.003601,.012473,-.076535,-.327976,1.000582,-.128503,.214074,-.317426,.007411,-.045853,2.786545,0,-.355525,-.019797,-.219048,-.065475,-.028459,-.065538,.116822,-.150136,.011711,.082057,.082162,-.017037,.020623,-.13651,.115536,.025981,-.1011,-.282868,.050479,.128227,-.002047,.003726,.033444,.042133,.5502,.130324,.017046,.012423,-.017426,-.01261,-.041804,-.115064,.238065,.02805,.003902,-.233253,-.18946,-.012663,.123037,-.00158,0,.052951,-193e-6,-.052569,.111144,486e-6,-.264174,-.012067,.167156,-.597291,-.134501,-.005566,-.040995,-.146872,-.375354,1.850095,-.113756,-.03813,-.002679,-.131425,-.127183,-.013599,-.131594,-.003257,5.50515,-.201923,-.100525,.127684,.149806,-.088002,.015394,-.174256,-2.212772,.067271,-.253492,-1.335498,-.14301,.025855],[.048292,-.805708,-.221137,-.004252,.035003,.185335,1.243959,-.34315,-.135443,.26989,.110572,.047682,-.205831,-.072429,-.43228,0,-.175738,.102871,-.162416,.241517,-.267866,.463319,.011419,-.215749,-.052767,3.783024,-.015866,-.179076,-.257323,.187231,-.297304,.117882,.158571,.0716,-.347977,.408266,.197531,.011113,.00964,.003005,-.450512,-.179985,-1.296297,-.091441,-.401341,.035817,.183723,.075968,-.019217,-.077107,-.169063,-.018485,-.121321,-.277006,.042927,.341095,.128863,0,.048779,-.132805,1.929688,-.831397,-.198685,-.084955,-.16418,-.078222,.160438,.728721,-.015504,-.014858,-.038388,-.094105,-.036775,-.232015,-.069066,-.202382,.223027,.025795,-.005036,.271894,-.030515,-.252281,-.058222,-.557161,.040944,-.171836,-.07958,-.008337,-.04934,-.061703,-.019001,.013948,.074382,-.072073,-.125488,.19691,.129278,-.030338,-.285151,4.993288,-.581943,.096486,.020189,-.028261,-.037311,-.360656,.033649,.064666,-158e-6,.073559,.102436,0,.128116,-.021722,-.101173,.02625,.02273,.046226,-.558201,-.01995,-.346364,-.177789,.159443,.009262,-.002126,.035088,.033969,1.007264,-.242707,-.152584,-.588713,.02585,-.671898,-.046802,-.016296,-.438576,.114184,-.118186,-.31017,.173247,-.002664,.162514,.973335,.046558,.00359,3.421339,.097861,-.17945,.078733,-.96501,.096008,.184761,-.014162,4.694965,.142182,.582695,.014899,0,-.14221,.173838,-.081399,-.100965,-.050832,-.071725,-2.028688,-.001108,-.006714,-.034643,-.053284,3.124571,-.315224,-.015557,-.351083,.025827,-.078495,-.070666,-.046179,.113296,.813603,.088699,.138786,-.036368,.053407,-.028921,-.377334,-.078526,.241833,-.079018,.142867,.051256,-.125457,0,-.104105,-.032104,-.377441,.090406,-.229845,.023678,.835063,-.062197,-.374324,.116099,-.311184,.5951,-.017371,.021646,.149747,.065817,-.202751,-.225299,.158872,.067652,.173963,-.174085,.23936,1.115157,-.188697,-.061022,.137093,-2.496266,1.077178,.34979,-.15196,.001406,-1.063994,.163144,.23868,.003926,-.300111,-.228811,.049599,-.365255,-.201506,-.029862,-.133423,.100517,-.488407,.39987,.076534,-.46822,.708843,-.478585,-1.842713,-.11104,-.558154,-.180522,.196612,-.373847,.039688,.117737,-.221427,-.07495,.004321,-.134994,.158637,-.001503,-.033458,-.065489,.041179,-.08344,.014135,.089749,-.204191,-.378161,-.01399,-.283862,-.175351,-.155243,-.414941,0,-.161305,-.180916,-.017732,.114507,.004571,-.120356,-.120898,.153195,-2.421723,.002645,.159462,.323975,-.080014,-.11417,-.334986,.117043,.058559,-.024173,-.10008,.028143,-.182637,-.129825,.167449,-.446605,.268963,-.300246,-.050406,.055395,-.116251,-.114514,-.285579,.10289,-.084587,-.205481,.075739,-.099429,-.181598,0,-.224214,-.147879,.01152,-.048203,.007474,-.059298,.384808,.042625,-.092333,-.235874,.10887,-.077119,-.073681,-.002571,.062107,-.088543,.053299,.032952,-.221708,-.088694,.003474,-.146678,-.058072,-.015097,.257843,2.89493,-1.605159,-.144367,-.109112,-.046514,.2059,.026563,-.147697,-.124063,-.016046,1.435297,.00421,-.017969,-.04934,-.010214,.253207,.070483,-.349041,.361614,0,-.068186,-.113346,.250311,3.317571,-.115291,-.01238,-.171955,-.124389,-.315759,-.030313,.041647,.285269,.088173,-.04572,-.060055,.039637,0,.070259,.091486,-.307628,.053637,-.058168,-.097958,-.036586,.043311,.040915,-.043034,-.039194,-.149223,-.019101,-.085908,.116548,-.162767,-.007015,.232693,.172832,-.18793,-.051138,1.92733,-.013803,-.002521,1.588731,.084759,.037981,.65135,-.05606,-.296651,-.096752,.169649,-.303912,.001677,.080286,-.126869,.046899,-.837642,.010028,-.075055,.004364,.016274,.006833,.075724,-.038486,-.017061,-.18084,-.236772,-.411577,-.201527,-.155317,-1.469669,.105622,-.333036,.010851,-.032417,.046915,.012634,.004488,.24968,-.008903,.091884,-.436735,-.124972,.160553,-.111827,-.00493,.058808,.225381,.144295,.171038,-.131625,.022866,2.621145,-.009754,-.262023,.031938,4.16645,.149406,-.065046,-.11443,-.103477,.525418,-.135549,.350866,0,.117676,-.163288,.183386,-.08217,.888549,-.219457,-.137577,-.030338,-.068258,-.014949,-29e-5,.021691,-.412274,-.279561,.134817,-.089413,.128737,.034579,-.400033,-.023726,.137777,.045412,-.073536,-.071799,.049619,-.25024,-.029862,-.125488,-.061836,-.051768,.422506,.301795,.109284,.008894,-.014864,4.36738,-.123971,-.227617,-.334995,-.030947,-.005444,-.034018,-.034983,.065517,.040287,0,2.413956,.233627,-.052705,2.07655,-.093828,-.073152,.007309,.016929,.00987,-.033861,-.053261,.081736,6.341462,-.202958,.405012,.048032,-.003897,0,-.059369,1.564097,.20147,-.077687,-.209928,-.083351,-.04469,.12796,0,.094999,-.173988,0,.287432,.056992,.148345,-2.065201,-1.263991,-3.732526,-1.427212,.020645,-.082259,-.449978,.182115,-.314843,1.907921,-.355049,3.447952,-.163263,-.05639,-.204007,-.676961,-.29285,-.00501,.203292,4.563984,.004581,-.629974,.053286,.146241,-.030023,-.237087,-.441293,.246047,-.874713,2.443829,-.027264,-.172569,0,.906806,1.0933,-.035033,-.074074,-.047357,-.750762,-.003882,.061297,-.022022,.002345,-.226867,-.021907,.210542,.004348,1.968147,.409835,-.46704,-.2216,.183507,.16513,.164069,-.117491,-1.246525,.045914,.042092,-.155485,-.031174,.189179,.121341,-.088531,-.122677,-.074604,-.093331,-.061633,348e-6,.071278,-.098885,.023942,-.04234,.039857,-.034443,-.052831,.064386,-.005228,-.132622,0,.039885,-.055442,-.054818,-.018821,-.038589,-.007724,.163343,-.014396,-.052437,-.316167,.032799,.007528,0,.018812,-.139404,.128422,-.25649,3.507676,-.024982,-.131426,.009947,.066919,.069487,-.026032,-.285681,-.03863,-.164358,-.08951,.065622,1.560781,.730922,-.19994,-.080475,.036196,.040783,-.14401,.820914,-.002844,.008824,-.080738,.140839,.025355,-.029862,.059458,2.215392,.092969,-.130931,-.318433,-.171458,0,-.209867,-1.260008,.038266,.034965,-.179036,.243824,1.724998,.129286,.001905,-.05949,.743165,-.116154,.022676,.177396,.121225,-.281548,.027596,.175304,-.458417,-.020448,-.072238,-.138591,.014502,-.075715,-1.417303,0,.141999,.006501,.077862,.075951,-.162939,-.05563,.244627,.187067,-.096309,-.195892,-.057806,-.294801,.085936,-.15185,-.017046,-.073641,.028567,-.589859,-.071147,-.131248,-.034028,.049873,-.008594,.002571,.432289,-.082883,-.175302,.225287,.237605,112e-6,-.093939,.012902,-.286952,.207054,.00995,.034156,.369203,-.0296,-.049699,-.063964,0,.164736,.197943,.121572,-.085359,-.08782,-.35346,-.152483,.045092,.174792,.110128,.08328,-.223243,-.181992,.004422,-1.0958,-.077304,.080696,-.316495,.111385,-.098029,-.03721,-.430908,-.059064,-2.455774,-.372698,.193995,.078635,-.090026,-.081485,.206768,.106091,5.068077,.019208,-.08868,2.740369,.032916,.022429]]},support:{bias:[1.942227,-1.942227],weights:[[-.054865,1.801612,.125768,.007718,.180463,.002309,.282057,.229538,.037653,-1.158181,.037076,.91758,.179978,.033593,.093243,0,.425738,-.029233,.399442,-1.868235,.113193,-.799833,-.084664,.122042,.028938,-2.106356,.195455,.182542,.312196,.053898,-.236153,.086302,.027361,.251533,.167232,.195528,.177268,.157023,-.179028,.192712,-.302755,-.024968,.198087,-.581975,.267988,-.197748,.28412,.008357,.044475,.006325,-2.39618,.081548,-.042457,-3.640113,.150734,-.376006,-.127162,0,.093512,-.160331,-.728105,-.920058,.005245,.186605,.651548,.567382,.299707,.189858,.200434,.023837,-2.489928,-.075657,.039551,.257441,-.080267,-.005558,-.082665,.231604,.013806,-2.450064,.079617,-2.014457,-.131063,-1.036943,.072153,.150972,.039174,-.002479,.062813,-.009328,.14736,.082517,-2.190352,.137412,-.046752,.160772,-.112427,-.084547,.440208,.255715,-.035564,-.103412,-2.418982,.149106,-.031151,-.213799,-.147481,.097602,.198735,.032301,-.017325,0,-.228818,-1.180342,.081511,.129942,-.103591,-.014295,.030329,-.019423,-1.513959,-.080011,-.530541,.050253,.205533,-.119644,.043778,-1.470976,.131284,.005142,.582066,-.062409,-1.851328,.045004,-.218379,-.144303,.199371,.125665,.016915,-.093585,.026345,.069436,-.043751,.201934,.177558,-1.714764,.319501,-.089686,-.085897,.043882,-.111069,-.019268,.330793,.259798,.008444,-2.432412,-.056949,0,-.084686,-.06984,-.454388,-.051004,.055936,-.147306,-.0186,.032325,-.05638,.065591,.022843,-.008134,.207206,-.04721,-2.294235,-.199568,-.080546,-1.748551,.08988,-.00417,.042927,-.120541,-.056306,.359594,-.182074,.119532,.420306,.028508,-2.061107,-.320199,.291041,-.081593,-.173162,0,.09342,.231766,-.08003,.045557,.058427,-.134683,.486732,-.156507,-.873879,-.059699,-.39639,-.711689,.099974,-2.092186,-.126996,-.302457,.341381,.04105,.055004,-.596878,.142448,.006892,.139792,-.109842,.13223,.081712,-.04297,-2.187833,.374225,.311985,.113358,.275675,.20075,.087161,.096738,.003129,.498861,.003492,.175371,-1.92501,.502906,.040985,-1.240477,-.110939,-.054136,-.567205,-.165665,-.578853,.18471,.455866,.048817,.034051,.251798,.440566,-.099975,-3.216924,-.101774,-.199052,-2.576115,.516459,-.007145,-.150178,-2.091149,.278642,-.32396,-.176327,.256153,-3.293525,.160706,-.111339,-.044163,-3.251916,.07273,-.116019,.063557,.136749,-1.041411,0,-.116573,.129818,.360531,.120512,-.177139,.060116,-.367367,.155302,-.053174,.003988,-.054208,-.071835,.186022,.02231,-2.813037,-.030787,.052685,.088178,.188619,.069974,-.190422,-.089664,-.024092,.270328,-.011325,.44529,.349623,.12885,.185882,.015241,-2.714293,-.427059,-.069169,-.13385,.151007,.132028,-.045213,0,.178183,-1.206892,-.096785,.368558,8e-6,.22182,.86043,-.041926,.05517,.008372,.033431,-1.981851,.499836,.033412,.098238,.020909,-.063136,.057715,.454956,.069515,.03106,.083608,.340471,-.097011,-1.916878,-.053674,.47651,.230781,-2.348964,.027813,.235281,-.072342,-.202572,.119675,-.079676,.521644,.286103,-.113915,.322867,-.004488,-.092638,.032147,.681035,-.204818,0,-.187375,.026191,-.015041,.140605,-.00275,-.096857,-.005218,.216328,-2.065722,.045305,.092777,.052487,-.080365,-.043678,.066631,-.1684,0,-.129897,-.052364,-3.002207,-.09061,-.037712,-.312978,.211076,-.034836,-.165957,.037676,.011746,.174169,.193179,.030774,.04791,-.036044,.288226,-.390262,.061503,-.069897,.041175,.104562,.087791,.146715,-.667958,.360493,.180901,.304738,-.237903,-.189782,.088613,.460546,-3.732066,.04944,-.02249,.259434,.009271,.392853,-.999447,.089045,-.101661,.236411,.184838,.030105,.359737,-.113111,-.144349,.344076,.057242,-.105186,.128525,.149394,-.505655,.428694,.024507,.043072,.036971,.022943,-.115115,.053151,.163455,-.028864,-.068596,.009492,-.032091,-3.884891,.062665,.024621,.027207,.05352,-.009538,.041266,.123251,.2409,.046837,.258171,.049477,-.24704,.317982,.244836,.199767,-.220479,.679487,-3.555733,-1.127378,0,.228254,-.188059,.103737,.715967,.144397,.114574,-.31399,-.084547,-.269688,.253605,.006971,.248966,.208472,.161445,.03104,-1.767435,-2.434239,-.179589,-.361247,.35398,-1.270466,-.184894,-.1038,.272303,-.135904,-.394687,.040985,-.046752,-.349705,.075213,-.656667,.074498,-2.794172,.021157,-.224049,.369892,-.03267,.353713,.44572,-.189437,.062164,.086668,.345149,-2.696922,.02403,0,.323099,-.080285,-.190918,.251743,.492631,.131754,-.036424,-.022566,.01671,-.013078,-.159895,-.121534,.238995,-.05024,-.902336,.129469,-.156436,0,-233e-6,.230596,.031805,.179134,.402899,.031585,.113217,.079463,0,.011087,-.080086,0,.026868,-.054868,-.104062,.116523,-.034086,.574911,-1.38314,-.066919,-.012428,.5426,-.11265,.439389,.285747,-.173377,.15309,.20428,.142588,.185555,.072314,.112448,.088953,-.039914,.326078,.063431,-.322765,.217577,.063163,-.001852,.30872,.265321,.039014,1.703539,-.792516,.01136,-1.241655,0,.114271,.71676,.038181,-.251338,-.007817,.366537,.357699,-.160392,-.060089,.016204,1.032171,.089087,-.023289,.048508,.499133,-2.368857,-3.308969,.161768,.08748,.002654,-.128844,-.011059,-.144697,-.133291,.150436,-.216779,.018651,.296081,-.016052,-.059711,-.041401,.096873,.16183,-.137316,-.010516,.083645,-1.510651,.379143,.273876,-.095344,.155288,-.760861,-.009016,-.115738,.110866,0,-2.215067,.378291,-1.948101,-.00377,-.010164,-.059969,.005191,.221161,-.178565,-1.200919,-2.26765,-.018098,0,-.004011,-.082001,-.092304,.067505,.085514,-.183851,-.064123,-.028164,.185921,.004017,.072998,-.1073,.031055,.102896,-.189995,-.002306,-.188031,.227963,.394818,.044792,.132502,.149885,.028703,.151696,.163187,.205406,-.308601,-.043737,-.031682,.040985,.130396,.296952,.123728,.027031,-2.473447,.086778,0,.409327,.557902,.143691,.4257,-1.421222,.073294,.272008,-.063323,.03695,.071233,.098427,-2.411877,-.008955,.121775,-.076509,.38006,.087426,-4.414267,.193267,-1.766924,-.012325,.135021,-.047981,.089581,.158149,0,.162196,-.169317,.313877,.08086,.49962,.025906,-.104156,.072025,-.044612,.432727,-2.069031,.064988,.200407,-.001318,-.039035,.202524,-.047139,.287113,-.093571,-1.424789,-.016055,-.124177,-.41775,.04284,-.631334,-.193132,-.032691,-.613324,.157094,-.014913,-.010913,-.154364,.023862,.041158,-.066429,.0244,-.240919,.04627,.044663,.076458,0,-.109145,-1.945182,-1.428369,-.100087,.021613,-.20461,.131428,-.020322,.282724,.033057,-.171353,-.068423,.303311,.0681,.225023,.162931,.158786,.179482,.307802,.328457,.067309,.238678,.176202,.012894,.360618,-.111916,.185386,-.073645,.141809,.200392,-.008839,.314714,.016283,.143535,.043762,.048947,.58327],[.054865,-1.801612,-.125768,-.007718,-.180463,-.002309,-.282057,-.229538,-.037653,1.158181,-.037076,-.91758,-.179978,-.033593,-.093243,0,-.425738,.029233,-.399442,1.868235,-.113193,.799833,.084664,-.122042,-.028938,2.106356,-.195455,-.182542,-.312196,-.053898,.236153,-.086302,-.027361,-.251533,-.167232,-.195528,-.177268,-.157023,.179028,-.192712,.302755,.024968,-.198087,.581975,-.267988,.197748,-.28412,-.008357,-.044475,-.006325,2.39618,-.081548,.042457,3.640113,-.150734,.376006,.127162,0,-.093512,.160331,.728105,.920058,-.005245,-.186605,-.651548,-.567382,-.299707,-.189858,-.200434,-.023837,2.489928,.075657,-.039551,-.257441,.080267,.005558,.082665,-.231604,-.013806,2.450064,-.079617,2.014457,.131063,1.036943,-.072153,-.150972,-.039174,.002479,-.062813,.009328,-.14736,-.082517,2.190352,-.137412,.046752,-.160772,.112427,.084547,-.440208,-.255715,.035564,.103412,2.418982,-.149106,.031151,.213799,.147481,-.097602,-.198735,-.032301,.017325,0,.228818,1.180342,-.081511,-.129942,.103591,.014295,-.030329,.019423,1.513959,.080011,.530541,-.050253,-.205533,.119644,-.043778,1.470976,-.131284,-.005142,-.582066,.062409,1.851328,-.045004,.218379,.144303,-.199371,-.125665,-.016915,.093585,-.026345,-.069436,.043751,-.201934,-.177558,1.714764,-.319501,.089686,.085897,-.043882,.111069,.019268,-.330793,-.259798,-.008444,2.432412,.056949,0,.084686,.06984,.454388,.051004,-.055936,.147306,.0186,-.032325,.05638,-.065591,-.022843,.008134,-.207206,.04721,2.294235,.199568,.080546,1.748551,-.08988,.00417,-.042927,.120541,.056306,-.359594,.182074,-.119532,-.420306,-.028508,2.061107,.320199,-.291041,.081593,.173162,0,-.09342,-.231766,.08003,-.045557,-.058427,.134683,-.486732,.156507,.873879,.059699,.39639,.711689,-.099974,2.092186,.126996,.302457,-.341381,-.04105,-.055004,.596878,-.142448,-.006892,-.139792,.109842,-.13223,-.081712,.04297,2.187833,-.374225,-.311985,-.113358,-.275675,-.20075,-.087161,-.096738,-.003129,-.498861,-.003492,-.175371,1.92501,-.502906,-.040985,1.240477,.110939,.054136,.567205,.165665,.578853,-.18471,-.455866,-.048817,-.034051,-.251798,-.440566,.099975,3.216924,.101774,.199052,2.576115,-.516459,.007145,.150178,2.091149,-.278642,.32396,.176327,-.256153,3.293525,-.160706,.111339,.044163,3.251916,-.07273,.116019,-.063557,-.136749,1.041411,0,.116573,-.129818,-.360531,-.120512,.177139,-.060116,.367367,-.155302,.053174,-.003988,.054208,.071835,-.186022,-.02231,2.813037,.030787,-.052685,-.088178,-.188619,-.069974,.190422,.089664,.024092,-.270328,.011325,-.44529,-.349623,-.12885,-.185882,-.015241,2.714293,.427059,.069169,.13385,-.151007,-.132028,.045213,0,-.178183,1.206892,.096785,-.368558,-8e-6,-.22182,-.86043,.041926,-.05517,-.008372,-.033431,1.981851,-.499836,-.033412,-.098238,-.020909,.063136,-.057715,-.454956,-.069515,-.03106,-.083608,-.340471,.097011,1.916878,.053674,-.47651,-.230781,2.348964,-.027813,-.235281,.072342,.202572,-.119675,.079676,-.521644,-.286103,.113915,-.322867,.004488,.092638,-.032147,-.681035,.204818,0,.187375,-.026191,.015041,-.140605,.00275,.096857,.005218,-.216328,2.065722,-.045305,-.092777,-.052487,.080365,.043678,-.066631,.1684,0,.129897,.052364,3.002207,.09061,.037712,.312978,-.211076,.034836,.165957,-.037676,-.011746,-.174169,-.193179,-.030774,-.04791,.036044,-.288226,.390262,-.061503,.069897,-.041175,-.104562,-.087791,-.146715,.667958,-.360493,-.180901,-.304738,.237903,.189782,-.088613,-.460546,3.732066,-.04944,.02249,-.259434,-.009271,-.392853,.999447,-.089045,.101661,-.236411,-.184838,-.030105,-.359737,.113111,.144349,-.344076,-.057242,.105186,-.128525,-.149394,.505655,-.428694,-.024507,-.043072,-.036971,-.022943,.115115,-.053151,-.163455,.028864,.068596,-.009492,.032091,3.884891,-.062665,-.024621,-.027207,-.05352,.009538,-.041266,-.123251,-.2409,-.046837,-.258171,-.049477,.24704,-.317982,-.244836,-.199767,.220479,-.679487,3.555733,1.127378,0,-.228254,.188059,-.103737,-.715967,-.144397,-.114574,.31399,.084547,.269688,-.253605,-.006971,-.248966,-.208472,-.161445,-.03104,1.767435,2.434239,.179589,.361247,-.35398,1.270466,.184894,.1038,-.272303,.135904,.394687,-.040985,.046752,.349705,-.075213,.656667,-.074498,2.794172,-.021157,.224049,-.369892,.03267,-.353713,-.44572,.189437,-.062164,-.086668,-.345149,2.696922,-.02403,0,-.323099,.080285,.190918,-.251743,-.492631,-.131754,.036424,.022566,-.01671,.013078,.159895,.121534,-.238995,.05024,.902336,-.129469,.156436,0,233e-6,-.230596,-.031805,-.179134,-.402899,-.031585,-.113217,-.079463,0,-.011087,.080086,0,-.026868,.054868,.104062,-.116523,.034086,-.574911,1.38314,.066919,.012428,-.5426,.11265,-.439389,-.285747,.173377,-.15309,-.20428,-.142588,-.185555,-.072314,-.112448,-.088953,.039914,-.326078,-.063431,.322765,-.217577,-.063163,.001852,-.30872,-.265321,-.039014,-1.703539,.792516,-.01136,1.241655,0,-.114271,-.71676,-.038181,.251338,.007817,-.366537,-.357699,.160392,.060089,-.016204,-1.032171,-.089087,.023289,-.048508,-.499133,2.368857,3.308969,-.161768,-.08748,-.002654,.128844,.011059,.144697,.133291,-.150436,.216779,-.018651,-.296081,.016052,.059711,.041401,-.096873,-.16183,.137316,.010516,-.083645,1.510651,-.379143,-.273876,.095344,-.155288,.760861,.009016,.115738,-.110866,0,2.215067,-.378291,1.948101,.00377,.010164,.059969,-.005191,-.221161,.178565,1.200919,2.26765,.018098,0,.004011,.082001,.092304,-.067505,-.085514,.183851,.064123,.028164,-.185921,-.004017,-.072998,.1073,-.031055,-.102896,.189995,.002306,.188031,-.227963,-.394818,-.044792,-.132502,-.149885,-.028703,-.151696,-.163187,-.205406,.308601,.043737,.031682,-.040985,-.130396,-.296952,-.123728,-.027031,2.473447,-.086778,0,-.409327,-.557902,-.143691,-.4257,1.421222,-.073294,-.272008,.063323,-.03695,-.071233,-.098427,2.411877,.008955,-.121775,.076509,-.38006,-.087426,4.414267,-.193267,1.766924,.012325,-.135021,.047981,-.089581,-.158149,0,-.162196,.169317,-.313877,-.08086,-.49962,-.025906,.104156,-.072025,.044612,-.432727,2.069031,-.064988,-.200407,.001318,.039035,-.202524,.047139,-.287113,.093571,1.424789,.016055,.124177,.41775,-.04284,.631334,.193132,.032691,.613324,-.157094,.014913,.010913,.154364,-.023862,-.041158,.066429,-.0244,.240919,-.04627,-.044663,-.076458,0,.109145,1.945182,1.428369,.100087,-.021613,.20461,-.131428,.020322,-.282724,-.033057,.171353,.068423,-.303311,-.0681,-.225023,-.162931,-.158786,-.179482,-.307802,-.328457,-.067309,-.238678,-.176202,-.012894,-.360618,.111916,-.185386,.073645,-.141809,-.200392,.008839,-.314714,-.016283,-.143535,-.043762,-.048947,-.58327]]},finger:{bias:[1.892766,-1.892766],weights:[[.284451,.458036,-.377003,.002087,.272066,.51347,-.845193,.059406,.418627,-.913286,.016988,-.143846,1.370776,1.033415,.267875,0,-.381187,.357598,-.759695,.387718,.283372,.482562,-.886493,-.781842,-.024931,-.441739,-.052473,.155167,.333868,-.044465,.107059,-.088115,-.037415,-.356583,1.090301,1.720009,.439315,-.566591,.05378,.243638,.459988,-.01873,.147771,.16378,.095935,-.270739,.48202,-.046701,.052675,-1.954008,.002932,1.040626,.24197,-.276038,.161591,.124052,.341202,0,-.573048,.319369,-.166783,.58904,.450383,.246985,-.719988,.549397,-.79925,.678585,.288114,.003691,-.13367,.089982,.163754,.473903,.205703,-.068406,-.174398,.094166,-.035752,-.667365,.504856,.386727,.144993,1.528458,.074833,.001001,-.171224,-.360827,.253716,.115337,.223342,-.989003,-.452149,.106218,-.072199,.087969,-.119447,.030374,-1.128514,-.176946,.030538,-.042751,.021998,.270234,.131603,.439305,.71204,.471804,.123511,-.034974,-.081665,0,-.087755,.171043,-.103204,.253171,.050809,-.413197,.013926,.306913,.249818,-.00544,.414701,.244033,.062229,.091391,.013235,.039733,-.045179,.249661,.483557,-.002301,-.216969,-.110825,.292694,-.314579,1.17469,.173074,-.159037,-.328952,.286803,-1.315494,-.480123,.410177,.012541,-.041321,-.215699,-.31166,-.622915,.306141,.872539,-.244209,-.220898,-.451501,-.390608,.027325,.741018,0,-1.441616,.20191,-.229828,.071644,-.034268,-.117111,-.137622,.311879,-.107176,.981465,-.118756,-.629783,.15895,-.717747,.502513,.055644,-.265952,.160752,.161207,.071423,-.062614,.133817,-.650501,.641944,-.093365,.086397,.079513,.207563,-.134355,-.05518,.12108,.126556,-.299544,0,.250772,-1.346394,.430567,-.534883,.536158,.069064,-.195188,-.449002,.114398,-.619357,-.288815,.221601,-.887132,.077262,.164409,.199476,-1.748156,-.05934,-.585055,.150109,-.005058,.188177,.299021,-.070301,.164152,-2.04604,.065088,-.425098,.336905,-.087868,.20545,-.555293,.548248,-.543134,-.871441,.036647,-.21499,1.087099,.057975,-.021894,.696038,.057292,-.569258,-.07489,-.979952,.431687,.174947,.113767,.130653,.176091,-.397825,.247245,-.045907,-.307225,-.3271,-1.329669,-.736025,.273989,-.759712,-1.647236,1.423594,.218344,-.084373,.347545,-.549038,.117097,.030057,.827508,-.09105,.148148,.231285,-.318559,-.110695,-.648677,.122098,-.05083,-.681162,0,.052131,-.96581,-.603196,.055264,.681649,.021913,-1.284015,.047082,-.007932,.005725,.489075,.212763,-.531571,.018744,.065266,1.023675,.019421,-.087212,-.677046,.336809,-.219896,-.653803,-.421517,.013455,-.065138,.802671,-.029926,1.392779,.544989,.013253,-.008693,-1.397032,-.461502,.15614,-.812332,.143961,.121836,0,.243735,.429106,-.178581,.063099,.302077,.701991,.043929,-.75553,-.058374,-.029161,.56614,.565488,-.099056,.090387,1.131536,-.052069,-.608112,-.361224,.550672,-.0853,-.369322,.182305,-.399799,.474868,-.202424,.603789,.170309,.18552,.812271,-.018091,-1.129841,.609654,-.565566,.348412,-.64212,.255114,-.0793,-.058918,-.082428,-.18073,-1.092711,-.211256,.501128,.09057,0,.141934,.343361,-1.679371,-.157832,.118767,-5.866417,.054002,-.2493,-.125319,-.932578,.14394,.101582,-.38594,.052912,.264204,.149639,0,-.735602,-.091679,-.395626,-.600732,.129749,-.397663,.083187,.043069,-.084593,-.081183,-.073081,-.052276,.372108,.044775,.043174,.225116,-.819255,.125502,.201091,.034377,.011433,.124337,.07964,-.071699,-.466224,.01836,.13026,-.863404,.07783,.399439,.118579,-.287811,-.037822,-.143204,.42164,.531249,.019709,.507936,.991363,.047286,.530214,.563803,.140793,.414018,-.069244,.138803,-.106015,.615521,-.255379,.434991,.434613,.268567,-.048411,.805349,-.121857,.178356,.558604,.131135,.381867,-.148791,.116169,.107157,1.590421,-.988168,-.307119,.158785,-.545631,.129025,-1.282029,-.026152,.052631,-.071586,.02911,-.695198,-.26256,-.349243,.01778,-.040002,1.124498,-1.643043,-.668086,.154833,-.86751,-.055726,-.282198,0,-.405054,-.679831,.412034,-.778588,.149765,.056013,-.299195,.030374,.062186,.056506,-.037306,.116574,-.21235,-.183926,-.317891,1.007366,11e-5,-.857832,-.006736,-.871536,-.759189,-.954273,-.013326,-.153494,.241201,.147252,.057292,-.072199,-.266167,.376456,.066363,.523116,-2.01054,-.140943,-.100244,-.456818,.186129,-.305335,-.607084,-.374939,-.280207,.42829,-.667012,-.080327,.131011,0,.216676,-.982936,.224665,-.376077,1.270926,-.302832,.535999,.158094,.208753,134e-6,.160762,-.201628,-.017948,.176964,-.121023,-2.333603,-.292475,0,-.151362,-.358858,-.672943,-.278044,-.18196,.457695,-.098355,-.366853,0,.089253,.019042,0,-.501769,-.310103,-1.010503,-.410266,.368215,.100206,-2.026205,-.076973,-.198364,-.677059,.836627,-.101639,.090429,.050346,-.158134,.204003,.132834,.048534,.160291,.137488,.344477,.448663,-.103483,.290938,.6768,.347056,-.061757,.172253,.203257,-.776956,-.082298,.446487,1.428762,.110544,-.11637,0,-.349013,.567231,.136177,.204548,-.753926,.440592,.356589,.041316,1.157344,-.504852,.358455,.054151,.105383,.459645,-.734744,-.774795,-.419111,.088398,-.646791,.482664,-.974482,-.376266,-.573063,.10884,-1.368481,.513748,.062489,.772328,.054425,.070564,-.610422,.509147,.25546,-.187305,-.25348,.200291,.009336,-.024143,-.6907,.112232,.089801,-.083439,-.054359,.101344,-.602577,0,-.547115,.121141,-.360469,-.346136,-.005107,-.583391,.720685,.202248,-.183888,-.60617,.192823,-.198104,0,.011804,.036601,-.037215,-.031534,-.180729,.044887,-.075171,.083513,.307541,-.765769,-.016968,.10422,.345956,-.679517,.451189,-.213067,.0751,.185605,-.315945,-.240694,-.886157,1.018072,.361991,.092649,-.210783,.202689,-1.022355,-.437406,.07873,.057292,.070124,.302043,.34082,-.646421,.04198,.028594,0,-.084703,-.861968,.059187,.199217,.546626,-.100896,.550578,.453912,.011583,.668822,-.106022,.643253,.022863,.037614,-.031845,-.021849,.37138,-.232161,-.066731,.544235,.016134,-.193978,.072665,-.108889,-.107601,0,-.176043,-.83532,-1.31234,.190237,-.531988,.05754,.058634,-.136605,.335923,.326271,-.245835,-.432484,.339935,.296771,-.176512,.279575,.089792,-.683881,-.418299,.877389,.017439,-.491275,.221113,-.11202,.193799,.480084,.162752,.723222,-.540399,.051881,-.623489,-.391887,.313934,.235954,.232781,.13184,-.307998,-.026621,.841637,.147311,0,1.018177,.17495,-.239097,-.622147,.04676,.31916,.112478,.173816,.056328,-.192001,-.211193,.096174,-.071136,-.015161,-.081824,-.115786,.017813,-.019993,.129585,-.163308,-.128129,-.147989,-.096173,-.157073,-1.027644,-.065881,.044135,.106375,-.009962,-.46654,.199932,.062112,-.008152,.086464,-.025184,-.006642,1.649893],[-.284451,-.458036,.377003,-.002087,-.272066,-.51347,.845193,-.059406,-.418627,.913286,-.016988,.143846,-1.370776,-1.033415,-.267875,0,.381187,-.357598,.759695,-.387718,-.283372,-.482562,.886493,.781842,.024931,.441739,.052473,-.155167,-.333868,.044465,-.107059,.088115,.037415,.356583,-1.090301,-1.720009,-.439315,.566591,-.05378,-.243638,-.459988,.01873,-.147771,-.16378,-.095935,.270739,-.48202,.046701,-.052675,1.954008,-.002932,-1.040626,-.24197,.276038,-.161591,-.124052,-.341202,0,.573048,-.319369,.166783,-.58904,-.450383,-.246985,.719988,-.549397,.79925,-.678585,-.288114,-.003691,.13367,-.089982,-.163754,-.473903,-.205703,.068406,.174398,-.094166,.035752,.667365,-.504856,-.386727,-.144993,-1.528458,-.074833,-.001001,.171224,.360827,-.253716,-.115337,-.223342,.989003,.452149,-.106218,.072199,-.087969,.119447,-.030374,1.128514,.176946,-.030538,.042751,-.021998,-.270234,-.131603,-.439305,-.71204,-.471804,-.123511,.034974,.081665,0,.087755,-.171043,.103204,-.253171,-.050809,.413197,-.013926,-.306913,-.249818,.00544,-.414701,-.244033,-.062229,-.091391,-.013235,-.039733,.045179,-.249661,-.483557,.002301,.216969,.110825,-.292694,.314579,-1.17469,-.173074,.159037,.328952,-.286803,1.315494,.480123,-.410177,-.012541,.041321,.215699,.31166,.622915,-.306141,-.872539,.244209,.220898,.451501,.390608,-.027325,-.741018,0,1.441616,-.20191,.229828,-.071644,.034268,.117111,.137622,-.311879,.107176,-.981465,.118756,.629783,-.15895,.717747,-.502513,-.055644,.265952,-.160752,-.161207,-.071423,.062614,-.133817,.650501,-.641944,.093365,-.086397,-.079513,-.207563,.134355,.05518,-.12108,-.126556,.299544,0,-.250772,1.346394,-.430567,.534883,-.536158,-.069064,.195188,.449002,-.114398,.619357,.288815,-.221601,.887132,-.077262,-.164409,-.199476,1.748156,.05934,.585055,-.150109,.005058,-.188177,-.299021,.070301,-.164152,2.04604,-.065088,.425098,-.336905,.087868,-.20545,.555293,-.548248,.543134,.871441,-.036647,.21499,-1.087099,-.057975,.021894,-.696038,-.057292,.569258,.07489,.979952,-.431687,-.174947,-.113767,-.130653,-.176091,.397825,-.247245,.045907,.307225,.3271,1.329669,.736025,-.273989,.759712,1.647236,-1.423594,-.218344,.084373,-.347545,.549038,-.117097,-.030057,-.827508,.09105,-.148148,-.231285,.318559,.110695,.648677,-.122098,.05083,.681162,0,-.052131,.96581,.603196,-.055264,-.681649,-.021913,1.284015,-.047082,.007932,-.005725,-.489075,-.212763,.531571,-.018744,-.065266,-1.023675,-.019421,.087212,.677046,-.336809,.219896,.653803,.421517,-.013455,.065138,-.802671,.029926,-1.392779,-.544989,-.013253,.008693,1.397032,.461502,-.15614,.812332,-.143961,-.121836,0,-.243735,-.429106,.178581,-.063099,-.302077,-.701991,-.043929,.75553,.058374,.029161,-.56614,-.565488,.099056,-.090387,-1.131536,.052069,.608112,.361224,-.550672,.0853,.369322,-.182305,.399799,-.474868,.202424,-.603789,-.170309,-.18552,-.812271,.018091,1.129841,-.609654,.565566,-.348412,.64212,-.255114,.0793,.058918,.082428,.18073,1.092711,.211256,-.501128,-.09057,0,-.141934,-.343361,1.679371,.157832,-.118767,5.866417,-.054002,.2493,.125319,.932578,-.14394,-.101582,.38594,-.052912,-.264204,-.149639,0,.735602,.091679,.395626,.600732,-.129749,.397663,-.083187,-.043069,.084593,.081183,.073081,.052276,-.372108,-.044775,-.043174,-.225116,.819255,-.125502,-.201091,-.034377,-.011433,-.124337,-.07964,.071699,.466224,-.01836,-.13026,.863404,-.07783,-.399439,-.118579,.287811,.037822,.143204,-.42164,-.531249,-.019709,-.507936,-.991363,-.047286,-.530214,-.563803,-.140793,-.414018,.069244,-.138803,.106015,-.615521,.255379,-.434991,-.434613,-.268567,.048411,-.805349,.121857,-.178356,-.558604,-.131135,-.381867,.148791,-.116169,-.107157,-1.590421,.988168,.307119,-.158785,.545631,-.129025,1.282029,.026152,-.052631,.071586,-.02911,.695198,.26256,.349243,-.01778,.040002,-1.124498,1.643043,.668086,-.154833,.86751,.055726,.282198,0,.405054,.679831,-.412034,.778588,-.149765,-.056013,.299195,-.030374,-.062186,-.056506,.037306,-.116574,.21235,.183926,.317891,-1.007366,-11e-5,.857832,.006736,.871536,.759189,.954273,.013326,.153494,-.241201,-.147252,-.057292,.072199,.266167,-.376456,-.066363,-.523116,2.01054,.140943,.100244,.456818,-.186129,.305335,.607084,.374939,.280207,-.42829,.667012,.080327,-.131011,0,-.216676,.982936,-.224665,.376077,-1.270926,.302832,-.535999,-.158094,-.208753,-134e-6,-.160762,.201628,.017948,-.176964,.121023,2.333603,.292475,0,.151362,.358858,.672943,.278044,.18196,-.457695,.098355,.366853,0,-.089253,-.019042,0,.501769,.310103,1.010503,.410266,-.368215,-.100206,2.026205,.076973,.198364,.677059,-.836627,.101639,-.090429,-.050346,.158134,-.204003,-.132834,-.048534,-.160291,-.137488,-.344477,-.448663,.103483,-.290938,-.6768,-.347056,.061757,-.172253,-.203257,.776956,.082298,-.446487,-1.428762,-.110544,.11637,0,.349013,-.567231,-.136177,-.204548,.753926,-.440592,-.356589,-.041316,-1.157344,.504852,-.358455,-.054151,-.105383,-.459645,.734744,.774795,.419111,-.088398,.646791,-.482664,.974482,.376266,.573063,-.10884,1.368481,-.513748,-.062489,-.772328,-.054425,-.070564,.610422,-.509147,-.25546,.187305,.25348,-.200291,-.009336,.024143,.6907,-.112232,-.089801,.083439,.054359,-.101344,.602577,0,.547115,-.121141,.360469,.346136,.005107,.583391,-.720685,-.202248,.183888,.60617,-.192823,.198104,0,-.011804,-.036601,.037215,.031534,.180729,-.044887,.075171,-.083513,-.307541,.765769,.016968,-.10422,-.345956,.679517,-.451189,.213067,-.0751,-.185605,.315945,.240694,.886157,-1.018072,-.361991,-.092649,.210783,-.202689,1.022355,.437406,-.07873,-.057292,-.070124,-.302043,-.34082,.646421,-.04198,-.028594,0,.084703,.861968,-.059187,-.199217,-.546626,.100896,-.550578,-.453912,-.011583,-.668822,.106022,-.643253,-.022863,-.037614,.031845,.021849,-.37138,.232161,.066731,-.544235,-.016134,.193978,-.072665,.108889,.107601,0,.176043,.83532,1.31234,-.190237,.531988,-.05754,-.058634,.136605,-.335923,-.326271,.245835,.432484,-.339935,-.296771,.176512,-.279575,-.089792,.683881,.418299,-.877389,-.017439,.491275,-.221113,.11202,-.193799,-.480084,-.162752,-.723222,.540399,-.051881,.623489,.391887,-.313934,-.235954,-.232781,-.13184,.307998,.026621,-.841637,-.147311,0,-1.018177,-.17495,.239097,.622147,-.04676,-.31916,-.112478,-.173816,-.056328,.192001,.211193,-.096174,.071136,.015161,.081824,.115786,-.017813,.019993,-.129585,.163308,.128129,.147989,.096173,.157073,1.027644,.065881,-.044135,-.106375,.009962,.46654,-.199932,-.062112,.008152,-.086464,.025184,.006642,-1.649893]]},kind:{bias:[-.13464,-.324009,.109464,.349185],weights:[[-.782901,-.00332,-.04253,-.171205,-.183516,-.112484,-.041542,-.172789,1.576718,-.096546,606e-6,-.183254,.311048,.094349,.048951,-.008451,-.066896,-.047819,.27194,-.008203,.356512,.412767,-.126248,.030933,.201485,.71744,-.001904,.109758,-.193986,-.061233,-.105032,.114895,.061678,-.486462,-.028635,.576055,.065368,-.298378,.29828,-.125239,.151019,.122773,-.14849,-.04758,-.030093,-1.320365,-.08114,.126261,-.007054,-.116533,-.042459,.497645,-.058637,-.006637,-.079026,.565114,-.335359,-.016937,-.096938,-.062201,-.376702,.357215,-.003537,.090504,.047454,.11454,.919881,-.104793,-.004465,.218639,-.517423,.037008,-.330365,1.469754,-.03271,-.009906,.638061,-.29183,.668707,-.097836,-.297488,-.263699,.574805,-.088439,-.035896,-.170781,-.029277,.00617,-.044097,.215463,.087258,1.025019,-.841254,-.139468,.078626,-.57428,.679775,.284734,-.033766,-.146891,-.203339,-.011459,-.028529,.043997,-.020319,.045966,-.034391,-.089829,-.262839,-.100603,-.10026,.411514,-.134617,-.001073,-.011444,-.646664,-.377638,-646e-6,.46769,-.003983,-.16746,.025849,-.194201,-.00104,.556731,0,-.232693,-.114326,.021416,-.081488,-.083195,.064506,0,-.00339,-.084464,.047418,-.104381,-.1477,-.023272,-.014748,-.614759,-.098144,.113789,-.04805,.071977,-.303831,-.360389,1.197465,-.051336,-.098512,-.025489,-.293308,-.383405,-.019655,-.120148,.617668,-.07643,.052753,-.263998,1.156458,.095604,-.334582,-.054322,-.079191,.011043,-.008287,.013935,.020647,-.054975,-.016073,.03616,-.093115,-.065576,-.310546,-.147628,-.447926,0,.81478,.019952,-.504661,-1.192161,-.068145,-.085485,-.058437,.021623,-.181789,.137325,0,.35868,-.270134,.037455,.249632,.545808,.018504,-.038137,-.104525,.018025,-.045263,-.0478,-.150388,-.01178,-.040714,-.748802,-.068044,-.173913,-.248355,.149552,.015324,.030628,-.324956,-.333728,.637223,.192431,.738025,-.016232,-.102207,-.247287,-.159099,-.054306,-.064785,-.067658,-.004965,801e-6,-.11634,-.027515,-.150838,-.053685,-.006529,-.001867,0,-.189198,-.022282,-.161988,-.032051,.257669,.554126,-.021659,-.117061,0,-.277739,-.021506,-.017034,-.079289,-.207433,-.028541,-.024284,-.149717,-.055514,-.146147,.443076,.541102,-.033235,-.049887,-.162686,-.903517,.01623,0,-.32499,.735551,.007777,-.02147,-.022797,-.262296,-.234069,-.007377,-.013642,-.016073,-.023072,-.158443,-.24312,-.305503,.718824,-.041914,-.252567,.140077,.010146,-.04755,-.102792,-.119929,-.155636,-.103381,-.21525,-.029234,-.074444,.06331,.019045,.639168,.055869,-.169712,.680852,-.00392,.669938,-.144891,0,-.226354,.320221,.394359,-.004025,-.284898,.037111,-.021752,-.027905,.884131,-.008261,0,-.157219,-.169979,-.290721,-.323084,.101802,.040668,-.093648,-.259769,-.073065,.095224,-.115192,.01737,-.679838,.014173,-.022523,-.301812,-.036396,-.028724,.318554,-.050263,.187404,-.072979,.035177,-.057311,-.652707,.097716,.030239,0,-.20277,-.439906,-.162384,-.129401,-.153478,-.256139,.270019,1.064687,.225101,-.234866,.740407,-.192702,-.081588,-.146183,-.391144,-.053778,-.239369,-.122392,-.241023,-.189207,-.027206,0,-.013176,.820026,-.017662,-.097752,-.207933,.029194,-.063218,.077261,.091716,.06443,-.041353,-.001758,.0622,-.122512,.019084,-.092637,.03318,-.195836,.223521,1.101319,-.007769,.772825,-.014227,-.004716,.017556,.122625,.77161,.063678,-.232788,.01762,-.081766,.071351,-.059969,-.040482,0,-.053595,-.011034,-.207409,-.044841,-.122726,.063943,.055205,-.173076,-.031079,.359157,-.012641,-.100164,.26725,-.270968,.285059,-.042187,-.037725,-.040214,-.564313,-.011732,-.009374,-.089819,.02041,-.148596,-.50546,.16363,-623e-6,.009991,.593056,-.078562,-.004416,.041519,-.322666,-.06847,.172581,.017532,-.037367,-.239785,-.006504,-.728628,0,-.004688,-.115594,.78029,-.138419,-.163647,.045741,-.002277,.161377,.007654,.245463,-.014161,.082177,-.003792,-.065845,-.086794,.40949,.731612,.498394,-.142376,-.077344,-.242183,.040472,-.047966,-.205993,.11805,.312645,.72407,0,-.03447,-.066002,.815259,-.001057,-.071678,0,.033015,-.021153,-.057333,-.191326,.881079,2.091249,0,-.013683,-.004957,.004709,-.077121,-.024182,-.25116,0,0,.313912,.530248,.125486,-.033018,.435579,1.380671,-.526399,-.084224,-.088774,.201078,0,-.162796,-.325256,-.15562,.197065,-.079156,-.061673,.054119,-.374402,-.135347,.645291,-.00602,.004317,-.327617,.023631,.079485,.051196,-.021395,.207113,-.056874,.05149,.537046,.426649,-.00443,-.0025,-.009298,.074641,-.168559,-.01725,-.159704,-.229466,.471419,-.057194,.085351,-.019043,.191252,-.038862,.334234,-.010982,.022295,.019797,-.055938,-.296308,-.021608,-.009276,-.04832,-.077596,.248533,0,-.028089,0,.170354,0,-.016737,-.127259,-.170176,.067724,-.007609,-.430337,-.027738,0,-.019101,0,-.040819,-.668667,-.153436,.830422,-.176997,.168113,.981994,-.046796,-.52391,.10414,-.004495,1.425896,-.171078,-.865191,.037586,-.183374,.04783,-.256626,-.287226,.507543,-.047688,-.046866,-.344972,-.012078,-.101218,-.135588,-.13658,-.071319,-.197574,-.060503,-.145826,.080895,-.160436,-.428511,-.040644,-.041815,-.013687,-.082691,-.207315,-.157727,-.144863,.783683,-.054375,-.107842,-.081828,.129769,-.192621,-.089964,-.009959,1.443115,.061945,.016669,-.058742,-.220843,.097193,-.112218,0,-.005188,0,.207872,0,-.220783,-.11969,.104106,-.245098,-.238753,-.100215,.478974,.130933,-.255038,-.021121,0,-.071699,.608084,-.28977,.061166,-.300021,.070355,-.027447,-.084037,.039222,0,.271443,-.113221,.698004,.075676,.02486,.02569,.262006,-1.065674,.010247,.67495,-.380515,.039472,-.644199,-.194302,-.021395,-.365774,-.170616,-.122276,-.028556,-.135593,-.068531,-.335722,-.234,.010288,1.683043,-.046326,.015822,0,.045172,-.00937,-.047703,-.00887,.007519,-.089693,-.201951,-.260321,-.312914,-.107813,-.007952,-.029952,-.191118,-.32875,.094653,-.040462,-.052923,.45826,-.139028,-.107205,-.258548,1.095498,.145101,-.193952,.054216,.304261,-.014678,-.542402,-.14233,-.115505,0,0,-.263842,.605147,-.014796,-.257598,.080292,-.326899,-.201171,0,-.13813,-.031059,-.091254,-.397213,-.122456,-.007786,.103518,.581497,.630583,-.189579,.028354,.028374,-.35147,-.169862,.571718,-.294525,-.131044,.206227,-.12224,.356783,-.141606,-.082991,-.046986,-.066025,-.006985,-.134491,-.32188,-.006459,.009893,.004953,-.109337,-.06253,.105301,-.011774,-.058772,-.376203,-.007349,1.017093,-.003997,-979e-6,-.010183,-.192702,-881e-6,-.003559,.062748,-.239514,-.12836,-.249544,-.149278,-.021638,-.285337,-.21894,-.014291,.264394,-.011959,.084783,-.727423,.071272,-.066681,-.018032,-.05188,-.017686,.114015,-.191885,0,1.186223,-.346791,.026822,8.830566,0,-.012373,-.008717,-.13038,-.132578,-.347896,.329214,.922163,-.210794,-.086562,-.140328,-.024452,-.018028,.436724,.449435,.102152,-.04194,-.099008,-.540282,.554491,-.647632,.710956,.260217,-.318637,-.058157,.141443,-.121963,-.33131,.150231,.631304,-.011217,-.0323,-.013106,-.049322,-.317885,.024903,.458305,-.03927,-.100469,.070375,-.08109,0,.366324,-.012977,-.660586,-.021964,-.019682,-.058114,-.271972,-.019311,.022779,-.006132,.049732,1.286514,-.105397,.010715,-.001341,-.035861,1.330276,-.40118,-.307172,.171754,-.16847,.137645,.663136,-.037311,-.04421,-.013537,-.036564,-.134909,-.035167,.497097,0,.219115,-.281378,-1.61668,-.013089,-.003057,-.002458,.973383,-.036948,-.002379,-.016409,-.569123,-.089716,.486806,.088399,.04104,.301294,.803467,-.050593,-.157727,-.077439,.887887,-.105443,-.482875,.086656,-.117088,-1.96054,-.069951,.318504,-.222404,-.234816,-.002353,0,-.036992,.032464,-.059684,-.288721,-.351013,.41507,.05231,-.065468,-.090703,-.113718,-.117349,.035031,.405621,-.647858,-.031291,-.242721,-.037667,-.130447,-.03628,-.011247,-.29733,-.210236,.649537,.018111,.644908,.815259,-.118549,-.131378,.442075,.264902,-.324626,.448486,-.025911,-.035114,-.476633,-.231397,-.056193,-.762106,-.06917,-.048551,.136017,-.10476,0,-.001041,.17593,-.076531,-.137753,-.17683,-.157727,-.02401,.016997,-.027888,-.157157,-.301899,0,.083448,-.020634,.019051,-.276745,-.065953,-.205711,-.185504,.013362,.436594,-.005687,-.127023,.324878,-.128266,.014558,-.254809,-.297676,-.454119,.018465,.214226,.434762,-.276053,-.009073,-.036466,0,.586571,-.020296,.078369,-.129078,.128292,.03136,-.009629,-.038405,-.04773,-.030912,.292988,-.011944,.093741,-.013319,-.232471,-.660245,-.258624,-.208315,.596953,-.22396,0,.12354,-.147997,.460171,-.28398,-.207622,-.029874,-.014816,-.909738,.081333,.037522,-.237682,-.069564,-.045432,-.450926,.057611,-.350633,.042472,-.005011,0,.458057,-.194395,0,-.278746,-.002326,-.047191,-.039955,.459805,-.170893,1.034809,-.188307,0,-.053803,-.113269,.170512,-.217036,-.099436,-.03293,-.020985,-.099301,0,-.102996,.009358,-.003559,.017509,-.192462,-.131203,-.36943,-.298994,-.043741,-.651188,.029678,-.454373,.061791,-.043294,-.012709,-.102398,.426982,-.041166,-.35428,-.037414,.462521,-.154184,.224633,0,-.14744,.056316,-.048192,-.226444,.004892,.002995,-.079973,-.086594,.208212,-.036101,.549718,-.359375,0,-.217995,-.167323,-.007571,.496517,-.014146,.034075,-.015966,0,-.249955,.351792,-.183616,-.070455,.597398,-.01815,-.239142,-.388476,.018429,.073329,-.212562,-.014158,0,.068133,-.083121,.495945,-1.043644,-.097021,.065182,3.371829,-.110763,-.153455,-.008625,.344342,-.238171,1.041961,.789517,-.036916,-.111258,0,.461783,-.042713,.401446,-.170654,.011297,-.039461,.113532,.140509,-.170616,.210151,-.207986,.020569,.561214,.066245,-.302781,1.438411,-.098248,-.307694,-.031343,-.019586,.009117,-.270896,.76075,0,.21499,-.113619,.02161,.156745,-.232418,-.007508,-.684355,.066199,.022068,-.153769,-.179818,-.027134,0,.538981,-.076389,-.134345,-.170329,-.164026,-.003486,.390425,.346756,.745902,0,-.260362,.048718,.315109,-.00775,.008986,-1.06118,-.066019,-.16356,0,-.048388,-.208477,-.39066,-.055784,.054154,-.054958,-.107645,-.041377,.015698,-.213648,.093385,-904e-6,-.33753,-.252756,-1.363667,.168696,-.030474,-.234567,.525939,-1.924126,0,-.597326,.192929,-.348102,-.395824,-.049152,-.040841,-.053515,-.033336,-.36247,.473185,-.12768,.504627,1.054668,0,-.046015,.069274,.284523,0,.116076,-.240488,-.413503,.477737,0,.874131,.380161,.074745,-.013566,-.015936,-.011317,0,.005928,.007832,-.170762,.01728,.083295,.011355,-.102778,.005801,-.025674,-.021843,-.127566,.231129,-.17342,.071336,-.488915,-.188542,.354245,-.155288,.037698,.103518,1.293499,-.195332,-.975784,-.184167,-.028963,-.336106,-.025981,-.148115,-.11015,-.203937,.01254,.749642,-.013479,-.179191,-.1055,-.028689,0,2.945763,0,-.080946,-.049307,-.037114,-.133051,.003011,.12798,.600007,-.077899,.252074,-.058996,-.022477,-.027413,-.01891,-.054738,-1.059954,-.500441,-.251373,0,-.162434,.623719,-.332634,-.621833,.521725,.033317,-.394506,-.153694,.002197,.488994,.12033,.474262,.62758,.05838,-.17482,-.30379,-.002544,-.413114,.017567,-.069743,-.232037,.502445,872e-6,-.197064,-.136518,-.029541,-.045529,.027018,-.240354,-.005418,-.234676,-.170762,-.025557,-.198412,.30613,0,.146869,.045357,.012349,.546283,-.019026,.082935,.01057,-.029087,-.66936,-.626922,-.289543,.697634,-.11875,-.139865,-.121692,.558862,-.074864,-.102651,.06901,.417055,-.026698,.0918,-.11776,-.052209,.002197,.409741,-.106861,-.055703,.213723,-.221419,.533713,.15195,-.300164,.017244,-.661804,.025483,.042542,-.014202,.564675,.075639,.331182,-.183979,.16687,0,0,.336496,-.46102,.03559,.030371,-.422458,.017852,.477809,-.098271,0,-.045484,-.166882,-.138047,-.294909,342e-6,-.016443,.152836,-.009724,-.386586,.261509,-.745242,-.009493,-.01281,-.096251,-.144488,-.226007,.05149,-.833804,-.080302,.185562,-.261801,.708911,-.28694,-.114386,.05149,.01537,-.149038,.82503,-.050383,.374147,0,.151854,-.070243,.225613,-.006996,-.379018,.58445,0,.113185,-.027833,-.007322,-.30413,-.05228,-.020238,0,-.077266,-.053311,-.132128,-.020204,-.225401,-.08075,-.002279,.165391,.269362,-.150118,-.008831,-.008919,.001756,.450457,-.065936,-.147943,-.057132,.123042,.031518,-.001256,-.052724,-.454197,-.163231,-.168907,-.061062,-.018791,-.246124,-.07717,-.071516,.232836,.004091,.015168,0,-.040585,.321645,-.009751,.351773,-.165277,.470893,.111816,-.150209,.378968,.036316,.01938,-.023448,.261881,.11291,.016492,-.02659,-.065305,.043375,-.043742,-.35174,-.077485,.207248,-.008059,-.166655,1.278423,-.113598,0,-.347395,-.346168,-.221461,.07106,-.127218,.004302,.37607,.676509,-.848955,.138016,.260286,-.524695,.363403,.119696,.633668,-.227489,-.027334,.012474,-.160734,.245265,-.001681,.088462,.048901,.046502,-.054791,0,-.21519,-.139611,-.104279,-.151243,0,.010593,.306957,.398739,-.387339,.887292,-.108642,-.280529,-.083399,-.184126,.177393,.232269,.041901,-.142381,.255314,.374596,-.101473,.113905,-.123336,-.367897,-.121413,.198233,-.104326,-.535056,1.773628,-.032873,-.019925,.096434,-.028321,.011672,.012569,-.020483,-.066178,-.323046,-.009226,-.033634,.228382,-.044119,1.348917,.787956,-.043018,-.069508,-.287474,-.245205,0,-.246269,-.121918,-.100891,.002197,0,.045024,-.051837,-.095669,-.001698,.129061,.540192,-.165315,.43577,-.024515,-.294751,.109827,-.068488,-.017081,-.189923,.644765,.263756,-.11379,-.018945,-.534798,-.360337,-.232901,-.117071,-.010726,-.164375,-.228937,-.180837,-.270894,.264796,-.008719,-.012779,.24906,-.018441,-.024149,-.399157,.008289,-.306379,-.199781,0,.262516,-.03146,.508722,-.082416,-.26076,.054776,.012373,-.309349,-.033634,-.106023,-.006144,.042472,-.056411,.027509,-.017844,.072528,-.145301,-.049157,-.071656,-.143959,.19943,-.14211,-.173413,.648141,-.128078,-.265205,.306705,0,-.007125,-.043733,-.455865,-.143862,-.158071,.008779,.721172,.518333,.097244,-.021659,-.214106,.638014,.498964,.054603,-.036193,-.376608,-.032445,.029976,-.047179,.256909,.100156,-.001714,-.079077,-.020063,0,-.114065,-.092814,.029498,-.250662,.155948,-.008578,-.20152,-.31432,-.316679,-.23427,-.151217,-.284905,0,-.232379,.735018,.482721,-.026242,-.186814,-.198558,.013808,.30512,.090345,-.151345,0,-.284558,-.665206,-.042626,-.01952,-.355411,.034622,.041297,-.094872,.651483,.01391,-.001906,-.109213,-.016694,.274883,.005214,-.052392,.883494,-.00861,.422949,.781303,-.178784,-.418067,-.024354,-.003349,-.028041,.004088,-.233694,-.291101,-.210546,.428886,.792251,-.095562,1.114118,-.249544,.033041,-.40592,-.096724,-.22157,.021174,-.401067,-.291875,-.031095,-.293996,-.286997,-.062552,.405092,-.129216,-.081533,-.257015,.302345,-.12256,.074039,-.072716,-.249001,-.027972,0,-.108473,.492687,0,-.131698,-.159768,-.836424,-.018134,.002277,-.063541,-.137944,-1.265066,-.440784,-.002439,.272413,-.292525,-.303596,-.041317,-.101126,.346381,-.006294,.077356,-.203439,-.297114,-.061835,-.391689,-.028185,.03153,-.206287,-.071093,.31815,.022941,-.146817,-.129475,-.493141,-.040794,-.026771,.767935,0,-.546103,-.050365,-.055363,0,0,-.604523,-.001114,-.094402,-.054312,.170946,-.039771,-.193847,-.226859,-.012463,-.046416,.99834,-.230654,.439754,-.022927,-.025356,-.037558,.334215,-.008767,-.204626,.088164,-.322727,-.043804,-.001726,-.239526,-.231237,.20645,-.301699,.023905,-.392425,-.013431,-.54027,-.392866,-.014834,.380161,.006283,.103384,-.001131,-.134552,-.378035,.21157,-.055157,-.251936,-.134476,-.368259,-.087713,-.032679,.111678,-.141593,.430578,-.139086,0,.577783,-.85026,-.0741,.054374,-.045157,-.357936,-.110376,.257938,-.952788,-.007891,-.132004,-.367314,-699e-6,-.012543,-.062961,0,-.193595,.818055,-.044679,-.078373,.780943,-.105232,-.072925,0,-.082031,-.007185,-.00392,-.663943,.249661,.036443,.621518,.021915,.589797,-.186414,.074782,-.002051,-1.236727,-.142551,-.167125,.026784,.08475,-.017018,-.28016,.347585,.384008,.006937,.021806,-.025393,.439441,-.067988,-.075294,.066783,-.01973,.815259,0,.036218,-.674166,.009754,-.854976,-.150415,-.058938,-.043165,-.181065,-.015811,-.084994,-.029553,.734571,.425143,-.118925,-.294792,-.071454,.128401,-.142128,-.063963,.044851,-.052382,-.29237,.038024,-.031325,.377808,.090684,.838061,.015779,.013017,.009075,-.121472,.06331,-.091134,-.0501,-.11119,.620304,.782655,0,.061541,.004826,-.777679,.017877,.071944,-.081069,.690768,-.090906,.639394,.241699,-.290253,.210281,-.249449,-.024728,-.011088,.007168,.825973,0,.53942,-.089286,-.333925,-.052504,.360993,-.003559,.383495,.06069,0,1.13988,-.209709,.263725,-.429498,-.146472,1.423175,.626043,-.055688,-.043396,-.172613,-.132164,.011863,-.005653,.092186,-.350629,-.093187,-.021969,-1.028025,-.010101,.039355,.001111,.556025,.02436,-1.379668,-.04676,.305928,.819097,-.016778,.458216,-.001198,.852759,-.094919,.02172,-.054201,-.167889,-.023156,-.133686,.022523,-.004062,.419225,-.063371,.20471,-.091862,.104393,-.271936,-.409657,.031328,-.037594,-.410078,-.227387,1.017935,-.071779,-.049393,-.00355,-.057189,.033341,1.089862,.19966,.062042,-.021141,0,-.50449,-.069543,.486162,-.041165,-.166332,-.066633,-.071303,-.053697,-.353177,.27373,-.048888,-.028904,-.040311,-.181222,0,-.154652,-.179989,-.021628,0,-.0142,-.15995,.42708,-.039011,-.049639,.244659,.058539,.869671,431e-6,-.092706,2.599095,-.08747,-.049013,-.176261,1.055119,.036235,.053316,.33819,-.375537,0,-.142388,.613559,.074782,-.080746,-.021067,-.332433,-.276957,.673557,.068692,-.078285,.215287,-.004637,-.416231,-.060389,-.109663,-.25423,-.006238,-.008008,.033489,-.020777,0,.041376,.003264,-.165813,-.095734,-.459792,.09235,-.026515,.312766,.522682,.063922,-.043683],[-.722004,-.118764,.3075,-.15523,-.031419,-.110875,-.034918,-.137334,-.510408,.051571,.100132,-.148608,.284644,1.182752,-.260494,-.006983,.120707,-.047638,.333864,.012655,-.237898,.191569,-.329232,-.057753,.202288,.540567,-.002072,-.028545,-.073321,.055298,-.130585,.677671,-318e-6,-.31885,-.02995,-.30147,-.021944,.481895,-.180397,.045451,.202375,1.003718,-.03826,-.049737,-.022477,2.834193,-.07797,-.057265,-.00935,-.154089,484e-6,-.165404,-.039984,.020757,.011856,-.152323,.457195,.052486,.02264,-.06739,-.254481,-.210461,-.008237,.058734,-.030901,-.031008,-.615667,.237115,-.004087,-.01409,-.224551,-.032767,-.403978,2.45044,.0227,-.022539,.029003,-.307823,.191728,-.01977,.581433,.341878,.291484,-.083724,-.201893,.5009,-.002812,-.017667,-.058757,-.072195,-.061003,-.373596,1.401958,-.251668,-1.097757,1.351098,-.207734,.282701,.038057,-.167811,-.071877,1.048816,-.320692,-.024984,.017536,-.180429,.036715,.436857,-.142945,.304928,-.121491,-.108899,.392855,-.001185,-.010408,2.280849,-.051125,-939e-6,-.526308,.305603,-.118608,.028095,-.254763,-.00102,-.27242,0,.449627,-.056175,-.008278,-.059347,-.090753,-.154538,0,-.004908,-.088432,-.320181,-.348815,.570147,.062905,.040368,.189513,.372518,.072399,.06272,-.019077,.489967,-.060037,-.3431,.1631,-.056821,-.024979,-.215926,.796421,-.109927,.558754,-.101466,-.09183,-.018268,.655806,-.628389,-.352607,-.232531,-.189596,-.09146,-.043238,-.001348,.09551,.121117,-.240367,.085254,-.009796,-.127987,-.065002,-.085819,-.083553,.906356,0,-.332373,-.124959,1.383342,.89143,.274506,-.132234,-.118896,.761232,-.191062,-.177129,0,-.139643,.337568,.008528,.078585,.807192,-.080693,.168458,.21534,-.037974,.058905,.301477,-.132085,-.013132,-.042733,-.520252,.275407,.100491,-.364658,1.111762,-.087503,-.01783,.429988,-.321384,-.069146,-.068508,-.35441,-.009829,-.06959,-.292251,-.034734,-.055328,-.034354,-.154125,.063594,-.018728,-.163528,.174481,-.137114,.086982,-.006002,-.001766,0,.555154,-.185403,-.12452,-.048929,-.387844,-.148368,-.024259,-.056359,0,.862161,.061901,.045496,-.075759,-.338958,-.033631,.070231,-.205472,-.060355,-.417942,-.893116,-.179097,-.200894,-.105993,-.035945,-.466426,-.572902,0,.553468,-.024436,-.006546,-.025091,.073808,-.216247,-.249668,-.009891,-.014443,-.017956,-.036929,.13749,.493152,-.148395,-.199497,-.022146,.079816,.747576,-.003621,.0694,-.168757,-.055775,-.127288,-908e-6,.650212,-.125739,.149544,-.008031,.011299,-.151677,.241713,-.153128,-.186717,-.68699,-.395227,-.163298,0,.651321,-.265066,.407711,-.003857,.627264,-.011285,-.017919,-.016004,-.580681,.024275,0,-.11842,-.565328,-.538138,.237596,-.05486,-.024414,.525095,-.337817,-.093901,.340671,.459513,.003176,-.970207,-.004658,-.101598,.858366,-.139557,.091677,.512623,-.065448,-.055141,-.022724,.175966,-.048037,-.62016,.094343,.444137,0,-1.01619,-.39854,-.263896,-.10804,.021214,-.23267,.288161,-.061714,-.02137,.143569,-.23389,.591122,-.052435,-.064717,.995994,-.129367,1.087344,-.158963,-.225869,-.078014,-.022726,0,.020902,-.241756,-.019928,-.104733,.007093,806e-6,.077082,-.136371,.1112,-.03245,-.063531,.006175,-.017726,-.166167,-.005982,-.053482,-.01269,-.421655,-.095349,-.50495,.024933,-.207823,-.011744,.013762,-.363981,-.02142,-.187824,-.075027,-.077927,.079826,-.027569,-.00635,.075869,-.080337,0,-.0179,-.010734,-.257371,-.110373,-.068835,.031813,-.1153,-.129109,.049953,-.124519,-.015631,-.108508,-.065489,.384171,-.10222,.402601,.212578,.037946,-.146237,-.01098,-.02382,-.12327,.034717,-.236303,-.562561,-.298126,-737e-6,-.006363,-.28528,.227895,.04635,-.030155,.289554,-.076966,-.046751,-.13063,-.037347,.694569,.001967,.719407,0,.011457,.259383,-.228817,.35142,-.092663,-.295012,-.002856,.784333,.21275,.657405,-.013534,.018974,-.004212,-.195442,-.099874,-.108463,-.273701,-.38794,-.142527,.134175,.518105,-.019764,-.10531,-.246345,-.121532,.489012,-.042578,0,.043474,.072992,-.28099,-.040916,-.07959,0,-.04307,-.077518,-.057199,-.259875,-.527307,.184827,0,-.011048,-.041929,.514553,-.096931,-.01731,-.222552,0,0,-.71793,-.144447,1.190529,.156849,-.009446,1.017646,1.133364,-.150216,-.022651,-.077953,0,.458223,-.27133,.588196,-.077174,.522907,-.06534,-.012646,-.144066,-.090975,-.004942,.052252,-.012433,-.035813,-.176403,.193643,-.029096,.068666,-.134005,.411543,-.170925,-.281692,.081168,-.005709,-.002531,-.008954,-.035409,-.151335,-.012243,-.098433,-.243266,-.133419,.025684,-.02524,-.02584,.374134,-.045899,-.581912,-.012875,.063855,.37088,.630885,.103281,.144078,-.010184,-.003319,-.123778,-.102241,0,.292811,0,-.055312,0,-.016655,-.123764,.556568,-.004245,.021884,-.435477,.060631,0,-.02208,0,-.031084,.606079,-.129512,-.225178,-.170174,-.039559,-.279597,-.047276,.673292,.046896,-.007482,.49747,-.258728,1.683998,-.186828,-.174416,-.39829,.639763,-.328167,-.479666,-.026104,-.042263,-.294931,.131895,-.091635,-.057293,.602296,-.0682,.397715,.448069,-.051819,-.104022,-.189246,-.635181,.020985,.248851,-.015037,.09878,-.232796,-.158968,-.156215,.067865,-.054409,-.228551,.161593,-.02557,-.367958,-.083682,-.008351,-.415306,-.07347,-.007634,-.116428,-.272757,-.027932,.660091,0,-.005143,0,-.074614,0,.306498,-.070075,.047314,-.280319,.414054,-.088845,-.439264,.349313,.7181,-.030008,0,-.073605,.580818,-.319925,-.041311,.744493,-.13239,-.016797,.328601,-.027118,0,-.07165,-.115636,-.259471,.305652,-.007433,-.00891,.115388,.060454,-.006351,-.275242,.386869,-.021377,.695155,1.020718,-.019229,.987859,.162487,-.142077,.252816,-.011708,-.035233,.532474,-.087143,-.005898,-.410641,-.050804,.034235,0,.230973,-.010713,.017123,-.069844,-.014503,.088877,-.210641,-.468224,.075709,-.246974,-.007721,.060086,-.018128,-.281192,.037076,.044658,-.062849,-.11942,.217594,-.113792,-.23442,.223604,.218095,-.270206,-.003282,.306286,.012196,3.135641,.366481,.546018,0,0,-.260176,-.384767,-.014382,-.285493,-.008469,-.442817,.607889,0,-.101514,.257891,-.114975,-.414341,-.099205,-.008585,.074804,-.099973,-.204006,-.213979,-.025791,.540428,.065732,-.170761,-.319574,.029614,-.134209,.090587,-.143429,-.29321,.893599,.098187,-.045659,-.203605,.027811,.091515,.772769,.004418,-.003097,-.009307,-.14278,-.067364,-.009851,.032368,-.074466,-.465479,-.00747,.141696,.063719,-982e-6,-.028441,.591122,-.005924,-.00463,.030662,-.205698,-.06599,.851872,-.135599,.0552,-.269227,.343438,-.014527,-.181558,-.011958,.46169,-.39382,-.18538,.001425,.090136,.041675,-.16056,-.052412,.362622,0,-.699146,-.457255,.169157,-3.635748,0,.034067,.017206,-.102609,.105072,-.454244,-.535893,.076947,-.213592,-.216335,-.043238,-.018919,-.020662,.062372,.027214,.261035,.086921,-.041343,.522609,.836726,-.658874,-.191133,-.196149,1.245173,-.171154,.055111,-.134162,.169873,-.044866,-.228385,-.011869,-.032996,-.089734,-.069308,.339266,-.030776,-.13404,-.032176,-.077916,.045983,-.051064,0,-.060392,-.013302,-.069723,-.013549,.049193,.131302,.015962,-.020761,.004751,.067117,-.025182,-.170777,-.11577,.027202,.004195,.93969,-.397885,-.350986,.232076,-.404108,-.145265,-.177486,.104998,-.026531,.126877,-.221249,-.056493,.057787,-.015171,.377185,0,-.020032,-.234591,4.413162,.054085,.004545,.007223,-.367873,-.039471,-.019703,.018044,-.309861,-.098834,.05118,-.047527,-.092446,.291041,-.284951,-.006075,-.158968,.150976,-.212393,.450641,.393675,.280794,-.135333,-2.025972,-.077502,-.157927,-.211009,.136168,-.002959,0,-.18564,.037074,-.080433,-.19838,.26854,-.332042,.063062,.171729,-.188968,.404255,.167047,-.032721,-.379118,1.248998,.081655,-.278116,-.017395,-.178067,-.019786,.072789,.535408,.271092,-.198953,.124489,-.209689,-.28099,.025958,-.135245,-.428697,-.033908,-.377206,1.124778,-.232241,.011527,-.490649,.60036,-.046368,1.459556,-.055206,-.132989,.097305,-.084902,0,-715e-6,-.637493,-.080806,.123968,-.17179,-.158968,-.025561,-.026997,-.155908,-.13111,-.374708,0,-.023967,-.017102,-.009008,-.245817,-.083311,-.18875,.110974,-.009844,-.42568,-.006474,.574367,-.353301,.28017,-.123837,-.318233,.489908,-.140506,.066528,.398971,.524198,-.405697,-.009118,.053832,0,-.302052,-.182294,-.184356,.026529,.0401,-.017511,-.005885,-.042052,-.049859,.380174,-.195401,-.011601,.110198,.023855,.658066,1.197276,.732081,.448014,-.176428,.300215,0,-.167895,.486456,-.239012,-.103929,-.276438,.093036,.126776,1.730844,.159426,-.108358,.658021,.175949,-.058307,.324561,.010859,.186013,-.023961,.009261,0,-.359834,.589861,0,-.240487,-.002644,-.042228,.029146,-.284699,.611544,.523902,.822336,0,.054561,-.009416,-.226909,.414969,-511e-6,.124496,-.25661,-.116518,0,-.060601,-.05513,-.004885,.055732,.41677,-.092244,1.149054,-.273743,-.039091,-1.567846,-.012988,-.366673,-.00939,-.054738,-.015014,-.114224,-.165811,.053161,.480537,.109894,.2984,.136615,-.552123,0,-.072371,-.27858,-.147189,-.221772,-.054984,1.057038,.125092,-.080323,.164393,-.02081,.323035,.475081,0,-.266319,-.439676,.024472,.230328,.006568,-.057723,.03926,0,.551657,-.558398,-.009772,-.063084,-.380942,.021042,.254083,-.370558,-.074204,.005492,-.122672,.093773,0,-.092729,.168698,.400055,-.171695,-.113687,.447041,-1.450765,.118105,-.184286,-.009791,.187031,-.230737,-.37949,-.521776,-.041783,-.058678,0,.073359,.065612,-.090374,-.137335,.023524,-.153955,-.153011,-.204824,-.138217,.412269,-.10441,-.086608,.426793,-.158529,.4638,1.839749,.975616,.736441,-.02995,.611322,-.002896,.377995,-.298535,0,.022975,-.146403,-.041256,-.180096,-.135947,.017859,1.02188,-.036206,-.011116,-.145253,-.143777,-.027636,0,-.13225,.013488,-.212197,-.096606,-.031574,-.003461,-.106116,-.210773,-.42767,0,-.319609,-.126828,.23933,.020721,.119298,3.241799,-.081874,-.147932,0,-.083906,.57562,-.389463,-.10309,-.025931,-.01464,-.110524,.230548,.175653,-.234144,-.029669,-.001072,-.431997,-.300804,.367266,.093598,.026171,.51768,.486,1.582147,0,-.392635,.098107,.455621,.460302,.008998,.173916,-.047525,-.031932,.002695,.598715,-.182531,-.419399,-.047175,0,.009538,-.038213,.53668,0,.098369,.644672,.741685,-.038866,0,-.439928,-.236671,-.181738,-.142131,-.018061,-.013403,0,-.002165,-.043239,-.181058,-.005623,-.037616,.087551,-.073244,.06985,-.027956,1.071468,.004644,-.376488,-.167445,-.234837,.297828,.06964,-.191423,-.138352,-.057935,.074804,-.337015,-.22932,-.939041,-.1386,-.027808,.486062,-.087775,-.032093,.099122,-.269253,.015282,.388396,-.016092,-.204772,-.074594,-.016551,0,-1.088647,0,-.164531,.042985,-.038344,.132166,-.003593,-.004911,-.162007,-.083537,-.096586,.111834,-.214905,.003422,-.030357,.279661,2.202829,-.667803,.565849,0,-.105581,-.329127,-.237535,-.309226,-.155874,.156113,-.479393,-.113089,-.011971,-.16942,-.054979,-.100726,.103857,.104043,-.083458,-.282708,-.016282,.395705,-.176039,.101597,-.118405,-.18013,-.054432,-.266295,-.098312,.17879,-.058228,-.027806,-.269811,-.103276,-.196392,-.181058,-.023777,-.206902,-.110724,0,.97438,-.100227,-.114086,-.306711,.061902,-.026532,.017873,.0527,-.059859,-.533898,-.215912,-.049372,-.082395,.207779,-.061757,-.693696,-.013445,-.119365,-.325358,-.260966,-.029685,.132564,.154562,-.021505,-.011971,-.110992,-.108804,.047173,-.070844,-.227208,-.386187,-.094433,-.080801,.049094,-.564857,-.036756,.027624,.033204,-.370609,-.03705,.899954,-.243473,-.250898,0,0,-.214035,.406611,-.052718,-.024069,-.362444,-.241086,-.506497,.56092,0,-.056507,-.044396,-.095988,-.308811,.004603,.165295,-.08514,-.009259,-.364981,-.391522,-.723759,-.082185,-.010472,.10693,-.127206,-.146719,-.170925,.527806,-.079091,.032954,.112572,.383782,-.147908,.392698,-.170925,-.015338,-.319301,-.368249,.107504,-.242211,0,-.031989,.043998,-.330787,.027624,-.369449,-.308435,0,-.251031,-.011859,-.005651,1.211243,-.066166,.023753,0,-.196525,-.013702,-.105112,-.021298,.60775,-.113758,-.002171,-.234487,-.113551,.061544,.005563,.027631,.154744,-.459576,.165778,-.184167,-.165603,-.03259,.158226,.004208,.103073,.953479,-.054455,-.170433,-.153684,-.017753,.655167,.078113,-.079689,-.06652,-.001576,-.128916,0,-.07872,-.026538,-.004359,-.224915,.563108,-.193568,.509147,-.108956,-.119974,-.032345,-.007127,-.023301,.14975,-.026848,-.053882,.036665,-.114279,-.044069,-.033359,-.030768,-.081458,.314676,-.009636,-.339931,-.960244,.618198,0,.464886,.68863,-.049927,-.002835,-.097412,-.060074,-.070639,-.012002,-.37775,-.078802,-.144709,-.629233,-.145178,-.057112,-.103147,-.252604,.018677,-.1714,-.065706,.09758,-.001167,-.047368,-.04098,-.01298,-.052357,0,.365639,-.169899,.118968,-.315993,0,.638384,.663197,.10397,-.417837,-.576927,-.148751,.753382,-.020122,-.155094,-.101671,-.077558,-.057773,-.131856,.306114,.438841,-.096711,.113168,-.067096,.661856,-.04144,-.06502,-.136936,1.31753,-1.098138,.122979,.027127,-.02782,-.027366,-.022808,.008017,-.003873,.091414,.758342,.012407,-.023999,.003262,.130244,-.277915,.656181,-.037874,-.083493,.00777,-.076281,0,.049686,.254698,.077375,-.011971,0,.015934,-.058141,-.107909,.056482,-.085682,-.145649,.003137,-.678611,-.024251,.004013,.05043,-.143423,-.018538,-.230778,-.266874,-.07211,.327943,-.040199,-.514197,.627914,-.285628,-.067972,-.012671,-.008028,-.27336,.191253,-.316506,-.070686,.013835,-.01167,-.191059,-.018855,.050303,.498121,-.013731,.565405,-.174871,0,.555209,-.02201,.516932,.03155,-.300511,-.018274,-.178226,.753735,-.050045,-.077699,.025045,-.023961,-.072229,-.021371,.204493,-.159293,.568944,-.074945,-.063395,.120694,-.279255,.450064,-.329144,-.29296,-.078434,-.085625,-.571561,0,-.006353,-.055916,-.345533,.43626,.661457,-.00212,.813368,-.140859,.008963,-.025319,-.204492,-.145907,-.273992,.124227,-.031062,-.046404,.020938,-.101069,-.187137,.438654,-.075075,-.00136,-.088193,.060383,0,-.062271,-.117703,.122597,-.275919,-.037275,.046305,-.066248,-.4318,-.403871,.335961,-.281364,-.042183,0,-.135008,-.268051,1.004164,.028474,.006587,-.172688,.042171,-.340774,.17802,-.201821,0,.533765,.009743,-.119751,-.132031,-.334185,.011389,.032018,.096478,-.193695,-.028799,.006028,-.11438,.01691,.284429,.024806,-.064139,-.355726,.03038,-.267829,-.262915,.563412,.600437,483e-6,-.090691,.014429,-.092062,.295306,-.208565,-.183894,-.214988,-.222825,.045799,-.790552,.851872,-.026061,.504975,-.126023,.612508,-.013646,-.144608,-.154188,-.130895,-.385541,-.258112,-.056128,.251577,-.126553,-.090002,-.11821,.166887,.077343,-.122483,-.102419,.565074,.144344,0,.514951,.255706,0,-.175509,.077388,.683277,-.020828,.212289,-.066455,-.130106,-1.7417,-.469745,573e-6,-.155826,-.127423,-.256298,.105703,-.116692,.648953,-.007191,.079377,-.100133,-.259835,.115152,-.36841,.039289,.385508,-.254468,.046489,-.218502,-.04147,-.112004,-.114612,.426739,-.093533,.071175,.465108,0,.265319,-.068963,-.027829,0,0,1.581706,.003544,.045087,-.11141,-.43327,.024718,.874244,.033392,-.012807,-.133827,-.397652,-.147979,1.366092,.051034,.051901,.072006,-.175787,.024864,.576418,-.03426,.462826,-.080311,.118546,.394241,-.280912,-.586921,.257603,-.009357,.76143,-.016692,1.303242,-.367471,-.288811,-.236671,.146376,-.140279,-881e-6,-.153541,-.284289,.509299,-.011127,-.015626,-.164794,-.474518,-.002228,.135089,-.230557,-.446904,-.070398,-.082043,0,-.63367,.101647,-.246883,-.031893,.177673,.728637,-.139882,-.127628,-.842471,-.033456,-.092837,-.374793,-648e-6,-.011663,-.040688,0,.549703,-.301069,.445971,.206712,-.183424,-.209724,.032804,0,.176589,-.010189,-.004555,-.42736,-.090844,.00761,-.171191,-.240824,-.5637,-.795013,-.024924,-.016665,.698571,-.116191,-.149654,-.079229,.045506,.415451,-.092941,.101966,-.269843,.01223,-.003478,-.183484,.306152,.053925,-.117173,-.023574,-.09135,-.28099,0,.364766,.231927,.019577,.089494,-.082573,-.022214,.030079,-.032669,-.043183,-.119149,.05837,-.194508,.471532,-.089283,.577397,-.059691,-.041524,-.160157,.111811,-.011742,.054341,-.321197,-.010134,.021435,.192992,.222716,.130207,-.121712,-.003861,-.077561,-.028172,-.008031,-.262313,-.015936,.314619,-.380863,-.423934,0,-.062297,.007941,-.403052,.007327,-.01525,-.166326,-.535076,-.107765,-.212636,-.079483,-.241783,-.298688,-.298292,-.004201,-.011173,-.066669,-.484578,0,-.139082,-.090803,.25026,-.029218,-.150426,-.004885,-.141392,-.043102,0,-.687361,.559731,-.241535,-.166077,-.112576,-.588908,-.17378,.112617,.005983,-.132925,.01327,-.003542,.006988,.116929,-.301499,.432967,-.026139,-1.027842,-.02513,.092751,-.143092,-.125887,.286324,3.361562,.097487,-.138405,-.255969,-.019218,-.634906,.004671,-.268475,.042804,-.006741,.293835,-.278202,.061571,-.185905,-.041956,-.004188,-.465643,-.02694,.004281,.090444,-.044115,.826939,.532098,.015888,.079847,-.367403,-.255567,-.586423,-.085441,-.050302,-.00353,.125241,-.3356,-.487713,.047764,.016459,.025983,0,.459081,-.113113,-.23553,-.046418,-.163306,.186586,-.076629,.031552,-.18122,.380477,-.102618,.051163,.334012,-.570974,0,-.136257,-.097024,.030362,0,.038752,.188686,.386215,.070044,.065276,-.303979,-.118538,.577373,.001165,.308814,-.612019,-.106729,-.059194,.657984,-.526797,.037413,.116763,-.1008,.546733,0,.082216,-.216793,-.024924,.084351,-.035914,.310416,.272858,.267684,-.322242,-.092166,-.083998,-.004696,-.475458,-.138646,-.138039,.395176,.0197,-.010539,-.081635,-.017947,0,-.039438,.005128,-.257344,-.211053,.38036,-.029464,-.030379,-.06878,-.502964,-.085212,.454011],[1.979272,-.188696,-.276978,-.210772,.378461,.406803,-.080945,.556862,-.256137,.071219,.023458,.536881,-.465456,-.226435,.639291,.027596,-.036999,-.095758,.132283,-.003623,-.08987,-.381841,.313657,.09827,-.166141,-.779328,.007085,-.034036,.151932,-.049695,.447823,-.294447,.017231,.027336,.111728,-.42308,-.023604,-.29261,-.342768,-.289962,-.238275,-.904635,.373001,-.061988,.06592,-.878164,-.062745,-.010848,-.014796,.479004,-.137063,.046925,.175276,-.006731,-.160955,-.175908,.144719,-.018232,-.268387,.172336,1.092716,-.306753,-.021311,-.072336,-.008586,-.310889,.225601,-.042909,.015378,.354494,.461268,-.045549,-.594862,-1.813476,-.040222,.068211,-.324866,-.429308,-.265198,.228077,-.139454,-.452683,-.505633,.233441,.605212,.003513,.059219,-.009687,-.031304,-.059487,-.003687,-.319757,-.328073,.09874,1.932965,-.412798,-.265269,.021968,-.049874,.581659,.448066,-.689371,-.361432,.052733,.030695,.330465,-.080542,-.079979,-.214237,.376681,-.123691,-.134325,-.113738,.004219,-.017827,-.789031,.391459,.003841,.319576,-.06888,.455097,.085902,-.630177,.002465,.068482,0,.212081,-.185239,6e-4,-.226065,-.186898,-.01276,0,.009932,.164581,.549778,-.312678,-.171147,-.114843,-.011635,.349169,-.122214,.212175,-.021347,-.022263,-.330882,.04238,-.443301,.032883,-.173274,.094863,1.154491,-.089891,-.123449,-.217087,-.292925,-.101393,.050168,-.407489,-.251529,-.120382,.011405,.069973,.22046,.087922,.01708,-.105984,-.078122,.310723,.072217,-.010905,.396524,.236376,-.32258,.186504,-.262122,0,-.130093,.301616,-.422534,.370269,-.087503,.129524,-.254855,-.486002,.767257,-.003359,0,-.077359,-.266565,-.024829,-.174784,-.832588,.007807,-.076505,.015903,.063551,.017886,-.181657,.580981,.042216,-.044848,.699317,-.101364,.086228,.96739,-1.023484,.096611,-.00895,.184719,.458356,-.304451,-.067459,-.019962,-.023509,.254169,-.293955,.390544,.172415,.078167,.232751,-.036634,.006245,-.482216,-.109139,-.22851,.002626,-.011056,.007602,0,-.121409,.366452,.395955,-.005534,-.414671,-.173792,-.045176,-.164239,0,-.307175,-.018055,-.013566,.387288,-.351,-.044415,-.024193,.611394,.153887,.853177,-1.236807,-.312562,.594197,.125376,.123489,.921547,.046021,0,-.061667,-.018658,93e-5,.088019,-.028825,-.376331,-.006898,-.016627,-.025542,.065994,.093153,-.240531,.062527,.012121,-.189122,-.068827,-.294246,-.125799,-.003485,.039207,-.214382,.307726,.424584,-.170232,-.160957,.13232,-.021821,.014717,-.015436,-.198331,-.064273,.531882,-.131644,-.858027,-.019199,.591152,0,-.335114,.266116,-.464691,.015751,-.219922,-.009841,-.02267,.067953,-.177617,-.007511,0,-.319277,.380275,-.44666,.534292,-.026475,-.060789,-.099513,.697264,-.112284,-.405108,-.178662,-.04414,-.312024,-.005006,.021772,-.221722,.283586,-.011393,-.544584,.173227,-.076239,.03658,-.125685,.182137,-.313916,-.12049,-1.163119,0,-.646136,1.468005,-.198194,.343335,.422007,.453881,-.547458,-.590493,-.207092,-.279132,-.428269,-.217593,.471286,-.02267,-.190876,-.223532,-.759212,.242933,.61792,-.051464,.078593,0,-.054635,-.293046,.020228,.257347,.305749,.092771,.050778,.049631,-.156482,-.04365,.20654,-.002199,-.027,-.161117,-.007206,.276777,-.006914,1.041089,-.078546,-.281642,-.009918,-.290752,.04496,-.003793,.705903,-.05019,-.298849,-.037105,-.071102,.18835,-.016815,-.014221,-763e-6,.024628,0,-.076334,.045359,-.386435,-.163699,.498642,-.043672,-.059911,-.133487,.001515,-.121405,-.024464,.159448,.054543,-.010154,-.157787,-.128573,-.100042,-.017465,.049652,.048415,.065819,-.046351,.048942,.518972,.304821,.157839,.001964,-.005116,-.180746,-.101941,-.014706,-.034538,.158577,-.032948,-.061007,.18062,.130196,-.175845,.008867,-.586343,0,-.003205,-.163761,-.282597,-.161797,.487058,.547276,.008936,.285487,-.305927,.277481,.054842,-.052623,.015043,.635065,.320934,-.149297,-.450817,-.480141,.374106,-.032141,-.088547,.100477,.170083,.620467,.147364,.486861,-.160198,0,-.01047,.00315,-.329099,.100025,.20217,0,.010546,.04586,.157771,-.43445,-.351285,-1.559884,0,-.020363,.002978,-.321902,.307581,-.280661,.829766,0,0,.733011,-.093695,-.531976,-.064258,-.073756,-1.201242,-.331126,.256763,-.124287,-.158689,0,-.255674,1.022235,-.215211,-.094423,-.182888,-.070771,-.018724,-.144945,.361413,-.166855,.007448,.014169,-.85705,.438336,.054031,.099505,-.023329,-.148402,-.345872,.192194,.031163,-.209478,.013064,-75e-6,.035179,.015712,.542982,-.02241,.228868,.863387,-.418637,-.099503,-.027698,.0528,-.235118,.172795,.174443,.047729,-.033356,-.029983,-.118291,.173974,-.066542,-.018123,.163567,-.1621,-.070926,0,.034393,0,-.066916,0,.058485,-.197001,-.162027,-.030537,-.007315,-.126369,.014502,0,.027996,0,-.159736,.410386,-.10164,-.262251,.527621,-.336993,-.370053,.159026,.561384,-.066344,-.006488,-1.090972,-.359821,-.076718,.167407,.644894,-.39218,-.082489,-.131801,.188032,-.018387,.160876,.397645,-.085175,.318646,-.204051,-.252114,-.081168,.016127,-.232627,.457094,.174679,.676892,-.524046,.008912,-.036873,.051424,.060692,-.159176,.592504,.191542,-.406535,.143318,.674873,-.068341,-.065419,.841998,.306688,.035161,-.536602,-.140981,-.005406,-.186582,-.328129,-.030654,-.213303,0,.018604,0,-.088966,0,.191567,-.054197,-.077239,-.19173,-.120169,.122216,.411271,.224257,-.126157,-.016841,0,-.168805,-.611599,-.111157,-.01135,-.12677,.026362,-.034949,-.149362,.112103,0,-.043583,-.408012,-.250424,-.152057,-.008579,-.010653,-.218734,2.022005,-.002125,-.137685,.477988,-.019385,-.394408,-.42252,.044386,-.379911,-.015924,.471042,.272565,.284864,.109885,-.254815,-.400431,-.00299,-.624397,.183213,-.067381,0,-.144508,.024781,.112633,.059117,.036618,.315705,.879187,-.508969,.569267,.536509,.026173,-.022563,-.084927,.419025,-.073888,-.055796,.220673,-.198407,-.130587,.114059,.139156,-1.628511,-.055903,-.269406,-.039807,-.252794,.027064,-1.358343,.087841,-.12051,0,0,-.502593,.101193,.045742,-.293281,-.016242,-.604714,-.216406,0,.379794,-.41234,-.243997,-.215157,.296685,.029429,-.145118,-.166304,-.288818,.827945,-.003542,.132556,.659409,.566571,.203975,1.01407,.493084,-.081832,.406802,148e-6,-.673925,.103242,-.03364,.361162,-.002875,.040271,-.386393,.01428,-.003218,-.014119,-.001211,.10406,-.052251,-.009375,.135363,1.403335,.034175,-.738302,-.030949,.003661,.096115,-.217593,.015424,.010576,-.047495,.692182,-.189002,-.284706,.341905,-.01609,.274121,.023645,-.023632,-.193154,.015243,-.178279,.827033,-.261461,-.064604,.117472,.0782,.381706,.027961,-.03481,0,-.30172,-.583895,-.004012,-2.547083,0,-.009359,-.001994,.346204,.075694,.693475,.371639,-.565627,.521071,.415597,.49085,.071668,.053681,-.155884,-.076769,-.2408,-.020967,.174607,-.4781,-.651176,2.193332,-.242776,-.140002,-.475382,-.088608,-.165432,.587672,-.011542,-.007,-.286238,.038589,-.056258,.268058,-.112099,.448425,-.042199,-.135524,.092423,-.323542,.119118,.192059,0,-.157164,.052065,-.770315,-.130096,-.017331,-.036118,.535443,.073922,.042956,-.038001,.054283,-.876576,.242371,-.00929,-.001352,-.394284,-.479211,.114382,.019785,.584747,.537531,-.256513,-.107348,-.055306,-.076909,.148105,.069136,.010551,.101142,-.681758,0,-.251057,-.358632,-1.445688,-.019134,.002686,-.00307,-.323282,-.044338,.108263,.018412,.727951,.377818,.154038,-.038821,.088682,.169159,-.357047,.160324,.592504,.183717,-.345054,-.176143,-.474647,.106384,.326958,6.632128,.277468,.034132,.009201,.560498,.00733,0,.255639,-.039193,-.110383,-.124968,.277321,-.147354,-.064325,-.049309,-.168622,-.767324,.044146,-.037484,-.07919,-.08431,.005835,.406454,.124431,.179221,.530631,-.130021,-.143806,-.279505,-.207901,-.067297,-.254585,-.329099,-.125682,.395382,.509554,-.139503,1.172102,-.688107,.550136,-.039434,1.652364,-.14749,-.030168,-.164989,-.104076,-.157799,.153629,-.185951,0,.003283,.309362,.250203,.079977,-.010574,.592504,-.032238,-.030511,.239227,-.275835,-.376405,0,-.024547,.069251,.025639,-.307294,-.091523,.472436,-.469888,-.002348,.492776,.016265,-.219183,.185571,-.087912,.179419,.319247,-.097349,1.456649,-.011237,.6521,-.481884,1.162649,.033856,-.026195,0,.080723,-.16002,.08132,-.124353,-.069347,.00933,.030066,.047507,.080808,-.281379,-.192983,.039078,.2216,-.00694,-.24513,-.23202,-.175483,-.169636,-.141979,.100728,0,.389816,-.145649,-.347096,-.416992,-.385524,.075265,.025051,-1.033406,.228649,.042113,-.154247,-.190706,.10726,.388645,-.033231,.35175,.1021,-.002244,0,.220533,-.221331,0,-.013235,.033775,-.100061,-.047892,-.084951,-1.002117,-.964685,-.319714,0,.022574,.049407,-.188281,-.129306,.112642,-.020409,-.259806,.520863,0,-.099754,.068475,-.005484,.030144,-.085493,.391082,-.121418,.338265,-.041107,1.524487,-.010655,.100413,.019864,-.060721,-.032816,-.234185,-.184222,.047592,-.205099,-.037656,-.490543,.287604,-.763472,0,.117281,.353867,.228476,-.382197,-.087549,-.864923,.035694,-.07885,-.180423,-.005139,-.454628,.136904,0,.315005,-.187267,-.008939,-.396663,-.012533,.092515,-.005209,0,-.221039,2.009319,.169878,-.00639,-.27852,.019932,.35591,1.575534,-.201272,-.038247,-.140432,.0069,0,-.010129,-.054865,-.4494,1.676637,.467833,.289595,-.933621,.170782,-.225917,.035301,-.062594,.254679,-.297553,-.02526,.164685,-.184257,0,.034591,-.301253,-.151585,.512597,-.017768,-.181291,.199028,-.269276,.499134,-.350778,.073283,.148534,-.397744,.053069,-.477218,-2.61961,-.578826,-.190734,.11772,-.218502,-.002707,-.149229,-.370745,0,-.180522,-.084901,.226016,.145553,.697903,.04218,-.884791,-.028607,-.025857,.435903,.483352,.082801,0,-.385294,-.226969,.181727,-.514726,.515388,.013007,-.138394,-.07096,-.169031,0,-.153651,.104134,-.279269,-.005623,.076741,-.951704,-.047753,.608488,0,.078464,-.140408,-.190385,-.202508,.003973,.140281,-.079491,-.059656,-.122681,.611697,-.0349,.004847,1.044694,.294946,1.247977,-.12304,-.005545,-.124999,-.315517,-1.068006,0,.90606,-.174415,-.202725,.28687,-.043203,-.010595,.252132,.113394,-.414494,.643943,-.230988,.033612,-.568094,0,-.039357,-.028043,-.361693,0,.222531,-.108366,-.290481,-.234137,0,-.231115,-.0941,.183614,.042093,-.017082,-.027026,0,-.002221,.044751,.728969,-.006715,-.126951,.049467,-.357069,.012573,.076493,.025479,.239599,.161099,-.169631,-.526828,.130478,.119999,-.252603,-.104612,.145702,-.145118,-.457347,-.288876,3.44255,-.525245,-.038193,-.02827,-.140716,.397801,-.20123,-.344896,-.013901,.656221,-.024526,-.020325,.226853,.004095,0,-.863841,0,.361445,.050263,.093957,1.456704,.006132,-.057035,-.187145,.14126,-.008004,-.031917,-.179771,.057457,.018313,-.242169,-.592381,.699664,-.189479,0,-.104961,-.404463,.309953,1.33201,-.180352,-.154381,1.043018,-.056985,.127643,-.1799,.003463,.544386,-.493209,-.0989,.116009,1.042053,.120259,.387519,.063687,.041037,.672926,-.02052,.062276,.886417,.41172,-.068036,-.121691,-.020527,-.311056,.184533,-.42097,.728969,-.02479,.733152,-.118177,0,-.467457,.117312,.224739,-.320245,-.017671,-.030031,.056429,-.032357,-.164753,1.538001,.520861,-.379222,.379336,-.273128,-.058276,-.522969,-.094442,.533543,-.41306,-.111398,.115272,-.176308,.047959,.030522,.127643,-.139384,.508892,.052617,.005271,.197235,.05763,-.064518,-.005266,.203966,1.887019,.017713,.027774,-.003204,-.161081,-.057255,-.487182,-.350725,.198756,0,0,-.351774,-.434303,.165118,.057821,.700993,.381827,-.571446,-.251109,0,-.05936,.274078,.396503,.362672,-.013454,-.006987,-.025345,.025132,.53007,-.144119,1.836573,.150732,-.003042,-.069609,.412878,-.48251,.192194,-.801278,.197958,-.146171,.451514,-.652401,.686906,-.123599,.192194,.003614,.477827,-.145242,.001296,-.10552,0,-.032324,-.287501,-.199308,.068909,.791041,-.196517,0,-.201451,.020568,.016059,-.100423,.198569,-.014675,0,-.284268,-.104162,.464597,.055648,-.172776,.273614,.00733,.298083,-.183634,.280857,.016403,-.009794,-.036053,.585273,-.122192,.050446,.192815,-.041136,-.127277,-.001718,.00447,-.231456,.377808,.635016,.378387,.062052,-.123954,.072217,-.161031,-.058687,-.001604,.490517,0,.190431,-.016033,.030505,-.106144,.029537,.089983,-.255417,-.26062,-.13688,-.005187,-.006276,.01146,-.178476,-.032859,.119125,.031117,-.215807,612e-6,.138494,.488493,.294735,-.661405,.025144,-.395257,-.587864,-.193934,0,-.211098,-.235244,.094353,.124866,.507156,.037223,-.048713,-.272316,1.774049,.197551,.079727,1.101365,-.041921,-.009283,-.265215,.081451,-.040633,.173173,.28115,-.076648,.004684,.018458,-.016568,-.018124,-.082555,0,-.121016,.674507,.818652,-.235521,0,-.4033,.742394,-.179321,1.132825,-.191001,.392551,-.276575,-.075276,.611754,-.18959,-.018151,-.07271,.253841,.281833,-.182363,-.143016,-.151282,-.187764,.147686,-.175554,-.260765,-.184821,-.229938,-.62069,-.042491,-.020543,-.031812,.078631,.013325,.022917,.05232,.044336,-.420254,-.001866,-.057449,-.13105,-.042099,-.44637,-.781191,.143956,.195247,.171398,-.049666,0,-.129081,536e-6,-.0691,.127643,0,-.044374,-.067053,.345009,-.025547,-.043663,-.176978,-.032276,.736647,-.039339,.747186,.187922,.521363,.05709,-.116675,-.165949,-.093156,-.089019,-.009641,1.318113,-.414909,-.469678,-.288952,.039697,.529455,-.368447,-.628852,-.194837,-.096557,-.002651,.040822,.325362,.047266,1e-6,.003237,-.03811,.19364,.445007,0,.338491,.007805,.212918,.069931,-.363292,-.015467,.459274,-.236363,.067696,-.148291,-.009702,.1021,-.074576,-.035871,-.103135,.557533,-.20852,-.062121,.240458,.153949,-.357679,-.136009,-.398149,.024616,.186543,-.228907,.795858,0,.023135,.153846,-.153027,-.07925,-.192292,-.004347,-.925001,-.198923,.125566,-.117788,.127475,-.241714,-.115278,-.228221,.036037,-.348132,.054686,.222696,.313692,-.098787,-.015826,.004976,.332062,-.019873,0,.313345,.517181,-.045715,.973976,-.051929,-.001073,.478388,.374318,1.309585,.083294,-.386381,.140767,0,.221629,-.278209,-.62634,-.216623,-.219481,.531769,-.091531,.459739,-.077029,.480923,0,-.041567,-.283072,.306847,.04874,.322499,-.025603,-.035924,.138303,-.254666,.008665,-.002084,.285604,.030937,-.63567,.021588,-.097847,-.366859,-.01071,.415583,-.289455,-.174039,.048799,-.034355,-.11576,.014308,.187896,.419336,-.384469,-.23053,-.225016,-.046363,-.015999,-.096248,-.284706,-.058736,.359609,-.16823,-.190606,-.020208,-.268312,.974679,.261712,-.033132,.284804,.218012,-.764071,.45321,.155927,.347317,-.29933,-.193877,.062758,.346427,-.201544,-.038873,0,-.086965,-.569038,0,.039109,-.185095,-1.119376,.050688,-.051272,.242608,.548495,5.173446,1.228008,.123778,.343326,-.400471,.968883,-.021513,.293365,-.746463,-.002711,-.006811,-.238638,-.442646,-.027761,1.028027,.027984,-.250024,-.354812,.157476,-.02914,.152912,.401482,.304485,-.645572,.363484,-.018741,-.710218,0,-.395322,-.039658,-.005818,0,0,-.385685,-.001513,.189391,-.150634,-.078885,.054634,-.308621,.354831,-.019157,.131323,-.062471,-.205319,-.92427,-.015305,-.020351,.009653,-.242835,-.008026,-.168217,-.057484,-.027232,.239964,.006801,-.162777,-.24181,-.656789,.165638,-.009492,-.179858,.048741,-.168631,-.220079,-.427997,-.0941,-.046624,.054625,.002792,-.252149,.08021,-.553246,.066551,.299414,-.201155,-.09677,-.224098,-.075604,.455617,-.701261,.053857,-.019533,0,-.573694,2.005537,.555267,-.041342,-.055903,-.148991,.521051,.010289,.956849,.066331,.393434,1.413495,.002857,-.020737,.139352,0,-.230182,-.271582,.632539,-.050523,-.357307,-.440195,.068369,0,-.043961,-.013584,-.007732,.921848,-.113074,-.032018,-.187271,-.583018,.626957,.344167,-.025089,.052557,.299903,.375642,.539264,.04177,.182421,.256254,-.4061,-.265373,.03323,-.01065,-.010027,.275725,-.489673,.126156,.183631,.009041,.274436,-.329099,0,.294746,1.265798,-.014229,1.046861,-.196182,-.195009,-.067393,.353789,.10377,-.186051,-.014402,-.374205,-.408252,.004323,-.06293,.22021,-.05258,.605043,.013569,-.015787,-.210745,.920856,-.012939,-.094924,.241929,-.086934,-.965411,.146692,-.005059,-.07479,-.315283,.014717,.698569,-.046984,-.042653,-.1401,.315352,0,-.063247,.044755,1.461111,-.13438,-.022072,.045134,.265866,.310362,-.227369,-.067698,-1.089486,-.320403,-.533964,-.036552,.041949,-.050029,-.063723,0,-.188496,.593256,-.052197,.329637,-.141922,-.005484,-.078916,.146918,0,-.23926,-.190475,.042672,-.737989,.163975,-.54986,-.132244,-.079842,.054039,.166475,-.486506,-.005054,.009748,-.113832,.264841,-.172608,.08701,2.877613,.075144,.020028,-.196837,-.168866,-.173591,-1.037271,.17319,.040623,-.301905,.063891,.817405,-.002354,-.343724,-.159343,-.008811,-.101816,-.055085,-.021115,.54543,-.049616,.013428,-.025571,-.110795,-.084892,.268922,-.031898,-.202623,-.481805,.100156,-.025693,1.087239,-.306903,-.342494,.427504,.182427,.009419,.047717,.269697,-.376596,-.559293,-.037597,-.012852,0,-.65883,-.324232,-.202015,-.027891,-.328378,-.052116,.338715,-.041472,.216495,-.311778,.276423,.006449,-.149769,.615758,0,.540063,.489976,-.0184,0,-.014597,.456512,-.517901,-.020002,-.072383,-.303653,-.128628,-.764254,.003983,-.153174,-.81791,-.070888,-.101546,-.277958,-.257822,-.041505,-.71715,-.129644,-.832822,0,-.234647,-.100183,-.025089,-.100977,.024974,.185936,-.347797,-.380974,.685769,.072911,-.086261,-.007828,-.052258,-.34682,.457871,-.068763,-.005437,.02521,.157659,.070623,0,-.393841,-.311768,-.384209,-.154672,.179377,-.035664,.116674,-.032494,.263979,-.067141,-.182861],[-.474366,.31078,.012008,.537207,-.163526,-.183444,.157405,-.246739,-.810172,-.026244,-.124196,-.205019,-.130237,-1.050666,-.427748,-.012161,-.016812,.191215,-.738087,-829e-6,-.028744,-.222495,.141823,-.07145,-.237632,-.478679,-.003108,-.047177,.115375,.05563,-.212205,-.498119,-.078592,.777976,-.053143,.148495,-.019819,.109092,.224885,.36975,-.115119,-.221856,-.186252,.159306,-.01335,-.635663,.221856,-.058148,.0312,-.208383,.179038,-.379166,-.076654,-.007388,.228125,-.236883,-.266555,-.017318,.342684,-.042745,-.461532,.159999,.033084,-.076902,-.007967,.227357,-.529815,-.089413,-.006826,-.559043,.280706,.041308,1.329205,-2.106717,.050232,-.035766,-.342199,1.02896,-.595236,-.110471,-.144491,.374505,-.360656,-.061278,-.367424,-.333632,-.02713,.021184,.134158,-.083781,-.022569,-.331667,-.232631,.292396,-.913834,-.36402,-.206772,-.589403,.045583,-.266956,-.17285,-.347986,.710652,-.071746,-.027912,-.196002,.078218,-.267049,.620021,-.581006,.345442,-.16829,-.1445,-.001961,.03968,-.845154,.037303,-.002255,-.260958,-.232739,-.169029,-.139846,1.079141,-405e-6,-.352793,0,-.429015,.35574,-.013738,.366899,.360846,.102792,0,-.001634,.008316,-.277015,.765874,-.2513,.07521,-.013984,.076077,-.15216,-.398363,.006676,-.030637,.144746,.378046,-.411063,-.144647,.328608,-.044395,-.645257,-.323125,.25303,-.221519,-.223277,.269652,-.084652,.015682,-.27654,.377384,.555708,.173945,-.049809,-.055727,-.007445,-.003462,-.063642,-.015381,-.141398,-.015459,-.175422,-.105798,.718945,.044677,-.196308,0,-.352313,-.196609,-.456148,-.069538,-.118858,.088195,.432189,-.296852,-.394406,.043163,0,-.141678,.199131,-.021154,-.153432,-.520412,.054382,-.053816,-.126717,-.043602,-.031528,-.072021,-.298508,-.017304,.128295,.569736,-.105999,-.012805,-.354377,-.23783,-.024433,-.003848,-.28975,.196756,-.263626,-.056464,-.363653,.04957,-.082372,.833493,-.196711,-.062781,.020971,-.010968,-.021995,.011682,.762085,-.037828,.516461,-.035923,.023587,-.003969,0,-.244547,-.158766,-.109447,.086514,.544845,-.231965,.091094,.337658,0,-.277247,-.022339,-.014896,-.23224,.897391,.106587,-.021754,-.256205,-.038018,-.289088,1.686848,-.049443,-.360068,.030504,.075142,.448396,.51065,0,-.166812,-.692458,-.002161,-.041458,-.022186,.854874,.490635,.033896,.053627,-.031965,-.033152,.261484,-.312559,.441777,-.330206,.132887,.466997,-.761854,-.00304,-.061057,.485931,-.132022,-.14166,.274521,-.274005,.022652,-.053279,-.069996,-.014909,-.28916,-.233309,-.209042,-.362491,1.548936,-.255512,-.282963,0,-.089853,-.32127,-.337379,-.007869,-.122443,-.015985,.062341,-.024045,-.125833,-.008503,0,.594917,.355031,1.275519,-.448804,-.020467,.044535,-.331934,-.099678,.279251,-.030787,-.16566,.023593,1.962068,-.004509,.102349,-.334831,-.107634,-.051559,-.286594,-.057516,-.056024,.059123,-.085458,-.076789,1.586783,-.071569,.688743,0,1.865096,-.629559,.624475,-.105894,-.289743,.034928,-.010722,-.41248,.003361,.370429,-.078249,-.180826,-.337263,.23357,-.413975,.406677,-.088763,.038422,-.151028,.318684,-.028661,0,.046909,-.285225,.017362,-.054862,-.104909,-.122771,-.064641,.009478,-.046434,.011669,-.101655,-.002218,-.017474,.449796,-.005896,-.130658,-.013576,-.423597,-.049626,-.314727,-.007246,-.274249,-.018989,-.005252,-.359477,-.051015,-.284938,.048454,.381817,-.285796,.126149,-.050779,-.015137,.096191,0,.147829,-.023591,.851216,.318913,-.307081,-.052084,.120006,.435672,-.020389,-.113233,.052737,.049224,-.256304,-.103049,-.025052,-.231842,-.074811,.019733,.660897,-.025703,-.032625,.25944,-.104069,-.134072,.7632,-.023344,-605e-6,.001489,-.127031,-.047393,-.027228,.023174,-.125466,.178384,-.064822,-.067522,-.055482,-.278939,-.00433,.595564,0,-.003564,.019972,-.268877,-.051204,-.230748,-.298005,-.003802,-1.231197,.085523,-1.180349,-.027148,-.048528,-.00704,-.373777,-.134267,-.15173,-.007094,.369687,-.089203,-.02469,-.187376,-.121186,-.016807,-.168128,-.143882,-1.288518,-.521294,0,.001466,-.01014,-.205171,-.058052,-.050902,0,-491e-6,.05281,-.043239,.885651,-.002487,-.716192,0,.045093,.043908,-.19736,-.133529,.322153,-.356054,0,0,-.328993,-.292107,-.784039,-.059573,-.352378,-1.197075,-.275839,-.022322,.235712,.035564,0,-.039753,-.42565,-.217365,-.025469,-.260863,.197785,-.022749,.663412,-.135091,-.473494,-.05368,-.006053,1.22048,-.285565,-.327159,-.121606,-.023942,.075294,-.008797,-.072759,-.286518,-.298339,-.002925,.005106,-.016927,-.054944,-.223087,.051903,.029269,-.390654,.080637,.131014,-.032413,-.007917,-.330267,-.088035,.073236,-.023872,-.052794,-.360693,-.456657,.019053,-.055927,.037582,-.111928,.363474,-.075367,0,-.299115,0,-.048126,0,-.025093,.448024,-.224365,-.032941,-.006961,.992184,-.047395,0,.013184,0,.231638,-.347798,.384587,-.342993,-.18045,.208438,-.332344,-.064954,-.710766,-.084693,.018465,-.832394,.789627,-.742088,-.018165,-.287104,.74264,-.300648,.747194,-.215908,.092178,-.071748,.242259,-.034642,-.125792,.396932,-.213602,.220687,-.216268,-.154939,-.259449,-.151552,-.32721,1.587738,.010746,-.170163,-.022699,-.07678,.599287,-.27581,.109537,-.445012,-.034534,-.338481,-.011424,-.038781,-.281419,-.133043,-.016851,-.491207,.152507,-.003629,.361753,.82173,-.038607,-.334571,0,-.008273,0,-.044292,0,-.277282,.243962,-.074181,.717148,-.055132,.066845,-.450982,-.704503,-.336905,.06797,0,.314108,-.577303,.720851,-.008505,-.317702,.035674,.079194,-.095203,-.124207,0,-.15621,.636869,-.188109,-.229271,-.008848,-.006127,-.158661,-1.016786,-.00177,-.262024,-.484342,.00129,.343453,-.403896,-.003762,-.242175,.024052,-.206689,-.496825,-.137562,-.006122,.058063,.721573,-.0014,-.648004,-.086082,.017324,0,-.131637,-.004698,-.082053,.019597,-.029634,-.314889,-.466595,1.237514,-.332063,-.181722,-.010499,-.00757,.294173,.190917,-.057842,.051601,-.1049,-.140433,.052021,.106938,.353813,.309408,-.307293,.733564,-.011127,-.357754,-.024583,-1.234896,-.311992,-.310003,0,0,1.026611,-.321573,-.016564,.836372,-.055582,1.37443,-.190312,0,-.140149,.185508,.450226,1.026711,-.075024,-.013058,-.033204,-.31522,-.13776,-.424387,979e-6,-.701359,-.373671,-.225948,-.456118,-.749159,-.227831,-.214982,-.141133,-.063721,-.078068,-.118438,.126286,-.091532,-.017951,.002705,-.064497,-.012239,-.003577,.018472,.253328,.025833,-.043199,-.011218,-.002125,-.561653,-.019356,-.420487,-.028773,-.0017,-.057491,-.180826,-.008619,-.002387,-.045915,-.24697,.383352,-.317622,-.057028,-.017473,.280443,-.148143,.05245,.110318,.008674,-.368194,.29421,.375569,.129861,-.189577,-.067995,-.203461,-.089564,-.135927,0,-.185357,1.387941,-.191967,-2.647735,0,-.012335,-.006495,-.113214,-.048188,.108665,-.16496,-.433483,-.096685,-.1127,-.307285,-.028297,-.014991,-.343211,-.399879,-.122388,-.024013,-.034256,.495773,-.740042,-.886825,-.277047,.075934,-.451154,.317919,-.031122,-.331547,.172979,-.098365,-.116681,-.015503,.121553,-.165219,.230729,-.469806,.048072,-.188741,-.020978,.501926,-.235476,-.059905,0,-.148768,-.025786,1.500623,.165609,-.012179,-.037071,-.279432,-.033851,-.070485,-.022984,-.078833,-.239162,-.021204,-.028627,-.001501,-.509544,-.45318,.637783,.055312,-.352393,-.223796,.296354,-.660786,.119148,-.005757,.086681,.023921,.066571,-.050804,-.192524,0,.051974,.874601,-1.350794,-.021862,-.004173,-.001694,-.282228,.120758,-.08618,-.020047,.151033,-.189268,-.692023,-.002051,-.037276,-.761495,-.16147,-.103657,-.27581,-.257254,-.330441,-.169055,.563846,-.473833,-.074537,-2.645616,-.130015,-.194709,.424212,-.461851,-.002019,0,-.033007,-.030345,.2505,.612068,-.194848,.064326,-.051047,-.056952,.448293,.476787,-.093845,.035174,.052687,-.51683,-.056199,.114383,-.06937,.129292,-.474565,.068479,-.094272,.218649,-.242684,-.075302,-.180634,-.205171,.218273,-.128758,-.522932,-.091491,-.47027,-.885157,-.291984,.063021,-.685082,-.221473,.132729,-.53246,.228452,.339339,-.386951,.375613,0,-.001527,.152202,-.092866,-.066193,.359193,-.27581,.081809,.040511,-.055431,.564103,1.053012,0,-.034934,-.031515,-.035682,.829857,.240787,-.077975,.544419,-.001171,-.50369,-.004104,-.228161,-.157147,-.063991,-.07014,.253795,-.094883,-.862024,-.073756,-1.265297,-.477076,-.4809,-.015664,.008829,0,-.365242,.36261,.024667,.226902,-.099046,-.02318,-.014551,.032951,.016781,-.067884,.095396,-.015533,-.425539,-.003596,-.180465,-.305011,-.297975,-.070063,-.278547,-.176983,0,-.345461,-.192811,.125937,.8049,.869584,-.138427,-.137011,.2123,-.469408,.028723,-.266092,.084322,-.003521,-.262281,-.035238,-.187129,-.120611,-.002006,0,-.318757,-.174136,0,.532468,-.028806,.18948,.058702,-.090155,.561467,-.594026,-.314315,0,-.023331,.073279,.244679,-.068627,-.012695,-.071157,.537401,-.305044,0,.263351,-.022702,.013928,-.103385,-.138815,-.167634,-.658205,.234472,.123939,.694547,-.006035,.720633,-.072265,.158754,.060539,.450807,-.076948,-.059587,.078842,-.034824,-.270378,-.270035,1.090962,0,.10253,-.131602,-.033095,.830414,.13764,-.195109,-.080814,.245767,-.192182,.06205,-.418125,-.25261,0,.169308,.794265,-.007962,-.330182,.020111,-.068867,-.018086,0,-.080663,-1.802714,.02351,.139929,.062064,-.022824,-.370851,-.8165,.257046,-.040574,.475667,-.086515,0,.034726,-.030713,-.4466,-.461298,-.257125,-.801818,-.987443,-.178123,.563658,-.016884,-.468778,.214229,-.364918,-.242481,-.085986,.354192,0,-.569733,.278354,-.159487,-.204608,-.017053,.374707,-.159549,.333591,-.190301,-.271642,.239113,-.082495,-.590262,.039215,.316199,-.658551,-.298543,-.238014,-.056426,-.373235,-.003514,.042131,-.09147,0,-.057444,.344923,-.206369,-.122202,-.329538,-.05253,.547266,-.001386,.014905,-.136881,-.159758,-.028032,0,-.021437,.28987,.164815,.781661,-.319789,-.00606,-.145915,-.065023,-.149202,0,.733622,-.026024,-.27517,-.007348,-.205025,-1.228915,.195647,-.296996,0,.05383,-.226735,.970508,.361383,-.032196,-.070683,.29766,-.129515,-.068671,-.163905,-.028816,-.002871,-.275166,.258614,-.251575,-.139254,.009848,-.158114,-.696421,1.409985,0,.083901,-.116621,.095205,-.351348,.083356,-.12248,-.151092,-.048126,.774269,-1.715843,.5412,-.11884,-.439399,0,.075834,-.003019,-.459509,0,-.436976,-.295818,-.037701,-.204734,0,-.203088,-.04939,-.076621,.113604,.051078,.051746,0,-.001542,-.009344,-.377149,-.004942,.081272,-.148373,.53309,-.088224,-.022863,-1.075105,-.116677,-.01574,.510496,.69033,.060609,-.001096,.089781,.398253,-.125465,-.033204,-.499138,.713529,-1.527726,.848011,.094964,-.121686,.254472,-.217593,.212258,.818086,-.013921,-1.79426,.054097,.404288,-.046759,.041145,0,-.993275,0,-.115968,-.043942,-.018499,-1.455818,-.00555,-.066034,-.250855,.020175,-.147484,-.020921,.417153,-.033466,.030954,.017246,-.550493,.468581,-.124997,0,.372976,.109871,.260216,-.400951,-.185498,-.035048,-.169119,.323767,-.117869,-.139675,-.068813,-.917921,-.238228,-.063523,.142269,-.455555,-.101434,-.37011,.094785,-.072891,-.322484,-.301796,-.008715,-.423058,-.176891,-.081213,.225449,.021315,.821221,-.075839,.852039,-.377149,.074124,-.327838,-.077229,0,-.653792,-.062442,-.123002,.080673,-.025205,-.026372,-.084873,.008744,.893972,-.377182,-.015406,-.26904,-.178191,.205214,.241725,.657803,.18275,-.311527,.669408,-.044691,-.05889,-.048055,-.084761,.043193,-.117869,-.159365,-.293227,-.044086,-.148149,.251392,-.205156,.007001,.38623,-.270304,-.660358,-.006441,-.097941,-.015798,-.032984,.018666,-.743954,.778177,-.114728,0,0,.229314,.488712,-.147989,-.064123,.083909,-.158593,.600134,-.211541,0,.161351,-.0628,-.162468,.241048,.008509,-.141865,-.042351,-.006149,.221497,.274131,-.367571,-.059054,.026324,.05893,-.141184,.855236,-.072759,1.107276,-.038565,-.072345,-.302285,-.440293,-.252058,-.154714,-.072759,-.003646,-.009488,-.311539,-.058417,-.026416,0,-.087542,.313746,.304483,-.089538,-.042573,-.079499,0,.339297,.019124,-.003086,-.80669,-.080123,.01116,0,.558059,.171175,-.227357,-.014146,-.209573,-.079107,-.00288,-.228987,.027823,-.192284,-.013135,-.008918,-.120447,-.576154,.02235,.281665,.029921,-.049316,-.062467,-.001233,-.054819,-.267826,-.160123,-.295676,-.163641,-.025508,-.28509,-.073161,.312236,-.107629,-91e-5,-.376769,0,-.071125,-.279074,-.016395,-.020714,-.427368,-.367307,-.365546,.519785,-.122114,.001216,-.005978,.035289,-.233155,-.053204,-.081735,-.041192,.395391,82e-6,-.061393,-.105985,-.135792,.139481,-.007449,.901843,.269686,-.310666,0,.093608,-.107218,.177035,-.193091,-.282525,.018549,-.256718,-.39219,-.547344,-.256766,-.195304,.052563,-.176304,-.053301,-.265306,.398642,.04929,-.014247,-.054711,-.266197,-.001836,-.059552,.008647,-.015398,.189703,0,-.029433,-.364997,-.833341,.702758,0,-.245677,-1.712548,-.323388,-.327648,-.119364,-.135158,-.196279,.178797,-.272535,.113868,-.13656,.088583,.020396,-.843261,-.631074,.3412,-.075791,.378196,-.441645,.338406,.127552,.426083,-.552536,-.054801,-.047614,.013341,-.036801,-.022945,-.002189,-.043502,-.027964,-.069573,-.015042,-.001314,.115082,-.100594,-.044026,-.624632,-.662945,-.063064,-.042246,.108306,.371152,0,.325664,-.133317,.092616,-.117869,0,-.016584,.177031,-.141431,-.029237,284e-6,-.217565,.194454,-.493806,.088105,-.456447,-.34818,-.309452,-.021472,.537376,-.211943,-.098489,-.125134,.068786,-.269117,.147332,.988207,.473995,-.016299,-.357052,.870744,.618437,.782238,-.097554,-.002464,-.016373,-.383363,-.00997,-.026155,-.102202,.043551,-.452666,-.070354,0,-1.156216,.045665,-1.238571,-.019065,.924563,-.021035,-.293421,-.208023,.015983,.332013,-.009198,-.120611,.203216,.029733,-.083515,-.470768,-.215123,.186223,-.105407,-.130684,.437504,-.171945,.900707,-.379797,.019969,.579737,-.531002,0,-.009657,-.054198,.954425,-.213148,-.311094,-.002312,-.609539,-.17855,-.231774,.164766,.291123,-.250393,-.109694,.049392,.031218,.771144,-.04318,-.151603,-.079375,-.596776,-.009255,-.001902,-.164792,-.020447,0,-.137009,-.306664,-.10638,-.447396,-.066744,-.036654,-.210621,.371801,-.589034,-.184985,.818962,.18632,0,.145758,-.188758,-.860545,.214392,.399708,-.160523,.035552,-.424085,-.191336,-.127757,0,-.20764,.938534,-.144471,.102811,.367097,-.020408,-.037392,-.139909,-.203123,.006224,-.002038,-.06201,-.031153,.076359,-.051608,.214378,-.160909,-.01106,-.570703,-.228932,-.210589,-.231169,.058226,.209801,-695e-6,-.099922,-.480947,.884135,.624971,.011118,-.523063,.065762,-.227319,-.317622,.051756,-.458663,.390977,-.200331,.012681,.813987,-.528616,-.099722,.712669,.260305,-.099333,.107401,-.197441,.015607,.027908,-.169902,.239093,-.014315,-.171293,-.114528,-.077499,0,-.319512,-.179356,0,.268099,.267475,1.272523,-.011726,-.163294,-.112613,-.280445,-2.16668,-.317479,-.121912,-.459913,.820418,-.408989,-.042872,-.075548,-.248871,.016196,-.149922,.542211,.999595,-.025557,-.267929,-.039088,-.167013,.815566,-.132872,-.070508,-.134383,-.142661,-.060398,.711974,-.229157,-.025663,-.522825,0,.676106,.158986,.08901,0,0,-.591498,-917e-6,-.140076,.316356,.341208,-.039581,-.371775,-.161364,.044427,.04892,-.538217,.583952,-.881576,-.012802,-.006194,-.044101,.084406,-.008071,-.203575,.003581,-.112867,-.115848,-.123621,.008062,.753959,1.03726,-.121541,-.005056,-.189147,-.018618,-.594341,.980416,.731642,-.04939,-.106035,-.01773,-78e-5,.540242,.582113,-.167623,-267e-6,-.031852,.500425,.939547,.314038,-.026805,-.336739,1.289758,-.414037,.240662,0,.629581,-1.256925,-.234285,.018861,-.076613,-.221709,-.270793,-.140599,.83841,-.024984,-.168593,-.671388,-.00151,.044943,-.035702,0,-.125926,-.245405,-1.033831,-.077815,-.240212,.755151,-.028248,0,-.050597,.030957,.016208,.169455,-.045743,-.012034,-.263056,.801927,-.653054,.637261,-.02477,-.033841,.238253,-.1169,-.222485,.010675,-.312677,-.654688,.779201,-.184178,-.147395,-.008517,-.008301,-.066848,-.255919,-.112093,.008835,-.052249,-.163356,-.205171,0,-.69573,-.82356,-.015102,-.281379,.429171,.276161,.080479,-.140054,-.044776,.390194,-.014414,-.165859,-.488422,.203885,-.219676,-.089064,-.034298,-.302758,-.061417,-.017322,.208786,-.307288,-.01495,.104813,-.81273,-.226466,-.002857,-.040759,-.004097,.143277,.464927,-.069996,-.345122,.11302,-.160776,-.099341,-.674074,0,.064003,-.057522,-.28038,.109177,-.034622,.202261,-.421557,-.111691,-.199389,-.094517,1.621521,.40881,1.081705,.065482,-.019688,.10953,-.277672,0,-.211842,-.413167,.135862,-.247915,-.068644,.013928,-.163186,-.164507,0,-.213259,-.159547,-.064862,1.333565,.095072,-.284407,-.320019,.022913,-.016626,.139062,.6054,-.003267,-.011083,-.095284,.387286,-.167171,-.038903,-.821745,-.039913,-.152134,.338817,-.261272,-.137093,-.944623,-.223917,-.208147,-.261223,-.027896,-.640715,-.001118,-.24056,.211458,-.006168,-.137818,.501176,-.0173,-.225839,.069049,-.005178,.071989,.201105,-.124098,-.267504,-.02838,-.35238,.359364,-.147372,-.016559,-.309758,.789857,-.089017,-.270284,-.082732,-.002339,-.115769,.032562,-.225552,.311869,-.040904,.008011,0,.70424,.506888,-.048617,.115475,.658016,-.067837,-.190783,.063617,.317901,-.342429,-.124918,-.028707,-.143932,.136438,0,-.249154,-.212963,.009666,0,-.009955,-.485248,-.295394,-.01103,.056745,.362974,.188628,-.68279,-.005579,-.062935,-1.169166,.265087,.209753,-.203765,-.270501,-.032143,.54707,-.107746,.661626,0,.294819,-.296583,-.02477,.097372,.032007,-.163919,.351896,-.560267,-.432219,.09754,-.045028,.017162,.943947,.545856,-.210169,-.072183,-.008024,-.006664,-.109513,-.031899,0,.391903,.303377,.807366,.461459,-.099945,-.027223,-.05978,-.211492,-.283696,.08843,-.227467]],temperature:.5},kindLatin:{bias:[-.687016,-.536283,-.168887,1.392186],weights:[[.443189,-.329616,.887812,-.249331,-.209693,-.302418,-.820656,.109946,-.068062,-.367763,-.153721,.944716,1.036381,-.49335,.277131,.091572,-.121121,-.35766,.151514,-.242509,.197567,.643144,-.433132,-.38931,.413428,.727429,-.235846,-.030592,-.269568,-.466119,-.296618,.054482,-.008702,.124173,-.231915,.405117,.776083,-.346066,.356627,.179058,1.087049,-.146979,-.190081,-.112472,-.013954,-.134015,-.34208,.155128,.009695,-.016322,-.00621,.247438,.894492,.093843,.02163,.123875,-.2799,-.033551,-.181966,-1.007909,-.528372,.842324,.216053,-.197186,.549446,-.109608,-.085016,-.305863,-.089243,-.683115,-.460244,.66851,-.191846,-.420978,.325834,-.097924,-.234412,-.455529,-.226795,-.631367,-.330746,.072215,-.19662,.304787,-.369171,.647099,-.328182,.003527,.247919,-.142322,.474751,1.502199,-.378627,-.263344,-.048162,-.790629,-.016846,-.007724,-.120515,.237473,-.040215,.513666,.119546,-.210502,-.387925,2.14321,.248069,-.174281,-.226125,-.105082,-.064224,.369158,.69283,-.059727,.186214,.086678,.389138,-.137865,.099097,-.096022,.690743,.195847,-.208176,1.274286,.537407,-.058958,-.419039,-.332408,-.289743,.732558,-.156356,.262675,-.590831,-.090747,.004823,.586191,.332952,.052278,1.129172,-.31812,-.742873,.072447,.062731,-.332781,-.092122,.330578,-.323004,-.206377,-.022212,-.360764,.220777,.049753,-.104132,.074465,.171028,.434604,.072531,-.237487,.258896,3.104667,.187048,-.51389,1.02174,.146825,.092909,.025497,-.002141,.417784,-.047908,.058151,-.208772,.090677,-.401026,.100878,-.26239,-.385511,.385028,1.22668,-.0213,-.27855,.280133,-.07658,-.84752,-.067107,1.041246,.137495,.902735,-.080822,-.285637,.041887,.404417,-.458316,.160679,.236793,-.210911,-.308378,.378526,.070771,.581426,-.189598,.273758,.011294,-.098631,-.190393,-.157185,.0533,.093243,.131073,-.119624,-.527977,-.339896,.039558,-.324709,.012676,-.282913,-.04107,.38609,-.113961,-.163564,.180083,-.257805,-.228606,.655601,-.077745,-.184412,.921739,.914184,.038431,.145113,.032357,.302281,-.269775,-.429931,-.099868,-.309834,-.1795,-.453465,-.351941,-.049809,-.211875,.286417,-.320647,.125319,-.539476,-.126969,.216854,-.039991,-.189537,-.488708,.194744,-.14599,-.407226,.127721,.158005,-.355016,.870603,-.200671,-.584986,.273409,.296257,.074582,-.245231,-.0054,-.212737,-.612526,-.074749,-.645898,-.074518,-.011417,-.245045,-.640265,.339826,.370111,-.342393,-.096979,-.539636,-1.088109,-.171296,-.451634,-.06947,-.392503,-.022261,.118315,-.369485,.281468,.126701,.082517,-.176064,-.68179,-.234232,-.202768,1.633919,-.639959,-.011285,.134243,-.325041,1.36925,.48926,.045551,.023753,-.233381,-.104305,.804431,-.09278,.093795,.300915,-.558767,-.204675,.26001,.548527,-.058434,.162178,-.338426,.483042,-.531066,-.144202,-.075959,-.120126,.31072,-.139842,-.360793,.646411,.556671,.334666,-.396136,.189878,-.350256,.041783,.364105,-.007967,.015351,.453727,.15832,-.84829,-.246915,.148327,-.15433,.15907,.215726,.672946,.338549,1.063337,.045922,-.346052,-.409737,-.196549,.401071,.015697,-.135375,-.305686,.483223,-.735187,-.0941,.106991,-.283824,-.454273,-.501685,-1.371319,.113417,-.747762,-.005411,.38401,.045219,.116945,-.397461,-.093745,.061939,.435826,-.427711,-.423401,-.083094,-.111011,-.009693,.689966,.993931,-.156989,-.282564,.255372,-.24548,.198005,-.263912,.101027,-.045697,.133914,-.039848,.077936,.736581,-.04615,-.348228,-.115606,-.337409,.085625,-.206196,.057326,-.301706,-.102103,.799036,.198775,-.197257,.302626,-.147795,-.21037,-.38144,-.23591,.476069,.449422,-.055958,.049712,-.271588,-.29605,-.285028,-.351962,-.323179,.195226,-.325155,.315109,.155775,-.005453,.545281,-.182315,-.258669,-.256596,-.108293,.520028,.198094,.010878,.171715,-.168122,-.027188,-.97332,.008861,.007615,.035478,-.266134,-.638231,.278305,.964754,.034306,.445287,-.196908,.01776,-.055744,-.147502,-.052834,-.259308,.516413,-.159215,-.165688,.265024,-.610162,.38069,-.350741,.538134,-.049878,-.566084,.171647,.719952,-.184408,.407392,-.379613,-.38145,-.038775,-.604631,.099592,-.073274,-.533403,.383124,.544238,-.170363,1.239312,-.050316,-.455643,-.174797,.747557,.983466,-.633597,.15802,-.054862,-.142652,-.098833,.497517,-.10975,-.188047,-.005752,-.70471,2.031257,.596123,.532584,-.015362,-.040751,.108928,.182349,-.633494,.083202,-.222025,-.234322,-.454307,.419723,-.165355,.811691,-.008048,-.024801,.145309,.483947,-.320611,.504741,.031054,-.336253,.167141,-.109702,-.434631,.228555,1.317338,.05341,-.099528,.312636,.076478,-.036384,.063479,-.192069,-.46397,.176304,.288029,-.072745,.015478,.068988,.119489,-.17154,-.061539,.916079,-.224539,-.07503,.783073,-.590171,.335808,-.057701,-.26117,.464699,-.428301,.455083,-.484231,-.446178,-.137603,.957219,-.01271,-.332493,.691663,.138111,.357846,-.015299,-.067663,.007437,.101707,.695907,-.137422,-.349639,-.193955,-.54132,-.27758,-.118128,-.088424,-.334743,.294931,-.0065,.180873,-.310799,-.209232,.222643,.555213,.481713,-.018587,.545163,-.02018,-.094548,2.516765,-.110822,.281508,-.027398,-.044038,-.083111,-.222946,.250504,-.306608,-.260741,-.268871,-.137621,-.494359,.036571,.043168,-.010655,-.278536,-.107542,.339325,-.374207,.902992,.393583,-.088915,-.176392,-.464464,.1184,.514019,-.359212,.102166,-.260803,.710149,-.032778,-.463724,-.140482,-.015202,.132191,.845099,-.602059,.802204,-.158363,-.459674,-.212016,1.706179,1.128119,-.60151,.364592,-.006088,-.265108,-.175462,-.250606,.134536,.245819,-.099068,-.165804,-.01275,-.221872,.115339,-.17282,-.065516,-.267665,.264594,.568114,-.016981,-.430681,.126886,-.266385,-.069911,.241081,-.258439,.05957,-.117066,.041511,-.231084,-.692743,-.493055,.641883,-.263947,-.416122,.085833,-.072772,.349591,-.1338,.017608,-.070788,.415126,1.060022,-.088396,-.216426,.076833,-.03239,-.500755,-.105171,.216279,-.136573,-.031158,.009291,1.396465,-.037484,-.602865,-.046093,.178203,-.286137,-.472887,-.254539,-.288892,1.046085,-.185406,-.061508,-.47581,.065318,-.094439,.123357,.143033,.055878,-.194528,-.491011,-.242634,-.750638,-.304775,.388671,-.749074,-.357396,.268273,-.156311,-.202035,-.122553,.637149,.090954,-.356537,.504718,.273497,-.186634,.603318,-.017088,-.476109,-.396101,.033397,.330136,.349061,.421761,-.021099,-.788021,.024258,1.502661,.489893,.00417,-.224753,-.192504,.296535,.23264,-.167696,.305188,-.391529,.903608,-.261804,.070236,-.201608,.569323,.892432,-.964281,.012374,-.054498,.86218,.52721,-.564575,.423594,.592334,-.01625,-.41746,-.2319,.030234,-.017868,.091735,.024915,-.175518,.42361,-.025553,-.587433,.221502,-.023964,-.684045,.158884,.216241,-.433967,.012674,-.374815,-.29232,.157867,-.205023,-.049017,-.200355,.374155,-.312058,-.352439,-.361717,.067215,.239105,-.629901,.100238,-.090037,-.109264,-.10762,-.099227,.220305,-.034064,.308149,.146074,.275262,-.242016,.031339,-.232865,.150982,-.435753,-.096123,-.057478,.003955,-.018647,.12707,.78516,-.595803,.663823,-.357735,-.158289,-.15187,.030697,-.015939,.057628,.601843,-.359123,-.00669,-.110019,-.008747,-.128573,-.490666,.204936,-.240549,-.239581,-.13733,.456807,-.138693,1.369019,-.386419,-.647753,-.322983,-.174645,-.23946,-.114433,-.135826,-.23078,.51299,-.227096,1.672446,-.218901,-.107636,-.168569,-1.019444,-.182403,.081353,.063371,.547654,-.071853,-.119164,-.037169,-.606403,-.111022,.471791,.491943,-.233285,-.027351,.886578,.23001,-.550594,.237331,.044399,-.20415,.323292,-.114588,-.180258,.136615,-.144565,-.00325,.482664,.043451,.018676,.419623,-.183974,.543344,-.099309,-.2195,-.036177,.349794,.220225,-.119791,-.297641,.264803,.142159,.991033,-.274947,.670128,-.304438,-.358278,-.119624,-.002078,-.268525,-.251366,-.535975,-.179511,.083686,-.846461,-.092704,-.057453,-.216144,.587718,.537922,-.03955,.901156,-.523923,.008967,-.023214,-.223195,-.156358,-.174075,-.029347,-.464477,-.121682,-.041324,.015303,.183634,.033994,-.155289,-.1703,.471522,.637092,-.008323,-.173286,-.491584,.076893,-.158007,-.297696,-.317921,-1.18692,.92759,-.052131,.410468,-.307934,.18224,-.074324,.164535,.272011,-.209505,-.104155,-.045027,.307804,-.353774,.019577,-.245842,.28196,.124798,.734584,.063901,-.140236,-.042221,-.141452,.050875,-.320556,-.610413,-.022637,-.075484,-.012545,.457775,-.03303,.165299,-.403181,-1.723743,.295845,-.531755,.248579,.789859,-.133133,.063218,-.086807,-.686636,.359797,-.842453,-.133386,-.163525,.359701,-.037817,-.247648,-.960244,.188866,.463367,.041268,-.810517,.293474,-.111564,-.208263,-1.127945,-.073307,-.064338,.503242,-.120151,-.258089,.009026,-.050616,-.279942,-.077848,-.099659,.082584,.120701,-.706106,.38262,-.118327,.31388,.15794,.189489,-.35502,-.325266,.145221,.629487,-.199992,.019739,-.223676,-.103096,-.388349,-.103668,-647e-6,.170474,-.474831,1.339233,-.433801,.902023,-.11694,.860322,2.136256,.607535,.142504,-.256005,-.265106,.205312,-.57202,.358029,-.027985,.373411,-.071282,-.275607,.006797,-.055646,-.10708,-.590797,-.05538,-.080371,-.272363,.713331,-.373666,-.829243,-.274511,.208398,-.025482,.138258,-.101356,-.626747,-.190653,.276821,-.005223,-.179503,.967158,.070192,-.142914,.021259,-.06746,.02888,.049564,.180112,-.371267,.046833,-.371805,1.771798,-.596579,.209997,-.164483,-.128282,1.065287,-.31864,-.378087,-.058184,-.29624,-.044492,-.355031,.482639,-.258077,.02534,.886037,-282e-6,-.064516,.755403,.16248,.309221,.11545,-.564394,-.489235,-.417526,.090911,.287851,-.278657,-.024689,.309183,.026618,-.639379,.531789,.250447,-.181671,-.005787,-.319951,.317854,-.357167,-.043819,-.107751,-.149969,.358034,.199236,.018935,-.327915,.284402,-.250179,-.121749,-.129348,-.048282,-.17134,-.235267,.293347,-.088332,.468186,-.36429,.129134,-.417912,-.407233,.271297,-.407802,-.473169,.267867,.067909,.842515,-.275015,.259106,-.133312,.465345,.45371,-.168371,.041725,-.078212,.301098,-.244612,-.331457,-.212519,-.302015,-.170206,-.686837,-.306276,-.125236,-.224182,.673633,-.218979,.72235,.045545,-.510371,.151265,1.242042,.006939,.022106,.232832,-.634917,.450342,-.168333,-.726366,-.156196,-.128144,.378873,-.149974,-.20215,-.032628,.110534,-.077144,-.38574,.069302,-.128849,-.223545,-.269047,-.240035,.7068,-.368693,.355014,.721921,.337476,.187171,-.1805,.694797,-.736569,-.668035,-.113607,.06039,-.320736,.445115,.154661,.463513,.462486,.413046,2.874045,.13287,-.021127,1.609704,.285884,.039162,-.291931,.719219,-.388226,1.017792,.26795,1.143542,-.202243,.396805,.469319,.075903,.607898,-.127194,-.376672,-.016324,-.186236,-.291707,.27255,.007182,-.299129,.169125,.13545,.7181,.189949,.615577,-.441579,.752596,-.669299,-.363041,-.413903,.774375,-.133918,-.486612,.015157,.126184,.020476,.205523,.382248,-.55608,-.093048,-.106165,.789373,-.684154,-.51685,-.003734,1.303529,.113577,1.425766,.106164,.17427,-.200258,-.234299,-.396689,-.414339,.00689,.248431,.389077,.175928,-.132141,-.009967,-.249751,-.223503,-.267298,-.061335,.029093,-.16479,.014238,-.025142,-.133546,-.176292,-.517404,.131479,-.114976,-.078052,.237665,51e-5,-1.38695,-.008095,.132239,.941314,-.16436,-.226341,-.176754,.557378,-.271522,-.722071,-.28354,-.121752,.108939,-.072366,.320086,-.290576,1.015702,.443252,-.15767,.037722,-.103574,.027056,-.333172,.150857,.055995,.118428,-.440571,-.198044,-.124227,.095361,.156566,.034148,.898853,.50801,-.09142,-.229893,-.17546,1.252615,-.292001,-.514069,.527681,.470007,.025903,-.127333,-.310398,.317723,.729558,.672556,-.121357,-.111924,.257869,-.067491,-.478041,.035672,-.077791,.36601,-.181174,-.369678,-.009935,-.183911,.569591,.174507,-.301313,-.1057,-.926824,-.305279,-.296098,.1316,1.353513,.006079,-.02128,-.148961,-.092331,-.219954,.026265,.790532,-.050976,-.035429,-.254152,.0108,.987872,.157551,.504078,-.336477,.292932,-.365071,.16037,-.665106,-.226316,-.26262,.99461,-.191185,-.04083,.256184,-.367151,-.312067,-.016274,-.350879,.435079,.201114,.762836,-.274667,-.123048,-.533455,-.041597,.301738,-.244365,.489796,-.200502,-.104868,-.459506,1.356578,-.061746,.631885,-.123155,-.106077,.179489,.205241,.15888,-.101216,.673878,-.311394,.105224,-.589251,-.048765,-.316827,-.595183,-.443558,-.146553,.608408,-.167114,.416006,-.099168,-.080802,.098393,-.296267,.898273,-.114597,.120822,.284889,-.109664,-686e-6,.121226,.457536,-.166997,-.112031,-.47808,-.208802,.185364,-.230865,-.514065,.200969,-.427374,-.607769,-.325436,.245304,1.21814,.104774,-.111942,-.009525,-.208095,-.054994,-.012025,.340767,.012377,-.038762,.261016,.409853,.057745,-.280868,-.29099,.512613,.35055,-.549598,.435868,.184483,-.070062,-.208898,.398259,-.098447,.042543,-.360026,.742252,.30321,.459981,-.522145,.889709,-.61395,.005499,-.645345,-.229974,-.413592,-.270281,-.344094,-.186957,1.434609,.545954,-1.267455,.705956,-.213314,.203834,.603977,-.228803,-.22652,-.418089,-.537915,.101721,-.25449,.082894,.010558,.420787,-.527464,-.32774,-.470217,.349102,.140709,-585e-6,-.062923,.638669,.139375,.117445,1.189266,.101182,-.303487,.424306,.133863,-.22944,-.31458,1.46452,-.521009,.47945,-.017124,.017959,-.302013,1.904285,-.684652,.600486,.242519,.028861,-.080404,.161341,-.037252,.823009,.325433,-.172778,-.143946,-1.141052,-.136921,899e-6,.037684,-.19966,.285367,-.090145,-.467058,-.060923,-.4283,-.41953,-.008688,.054485,-.364541,-.056011,.145189,-.137042,-.525162,.145395,.902887,-.77369,-.120255,-.315761,.185961,-.795514,-.612223,-.337481,-.178297,-.108473,.360495,.117267,.40457,.463782,.179318,.938345,-.028659,-.595067,-.276915,.495362,.893622,.148022,-.782707,.142664,-.795984,.04212,.674973,-.334173,-.096636,-.754626,-.203026,1.7255,-.031975,.127168,.617489,-.131163,-.170652,.057847,-.188293,-.282764,-.040782,.365926,.63797,-.322882,-.182531,.558109,-.181151,.024249,-.465618,-.15496,-.1156,-.414691,-.508239,.139636,.128371,-.074178,-.179897,.162957,.384011,.081147,-.3604,-.282835,-.343427,.059443,-.201958,.032294,-.220593,.118305,.567663,.053478,-.900922,-.057955,-.219667,-.068009,.174239,-.447461,1.279896,-.027589,-.221357,-.086268,.198158,.069109,1.0241,.327905,-.236318,-.41421,.266994,-.300903,-.549722,.315338,-.271687,.118555,-608e-6,-.180939,-.150853,.200513,-.519792,.316687,-.023183,.315771,-.106062,-.620918,.113056,.306663,.5225,.842505,-.323821,-.05125,.026827,-.655538,1.707262,-.05298,-.236984,-.325433,-.598751,1.292645,.304035,.570642,-.200411,-.348924,-.386862,.478109,.211869,.506995,.255378,-.115516,-.241715,.059295,-.040993,-.062486,-.071381,-.61811,-.002369,-.422429,-.088085,-.160409,.055498,.01814,-.258654,.079126,-.447305,.209069,.22823,-.308479,-.187976,-.029931,.719782,-.188116,-.735348,.248,-.212893,1.079251,.392223,-.20449,-.605305,-.222573,-.441536,-.250523,.246755,-.491237,.308047,.201046,-.141911,-.487037,.192533,-.259165,-.076366,-.288603,.880804,.102271,-.416474,.151337,-.246113,-.302959,.42944,.009413,-.44414,.056323,-.20659,-.252037,-.29028,.18447,-.038682,-.123799,.043477,.688608,.236404,.203635,.220004,.001258,.413892,-.170105,.07223,.245055,-.296033,.539637,.648917,-.209135,-.232361,-.693037,.047464,.531071,-.355137,-.248,.717148,-.104517,-.29315,-.304465,-.137644,.23058,.167544,.516404,-.288593,.664741,.232398,-.137795,.306581,-.61415,-.033125,-.218538,.241656,-.153869,-.116124,-.115562,.105776,-.147054,-.327243,-.017793,-.245619,-.415639,-.04644,-.137227,-.830731,-.193707,-.177059,.301814,.749538,-.588864,-.552359,.009503,.321934,-.12195,-.230175,.396881,.106893,.193082,.987465,.375712,-.085049,-.188501,-.0439,.17928,-.140819,.329607,-.01271,-.071819,.314893,.235568,-.482506,.306696,-.166597,.307229,.654338,.151664,.519052,-.546877,-.553749,-.065352,.0328,-.379319,.382873,-.119569,.013519,.969371,-.355389,-.106757,-.097586,-.611742,-.121048,-.381092,.454831,-.205044,-.090667,-.617444,-.069404,.093433,-.344343,-.321542,-.055844,.672082,.473938,.033256,.639758,.804606,.042104,.069564,.048502,.417243,.064379,-.183643,.38209,-.354762,.049609,-.360954,-.234879,.091297,.004666,-.253468,.195961,.222882,-.301279,.279219,.137049,1.161371,.418119,.477796,.82888,1.127291,-.157628,.334928,.046917,.007393,-.360597,.007195,.524449,-.151232,-.238244,-.306244,-.158823,-.157023,-.079396,-.32616,-.074698,-.014122,.105636,-.109621,.354425,-.145443,.144702,.013056,-.010952,.013747,.011606,-.125402,-.066988,.916139,.002223,-.110521,.246082,.199573,-.007105,.016927,-.109631,.088511,.01964,-.130476,-.039592,.745533,-.444999,1.142527,-.002914,-.449167,-.198553,.012942,-.564908,-.162951,.40966,-.272748,.959898,-.321761,-.007083,-.422212,.466603,.024394,.027837,-.130794,-.265346,-.400693,.816345,2.117581,.771225,-.197476,-.456495,-.385845,-.50934,.237413,.069034,633e-6,-.082325,2.705451,-.329515,.567474,.389226,-.108773,.981853,-.345694,.052907,.235208,-.111182,.149722,.57505,.438003,.012899,.593492,.229692,-.201485,-.13124,-.031503,-.402615,-.427418,.064664,.185192,-.116954,371e-6,.526224,.030545,-.038442,-.299093,-.881885,.313754,.529389,.364717,.117189,-.402836,.102341,.093877,.036854,-.082597,-.269114,.178318,-.029771,.153714,-.027879,-.283594,-.197652,-.389591,-.214847,-.579816,-.194924,-.541985,-.261927,.006989,.487965,-.095023,.310827,1.645335,-.565044,-.096055,-.051684,.071924,-.589375,-.539186,-.271822,-.447947,-.033353,-.158696,.679182,.293209,-.350403,.227139,.598055,.306224,-.647466,-.381007,-.479703,-.083496,-.103474,-.157804,.249959,-.490272,.002402,-.0984,-.499886,-.410009,.641332,-.142361,.072222,.015251,.445636,-.472309,-201e-6,-1.005534,.672755,.359584,-.119693,.003099,-.160395,-.296265,-.338703,.648058,-.067458,.396418,-.734914,-.892707,-.311681,-.707571,.629773,-.399405,-.362099,.321845,.196899,-.583381,-.255472,.225671,-.229184,.364283,.148143,-.00922,-.301788,.202172,-.39201,.150341,.286208,-.095795,-1.216627,.934054,-.110791,-.13218,-.436612,-.207119,-.52275],[-1.422547,.304011,.076666,-.315743,.543992,.519219,-.780383,-.566754,-.30918,.275119,-.135604,.266774,-.219797,1.508425,-.195752,.063304,-.232799,-.186246,.535162,.512198,-.326639,.369912,-.358848,-.385162,-.318994,.711856,.976437,.146237,-.165833,-.329132,-.036608,-.046476,.013613,.131953,.089985,.206252,-.666379,.617149,.689829,-.373787,-.374131,-.017688,1.194933,-.100607,-.117681,-.061769,-.301226,-.021919,-.219391,-.24308,.449213,.10337,-.885639,.094321,.048077,-.47429,.321012,-.331664,.162057,.044689,.500891,-.051211,-.170655,.275754,.552866,.359821,.43015,-.151393,-.06568,-.507943,-.530669,.452814,-.258677,.425074,-.128827,-.259604,.391702,-.242274,-.065058,-.819389,.331416,.78456,.369559,-.52931,-.256104,-.199832,.261551,-.042688,.104507,-.299154,.016147,-.431227,1.559254,-.350381,-.299694,.186439,-.001468,-.033873,-.18624,.318637,-.147707,.336229,-.113783,.031425,-.452823,-.884786,-.024248,.785821,.056601,.508599,-.092567,.092812,.148351,-.0489,-.109737,-.101112,.104343,-.101696,.818526,.098593,-.066831,.163872,-.213971,-.605525,-.541778,-.08691,1.083184,-.193958,-.273229,-.469479,-.060015,.032776,.994526,-.009917,-.264362,-.065298,-.08941,-.120343,-.787777,.20982,.632562,-.077735,.118013,-.180069,-.304667,-.173745,-.434385,-.148432,.017276,.079937,.219495,-987e-6,1.289687,-.169717,-.450095,-.005717,.051189,.04991,-.149083,-1.600937,-.116527,-.387678,-.020989,-.028411,.639511,-.009074,-.389906,-.342332,-.250585,-.094123,.269734,.017678,-.331688,-.152408,.434784,1.167514,.38127,-.272425,.053125,.188502,-.239542,.2875,1.02003,-.296963,-.27101,-.306437,-.422002,.162877,.351503,.315445,.090933,.64989,-.365249,-.756678,.169553,1.333527,.120463,-.214181,-.397937,-.401895,.058178,.093403,-.009199,-.004134,-.045331,-.486659,.010232,.447993,-.205433,.230201,-.083109,.09144,.572508,-.192636,-.425944,-.030034,.084882,-.128594,-.194051,.606349,-.42404,.037426,-.265655,-.0518,-.013002,-1.12584,-.126206,-.084323,.071434,.456667,-.794918,.074217,.23876,.026615,.287865,-.237904,-.350659,.20992,.145532,.013142,-.081279,1.064602,-.421464,.334247,.270523,.185847,-.42346,-.437243,-.116019,.04739,-.107334,-.401681,-.279523,-.201309,1.030095,-.523193,.331996,.949157,.10785,.036861,-.036804,.348203,-.559142,-.109199,.492271,-.073261,1.327755,.21816,-.052282,-.375704,.973011,-.147192,-.395971,.671817,.039541,.11836,.389056,-.063141,.317492,-.10652,.260897,-.085831,-.20779,.07261,-.398412,-.465394,-.312159,-.449718,-.305499,-.174286,.352379,-.782934,.929227,.012027,-.044695,-.183101,.183695,-.639781,-.138883,1.167989,-.184004,-.168452,-.631471,.419789,.193156,-.272193,-.407889,.238199,.263402,.478756,-.11601,.149941,-.616755,.34577,.804953,-.133332,.2388,.491137,-.246488,.070678,.023117,-.113901,-.149542,.128867,-.291024,-.403009,-.019772,.011188,-.143931,.169938,-.001945,.659419,-.007119,.239339,.262943,-.090156,-.168788,-.418213,-.124811,.383871,-.283842,-.081083,-.197775,-.165045,-.059781,-.487054,-.369531,-.2087,.068577,-.164343,.220702,-.333507,-.098234,-.224873,-.33086,1.850759,-.36986,1.388634,.203342,.493776,-.109434,-.447029,.076554,.33004,2.19309,-.136231,-.113036,-.297857,.365492,-.252092,-.500896,-.073196,-.252157,-.90012,-.454671,.323696,.62834,-.139146,.271435,-.294824,1.120798,.408829,-.107627,-.014458,.378336,.046247,-.318826,.004948,.599574,-.064905,-.34431,-.05955,.068643,-.204457,.17823,.057909,-.247852,-.010162,.041378,-.373003,-.200039,.43465,-.277597,.2707,.227055,-.148556,-.145229,-.055776,-1.097952,-.032916,-.196411,.265298,-.473801,-.227362,.798447,-.289436,.216824,.161587,-.23161,-.097234,.265561,-.346206,.72681,.062389,-.272839,-.185821,.159005,.441263,-.165934,.823212,-.126766,.236812,-.240557,.430146,.295744,.243465,.274182,.046102,.700592,-.380501,.755289,-.089313,-.248192,.074669,-.095808,.362569,.139533,.05413,-.381971,-.472535,.688605,-.400725,-.242229,-.56237,-.14655,-.239429,.579156,-.509223,-.159632,-.261639,.003825,-.106346,.795676,-.477888,-.095535,.262681,-.222275,-.272045,-.064101,-.851047,.108772,1.066661,.51371,-.116929,-.168994,1.159365,-.216534,-.436937,.29838,.100384,.059653,.265767,-.256267,.154097,1.121399,2.185842,.482758,-.254905,-.549462,-.202987,.067436,1.082636,-.40441,.116017,.379265,.545432,.085279,-.535461,.211659,-.760052,.788381,.037493,-.217536,-.040771,-.421525,-.051856,-.200099,.313842,-.00104,.436654,.758696,-.226399,1.033257,-.023276,-.402178,-.105867,.22015,.015887,-.049617,-.045179,-.776738,-.345982,.207064,.033953,.648481,.040131,.287796,-.6625,-.434355,-.070027,.271333,.03513,-.40043,.070416,-.135213,-.002189,.633877,-.583445,-.067895,.244956,-.6674,1.31805,.004866,-.249936,-.226593,-.274603,.133544,.222301,-.213984,-.046857,-.097896,.73112,.330503,.370341,.423407,.043193,-.304994,-.453985,.0634,.106488,-.145488,.973016,.138957,-.21889,-.334535,.260715,.246303,-.198745,.765356,.17447,-.24159,.262593,-.886822,.127963,-1.543346,-.261025,.970951,-.088725,-.583303,.580671,-.154432,.512041,.473152,.163985,.738282,-.388418,-.289753,.028962,.911797,.151195,-.193776,.212282,.025416,-.162645,.299256,-.745808,-.182763,.058717,-.60706,.033805,-.036099,-.376495,.114515,.359257,-.433087,-.138188,.462687,-.065285,-.181889,.12686,-.341852,-.234888,-.212089,-.069154,-.389948,-.007827,-.990781,-.167643,1.144037,.197268,.35668,.023149,.477258,-.298904,.062798,-.248203,-.169455,-.294268,-.018145,.707314,-.104162,-.037544,-.030244,.35513,-.379932,-.343431,-.028801,.827774,.242144,.115773,1.075989,.148507,.439213,-.090528,-.19499,.171644,.299762,.699104,.664058,-.287062,.138373,-.124724,.188122,.313463,.149823,.593551,-.291727,.10388,.052511,-.041678,-.087899,-.498641,.065773,.135524,.210507,-.033804,.225947,.53049,.10061,-.390696,-.999874,.308916,.012357,.199875,-.002114,-.239332,-.170093,.23653,-.109554,.414604,-.206765,.322156,-.526677,-.342303,.058694,-.061923,-.029993,-.430196,1.121366,.557573,.012734,.272235,-.27519,-.562387,-.539197,-.238393,-.592142,-.217338,.004354,-.490368,.605391,-.030723,.098477,.9269,-.049008,-.187527,-.233995,.119936,-.207504,-.16819,.090852,-.211433,-.092183,-.487696,1.001811,-.184546,.347707,-.582091,.202681,.156117,.615963,-.206303,-.429411,.069122,-.143456,-.317633,.038019,-.363529,.052068,.436239,-.231958,.57555,-.664382,-.168019,-.109,.698736,.475713,-.077597,-.725889,-.54369,.140972,-.228315,-.365619,-.231428,-.467569,.2202,-.044318,.203223,-.274871,.293351,.115212,.559754,-.522513,-.033023,1.101774,.720992,-.398436,.505059,.105402,.406465,-.486311,-.29014,.099502,-.331351,.149919,.244334,.557098,-.137671,.781463,-.347317,-.280935,-.696383,.24041,.260409,.046563,-441e-6,.272766,-.136007,-.476221,.191924,-.291191,.138789,-.273426,.114915,-.13363,.14256,.512646,1.135243,-.005566,-.157713,-.070181,-.325756,.217112,-.130407,-.35784,.274981,.247954,-.207979,-.176381,-.151703,-.159643,.389113,.100439,.202071,.071604,-.101058,.062137,.801069,.083751,-.14227,.031934,-.341263,.77296,.122291,.10116,-.581585,-.537819,-.293525,-.005691,.06083,.021949,-.02436,-.314565,-.256676,-.27228,-.236274,.428601,-.100668,-.202106,1.670761,-.165237,-.214656,.044846,-.249239,-.200494,-.009104,.008258,.916589,.085744,-.138767,-.154201,-.142434,-.148013,.787428,.235713,.04863,.362957,-.135605,.467749,-.294946,-.035007,.126209,-.115576,-.268812,.243628,-.236049,.279173,-.504288,.747163,-.329708,.242941,.062634,-1.227846,-.162497,-.280037,.17174,.239375,-.152963,-.551408,-.021895,-.521409,-.204773,-.091514,.187507,-.215652,-.130017,.031931,-.304132,.803127,.182367,-.628217,.707213,.868769,-.084291,.071212,-.176628,-.835445,-.325452,-.091258,-.505243,-.068943,-.201195,-.167621,.059616,-.210811,.024258,-.05815,.933668,-.036264,-.004185,.152141,-.328843,-.070425,.174836,-.383513,-.08462,-.449765,-.281944,-.100741,-.533747,-.054995,-.27238,.641826,-.379227,2.112692,-.598317,.301436,.267079,-.262407,-.25309,.04916,-.243993,-.159324,-.134249,-.564854,-.0297,.361666,.024714,-.035944,-.056962,-.103932,-.058657,-.481835,-.00374,.406013,.586499,.056798,.103223,-.018335,.127451,-.21319,-.044791,-.019897,.33057,.209849,-.220181,-.239108,.555268,-.096398,-.371627,.120991,-.196589,-.274323,-.123894,-.068728,-.140703,-.449866,.719838,-.220078,-.185752,-.145713,.016677,-.345548,1.515947,-.159457,-.462519,.054178,-.46539,.668218,.355171,.620051,1.920098,-.041934,.492014,-.232454,.205365,-.230741,-.018192,.313735,-.348839,.292024,-.348683,.588709,-.035577,.8193,.302568,-.047872,.071373,-.017272,-.103604,.549051,.181744,-.314352,-.640729,-.275155,.148399,.262515,-.231638,.964296,-.286421,-.187914,-.312156,.063154,-.17739,-.359982,.727642,-.102339,-.352959,-.889337,.322074,-.142672,.757072,.861872,-.25574,1.585589,-.300005,.074031,-.201011,-.270805,.043173,.197352,.264277,.684245,1.098049,.169797,-.164396,-.050322,.340555,-.028684,-.568304,.373715,-.34781,-.040466,-.30783,.280872,.860106,-.303412,.166707,.230883,-.342222,-.342623,.149294,-.234989,.148894,-.079407,.328442,-.513881,.155153,.0941,-.083925,-.280931,-.424332,.742549,.258234,-.508127,.215968,-.479779,1.829782,-.269091,-.532259,-.05621,.240342,.346461,.54341,-.080903,-.266557,-.460963,.094026,.171274,.18229,.363345,.105377,-.368068,-.754827,.269114,-.128678,.080812,-.647323,.129197,.506146,.522179,.08664,.123684,-.463728,.159294,-.114713,-.064783,.131033,-.473149,.062204,.714963,-.166013,.325707,.568488,-.349774,-.066432,-.074488,-.091379,-.071395,-.029994,.293968,.198047,-.250116,.209922,.67956,-.19179,.139363,-.372223,.782055,-.341127,.858351,.123013,.799417,1.007017,.166452,-.130287,-.248358,-.083952,.067826,.270839,-.03149,-.932211,-.300076,-.07215,.050263,-.526141,-.224327,-.321367,-.005466,.021139,.682221,-.605764,.514556,-.046261,-.181438,-.423146,-.171407,-.511299,-.189726,.398933,-.301191,.043896,.095844,-.032868,.900818,-.301102,.436211,-.133468,1.203319,.674414,.800717,-.459654,.223626,-.212939,-.190461,-.201657,-.002275,-.460989,.078087,-.134582,-.530632,-.090731,.176423,-.589369,-.004301,-.206471,.436634,-.127795,-.087728,-.559162,-.05761,.605113,-.357166,.017559,.408183,-.183809,-.319129,.0313,1.173483,-.154713,.162902,-1.3668,.162656,.12314,-.197728,-.213868,.057501,.124314,.7781,.815075,-.856384,-.10367,-.686973,1.075397,.068081,-.465524,.537371,-.370231,-.179023,-.019152,-.017743,.140679,-.254098,.326042,-.170877,-.053729,-.280928,.396924,.468801,-.068502,-.840096,-.153485,-.41475,-.790609,.732489,.150764,-.772124,-.2003,.217209,.052744,.057748,-.381325,-.236435,-.370609,1.088744,-.470399,-.290842,-.293635,.781276,.711249,.128679,-.762017,-.891601,-.669297,-.156721,-.019764,.176798,-.189633,-.065663,.391455,.114009,-.054557,-.400587,-.172142,-.177114,1.311935,-.018104,-.277436,.170367,-.116109,-.318907,.419977,-.00598,.018726,-.141902,.349177,-.139256,.137237,.090393,-.376345,-.073396,-.221794,.926393,.250066,-.006204,-.522905,-.188955,-.300988,-.157197,.04415,-.422687,-.262725,-.233301,-.076755,.11159,.124265,.606352,.15742,.594957,-.242311,-.357023,.635786,.117322,.158887,-.282884,-.061476,-.002135,-.201696,.093418,-.238567,.098121,-.303135,.496818,.272793,-.612477,-.814294,-.159369,.02487,.038494,-.480812,-.36634,-.996523,-.677245,-.147725,-.211233,-.293493,-.611886,-.004889,-.357394,.314308,-.048456,-.073863,.176364,.284,.761617,-.113218,-.09571,-.362515,.139971,.477238,.577534,-.294531,-.331338,-.203044,.145894,-.138777,-.809987,-.012933,-.055745,.210307,-.730567,-.253539,.190815,-.180988,.24103,-.410242,-.218267,-1.107639,-.078449,-.088691,.445754,.016554,-.831867,-.151741,-.410272,-.328141,-.087937,-.446201,-.390246,.165316,-.808577,.471189,-.066048,-.204555,-.037589,.037875,-.27408,-.134465,.144624,-.260468,-.393543,.346638,-.057616,.183888,-.336032,.210915,-.04802,.722441,-.425747,.045997,.283123,-.194026,-.117048,-.491213,.089619,.006066,-.038774,-.185935,.287111,-.51962,.10932,-.189636,-.432196,.137446,.164223,-.430153,-.073668,1.207995,.012276,-.498108,-.102331,-.252719,-.195351,-.155111,.050852,.008627,-.488497,-.109599,-.074326,-.089961,-.025445,-.108822,-.033592,.2342,.165762,.25751,.102705,-.03123,1.289527,.152176,-.561383,-.266186,1.410669,-.223118,-.064735,.025904,.599565,.087451,-.138776,.06387,-.141354,-.068043,-.264048,.013889,.06057,.136981,-.138659,.569019,.277652,-.112838,.874325,.246082,-.416206,-.144873,.269387,.136857,.184663,-.159993,.003345,-.227094,-.433152,-.201749,-.083567,-.421622,.545444,.112236,-.019445,.061805,.29396,1.05176,.919917,1.664441,.828164,-.322141,.178875,-.317137,-.165014,-.807548,.145046,-.90662,.422609,-.036825,-.440809,-.052867,-.452476,.17868,-.222054,.55495,-.307896,-.199013,.27548,-.284834,.03978,.356564,-.296619,.571793,.043046,.68674,-.226068,.893629,-.506053,.059965,.619764,-.455161,.845707,-.64433,-.566308,-.212359,-.210195,.169112,-.785389,-.071255,-.028486,-.073212,-.540761,.356337,-.861091,-.409771,-.026571,-.399009,.589855,.436716,.437424,-.190418,-.142711,-.232275,-.005528,-.200557,.399522,.456279,.014982,-.219344,-.310738,-.040234,-.149412,-.135926,.119063,-.369584,.298101,-.161876,-.572128,.453101,-.342258,-.177083,-.167014,.090009,-.236628,-.983122,-.848101,.027147,-.379967,-.293574,1.20322,-.072294,.749054,-.326285,-.090241,.06562,-.794853,.064344,-.764803,-.023871,-.20731,-.10234,.160808,-.075999,-.320175,-.654981,-.216159,-.718512,-.124888,-.525941,-.17961,-.212877,-.002976,-.033741,1.223982,-.013073,-.371839,-.001241,.002873,-.129612,-.009163,.092837,.081793,.22535,.2923,-.191197,.127022,.678866,-.293472,.708997,-.659444,-.008003,.12368,.022527,.34211,-.047522,-.028037,.992241,.104015,.127377,.30562,.796852,-.09622,-.396789,.029964,-.408926,.315741,.26595,1.081931,-.398622,-.062708,.163306,-.612144,-.590643,-.099315,1.226369,.219867,-.262368,-.066304,-.462816,-.332647,-.779884,.455852,.174196,.233095,-.171453,-.217686,-.351556,.241331,.4933,.305775,-.081653,-.217493,-.298892,-.21149,-.146756,.283162,.034597,-.071344,.263577,.11578,.174666,-.015898,-.043938,-.023576,.242134,1.125165,-.154314,.211057,-.087337,-.157684,-.029855,.214885,.142767,-.288149,-.437846,.439576,-.27801,-.282163,.712591,.009063,-.024726,-.542263,-.333744,.040019,-.305048,-.263306,-.111469,.130554,.055197,-.005936,-.542779,.331846,.463156,-.030774,-.54619,-.83289,.042149,-.221766,-.098954,.5638,-.115228,.035753,.273374,1.208702,.906106,-.00405,.006273,-.571526,.013394,.836678,.457785,.202493,.462371,.516331,-.205099,-.356667,.037215,-.352707,-.281772,-.039184,.470382,.243621,-.081894,-.50428,-.255799,-.150799,.267461,-.172181,-.636004,.030798,.012215,-.306948,.123595,-.231106,-.320837,-.388623,-.469784,.49695,-.387812,.847183,1.008789,-.082328,.167832,-.168254,.084969,.367291,-.132545,-.101341,-.478849,-.082726,-1.024958,.829494,-.235816,-.103116,.141534,.171378,-.416082,.644115,.031533,-.0615,.283287,.048882,-.025077,-.38726,.110957,.405111,.092456,-.170524,-.584546,-.201111,-.018671,.004556,.469621,.007634,.089386,.908699,-.101036,-.57038,-.0015,.112856,-.032379,-.323246,.619238,-.021898,-.356322,.015541,-.172033,-.061346,-.027178,.448987,-.321375,.68549,.687156,-.39108,.441709,.08518,-.643725,-.019604,.009735,.350826,-.319838,-.12924,.936558,.230339,-.298972,-.105332,-.063185,-.625475,.156767,-.056976,.043306,-.483017,-.242298,.140754,-.484313,-.170929,-.148704,-.083618,-.051558,-.166316,-.255403,.332192,.107698,-.380478,.69488,.078231,-.466183,-.030728,-1.0077,.027981,1.184089,.21518,.258962,1.045788,.593987,.026794,-.150849,-.873812,.467409,-.057366,.276028,-.623565,-.028598,.745323,-.585882,-.742422,.111721,-.279308,.00246,-.005912,-.670309,-.569816,-.112559,-.366185,-.501484,.48915,-.014763,-.358459,-.377528,-.047748,.097232,.357209,-.194746,-.209978,-.095606,.031143,-.445898,.241189,.743975,-.026987,-.165538,.005621,-.207891,.447165,-.041232,-.320737,.325321,-.259269,-.20228,.178192,.084573,.364059,.498235,-.141614,-.058828,-.195952,-.523976,.449255,-.023025,.310533,-.688307,.219874,-.164132,.086741,.192148,.451247,-.348924,.387841,-.133978,-.253858,-.108501,-.148375,.736926,.226527,-.249505,-.007257,1.295347,.150947,.137826,.153797,.222088,-.265292,-.089184,-.014399,-.330736,-.364603,-.180837,-.180936,-.298789,-.063701,-.555071,-.349884,.85941,-.750321,.989149,-.027661,-.315123,-.076507,.46076,-.048916,-.679559,-.125555,-.33376,-.370201,.036981,-.523634,.716177,.120108,-.518126,-.111372,-.067299,-.279424,-.355641,-1.226843,.031509,-.124833,-.253457,-.066382,1.3291,-.080417,.103318,.005931,-.216783,-.942301,.112155,-.460717,.292432,-.335941,-.120319,.161115,-.062306,-.380093,-.083042,.230453,-.30038,.404025,.187938,-.455676,.147793,.011981,.276964,.286471,.260043,-.162063,.258289,.48583,.089384,.583781,-.690665,.048922,-.250779,.027971,-.685003,-.115537,-.317342,-.194228,-.329963,-.094878,1.060216,-.139164,-.312838,.007104,-.408183,.136638,.105338,.030297,-.01041,-.194006,-.154758,-.537062,.149079,-.716249,.017701,.102755,-.26934,.026399,.48696,-.151826,.017686,-.240248,-.82129,-.063579,.314485,-.356949,1.030387,-.664459,-.303485,.292903,-.222459,.768044,-.188004,-.145638,-.983252,1.260253,-.817766,.475624,-.430411,-.43591,.05804,-.179648,-.003866,-.056532,-.280813,.049422,-.025481,.473241,.620849,1.759968,.153764,-.112965,1.398124,-.148846,-.0519,.844121,-.032298,-.718417,.759298,.176434,-.390072,-.28457,.374219,.766764,-.391349,-.509599,-.122173,.266428,1.10573,.599313,.838521,1.141062,1.000708,.375012,-.316975,-.087098,-.115577,-.716215,-.125159,-.366007,.959955,-.263149,.460724,.042003,-.468375,.040346,-.40013,.274875,-.007721,.005935,1.063626,.744647,-.376822,.220183,-.287975,.31291,.737634],[1.828734,-.294687,-.167483,.180299,-.357927,.228479,1.811883,.429647,.072244,-.338839,-.110912,-.670313,.426155,-.734282,-.177005,-.167746,.074875,.433218,.044466,.359213,-.452626,-.641623,1.124961,.927966,-.081808,-1.039463,-.568898,-.146822,.603105,.784087,.404811,.215256,-.08554,-.270923,.281717,-.429813,-.324168,-.388082,-.753762,-.252343,-.394406,.557304,-.47524,-.082477,.347078,-.194482,.502694,-.278022,.204604,.21745,-.286639,-.320872,.692353,-.089937,.125224,-.276377,.458288,.086999,-.827533,1.120914,-.050459,-.408019,-.234814,-.015178,-.702385,-.164717,.861639,.076811,-.328068,.791676,.750552,-.98358,.264606,-.125661,-.674831,-.16213,.422861,-.428681,.424483,1.733099,-.201388,-.34753,-.274111,.354337,.847552,.231126,-.008606,.138601,.305519,.536793,-.245397,-.692411,-.454288,.159633,-.210806,.850101,.093698,.144551,-.068287,-.539369,-.258284,-.554206,.126369,.121341,.551286,-.546798,-.378062,-.665217,.178671,-.202872,-.18367,.294979,-.325315,.185557,-.198595,-.042252,-.34311,.243796,-.440668,.273481,-.604058,-.072908,-.23863,-.311448,-.148796,.088195,-.30013,-.16015,-.243851,-.589597,.164586,-.238354,-.064883,-.280563,.750343,-.133459,-.091793,.149054,-.213291,.426855,.57214,.295563,.439684,-.335983,.363747,-.296897,.489169,-.001171,.043357,-.718766,-.316675,.187517,-.553247,.047716,.400614,-.240903,-.016194,.33813,-.072824,-.169034,.214781,1.459448,-1.109689,.145449,-.35952,.07363,-.65257,-.215729,.402104,-.195325,-.070079,-.433973,.996624,.129584,-.747739,-.31634,-.554294,-.457457,.250387,-.185368,.047846,-.439526,.107182,-.22618,-.755999,.451698,-.43817,-.28131,.033074,.5389,-.107745,-.647309,.544868,.436893,-.108308,-.472957,-.031831,-.494473,-.863432,.54539,-.025579,-.170887,.943954,.285199,-.390711,.290851,.636105,-.336502,.328606,.228217,.32158,-.152436,-.492569,-.051785,-.158248,-.225272,-.105737,-.00331,.42815,-.365451,.842681,.42301,-.284816,-.221348,-.17562,.084278,-.2121,-.13273,-.181603,-.279825,1.313886,-.155462,.372064,.01935,.471878,-.031224,.512264,.553077,.001264,.310156,-.099489,-.038928,.436852,-.491372,-.164622,.087073,.426094,.892999,1.092129,-.315228,-.339978,1.279678,.201672,.147098,-.319402,-.515066,-.102295,-.492996,.141126,-.185875,.3182,-.359052,-.25321,.53469,.010557,.53297,-.20512,.668816,-.323663,.758993,.369663,-.276934,-.113446,-.361731,-.096708,.00221,.168242,-.427553,.098743,.597259,-.064314,.066019,-.317357,.331148,-.196276,-.160169,.480387,.108469,1.622027,.003646,-.058487,-.478418,-.192371,.12962,-.206149,.645848,-.996919,.232594,-.249252,-.736414,.635737,.745559,-.014417,-.116491,-.24857,-.467988,.373046,.43522,.041226,-1.208479,.045113,.286659,1.614216,-.406961,-.507546,.43069,.185676,-.302207,-.375328,.125893,-.354602,-.95144,-.296486,-.126928,.964337,-.349887,-.134748,-.444058,.134112,-.212636,.14175,-.922708,-.179835,.387732,-.450117,-.141224,-.075182,.235919,-.004326,-1.434594,-.132717,-.541401,-.155672,.148612,-.247096,1.526321,-.390349,.392543,.220763,.233964,-.640302,1.667019,-.158269,.269782,.530576,-.80647,.39319,.429443,-.462616,.541181,.280349,.021501,.164638,-.445483,-1.306619,-.170112,-.083333,-.128727,-.796998,1.279402,.822663,.093013,-.216454,.1454,-.419584,-.053995,-.55133,-.059854,-.021088,-.007584,-.5296,-.069221,-.054346,-.239028,-.16025,.154581,-.1614,-.174009,.666741,.487696,.712978,.071834,-.229656,.243765,-.031154,-.13,-.362166,-.881644,-.101986,.067827,.018773,-.190311,.600031,.329549,-.567848,-.577795,688e-6,.382209,.95766,.245713,.629755,-.234533,.765487,.19347,-.352396,-.198013,-.444112,.116779,.081957,.02747,-.117249,.714681,-.02951,-.298212,-.173216,.15366,-.089556,.088745,-.319086,-1.149739,.123375,-.643419,-.211373,.110672,.541067,-.175912,-.580009,-.105171,.498305,.36481,1.235213,.263869,.486649,-.031412,.394942,-.668952,.187135,-.090289,-.945001,.405999,-.601332,1.117573,-.187841,.827349,.879966,-.395291,.408125,1.313722,-.23877,.962507,.034286,-.108083,-.17885,.393176,.071817,-.126729,-.234544,-.531698,-.04176,-.737561,.044244,-.571728,-.169951,-.45215,-.406748,-.336288,.132097,.599149,-.658267,-.047415,-.910254,.120455,.397839,-.241351,-.247322,-2.487305,-.546304,-.040057,1.177619,.412257,-.372226,-.289134,1.498291,-.035379,-.079014,.087686,-.088437,-.152918,-.259284,.243488,-.299169,-.145032,.254028,-.115447,.451247,-.076936,-.12695,.632044,-.090845,-.175242,-.501727,-.128181,-1.017347,-.00522,-.393437,-.264871,-.10709,-.118569,-.131883,-.282453,2.049057,-.054954,-.374468,-.144357,-.410966,-.683247,.104705,1.311195,.722308,-.487665,.915789,-.003437,-.480363,.395163,-.234688,-.099867,-.285695,.136254,.967798,.023585,.505538,-.025577,-.13675,-.193933,-.050592,.037284,-.792544,-.696704,-.56032,-.137056,-.072563,-.816495,-.776857,-.49408,-.148853,-.489219,-.13416,1.535284,.095136,-.044056,-.273963,-.446196,-.337005,-.195572,.347642,-.288372,.408402,-.236481,-.37211,-.432907,.192641,-.376086,1.669833,-.211987,-1.109391,-.143074,-.821421,-.112256,1.392014,.027234,.50827,-.168465,-.197309,.230118,-.598534,.098229,.294978,.07216,-.600883,-.199348,.041679,-.353229,-.35155,.700391,-.680614,1.208694,.144517,-.191106,1.021762,.156799,-.37325,.915567,.125257,-.270928,-.582846,-.099501,-.182054,-.101223,.221068,-.170262,-.306138,1.39572,-.156167,.382609,.712062,-.147776,-.378015,-.765498,-.393366,-.370981,-.277246,.161895,-.109497,.861128,.378684,.055257,-.151204,.363084,.238426,-.235708,-.48079,.034616,.271157,-.123558,.329075,-.307678,-.354749,-.261464,-.185222,-.488532,-.077781,.361459,.03114,-.089924,.104982,.1265,.517441,.161024,.34951,-.272685,.40839,.194415,-.400728,.116084,-.205232,-.518317,-.171068,-.105544,-.503204,-.264843,.101262,.19958,.128492,-.230285,.707284,-.122807,-.377751,-.14671,-.305541,-.034085,.748826,-.404852,.499931,-.315207,-.16914,-.20788,1.277587,-.36991,.373396,-1.192409,-.1912,-.056303,1.428817,.114639,-.159291,-.210961,-.245809,.68902,-.666792,.013837,.876862,.955154,.826347,.309453,1.67095,.14964,.695503,.238351,.094614,.791667,-.73038,-.112667,.434447,-1.024027,-.042689,-.072696,-.054144,.131598,.729614,.288348,-.072659,-.034753,-.570426,-.026144,.131138,1.015266,-.127077,-.37112,-1.074048,-.103233,.244362,.558839,.209701,-.469232,.074845,.312471,.305584,-.35125,.278569,-.239715,-.154623,-.657019,.142661,1.222991,-.004909,.355415,-.848315,-.025272,2.499886,.504431,-.402887,.292525,.041895,.318656,.283035,.109738,-.208848,-.515546,1.427553,-.750409,.644902,.209307,.614068,-.119399,.124813,-.620963,.139631,-.421089,.243578,.17557,.079786,.135988,.046781,.595183,.355197,-.343307,-.295469,.773217,-.035388,.067786,.492779,.596279,-.276807,-.02602,.008265,-.882442,-.042477,-.408442,1.121067,-.358188,.209347,-.417616,.548964,-.133999,.706745,-.522199,.038526,-.299169,.059592,.168343,.019771,-.251216,-.458766,.822626,-.412596,.023663,-.257788,-.178626,.056415,.150005,-.045625,-.521222,.084703,.029509,.85767,.053794,.723942,-.470534,-.434648,.369784,.170399,.850006,-.544525,.215968,-.83441,.194161,1.457305,-.476287,-.079978,.067652,.00874,-.191387,.261521,.085314,-.390128,-1.533724,-.123304,.016858,-.05641,-.487254,-.180914,.162916,-.165692,.285804,.334799,-.102024,.274197,-.251616,-.139094,-.044155,-.268259,.388305,.451895,-1.109016,-.131456,.112429,-.665443,-.18667,-.57839,-.028631,.13075,.121473,.064858,.622866,-.233047,-.783651,-.200375,1.403909,-.578414,.397941,.379501,.101598,1.477582,.440452,.234728,.033591,.601794,-.044615,.410563,-.156385,-.187356,.386768,-.508544,-.075234,.563141,.094247,-.12566,.120326,.389722,.627819,.043411,-.854826,-.372508,.353008,-.028194,.062241,-.745178,-.156393,-.402925,-.309228,.050595,-.189372,.210995,.36417,.621255,.411311,-.2369,-.128067,-.137124,.584961,-.054645,.055928,-.140623,-.195774,.886621,-.243808,-.165556,.774238,-.473988,.426068,-.276482,.164024,.426405,.811825,-.397503,-.762833,-.41964,-.557579,.21823,-.272095,.01659,-.459007,.039713,.319934,-.303766,.062126,-.372329,.091798,-.149516,.397081,-.084927,1.452982,-.581035,.002772,-.026106,-.383352,-.37697,-.102532,-.205361,.614495,.326989,.318517,-.009585,-.319669,-.021286,-.162844,.663951,.28221,-.21318,1.555158,1.314425,-.314447,.33249,.207586,.21468,.953239,.35831,.285091,-.036468,.528634,-.351665,.354692,.28585,-.302262,.026979,-.223976,-.41739,1.83621,-.510407,.087314,-.611664,-.447193,.110735,-.236326,-.020277,-.121265,-.108505,-.055341,-.285007,.403554,-.26389,-.149736,.015808,.209444,.794509,-.733759,.26565,-.426514,-.414393,-.27977,-.080493,-.238266,.140401,-.148347,.856095,-.51074,-.209925,.32783,-.618391,-.352719,.143299,-.52096,-.375769,-.605792,-.295198,-1.078002,-.047167,-.056373,-.404547,-.221979,.003527,-.131437,-.229694,.381329,-.258443,-.258169,.199112,-.516892,.403856,.205549,.066879,-.301381,-.720594,-.106185,-.198991,.217056,.307423,-.690091,-.493996,1.713206,-.174097,-.369653,.145945,.007013,-.159005,-.137873,.44082,-.545353,-.337859,-.772497,.096521,-.086289,.83901,-.018404,.100258,-.045967,.556536,-.45724,.078982,-.303847,.604974,-.636009,.437268,-.232989,-.014748,.011813,-.590127,-.819601,-.071004,.798675,.596508,.600153,-.654384,-.558093,-.128358,-.04041,-.529612,.452182,.181324,-.352287,-.2729,-.387886,.464765,1.308538,-.408059,.676648,.242512,-.172552,.040096,-.018976,.32815,-.206966,-.0113,.093839,-.429236,-.437755,-.155499,.284934,.017218,-.492674,.161185,-.085246,.6395,-.585609,.033485,-.089592,.515909,-.623193,.736607,.056202,-.19377,-.20624,.102795,.427755,-.114386,-.248015,-.747379,-.162555,-.621828,.613398,-.407989,-.348027,-.350631,-.920105,-.453078,.530333,-.479338,.634833,-.21112,.005892,-.179262,.628946,.581299,-.141521,-.189418,.166523,.997556,.305152,.051067,.642853,.16286,.187184,-.146649,.435866,.267768,-.046727,.032499,-.130651,-.220807,.166375,.367523,-1.228058,.03099,.297799,-.869993,.719996,-.439251,.386844,.206743,-.031476,-.446461,-.076042,-.035339,.02926,-.039509,.004779,-.22402,.819936,-.468345,-.323399,1.56784,-.536626,.041538,.074436,-.010308,.057228,-.633881,.212847,-.158212,1.782776,-.516761,.065665,1.393046,.012272,-.379691,.358207,.046594,-.257813,1.659714,-.329861,-.708013,-1.113878,-.632188,-.177018,-.975694,.288896,-.168166,.337793,-.029516,-.369396,-.559555,-.585553,-.449685,-.202113,.204295,-.479157,-.605881,.098642,.324754,-.370662,-.152069,.012079,.24542,-.406393,-.072571,-.716214,-.021165,-.209761,-.419638,.006944,.479111,.053891,-.251791,1.179698,.22232,.340752,-.235089,-.164193,-.160352,-.116337,.137772,.431673,-.208841,-.020498,-.505748,.495814,.644791,.014202,-1.08571,.047646,-.072294,.074577,.905876,-.240587,-.12612,-.062257,-.273915,-128e-6,.456884,-.178656,.043582,-.071988,.079492,-.061356,-.023318,-.651731,-.017483,.606942,.180371,.167674,.189207,-.410062,-.034075,-.460532,.454588,-.337297,-.174796,-.168404,-.274338,.087167,.170564,.41727,.4281,-.17774,-.123319,-.087127,.121975,1.301508,-.473654,-.6788,.399979,1.415646,.084261,-.152616,.286568,-.133616,-.515965,.446888,-.477655,.280092,-.16943,-.677133,-.020588,-.196607,.560044,-.067182,.056115,-.286987,.278388,.740138,-.208809,-.288448,-.137439,-.198549,.211078,.555235,.33223,-.203664,.084991,-.57755,-.484438,2.781911,-.035036,-.125957,-.106226,.014043,1.465019,.021232,-.046174,-.655265,.222166,-.136766,-.263498,-.084234,.086649,-.331592,.040955,-.028768,.060994,.245876,-.665387,-.508547,-.320678,.178101,.142077,.368573,2.65954,.722607,.482818,-.391488,-.63075,.820799,-.147023,.426276,.04738,.686604,-.030663,-.025792,.246861,.040653,-.140044,-.509316,.025978,.076058,-.536247,.746674,-.371455,1.135134,.302457,.123515,1.153282,.042731,-.174887,-.295884,.153168,-.35858,.667644,.531807,-.02162,.218358,-.075521,-.493594,-.344061,.107534,.346333,-.481547,-.125366,-.730517,.736118,-.352377,-.00862,.58518,1.019901,-.231647,-.300263,-.261982,-.210031,.426465,-.399677,-.56094,-.334214,-.125805,-.058728,.414403,.274216,.102185,.064658,-.543766,1.024325,.450643,.060734,-.356543,.406243,-.258078,-.180016,.206029,1.05778,.632713,-.522783,.127236,.001864,-.227188,.037479,-.121637,-.21424,-.441915,.09625,.069934,-.631089,.429007,.684849,.059811,-.32184,-.179563,-.319264,.58552,-.696564,-.06251,-.191517,.153879,.059777,-.211182,.306171,.02569,-.200446,-.193308,-.087429,-.362271,-.172253,.195221,-.338627,-.248515,.79425,-.060989,-.215619,.349602,-.343472,-.078325,-.017731,.309749,.088218,-.332918,-.194915,.655369,-.70059,-.311772,-.462315,-.693692,-.449108,-.55536,-.618762,-.582678,-.558404,.625407,.048072,.861622,.587197,.116108,-.45106,1.589998,-.81442,.218689,.320408,-.446931,.145806,.181712,.1184,.249939,.120669,.229966,.13143,.335491,.121945,.21874,.554134,-.690086,-.284942,-.679236,-.163599,-.38086,.129755,-.153273,-.280639,-.451531,-.552113,1.378047,.661373,-.011624,.281886,.208764,-.356393,-.086741,.020556,-.14357,.401178,-.556922,227e-6,1.320738,-.545111,-.17952,.191127,-.296774,-.480387,-.294656,-.396774,.022319,.278413,-.431429,-.49115,-.639848,-.071104,.377201,-.195919,-.146877,.175607,1.124763,.224237,.914615,.071052,.135248,.238772,-.256156,.225318,.13372,-.140943,.485703,-.392941,.468009,1.415995,-.083129,.157283,.038306,-.277587,.586131,.237269,.036225,-.074805,-.125586,.586451,.224449,-.013284,-.120826,.229313,-.131161,.536223,-.181057,.14086,-.681517,-.066258,2.470005,-.235981,.631064,-.515746,-.585911,-.00276,.110196,-.524527,-.350302,-1.454629,.093599,-.062039,-.009879,-.147809,-.084076,.270132,.089067,-.166366,.28903,-.348737,.408927,-.030127,-.401876,.046115,-.693024,-.454125,-.216754,-.118064,.137542,.263162,.136964,-.112657,-.260939,-.679597,-.602711,.845906,.407216,.18315,1.083645,-.088451,-.174827,-.556982,.359255,-.419395,-.324483,.013534,.480827,.026599,.11581,-.075395,-.108613,.073815,.536534,-.144836,-.581376,-.49038,.076776,-.36334,.407462,-.341933,-.176494,-.316625,-.318587,.35252,-.096264,1.028804,1.151273,-.310958,.014642,-.525921,-.066061,-.087338,.033762,-.219013,.285914,.106638,-.131004,-.131701,-.083983,-.647515,.065665,-.101961,-.364494,-.498017,.248424,-.135093,.268767,1.272615,-.277524,-.296307,-.334761,.469988,.748893,-.606776,.122122,.310884,.807306,-.387093,-.654159,.252156,-.134036,-.074542,-.572586,.330769,.781731,-.534248,-.231736,.295641,1.144299,1.596539,-.625311,.444468,.151738,-.443638,-.326469,-.507576,-.097435,-.693884,-.109023,-.306633,.063245,.328799,-.179805,-.643182,-.800712,-.735405,-.221834,-.417352,.642174,-.537866,-.759364,.482935,1.375226,-.200412,.632757,.410452,-.235749,.993393,.115598,-.129635,-.098057,.087652,.013132,-.193395,-.037755,.574345,-.424631,-.024572,.808189,-.460707,.512096,-.18395,.088632,-.550749,-.489973,-.120024,.129016,.168191,.098315,-.252684,.468277,.007,.229097,-.269527,1.52518,-1.206775,.220007,.097018,-.38998,.246408,.197219,-.931869,.497615,-.196252,-.376995,.113871,-.136491,1.88563,-.150503,-.673529,.072311,.767964,-.043781,.227978,-.01341,.063356,-.183107,-.257602,-.121551,-1.010592,.335157,-.269047,.372754,-.085955,-.089862,1.504688,-.049091,-.382433,.113814,.104872,-.018884,.047776,-.089341,-.287901,.564011,-.337123,-.335342,-.322057,-.818529,.183228,1.618805,.028324,.134179,-.171622,-.425107,.517562,-.192276,.170176,-.330585,-.245818,.368091,.258448,-.140715,-.312474,-.699885,-.04506,-.319794,.26802,.506352,.073868,-.073895,-.215898,-.042085,81e-6,-.165263,-.629137,.657629,.352738,-.459673,-.928391,.034148,.338379,.979509,-.902413,.147749,.561294,-.315659,-.550596,-.908763,.220905,-.120067,-.773099,.286431,.023509,.319319,1.923018,.49583,-.61884,.662673,1.061026,-.095445,1.397626,-.039659,.169087,1.39965,1.575326,.006297,-.231313,.147456,-.209552,-.178187,-.04049,.156271,-.065887,.052989,-.84831,.161803,.392871,-.29054,-.02021,-.384388,.006356,-.09968,.014499,.066501,-.197391,.069881,-.509836,.750922,.290676,-.371327,-.631275,.200323,-.619218,-.645412,-1.010404,-.290196,.310591,-.103612,-.075161,1.074444,-.490251,.138381,-.981163,.175547,.038325,-.107337,-.166849,-.309424,.348629,.34295,-.326885,-.022613,.042562,.324137,.048593,.492885,-.264722,.039923,.120148,-.683656,-1.048836,.109038,-.149781,-.125153,-.288035,.245123,.345819,.488632,.764898,.112022,-.286266,-.354645,.213031,.32594,.165174,-.022568,-.525873,-.510848,-.040998,-.007667,.066543,-.180619,.208203,-.548145,.069081,-.365165,.827749,.480405,.41617,-.260154,-.359857,.310182,.035599,.446387,.99359,.270417,-.735934,-.52164,.37067,-.283133,.526282,-.472854,-.523761,-.136463,-.110361,.123516,-.939582,-.199166,.360168,-.615918,-.084021,-.382226,.275973,-.125132,-.09551,.033272,-.068135,-.430108,-.437265,-.1284,-.061553,-.184895,.30129,-.219137,.149435,.397413,.114867,-.208777,-.403248,.118261,-.405876,1.013042,-.069046,.373979,.498168,1.162453,-.114919,-.247447,-.181354,.498565,.146052,-.194963,-.325907,-.526647,.362594,.941884,-.251664,-.34122,.01466,.178383,.615181,.580245,1.468261,.069053,1.5961,.008715,.771761,.413624,.34127,-.647047,-.062222,.130158,-.79922,1.676634,.073965,-.291314,.377896,.196085,1.623663,.212407,.100054,-.267783,-.454698,-.472215,.447645,.984112,-.887104,.909725,-.508294,1.560204,.772896,.055148,.21616,-.156737,-.159894,-.045602,.715601,.461704,-.161049,-.153175,-.946083,-.936266,.182156,-.818604,-.407186,-.427305,-.288158,-.195095,1.152586,-.494366,-.504843,.658591,-.198228,-.056815,-.768117,.902017,-.596838,.013638,-.657124,-.644347,-.266723,.068854,-.066526,-.959671,.021152,.970615,.185641,.135399,.324197,-.386017,.4955,-.275318,-.021842,.1122,.560701,.930658,-.209408,.094518,.17288,-.386557,-.050907,.875234,-1.241057,.549699,.10102,.175389,-.082779,-.100656],[-.849376,.320291,-.796995,.384775,.023629,-.445281,-.210845,.027161,.304998,.431483,.400236,-.541177,-1.242739,-.280793,.095626,.012871,.279046,.110688,-.731142,-.628902,.581698,-.371434,-.332981,-.153494,-.012626,-.399823,-.171692,.031178,-.167704,.011164,-.071585,-.223262,.080629,.014797,-.139787,-.181557,.214464,.116998,-.292695,.447072,-.318512,-.392638,-.529611,.295556,-.215443,.390266,.140612,.144813,.005092,.041951,-.156365,-.029936,-.701205,-.098227,-.194931,.626793,-.4994,.278216,.847442,-.157693,.07794,-.383095,.189416,-.063389,-.399928,-.085495,-1.206773,.380446,.482992,.399382,.240361,-.137744,.185917,.121565,.477824,.519659,-.580151,1.126484,-.13263,-.282343,.200718,-.509245,.101173,-.129813,-.222277,-.678392,.075237,-.09944,-.657945,-.095317,-.245501,-.378561,-.726338,.454091,.558661,-.245911,-.075384,-.102953,.375042,-.016742,.446207,-.295689,-.132132,.057737,.289462,-.711626,.154242,.053677,-.009147,-.200644,.34046,-.75695,-.515866,-.076929,.122119,.056686,-.150371,-.004235,-.476955,-.276052,-.019853,-.286812,.660778,-.357313,.153167,.057672,-.364014,.686517,.806823,.326517,.051786,-.057096,-.338812,.381227,-.490805,-.387434,-.151749,-.08099,-.128104,-.318554,-.46183,-.290275,-.620428,.848833,.033042,.140064,.268221,.35598,-.038421,.999593,-.123598,-.236283,-.632308,.047537,-.121546,-.187984,-.107525,-.150554,-.036989,-1.334696,-.285302,-.55788,.108937,-.263863,-.372901,-.090053,1.044617,.140276,-.103611,.231296,.009117,.325617,-.26391,-.078054,.575345,-.465663,-.212004,-.496798,-.282212,.275416,-.088437,.228605,-.279692,.590251,-.014237,-.282756,-.042562,.199254,-.098939,-.896231,-.387605,.455735,-.340298,.082991,.149666,-.552192,-.467158,.637883,.679943,.046103,-.306357,.066191,-.836124,-.090672,.593227,.142508,-.73958,-.242565,-.00355,.069559,.101425,.021439,.244771,.231746,.867104,.296375,-.365236,.245865,-.070535,-.420981,-.160837,-.231831,-.10513,.350893,.373034,.119823,-.575877,.178623,-.034943,-.209199,-.821248,.351021,-.180892,.053903,-.449909,.448629,.29186,-.411055,-.096987,-.111423,-.105648,-.705026,-.140707,.696602,.021068,-.489774,.037357,-.266219,-.487402,.073094,.593302,-.470771,-.04987,-.103794,-.355678,.167655,-.02903,.128825,-.522385,-.147243,-.355978,.256079,.817753,-.212754,.109698,-.38496,-.476738,-.812458,.387363,-.138245,-.702408,.0843,.139305,.032308,.154146,.419065,.53081,.661989,.035399,-.421269,.19592,.042073,.406832,-.034273,.31322,.498862,-.250744,.517313,-.634739,.404871,-.091123,-.372568,-.096897,-.130362,.116601,-.137706,-.556026,-.082072,.342584,-.455328,-.218352,-.472801,-.158543,-.210517,-.038382,.439265,.593611,-.468744,-.564637,.181197,.129331,-.598779,-.659036,-.421851,.233659,-.153156,-.348517,-.068804,.311095,-.056729,.692279,.41893,-.110643,-.336605,-.277178,.563017,.504776,.391087,-.354286,.050665,-.155156,-.190438,.028635,.221219,.434089,.083053,.398299,.023224,-.086589,.377778,.078011,-.440853,.307525,.362486,.716614,-.842718,.358809,-.199539,-.153966,.236065,-.063622,-.598325,.350603,-.151901,.084109,-.590016,.478355,-.446759,.145857,-.287195,-.165505,.041518,-.286411,-.001501,-.489009,.400088,.13443,-.009242,.859217,-.603909,-.238673,.091195,.478304,.064754,-.119675,-.112713,.205554,-.056372,-.004868,.104403,-.327285,-.440635,.20767,.119572,-.178239,-.278765,-.256355,.21521,-.918087,-.307184,-.031259,-.097909,.367209,-.096634,.15463,.174194,-.189019,.693031,.257864,.002549,.329061,-.033969,.059006,-.364339,-.135276,.276929,.200498,-.376144,.41188,.083253,-.148316,.321198,.031494,-.161333,-.120896,.172339,.071513,-.272913,-.395628,.252079,.110356,-.111878,-.589007,-.284204,.247961,.021283,-.241165,-.361886,.512209,1.299846,-.00547,.398992,.416451,-.274685,-.19858,-.345857,-.658927,.024763,-1.644184,.212599,-2.008262,-.118813,-.090956,.009577,-.039826,-.21003,-.167453,.201847,1.061948,.676698,-.467963,-.366107,-.108064,-.215102,-.167333,.463073,-1.707233,-.620091,-.00899,-.321254,.34334,.253204,-.012195,-.01488,.096992,.397451,.073695,.259504,.276224,.349296,-.1027,-.03929,-.168961,-.178478,-.407724,-.189479,-.073583,-.10735,.50254,.045863,.353084,-.276473,.046475,.093006,-.169367,-1.729794,-.532578,-.237622,-.612796,-.168519,.195861,-.97585,-.460387,-.16384,-.078226,-.398796,.457465,.268656,.21298,-.295127,-.481164,.13234,-.181801,-.327729,.290889,-.37595,.295994,-.609633,-.075256,-.151711,.177662,.126025,-1.333249,-.024914,.895143,.058102,-.189538,.139065,.118021,.519701,-.808349,.224631,-.120626,.183148,-.252992,.574127,-.51199,-.477154,-.226414,-.358387,-.962583,.043337,.097721,.124592,.034093,.159756,-.087012,-.017508,-.471602,-.723623,.646093,-.846295,.269487,-.513351,.289895,.569812,-.032663,.336293,.416458,.199212,.238123,.077938,.344647,-.572168,-.137133,.795665,.63311,-.539978,.119043,.055696,.507875,-.192078,-.096882,.420962,-.19398,.338457,-.445473,.212583,-.94846,-.223276,.067536,-.43167,-.76283,.178573,.135972,.514921,-.431038,.228379,-.764673,-.524795,-.130892,-.59408,.030765,-.133363,.129122,.42781,.489135,-.137694,-.354082,.058807,.430633,.248489,-.013191,-.163539,-.521634,-.856469,.127161,.308781,.049762,-.309005,-.104671,-.179859,-.341938,.172473,.305785,.270467,.183092,.306991,-.023977,-.08879,-.197109,-.558773,-.433948,-.155093,.13756,.36762,-.337382,-.194979,-.149161,-.190878,-.073345,.080064,-.192299,-.311618,-.576019,-.052872,.419726,.096988,-.207531,-.249734,.469614,.175747,-.175398,.036093,-.213737,.082994,.400532,-.135629,-.183808,.639144,-.928297,-.751046,-.211914,.120882,.207073,-.339654,-.586119,-.167385,-.520513,-.082136,-.282816,.346432,.126773,-.356774,-.294182,.058567,.445187,.072452,.035566,-.753501,.075033,.515487,-.271098,.127151,-.417035,.261782,-.064476,-.247207,.236089,.41549,-1.145417,.133421,.090577,.161425,-.006949,.733348,-.634608,.387919,.02505,-.268281,.583371,-.204345,-.42633,.162346,.195036,.149527,.132769,-.314702,-.260045,-.080399,-.646962,-.476751,-.246383,-.135736,-.382679,.446149,-.371634,.135297,.103066,-.178747,-.512161,.052436,-.176387,-.407591,-.1818,.446856,-.315179,-.234445,-.046002,.275943,-.05159,-.083949,.313548,.092079,-1.111849,-.042699,-.244889,-.54945,.381474,-.057054,-.635571,-.160033,-.076825,.167471,.236308,-.300026,.047926,-.188829,-.068832,-.26676,.588189,-.487855,-.370712,-.090691,.101535,-.999654,-.489578,-.424341,-1.209422,-.384335,-.330419,-.04796,.741184,.144671,.154301,-.31207,.161431,.287408,-.977164,.033448,-.734562,-.181628,-.313057,.176386,-.542542,-.258913,.042564,.349997,-.361653,-.207221,.698845,-.003715,.05874,-.214815,-.304761,-.275182,.05043,-.283106,-.384359,.212316,-.45095,.730005,-.06384,-.144352,.054436,.990503,-.131061,.324143,-.610783,-.141885,-.064229,.003565,-.033522,-.012255,-.34025,.228658,-.115419,-.739951,.003452,-.014584,.069056,.449902,-.543506,-.096416,.106613,.059091,.168123,.538475,.089269,.017637,.147639,-.469734,.173981,-.22489,-.819254,.056011,-.657507,.160131,.145962,.013036,.037248,-.371413,-.685242,-.199567,-.63577,.773843,-.271733,1.092795,.260314,.110979,.083745,.351573,.283824,-.341627,.889503,.097552,-.086396,.191447,.427084,-.164063,.528553,-.029612,.057474,-.584219,-.062452,.230292,-.245287,-.05857,.164372,-.288869,-.069483,-.012585,-.276531,-.56499,-.334266,.389535,.065156,.277875,.314791,285e-6,.018844,-.067424,-.085897,-.20949,-.007332,.537036,-.122248,-.918297,-.588372,.115741,-1.165787,-.064923,-.030235,-.241778,-.304485,-.425556,-.721377,.495219,-.123958,.03612,-.282268,.092952,-.07007,.192165,.010789,.155394,.095808,.452331,-.941482,-.274211,.764316,.063927,.3502,-.176012,.014435,.330531,.992904,-.056077,.533734,-.086685,.542271,.381599,-.02016,-.20059,-.254087,-.261495,.324397,-.341123,.29507,-.539453,-.1128,.089281,.177054,.176227,-.332808,-.143094,-.021771,-.483971,.748015,.599263,.254584,.266363,-.770534,-.114677,-.528269,.43356,.170335,-.119968,.352111,.342945,.008574,.538465,-.1524,.02382,.972774,.012602,-.297142,.237262,.165883,-.094277,-.093101,-1.519124,.328286,-.062933,-.239671,-.160926,.461624,-.051567,.544252,-.131533,-.091162,-.198242,.042027,-.468676,-.155533,.217726,-.021662,.886265,.013733,-.651775,-1.683995,-.278822,.074967,-.146909,-.059144,-.1259,-.268241,-.162476,.389932,-.179357,.137677,-.333553,.307347,-.253441,-.056389,.223129,.321944,-.560303,-.451285,-.330921,.199877,-.34496,.004506,-.19135,-.250511,.036051,.597334,.064508,.021888,.225227,.049714,.598079,-.6871,-.294568,-.907702,.04857,-.099451,.041262,.273725,.193886,-.113537,.381788,.02873,.159589,-.380948,.342603,.171086,.006905,.042444,.742808,.045262,.662641,.787446,-.556051,1.088981,-.551663,.266445,-.450989,-.842372,-.70763,-.003359,-.36963,-.367072,-.330901,-.755126,.200145,-.245158,.344492,-.061769,.026885,-.271027,.09275,.143429,-.401067,.084573,.02771,.015262,-.363795,.896346,-.315659,.074893,.509065,-.079997,.16256,-.020511,-.095486,.053245,.101826,.112199,1.294222,-.721056,-.133196,-.461108,-.151749,.046609,-.311354,-.092218,.121976,.198186,.340939,.047761,-.711456,-.583239,-.235242,.687358,-.099499,.004619,-.691541,.718182,-.208231,-.244057,-.796003,.662954,-.467957,.467339,.281628,.104538,-.545926,-.288082,-.585406,-.252925,-.026713,-.212147,.010683,.62818,-.130444,-.414234,.532024,.109364,-.462481,-1.159513,.093707,.526995,-.161899,.019495,.734138,.226069,-.096016,.138077,.787637,-.832329,.359009,-.815238,-.340914,.117053,.137089,-.113506,.430169,-.415033,.095541,.02915,.056475,.318661,-.402411,-.858521,.528137,.13983,.899068,-.28936,.145641,-.043129,-.046283,-.040984,.386258,.018759,-.467956,-.11482,-.275866,-.115811,-.143418,-.254594,-.150445,-.112852,.171946,.217367,.058521,-.528618,.347672,.166917,-.361977,-.674875,1.105417,-.061631,-.264369,.137851,-.20376,.357888,-.0804,.364989,-.054937,-.217596,-.057879,-.133773,-.287038,-.263658,.216023,-.447302,-.085043,-.683696,-.486741,-.226112,.156823,-.038313,.385829,.262597,.086343,.303439,.026794,.320956,.58683,-.813663,.896404,.022073,-.191868,.383302,-.205771,-.524674,-.422528,.058769,-1.043115,-.120427,.065791,-.367845,.083776,-.088883,.146338,-.17258,.071852,-3.29671,.022087,.132065,-.393367,.336661,.075005,-.436281,-.360912,.071503,-.170176,-1.467803,-.057453,.398147,.421274,-.006884,-.671041,-.669182,.475362,-.007393,-.33631,-.018536,.766486,.186136,.033479,.300385,-.1922,.236266,1.069072,.132968,-.322613,-.767263,-.128391,-.254592,.541173,-.086054,.28021,-.591767,-.077613,.232838,.49841,.429755,.048436,-.321704,-.070824,.239753,.008859,-.026917,.067632,-.247784,-.50994,.988588,-.242045,-.052651,-.616089,-.127852,-.515882,.176678,-.092249,.297376,.42406,.005469,.20154,-.164481,-.121887,-.067981,.05757,.332572,-.650236,.285339,-.106003,-.08344,.00977,.100607,.154875,.025818,.466947,-.17914,.164412,.831456,-.100312,.298922,.367231,-.334834,-.195985,.032457,-.064231,-.002716,-.331282,.23134,-.774179,.807605,.077272,.294231,-.43085,.432581,.351123,-.507097,.081716,-.410473,-.313732,-1.133005,-.481034,.684123,.003625,.00684,.010665,.056011,-.022199,-.109975,.370255,.068765,-.303527,.234915,.496222,-.515946,-.108392,-.497454,-.248951,-.081441,.408687,.051975,-.194253,1.142779,-1.271319,.1846,-.196324,.291555,.406783,-.542735,-.334065,-.325989,-.331599,-.052353,.322554,-.170734,-.132275,-.370225,.409137,.132546,.025273,-.019791,-.353436,.097789,.986989,.082425,-.149564,.013342,-.124096,-.922728,-.404396,-.130974,.049581,.007804,-.573339,-.022512,-.096327,-.196078,-.056408,.222665,.342899,-.117435,.083467,-.051558,.481962,-.181983,-.081868,.442442,-.082056,.16646,-.323863,-.072581,.376275,-.118388,-.2513,-.753676,.691624,-.074749,.064521,-.026414,-.085275,-.106729,.392989,.033985,-.054159,-.361159,-.016754,.112746,.804087,.214982,-.293662,-.066006,-.183416,-.074002,-.286286,-.443347,-.633718,.27239,-.375969,.37196,-.134453,-.066923,.875319,.066013,.416657,-.182954,-.240454,-.543663,.917219,.057776,-.347402,-.441417,.491023,.18815,854e-6,-.043778,-.002818,.228332,-.133855,-.667675,-.226846,-.301164,.077322,-.097242,.051121,.105776,-.111878,-.072747,-.273131,-.031957,.073327,-.180358,-.372381,-.308829,.43724,-.574764,.201711,.811373,-.003656,.422435,-.270245,-.887847,-.322523,.193519,.28875,.165972,.015416,.151901,-.284441,.213712,-.167985,-.366414,-.492236,-.593443,.283301,-.087054,-.30675,-.404318,.063139,-.277059,.053835,.084448,.126243,-.053325,.633113,.235939,.126279,-.587107,-.103674,.021779,1.154031,-.734562,.117549,-.306654,-.436417,-.039787,.110327,.043333,-.200392,-.235226,-.743169,-.23994,.584077,-.314145,.03145,-.083433,-.104178,.535473,-.133872,.521743,-.266974,.085506,.223537,-.489804,-.061214,-.582512,-.047839,.070225,.58851,-.107205,-.148214,.390251,-.449846,-.262371,-.046067,-.45657,-.282573,-.394776,-.430231,-.519371,.090119,.157749,-.063296,-.322739,.679005,-.471519,.233906,.121624,.502598,-1.043421,-.226315,-.028804,.33601,-.809843,-.059538,-.118379,.522326,-.283524,-.115477,-.100107,.775931,1.232679,.320489,.055224,-.195541,.706317,-.098256,.06395,-.521779,-.282376,-.11673,.050377,.035315,.27887,.167596,.172951,-.101827,.445,-.05055,.484174,-.387774,.205796,.176236,.538446,.069307,-.130119,.098385,-.648842,.468356,.273519,-.300529,.091136,-.693363,.314305,-.034622,-.960348,.26216,-.101964,.53397,-.316047,.442876,.134394,-.968787,.218205,.690862,.653236,.123815,.33991,.020181,.05517,.566402,.100968,-.060382,-.068002,-.477998,.288134,.161891,-.409772,-.126124,.15683,-.057052,-.144211,-1.725764,.64648,-.12459,.05522,.882178,.306196,.659846,-.069086,.02558,.179567,-.620967,-.130994,.005191,.448156,-.014243,-.912643,-.394439,-.29426,-.314319,.055546,.252304,-.584391,.241325,.449809,.38177,.480305,-.457846,.019238,-.441257,-.086517,.590648,.060498,-.247957,.924944,.081364,.062117,-.029616,.216513,-.434167,.49051,-.49605,-.252611,.061605,-.244085,-.089077,-.510408,-.302659,.20711,.403802,.124204,.032071,.339621,-.146486,-.097279,.059212,-.407427,.198125,-.160495,-.052088,.143268,-.024406,-.415759,-.070668,-.186804,.105252,-.028542,-.438361,-.328928,-.991892,-.090289,.849755,.137608,-.862733,-.694932,-.401431,-.339263,-.273151,.695999,1.346069,-.466959,.033637,-.563006,.262011,-.209318,.002762,.143107,-.190428,-.202381,-.526727,-.145538,.585531,.199727,.0353,.040247,.386198,.453683,.082716,-.593944,-.349778,.101613,-.297748,.551206,.354387,-.163565,-.376854,.721028,.494811,-.346979,-.224182,-.184719,.329927,.074262,-.488148,.462169,-.661602,-.403549,.070888,.002124,-.167847,.079387,-.027493,.571566,.430339,.421762,.101906,.021207,-.579769,.153407,-.070878,.697994,.203801,-.010041,-.13026,-.305847,-.074676,.146029,-.090258,.252099,.106996,-.299077,-.29705,.21814,.206275,-.336355,-.736627,.173646,-.204196,.00484,-.165446,-.247681,.146632,.042699,-.233116,-.281884,-.555209,.046382,.393929,-.805333,-.007919,-.262652,.19037,-.349441,-.088821,.077649,.325231,.236554,-.14887,.019388,-.13538,-.414511,.054472,.174686,-.603651,.110895,-.18434,-.567293,-.537022,.622869,852e-6,.033456,.30704,.129132,.010743,-.014033,.084607,-.330574,-.106195,1.128775,.42326,-.131181,-.144349,.184987,.033144,-.481019,-.004593,.200541,-.191923,-.410018,.307624,.473101,-.074732,-.029854,-.122945,.176369,-.330887,.152365,.647141,-.220273,.021861,-.082219,.363418,-.030092,.106353,.238055,.105772,.061377,-.282821,-.278956,-.06861,.542931,-.222303,-.459315,-.490862,1.421309,-.778089,-.711122,.023897,-.115873,-.068097,-.128129,.257398,.67754,-.398451,.140614,-.497762,-.687711,-.346184,.254608,-.531622,-.11356,.074392,-.500873,.106603,-.256608,-.384998,-.683968,.162106,-.074584,-.119911,-.312854,-.446809,-.405658,.179153,.044071,-.198723,.073859,-.031436,751e-6,.004056,.343829,.780677,.113408,-.409415,-.07881,.09437,.445237,-.05795,-.160212,-.408411,-.249158,-.091043,-.270827,-.416161,-.03677,-.268041,-.480945,-.050411,-.503905,.115523,.26372,-.189872,.033801,-.639805,.821862,.751005,.048045,.430291,.237131,.196672,-.473716,.080672,-.046833,.050955,.320917,-.570061,.245225,-1.374513,.025138,.220535,-.126639,-.623298,1.023291,-.179876,-.920155,-.099158,.663848,-.402021,-.530994,-.150792,-.417222,.178446,.378691,.633795,-.018854,.268722,-.560822,-.391843,.133667,-.475387,.517827,.521344,-.002978,.284767,.003663,.818043,.329222,-.260972,-.135787,-.510303,.529675,-.922626,.215355,.180107,.206567,-.113741,-.313472,-.731121,-.154804,-.281094,-.048361,.993085,-.074055,-.346906,.366765,-.035889,.103797,.175593,-.823568,.416527,-.466925,-.065741,.528736,-.479309,-.091394,.134531,.240395,.160952,-.31204,.155438,-.404763,-.072437,-.076263,-.19259,-.111786,.073412,-.404403,-.254841,.474614,-.114176,-.267774,-.090691,-.178277,-.848601,-.01042,-.084758,-.227045,.404435,-.083298,.0354,.010864,-.285791,.351662,-.967594,.371193,.802631,-.2871,-.264587,-.063292,.265653,-.198671,-.140093,-.137581,-.227835,-.541608,-.003284,-.300035,.168508,-.332532,.117643,-.374659,-.327878,.309071,-.458671,-.605867,-.2903,.085669,.028512,-.092871,-.637097,-.420018,.3629,.05499,.523595,-.15465,-.018964,-.595216,.349543,-.600288,-.690013,-.273554,-.482326,.044021,.366516,.046984,.264078,.374229,.076456,-.274751,-.438625,-.213793,.032213,-.403876,.141171,.07317,-.651742,.540782,.033569,-.083654,.227594,.571364,-.937687,-.031174,-.148826,.4797,-.157009,.297617,-.171965,.458379,.175993,-.005722,.27353,.560118,-.595694,-.366965,-.67081,.00324,-.291541,-.420388,-.216721,.975399,.766648,-.355164,-.455453,-.079292,-.721067,-.593484,-.160495,-.03311,.697623,-.598096,.108069,.140766,-.722233,-.437644,-.062087,-.189023,.549199,-.023012,-.114228]],temperature:.5},slot:{bias:[.219728,-.118743,-.329495,.096681,.337767,-.205939],weights:[[-.13921,.201247,-.483847,0,0,-1.299806,.439854,-.467131,-.42216,-.554407,.057613,-1.079867,-.245103,-.320259,-.200951,0,.106987,-.174053,0,0,0,.38382,-.107118,-.403027,0,1.564173,0,0,-.827384,-.317855,-.239534,-.174053,-.140443,-.418779,-.38186,-1.503094,0,-.696044,0,0,-.423353,-.702872,-.329463,-.837096,-.207534,0,.507886,-.03399,0,2.372119,0,-.511247,0,-1.133108,-.21512,.834924,-.042943,0,-.332224,0,-.178163,-.371948,-.511247,.645465,-.003605,.833821,-.231762,-.948894,0,1.424921,-.183839,0,0,1.199994,0,1.083943,0,-.361043,0,-.353173,.720631,.607866,0,-1.009449,-.082623,.73628,-.335088,-.571917,1.199994,.47751,-.420006,-.105875,0,0,.061193,-.113639,1.642287,-.082972,-.92579,.423369,.535163,-.522588,1.556465,-.261819,0,-.369667,.963556,0,-.467131,0,.744968,0,.268286,0,-.366956,-.70136,0,-.280857,-.403027,0,-.520768,-.085256,0,0,-1.033417,-.13921,.646065,-.353405,0,0,1.733253,0,-.672391,.518638,-.285808,.422454,-.136064,-.082972,-.735251,0,-.111586,-.215294,0,-.341606,-1.025228,-1.262322,0,-.361043,0,0,-.745579,.345985,.291825,.415483,-.559282,.118076,0,.600617,.075319,-.851185,0,.31421,0,-.662685,0,0,-.46366,-.454139,0,.411367,-.178163,-.259684,-.180331,0,.4385,0,.283077,-.336249,0,1.199994,-.13921,0,1.556465,-.21512,-.182939,0,0,0,-.267009,.445579,2.476107,0,-.34544,0,-.587478,.963556,.562309,0,0,.08729,-.106701,0,0,-.207534,-.412192,-.099403,.833821,-.69332,-.007867,-.40049,-.362849,-.345669,.488548,0,1.124328,0,-.32435,1.0958,0,0,.936,0,-.507589,-.325811,.022009,-.552958,-.375839,-.478837,-.180331,-1.34379,-.161898,0,0,0,-.227058,-.267009,-1.720409,-.264006,-.708292,1.564173,-.136064,1.37928,0,0,.763099,-.521716,.814623,2.05718,.131855,-.569617,0,-.825758,.344768,0,.150883,0,0,0,-1.817729,.600617,0,0,0,0,1.755167,-.217476,0,0,-.727377,-.371948,0,1.198789,.891943,.707028,0,-.13921,.675082,-.558438,.600617,0,-.34581,-.630379,0,-.302608,0,-.708292,.786935,-.227058,1.049933,.423003,0,-.915835,0,-.106701,-.416062,-.499538,0,-.790915,.006786,-.220734,-.285808,0,.199142,1.979075,0,-.206329,-.285808,0,1.142213,1.556465,0,0,.403946,-.220553,-.403027,0,-.734347,.578549,-.082623,-.079143,-.264486,0,-.285808,-.563615,.703772,-.230743,-.597039,.058972,-.13921,0,.350924,-.948377,0,.624629,0,.045675,-.009651,.656567,-.771011,-.522689,0,-.134535,0,-1.400417,.061692,.419515,-.986547,-.516007,1.595715,0,-.041279,-.213147,0,-.397629,0,1.029766,.561856,1.932133,.18384,0,-.227058,-.227058,.834924,0,-.416062,.191599,.600617,0,-.105875,0,-.305768,-.444149,0,-.220553,-.335088,-.302608,-.195636,0,1.556465,0,-.475008,-.111961,0,-.264486,.677748,-.286959,-.744066,0,-.121457,0,0,-.371948,-1.120419,0,-.366268,.891943,.262183,.173181,0,-.506064,-.18935,0,-.501018,-.239534,.453872,0,0,-1.002087,.289373,0,0,0,-.17353,0,-.200951,-.9652,.125047,-.102225,1.14786,1.383776,-1.072726,.483038,.703772,0,-.34128,-.416247,0,0,-.254808,-.588226,0,.367523,-.32435,-.891352,-.414848,-.770113,.496294,.97926,0,-.292406,0,0,0,-.169671,.272733,-.814346,.100294,2.025609,-.757772,-.272631,-.332224,0,-.605619,.356357,0,-.534047,0,239e-6,0,1.092697,-.280857,-.288813,0,0,.073001,.963556,0,0,-.231987,0,.296093,-.578228,0,-1.574692,0,-.439093,-.114218,0,0,-.468161,-.105875,0,-.220734,0,0,-.227058,.891943,-.285808,-.220553,-.259684,-.167992,.699606,-.235962,-.159456,.703872,1.400272,-.107271,0,0,-.588226,0,.269789,-.198684,0,-.257257,0,-.339404,-.227058,-.342256,.118076,0,-.315,0,0,-.671725,.304957,0,-.302337,-.266125,-.207534,.954306,-.18798,0,.606763,.165562,.338999,0,0,1.541179,0,.703772,-.467131,-.148385,-.645488,-.471435,-.264486,.401153,0,-.106701,.214217,1.183085,-.285808,0,0,-.71379,1.440998,0,-.809586,-.53061,.893884,-.185134,.600617,0,1.499076,-.185134,-.128844,1.944463,0,-.895865,.357621,-.113282,1.248495,.352653,.14359,.578164,.963556,-.020666,-.239534,.907989,.815171,-.149833,0,0,0,.891943,-.551933,-.8652,-.371948,.204802,0,.50152,-.818053,-1.682806,-.285808,0,-.314805,.417964,1.029597,-1.072753,0,0,0,0,-.248779,0,.828962,-.240049,.337966,0,-.710008,0,-.454904,0,0,.956279,-.227058,.356092,-.581928,-.13921,-1.922974,-.280857,.703772,.08304,0,-.331868,-.787983,-.758319,.24284,.703772,-.479606,-.215294,0,.55118,-.491446,0,0,0,0,-.417413,-.286959,.813723,0,-.395865,.095881,-.236174,.600617,0,0,0,.404496,-.636433,-.547166,.237189,-.286959,-.123597,-.176888,-.1181,0,-.810065,-.74106,-.467131,.183513,-.285808,.809831,0,0,.497239,0,.42346,-.003657,0,.972165,.696914,1.199994,.600617,-.792071,-.267009,0,1.906273,.600617,.353304,0,.399588,0,-.391684,-.091753,0,-.752939,-.188847,-.550294,0,.833821,0,-1.152032,-.231905,0,.504222,-.366634,1.022728,0,-.890767,.168115,-.239018,-.280857,-.364953,.703772,-.713561,0,.935005,-.42332,0,-.808701,.671509,.077101,.111788,1.736052,0,.364959,-.439093,1.763294,0,-.148385,-.107118,-.309544,-.182939,0,.333335,-.105875,-2.033007,0,0,-.136511,0,-.190363,-.285808,.289373,0,0,0,-.618519,0,-.708292,0,-.272631,-.166407,0,0,-.149833,-.182939,1.79317,0,0,0,-.368526,-1.012077,-.317373,0,.454005,.913849,-.815926,-.227058,-.18798,0,0,-.416777,-.207534,0,0,-.417845,.893884,-.488534,0,-.468161,.376081,-.403723,-.347551,0,-.461757],[-.120262,.189329,.659903,0,0,-.958026,2.050201,-.257057,-.176617,-.278014,.71793,1.360288,-.835093,-.22949,-.264176,0,-.663447,-.103638,0,0,0,-2.33524,-.251494,1.647928,0,-.282065,0,0,1.16542,1.477899,.853745,-.103638,-.525649,-.407682,-.192708,-.84316,0,-.862459,0,0,.703749,.91551,1.025521,-1.09285,.888009,0,-.578241,-.344869,0,-.868617,0,-.235649,0,.66634,.77239,-.186801,-.397662,0,-.123485,0,.699472,1.124648,-.235649,-.03548,-.99135,-.212679,-.396046,-.640005,0,-.348176,-.077065,0,0,-.227813,0,-.627056,0,-.527394,0,.780795,-.247446,-.406284,0,-1.920496,-.113262,.377564,-.132255,-.946438,-.227813,-.120883,.846973,-.049837,0,0,1.036837,-.07295,-.374651,-.034267,2.86539,-.104537,-.134467,-.275743,-.345174,-.121809,0,-.210865,-.136582,0,-.257057,0,.274463,0,-.05323,0,-.256992,-1.320577,0,-.143332,1.647928,0,1.059485,-.093348,0,0,-1.075383,-.120262,.224735,.078455,0,0,-.913676,0,-.311986,-.206661,-.146131,.553989,.40756,-.034267,1.524443,0,-.069596,-.10494,0,-.188813,-.631264,1.235273,0,-.527394,0,0,-.878921,-.73874,-.549426,-.231616,-.342968,-.176201,0,-.145483,-.265384,-.94425,0,-.340327,0,-.345405,0,0,1.855565,.644491,0,-.261042,.699472,-.20261,-.144497,0,-.190048,0,-.673827,-.153733,0,-.227813,-.120262,0,-.345174,.77239,-.080124,0,0,0,.954157,-.632009,-.587331,0,-1.384455,0,-.524596,-.136582,-.755045,0,0,.380972,-.122302,0,0,.888009,-.305615,-.11208,-.212679,.365715,-.497234,-.50049,.308578,-.243667,-.590215,0,-.424128,0,-.403548,-.657625,0,0,-.518164,0,1.754045,-.329141,-1.005467,-.22869,-1.204378,-.418211,-.144497,-1.443055,.572754,0,0,0,-.219483,.954157,-1.02427,-.173232,-.378227,-.282065,.40756,-.475117,0,0,.426679,-.591437,-.242242,-.724089,-1.066967,.689273,0,2.118462,-.582684,0,-.553468,0,0,0,.695335,-.145483,0,0,0,0,-.524313,-.112752,0,0,1.24438,1.124648,0,-.376988,-.173303,-1.034924,0,-.120262,-.589741,.68765,-.145483,0,-.341745,-.499364,0,-.264885,0,-.378227,-.516431,-.219483,1.149896,-.10365,0,-.98783,0,-.122302,1.339764,.303227,0,-.491489,.429429,-.105205,-.146131,0,-.229912,-.909913,0,.398753,-.146131,0,-.332684,-.345174,0,0,-.223751,-.111439,1.647928,0,-.703155,-.139989,-.113262,-.069689,1.229378,0,-.146131,-.323437,-.120528,1.942805,-.286072,.527552,-.120262,0,-.065613,-1.109299,0,-.190217,0,-.273943,-.571814,.489403,-1.006882,-.277888,0,-.792441,0,.100445,-.767226,.504457,3.728364,-.428454,-.293831,0,.333797,-.104219,0,.433779,0,-.535813,1.080013,-.319313,-.364021,0,-.219483,-.219483,-.186801,0,1.339764,-.059164,-.145483,0,-.049837,0,-.381492,-.22204,0,-.111439,-.132255,-.264885,-.357696,0,-.345174,0,-.453633,-.040083,0,1.229378,-.282713,-.138912,-.580519,0,.677544,0,0,1.124648,.102475,0,-.339745,-.173303,-.29726,.713029,0,-.369458,-.869388,0,-.346725,.853745,.870509,0,0,2.388195,.076894,0,0,0,-.092561,0,-.264176,.058919,1.404197,-.14848,1.354788,1.207148,-.741539,-.225733,-.120528,0,-.378136,-.337835,0,0,-.155497,2.551387,0,-.274261,-.403548,-.119,-.236748,-.729433,-.555825,-.333018,0,-.140514,0,0,0,-.583327,-.054459,-1.223348,-.150971,-.625839,-.349044,-.336772,-.123485,0,.410965,-.163623,0,.443292,0,-.337682,0,-.471661,-.143332,-.367007,0,0,.551214,-.136582,0,0,-.440737,0,-1.229885,.591255,0,1.595424,0,-.478175,-1.453742,0,0,-.778888,-.049837,0,-.105205,0,0,-.219483,-.173303,-.146131,-.111439,-.20261,-.09774,.459354,.348487,-.098862,-.339192,-.49165,-.054382,0,0,2.551387,0,-.652669,.772802,0,-.094542,0,-.557255,-.219483,-.208619,-.176201,0,-.268799,0,0,-.78518,.440525,0,-.479998,-.311974,.888009,-.314116,.3401,0,-.432163,-.452568,-.411101,0,0,.408105,0,-.120528,-.257057,-.046421,-.347385,-.243747,1.229378,-.712849,0,-.122302,.010732,-.180551,-.146131,0,0,.442393,-.299277,0,-.402254,.917404,.350501,-.086132,-.145483,0,-.924012,-.086132,.599982,-.566275,0,-.478117,.76394,-.057057,2.170817,.474603,.250879,-.313482,-.136582,.216882,.853745,-.604832,-.183002,-.13279,0,0,0,-.173303,-.458105,-.470648,1.124648,-.868469,0,.560491,.162586,2.027247,-.146131,0,.833627,-.266659,-.833904,-.746569,0,0,0,0,-.442837,0,-.610119,-.332644,-.234285,0,-.426313,0,.512981,0,0,-.022197,-.219483,-.112374,-.615293,-.120262,3.046979,-.143332,-.120528,-.369607,0,-.613795,-.403799,1.131145,-.613005,-.120528,2.001768,-.10494,0,-.124085,-.598657,0,0,0,0,.979863,-.138912,-.269371,0,-.383944,-.029583,-.338151,-.145483,0,0,0,-.243626,2.354027,-.290723,.400159,-.138912,-.070708,-.268452,.35945,0,-.039132,-.380165,-.257057,-.221155,-.146131,-.215823,0,0,.515674,0,-.692354,-1.299997,0,-.389497,-.457809,-.227813,-.145483,1.021695,.954157,0,-.655851,-.145483,1.905809,0,.362558,0,-.195968,-.409995,0,-.403188,-.084104,1.083247,0,-.212679,0,1.469139,-.139927,0,-.106939,-.510354,-.249481,0,-.515161,2.055901,1.004436,-.143332,.6396,-.120528,2.846603,0,-.308002,-.405696,0,-.465744,-.680772,.184664,-.011153,-.838744,0,-.062958,-.478175,-.54015,0,-.046421,-.251494,-.243269,-.080124,0,-.59961,-.049837,4.624093,0,0,-.151155,0,-.152257,-.146131,.076894,0,0,0,-.290031,0,-.378227,0,-.336772,-.068946,0,0,-.13279,-.080124,-.92812,0,0,0,.547215,.588524,.579211,0,-.033588,-.324719,.820614,-.219483,.3401,0,0,-.218537,.888009,0,0,-.217623,.350501,.505754,0,-.778888,-.354457,-.236716,-.246807,0,-.338863],[-.13069,-.211007,-.293637,0,0,.891489,-1.168847,-.128663,-.552806,-.319254,-.127654,-.944839,-1.446961,.888356,-.080504,0,2.05454,-.460736,0,0,0,.118358,-.050516,-.211204,0,-.263666,0,0,-.37367,-.263312,-.144439,-.460736,1.068057,-.77516,2.065148,2.202488,0,-.286055,0,0,-.00306,-.387109,.065877,.390446,-.124095,0,-.346799,-.18707,0,-1.32727,0,-.327949,0,2.693979,-.086354,-.149887,-.067158,0,-.134534,0,-.094927,-.121061,-.327949,-.035777,-.827765,-.067225,.469818,-.962988,0,-.17666,-.075442,0,0,-.32842,0,-1.138025,0,-.186672,0,-.69566,-.267258,-.241137,0,3.586463,-.044216,-.250133,1.14407,-.28359,-.32842,-.05654,.611514,.595939,0,0,-.179467,-.551222,-.222927,-.054029,-.38943,-.055355,-.103516,.933911,-.392135,-.669498,0,.087203,-.14468,0,-.128663,0,-.144646,0,-.053767,0,.464617,1.843772,0,1.203117,-.211204,0,-.539473,-.033669,0,0,1.39731,-.13069,-.260696,-.594739,0,0,-.197021,0,-.390748,-.684779,-.144205,-.213914,-.04236,-.054029,-.345739,0,-.384602,1.411542,0,.005369,1.760601,-.634532,0,-.186672,0,0,2.191602,.157192,-.441718,-.592393,-.225784,.353156,0,-.118987,-.735612,-.326138,0,-.330151,0,1.696045,0,0,-.226775,.317039,0,-.146079,-.094927,-.074083,-.62562,0,-.136675,0,-.842011,1.682678,0,-.32842,-.13069,0,-.392135,-.086354,-.642989,0,0,0,-.098668,.905303,-.290152,0,2.202017,0,-.241462,-.14468,-.282139,0,0,-.531934,-.055305,0,0,-.124095,-.564656,-.046392,-.067225,-.523096,-.186452,-.154376,-.123985,.910472,-.390124,0,.874926,0,-.153578,-.368693,0,0,.974535,0,-.2164,-.123371,1.686857,.717951,1.130179,-.227436,-.62562,2.014795,-.043481,0,0,0,-.09125,-.098668,2.118404,-.105166,1.215932,-.263666,-.04236,1.263579,0,0,-.298448,-.226586,-.909962,-.430416,-.494964,-.196464,0,-.434696,.97859,0,1.00737,0,0,0,2.139762,-.118987,0,0,0,0,-.411356,.665752,0,0,-.364782,-.121061,0,.490382,-.179673,-.691182,0,-.13069,-.356722,.592831,-.118987,0,-.498559,.368742,0,-.097796,0,1.215932,-.331171,-.09125,-.356792,-.054998,0,-.48598,0,-.055305,-.122921,.32405,0,1.171716,1.208161,.852485,-.144205,0,-.192275,.745172,0,-.118775,-.144205,0,-.228059,-.392135,0,0,-.720572,1.101123,-.211204,0,-.887817,-.066307,-.044216,-.072038,-.214114,0,-.144205,-.579514,-.211373,-.622673,1.062658,-.315194,-.13069,0,-.084606,1.050307,0,-.283411,0,-.132549,-.529708,-.149935,.272939,-.75991,0,1.045372,0,-.770863,1.077487,-.3974,-.453636,-.215504,-.391046,0,-.408749,1.134639,0,-.634051,0,-.213473,-.518415,-.524947,-.316117,0,-.09125,-.09125,-.149887,0,-.122921,.031313,-.118987,0,.595939,0,.168445,-.236411,0,1.101123,1.14407,-.097796,-.078649,0,-.392135,0,-.245444,-.041968,0,-.214114,-.288884,-.169339,-.413778,0,.208717,0,0,-.121061,1.719703,0,-.22194,-.179673,-.263814,-.441677,0,-.173148,-.508451,0,1.050821,-.144439,-.334324,0,0,.226981,-.261161,0,0,0,-.146596,0,-.080504,-1.559696,-.470096,-.071203,-.512089,-.744341,.603912,.641112,-.211373,0,-.122249,-.649018,0,0,-.169344,-.312904,0,1.471305,-.153578,-.381367,-.178751,-.355504,-.666655,.524066,0,.065294,0,0,0,-.463326,-.041299,.388281,.680957,.282594,-1.198868,-.148553,-.134534,0,-.793908,-.084159,0,-.322073,0,-.610152,0,-.311194,1.203117,-.183908,0,0,-1.557454,-.14468,0,0,-.110916,0,.626375,.31873,0,-.801796,0,-.18237,-.789543,0,0,-.237188,.595939,0,.852485,0,0,-.09125,-.179673,-.144205,1.101123,-.074083,.734724,.05092,-.169291,-.165814,-.218763,-.816165,.5387,0,0,-.312904,0,-.376171,.236244,0,-.244713,0,.653922,-.09125,-.209901,.353156,0,1.119616,0,0,-.417717,-.118616,0,-.133954,-.093829,-.124095,-.269463,-.120256,0,-.158475,.383196,.919169,0,0,.007032,0,-.211373,-.128663,-.059092,-.725961,-.265225,-.214114,.958984,0,-.055305,-.28958,-.178363,-.144205,0,0,-.328404,-.184762,0,-.235882,-.307943,-.222078,-.473406,-.118987,0,2.211532,-.473406,-.118775,.405778,0,-.338164,-.382079,.562423,-2.110734,-.337037,-.232258,.412383,-.14468,-.407355,-.144439,-.342015,-.203771,-.05317,0,0,0,-.179673,-.238034,1.169164,-.121061,-.481147,0,.110593,-1.00768,-.7961,-.144205,0,.414605,-.355578,.791814,-.420195,0,0,0,0,-.00457,0,.917535,-.113383,-.744288,0,1.615904,0,-.250035,0,0,-.748242,-.09125,.225384,1.173057,-.13069,-.885965,1.203117,-.211373,-.414996,0,-.170208,1.420007,-.332822,-.420482,-.211373,-.300468,1.411542,0,-.074915,.395735,0,0,0,0,-.163086,-.169339,-.197849,0,-.173406,-.314455,-.126272,-.118987,0,0,0,-.527043,-.335175,.00327,-.558983,-.169339,-.053135,-.082031,-.03708,0,.838375,1.187043,-.128663,-.175578,-.144205,-1.543631,0,0,.929272,0,.478431,.198152,0,-.464894,1.550374,-.32842,-.118987,-.922831,-.098668,0,-.524761,-.118987,-.56284,0,-.1168,0,.451734,1.565179,0,-.272868,.54191,-.358318,0,-.067225,0,.95685,-.819312,0,-.070428,-.238485,-.103303,0,1.481526,-.576049,-.126964,1.203117,-.139524,-.211373,-.349726,0,-.173623,-.686687,0,1.025001,-1.312139,.976325,-.158735,-1.003795,0,-.037318,-.18237,-.28363,0,-.059092,-.050516,-.033015,-.642989,0,-1.346879,.595939,-.959989,0,0,-.048151,0,1.068445,-.144205,-.261161,0,0,0,.210751,0,1.215932,0,-.148553,-.093768,0,0,-.05317,-.642989,.784444,0,0,0,.973518,-.648535,-.225618,0,-.250404,-.368032,.06976,-.09125,-.120256,0,0,-.197131,-.124095,0,0,-.225403,-.222078,-.765982,0,-.237188,-.096492,.144154,-.141219,0,-.223502],[-.171058,-.321806,.156558,0,0,.165339,-1.308323,1.262129,.577824,-.41821,-.169934,-.231951,1.540819,.141795,-.114326,0,-1.191086,1.036409,0,0,0,.361647,-.085601,-.269398,0,-.476044,0,0,-.423076,-.326956,-.118881,1.036409,.385979,.570467,-1.072669,1.106594,0,-.414825,0,0,.039553,-.46872,1.09434,-.899406,-.135299,0,-.349679,1.173502,0,-.200384,0,1.67831,0,-1.070275,-.125642,-.115969,1.317421,0,-.187821,0,-.11881,-.178989,1.67831,-.135356,.48137,-.223942,.490512,2.621247,0,-.288064,-.116928,0,0,-.144969,0,.763037,0,-.250464,0,.727196,.42472,-.268707,0,2.72791,-.092239,-.379809,-.34278,-.338561,-.144969,-.128465,-.413542,-.324008,0,0,-.267616,.846077,-.463676,-.05933,-.660607,-.077714,-.075234,-.668917,-.249417,1.217829,0,.900415,-.353553,0,1.262129,0,-.303041,0,-.040394,0,-.468566,1.250728,0,-.522249,-.269398,0,-.202477,-.06099,0,0,.826872,-.171058,-.212327,1.770304,0,0,-.691321,0,1.597672,.709738,-.20346,-.241302,-.084149,-.05933,-.457219,0,.767295,-.823805,0,.880808,.712348,-.864376,0,-.250464,0,0,1.077167,-.674883,-.783009,.738643,-.340559,.050938,0,-.122492,.937545,-.521013,0,-.316112,0,-.464281,0,0,-.24288,1.160863,0,.427061,-.11881,-.18589,1.203512,0,-.235275,0,1.518155,-.845919,0,-.144969,-.171058,0,-.249417,-.125642,1.099343,0,0,0,-.108187,.231467,-.687618,0,2.155325,0,-.302829,-.353553,-.51689,0,0,-.783625,-.085016,0,0,-.135299,.708397,-.046945,-.223942,1.651918,-.336947,-.256357,-.261116,.130768,-.663649,0,-.747102,0,-.249237,-.632554,0,0,-.830103,0,-.307964,-.200628,1.637207,-.496226,-1.315131,-.269246,1.203512,1.191954,-.14679,0,0,0,-.152738,-.108187,2.586232,-.140106,.720094,-.476044,-.084149,-1.374534,0,0,-.277396,-.324174,.855267,-.611355,-.489958,-.192316,0,-.625213,.499523,0,.371069,0,0,0,.969689,-.122492,0,0,0,0,-.538668,-.168639,0,0,-.518635,-.178989,0,-.493758,-.137402,1.251502,0,-.171058,1.038157,-.141232,-.122492,0,.652306,.536527,0,-.084129,0,.720094,-.39572,-.152738,-.570889,-.075028,0,-.640757,0,-.085016,-.306192,.582423,0,.627855,-1.016514,-.308405,-.20346,0,.295849,-.296454,0,-.135289,-.20346,0,-.223972,-.249417,0,0,.934962,-.576501,-.269398,0,.697368,-.135322,-.092239,-.100181,-.268969,0,-.20346,.871695,-.151397,-.572321,-.140882,-.375247,-.171058,0,-.052715,.704422,0,-.251578,0,-.19703,1.266546,-.316214,.975301,2.057702,0,1.086757,0,.19978,.907641,-.595804,-.49256,-.284345,-.288799,0,-.486576,-.606684,0,1.058026,0,-.451708,-.60267,-.56725,-.338797,0,-.152738,-.152738,-.115969,0,-.306192,-.298836,-.122492,0,-.324008,0,-.103044,-.329499,0,-.576501,-.34278,-.084129,-.125208,0,-.249417,0,-.310097,-.066265,0,-.268969,-.557013,.852887,-.548447,0,-.067944,0,0,-.178989,.652868,0,-.323796,-.137402,.470416,-.519153,0,-.246414,-.514567,0,-.447331,-.118881,-.293252,0,0,-.677632,-.090416,0,0,0,.625609,0,-.114326,.955581,-.786869,-.050588,-.48537,-.849453,.901803,-.459802,-.151397,0,-.219943,.761947,0,0,.884812,-.409828,0,-.997316,-.249237,-.551484,-.28006,-.49494,.260713,-.453374,0,.578458,0,0,0,-.423739,-.044292,1.274427,-.32629,-.605629,2.9638,-.189567,-.187821,0,.177033,-.121981,0,-.349711,0,-.798148,0,-.475885,-.522249,-.253128,0,0,1.252851,-.353553,0,0,-.180585,0,-.080055,.587118,0,-.851525,0,-.231936,.247478,0,0,-.336065,-.324008,0,-.308405,0,0,-.152738,-.137402,-.20346,-.576501,-.18589,-.285895,-.575972,-.225595,.614952,-.539442,.314935,-.282676,0,0,-.409828,0,.832147,.051754,0,.750119,0,1.188314,-.152738,1.180842,.050938,0,-.814776,0,0,.331367,-.057353,0,-.210225,-.175149,-.135299,-.268461,-.14966,0,-.37668,.830234,.002127,0,0,-.738098,0,-.151397,1.262129,-.070894,.677529,-.35888,-.268969,.284499,0,-.085016,-.135211,-.393936,-.20346,0,0,-.417818,-.283506,0,-.303235,-.444117,-.366516,.861135,-.122492,0,-1.2921,.861135,-.139994,-.514897,0,-.430036,-.359765,-.293825,.240168,-.554179,-.372355,-.577512,-.353553,-.634958,-.118881,-.338961,-.424446,-.097288,0,0,0,-.137402,-.378609,1.280366,-.178989,-.573011,0,-.296528,2.667143,-1.004817,-.20346,0,-.417976,-.354857,.465237,-.541486,0,0,0,0,.346204,0,.176948,-.139149,1.015222,0,-.581249,0,-.249529,0,0,-.704265,-.152738,-.04494,-.972949,-.171058,-1.249791,-.522249,-.151397,-.46125,0,-.199411,.386764,.87465,-.474571,-.151397,-.394611,-.823805,0,-.132357,.304622,0,0,0,0,-.258166,.852887,-.450841,0,-.209915,.432374,-.155481,-.122492,0,0,0,.901087,-.447958,1.484358,1.199115,.852887,-.056298,-.11145,-.075253,0,-1.056222,.508471,1.262129,.380146,-.20346,-.205378,0,0,-.846923,0,-.800245,1.020941,0,-.46171,-.773645,-.144969,-.122492,-1.392608,-.108187,0,-.698935,-.122492,.729195,0,-.210281,0,-.527468,-1.636029,0,1.058668,-.383338,-.472429,0,-.223942,0,.190914,1.14949,0,-.166937,-.149144,-.226522,0,.425346,-.142609,-.141249,-.522249,-.22293,-.151397,-.384735,0,-.298031,.6011,0,1.257205,2.331959,.247731,-.451412,1.545696,0,-.076782,-.231936,-.492685,0,-.070894,-.085601,.460013,1.099343,0,2.632481,-.324008,-1.074607,0,0,-.069137,0,-.481095,-.20346,-.090416,0,0,0,1.395633,0,.720094,0,-.189567,.490579,0,0,-.097288,1.099343,-.092607,0,0,0,-.599905,.565666,-.289869,0,-.09262,-.391629,-.087848,-.152738,-.14966,0,0,-.216306,-.135299,0,0,-.28283,-.366516,.976043,0,-.336065,-.200111,.91892,-.198579,0,-.263068],[-.334732,-.019767,.229405,0,0,1.291038,.217453,-.216663,.058135,.943642,-.295749,-1.410325,-.271145,-.301068,.845694,0,.475253,-.191935,0,0,0,.549668,-.110991,-.453594,0,-.302306,0,0,.798403,-.321615,-.214877,-.191935,-.432511,.328072,-.258998,-1.017775,0,-.64128,0,0,.393647,-.514311,-1.010269,1.022549,-.252968,0,.393266,-.334377,0,.632407,0,-.416116,0,-.615134,-.201441,-.25501,-.496149,0,1.001344,0,-.131514,-.175192,-.416116,.022087,-.694395,-.152785,-.018127,.312102,0,-.419164,.58129,0,0,-.247527,0,.329762,0,-.535434,0,-.267105,-.433688,-.488577,0,-2.159824,.404008,-.117236,-.162709,2.399899,-.247527,-.121541,-.411871,-.073391,0,0,-.292906,-.052228,-.378574,.277031,-.306289,-.129664,-.128024,.848158,-.337018,-.073912,0,-.225297,-.164541,0,-.216663,0,-.083083,0,-.08743,0,.791,-.164933,0,-.154584,-.453594,0,-1.093718,-.106143,0,0,-.990028,-.334732,-.325186,-.770556,0,0,-.289383,0,.011213,-.169977,.902681,-.269278,-.07657,.277031,.54775,0,-.114983,-.17968,0,-.210999,-.28685,1.293491,0,-.535434,0,0,-.933529,1.342974,1.376982,-.190028,.767776,-.183771,0,-.137764,.179975,1.510764,0,.901697,0,.017222,0,0,-.566062,-.968822,0,-.227192,-.131514,.848215,-.153181,0,.283535,0,.22143,-.208748,0,-.247527,-.334732,0,-.337018,-.201441,-.112913,0,0,0,-.297125,-.512786,-.531359,0,-1.50867,0,.04403,-.164541,1.488163,0,0,1.025101,.417414,0,0,-.252968,-.285831,-.099243,-.152785,-.475692,1.318575,.900499,.721218,-.268268,-.641492,0,-.544736,0,1.326715,.92245,0,0,-.320129,0,-.347127,-.307536,-1.124583,.873434,-1.128903,74e-6,-.153181,-.213534,-.124476,0,0,0,-.233567,-.297125,-1.397902,.782954,-.52107,-.302306,-.07657,-.350321,0,0,-.389142,.027984,-.261929,.14575,2.282186,.523205,0,.368455,-.771394,0,-.578048,0,0,0,-1.136533,-.137764,0,0,0,0,-.652853,-.094986,0,0,.873122,-.175192,0,-.432755,-.283302,.283864,0,-.334732,-.44181,.216568,-.137764,0,.715849,.541849,0,.820329,0,-.52107,.775362,-.233567,-.826768,-.121816,0,3.078291,0,.417414,-.270109,-.412207,0,-.117061,-.387083,-.127909,.902681,0,.091845,-.909111,0,.224882,.902681,0,-.225147,-.337018,0,0,-.249432,-.113922,-.453594,0,.980235,-.167683,.404008,-.199994,-.277775,0,.902681,.827475,-.117714,.086328,.234786,-.037769,-.334732,0,-.101563,.650056,0,-.317708,0,-.327876,.432443,-.352754,-.124561,-.281806,0,-.735083,0,1.423262,-.743614,.023757,-1.287659,1.657451,-.401015,0,.326307,-.130606,0,-.262084,0,-.508168,-.803187,-.335866,1.047165,0,-.233567,-.233567,-.25501,0,-.270109,.079606,-.137764,0,-.073391,0,.923417,.718509,0,-.113922,-.162709,.820329,.939506,0,-.337018,0,-.476951,.327817,0,-.277775,.738139,-.144199,1.799058,0,-.398649,0,0,-.175192,-.695395,0,-.5683,-.283302,.015691,.538491,0,.912741,2.56772,0,.552324,-.214877,-.406243,0,0,-.389626,-.202077,0,0,0,-.1513,0,.845694,.007421,.463613,.494417,-1.085652,-.45067,.718208,-.245623,-.117714,0,.959648,.768102,0,0,-.170778,-.768736,0,-.326462,1.326715,-.781991,1.405352,2.855217,1.009514,-.375436,0,-.109479,0,0,0,-.680372,-.094309,.66243,-.17583,-1.557275,-.420539,1.132446,1.001344,0,.564733,-.183201,0,-.020771,0,.926741,0,.58218,-.154584,-.47398,0,0,-.979535,-.164541,0,0,-.244728,0,1.527721,-.559334,0,.355748,0,-.376024,1.491424,0,0,-.646425,-.073391,0,-.127909,0,0,-.233567,-.283302,.902681,-.113922,.848215,-.0884,-.381852,-.216831,-.132738,.683674,-.061254,-.057215,0,0,-.768736,0,.405163,-.562406,0,-.091194,0,-.51658,-.233567,-.285413,-.183771,0,.483027,0,0,2.014568,-.522567,0,1.356919,1.025687,-.252968,-.324293,.271648,0,-.386352,-.545821,-.547308,0,0,-.777427,0,-.117714,-.216663,.420054,.474676,.666612,-.277775,-.519893,0,.417414,-.268116,-.22186,.902681,0,0,-.235029,-.429222,0,.798494,.747912,-.386695,-.052264,-.137764,0,-.894674,-.052264,-.10584,-1.928571,0,-.439122,-.614832,-.056707,-.942107,.503145,.768875,.210054,-.164541,-.40588,-.214877,.605685,.255512,-.154264,0,0,0,-.283302,1.928368,-.680079,-.175192,2.294885,0,-.066396,-.641953,-.212813,.902681,0,-.310183,.784967,-.913642,-.630268,0,0,0,0,.682494,0,-.775474,.941807,-.227471,0,-.621488,0,.179223,0,0,1.119528,-.233567,.224164,1.484592,-.334732,.941467,-.154584,-.117714,.465805,0,1.458092,-.318235,-.555522,.832219,-.117714,-.479215,-.17968,0,-.135888,.830088,0,0,0,0,.105751,-.144199,-.318806,0,-.276957,-.291821,-.401698,-.137764,0,0,0,-.359619,-.452967,-.389981,-.782098,-.144199,.342216,-.191146,-.069062,0,-.677773,-.294746,-.216663,.080046,.902681,-1.450991,0,0,-.669019,0,.068633,.380878,0,.745866,-.498635,-.247527,-.137764,1.501944,-.297125,0,.387322,-.137764,-1.320965,0,-.019797,0,.82929,1.222804,0,.686018,.20364,.624906,0,-.152785,0,-.863513,.179643,0,-.106168,1.664272,-.280855,0,-.626836,-.866635,-.304499,-.154584,-.355705,-.117714,-.854592,0,.10445,.118213,0,-.669747,-.455497,-.817125,-.28327,-.853755,0,-.124526,-.376024,-.107256,0,.420054,-.110991,.295074,-.112913,0,-.663226,-.073391,.562147,0,0,-.111084,0,-.153186,.902681,-.202077,0,0,0,-.473331,0,-.52107,0,1.132446,-.11443,0,0,-.154264,-.112913,-.956622,0,0,0,-.2847,.127767,-.466246,0,-.087788,-.585057,.413873,-.233567,.271648,0,0,1.18493,-.252968,0,0,1.318066,-.386695,.084188,0,-.646425,-.250108,-.226007,.45778,0,1.601443],[.895953,.162005,-.268384,0,0,-.090035,-.230338,-.192614,.515623,.626243,-.182206,2.306694,1.257483,-.179334,-.185736,0,-.782247,-.106047,0,0,0,.921746,.605721,-.310705,0,-.240091,0,0,-.339694,-.248161,-.136014,-.106047,-.355433,.703082,-.158912,.054946,0,2.900663,0,0,-.710536,1.157501,-.846005,1.416357,-.168113,0,.373567,-.273197,0,-.608255,0,-.187348,0,-.541802,-.143833,-.127257,-.313508,0,-.223279,0,-.176058,-.277459,-.187348,-.460939,2.035746,-.177189,-.314395,-.381462,0,-.192857,-.128016,0,0,-.251264,0,-.41166,0,1.861007,0,-.192053,-.19696,.796839,0,-1.224604,-.071668,-.366665,-.171238,-.259393,-.251264,-.050081,-.213067,-.042828,0,0,-.358042,-.056038,-.202459,-.046432,-.583275,-.056099,-.093922,-.314822,-.23272,-.090791,0,-.18179,-.164201,0,-.192614,0,-.48866,0,-.033464,0,-.163103,-.90763,0,-.102095,-.310705,0,1.296951,.379407,0,0,.874645,.895953,-.072591,-.13006,0,0,.358148,0,-.23376,-.166959,-.123077,-.251948,-.068416,-.046432,-.533984,0,-.086527,-.087824,0,-.144759,-.529606,.232466,0,1.861007,0,0,-.71074,-.432529,.105344,-.140089,.700817,-.162197,0,-.075891,-.191843,1.131823,0,-.229317,0,-.240896,0,0,-.356188,-.699431,0,-.204114,-.176058,-.125948,-.099883,0,-.160037,0,-.506824,-.138029,0,-.251264,.895953,0,-.23272,-.143833,-.080378,0,0,0,-.183169,-.437554,-.379648,0,-1.118777,0,1.612335,-.164201,-.496397,0,0,-.177804,-.04809,0,0,-.168113,.859897,.404063,-.177189,-.325524,-.290075,.411214,-.281846,-.183635,1.796932,0,-.283287,0,-.196002,-.359378,0,0,-.242139,0,-.374966,1.286487,-1.216023,-.313512,2.894071,1.393656,-.099883,-.206369,-.09611,0,0,0,.924096,-.183169,-.562055,-.100444,-.328438,-.240091,-.068416,-.442887,0,0,-.224792,1.63593,-.255758,-.437069,-.362153,-.25408,0,-.601251,-.468802,0,-.397807,0,0,0,-.850523,-.075891,0,0,0,0,.372024,-.071898,0,0,-.506707,-.277459,0,-.385672,-.118264,-.516288,0,.895953,-.324966,-.797378,-.075891,0,-.182041,-.317375,0,-.070911,0,-.328438,-.318975,.924096,-.445381,-.067511,0,-.04789,0,-.04809,-.22448,-.297955,0,-.400105,-.240779,-.090233,-.123077,0,-.164649,-.608769,0,-.163242,-.123077,0,-.132352,-.23272,0,0,-.145153,-.078708,-.310705,0,.647716,-.069248,-.071668,.521045,-.204035,0,-.123077,-.232604,-.10276,-.603396,-.273451,.141685,.895953,0,-.046427,-.347109,0,.418285,0,.885723,-.587816,-.327067,.654214,-.215409,0,-.47007,0,.447792,-.53598,.045474,-.507961,-.21314,-.221024,0,.2765,-.079983,0,-.198041,0,.679396,.282402,-.184757,-.21207,0,.924096,.924096,-.127257,0,-.22448,.055482,-.075891,0,-.042828,0,-.301558,.51359,0,-.078708,-.171238,-.070911,-.182317,0,-.23272,0,1.961132,-.06754,0,-.204035,-.287277,-.113478,.487752,0,-.298211,0,0,-.277459,-.659232,0,1.820049,-.118264,-.187216,-.463871,0,.382344,-.485964,0,-.308071,-.136014,-.290561,0,0,-.54583,.187386,0,0,0,-.061623,0,-.185736,1.502975,-.735892,-.12192,-.419538,-.546459,-.40966,-.192993,-.10276,0,.101961,-.126949,0,0,-.134385,-.471694,0,-.240789,-.196002,2.725194,-.294946,-.505227,-.544042,-.341497,0,-.101354,0,0,0,2.320434,-.038373,-.287443,-.12816,.48054,-.237577,-.184922,-.223279,0,.246796,.196607,0,.78331,0,.819003,0,-.416136,-.102095,1.566835,0,0,.659924,-.164201,0,0,1.208952,0,-1.140249,-.35954,0,1.276841,0,1.707597,.618601,0,0,2.466728,-.042828,0,-.090233,0,0,.924096,-.118264,-.123077,-.078708,-.125948,-.094697,-.252057,.499192,-.058083,-.290149,-.346139,-.037155,0,0,-.471694,0,-.478259,-.29971,0,-.062413,0,-.428998,.924096,-.134652,-.162197,0,-.204069,0,0,-.471313,-.046945,0,-.230406,-.17861,-.168113,.222027,-.153853,0,.746907,-.380603,-.301886,0,0,-.440791,0,-.10276,-.192614,-.095262,.566627,.672674,-.204035,-.411894,0,-.04809,.467957,-.208375,-.123077,0,0,1.252648,-.244231,0,.952462,-.382645,-.269097,-.064199,-.075891,0,-.599822,-.064199,-.106529,.659501,0,2.581304,.235116,-.041553,-.606638,-.439185,-.558731,-.309607,-.164201,1.251976,-.136014,-.227866,-.259463,.587345,0,0,0,-.118264,-.301687,-.433603,-.277459,-.577059,0,-.80968,-.362043,1.669289,-.123077,0,-.205269,-.225837,-.539102,3.41127,0,0,0,0,-.332513,0,-.537852,-.116583,-.147144,0,.723154,0,.262265,0,0,-.601104,.924096,-.648326,-.487478,.895953,.070283,-.102095,-.10276,.697006,0,-.14281,-.296754,-.359132,.432999,-.10276,-.347868,-.087824,0,-.083934,-.440343,0,0,0,0,-.246949,-.113478,.423144,0,1.440088,.107603,1.257776,-.075891,0,0,0,-.175295,-.481494,-.259758,-.495382,-.113478,-.038478,.829966,-.059954,0,1.744817,-.279543,-.192614,-.246972,-.123077,2.605991,0,0,-.426242,0,.522074,-.296315,0,-.401929,-.517199,-.251264,-.075891,.583871,-.183169,0,-.414048,-.075891,-1.104503,0,-.415266,0,-.165905,-.650206,0,-.315691,-.08926,-.327112,0,-.177189,0,-.601359,-.137989,0,-.05375,-.399655,-.162568,0,.125892,-.638723,-.192706,-.102095,.443511,-.10276,-.543989,0,-.2598,.79639,0,-.338014,-.555059,-.668696,.792782,-.585455,0,-.063376,1.707597,-.339572,0,-.095262,.605721,-.169259,-.080378,0,-.356102,-.042828,-1.118636,0,0,.516038,0,-.091544,-.123077,.187386,0,0,0,-.224503,0,-.328438,0,-.184922,-.047028,0,0,.587345,-.080378,-.600265,0,0,0,-.267601,.378655,.719895,0,.010396,.755588,-.400473,.924096,-.153853,0,0,-.136179,-.168113,0,0,-.174366,-.269097,-.311469,0,2.466728,.525087,-.196627,.476376,0,-.314253]]}},sketch:{hidden:{bias:[-.023322,.029061,.017083,.007727,-.017201,-294e-6,.026263,.027833,.00789,.0089,.016417,.006445,-.00161,-.04502,-.019333,.003855,.012083,.007271,-.009306,183e-6,.006085,-.015462,.031946,-.009375,.018234,-.006376,.039073,-.024571,-.012132,-.003771,-.009237,-.032968],weights:[[-.060751,-.24035,-.005564,.047451,.088283,.039633,.167959,.199234,.220366,.033374,-.082425,.081412,-.318637,.183891,-.098441,.087691,.032937,-.002758,-.111298,-.205279,-.160126,-.136593,.205502,.097439,.137639,-.040375],[.038633,.222147,.090894,-.337963,-.048667,-.179287,-.081101,-.00909,-.160493,.026948,-.04821,-.102784,.092612,-.152493,-.038895,-.021023,.03782,-.042619,.089159,.35659,.417587,.115016,-.236576,.024568,.025884,-.028059],[-.02858,-.099714,.076344,-.063813,.065577,-.115232,.077307,.267719,.045737,.078145,.185103,-.01312,.049264,-.130048,-.260367,.047133,-.030107,.131309,-.078946,-.130276,.319508,-.062012,-.105317,-.003325,.135853,.12652],[-.146408,-.241094,.037578,.088878,.275172,.167983,.100596,-.215768,.065885,-.040976,-.116061,.132206,.134379,.296739,.191572,-.179163,-.064895,.044857,-.154174,-.109672,-.260784,.145131,.047364,.195494,.006991,-.050698],[-.331339,-.315987,.114286,213e-6,-.02503,.074881,-.202038,.044023,.112517,.156438,.09292,.113792,.133229,.208459,.007061,-.083199,-.166071,.030598,-.454196,-.051918,.127771,.232979,.021455,-.125224,.030842,.115077],[.150995,-.024344,.310532,-.200473,-.027969,.081372,.005612,.177957,.017818,-.041633,.222648,.049791,.011095,-.281476,.031354,.152581,.164359,.043181,.008766,.080964,-.153293,.269752,.242147,-.177284,-.014634,.129387],[-.028068,403e-6,-.220963,.088389,.093085,.079139,-.222151,.081146,.013503,-.064536,.032233,.110644,.019378,-.018209,.117795,.054351,-.16787,.125854,.037102,-.14019,.09094,.156666,-.139805,.120727,-.214575,-.067019],[.062565,.135488,.053602,.180577,-.14733,-.099142,-.089299,-.080523,-.138365,.048689,-.03561,-.143531,-.188375,-.203581,-.145541,.015454,-.111606,-.055256,.04004,.12129,.048721,-.049632,.056494,-.047832,.036617,-.143688],[-.244241,-.107884,.046253,-.121273,.058803,-.030976,.037312,.101332,-.023017,-.070925,.211344,-.035892,.025456,-.005464,.174219,.107225,-.012615,.108001,-.077815,.041352,-.397244,.118308,.095429,.016279,.183039,-.334903],[.147899,-.151422,-.012893,-.192367,.090994,-.365359,.213844,-.052537,-.11845,.066863,-.061495,.106682,.047195,-.077066,.037345,-.142653,.140158,-.19983,.214304,-.030468,.01427,-.206151,-.095185,-.220717,.084653,.063776],[.1736,.10579,.21114,.184897,-.014935,-.086113,-.267822,-.028749,.202128,.203534,.085823,-.122768,.027945,.011112,.029455,.044986,-.021638,-.486996,-.057784,-.112241,.209184,-.051212,-.150395,-.153285,.303061,-.036433],[.02218,-.143727,-.062056,-.11257,-.001585,-.040462,-.128368,-.118613,-.097707,.015193,.007536,.065351,-.246284,-.03879,.315975,.188074,.229542,.095645,.234764,.009163,.055626,-.100696,-.067047,-.181467,.055413,-.020004],[-.089326,-.205644,-.177693,-.086062,-.030743,-.322209,.07584,.148244,-.105206,-.047934,.207134,.030467,.181087,-.195294,-.173025,.089914,.039715,.098539,-.031311,-.05842,.242507,-.031305,-.194829,.301194,.311979,-.114814],[-.027424,.223717,.15758,.278487,-.099967,.327002,.098762,.081198,.014707,.193277,.071131,.08554,.115099,-.22981,-.085104,.087312,-.065697,-.099761,-.193668,-.340597,-.122486,-.022236,-.039876,-382e-6,-.026205,-.098716],[-.103162,-.004505,-.416894,.013404,-.236785,.153464,.133238,.350735,.008367,-.172387,-.030746,.147589,-.116293,-.280942,.306195,-.122455,-.133676,-.198133,-.070509,.047464,.254752,.140646,.149914,-.049212,.044704,.030474],[.018773,.092501,-.065332,-.064154,.11091,-.157019,-.134134,.11234,-.048999,.013636,.209713,.211303,-.054777,-.038095,-.10639,-.036799,-.061321,.200232,.072729,-.083708,.001788,.039369,-.123653,-.086774,-.066629,-.116588],[.004102,.10645,.412523,-.087035,.38767,.178845,.083956,-.176524,-.084094,-.099559,-.238944,-.322519,-.356158,-.050267,.04781,-.180098,-.001611,-.160082,-.062904,-.03852,-.121164,-.150979,.175434,.153736,.276579,.320026],[.093017,-.080688,.036148,.157079,962e-6,.142027,.080573,.209746,-.157331,-.156366,.007033,-.139707,.014705,.164196,-.001989,-.078338,.089675,-.107288,.148412,-.140225,.081129,.038229,-.242371,.047464,-.041433,-.072838],[-.00401,.018126,.126923,.096589,.14122,-.01878,.136826,-.210573,-.005165,-.002464,.001511,.106869,-.019784,.086083,.086589,-.189274,-.161954,-.192248,-.071518,-.124149,.244351,.153538,-.198676,.119584,.104358,-.0949],[-.104804,-.003804,-.258599,-.219357,-.282564,.00978,-.057715,-.022467,.053614,.023109,-.031528,-.117435,-.32737,.079999,.175183,.152286,.2235,.201878,.142612,-.062383,.012628,.032735,.074978,.280137,-.139614,.025303],[.087456,-.133417,-.065712,.066487,-.101491,-.064329,-.045821,-.03006,.052901,.250284,-.162155,.297054,.364289,-.073896,.107871,.105438,.08744,-.265058,.150348,-.077816,-.004014,-.079989,-.04286,-.113252,-.205949,-.028928],[-.170112,-.031277,-.102512,-.229596,-.152054,-.060807,.026782,-.136505,-.053868,-.187488,.017022,.147735,.226442,.282907,-.140554,.148938,-.063068,.039983,.082905,-.064319,.003222,-.131663,-.031331,.308673,.114819,-.235589],[-.240179,.001046,.243499,-.212801,-.1325,.150186,-.107808,-.001003,-.061715,-.038908,-.131821,-.128608,.043534,.009651,.110542,.291048,.202743,-.103336,.284471,-.065578,-.284286,-.05497,-.187924,-.18823,.188884,.255115],[.095842,-.125232,-.091063,-.041976,.0309,.089457,.113778,-.046776,-.012878,-.06883,.058021,-.101863,.066298,-.211417,.060267,496e-6,-.252217,-.062216,-.145043,.093851,.308817,.137617,-.076707,.049655,.161662,-.227265],[-.319733,.174533,-.378238,.041905,.171516,.082894,-.130852,.008942,-.259891,.031723,.330665,-.181243,-.154395,.049481,.024425,.097888,.053783,.026206,-.12259,.074971,.311633,-.22785,.241764,-.049501,-.029073,.024943],[.026988,-.146239,.058567,-.237371,.063394,.049805,.05819,.029152,.206635,.107951,-.078005,.028732,-.03012,.098207,-.067235,.048516,-.098849,-.123627,-.228383,.04466,.210178,-.086784,.02158,.070147,-.022102,.060218],[.139346,.10209,.267254,-.145911,-.022349,.187883,-.130577,-.046042,-.06198,.047348,.16534,-.064359,.103487,.207061,-.075965,-.235887,.223083,-.015335,-.006653,.200642,.093765,.281078,.139472,-.123586,-.182197,-.151836],[-.054544,-.075561,-.138861,-.219861,.128944,.153134,.253546,.353028,.380683,.293332,.215713,-.070204,.004939,-.004507,.251628,-.032477,.121719,-.22945,-.305532,-.130451,-.086495,-.225384,-.157765,-.21272,-.088073,.026425],[.026789,.159235,-.28531,.029784,.04366,-.19742,-.020042,.064621,.049316,.044145,-.184701,-.199281,-.020126,-.297628,.126412,.001492,-.159741,-.076755,.039695,.024154,-.068717,.179556,.178661,.021844,.125547,.136885],[-.355104,-.189574,-.186325,-.108562,.255344,-.073162,.340033,.105104,-.016028,-.181776,.048591,.050084,-.074229,.251399,.037425,.013686,.120502,-.208362,-.140252,-.108994,.224146,.080972,-.073625,-.136004,.067115,.161918],[.067348,-.08044,.069565,.152896,-.195147,.195908,-.331441,.11752,-.08095,-.194796,-.109564,-.142906,-.179714,-.055137,-.003753,-.031951,-.330756,-.01303,.051409,-.114108,.12456,-.213905,-.25695,.468765,.04324,.02232],[.071526,-.017636,-.064874,-.36082,.403547,.222447,.173555,.279449,.123541,.014148,-.01334,-.08329,.093847,-.088461,.228503,-.147745,.070548,-.037863,.017601,.117004,-.270778,-.222743,-.212071,.153966,-.116208,.005073]]},output:{bias:[.882172,.850937,.834996,.818901,.932164,.850905,.84615,.843355,.838985,.796811,.827962,.855349,.788353],weights:[[-.15453,.033534,.056398,-.220771,-.060682,-.17206,.029064,-.028519,-.203841,-.017362,.00485,.05646,.068145,.184494,-.049771,.02221,.117385,-.044769,.003059,-.117862,-.078114,-.018362,-.253455,.122719,-.249802,-.117171,.026689,-.113024,.067399,-.286285,-.143128,-.020878],[-.037562,.083848,.158177,.104144,-.24735,.056044,.019822,.359717,-.20723,-.034046,.094441,-.213348,.01202,.05433,-.013403,.191327,.084928,-.115778,.083515,-.145478,-.014603,-.085735,-.083981,-.026071,-.129367,-.11266,.066906,-.074082,.062803,-.132814,.011816,.008288],[-.008445,.059025,-.040685,.105171,-.020332,.245537,-.052921,.153671,-.124679,-.041071,-.039976,-.106598,-.038607,.111189,.036886,.029998,.070109,.157277,.181038,-.301135,-.078539,-.130929,-.139548,-.013399,.011132,.007739,-.139945,-.092098,.054478,-.229479,.107677,-.027574],[-.080369,-.299332,.03567,-.117083,-.011327,-.082506,-.086906,.029144,.007823,-.127087,.120769,-.17149,-.086754,.072095,.016805,-.033877,.106942,-.00881,.181007,-.298434,-.116784,-.15788,.024635,.20204,.119539,-.008117,.206152,-.177253,-.016319,.048376,.086262,.130289],[.143528,-.042319,.03097,.126887,-.071918,-.199085,.159638,.210824,.010762,-.078521,-.044563,-.144356,.020251,.13549,-.035182,-.165021,.264395,.023645,.244251,-.229542,.165561,-.196629,.031229,.127158,.040734,.060647,.155528,.042712,-.0436,.078006,.101699,.064568],[.064549,-.077469,.007531,.140177,.045662,-.065489,-.165474,-.056221,-.052652,-.108991,.006566,-.135395,-.135014,.210261,.124569,.065396,.210442,.200453,-.016913,-.042416,-.183369,.029958,.052281,-.010906,.018041,.08208,-.134759,.125229,-.071949,.13745,-.034057,.022688],[.274384,-.095107,-.080398,-.060584,.06815,-.007039,-.027158,-.21369,-.02954,-.028214,-.066367,.095183,-.02659,.200273,-.145285,-.17966,.063657,.282681,.085182,-.121786,.010717,.089059,.006576,.221914,.039191,-319e-6,-.139213,.266268,.204828,.038865,-.037485,.138974],[.009263,-.326403,-.025071,.008269,-.137233,.040052,.051001,-.071182,-.029607,-.110744,.064435,.070149,.060194,-.025107,.064243,-.060803,-.014465,-.007895,-.122344,-.081144,-.066567,-.032836,.057691,.094227,-.045499,.201531,-.212673,.361918,-.147397,.011579,-.056441,.094718],[.2463,.015708,.073417,-.221949,.043122,-.030997,.011318,-.045282,.047317,.091564,.067384,-.089255,.027058,.035866,-.008476,.128119,.036662,.025235,-.099838,.156045,.048756,.130666,.005911,-.168152,-.207524,-.19858,-.032899,.311152,-.005574,.012601,-.166029,.27085],[.044806,-.066043,-.093011,-.114561,-.018267,.179809,-.208238,-.198568,-.04387,.139154,-836e-6,.004524,-.035246,.175519,-.017214,.262242,-.347096,-.212737,-.029166,.095663,-.084993,-.054367,.030665,-.074841,-.037615,.012472,.016503,.147762,-.13309,.068336,.11319,.21064],[-.124525,-.129457,.137496,-.006244,-.072316,-.060154,.049142,.104443,.096011,.066444,-.058543,.173329,.022214,.074143,-.147261,-.013954,-.33379,-.08921,.196208,-.011981,.236556,.003378,.020029,.072657,.023805,.124562,.072615,.135051,-.04488,-.076718,-.128573,.147302],[-.0532,.046554,.083302,.074394,-.082988,-.014616,.183834,.064414,.053715,.219619,.029453,.070954,-.006923,.152645,-.142076,-.061497,-.382916,-.112567,-.056799,-.134525,.106852,.102405,-.032522,.169454,.020871,-.108446,.098099,.112452,-.062153,-.149898,-.136933,.08477],[-.140055,.074708,-.137362,-.090745,-.064757,.036555,.077635,-.119919,.145704,-.21426,-.169943,.127571,.008933,.036723,-.04479,.117294,-.262778,-.004585,.015723,-.36996,.373703,.082471,-.181474,.050134,.044984,-.004116,-.029069,.094922,-.149114,-.180984,-.04566,-.08037]]}}},Ns=/([-+−]?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+))[ \t]*(毫米|厘米|mm|cm)?/g,Fs=/[,，;；、。!?！？\n]/,ir=["length","diameter","bore","circumference","wall"],Mr=["kind","side","support","finger"],$7={kind:"unknown",side:"neutral",support:!1,finger:!1},Os=.65,J7=.62;function rr(i,e,t,n){const r=new Float64Array(i);let s=0;if(n.forEach((a,o)=>{const l=Array.from("^"+a.replace(/\s+/gu," ").trim()+"$",c=>c.codePointAt(0));for(let c=e;c<=t;c++)for(let h=0;h<=l.length-c;h++){let u=2166136261^o;for(let f=h;f<h+c;f++)u=Math.imul(u^l[f],16777619);r[(u>>>0)%r.length]++,s++}}),s)for(let a=0;a<r.length;a++)r[a]=Math.sqrt(r[a]/s);return r}const Bs=(...i)=>rr(Wt.featureWidth,1,3,i);function sr(i,e){return i.weights.map((t,n)=>t.reduce((r,s,a)=>r+s*e[a],i.bias[n]))}function m1(i,e){const t=Wt.heads[i],n=sr(t,e),r=Math.max(...n),s=n.indexOf(r);return{value:Wt.labels[i][s],confidence:1/n.reduce((a,o)=>a+Math.exp((o-r)/(t.temperature??1)),0)}}function Q7(i){const e=xr(i).replace(Ns,"#"),t=Bs(e),n=new RegExp("\\p{Script=Han}","u").test(e),r=n?"kind":"kindLatin",s=n?rr(Wt.categoryWidth,1,3,[e]):rr(Wt.categoryWidth,2,5,[e]),a=Object.fromEntries(Mr.map(h=>[h,h==="kind"?m1(r,s):m1(h,t)])),o=Ea(i),l=Array.from(o.matchAll(Ns)),c=l.map((h,u)=>{const f=u?l[u-1].index+l[u-1][0].length:0,p=h.index+h[0].length,v=o.slice(f,h.index).split(Fs).at(-1).slice(-25),g=o.slice(p,l[u+1]?.index).split(Fs)[0].slice(0,25);return{...m1("slot",Bs(v,g)),mm:Number(h[1].replace("−","-"))*(["厘米","cm"].includes(h[2])?10:1),span:[h.index,h.index+h[1].length],unit:h[2]??null}});return{intent:a,slots:c}}function e8(i){const e=Aa(i);if(!e)return null;const t=[...e.map(s=>s??0),...e.map(s=>+(s!==null))],n=sr(Wt.sketch.hidden,t).map(Math.tanh);return{profile:sr(Wt.sketch.output,n).map(s=>Math.max(.66,Math.min(1,s))),coverage:t.slice(13).reduce((s,a)=>s+a,0)/13}}function t8(i,e="auto"){const{raw:t,dimensions:n,blocked:r}=X7(i,e),s=Object.fromEntries([...Mr,...ir].map(l=>[l,{source:t[l]===void 0?"default":"rule"}])),a=new Set(r);for(const[l,{span:c}]of Object.entries(n))a.add(c[0]),s[l].span=c;let o;try{o=Q7(i)}catch{}if(o&&i.trim()){const c=t.kind!==void 0||o.intent.kind.value!=="unknown"&&o.intent.kind.confidence>=Os||Object.values(t).some(u=>u!==void 0);for(const[u,{value:f,confidence:p}]of Object.entries(o.intent))c&&p>=Os&&f!==$7[u]&&(u!=="kind"||e==="auto")&&t[u]===void 0&&(t[u]=f,s[u]={source:"text",confidence:p});const h={};for(const u of c?o.slots:[])ir.includes(u.value)&&t[u.value]===void 0&&u.unit&&!a.has(u.span[0])&&u.confidence>=J7&&u.confidence>(h[u.value]?.confidence??0)&&(h[u.value]=u);for(const[u,{mm:f,confidence:p,span:v}]of Object.entries(h))t[u]=f,s[u]={source:"text",confidence:p,span:v}}return e!=="auto"&&(s.kind={source:"manual"}),{raw:t,provenance:s}}function n8(i,e=[],t="auto"){const{raw:n,provenance:r}=t8(i,t);let s;try{s=e8(e)}catch{}const a=new Map,o=ba(n,t,a),l=s?.profile??q7(e);r.profile=s?{source:"sketch",coverage:s.coverage}:{source:l?"rule":"default"};for(const h of[...Mr,...ir])(!(h in o)||h==="finger"&&o.kind!=="brace"||h==="support"&&o.kind==="brace")&&delete r[h];const c=Object.fromEntries(Object.entries(n).filter(([,h])=>h!==void 0));return{...wa(o,l),extracted:c,provenance:r,parameterWarnings:a}}const i8=[{kind:"pen",icon:"✎",label:"握笔器",note:"细杆适配 · 握力辅助",description:"右手握力弱，握笔器直径28mm，孔径10mm，长度45mm",profile:[.7,.86,1,.91,.96,.69]},{kind:"utensil",icon:"♧",label:"餐具手柄",note:"加粗握持 · 勺叉套筒",description:"左手轻微震颤，需要勺子手柄，直径36mm，孔径13mm，长度95mm",profile:[.65,.8,1,.92,.83,.69]},{kind:"brace",icon:"◫",label:"矫形护具",note:"开口结构 · 腕指适配",description:"右侧 wrist brace，前臂周长18cm，长度65mm，壁厚4mm",profile:[.66,.74,.88,.98,1,.83]}];function r8(i){const e=[],t=[];return i.forEach((n,r)=>{const s=.15+.7*r/(i.length-1);e.push([.5-.23*n,s]),t.push([.5+.23*n,s])}),[[...e,...t.reverse(),e[0]]]}const te=i=>document.getElementById(i),Be=te("sketch"),It=Be.getContext("2d");let Ye=[],St=null,Qe=null,ye=null,Ca=!1;function Yt(){const i=Be.getBoundingClientRect(),e=window.devicePixelRatio||1;Be.width=Math.max(1,Math.round(i.width*e)),Be.height=Math.max(1,Math.round(i.height*e)),It.strokeStyle="#007867",It.lineWidth=2.75*e,It.lineCap="round",It.lineJoin="round";for(const t of Ye)It.beginPath(),t.forEach(([n,r],s)=>It[s?"lineTo":"moveTo"](n*Be.width,r*Be.height)),It.stroke();te("sketch-hint").hidden=Ye.length>0,te("undo").disabled=te("clear").disabled=Ye.length===0}function Pa(i){const e=Be.getBoundingClientRect();return[(i.clientX-e.left)/e.width,(i.clientY-e.top)/e.height].map(t=>Math.max(0,Math.min(1,t)))}Be.addEventListener("pointerdown",i=>{Qe!==null||i.button!==0||Ye.length>=60||(Qe=i.pointerId,Be.setPointerCapture(Qe),St=[Pa(i)],Ye.push(St),Yt())});Be.addEventListener("pointermove",i=>{if(i.pointerId!==Qe||!St||St.length>=1200)return;const e=Pa(i),t=St.at(-1);Math.hypot(e[0]-t[0],e[1]-t[1])<.002||(St.push(e),Yt())});for(const i of["pointerup","pointercancel","lostpointercapture"])Be.addEventListener(i,e=>{e.pointerId===Qe&&(St.length<2&&Ye.pop(),St=Qe=null,Yt())});te("undo").onclick=()=>{Qe===null&&(Ye.pop(),Yt())};te("clear").onclick=()=>{Qe===null&&(Ye=[],Yt())};new ResizeObserver(Yt).observe(Be);function s8(){const i=te("preview"),e=new x7({antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(e.domElement);const t=new S2,n=new Oe(36,1,.1,2500),r=new S7(n,e.domElement);r.enablePan=!1;const s=()=>e.render(t,n);r.addEventListener("change",s),t.add(new P2(15204341,2966088,2.1));for(const[u,f,p,v,g]of[[16777215,2.6,80,110,130],[7661770,2.2,-85,10,-60]]){const m=new U2(u,f);m.position.set(p,v,g),t.add(m)}const a=new N2(130,20,4552565,3365722);t.add(a);const o=new w2({color:6610619,metalness:.15,roughness:.37});let l;function c(){if(!l)return;const{center:u,radius:f}=l.geometry.boundingSphere,p=Qs.degToRad(n.fov/2),v=1.12*f/Math.sin(Math.atan(Math.tan(p)*Math.min(1,n.aspect)));n.position.copy(new N(1.15,.72,1.2).normalize().multiplyScalar(v).add(u)),r.target.copy(u),r.minDistance=f*.85,r.maxDistance=f*6,r.update()}function h(){const u=i.clientWidth,f=i.clientHeight;e.setSize(u,f),n.aspect=u/f,n.updateProjectionMatrix(),c(),s()}return new ResizeObserver(h).observe(i),({vertices:u,faces:f})=>{l&&(t.remove(l),l.geometry.dispose());const p=new nt;p.setAttribute("position",new ze(u.flat(),3)),p.setIndex(f.flat()),p.rotateX(-Math.PI/2),p.computeVertexNormals(),p.computeBoundingSphere(),l=new $e(p,o),t.add(l),a.scale.setScalar(Math.max(.65,p.boundingSphere.radius/49)),a.position.y=-.13,c(),s()}}let Da;try{Da=s8()}catch{te("preview-error").hidden=!1,te("preview-error").textContent="此设备无法启用 WebGL。仍可生成模型、查看检查结果并下载 STL。"}const Le=(i,e=1)=>i.toFixed(e),zs=te("results"),Sr={kind:"类别",side:"侧别",support:"握力辅助",finger:"腕／指模板",length:"长度",diameter:"外径",bore:"孔径",circumference:"周长",wall:"壁厚",profile:"轮廓"},a8={pass:"通过",warn:"警告",fail:"未通过"},La="浏览器几何筛查和简化力学估算，不是实际切片、实体打印或临床验证；护具仅用于设计展示。",Ua={left:"左侧",right:"右侧",neutral:"未注明侧别"};function j0(i,e,t){const n=document.createElement(i);return t&&(n.className=t),n.textContent=e,n}function o8(i){const e={text:"文字模型",sketch:"草图模型",rule:"规则回退",default:"模板默认",manual:"手动输入"},t=Object.entries(i).map(([s,a])=>{const o=a.confidence!==void 0?" "+Le(a.confidence*100,0)+"%":a.coverage!==void 0?"（采样覆盖 "+Le(a.coverage*100,0)+"%）":"";return Sr[s]+"："+e[a.source]+o}),n=j0("details","","result-text"),r=Object.values(i).filter(s=>s.source==="text"||s.source==="sketch").length;return n.append(j0("summary","参数来源："+r+" 项由本地模型推断"),j0("p",t.join("；")+"。文字百分比为模型分数，不代表真实请求上的正确概率；草图覆盖率为有效扫描线比例。")),n}function l8(){const{params:i}=ye,e=te("parameter-fields");e.replaceChildren();function t(n,r){const s=j0(r?"select":"input","");if(s.name=n,r)for(const[o,l]of Object.entries(r)){const c=j0("option",l);c.value=o,s.append(c)}else s.type="number",s.required=!0,s.step="any";const a=j0("label",Sr[n]+(r?"":"（mm）"));s.value=i[n],a.append(s),e.append(a)}t("length"),i.kind==="brace"?(t("circumference"),t("wall"),t("finger",{false:"护腕",true:"护指"})):(t("diameter"),t("bore"),t("support",{false:"标准",true:"加粗默认外径"})),t("side",Ua),te("parameter-editor").hidden=!1}function Ia(i){return[{name:"闭合流形",status:i.manifold?"pass":"fail",explanation:i.manifold?"网格闭合、面方向一致且无退化三角形。":"网格未满足闭合定向要求：异常边 "+i.nonManifold+"、异常顶点 "+i.badVertices+"、退化三角形 "+i.degenerate+"；有向体积 "+Le(i.volume/1e3,3)+" cm³。"},{name:"最小壁厚",status:i.wallPass?"pass":"fail",explanation:Le(i.minWall,2)+" mm；筛查要求至少 1.60 mm。"},{name:"下向悬垂",status:i.overhangPass?"pass":"warn",explanation:i.overhangPass?"未检测到非底面超过 45° 的下向悬垂。":Le(i.overhangPercent,2)+"% 的表面属于非底面超过 45° 的下向悬垂；请调整朝向或在切片时评估支撑。"},{name:"构建空间",status:i.fits?"pass":"fail",explanation:"外包尺寸 "+i.size.map(e=>Le(e)).join(" × ")+" mm；"+(i.fits?"在":"超出")+" 220 × 220 × 250 mm 的参考构建空间。"}]}function Na(i){const{params:e,profile:t,checks:n}=i,r=[...e.warnings];return Ca&&!t&&r.push("未提取到可用轮廓，改用默认外形。"),n.printable||r.push("几何筛查未全部通过，建议修改尺寸或轮廓后再导出。"),r}function c8(i,e){const t=["length","diameter","bore","circumference","wall"].flatMap(n=>{if(i[n]===void 0)return[];const r=e[n]===void 0?"（不用于当前模板）":e[n]!==i[n]?"（建模 "+e[n]+" mm）":"";return[Sr[n]+" "+i[n]+" mm"+r]});return j0("p","从原始请求提取的尺寸："+(t.join(" · ")||"无"),"result-text")}function Fa(i,e){const{params:t,checks:n,profile:r,extracted:s}=ye,a=t.kind==="brace"?t.finger?"护指":"护腕":wi[t.kind].label,o=Ua[t.side];te("model-label").textContent=a+" · "+o+" · "+(r?"已应用草图":"默认轮廓")+" · "+Le(i)+" ms",Da?.(ye);const l=j0("ul","","check-list");for(const{name:p,status:v,explanation:g}of Ia(n)){const m=j0("li","");m.append(j0("span",a8[v],"badge "+v),j0("strong",p),j0("p",g,"result-text")),l.append(m)}const c=j0("dl","","metrics");for(const[p,v]of[["体积",Le(n.volume/1e3)+" cm³"],["PLA 实心质量",Le(n.mass)+" g"],["预计用时（实心）",Le(n.minutes)+" min"],["最小壁厚",Le(n.minWall,2)+" mm"]]){const g=j0("div","");g.append(j0("dt",p),j0("dd",v)),c.append(g)}const h=t.kind==="brace"?"周长 "+t.circumference+" mm · 名义壁厚 "+t.wall+" mm":"名义外径 "+t.diameter+" mm · 孔径 "+t.bore+" mm",u=n.structure;zs.replaceChildren(j0("h3","校验报告"),l,j0("p",La,"result-text"),c,j0("p",h,"result-text"),c8(s,t),j0("p","仿真估算："+u.model+"，载荷 "+u.load+" N，弯曲应力 "+Le(u.stress,2)+" MPa，参考裕量 "+Le(u.factor,2)+"×（PLA 参考强度 35 MPa）。","result-text"),o8(ye.provenance));const f=Na(ye);f.length&&zs.append(j0("p",f.join(" "),"result-text warnings")),te("download").disabled=!1,te("download-report").disabled=!1,document.querySelectorAll(".preset").forEach(p=>p.setAttribute("aria-pressed",String(p.dataset.kind===e))),l8()}function Oa(i){if(Qe!==null)return;const e=performance.now();Ca=Ye.length>0,ye=n8(te("description").value,Ye,te("family").value),Fa(performance.now()-e,i)}for(const i of i8){const e=j0("button","","preset");e.type="button",e.dataset.kind=i.kind,e.setAttribute("aria-pressed","false");const t=j0("span","");t.append(j0("strong",i.label),j0("small",i.note));const n=j0("span",i.icon,"symbol"),r=j0("span","↗","arrow");n.setAttribute("aria-hidden","true"),r.setAttribute("aria-hidden","true"),e.append(n,t,r),e.onclick=()=>{Qe===null&&(te("description").value=i.description,te("family").value="auto",Ye=r8(i.profile),Yt(),Oa(i.kind))},te("presets").append(e)}te("generate").onclick=()=>Oa();te("parameter-editor").onsubmit=i=>{if(i.preventDefault(),!ye)return;const e=Object.fromEntries(Array.from(new FormData(i.currentTarget),([n,r])=>[n,n==="side"?r:["finger","support"].includes(n)?r==="true":Number(r)])),t=performance.now();ye=Y7(ye,e),Fa(performance.now()-t)};function Ba(i,e,t){const n=URL.createObjectURL(new Blob([i],{type:e})),r=j0("a","");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}te("download").onclick=()=>{ye&&Ba(Z7(ye),"model/stl",ye.params.kind+"-prototype.stl")};te("download-report").onclick=()=>{if(!ye)return;const{params:i,checks:e,extracted:t,provenance:n,profile:r}=ye,s={notice:La,lengthUnit:"mm",extracted:t,params:i,checks:e,screening:Ia(e),warnings:Na(ye),provenance:n,profile:r};Ba(JSON.stringify(s,null,2),"application/json",i.kind+"-check-report.json")};te("presets").firstElementChild.click();
