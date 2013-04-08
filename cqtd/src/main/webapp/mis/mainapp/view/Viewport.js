Ext.define('Mis.view.Viewport',{ 
    extend: 'Ext.Viewport', 
    alias: 'widget.Viewport',
    layout: 'fit', 
    hideBorders: true, 
    requires : [ 
        'Mis.view.mainframe.Header', 
        'Mis.view.mainframe.Menu', 
        'Mis.view.mainframe.TabPanel', 
        'Mis.view.mainframe.South' 
    ], 
    initComponent : function(){ 
        var me = this; 
        Ext.apply(me, { 
            items: [{ 
                id:'desk', 
                layout: 'border', 
                items: [ 
                    Ext.create('Mis.view.mainframe.Header'), 
                    Ext.create('Mis.view.mainframe.Menu'), 
                    Ext.create('Mis.view.mainframe.TabPanel'), 
                    Ext.create('Mis.view.mainframe.South') 
                ] 
            }] 
        }); 
        me.callParent(arguments); 
    } 
})