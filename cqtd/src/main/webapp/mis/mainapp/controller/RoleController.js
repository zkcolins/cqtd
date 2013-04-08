Ext.define('Mis.controller.RoleController', {
			extend : 'Ext.app.Controller',
			//stores、models、views这三个对象改为在使用到时动态加载，而不在此处由Controller直接加载 
			stores : [],
			models : [],
			views : [],
			init : function() {
				this.control({
//							'smsmenu' : {
//								itemclick : alert("点击角色啦")
//							}
						})
			}
		})