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

/*
This is a big piece of source code :(.
But the structure is quite simple :).

This is an AJAX application, means we have an HTML file
with lots of <div>...</div> sections in it. at any given
point in time only one of them is "selected=true" (initially
the first one).

Means every time we go from one screen to the next screen,
we have to unselect the current screen (<div> section) and
set select to true on the new/next screen. last but not 
least we need to set the new title.

For every screen we need ...

- a back function - what happens, if the user clicks on the
back button (onClickBack...)
- and a set of onClick<screenName><functionName> functions
to react to screen events
- and (if there is a SOAP invokation) a callback function 
for success (onSuccess<functionName>) and one for failure
(onFailure<functionName>)

The comments try to help with the navigation hierarchy,
means you can see where the screen is ...

// = screen 1
// == screen 1.1
// == screen 1.2
// === screen 1.2.1
// = screen 2
// == screen 2.1

Here is the TOC ...

- helper functions
  -- all the functions to get the services. please note
  that all the madness, how to get a valid XmlHttpRequest
  object is hidden from the source code :)

  -- all the functions to manipulate the screen

- all screens
  -- back function
  -- onclick functions
  -- callback functions
*/

// - helper functions

// -- get services helpers 

var theGreeterService = null;
function GetGreeterService() {
  if(theGreeterService == null) {
    theGreeterService = new apache_org_hello_world_soap_http_Greeter();
    theGreeterService.url = "/SimpleService";
  }

  return theGreeterService;
}

var theBeverageService = null;
function GetBeverageService() {
  if(theBeverageService == null) {
    theBeverageService = new urn_cxf_apache_org_beverage_BeverageService();
    theBeverageService.url = "/BeverageService";
  }

  return theBeverageService;
}

var theBankService = null;
function GetBankService() {
  if(theBankService == null) {
    theBankService = new urn_cxf_apache_org_bank_BankService();
    theBankService.url = "/BankService";
  }

  return theBankService;
}

// -- change screen helpers

function changeTitle(newTitle) {
  var newTitleTextNode = document.createTextNode(newTitle);
  var curTitleNode = document.getElementById("title");
  var curTitleTextNode = curTitleNode.firstChild;
  curTitleNode.replaceChild(newTitleTextNode, curTitleTextNode);

  return;
}

function selectPanel(panelId, isSelected) {
  document.getElementById(panelId).setAttribute("selected", isSelected);

  return;
}

// - all screens

// = sample screen

function onClickBackFromMain() {
  alert("are you kidding :)");

  return;
}

function onClickSimple() {
  changeTitle("Simple");
  selectPanel("Main", "false");
  selectPanel("Main.Simple", "true");    

  return;
}

function onClickBeverage() {
  changeTitle("Beverage");
  selectPanel("Main", "false");
  selectPanel("Main.Beverage", "true");    

  return;
}

function onClickBank() {
  changeTitle("Bank");
  selectPanel("Main", "false");
  selectPanel("Main.Bank", "true");    

  return;
}

function onClickCustomer() {
  changeTitle("Customer");
  selectPanel("Main", "false");
  selectPanel("Main.Customer", "true");    

  return;
}

// == simple screen

function onClickBackFromSimple() {
  changeTitle("Main");
  selectPanel("Main.Simple", "false");
  selectPanel("Main", "true");

  return;
}

function onClickSimpleSayHi() {
  changeTitle("SayHi");
  selectPanel("Main.Simple", "false");
  selectPanel("Main.Simple.SayHi", "true");    

  return;
}

function onClickSimpleGreetMe() {
  changeTitle("GreetMe");
  selectPanel("Main.Simple", "false");
  selectPanel("Main.Simple.GreetMe", "true");    

  return;
}

function onClickSimpleGreetMeOneWay() {
  changeTitle("...OneWay");
  selectPanel("Main.Simple", "false");
  selectPanel("Main.Simple.GreetMeOneWay", "true");    

  return;
}

function onClickSimplePingMe() {
  changeTitle("PingMe");
  selectPanel("Main.Simple", "false");
  selectPanel("Main.Simple.PingMe", "true");    

  return;
}

// === simple sayhi screen

function onClickBackFromSimpleSayHi() {
  changeTitle("Simple");
  selectPanel("Main.Simple.SayHi", "false");
  selectPanel("Main.Simple", "true");

  return;
}

function onClickSimpleSayHiInvoke() {
  var service = GetGreeterService();
  service.sayHi(onSuccessSayHi, onFailureSayHi);

  return;
}

