/* 
 * 正式开始模块管理
 */
Ext.define('OA.view.menu.MenuGrid', {
    extend:'Ext.tree.Panel',
    alias:'widget.menu.MenuGrid',
    useArrows:true,
    rootVisible:false,
    rowEditing:null,
    fieldkey:'id',
    fieldparentkey:'parent',
    store:Ext.create('OA.store.Menus'),
    multiSelect:true,
    singleExpand:true,
    columnLines:true,
    columns:[
        {
            xtype:'treecolumn',
            header:'模块名称',
            dataIndex:'text',
            flex:2,
            field:{allowBlank:false,name:'text'}
        },
        {
            header:'管理类名',
            dataIndex:'mgrUrl',
            flex:1,
            field:{name:'mgrUrl'}
        },
        {
            header:'模块地址',
            dataIndex:'url',
            flex:1,
            field:{name:'url'}
        },
        {
            header:'排序码',
            dataIndex:'orderNo',
            flex:1,
            editor:{name:'orderNo',
                xtype:'numberfield'
            }
        },
        {
            header:'叶子',
            dataIndex:'leaf',
            flex:1,
            editor:{name:'leaf',
                xtype:'checkbox'
            }
        },
        {
            header:'图标模式名',
            dataIndex:'iconCls',
            flex:1,
            field:{  name:'iconCls',
                xtype:'textfield'
            }
        },
        {
            header:'说明',
            dataIndex:'direction',
            renderer:this.formatAreaText,
            flex:1,
            field:{  name:'direction',
                xtype:'textfield'
            }
        },
        {
            menuDisabled:true,
            sortable:false,
            xtype:'actioncolumn',
            align:'center',
            width:50,
            items:[
                {
                    icon:'image/ext/delete.png', // Use a URL in the icon config
                    tooltip:'Remove current node',
                    handler:function (grid, rowIndex, colIndex) {
                        Ext.Msg.confirm("系统提示", "确定要删除选中的记录吗?", function (_btn) {
                            if ('yes' == _btn) {
                                var rec = grid.store.getAt(rowIndex);
//                                console.warn(rec.get('id'), rec.get('text'));
                                Ext.Ajax.request({
                                    url:'/module/delete.action',
                                    params:{id:rec.get('id')},
                                    success:function (response) {
                                        //成功后，grid.store.remove(rec);
                                        var text = eval('(' + response.responseText + ')');
//                                        console.warn(text.success);
                                        grid.store.remove(rec);
                                    }
                                });
                            }
                        }, this);
                    },
                    scope:this
                },
                {
                    icon:'image/ext/add.png',
                    handler:function (grid, rowIndex, colIndex) {
                        var rec = grid.store.getAt(rowIndex);
                        if(rec.data.leaf){
                            rec.data.leaf = false;
                        }
                        var newNode = {
                            text:'新模块名称',
                            parent:rec.get('id'),
                            direction:'模块说明',
                            leaf:true,
                            orderNo:12
                        };
                        var node = newNode;
                        rec.expand(false,function(){
                            node=rec.insertChild(0,newNode);
                            //Ext.apply(node,newNode);
                        });
                        //node.editingPlugin.startEdit(0, 0);
                    }
                }
            ], scope:this
        }
    ],
    initComponent:function () {
        this.rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor:2,
            autoCancel:false
        });
        this.plugins = [this.rowEditing];
        this.dockedItems = [
            {
                xtype:'toolbar',
                items:[
                    {
                        icon:'image/ext/add.png',
                        text:'添加一级节点',
                        handler:this.doInsertRootNode,
                        scope:this
                    },
                    '->',
                    {
                        text:'刷新数据',
                        iconCls:'refresh-icon',
                        handler:this.doLoad,
                        scope:this
                    },
                    '-',
                    {
                        text:'帮助',
                        iconCls:'help-ico',
                        handler:function () {
//                            console.log('help', 'icon');
                        }
                    }
                ]
            }
        ];
        this.callParent(arguments);
    },
    doLoad:function () {
        this.store.load();
    },
    doInsertRootNode:function () {
        var rootNode = this.getRootNode();
        var r = {
            text:'新模块名称',
            parent:'',
            direction:'模块说明',
            leaf:true,
            orderNo:12
        };

        rootNode.insertChild(0, r);
        this.editingPlugin.startEdit(0, 0);
    },
    doInsertNode:function (grid, rowIndex, colIndex) {
//        console.warn(node,index);
        var r = {
            text:'新模块名称',
            parent:'' || node.id,
            direction:'模块说明',
            leaf:true,
            orderNo:12
        };

        //node.insertChild(0, r);
        //this.editingPlugin.startEdit(0, 0);
    }
})


