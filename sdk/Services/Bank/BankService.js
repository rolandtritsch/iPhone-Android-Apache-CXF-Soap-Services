//
// Definitions for schema: urn:cxf.apache.org:bank
//
//
// Constructor for XML Schema item {urn:cxf.apache.org:bank}customerArray
//
function urn_cxf_apache_org_bank_customerArray () {
    this.typeMarker = 'urn_cxf_apache_org_bank_customerArray';
    this._item = [];
}

//
// accessor is urn_cxf_apache_org_bank_customerArray.prototype.getItem
// element get for item
// - element type is {urn:cxf.apache.org:bank}customer
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is urn_cxf_apache_org_bank_customerArray.prototype.setItem
//
function urn_cxf_apache_org_bank_customerArray_getItem() { return this._item;}

urn_cxf_apache_org_bank_customerArray.prototype.getItem = urn_cxf_apache_org_bank_customerArray_getItem;

function urn_cxf_apache_org_bank_customerArray_setItem(value) { this._item = value;}

urn_cxf_apache_org_bank_customerArray.prototype.setItem = urn_cxf_apache_org_bank_customerArray_setItem;
//
// Serialize {urn:cxf.apache.org:bank}customerArray
//
function urn_cxf_apache_org_bank_customerArray_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._item != null) {
      for (var ax = 0;ax < this._item.length;ax ++) {
       if (this._item[ax] == null) {
        xml = xml + '<item xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._item[ax].serialize(cxfjsutils, 'item', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

urn_cxf_apache_org_bank_customerArray.prototype.serialize = urn_cxf_apache_org_bank_customerArray_serialize;

function urn_cxf_apache_org_bank_customerArray_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_bank_customerArray();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing item');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = urn_cxf_apache_org_bank_customer_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item'));
     newobject.setItem(item);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn:cxf.apache.org:bank}customer
//
function urn_cxf_apache_org_bank_customer () {
    this.typeMarker = 'urn_cxf_apache_org_bank_customer';
    this._name = null;
}

//
// accessor is urn_cxf_apache_org_bank_customer.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is urn_cxf_apache_org_bank_customer.prototype.setName
//
function urn_cxf_apache_org_bank_customer_getName() { return this._name;}

urn_cxf_apache_org_bank_customer.prototype.getName = urn_cxf_apache_org_bank_customer_getName;

function urn_cxf_apache_org_bank_customer_setName(value) { this._name = value;}

urn_cxf_apache_org_bank_customer.prototype.setName = urn_cxf_apache_org_bank_customer_setName;
//
// Serialize {urn:cxf.apache.org:bank}customer
//
function urn_cxf_apache_org_bank_customer_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

urn_cxf_apache_org_bank_customer.prototype.serialize = urn_cxf_apache_org_bank_customer_serialize;

function urn_cxf_apache_org_bank_customer_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_bank_customer();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn:cxf.apache.org:bank}transactionArray
//
function urn_cxf_apache_org_bank_transactionArray () {
    this.typeMarker = 'urn_cxf_apache_org_bank_transactionArray';
    this._item = [];
}

//
// accessor is urn_cxf_apache_org_bank_transactionArray.prototype.getItem
// element get for item
// - element type is {urn:cxf.apache.org:bank}transaction
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is urn_cxf_apache_org_bank_transactionArray.prototype.setItem
//
function urn_cxf_apache_org_bank_transactionArray_getItem() { return this._item;}

urn_cxf_apache_org_bank_transactionArray.prototype.getItem = urn_cxf_apache_org_bank_transactionArray_getItem;

function urn_cxf_apache_org_bank_transactionArray_setItem(value) { this._item = value;}

