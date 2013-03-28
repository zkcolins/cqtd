package com.cqtd.example.service.impl;

import org.apache.log4j.Logger;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cqtd.base.dao.BaseDao;
import com.cqtd.base.service.impl.BaseServiceImpl;
import com.cqtd.example.model.Ttest;
import com.cqtd.example.service.TestService;

@Service("testService")
public class TestServiceImpl extends BaseServiceImpl<Ttest> implements TestService{
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(TestServiceImpl.class);
	
	private BaseDao<Ttest> testDao;

	@Override
	@Qualifier("testDao")
	@Autowired
	public void setBaseDao(BaseDao<Ttest> testDao) {
		this.baseDao = testDao;
		this.testDao = testDao;
	}

	@SuppressWarnings("null")
	@Override
	public void saveObjectWithTrans() {
		try {
			Ttest t = new Ttest();
			t.setUserName("jsckson");
			t.setPassword("123456");
			
			testDao.save(t);
			
			List<String> list = null;
			logger.info(list.size());
			
			Ttest t2 = new Ttest();
			t2.setUserName("jsckson2");
			t2.setPassword("123456");
			
			testDao.save(t2);
		} catch (Exception e) {
			logger.info(e);
			new Exception("testExcepton");
		}
	}
	
}
