package com.mycompany.banking.card;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;

import com.mycompany.banking.customer.Customer;

@Entity
public class Card {
	
	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
	
	private @Size(max=16) String number;
	private @Size(min=3, max=4) String ccv;
	private @Size(max=50) String type;
	
	@ManyToOne
	Customer customer;
			
	public Card() {
		
	}

	public Card(String number, String ccv, String type) {
		this.number = number;
		this.ccv = ccv;
		this.type = type;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getCcv() {
		return ccv;
	}
	public void setCcv(String ccv) {
		this.ccv = ccv;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
}
