package com.cims.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class P03DiscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(P03DiscoveryApplication.class, args);
	}

}
