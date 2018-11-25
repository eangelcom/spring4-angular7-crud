package com.mycompany.banking.customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Customer {
	
	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
	
	private @Size(max=50) String name;
	private @Size(max=30) String city;
	private @Size(max=100) String address;
	private @Size(max=20) String phone;
	
	public Customer() {
		
	}

	public Customer(String name, String city, String address, String phone) {
		this.name = name;
		this.city = city;
		this.address = address;
		this.phone = phone;
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
}
