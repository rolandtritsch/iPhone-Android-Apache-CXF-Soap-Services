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

package demo.iphone.simple;

import java.util.Random;

import java.util.logging.Logger;

import org.apache.hello_world_soap_http.Greeter;
import org.apache.hello_world_soap_http.PingMeFault;
import org.apache.hello_world_soap_http.types.FaultDetail;

@javax.jws.WebService(portName = "SoapPort", serviceName = "SOAPService", 
                      targetNamespace = "http://apache.org/hello_world_soap_http", 
                      endpointInterface = "org.apache.hello_world_soap_http.Greeter")
                  
public class GreeterImpl implements Greeter {    
    /* (non-Javadoc)
     * @see org.apache.hello_world_soap_http.Greeter#greetMe(java.lang.String)
     */
    public String greetMe(String me) {
        System.out.println("Executing operation greetMe");
        System.out.println("Message received: " + me);

        return "Hello " + me;
    }
    
    /* (non-Javadoc)
     * @see org.apache.hello_world_soap_http.Greeter#greetMeOneWay(java.lang.String)
     */
    public void greetMeOneWay(String me) {
        System.out.println("Executing operation greetMeOneWay");
        System.out.println("Hello there " + me);

	return;
    }

    /* (non-Javadoc)
     * @see org.apache.hello_world_soap_http.Greeter#sayHi()
     */
    public String sayHi() {
        System.out.println("Executing operation sayHi");

        return greeting();
    }
    
    public void pingMe() throws PingMeFault {
        FaultDetail faultDetail = new FaultDetail();
        faultDetail.setMajor((short)2);
        faultDetail.setMinor((short)1);
        System.out.println("Executing operation pingMe, throwing PingMeFault exception");
        throw new PingMeFault("PingMeFault raised by server", faultDetail);

	// return;
    }

    private Random generator = new Random();
    private String greeting() {
        String greetings[] = new String[] {
	    "Austrian - Kuess d' Haaannnnd, gnaedige Frau!",
	    "Bavarian - Gruess Godd!",
	    "German - Guten Tag!",
	    "Hessian - Ei, gudde wie!",
	    "Platt - Moin, moin!",
	    "Swabian - n' Obaend mitanand!",
	    "Swiss - Gruezi!"
	};
 
        return greetings[generator.nextInt(greetings.length-1)];
    }
}
