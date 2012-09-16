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

package demo.iphone.bank.data;

import java.util.*;

public class CustomerHolder {
    private static CustomerHolder theHolder = null;

    private Map<String, Customer> customers;

    static public CustomerHolder getCurrent() {
	if(theHolder == null) {
	    theHolder = new CustomerHolder();
	    theHolder.init();
	}
	return theHolder;
    }

    public Map<String, Customer> getCustomers() {
	return customers;
    }

    public CustomerHolder() {
	customers = new TreeMap();
    }

    private void init() {
        for(int i=0; i<5; i++) {
	    Customer customer = addCustomer("Customer_" + i);
	    for(int j=0; j<10; j++) {
		customer.addTransaction("Customer_" + i + "_" + j, (j+1)*1000);
	    }
	}
        return;
    }

    public Customer addCustomer(String name) {
	String newCustomerName = new String(name);
	Customer customer = new Customer();
	customer.setName(newCustomerName);
	customers.put(newCustomerName, customer);

	return customer;
    }
}