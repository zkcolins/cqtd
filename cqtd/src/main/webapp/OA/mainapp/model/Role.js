Ext.define('OA.model.Role',{
    extend:'Ext.data.Model',
    fields:[{
        name:'text',
        type:'string',
        mapping:'text'
    },
    {
        name:'orderNo',
        type:'int'
    },
    {
        name:'parentId',
        type:'string'
    },
    {
        name:'id',
        type:'string'
    }
    ]
});