function onSuccessSayHi(response) {
  document.getElementById("sayHiResponse").firstChild.nodeValue = 
    response.getResponseType();

  return;
}

function onFailureSayHi(error) {
  alert(error);

  return;
}

// === simple greetme screen

function onClickBackFromSimpleGreetMe() {
  changeTitle("Simple");
  selectPanel("Main.Simple.GreetMe", "false");
  selectPanel("Main.Simple", "true");

  return;
}

function onClickSimpleGreetMeInvoke() {
  var greetMeRequest = document.getElementById("greetMeRequest").value;
  var service = GetGreeterService();
  service.greetMe(onSuccessGreetMe, onFailureGreetMe, greetMeRequest);

  return;
}

function onSuccessGreetMe(response) {
  document.getElementById("greetMeResponse").firstChild.nodeValue = 
    response.getResponseType();

  return;
}

function onFailureGreetMe(error) {
  alert(error);

  return;
}

// === simple greetmeonway screen

function onClickBackFromSimpleGreetMeOneWay() {
  changeTitle("Simple");
  selectPanel("Main.Simple.GreetMeOneWay", "false");
  selectPanel("Main.Simple", "true");

  return;
}

var invokedGreetMeOneWay = 0;
function onClickSimpleGreetMeOneWayInvoke() {
  var greetMeOneWayRequest = document.getElementById("greetMeOneWayRequestName").value;
  var service = GetGreeterService();
  service.greetMeOneWay(greetMeOneWayRequest);

  invokedGreetMeOneWay++;
  var progressBar = "invoked ";
  for(var i=0; i<invokedGreetMeOneWay; i++) {
    progressBar = progressBar + ".";
  }
  document.getElementById("greetMeOneWayResponse").firstChild.nodeValue = progressBar;

  return;
}

// === simple pingme screen

function onClickBackFromSimplePingMe() {
  changeTitle("Simple");
  selectPanel("Main.Simple.PingMe", "false");
  selectPanel("Main.Simple", "true");

  return;
}

var invokedPingMe = 0;
function onClickSimplePingMeInvoke() {
  var service = GetGreeterService();
  service.pingMe(onSuccessPingMe, onFailurePingMe);

  invokedPingMe++;
  var progressBar = "invoked ";
  for(var i=0; i<invokedPingMe; i++) {
    progressBar = progressBar + ".";
  }
  document.getElementById("pingMeResponse").firstChild.nodeValue = progressBar;

  return;
}

function onSuccessPingMe(response) {
  alert("Uppps ... this should never have happend!!!");

  return;
}

function onFailurePingMe(error) {
  alert(error);

  return;
}

// == beverage screen

function onClickBackFromBeverage() {
  changeTitle("Main");
  selectPanel("Main.Beverage", "false");
  selectPanel("Main", "true");

  return;
}

function onClickBeverageCategoryInvoke() {
  var responseField = document.getElementById("beverageResponse");
  responseField.firstChild.nodeValue = " - pending - ";

  var category = document.getElementById("beverageCategory"); 
  var categoryValue = category.options[category.selectedIndex].value;
  var service = GetBeverageService();
  service.getBeverageWithIngredientCategory(onSuccessGetBeverages, onFailureGetBeverages, categoryValue);

  return;
}

function onSuccessGetBeverages(response) {
  var beverages = response.getItem();
  var str = "";
  for(b in beverages) {
    str = str + beverages[b].getName();
    str = str + " ";
  }
  var responseField = document.getElementById("beverageResponse");
  responseField.firstChild.nodeValue = str;

  return;
}

function onFailureGetBeverages(error) {
  alert(error);

  return;
}

// == bank login screen

function onClickBackFromBank() {
  changeTitle("Main");
  selectPanel("Main.Bank", "false");
  selectPanel("Main", "true");

  return;
}

function onClickBankLoginInvoke() {
  var toBeAuthenticated = document.getElementById("bankLoginRequestUsername").value;

  var service = GetBankService();
  service.login(onSuccessBankLogin, onFailureBankLogin, toBeAuthenticated);

  return;
}

var username = "";
function onSuccessBankLogin(response) {
  var authenticated = response;

  if(!authenticated) {
    username = "";
    return;
  }
  username = document.getElementById("bankLoginRequestUsername").value;

  changeTitle("Home");
  selectPanel("Main.Bank", "false");
  selectPanel("Main.Bank.Home", "true");

  return;    
}

