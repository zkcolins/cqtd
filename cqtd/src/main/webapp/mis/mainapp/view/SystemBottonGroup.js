/* 
 * 动态添加系统管理(System Management)按钮组
 */
Ext.define('mis.view.SystemBottonGroup',{
    extend:'Ext.panel.Panel',
    alias:'widget.SystemBottonGroup',
    iconCls:'sys-mgr-ico',
    title:'System Management',
    border:false,
    overflowY : 'auto',
    layout: {
        type:'vbox',
        padding:'5',
        margin:'',
        align:'center'
    },
    items:[],
    initComponent:function(){
        var comp = this;

        var myStore = new Ext.data.Store({
            model:'mis.model.SysButtons',
            proxy: {
                type: 'ajax',
                url : basePath+'/mis/data/acl-module.json',
                reader:{
                    type:'json',
                    root:'SysAclModels'
                },
                writer:{
                    type:'json'
                }
            },
            autoLoad: true,
            
            listeners: {
                'beforeload':function(store, operation , obj ){
                    //console.debug('装载数据前','测试');
                },
                'load':function(store, record , obj ){
                    //console.debug('装载数据成功后');
                    store.each(function(){
                        comp.items.add(Ext.create('Ext.button.Button',{
                            iconCls: this.data.iconCls,
                            text:this.data.text,
                            margins:'0 0 5 0',
                            iconAlign: 'top',
                            scale: 'medium',
                            width:120,
                            handler: function(){
                                console.warn(this);
                            }
                        }));
                    });
                }
            }

        });
        this.callParent();
    }
})

