Ext.Loader.setConfig({enabled: true}); 
Ext.Loader.setPath('Ext.ux', basePath+'/OA/scripts');
Ext.application({ 
    name: 'OA', 
    appFolder: 'mainapp', 
    autoCreateViewport:true,
    controllers: [ 
         'Menu'  
    ] 
});