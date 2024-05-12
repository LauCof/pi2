package com.grupo2.disfraces;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DisfracesApplication {
    private static Logger logger = LoggerFactory.getLogger(DisfracesApplication.class);

    public static void main(String[] args) {

		SpringApplication.run(DisfracesApplication.class, args);
		logger.info("*********** Aplicacion corriendo, todo en orden ✅✅✅ ***********" );
    }

}
