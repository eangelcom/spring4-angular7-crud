package com.mycompany.banking.consumption;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsumptionRepository extends JpaRepository<Consumption, Long> {

	List<Consumption> findByCardId(Long id);
	
}
