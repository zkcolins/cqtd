/* 
 * <h1>角色管理</h1>
 * <p>
 * 上下布局，上面为grid,下面为Module tree crud 操作控制角色权限,
 * 此为上部，角色grid
 * </p>
 */
Ext.define('OA.view.role.RoleGrid',{
    extend:'Ext.grid.Panel',
    columnLines:true,
    alias: 'widget.role.RoleGrid',
    title:'RoleGrid Test',
    stripeRows: true,
    loadMask: true,
    editorWindow:null,
    lock:true,
    oldId:'Role_',
    multiSelect:true,
    selModel:{
        selType:'checkboxmodel'
    },
    columns:[{
        xtype: 'rownumberer',
        sortable: false
    },{
        dataIndex:'text',
        header:'角色名称',
        flex:1,
        editor:{
            allowBlank:false
        }
    },{
        dataIndex:'orderNo',
        header:'排序号',
        editor:{
        }
    }],
    viewConfig : {
        forceFit : true,
        scrollOffset : 0
    },
    initComponent: function(){
        
        this.tbar=[{
        	xtype:'button',
            text:'Add Role',
            iconCls:'user-add',
            scope: this,
            handler: this.onAddClick
        },'-',{
        	xtype:'button',
            text:'Update Role',
            iconCls:'user-edit',
            itemId:this.oldId+"Update",
            scope: this,
            disabled: this.lock,
            handler:this.onEditorClick
        },'-',{
        	xtype:'button',
            text:'Remove Role',
            disabled: this.lock,
            itemId:this.oldId+"Delete",
            iconCls:'user-delete',
            scope:this,
            handler:this.onDeleteClick
        },'->',{
        	xtype:'button',
            text:'refresh',
            iconCls:'refresh-icon',
            handler:function(){
//                console.log('refresh','click');
            },
            scope: this
        },'-',{
        	xtype:'button',
            text:'export',
            iconCls:'print-icon',
            handler:function(){
//                console.log('export','click');
            },
            scope: this
        },'-',{
        	xtype:'button',
            text:'help',
            iconCls:'help-ico',
            handler:function(){
//                console.log('help','click');
            },
            scope: this
        }];
        this.store=Ext.create('OA.store.Roles');
        this.dockedItems=[{
            xtype:'pagingtoolbar',
            store:this.store,
            dock:'bottom',
            displayInfo:true,
            plugins: Ext.create('Ext.ux.ProgressBarPager')
        }];
        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        this.plugins = [this.editing];
        
        this.callParent(arguments);
    },
    listeners: {
        selectionchange: function(selModel, selected) {
            this.down('#'+this.oldId+"Update").setDisabled(selected.length === 0);
            this.down('#'+this.oldId+"Delete").setDisabled(selected.length === 0);
        },
        edit:function(editor, e, options){
            var record = e.record.raw;
            var data = e.record.data;
            var val = e.value;
            if(e.originalValue!=e.value){
//                console.warn('id:'+record.id,'attr:'+e.field +"  value: "+e.value);
                val = e.field == 'overTime' ? Ext.Date.format(e.value, 'Y-m-d') : e.value;
                Ext.Ajax.request({
                    url: '/action/role/updateAttr.action',
                    params: {
                        id: record.id,
                        attr:e.field,
                        val:val
                    },
                    success: function(response){
                        var text = eval('('+response.responseText+')');//Ext.JSON.decode(response.responseText).message;
//                        console.log('success: ',text.flag);
                    }
                });
            }
            
            e.record.commit();
        }
    },
    onSaveRecord:function(form, data){
        this.store.insert(0,data);
    },
    onUpdateRecord:function(form, data){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        Ext.apply(selection.data,data);
        selection.commit();
    },
    onDeleteClick: function(){
        var selections = this.getView().getSelectionModel().getSelection();
        var ids ="";
        for(var i=0;i<selections.length;i++){
            ids+=selections[i].data.id;
            if(i<selections.length-1){
                ids+=',';
            }
        }
        var currentView = this;
        if (selections) {
            Ext.Msg.confirm("系统提示", "确定要删除选中的记录吗?", function (_btn) {
                if ('yes' == _btn) {
                    Ext.Ajax.request({
                        url: '/action/role/deletes.action',
                        params: {
                            ids: ids
                        },
                        success: function(response){
                            var text = eval('('+response.responseText+')');//Ext.JSON.decode(response.responseText).message;
                            currentView.store.remove(selections);
                            
                            var tc = currentView.store.totalCount - selections.length;//总记录数减当前删的
                            var pageSize = currentView.store.pageSize; //页大小(条目数)
                            var cp = currentView.store.currentPage; //当前页
                            var num = (tc + pageSize - 1) / pageSize; //页数
                            var pageNum = cp>num ? num:cp;
                            currentView.store.loadPage(pageNum); 
                            //为什么要做这样的计算,注释掉这个计算;请翻到到数第二磁,删掉当页全部记录,看看结果
                        }
                    });
                }
            },this);
        }else{
            Ext.MessageBox.alert("提示","请选择数据行!");
        }
    },
    onEditorClick: function(){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection){
            this.editorWindow = Ext.create("OA.window.RoleWindow",{
                title:"角色管理@修改"
            });
            this.editorWindow.setActiveRecord(selection);
            this.editorWindow.on('create',this.onUpdateRecord,this);
            this.editorWindow.show();
        }else{
            Ext.MessageBox.alert("提示","请选择数据行!");
        }
    },
    onAddClick: function(){
        this.editorWindow = Ext.create("OA.window.RoleWindow",{
            title:"角色管理@新增"
        });
        this.editorWindow.on('create',this.onSaveRecord,this);
        this.editorWindow.show();
    }
});


