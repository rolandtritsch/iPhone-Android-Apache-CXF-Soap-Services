/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package demo.iphone;

import demo.iphone.simple.*;
import demo.iphone.beverage.*;
import demo.iphone.bank.*;
import demo.iphone.customer.*;

import javax.xml.ws.Endpoint;

import org.apache.cxf.jaxrs.JAXRSServerFactoryBean;
import org.apache.cxf.jaxrs.lifecycle.SingletonResourceProvider;


public class Server {
    private final static String baseUrl = "http://localhost:9000";
    protected Server() throws Exception {
        Object greeterServiceImpl = new GreeterImpl();
        String greeterServiceAddress = baseUrl + "/SimpleService";
        Endpoint.publish(greeterServiceAddress, greeterServiceImpl);

        Object beverageServiceImpl = new BeverageServiceImpl();
        String beverageServiceAddress = baseUrl + "/BeverageService";
        Endpoint.publish(beverageServiceAddress, beverageServiceImpl);

        Object bankServiceImpl = new BankServiceImpl();
        String bankServiceAddress = baseUrl + "/BankService";
        Endpoint.publish(bankServiceAddress, bankServiceImpl);

        JAXRSServerFactoryBean sf = new JAXRSServerFactoryBean();
        sf.setResourceClasses(CustomerService.class);
        sf.setResourceProvider(CustomerService.class, 
            new SingletonResourceProvider(new CustomerService()));
        sf.setAddress(baseUrl + "/CustomerService");
        sf.create();
    }

    public static void main(String args[]) throws Exception {
        System.out.println("Starting server ...");
        new Server();
        System.out.println("... ready!");

        Thread.sleep(60 * 60 * 1000);
        System.out.println("Server exiting ...");
        System.exit(0);
    }
}
