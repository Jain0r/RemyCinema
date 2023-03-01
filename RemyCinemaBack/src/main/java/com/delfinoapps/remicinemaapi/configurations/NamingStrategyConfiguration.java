package com.delfinoapps.remicinemaapi.configurations;

import org.hibernate.boot.model.naming.PhysicalNamingStrategy;
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NamingStrategyConfiguration {

    @Bean
    public PhysicalNamingStrategy physical(){
        return new PhysicalNamingStrategyStandardImpl();
    }
}
