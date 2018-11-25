package com.mycompany.banking.consumption;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;

import com.mycompany.banking.card.Card;

@Entity
public class Consumption {

	private @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
	
	private Date date;
	private @Size(max=100) String description;
	private Double amount;
	
	@ManyToOne
	Card card;
	
	public Consumption() {

	}
	
	public Consumption(Date date, String description, Double amount) {
		this.date = date;
		this.description = description;
		this.amount = amount;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public Card getCard() {
		return card;
	}
	public void setCard(Card card) {
		this.card = card;
	}
}
