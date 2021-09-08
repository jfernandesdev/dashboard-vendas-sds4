package com.jfernandesdev.dashboardvendassds4.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfernandesdev.dashboardvendassds4.dto.SellerDTO;
import com.jfernandesdev.dashboardvendassds4.entities.Seller;
import com.jfernandesdev.dashboardvendassds4.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll();
		return result.stream().map(x-> new SellerDTO(x)).collect(Collectors.toList());
	}
}
