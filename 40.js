(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{r9ny:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("AwSQ"),i=t("8cFx"),e=function(){function n(n,l,t){this.dataService=n,this.commonService=l,this.translate=t,this.productViewedList=[]}return n.prototype.ngOnInit=function(){this.getRecentlyBrowseList()},n.prototype.getRecentlyBrowseList=function(){var n=[];localStorage.currentBrowseList&&(n=JSON.parse(localStorage.currentBrowseList));var l={currencyId:localStorage.selectedCurrencyConf,products:n},t=this;this.dataService.productsViewed(JSON.stringify(l),function(n){t.productViewedList=n.data;for(var l=0;l<t.productViewedList.length;l++){var u=t.productViewedList[l];u.imgDisplay=t.commonService.picUrl+u.imgDisplay,u.curPrice=t.commonService.formatProductPrice(u.curPrice,null),u.orgPrice=t.commonService.formatProductPrice(u.orgPrice,null)}},null)},n.prototype.clearViewedList=function(){localStorage.currentBrowseList="[]",this.productViewedList=[]},n}(),r=function(){return function(){}}(),c=t("pMnS"),p=t("ZYCi"),a=t("ZZ/e"),s=t("Ip0R"),b=t("oBZk"),d=t("A7o+"),g=u.ob({encapsulation:0,styles:[[".product-list[_ngcontent-%COMP%]{position:relative;width:100%;font-size:.6rem;color:#333}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]{padding:.3rem;border-bottom:1px solid #ddd;display:flex}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]{width:7rem;margin-right:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-height:5.2rem;background:#f5f5f5}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]{flex:1;padding-bottom:.1rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#333;font-size:.65rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;height:2.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:#ea5455}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]{font-size:.6rem;color:#999;text-decoration:line-through;margin-left:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info-wrap[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;right:0;margin-right:.5rem;font-size:.9rem}"]],data:{}});function m(n){return u.Kb(0,[(n()(),u.qb(0,0,null,null,11,"div",[["class","product-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==u.Ab(n,1).onClick()&&o),"click"===l&&(o=!1!==u.Ab(n,3).onClick(t)&&o),o},null,null)),u.pb(1,16384,null,0,p.n,[p.m,p.a,[8,null],u.E,u.k],{routerLink:[0,"routerLink"]},null),u.Bb(2,2),u.pb(3,737280,null,0,a.Nb,[s.g,a.Ib,u.k,p.m,[2,p.n]],null,null),(n()(),u.qb(4,0,null,null,1,"div",[["class","image-wrap"]],null,null,null,null,null)),(n()(),u.qb(5,0,null,null,0,"img",[["onerror","javascript:this.src='/assets/images/default_image.png';"]],[[8,"src",4]],null,null,null,null)),(n()(),u.qb(6,0,null,null,5,"div",[["class","product-info-wrap"]],null,null,null,null,null)),(n()(),u.qb(7,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),u.Ib(8,null,["",""])),(n()(),u.qb(9,0,null,null,2,"div",[["class","product-price-wrap"]],null,null,null,null,null)),(n()(),u.qb(10,0,null,null,0,"span",[["class","current-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),u.qb(11,0,null,null,0,"span",[["class","original-price"]],[[8,"innerHTML",1]],null,null,null,null))],function(n,l){var t=n(l,2,0,"/product/detail",l.context.$implicit.productId);n(l,1,0,t),n(l,3,0)},function(n,l){n(l,5,0,l.context.$implicit.imgDisplay),n(l,8,0,l.context.$implicit.productName),n(l,10,0,l.context.$implicit.curPrice),n(l,11,0,l.context.$implicit.orgPrice)})}function f(n){return u.Kb(0,[(n()(),u.qb(0,0,null,null,3,"ion-list",[["class","product-list"]],null,null,null,b.X,b.r)),u.pb(1,49152,null,0,a.P,[u.h,u.k],null,null),(n()(),u.hb(16777216,null,0,1,null,m)),u.pb(3,278528,null,0,s.i,[u.P,u.M,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.productViewedList)},null)}function h(n){return u.Kb(0,[(n()(),u.qb(0,0,null,null,4,"div",[["class","empty-view"]],null,null,null,null,null)),(n()(),u.qb(1,0,null,null,0,"img",[["src","/assets/images/no_data.png"]],null,null,null,null,null)),(n()(),u.qb(2,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Ib(3,null,["",""])),u.Cb(131072,d.i,[d.j,u.h])],null,function(n,l){n(l,3,0,u.Jb(l,3,0,u.Ab(l,4).transform("CommonNoData")))})}function w(n){return u.Kb(0,[(n()(),u.qb(0,0,null,null,16,"ion-header",[],null,null,null,b.O,b.i)),u.pb(1,49152,null,0,a.C,[u.h,u.k],null,null),(n()(),u.qb(2,0,null,0,14,"ion-toolbar",[],null,null,null,b.lb,b.F)),u.pb(3,49152,null,0,a.Cb,[u.h,u.k],null,null),(n()(),u.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.K,b.e)),u.pb(5,49152,null,0,a.m,[u.h,u.k],null,null),(n()(),u.qb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==u.Ab(n,8).onClick(t)&&o),o},b.I,b.c)),u.pb(7,49152,null,0,a.h,[u.h,u.k],null,null),u.pb(8,16384,null,0,a.i,[[2,a.ib],a.Ib],null,null),(n()(),u.qb(9,0,null,0,3,"ion-title",[],null,null,null,b.kb,b.E)),u.pb(10,49152,null,0,a.Ab,[u.h,u.k],null,null),(n()(),u.Ib(11,0,["",""])),u.Cb(131072,d.i,[d.j,u.h]),(n()(),u.qb(13,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,b.K,b.e)),u.pb(14,49152,null,0,a.m,[u.h,u.k],null,null),(n()(),u.qb(15,0,null,0,1,"ion-icon",[["name","trash"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.clearViewedList()&&u),u},b.P,b.j)),u.pb(16,49152,null,0,a.D,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.qb(17,0,null,null,5,"ion-content",[],null,null,null,b.L,b.f)),u.pb(18,49152,null,0,a.v,[u.h,u.k],null,null),(n()(),u.hb(16777216,null,0,1,null,f)),u.pb(20,16384,null,0,s.j,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u.hb(16777216,null,0,1,null,h)),u.pb(22,16384,null,0,s.j,[u.P,u.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,16,0,"trash"),n(l,20,0,t.productViewedList&&t.productViewedList.length>0),n(l,22,0,!t.productViewedList||0==t.productViewedList.length)},function(n,l){n(l,11,0,u.Jb(l,11,0,u.Ab(l,12).transform("MineViewedTitle")))})}function P(n){return u.Kb(0,[(n()(),u.qb(0,0,null,null,1,"app-history",[],null,null,null,w,g)),u.pb(1,114688,null,0,e,[o.a,i.a,d.j],null,null)],function(n,l){n(l,1,0)},null)}var C=u.mb("app-history",e,P,{},{},[]),M=t("gIcY");t.d(l,"HistoryPageModuleNgFactory",function(){return O});var O=u.nb(r,[],function(n){return u.xb([u.yb(512,u.j,u.cb,[[8,[c.a,C]],[3,u.j],u.x]),u.yb(4608,s.l,s.k,[u.u,[2,s.r]]),u.yb(4608,M.m,M.m,[]),u.yb(4608,a.c,a.c,[u.z,u.g]),u.yb(4608,a.Hb,a.Hb,[a.c,u.j,u.q,s.c]),u.yb(4608,a.Mb,a.Mb,[a.c,u.j,u.q,s.c]),u.yb(1073742336,s.b,s.b,[]),u.yb(1073742336,M.l,M.l,[]),u.yb(1073742336,M.c,M.c,[]),u.yb(1073742336,a.Eb,a.Eb,[]),u.yb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),u.yb(1073742336,d.g,d.g,[]),u.yb(1073742336,r,r,[]),u.yb(1024,p.k,function(){return[[{path:"",component:e}]]},[])])})}}]);