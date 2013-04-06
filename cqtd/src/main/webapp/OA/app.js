var application;
Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath('Ext.ux', basePath+'/OA/scripts');

//为了动态加载Controller,对Application新增以下三个方法
Ext.require('Ext.app.Application',function(){
	Ext.app.Application.addMembers({
	    //加载Controller后触发事件
	    newControllerAdded:function(idx,cntr){
	        cntr.init(this);
	    },
	    //判断是否已加载指定Controller，返回Boolean
	    hasController:function(name){
	        return !!this.controllers.get(name);
	    },
	    //加载并返回指定Controller
	    addController:function(name){
	        return this.getController(name);
	    }
	});
});

Ext.application({
    name: 'OA', 
    appFolder: 'mainapp', 
    autoCreateViewport:true,
    //views:['Viewport'],//可以不写，默认去找的就是Viewport
    controllers:['MenuController'],
    launch:function(){
    	application = this;
        Ext.tip.QuickTipManager.init();
        this.controllers.addListener('add',this.newControllerAdded,this);
        if(!this.hasController('MenuController')){
           this.addController('MenuController');
		}
    }
 });


/*
Ext.application({ 
    name: 'OA', 
    appFolder: 'mainapp', 
    autoCreateViewport:true,
    //views:['Viewport'],//可以不写，默认去找的就是Viewport
    controllers: [ 
         'Menu'  
    ] 
});
*/