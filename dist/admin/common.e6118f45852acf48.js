"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[592],{7138:(P,E,a)=>{a.d(E,{f:()=>M});var e=a(529),u=a(1135);const l={production:!1,baseApi:"https://crud-hiz5.onrender.com/tasks"};var n=a(4650);let M=(()=>{class r{constructor(t){this.http=t,this.userData=new u.X({})}getAllUrs(t){console.log("filter ds getAllUrs ds usersservice",t);let s=new e.LE;return t&&Object.entries(t).forEach(([D,o])=>{o&&(s=s.append(D,o))}),this.http.get(l.baseApi.replace("tasks","auth")+"/users",{params:s})}deleteserv(t){return this.http.delete(l.baseApi.replace("tasks","auth")+"/user/"+t)}changeStatuserv(t){return console.log("model ds service",t),this.http.put(l.baseApi.replace("tasks","auth")+"/user-status",t)}getAllUsers(t){console.log("model ds getAllUsers ds service",t),this.getAllUrs(t).subscribe(s=>{this.userData.next({data:s.users,total:s.totalItems})})}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(e.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1500:(P,E,a)=>{a.d(E,{q:()=>A});var e=a(7957),u=a(8242),l=a(4859),n=a(811),M=a(3546),r=a(6709),i=a(5938),t=a(782),s=a(7392),D=a(4144),o=a(1948),v=a(4385),d=a(6308),g=a(671),c=a(9602),m=a(3238),O=a(4650);let A=(()=>{class _{}return _.\u0275fac=function(U){return new(U||_)},_.\u0275mod=O.oAB({type:_}),_.\u0275inj=O.cJS({imports:[e.Bb,m.XK,u._r,l.ot,n.vV,M.QW,r.p9,i.Is,t.N6,s.Ps,D.c,o.Fk,v.LD,c.FA,d.JX,g.p0]}),_})()}}]);