package com.mycompany.banking;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import com.mycompany.banking.consultant.ConsultantRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class SpringBootTests {
	
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;
    
    @Mock
    ConsultantRepository consultantRepository;

    @Test
    public void consultantsShouldReturnValues() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/consultants",
                String.class)).contains("Visa");
    }

    @Test
    public void customersShouldReturnValues() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/customers",
                String.class)).contains("London");
    }    
}
