package com.mycompany.banking;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.mycompany.banking.consultant.Consultant;
import com.mycompany.banking.consultant.ConsultantController;
import com.mycompany.banking.consultant.ConsultantRepository;

@RunWith(SpringJUnit4ClassRunner.class)
public class MockitoTests {
	
	@Mock
	ConsultantRepository consultantRepository;

	@InjectMocks
	private ConsultantController consultantController;
	
	@Before
	public void setup(){
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void consultantsShouldReturnValues(){
		List<Consultant> consultants = new ArrayList<>();
		consultants.add(new Consultant("nameTest", "specialtyTest"));
		when(consultantRepository.findAll()).thenReturn(consultants);
		
		List<Consultant> result = consultantController.list();
		assertEquals(0, result.size());
	}	
}
