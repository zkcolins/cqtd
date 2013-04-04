/* 
 * 总布局.
 */
Ext.define('mis.view.MainLayout',{
    extend:'Ext.panel.Panel',
    alias:'widget.mainlayout',
    id:'MainLayout',
    layout:'border',
    border:false,
    items:[{
        region:'north',
        xtype:'North' //mis.view.North
    },{
        title:'Management Navigation',
        region:'west',
        xtype:'panel',
        iconCls:'nav-ico',
        width:'23%',
        minWidth:100,
        margins:'0 0 0 3',
        //frame:true,
        split:true,
        collapsible:true,
        layout:'accordion',
        defaults:{
            layout:'fit',
            anchor: '100%'
        },
        items:[{
            iconCls:'Module-mgr-ico',
            title:'Module Management',
            xtype:'SysTree' //mis.view.SysTree
        },{
            xtype:Ext.create('mis.view.SystemBottonGroup')
        }],
        bbar:[{
            iconCls:"start-ico",
            scale:'medium',
            text:current.username+' : '+current.role,
            menu:{
                xtype:'StartMenu'
            }
            
        }]
    },{
        region:'center',
        xtype:'MainTabPanel' //mis.view.MainTabPanel
    },{
        region:'south',
        xtype:'South'
    }]
})


