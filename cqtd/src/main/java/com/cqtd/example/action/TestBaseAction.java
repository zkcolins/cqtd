package com.cqtd.example.action;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.cqtd.base.service.BaseService;
import com.cqtd.example.model.Ttest;

/**
 * 直接使用基类SERVICE、基类DAO
 * @author COLIN
 *
 */
@Controller
@RequestMapping("/testBaseAction")
public class TestBaseAction {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(TestBaseAction.class);
	
	private BaseService<Ttest> testService;

	@Autowired
	public void setTestService(BaseService<Ttest> testService) {
		this.testService = testService;
	}
	
	@RequestMapping("/test4")
	public String test4(){
		try {
			Ttest t = new Ttest();
			t.setUserName("jsckson");
			t.setPassword("123456");
			
			testService.save(t);
			
		} catch (Exception e) {
			logger.info(e);
			new Exception("testExcepton");
		}
		return "index";
	}
	
	@RequestMapping("/list")
	public String list(){
		String hql = "from Ttest";
		String json = JSON.toJSONStringWithDateFormat(testService.find(hql), "yyyy-MM-dd HH:mm:ss");
		logger.info(json);
		return "index";
	}
}
