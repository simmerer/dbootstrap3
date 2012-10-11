//>>built
define("dojox/grid/enhanced/plugins/Filter","dojo/_base/declare,dojo/_base/lang,../_Plugin,./Dialog,./filter/FilterLayer,./filter/FilterBar,./filter/FilterDefDialog,./filter/FilterStatusTip,./filter/ClearFilterConfirm,../../EnhancedGrid,dojo/i18n!../nls/Filter".split(","),function(d,f,g,h,e,i,j,k,l,m,n){d=d("dojox.grid.enhanced.plugins.Filter",g,{name:"filter",constructor:function(b,a){this.grid=b;this.nls=n;a=this.args=f.isObject(a)?a:{};if("number"!=typeof a.ruleCount||0>a.ruleCount)a.ruleCount=
3;if(void 0===(this.ruleCountToConfirmClearFilter=a.ruleCountToConfirmClearFilter))this.ruleCountToConfirmClearFilter=2;this._wrapStore();var c={plugin:this};this.clearFilterDialog=new h({refNode:this.grid.domNode,title:this.nls.clearFilterDialogTitle,content:new l(c)});this.filterDefDialog=new j(c);this.filterBar=new i(c);this.filterStatusTip=new k(c);b.onFilterDefined=function(){};this.connect(b.layer("filter"),"onFilterDefined",function(){b.onFilterDefined(b.getFilter(),b.getFilterRelation())})},
destroy:function(){this.inherited(arguments);try{this.grid.unwrap("filter"),this.filterBar.destroyRecursive(),this.filterBar=null,this.clearFilterDialog.destroyRecursive(),this.clearFilterDialog=null,this.filterStatusTip.destroy(),this.filterStatusTip=null,this.filterDefDialog.destroy(),this.args=this.grid=this.filterDefDialog=null}catch(b){}},_wrapStore:function(){var b=this.grid,a=this.args,a=a.isServerSide?new e.ServerSideFilterLayer(a):new e.ClientSideFilterLayer({cacheSize:a.filterCacheSize,
fetchAll:a.fetchAllOnFirstFilter,getter:this._clientFilterGetter});e.wrap(b,"_storeLayerFetch",a);this.connect(b,"_onDelete",f.hitch(a,"invalidate"))},onSetStore:function(){this.filterDefDialog.clearFilter(!0)},_clientFilterGetter:function(b,a,c){return a.get(c,b)}});m.registerPlugin(d);return d});