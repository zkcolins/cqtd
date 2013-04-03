Ext.Loader.setConfig({enabled: true}); 
//Ext.Loader.setPath('OA.mainapp', '/cqtd/OA/mainapp');
Ext.application({ 
    name: 'OA', 
    appFolder: 'mainapp', 
    autoCreateViewport:true,
    controllers: [ 
         'Menu'  
    ] 
});