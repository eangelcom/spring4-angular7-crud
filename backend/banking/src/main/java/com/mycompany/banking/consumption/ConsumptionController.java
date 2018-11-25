package com.mycompany.banking.consumption;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ConsumptionController {
	
	private final ConsumptionRepository repository;

	public ConsumptionController(ConsumptionRepository repository) {
		this.repository = repository;
	}
	
	@PostMapping("/consumptions")
	public Consumption insert(@RequestBody Consumption entity) {
		return repository.save(entity);
	}
	
	@DeleteMapping("/consumptions/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@GetMapping("/consumptionsbycard/{id}")
	public List<Consumption> list(@PathVariable Long id) {
		return repository.findByCardId(id);
	}
	
	@GetMapping("/consumptions/{id}")
	public Consumption findById(@PathVariable Long id) throws Exception {
		return repository.findById(id)
				.orElseThrow(() -> new Exception("Consumption not found id="+id));
	}
	
	@PutMapping("/consumptions/{id}")
	public Consumption update(@RequestBody Consumption newEntity, @PathVariable Long id) {
		return repository.findById(id)
				.map(entity -> {
					entity.setDate(newEntity.getDate());
					entity.setDescription(newEntity.getDescription());
					entity.setAmount(newEntity.getAmount());
					return repository.save(entity);
				})
				.orElseGet(() -> {
					newEntity.setId(id);
					return repository.save(newEntity);
				});
	}

}
