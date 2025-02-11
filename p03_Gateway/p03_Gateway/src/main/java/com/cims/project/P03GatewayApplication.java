package com.cims.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class P03GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(P03GatewayApplication.class, args);
	}

}
