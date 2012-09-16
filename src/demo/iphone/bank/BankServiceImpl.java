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

package demo.iphone.bank;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;

import javax.jws.WebService;

import demo.iphone.bank.data.*;

@WebService(endpointInterface = "demo.iphone.bank.BankService")
    public class BankServiceImpl implements BankService {
	public BankServiceImpl() {
	    return;
	}

	public boolean login(String toBeAuthenticated) {
	    return true;
	}

	public Customer[] getCustomers() {
	    ArrayList<Customer> customers = 
		new ArrayList<Customer> (CustomerHolder.getCurrent().getCustomers().values());

	    return customers.toArray(new Customer[0]);
	}

	public boolean makePayment(String from, String to, int amount) {
	    Map<String, Customer> customers = CustomerHolder.getCurrent().getCustomers();
	    Customer customer = customers.get(from);
	    customer.addTransaction(to, amount);
            
            return true;
	}

	public Transaction[] getTransactions(String forCustomer) {
	    Map<String, Customer> customers = CustomerHolder.getCurrent().getCustomers();
	    List<Transaction> transactions = customers.get(forCustomer).getHistory();

	    return transactions.toArray(new Transaction[0]);
	}

	public boolean addCustomer(String newCustomer) {
	    Customer customer = CustomerHolder.getCurrent().addCustomer(newCustomer);

	    return true;
	}
    }
