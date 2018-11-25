package com.mycompany.banking.consultant;

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
public class ConsultantController {
	
	private final ConsultantRepository repository;
	
	public ConsultantController(ConsultantRepository repository) {
		this.repository = repository;
	}
	
	@PostMapping("/consultants")
	public Consultant insert(@RequestBody Consultant entity) {
		return repository.save(entity);
	}
	
	@DeleteMapping("/consultants/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@GetMapping("/consultants")
	public List<Consultant> list() {
		return repository.findAll();
	}
	
	@GetMapping("/consultants/{id}")
	public Consultant findById(@PathVariable Long id) throws Exception {
		return repository.findById(id)
				.orElseThrow(() -> new Exception("Consultant not found id="+id));
	}
	
	@PutMapping("/consultants/{id}")
	public Consultant update(@RequestBody Consultant newEntity, @PathVariable Long id) {
		return repository.findById(id)
				.map(entity -> {
					entity.setName(newEntity.getName());
					entity.setSpecialty(newEntity.getSpecialty());
					return repository.save(entity);
				})
				.orElseGet(() -> {
					newEntity.setId(id);
					return repository.save(newEntity);
				});
	}

}
