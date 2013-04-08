/*
 * ClassName 商品实体
 * id : id主键
 * name : 商品的名称
 * price : 价格
 * status : 状态
 * discount :  折扣价
 * uptime : 上架时间
 * number : 数量
 * sellnumber : 卖出数量
 * producedate : 生产日期
 * timelength : 上架时长
 * describe : 描述信息
 * image : 商品图片
 * t_id : 所属类型序号
 */
 Ext.define("Mis.model.good.GoodModel",{
 	extend:"Ext.data.Model",
 	fields:[
 		{name:"id",type:"int",srotable:true},
 		{name:"name",type:"string",srotable:true},
 		{name:"price",type:"double",srotable:true},
 		{name:"status",type:"int",srotable:true},
 		{name:"discount",type:"double",srotable:true},
 		{name:"uptime",type:"string",srotable:true},
 		{name:"countNumber",type:"int",srotable:true},
 		{name:"sellNumber",type:"int",srotable:true},
 		{name:"produceDate",type:"string",srotable:true},
 		{name:"timeLength",type:"double",srotable:true},
 		{name:"describe",type:"string",srotable:true},
 		{name:"image",type:"string",srotable:true},
 		{name:"t_id",type:"int",srotable:true}
 	]
 });