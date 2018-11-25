package com.mycompany.banking.card;

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
public class CardController {
	
	private final CardRepository repository;

	public CardController(CardRepository repository) {
		this.repository = repository;
	}
	
	@PostMapping("/cards")
	public Card insert(@RequestBody Card entity) {
		return repository.save(entity);
	}
	
	@DeleteMapping("/cards/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@GetMapping("/cardsbycustomer/{id}")
	public List<Card> list(@PathVariable Long id) {
		return repository.findByCustomerId(id);
	}
	
	@GetMapping("/cards/{id}")
	public Card findById(@PathVariable Long id) throws Exception {
		return repository.findById(id)
				.orElseThrow(() -> new Exception("Card not found id="+id));
	}
	
	@PutMapping("/cards/{id}")
	public Card update(@RequestBody Card newEntity, @PathVariable Long id) {
		return repository.findById(id)
				.map(entity -> {
					entity.setNumber(newEntity.getNumber());
					entity.setCcv(newEntity.getCcv());
					entity.setType(newEntity.getType());
					return repository.save(entity);
				})
				.orElseGet(() -> {
					newEntity.setId(id);
					return repository.save(newEntity);
				});
	}

}
