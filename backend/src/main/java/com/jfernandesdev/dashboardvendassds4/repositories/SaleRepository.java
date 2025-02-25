package com.jfernandesdev.dashboardvendassds4.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jfernandesdev.dashboardvendassds4.dto.SaleSuccessDTO;
import com.jfernandesdev.dashboardvendassds4.dto.SaleSumDTO;
import com.jfernandesdev.dashboardvendassds4.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query("SELECT new com.jfernandesdev.dashboardvendassds4.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.jfernandesdev.dashboardvendassds4.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))"
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();

}