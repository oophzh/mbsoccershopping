(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{atO0:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),i=u("ZZ/e"),r=function(){function l(l,n,u,t,e){var i=this;this.route=l,this.router=n,this.translate=u,this.nav=t,this.platform=e,this.failCode="",this.showFailReason=!0,this.orderId="",this.route.queryParams.subscribe(function(l){i.orderId=l.orderId,0==l.result?(i.isSuccess=!1,i.failCode=l.failCode):i.isSuccess=!0})}return l.prototype.ngOnInit=function(){var l=this;this.showFailReason="EC1004"==this.failCode,this.platform.backButton.subscribe(function(){l.androidBackButtonHandle()})},l.prototype.androidBackButtonHandle=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){return this.back(),[2]})})},l.prototype.back=function(){this.nav.navigateForward(["/mine/order"])},l}(),o=function(){return function(){}}(),b=u("pMnS"),c=u("A7o+"),a=u("oBZk"),s=u("Ip0R"),f=u("ZYCi"),d=t.ob({encapsulation:0,styles:[[".result-info[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-direction:column}.result-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:27%}.result-info[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%]{font-size:1rem;color:#333;margin:.5rem 0}.result-info[_ngcontent-%COMP%]   .fail-reason[_ngcontent-%COMP%]{font-size:.6rem;color:#333;padding:.5rem;line-height:1.75}.result-info[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:1rem;width:100%}.result-info[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%]{flex:1;background:#ea5455;border-radius:3px;text-align:center;padding:.5rem 0;color:#fff;font-size:.7rem;margin-right:1rem}.result-info[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .order-btn[_ngcontent-%COMP%]{flex:1;background:#ea5455;border-radius:3px;text-align:center;padding:.5rem 0;color:#fff;font-size:.7rem}"]],data:{}});function p(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,0,"img",[["src","/assets/images/payment_success.png"]],null,null,null,null,null))],null,null)}function g(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","payment-label"]],null,null,null,null,null)),(l()(),t.Ib(1,null,["",""])),t.Cb(131072,c.i,[c.j,t.h])],null,function(l,n){l(n,1,0,t.Jb(n,1,0,t.Ab(n,2).transform("OrderStatusForSuccess")))})}function m(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,0,"img",[["src","/assets/images/payment_fail.png"]],null,null,null,null,null))],null,null)}function h(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","payment-label"]],null,null,null,null,null)),(l()(),t.Ib(1,null,["",""])),t.Cb(131072,c.i,[c.j,t.h])],null,function(l,n){l(n,1,0,t.Jb(n,1,0,t.Ab(n,2).transform("OrderStatusForFail")))})}function k(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,10,"div",[["class","fail-reason"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),t.Cb(131072,c.i,[c.j,t.h]),(l()(),t.qb(4,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Ib(5,null,["",""])),t.Cb(131072,c.i,[c.j,t.h]),(l()(),t.qb(7,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t.Ib(9,null,["",""])),t.Cb(131072,c.i,[c.j,t.h])],null,function(l,n){l(n,2,0,t.Jb(n,2,0,t.Ab(n,3).transform("PaymentResultFail1"))),l(n,5,0,t.Jb(n,5,0,t.Ab(n,6).transform("PaymentResultFail2"))),l(n,9,0,t.Jb(n,9,0,t.Ab(n,10).transform("PaymentResultFail3")))})}function C(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,12,"ion-header",[],null,null,null,a.O,a.i)),t.pb(1,49152,null,0,i.C,[t.h,t.k],null,null),(l()(),t.qb(2,0,null,0,10,"ion-toolbar",[],null,null,null,a.lb,a.F)),t.pb(3,49152,null,0,i.Cb,[t.h,t.k],null,null),(l()(),t.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.K,a.e)),t.pb(5,49152,null,0,i.m,[t.h,t.k],null,null),(l()(),t.qb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var e=!0,i=l.component;return"click"===n&&(e=!1!==t.Ab(l,8).onClick(u)&&e),"click"===n&&(e=!1!==i.back()&&e),e},a.I,a.c)),t.pb(7,49152,null,0,i.h,[t.h,t.k],null,null),t.pb(8,16384,null,0,i.i,[[2,i.ib],i.Ib],null,null),(l()(),t.qb(9,0,null,0,3,"ion-title",[],null,null,null,a.kb,a.E)),t.pb(10,49152,null,0,i.Ab,[t.h,t.k],null,null),(l()(),t.Ib(11,0,["",""])),t.Cb(131072,c.i,[c.j,t.h]),(l()(),t.qb(13,0,null,null,25,"ion-content",[],null,null,null,a.L,a.f)),t.pb(14,49152,null,0,i.v,[t.h,t.k],null,null),(l()(),t.qb(15,0,null,0,23,"div",[["class","result-info"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,p)),t.pb(17,16384,null,0,s.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,g)),t.pb(19,16384,null,0,s.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,m)),t.pb(21,16384,null,0,s.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,h)),t.pb(23,16384,null,0,s.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,k)),t.pb(25,16384,null,0,s.j,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(26,0,null,null,12,"div",[["class","btn-wrap"]],null,null,null,null,null)),(l()(),t.qb(27,0,null,null,5,"div",[["class","continue-btn"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,28).onClick()&&e),"click"===n&&(e=!1!==t.Ab(l,30).onClick(u)&&e),e},null,null)),t.pb(28,16384,null,0,f.n,[f.m,f.a,[8,null],t.E,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(29,2),t.pb(30,737280,null,0,i.Nb,[s.g,i.Ib,t.k,f.m,[2,f.n]],null,null),(l()(),t.Ib(31,null,["",""])),t.Cb(131072,c.i,[c.j,t.h]),(l()(),t.qb(33,0,null,null,5,"div",[["class","order-btn"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,34).onClick()&&e),"click"===n&&(e=!1!==t.Ab(l,36).onClick(u)&&e),e},null,null)),t.pb(34,16384,null,0,f.n,[f.m,f.a,[8,null],t.E,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(35,2),t.pb(36,737280,null,0,i.Nb,[s.g,i.Ib,t.k,f.m,[2,f.n]],null,null),(l()(),t.Ib(37,null,["",""])),t.Cb(131072,c.i,[c.j,t.h])],function(l,n){var u=n.component;l(n,17,0,u.isSuccess),l(n,19,0,u.isSuccess),l(n,21,0,!u.isSuccess),l(n,23,0,!u.isSuccess),l(n,25,0,u.showFailReason);var t=l(n,29,0,"/checkout/payment",u.orderId);l(n,28,0,t),l(n,30,0);var e=l(n,35,0,"/mine/order/detail",u.orderId);l(n,34,0,e),l(n,36,0)},function(l,n){l(n,11,0,t.Jb(n,11,0,t.Ab(n,12).transform("PaymentResultTitle"))),l(n,31,0,t.Jb(n,31,0,t.Ab(n,32).transform("OrderToPay"))),l(n,37,0,t.Jb(n,37,0,t.Ab(n,38).transform("OrderToDetail")))})}function y(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-result",[],null,null,null,C,d)),t.pb(1,114688,null,0,r,[f.a,f.m,c.j,i.Ib,i.Lb],null,null)],function(l,n){l(n,1,0)},null)}var I=t.mb("app-result",r,y,{},{},[]),v=u("gIcY");u.d(n,"ResultPageModuleNgFactory",function(){return P});var P=t.nb(o,[],function(l){return t.xb([t.yb(512,t.j,t.cb,[[8,[b.a,I]],[3,t.j],t.x]),t.yb(4608,s.l,s.k,[t.u,[2,s.r]]),t.yb(4608,v.m,v.m,[]),t.yb(4608,i.c,i.c,[t.z,t.g]),t.yb(4608,i.Hb,i.Hb,[i.c,t.j,t.q,s.c]),t.yb(4608,i.Mb,i.Mb,[i.c,t.j,t.q,s.c]),t.yb(1073742336,s.b,s.b,[]),t.yb(1073742336,v.l,v.l,[]),t.yb(1073742336,v.c,v.c,[]),t.yb(1073742336,i.Eb,i.Eb,[]),t.yb(1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),t.yb(1073742336,c.g,c.g,[]),t.yb(1073742336,o,o,[]),t.yb(1024,f.k,function(){return[[{path:"",component:r}]]},[])])})}}]);