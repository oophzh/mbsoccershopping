(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{hOD3:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("AwSQ"),r=t("8cFx"),i=function(){function n(n,l,t){this.dataService=n,this.commonService=l,this.translate=t,this.keyword="",this.showSearchResult=!1,this.searchHistoryList=[],this.productList=[],this.productTotal=0,this.page={amount:0,curPage:1,pageSize:10},this.currentSort=1,this.showSort=!1,this.isLoading=!1}return n.prototype.ngOnInit=function(){this.getSearchHistory()},n.prototype.ionViewDidEnter=function(){this.searchbar.setFocus()},n.prototype.searchHistoryItem=function(n){this.keyword=this.searchHistoryList[n],this.doSearch()},n.prototype.keywordChange=function(){this.keyword||(this.showSearchResult=!1)},n.prototype.doSearch=function(){this.keyword&&(this.showSearchResult=!0,this.page.curPage=1,this.productList=[],this.infiniteScroll&&(this.infiniteScroll.disabled=!1),this.getCategoryProducts(null),this.saveSearchHistory())},n.prototype.getCategoryProducts=function(n){this.isLoading=!0;var l=this;this.dataService.searchProducts(this.keyword,this.page.curPage,this.currentSort,function(t){if(t.data){if(t.data.page&&(l.productTotal=t.data.page.amount),t.data.products){for(var o=t.data.products,e=0;e<o.length;e++)for(var r=o[e],i=0;i<r.display_data.length;i++){var u=r.display_data[i];u.img_display=l.commonService.picUrl+u.img_display,u.current_price=l.commonService.formatProductPrice(u.current_price,null),u.original_price=l.commonService.formatProductPrice(u.original_price,null)}l.productList=1==l.page.curPage?o:l.productList.concat(o)}n?n.target.complete():l.isLoading=!1,l.productList.length==l.productTotal&&(l.infiniteScroll.disabled=!0)}},null)},n.prototype.doRefresh=function(n){this.page.curPage=1,this.productList=[],this.infiniteScroll.disabled=!1,this.getCategoryProducts(n)},n.prototype.loadData=function(n){this.page.curPage=this.page.curPage+1,this.getCategoryProducts(n)},n.prototype.showSortMask=function(){this.showSort=!this.showSort},n.prototype.chooseSort=function(n,l){l.stopPropagation(),this.currentSort=n,this.page.curPage=1,this.productList=[],this.infiniteScroll.disabled=!1,this.getCategoryProducts(null),this.showSort=!this.showSort},n.prototype.saveSearchHistory=function(){this.searchHistoryList.includes(this.keyword)?(this.searchHistoryList.splice(this.searchHistoryList.indexOf(this.keyword),1),this.searchHistoryList.push(this.keyword)):this.searchHistoryList.push(this.keyword),this.searchHistoryList.length>20&&this.searchHistoryList.splice(0,1),localStorage.searchHistory=JSON.stringify(this.searchHistoryList)},n.prototype.getSearchHistory=function(){localStorage.searchHistory&&(this.searchHistoryList=JSON.parse(localStorage.searchHistory))},n.prototype.onSearchKeyUp=function(n){13==n.keyCode&&(this.doSearch(),this.searchbar.getInputElement().then(function(n){n.blur()}))},n}(),u=function(){return function(){}}(),c=t("pMnS"),s=t("oBZk"),a=t("ZZ/e"),h=t("A7o+"),d=t("Ip0R"),p=t("ZYCi"),b=t("gIcY"),g=o.ob({encapsulation:0,styles:[[".search-icon[_ngcontent-%COMP%]{color:#333;font-size:1.3rem;margin-right:.5rem}.search-wrap[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]{color:#666;font-size:.7rem;font-weight:700;padding:.5rem}.search-wrap[_ngcontent-%COMP%]   .search-item[_ngcontent-%COMP%]{background:#f5f5f5;border-radius:3px;padding:.25rem;color:#999;font-size:.5rem;display:inline-block;margin-left:.5rem}.sort-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background:#fff;border-bottom:1px solid #ddd;height:1.75rem;line-height:1.75rem}.sort-header[_ngcontent-%COMP%]   .total-wrap[_ngcontent-%COMP%]{color:#333;font-size:.6rem;padding:0 .5rem}.sort-header[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%]{color:#333;font-size:.6rem;padding:0 .5rem;display:flex;align-items:center;font-weight:700}.sort-header[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:.25rem;height:1.75rem;line-height:2rem}.sort-header[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:rotate(180deg);margin-left:.25rem}.sort-mask[_ngcontent-%COMP%]{position:fixed;left:0;top:4rem;width:100%;height:100%;z-index:10;background:rgba(0,0,0,.3)}.sort-mask[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;background:#fff;font-size:.6rem;color:#333}.sort-mask[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:0 .5rem;height:2rem;line-height:2rem;display:flex;align-items:center;justify-content:space-between}.sort-mask[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:#ea5455}.product-list[_ngcontent-%COMP%]{position:relative;width:100%;font-size:.6rem;color:#333;box-sizing:border-box;border-left:.15rem solid #f5f5f5;border-right:.15rem solid #f5f5f5;border-bottom:.3rem solid #f5f5f5;background:#f5f5f5}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]{width:50%;box-sizing:border-box;display:inline-block;border-left:.15rem solid #f5f5f5;border-right:.15rem solid #f5f5f5;border-top:.3rem solid #f5f5f5;background:#fff}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:15rem;background:#e1e1e1}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]{margin-left:.5rem;padding-bottom:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{color:#333;font-size:.8rem;font-weight:700}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-price-wrap[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]{font-size:.6rem;color:#999;text-decoration:line-through;margin-left:.5rem}.product-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .off-wrap[_ngcontent-%COMP%]{background:#ea5455;border-radius:3px;padding:.1rem;color:#fff;font-size:.5rem;display:inline-block;margin-top:.25rem;margin-left:.5rem;margin-bottom:.5rem}"]],data:{}});function m(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,11,"ion-header",[["class","sort-header"]],null,null,null,s.O,s.i)),o.pb(1,49152,null,0,a.C,[o.h,o.k],null,null),(n()(),o.qb(2,0,null,0,2,"div",[["class","total-wrap"]],null,null,null,null,null)),(n()(),o.Ib(3,null,[" "," "," "])),o.Cb(131072,h.i,[h.j,o.h]),(n()(),o.qb(5,0,null,0,6,"div",[["class","sort-wrap"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.showSortMask()&&o),o},null,null)),o.pb(6,278528,null,0,d.h,[o.s,o.t,o.k,o.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(7,{selected:0}),(n()(),o.Ib(8,null,[" "," "])),o.Cb(131072,h.i,[h.j,o.h]),(n()(),o.qb(10,0,null,null,1,"ion-icon",[["class","sort-icon"],["name","arrow-down"]],null,null,null,s.P,s.j)),o.pb(11,49152,null,0,a.D,[o.h,o.k],{name:[0,"name"]},null)],function(n,l){var t=n(l,7,0,l.component.showSort);n(l,6,0,"sort-wrap",t),n(l,11,0,"arrow-down")},function(n,l){n(l,3,0,l.component.productTotal,o.Jb(l,3,1,o.Ab(l,4).transform("ProductTotalTitle"))),n(l,8,0,o.Jb(l,8,0,o.Ab(l,9).transform("ProductSortTitle")))})}function f(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,7,"div",[["class","product-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Ab(n,1).onClick()&&e),"click"===l&&(e=!1!==o.Ab(n,3).onClick(t)&&e),e},null,null)),o.pb(1,16384,null,0,p.n,[p.m,p.a,[8,null],o.E,o.k],{routerLink:[0,"routerLink"]},null),o.Bb(2,2),o.pb(3,737280,null,0,a.Nb,[d.g,a.Ib,o.k,p.m,[2,p.n]],null,null),(n()(),o.qb(4,0,null,null,0,"img",[["onerror","javascript:this.src='../../../assets/images/default_image.png';"]],[[8,"src",4]],null,null,null,null)),(n()(),o.qb(5,0,null,null,2,"div",[["class","product-price-wrap"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,0,"span",[["class","current-price"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),o.qb(7,0,null,null,0,"span",[["class","original-price"]],[[8,"innerHTML",1]],null,null,null,null))],function(n,l){var t=n(l,2,0,"/product/detail",l.context.$implicit.product_id);n(l,1,0,t),n(l,3,0)},function(n,l){n(l,4,0,l.context.$implicit.display_data[0].img_display),n(l,6,0,l.context.$implicit.display_data[0].current_price),n(l,7,0,l.context.$implicit.display_data[0].original_price)})}function k(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,3,"ion-list",[["class","product-list"]],null,null,null,s.X,s.r)),o.pb(1,49152,null,0,a.P,[o.h,o.k],null,null),(n()(),o.hb(16777216,null,0,1,null,f)),o.pb(3,278528,null,0,d.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.productList)},null)}function y(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,4,"div",[["class","empty-view"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,0,"img",[["src","../../assets/images/no_data.png"]],null,null,null,null,null)),(n()(),o.qb(2,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),o.Ib(3,null,["",""])),o.Cb(131072,h.i,[h.j,o.h])],null,function(n,l){n(l,3,0,o.Jb(l,3,0,o.Ab(l,4).transform("CommonNoData")))})}function C(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,9,"div",[],null,null,null,null,null)),(n()(),o.hb(16777216,null,null,1,null,k)),o.pb(2,16384,null,0,d.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,null,1,null,y)),o.pb(4,16384,null,0,d.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(5,0,null,null,4,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],function(n,l,t){var o=!0;return"ionInfinite"===l&&(o=!1!==n.component.loadData(t)&&o),o},s.R,s.k)),o.pb(6,49152,[[2,4],["infiniteScroll",4]],0,a.F,[o.h,o.k],{threshold:[0,"threshold"]},null),(n()(),o.qb(7,0,null,0,2,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"]],null,null,null,s.Q,s.l)),o.pb(8,49152,null,0,a.G,[o.h,o.k],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),o.Cb(131072,h.i,[h.j,o.h])],function(n,l){var t=l.component;n(l,2,0,t.productList&&t.productList.length>0&&!t.isLoading),n(l,4,0,!(t.productList&&0!=t.productList.length||t.isLoading)),n(l,6,0,"100px"),n(l,8,0,"bubbles",o.sb(1,"",o.Jb(l,8,1,o.Ab(l,9).transform("CommonLoadingText")),""))},null)}function P(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,1,"div",[["class","search-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.searchHistoryItem(n.context.index)&&o),o},null,null)),(n()(),o.Ib(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function w(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,4,"div",[["class","search-wrap"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,1,"div",[["class","search-title"]],null,null,null,null,null)),(n()(),o.Ib(-1,null,["Search History"])),(n()(),o.hb(16777216,null,null,1,null,P)),o.pb(4,278528,null,0,d.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,l.component.searchHistoryList)},null)}function S(n){return o.Kb(0,[o.Gb(402653184,1,{searchbar:0}),o.Gb(671088640,2,{infiniteScroll:0}),(n()(),o.qb(2,0,null,null,20,"ion-header",[],null,null,null,s.O,s.i)),o.pb(3,49152,null,0,a.C,[o.h,o.k],null,null),(n()(),o.qb(4,0,null,0,18,"ion-toolbar",[],null,null,null,s.lb,s.F)),o.pb(5,49152,null,0,a.Cb,[o.h,o.k],null,null),(n()(),o.qb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.K,s.e)),o.pb(7,49152,null,0,a.m,[o.h,o.k],null,null),(n()(),o.qb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Ab(n,10).onClick(t)&&e),e},s.I,s.c)),o.pb(9,49152,null,0,a.h,[o.h,o.k],null,null),o.pb(10,16384,null,0,a.i,[[2,a.ib],a.Ib],null,null),(n()(),o.qb(11,0,null,0,11,"ion-buttons",[],null,null,null,s.K,s.e)),o.pb(12,49152,null,0,a.m,[o.h,o.k],null,null),(n()(),o.qb(13,0,null,0,7,"ion-searchbar",[["name","keyword"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"keyup"],[null,"ionBlur"]],function(n,l,t){var e=!0,r=n.component;return"ionBlur"===l&&(e=!1!==o.Ab(n,14)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==o.Ab(n,14)._handleInputEvent(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(r.keyword=t)&&e),"ionChange"===l&&(e=!1!==r.keywordChange()&&e),"keyup"===l&&(e=!1!==r.onSearchKeyUp(t)&&e),e},s.Y,s.s)),o.pb(14,16384,null,0,a.Pb,[o.k],null,null),o.Fb(1024,null,b.g,function(n){return[n]},[a.Pb]),o.pb(16,671744,null,0,b.j,[[8,null],[8,null],[8,null],[6,b.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,b.h,null,[b.j]),o.pb(18,16384,null,0,b.i,[[4,b.h]],null,null),o.pb(19,49152,[[1,4],["searchbar",4]],0,a.kb,[o.h,o.k],{placeholder:[0,"placeholder"]},null),o.Cb(131072,h.i,[h.j,o.h]),(n()(),o.qb(21,0,null,0,1,"ion-icon",[["class","search-icon"],["name","search"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.doSearch()&&o),o},s.P,s.j)),o.pb(22,49152,null,0,a.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.hb(16777216,null,null,1,null,m)),o.pb(24,16384,null,0,d.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(25,0,null,null,5,"ion-content",[],null,null,null,s.L,s.f)),o.pb(26,49152,null,0,a.v,[o.h,o.k],null,null),(n()(),o.hb(16777216,null,0,1,null,C)),o.pb(28,16384,null,0,d.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,0,1,null,w)),o.pb(30,16384,null,0,d.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(31,0,null,null,22,"section",[["class","sort-mask"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.showSortMask()&&o),o},null,null)),(n()(),o.qb(32,0,null,null,21,"div",[["class","sort-list"]],null,null,null,null,null)),(n()(),o.qb(33,0,null,null,6,"div",[["class","sort-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.chooseSort(1,t)&&o),o},null,null)),(n()(),o.qb(34,0,null,null,3,"ion-label",[],null,null,null,s.W,s.q)),o.pb(35,49152,null,0,a.O,[o.h,o.k],null,null),(n()(),o.Ib(36,0,["",""])),o.Cb(131072,h.i,[h.j,o.h]),(n()(),o.qb(38,0,null,null,1,"ion-icon",[["name","checkmark"]],[[8,"hidden",0]],null,null,s.P,s.j)),o.pb(39,49152,null,0,a.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(40,0,null,null,6,"div",[["class","sort-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.chooseSort(2,t)&&o),o},null,null)),(n()(),o.qb(41,0,null,null,3,"ion-label",[],null,null,null,s.W,s.q)),o.pb(42,49152,null,0,a.O,[o.h,o.k],null,null),(n()(),o.Ib(43,0,["",""])),o.Cb(131072,h.i,[h.j,o.h]),(n()(),o.qb(45,0,null,null,1,"ion-icon",[["name","checkmark"]],[[8,"hidden",0]],null,null,s.P,s.j)),o.pb(46,49152,null,0,a.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.qb(47,0,null,null,6,"div",[["class","sort-item"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.chooseSort(3,t)&&o),o},null,null)),(n()(),o.qb(48,0,null,null,3,"ion-label",[],null,null,null,s.W,s.q)),o.pb(49,49152,null,0,a.O,[o.h,o.k],null,null),(n()(),o.Ib(50,0,["",""])),o.Cb(131072,h.i,[h.j,o.h]),(n()(),o.qb(52,0,null,null,1,"ion-icon",[["name","checkmark"]],[[8,"hidden",0]],null,null,s.P,s.j)),o.pb(53,49152,null,0,a.D,[o.h,o.k],{name:[0,"name"]},null)],function(n,l){var t=l.component;n(l,16,0,"keyword",t.keyword),n(l,19,0,o.sb(1,"",o.Jb(l,19,0,o.Ab(l,20).transform("CommoneSearchHint")),"")),n(l,22,0,"search"),n(l,24,0,t.showSearchResult&&t.productList&&t.productList.length>0&&!t.isLoading),n(l,28,0,t.showSearchResult),n(l,30,0,!t.showSearchResult),n(l,39,0,"checkmark"),n(l,46,0,"checkmark"),n(l,53,0,"checkmark")},function(n,l){var t=l.component;n(l,13,0,o.Ab(l,18).ngClassUntouched,o.Ab(l,18).ngClassTouched,o.Ab(l,18).ngClassPristine,o.Ab(l,18).ngClassDirty,o.Ab(l,18).ngClassValid,o.Ab(l,18).ngClassInvalid,o.Ab(l,18).ngClassPending),n(l,31,0,!t.showSort),n(l,36,0,o.Jb(l,36,0,o.Ab(l,37).transform("ProductSortType1"))),n(l,38,0,1!==t.currentSort),n(l,43,0,o.Jb(l,43,0,o.Ab(l,44).transform("ProductSortType2"))),n(l,45,0,2!==t.currentSort),n(l,50,0,o.Jb(l,50,0,o.Ab(l,51).transform("ProductSortType3"))),n(l,52,0,3!==t.currentSort)})}function M(n){return o.Kb(0,[(n()(),o.qb(0,0,null,null,1,"app-search",[],null,null,null,S,g)),o.pb(1,114688,null,0,i,[e.a,r.a,h.j],null,null)],function(n,l){n(l,1,0)},null)}var _=o.mb("app-search",i,M,{},{},[]);t.d(l,"SearchPageModuleNgFactory",function(){return O});var O=o.nb(u,[],function(n){return o.xb([o.yb(512,o.j,o.cb,[[8,[c.a,_]],[3,o.j],o.x]),o.yb(4608,d.l,d.k,[o.u,[2,d.r]]),o.yb(4608,b.m,b.m,[]),o.yb(4608,a.c,a.c,[o.z,o.g]),o.yb(4608,a.Hb,a.Hb,[a.c,o.j,o.q,d.c]),o.yb(4608,a.Mb,a.Mb,[a.c,o.j,o.q,d.c]),o.yb(1073742336,d.b,d.b,[]),o.yb(1073742336,b.l,b.l,[]),o.yb(1073742336,b.c,b.c,[]),o.yb(1073742336,a.Eb,a.Eb,[]),o.yb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),o.yb(1073742336,h.g,h.g,[]),o.yb(1073742336,u,u,[]),o.yb(1024,p.k,function(){return[[{path:"",component:i}]]},[])])})}}]);