urn_cxf_apache_org_bank_transactionArray.prototype.setItem = urn_cxf_apache_org_bank_transactionArray_setItem;
//
// Serialize {urn:cxf.apache.org:bank}transactionArray
//
function urn_cxf_apache_org_bank_transactionArray_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._item != null) {
      for (var ax = 0;ax < this._item.length;ax ++) {
       if (this._item[ax] == null) {
        xml = xml + '<item xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._item[ax].serialize(cxfjsutils, 'item', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

urn_cxf_apache_org_bank_transactionArray.prototype.serialize = urn_cxf_apache_org_bank_transactionArray_serialize;

function urn_cxf_apache_org_bank_transactionArray_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_bank_transactionArray();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing item');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = urn_cxf_apache_org_bank_transaction_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item'));
     newobject.setItem(item);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn:cxf.apache.org:bank}transaction
//
function urn_cxf_apache_org_bank_transaction () {
    this.typeMarker = 'urn_cxf_apache_org_bank_transaction';
    this._amount = 0;
    this._to = null;
}

//
// accessor is urn_cxf_apache_org_bank_transaction.prototype.getAmount
// element get for amount
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for amount
// setter function is is urn_cxf_apache_org_bank_transaction.prototype.setAmount
//
function urn_cxf_apache_org_bank_transaction_getAmount() { return this._amount;}

urn_cxf_apache_org_bank_transaction.prototype.getAmount = urn_cxf_apache_org_bank_transaction_getAmount;

function urn_cxf_apache_org_bank_transaction_setAmount(value) { this._amount = value;}

urn_cxf_apache_org_bank_transaction.prototype.setAmount = urn_cxf_apache_org_bank_transaction_setAmount;
//
// accessor is urn_cxf_apache_org_bank_transaction.prototype.getTo
// element get for to
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for to
// setter function is is urn_cxf_apache_org_bank_transaction.prototype.setTo
//
function urn_cxf_apache_org_bank_transaction_getTo() { return this._to;}

urn_cxf_apache_org_bank_transaction.prototype.getTo = urn_cxf_apache_org_bank_transaction_getTo;

function urn_cxf_apache_org_bank_transaction_setTo(value) { this._to = value;}

urn_cxf_apache_org_bank_transaction.prototype.setTo = urn_cxf_apache_org_bank_transaction_setTo;
//
// Serialize {urn:cxf.apache.org:bank}transaction
//
function urn_cxf_apache_org_bank_transaction_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<amount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._amount);
     xml = xml + '</amount>';
    }
    // block for local variables
    {
     if (this._to != null) {
      xml = xml + '<to>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._to);
      xml = xml + '</to>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

urn_cxf_apache_org_bank_transaction.prototype.serialize = urn_cxf_apache_org_bank_transaction_serialize;

function urn_cxf_apache_org_bank_transaction_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_bank_transaction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing amount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setAmount(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing to');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'to')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTo(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Definitions for service: {urn:cxf.apache.org:bank}BankServiceService
//

// Javascript for {urn:cxf.apache.org:bank}BankService

function urn_cxf_apache_org_bank_BankService () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this._onsuccess = null;
    this._onerror = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{urn:cxf.apache.org:bank}transactionArray'] = urn_cxf_apache_org_bank_transactionArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:bank}transactionArray'] = urn_cxf_apache_org_bank_transactionArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:bank}customerArray'] = urn_cxf_apache_org_bank_customerArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:bank}customerArray'] = urn_cxf_apache_org_bank_customerArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:bank}customerArray'] = urn_cxf_apache_org_bank_customerArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:bank}customerArray'] = urn_cxf_apache_org_bank_customerArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:bank}customer'] = urn_cxf_apache_org_bank_customer_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:bank}customer'] = urn_cxf_apache_org_bank_customer_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:bank}transactionArray'] = urn_cxf_apache_org_bank_transactionArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:bank}transactionArray'] = urn_cxf_apache_org_bank_transactionArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:bank}transaction'] = urn_cxf_apache_org_bank_transaction_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:bank}transaction'] = urn_cxf_apache_org_bank_transaction_deserialize;
}

function urn_cxf_apache_org_bank_addCustomer_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_bank_addCustomer_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_bank_addCustomerResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_bank_addCustomerResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.addCustomer_onsuccess = urn_cxf_apache_org_bank_addCustomer_op_onsuccess;

