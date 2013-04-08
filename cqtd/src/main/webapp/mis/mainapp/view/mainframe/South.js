Ext.define('Mis.view.mainframe.South',{ 
    extend: 'Ext.Toolbar', 
    initComponent : function(){ 
        Ext.apply(this,{ 
            id:"bottom", 
            //frame:true, 
            region:"south", 
            height:23, 
            items:["Copyright@2013 cqtd"] 
        }); 
        this.callParent(arguments); 
    } 
}) 