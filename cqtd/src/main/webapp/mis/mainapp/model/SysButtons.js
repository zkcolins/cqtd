Ext.define('mis.model.SysButtons',{
    extend:'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'string'
    },{
        name: 'text',
        type: 'string'
    },{
        name: 'leaf',
        type: 'bool'
    },{
        name: 'iconCls',
        type: 'string'
    },{
        name:'href',
        type:'string'
    },{
        name: 'description',
        type: 'string'
    }]
});