function urn_cxf_apache_org_bank_addCustomer_op_onerror() {
    if (this._onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = this.client.req.status;
      httpStatusText = this.client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     this._onerror(httpStatus, httpStatusText);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.addCustomer_onerror = urn_cxf_apache_org_bank_addCustomer_op_onerror;

//
// Operation {urn:cxf.apache.org:bank}addCustomer
// - bare operation. Parameters:
// - type {http://www.w3.org/2001/XMLSchema}string
//
function urn_cxf_apache_org_bank_addCustomer_op(successCallback, errorCallback, newCustomer) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = newCustomer;
    xml = this.addCustomer_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.addCustomer_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.addCustomer_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_bank_BankService.prototype.addCustomer = urn_cxf_apache_org_bank_addCustomer_op;

function urn_cxf_apache_org_bank_addCustomer_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:bank' ");
    // block for local variables
    {
     if (args[0] == null) {
      xml = xml + '<jns0:newCustomer xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:newCustomer>';
      xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
      xml = xml + '</jns0:newCustomer>';
     }
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_bank_BankService.prototype.addCustomer_serializeInput = urn_cxf_apache_org_bank_addCustomer_serializeInput;

function urn_cxf_apache_org_bank_addCustomerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnText = cxfjsutils.getNodeText(partElement);
    var returnObject = (returnText == 'true');
    return returnObject;
}
function urn_cxf_apache_org_bank_getCustomers_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_bank_getCustomers_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_bank_getCustomersResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_bank_getCustomersResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.getCustomers_onsuccess = urn_cxf_apache_org_bank_getCustomers_op_onsuccess;

function urn_cxf_apache_org_bank_getCustomers_op_onerror() {
    if (this._onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = this.client.req.status;
      httpStatusText = this.client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     this._onerror(httpStatus, httpStatusText);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.getCustomers_onerror = urn_cxf_apache_org_bank_getCustomers_op_onerror;

//
// Operation {urn:cxf.apache.org:bank}getCustomers
// - bare operation. Parameters:
//
function urn_cxf_apache_org_bank_getCustomers_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getCustomers_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.getCustomers_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.getCustomers_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_bank_BankService.prototype.getCustomers = urn_cxf_apache_org_bank_getCustomers_op;

function urn_cxf_apache_org_bank_getCustomers_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:bank' ");
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_bank_BankService.prototype.getCustomers_serializeInput = urn_cxf_apache_org_bank_getCustomers_serializeInput;

function urn_cxf_apache_org_bank_getCustomersResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = urn_cxf_apache_org_bank_customerArray_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function urn_cxf_apache_org_bank_makePayment_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_bank_makePayment_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_bank_makePaymentResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_bank_makePaymentResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.makePayment_onsuccess = urn_cxf_apache_org_bank_makePayment_op_onsuccess;

function urn_cxf_apache_org_bank_makePayment_op_onerror() {
    if (this._onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = this.client.req.status;
      httpStatusText = this.client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     this._onerror(httpStatus, httpStatusText);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.makePayment_onerror = urn_cxf_apache_org_bank_makePayment_op_onerror;

//
// Operation {urn:cxf.apache.org:bank}makePayment
// - bare operation. Parameters:
// - type {http://www.w3.org/2001/XMLSchema}string
// - type {http://www.w3.org/2001/XMLSchema}string
// - type {http://www.w3.org/2001/XMLSchema}int
//
function urn_cxf_apache_org_bank_makePayment_op(successCallback, errorCallback, from, to, amount) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = from;
    args[1] = to;
    args[2] = amount;
    xml = this.makePayment_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.makePayment_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.makePayment_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_bank_BankService.prototype.makePayment = urn_cxf_apache_org_bank_makePayment_op;

function urn_cxf_apache_org_bank_makePayment_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:bank' ");
    // block for local variables
    {
     if (args[0] == null) {
      xml = xml + '<jns0:from xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:from>';
      xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
      xml = xml + '</jns0:from>';
     }
    }
    // block for local variables
    {
     if (args[1] == null) {
      xml = xml + '<jns0:to xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:to>';
      xml = xml + cxfjsutils.escapeXmlEntities(args[1]);
      xml = xml + '</jns0:to>';
     }
    }
    // block for local variables
    {
     if (args[2] == null) {
      xml = xml + '<jns0:amount xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:amount>';
      xml = xml + cxfjsutils.escapeXmlEntities(args[2]);
      xml = xml + '</jns0:amount>';
     }
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_bank_BankService.prototype.makePayment_serializeInput = urn_cxf_apache_org_bank_makePayment_serializeInput;

function urn_cxf_apache_org_bank_makePaymentResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnText = cxfjsutils.getNodeText(partElement);
    var returnObject = (returnText == 'true');
    return returnObject;
}
function urn_cxf_apache_org_bank_login_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_bank_login_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_bank_loginResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_bank_loginResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.login_onsuccess = urn_cxf_apache_org_bank_login_op_onsuccess;

function urn_cxf_apache_org_bank_login_op_onerror() {
    if (this._onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = this.client.req.status;
      httpStatusText = this.client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     this._onerror(httpStatus, httpStatusText);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.login_onerror = urn_cxf_apache_org_bank_login_op_onerror;

//
// Operation {urn:cxf.apache.org:bank}login
// - bare operation. Parameters:
// - type {http://www.w3.org/2001/XMLSchema}string
//
function urn_cxf_apache_org_bank_login_op(successCallback, errorCallback, toBeAuthenticated) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = toBeAuthenticated;
    xml = this.login_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.login_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.login_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_bank_BankService.prototype.login = urn_cxf_apache_org_bank_login_op;

function urn_cxf_apache_org_bank_login_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:bank' ");
    // block for local variables
    {
     if (args[0] == null) {
      xml = xml + '<jns0:toBeAuthenticated xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:toBeAuthenticated>';
      xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
      xml = xml + '</jns0:toBeAuthenticated>';
     }
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_bank_BankService.prototype.login_serializeInput = urn_cxf_apache_org_bank_login_serializeInput;

function urn_cxf_apache_org_bank_loginResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnText = cxfjsutils.getNodeText(partElement);
    var returnObject = (returnText == 'true');
    return returnObject;
}
function urn_cxf_apache_org_bank_getTransactions_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_bank_getTransactions_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_bank_getTransactionsResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_bank_getTransactionsResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.getTransactions_onsuccess = urn_cxf_apache_org_bank_getTransactions_op_onsuccess;

function urn_cxf_apache_org_bank_getTransactions_op_onerror() {
    if (this._onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = this.client.req.status;
      httpStatusText = this.client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     this._onerror(httpStatus, httpStatusText);
    }
}

urn_cxf_apache_org_bank_BankService.prototype.getTransactions_onerror = urn_cxf_apache_org_bank_getTransactions_op_onerror;

//
// Operation {urn:cxf.apache.org:bank}getTransactions
// - bare operation. Parameters:
// - type {http://www.w3.org/2001/XMLSchema}string
//
function urn_cxf_apache_org_bank_getTransactions_op(successCallback, errorCallback, forCustomer) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = forCustomer;
    xml = this.getTransactions_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.getTransactions_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.getTransactions_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_bank_BankService.prototype.getTransactions = urn_cxf_apache_org_bank_getTransactions_op;

function urn_cxf_apache_org_bank_getTransactions_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:bank' ");
    // block for local variables
    {
     if (args[0] == null) {
      xml = xml + '<jns0:forCustomer xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:forCustomer>';
      xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
      xml = xml + '</jns0:forCustomer>';
     }
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_bank_BankService.prototype.getTransactions_serializeInput = urn_cxf_apache_org_bank_getTransactions_serializeInput;

function urn_cxf_apache_org_bank_getTransactionsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = urn_cxf_apache_org_bank_transactionArray_deserialize (cxfjsutils, partElement);

    return returnObject;
}