function onFailureBankLogin(error) {
  alert(error);
  
  return;
}

// === bank home screen

function onClickBackFromBankHome() {
  changeTitle("Login");
  selectPanel("Main.Bank.Home", "false");
  selectPanel("Main.Bank", "true");

  return;
}

function onClickBankSetup() {
  changeTitle("Setup");
  selectPanel("Main.Bank.Home", "false");
  selectPanel("Main.Bank.Setup", "true");

  return;
}

function onClickBankPay() {
  var service = GetBankService();
  service.getCustomers(onSuccessBankGetCustomers, onFailureBankGetCustomers);

  return;
}

function onSuccessBankGetCustomers(response) {
  // get rid of the old customer list (<select id="to"><option>...)
  var curSelectNode = document.getElementById("toBankCustomer");
  var curOptionNodes = curSelectNode.getElementsByTagName("option");
  var curOptionNodesLength = curOptionNodes.length;
  for(var i=0; i<curOptionNodesLength; i++) {
    curSelectNode.removeChild(curOptionNodes[0]);
  }    

  // now create a new set of <option> elements and append them
  // to the <select> node
  var customers = response.getItem();
  for(c in customers) {
    var customerName = customers[c].getName();
    var newOptionNode = document.createElement("option");
    newOptionNode.appendChild(document.createTextNode(customerName));
    curSelectNode.appendChild(newOptionNode);
  }

  // display the new/updated payment screen
  changeTitle("Pay");
  selectPanel("Main.Bank.Home", "false");
  selectPanel("Main.Bank.Pay", "true");
    
  return;   
} 

function onFailureBankGetCustomers(error) {
  alert("error");

  return;
}  

// ---

function onClickBankHistory() {
  var service = GetBankService();
  service.getTransactions(onSuccessBankGetHistory, onFailureBankGetHistory, username);

  return;
}

function onSuccessBankGetHistory(response) {
  // get rid of the old transaction list (<ul id="transactions"><li><center>...)
  var curListNode = document.getElementById("bankTransactionsResponse");
  var curListItemNodes = curListNode.getElementsByTagName("li");
  var curListItemNodesLength = curListItemNodes.length;
  for(var i=0; i<curListItemNodesLength; i++) {
    curListNode.removeChild(curListItemNodes[0]);
  }    

  // build up a/the new transaction list
  var transactions = response.getItem();
  for(t in transactions) {
    var to = transactions[t].getTo();
    var amount = transactions[t].getAmount();

    var newListItemNode = document.createElement("li");
    newListItemNode.appendChild(document.createTextNode(to + " --> " + amount));
    curListNode.appendChild(newListItemNode);
  }

  // move on to the next screen
  changeTitle("History");
  selectPanel("Main.Bank.Home", "false");
  selectPanel("Main.Bank.History", "true");
    
  return;   
}

function onFailureBankGetHistory(error) {
  alert(error);

  return;
}

// === bank setup screen

function onClickBackFromBankSetup() {
  changeTitle("Home");
  selectPanel("Main.Bank.Setup", "false");
  selectPanel("Main.Bank.Home", "true");

  return;
}

function onClickBankSetupInvoke() {
  var newCustomer = document.getElementById("bankSetupRequestNewCustomer").value;

  var service = GetBankService();
  service.addCustomer(onSuccessBankSetup, onFailureBankSetup, newCustomer);

  return;
}

function onSuccessBankSetup(response) {
  // just return to the previous screen
  onClickBackFromBankSetup();

  return;    
}

function onFailureBankSetup(error) {
  alert(error);
  
  return;
}

// === bank pay screen

function onClickBackFromBankPay() {
  changeTitle("Home");
  selectPanel("Main.Bank.Pay", "false");
  selectPanel("Main.Bank.Home", "true");

  return;
}

function onClickBankPaymentInvoke() {
  var from = username;
  var to = document.getElementById("toBankCustomer").value;
  var amount = document.getElementById("amountToBePayed").value;

  var service = GetBankService();
  service.makePayment(onSuccessBankPayment, onFailureBankPayment, from, to, amount);

  return;
}

function onSuccessBankPayment(response) {
  // just return to the previous screen
  onClickBackFromBankPay();

  return;
}

function onFailureBankPayment(error) {
  alert(error);

  return;
}

// === bank history screen

function onClickBackFromBankHistory() {
  changeTitle("Home");
  selectPanel("Main.Bank.History", "false");
  selectPanel("Main.Bank.Home", "true");

  return;
}


