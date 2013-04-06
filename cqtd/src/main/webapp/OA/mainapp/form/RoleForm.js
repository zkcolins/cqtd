Ext.define('OA.form.RoleForm',{
    extend:'Ext.form.Panel',
    alias: 'widget.roleform',
    border:false,
    url:basePath+'/OA/roleAction/editor.action',
    initComponent: function(){
        this.addEvents('create');
        Ext.apply(this,{
            items:[{
                xtype:'form',
                layout:{
                    type:'vbox',
                    align:'stretch'
                },
                bodyPadding: 10,
                border:false,
                fieldDefaults:{
                    labelAlign:'top',
                    labelWidth:70,
                    labelStyle:'font-weight:bold'
                },
                items:[{
                    name:'id',
                    inputType:'hidden'
                },{
                    labelAlign:'right',
                    xtype: 'textfield',
                    name:'text',
                    fieldLabel:'角色名称',
                    allowBlank:false
                },{
                    labelAlign:'right',
                    fieldLabel:'排序号',
                    xtype:'numberfield',
                    name:'orderNo'
                }],
                buttonAlign:'center',
                buttons: [{
                    text: '重置',
                    scope: this,
                    iconCls : "form-reset-ico",
                    handler: this.onReset
                }, {
                    text: '保存',
                    scope: this,
                    iconCls : "form-save-ico",
                    handler: this.onSave
                }]
            }]
        });
        this.callParent(arguments);
    },
    setActiveRecord: function(record){
        this.activeRecord = record;
        if (record||this.activeRecord) {
            this.getForm().loadRecord(record);
        } else {
            this.getForm().reset();
        }
    },
    onReset:function(){
        this.setActiveRecord(this.activeRecord);
    },
    onSave: function(){
        var form = this.getForm();
//        console.info("----onSave--url:"+this.url);
        
        if (form.isValid()) {
//        	console.info(form.isValid());
            this.getForm().submit({
                url:this.url,
                //params:_params,
                type:'ajax',
                //waitTitle:"数据传送",
                //waitMsg:"数据传递中,请稍候",//4.x此属性好像没有
                //scope:this,
                
//                success: function() {
//                	console.info("Success");
//                }
                success:this.onSave//成功了才到onSave去重置表单、传播事件
               // success:this.onReset
            });
//            console.info(form.getValues());
            this.fireEvent('create', this, form.getValues());
            console.info(form.isValid());
            form.reset();
        }

    }
});