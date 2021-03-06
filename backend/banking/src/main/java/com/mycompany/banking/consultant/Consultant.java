package com.mycompany.banking.consultant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Consultant {

	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
	
	private @Size(max=50) String name;
	private @Size(max=50) String specialty;
	
	public Consultant() {

	}

	public Consultant(String name, String specialty) {
		super();
		this.name = name;
		this.specialty = specialty;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSpecialty() {
		return specialty;
	}
	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}
}
