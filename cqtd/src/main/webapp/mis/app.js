Ext.Loader.setConfig({
    enabled:true
});

Ext.Loader.setPath('Ext.ux', basePath+'/mis/scripts/');

var current = {username:'test',role:'Administrator'};

//Ext.onReady(function(){

    Ext.application({
        name:'mis',
        appFolder:'mainapp',
        //autoCreateViewport:true,
        launch:function(){
            Ext.create('Ext.container.Viewport',{
                layout:'fit',
                items:[{
                    xtype:'mainlayout'
                }]
            })
        },
        controllers:['Controller']
    });
    
//});