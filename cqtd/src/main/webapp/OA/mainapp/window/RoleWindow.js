Ext.define('OA.window.RoleWindow',{
    extend:'Ext.window.Window',
    alias: 'widget.rolewindow',
    title: '角色管理',
    closeAction: 'hide',
    width: 320,
    height: 220,
    layout: 'fit',
    form:null,
    resizable: true,
    modal: true,
    items:{
        xtype:Ext.create('OA.form.RoleForm')
    },
    initComponent: function(){
        this.callParent(arguments);
        this.addEvents("create");
        this.form = this.items.items[0];//items[0]为form
        this.form.on("create",this.onSubmit,this);//监听form的create事件
    },
    close:function(){
        this.form.onReset();
        this.hide();
    },
    onSubmit:function(_form,data){
//        console.warn("Window: ",data);
        this.fireEvent('create', _form, data);
//       console.warn("fire end");
        this.close();
    },
    setActiveRecord:function(record){
        this.form.activeRecord = record;
        if (record) {
            this.form.setActiveRecord(record);
        } 
    }
});