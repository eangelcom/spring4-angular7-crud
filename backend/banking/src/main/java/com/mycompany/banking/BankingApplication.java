package com.mycompany.banking;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mycompany.banking.card.Card;
import com.mycompany.banking.card.CardRepository;
import com.mycompany.banking.consultant.Consultant;
import com.mycompany.banking.consultant.ConsultantRepository;
import com.mycompany.banking.consumption.Consumption;
import com.mycompany.banking.consumption.ConsumptionRepository;
import com.mycompany.banking.customer.Customer;
import com.mycompany.banking.customer.CustomerRepository;

@SpringBootApplication
public class BankingApplication implements CommandLineRunner {
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	CardRepository cardRepository;
	
	@Autowired
	ConsumptionRepository consumptionRepository;
		
	@Autowired
	ConsultantRepository consultantRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(BankingApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Customer customer = new Customer("John Doe", "London", "St 1", "3002345678");
		
		Card card = new Card("1234432112344321", "123", "Visa");
		card.setCustomer(customer);
		
		Consumption consumption = new Consumption(new Date(), "Facilities", 100000D);
		consumption.setCard(card);
				
		customerRepository.save(customer);
		cardRepository.save(card);
		consumptionRepository.save(consumption);
		
		customerRepository.save(new Customer("Jane Doe", "Boston", "Av 2", "3019876543"));
		consultantRepository.save(new Consultant("Mary", "Visa Cards"));
		
	}
}
