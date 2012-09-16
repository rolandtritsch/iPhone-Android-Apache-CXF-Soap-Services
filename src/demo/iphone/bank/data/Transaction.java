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

public class Transaction {
    private String to;
    private int amount;

    public Transaction() {
	this.to = "undefined";
	this.amount = 0;
    }

    public void setTo(String name) {
        this.to = name;
        return;
    }

    public String getTo() {
	return to;
    }

    public void setAmount(int amount) {
        this.amount = amount;
        return;
    }

    public int getAmount() {
	return amount;
    }
}
