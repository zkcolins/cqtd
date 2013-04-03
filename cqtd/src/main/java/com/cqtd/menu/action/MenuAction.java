package com.cqtd.menu.action;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.cqtd.menu.service.MenuService;
import com.cqtd.util.FooUtils;
import com.google.common.collect.Maps;

@Controller
@RequestMapping("/OA/menuAction")
public class MenuAction {
	private static final Logger logger = Logger.getLogger(MenuAction.class);
	
	private MenuService menuService;

	@Autowired
	public void setMenuService(MenuService menuService) {
		this.menuService = menuService;
	}

	@RequestMapping("/menulist")
	@ResponseBody
	public void menulist(HttpServletResponse response){
		//[{"text":"备案列表","id":"4","iconCls":"Folder","stores":"bastore","columns":[{text:'序号',dataIndex:'ID'},{text:'公司名称',dataIndex:'kehu_name'}],"leaf":true},{"text":"新增备案","id":"5","iconCls":"Folder","stores":"","columns":[],"leaf":true}]
		String res = "[{\"text\":\"备案列表\",\"id\":\"4\",\"iconCls\":\"Folder\",\"stores\":\"bastore\",\"columns\":[{text:'序号',dataIndex:'ID',width:50},{text:'公司名称',dataIndex:'kehu_name',width:260,editor:{allowBlank: false}},{text:'备案号',dataIndex:'beianhao',width:140,editor:{allowBlank: false}},{text:'备案密码',dataIndex:'beianpass',width:100,editor:{allowBlank: false}},{text:'备案邮箱',dataIndex:'beianemail',width:160,editor:{allowBlank: false}},{text:'备案邮箱密码',dataIndex:'emailpass',width:120,editor:{allowBlank: false}},{text:'备案账号',dataIndex:'beianzh',width:160,editor:{allowBlank: false}},{text:'账号密码',dataIndex:'beianzhpa',width:120,editor:{allowBlank: false}} ],\"leaf\":true},{\"text\":\"新增备案\",\"id\":\"5\",\"iconCls\":\"Folder\",\"stores\":\"\",\"columns\":[],\"leaf\":true}]";
		Object object = JSON.parse(res);
		try {
			FooUtils.printJsonObject(response, object);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping("/getgridlist")
	@ResponseBody
	public void getgridlist(HttpServletResponse response){
		//fields: ['ID', 'kehu_name','beianhao','beianpass','beianemail','emailpass','beianzh','beianzhpa']
		String items = "[{\"ID\":\"1\",\"kehu_name\":\"colin\",\"beianhao\":\"NO001\",\"beianpass\":\"123\",\"beianemail\":\"colin@126.com\",\"emailpass\":\"123\",\"beianzh\":\"test\",\"beianzhpa\":\"123\"},{\"ID\":\"2\",\"kehu_name\":\"jack\",\"beianhao\":\"NO002\",\"beianpass\":\"456\",\"beianemail\":\"jack@163.com\",\"emailpass\":\"456\",\"beianzh\":\"cheshi\",\"beianzhpa\":\"456\"}]";
        Map<String, Object> map = Maps.newHashMap();
		map.put("items", JSON.parse(items));
		map.put("total","2");
		try {
			FooUtils.printJsonObject(response, map);
			logger.info("----getgridlist-----");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	
	@RequestMapping("/save")
	@ResponseBody
	public void save(HttpServletResponse response){
		try {
			FooUtils.printJsonSuccessMsg(response);
			logger.info("----save-----");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	@RequestMapping("/del")
	@ResponseBody
	public void del(HttpServletResponse response){
		try {
			FooUtils.printJsonSuccessMsg(response);
			logger.info("----del-----");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
