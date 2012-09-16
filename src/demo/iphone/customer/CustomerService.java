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
package demo.iphone.customer;

import java.util.HashMap;
import java.util.Map;
import java.util.HashSet;
import java.util.Set;
import java.util.Vector;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/")
@Produces("application/xml")
public class CustomerService {
    private Long currentId = new Long(0);
    private Map<Long, Customer> customers = new HashMap<Long, Customer>();
    private Map<Long, Order> orders = new HashMap<Long, Order>();

    public CustomerService() {
        init();
    }

    @GET
    @Path("/")
    public Customers getCustomers() {
	System.out.println("----invoking getCustomers");
	Customers result = new Customers(new Vector<Customer>(customers.values()));        
	return result;
    }

    @GET
    @Path("/Customer/{id}")
    public Customer getCustomer(@PathParam("id") String id) {
        System.out.println("----invoking getCustomer, Customer id is: " + id);
        long idNumber = Long.parseLong(id);
        Customer c = customers.get(idNumber);
        return c;
    }

    @PUT
    @Path("/Customer")
    public Response updateCustomer(Customer customer) {
        System.out.println("----invoking updateCustomer, Customer name is: " + customer.getName());
        Customer c = customers.get(customer.getId());
        Response r;
        if (c != null) {
            customers.put(customer.getId(), customer);
            r = Response.ok().build();
        } else {
            r = Response.notModified().build();
        }

        return r;
    }

    @POST
    @Path("/Customer")
    public Response addCustomer(Customer customer) {
        System.out.println("----invoking addCustomer, Customer name is: " + customer.getName());
        customer.setId(currentId++);

        customers.put(customer.getId(), customer);

        return Response.ok(customer).build();
    }

    @DELETE
    @Path("/Customer/{id}")
    public Response deleteCustomer(@PathParam("id") String id) {
        System.out.println("----invoking deleteCustomer, Customer id is: " + id);
        long idNumber = Long.parseLong(id);
        Customer c = customers.get(idNumber);

        Response r;
        if (c != null) {
            r = Response.ok().build();
            customers.remove(idNumber);
        } else {
            r = Response.notModified().build();
        }

        return r;
    }

    // ------------------------------------------

    final void init() {
        // System.out.println("----invoking init");
        int id = 0;
        int numberOfCustomers=4;
	for(id=100; id<100+numberOfCustomers; id++) {
	    Customer c = new Customer();
	    c.setName("John_" + id);
	    c.setId(id);
	    customers.put(c.getId(), c);
	}
        currentId = new Long(id);

        Order o = new Order();
        o.setDescription("order 223");
        o.setId(223);
        orders.put(o.getId(), o);
    }
}
