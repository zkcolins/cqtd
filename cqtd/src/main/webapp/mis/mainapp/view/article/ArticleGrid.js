/* 
 * <h1>文章管理</h1>
 * <p>
 * 普通的grid,主要是测试html和html内嵌上传组件
 * </p>
 */
Ext.define('mis.view.article.ArticleGrid',{
    extend:'Ext.grid.Panel',
    columnLines:true,
    alias: 'widget.article.articlegrid',
    title:'ArticleGrid Test',
    stripeRows: true,
    loadMask: true,
    editorWindow:null,
    lock:true,
    oldId:'Article_',
    columns:[{
        xtype: 'rownumberer',
        sortable: false
    },{
        dataIndex:'title',
        header:'标题',
        flex:2,
        editor:{
            allowBlank:false
        }
    },{
        dataIndex:'author',
        header:'作者',
        flex:1,
        editor:{}
    },{
        dataIndex:'editor',
        header:'编辑',
        flex:1,
        editor:{}
    },{
        dataIndex:'tags',
        header:'关键字',
        flex:1,
        editor:{}
    },{
        dataIndex:'grade',
        header:'评分'
    },{
        dataIndex:'clickNumber',
        header:'点击数'
    },{
        dataIndex:'id',
        hidden:true
    },{
        xtype: 'templatecolumn',
        dataIndex:'imgUrl',
        header:'图片',
        width:60,
        sortable: false,
        align: 'center',
        tpl: Ext.create('Ext.XTemplate', '{imgUrl:this.formatImage}', {
            formatImage: function(v) {
                return v 
            }
        })
    },{
        dataIndex:'createTime',
        header:'创建时间',
        renderer:function(value){
            return Ext.Date.format(value, 'Y-m-d');
        },
        flex:1
    },{
        text: '排序码',
        flex: 1,
        dataIndex: 'orderNo',
        editor:{
            xtype:'numberfield',
            hideTrigger: true,
            minValue:0
        }
    },{
        dataIndex:'status',
        header:'状态',
        renderer:function(v){
            if(v == 0){
                return '<span style="color:red;">暂停</span>';
            }else{
                return '<span style="color:green;">正常</span>';
            }
        },
        editor:{
            xtype:'combo',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: [
            [0,'暂停'],
            [1,'正常']
            ],
            lazyRender: true,
            listClass: 'x-combo-list-small'
        }
    },{
        xtype: 'templatecolumn',
        dataIndex:'content',
        header:'正文',
        sortable: false,
        tpl: Ext.create('Ext.XTemplate', '{imgUrl:this.formatContent}', {
            formatContent: function(v) {
                return v 
            }
        })
    }],
    multiSelect:true,
    selModel:{
        selType:'checkboxmodel'
    },
    viewConfig : {
        forceFit : true,
        scrollOffset : 0
    },
    initComponent: function(){
        
        this.tbar=[{
            text:'Add Article',
            iconCls:'article-add',
            scope: this,
            handler: this.onAddClick
        },'-',{
            text:'Update Article',
            iconCls:'article-edit',
            itemId:this.oldId+"Update",
            scope: this,
            disabled: this.lock,
            handler:this.onEditorClick
        },'-',{
            text:'Remove Article',
            disabled: this.lock,
            itemId:this.oldId+"Delete",
            iconCls:'article-delete',
            scope:this,
            handler:this.onDeleteClick
        },'->',{
            text:'refresh',
            iconCls:'refresh-icon',
            handler:function(){
                console.log('refresh','click');
            },
            scope: this
        },'-',{
            text:'export',
            iconCls:'print-icon',
            handler:function(){
                console.log('export','click');
            },
            scope: this
        },'-',{
            text:'help',
            iconCls:'help-ico',
            handler:function(){
                console.log('help','click');
            },
            scope: this
        }];
        this.store=Ext.create('mis.store.Articles');
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
                console.warn('id:'+record.id,'attr:'+e.field +"  value: "+e.value);
                val = e.field == 'overTime' ? Ext.Date.format(e.value, 'Y-m-d') : e.value;
                Ext.Ajax.request({
                    url: '/action/article/updateAttr.action',
                    params: {
                        id: record.id,
                        attr:e.field,
                        val:val
                    },
                    success: function(response){
                        var text = eval('('+response.responseText+')');//Ext.JSON.decode(response.responseText).message;
                        console.log('success: ',text.flag);
                    }
                });
            }
            
            e.record.commit();
        }
    },
    validateName:function(field){
        console.dir(field);
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
                        url: '/action/article/deletes.action',
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
            this.editorWindow = Ext.create("mis.window.ArticleWindow",{
                title:"文章管理@修改"
            });
            this.editorWindow.setActiveRecord(selection);
            this.editorWindow.on('create',this.onUpdateRecord,this);
            this.editorWindow.show();
        }else{
            Ext.MessageBox.alert("提示","请选择数据行!");
        }
    },
    onAddClick: function(){
        this.editorWindow = Ext.create("mis.window.ArticleWindow",{
            title:"文章管理@新增"
        });
        this.editorWindow.on('create',this.onSaveRecord,this);
        this.editorWindow.show();
    }
});
