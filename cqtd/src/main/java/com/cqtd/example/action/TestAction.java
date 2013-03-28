package com.cqtd.example.action;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.cqtd.example.model.Ttest;
import com.cqtd.example.service.TestService;

/**
 * 使用每个功能模块自身的SERVICE、自身的DAO
 * @author COLIN
 *
 */
@Controller
@RequestMapping("/testAction")
public class TestAction {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(TestAction.class);
	
	private TestService testService;
	
	@Autowired
	public void setTestService(TestService testService) {
		this.testService = testService;
	}

	/*
	@InitBinder
	public void initBinder(ServletRequestDataBinder binder) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
	}
	*/
	@RequestMapping("/test")
	public String test(){
		String  hql = "from Ttest where userName=:name";
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("name", "editchange");
		logger.info(JSON.toJSONStringWithDateFormat(testService.find(hql, params), "yyyy-MM-dd HH:mm:ss"));
		return "index";
	}
	
	@RequestMapping("/test1")
	public String test1(){
		logger.info(JSON.toJSON(testService.id2Name("402881e73db12e61013db130cf3d0000")));
		return "index";
	}
	
	@RequestMapping("/test2")
	public String test2(){
		testService.editTestWithCache("jsckson");
		return "index";
	}
	
	@RequestMapping("/test3")
	public String test3(){
		try {
			Ttest t = new Ttest();
			t.setUserName("colin");
			t.setPassword("123456");
			testService.save(t);
		} catch (Exception e) {
			logger.info(e);
			new Exception("testExcepton");
		}
		return "index";
	}
	
	
	
}
