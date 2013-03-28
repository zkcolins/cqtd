package com.cqtd.example.service;

import com.cqtd.base.service.BaseService;
import com.cqtd.example.model.Ttest;

public interface TestService extends BaseService<Ttest> {
	
	public void doTransaction();
	
	public void editTestWithCache(String name);
	
	public String id2Name(String id);
}