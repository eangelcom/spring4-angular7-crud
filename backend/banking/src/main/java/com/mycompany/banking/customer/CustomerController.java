package com.mycompany.banking.customer;

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
public class CustomerController {
	
	private final CustomerRepository repository;

	public CustomerController(CustomerRepository repository) {
		this.repository = repository;
	}
	
	@PostMapping("/customers")
	public Customer insert(@RequestBody Customer entity) {
		return repository.save(entity);
	}
	
	@DeleteMapping("/customers/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@GetMapping("/customers")
	public List<Customer> list() {
		return repository.findAll();
	}
	
	@GetMapping("/customers/{id}")
	public Customer findById(@PathVariable Long id) throws Exception {
		return repository.findById(id)
				.orElseThrow(() -> new Exception("Customer not found id="+id));
	}
	
	@PutMapping("/customers/{id}")
	public Customer update(@RequestBody Customer newEntity, @PathVariable Long id) {
		return repository.findById(id)
				.map(entity -> {
					entity.setName(newEntity.getName());
					entity.setCity(newEntity.getCity());
					return repository.save(entity);
				})
				.orElseGet(() -> {
					newEntity.setId(id);
					return repository.save(newEntity);
				});
	}	
	
}
