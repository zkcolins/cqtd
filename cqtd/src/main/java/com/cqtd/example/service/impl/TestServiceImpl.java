package com.cqtd.example.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cqtd.base.dao.BaseDao;
import com.cqtd.base.service.impl.BaseServiceImpl;
import com.cqtd.example.model.Ttest;
import com.cqtd.example.service.TestService;
import com.googlecode.ehcache.annotations.Cacheable;
import com.googlecode.ehcache.annotations.KeyGenerator;
import com.googlecode.ehcache.annotations.Property;
import com.googlecode.ehcache.annotations.TriggersRemove;
import com.googlecode.ehcache.annotations.When;

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
	public void doTransaction() {
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

	@Override
	@TriggersRemove(cacheName="testCache", when = When.AFTER_METHOD_INVOCATION,removeAll=true)
	public void editTestWithCache(String name) {
		String  hql = "from Ttest where userName=:name";
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("name", name);
		Ttest t = testDao.get(hql, params);
		t.setUserName("editchange");
		testDao.update(t);
	}

	@Override
	@Cacheable(cacheName="testCache",keyGenerator = @KeyGenerator(
			   name = "HashCodeCacheKeyGenerator", 
			   properties = @Property(name="includeMethod", value="true")))
	public String id2Name(String id) {
		String result = "";
		String  hql = "from Ttest where id=:id";
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		Ttest t = testDao.get(hql, params);
		if(t!=null){
			result = t.getUserName();
		}
		return result;
	}
	
	
	
}
