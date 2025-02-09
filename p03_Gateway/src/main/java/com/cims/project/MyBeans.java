package com.cims.project;

import java.util.Arrays;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class MyBeans {
	@Bean
	public RouteLocator customRouterLocator(RouteLocatorBuilder builder) {
		return builder.routes() 
				.route("P03AUTH", r -> r.path("/auth/**")
						 .uri("lb://P03AUTH")) 
				.route("P03CRUD",r->r.path("/admin/**")
						.uri("lb://P03CRUD"))
				.route("P03CRUD",r->r.path("/director/**")
						.uri("lb://P03CRUD"))
				.route("P03CRUD",r->r.path("/ipmanager/**")
						.uri("lb://P03CRUD"))
				.route("P03CRUD",r->r.path("/projectmanager/**")
						.uri("lb://P03CRUD"))
				.route("P03CRUD",r->r.path("/siteoperator/**")
						.uri("lb://P03CRUD"))
				.route("P03CRUD",r->r.path("/user/**")
						.uri("lb://P03CRUD"))
				.route("P03TRANSACTION",r->r.path("/transaction/Request/**")
						.uri("lb://P03TRANSACTION"))
				.route("P03TRANSACTION",r->r.path("/transaction/Report/**")
						.uri("lb://P03TRANSACTION"))
					.build();
				
	}
	
	
	@Bean
    public CorsWebFilter corsWebFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Arrays.asList("http://localhost:3003")); // Frontend URL
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));

//        source.registerCorsConfiguration("/", config);
       // UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsWebFilter(source);
    }
}
