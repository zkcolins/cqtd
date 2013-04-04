Ext.define('mis.view.SysTree',{
    extend:'Ext.tree.Panel',
    alias:'widget.SysTree',
    store:'ModulesTree',
    rootVisible: false,
    loading:true,
    editing:true,
    tools:[{
        type:'refresh',
        handler:function(){
            this.ownerCt.ownerCt.store.load();
        }
    }],
    listeners:{
        itemclick:function(view, record, htmlelement, index, eventObject,object ){
        /*var lay = view.ownerCt.ownerCt.ownerCt;
            var tabPanel = lay.items.items[3]
            //console.warn(tabPanel);
            
            var tab = tabPanel.items.get('tab-'+record.id);
            //console.dir(tabPanel);
            if(!tab){
                tabPanel.items.add({
                    title:record.data.text,
                    id:'tab-'+record.data.id,
                    closable:true,
                    items:[{
                        xtype:Ext.create('gwtjs.view.TestGrid')
                    }]
                });
            }
            //tabPanel.setActiveTab(tab);*/
        }
    },
    initComponent:function(){
        this.callParent(arguments);
    }
});


