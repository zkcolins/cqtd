package com.cqtd.example.action;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
		testService.saveObjectWithTrans();
		return "index";
	}
	
	
	@RequestMapping("/test2")
	public String test2(){
		
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
