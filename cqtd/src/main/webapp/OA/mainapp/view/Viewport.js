Ext.define('OA.view.Viewport',{ 
    extend: 'Ext.Viewport', 
    layout: 'fit', 
    hideBorders: true, 
    requires : [ 
        'OA.view.Header', 
        'OA.view.Menu', 
        'OA.view.TabPanel', 
        'OA.view.South' 
    ], 
    initComponent : function(){ 
        var me = this; 
        Ext.apply(me, { 
            items: [{ 
                id:'desk', 
                layout: 'border', 
                items: [ 
                    Ext.create('OA.view.Header'), 
                    Ext.create('OA.view.Menu'), 
                    Ext.create('OA.view.TabPanel'), 
                    Ext.create('OA.view.South') 
                ] 
            }] 
        }); 
        me.callParent(arguments); 
    } 
})