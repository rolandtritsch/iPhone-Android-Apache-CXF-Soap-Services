//
// Definitions for schema: http://apache.org/hello_world_soap_http/types
//  file:/Users/roland/Documents/50.Development/java/cxf/iphone/wsdl/hello_world.wsdl#types1
//
//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}sayHi
//
function apache_org_hello_world_soap_http_types_sayHi () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_sayHi';
}

//
// Serialize {http://apache.org/hello_world_soap_http/types}sayHi
//
function apache_org_hello_world_soap_http_types_sayHi_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_sayHi.prototype.serialize = apache_org_hello_world_soap_http_types_sayHi_serialize;

function apache_org_hello_world_soap_http_types_sayHi_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_sayHi();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}pingMeResponse
//
function apache_org_hello_world_soap_http_types_pingMeResponse () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_pingMeResponse';
}

//
// Serialize {http://apache.org/hello_world_soap_http/types}pingMeResponse
//
function apache_org_hello_world_soap_http_types_pingMeResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_pingMeResponse.prototype.serialize = apache_org_hello_world_soap_http_types_pingMeResponse_serialize;

function apache_org_hello_world_soap_http_types_pingMeResponse_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_pingMeResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}greetMeOneWay
//
function apache_org_hello_world_soap_http_types_greetMeOneWay () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_greetMeOneWay';
    this._requestType = '';
}

//
// accessor is apache_org_hello_world_soap_http_types_greetMeOneWay.prototype.getRequestType
// element get for requestType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for requestType
// setter function is is apache_org_hello_world_soap_http_types_greetMeOneWay.prototype.setRequestType
//
function apache_org_hello_world_soap_http_types_greetMeOneWay_getRequestType() { return this._requestType;}

apache_org_hello_world_soap_http_types_greetMeOneWay.prototype.getRequestType = apache_org_hello_world_soap_http_types_greetMeOneWay_getRequestType;

function apache_org_hello_world_soap_http_types_greetMeOneWay_setRequestType(value) { this._requestType = value;}

apache_org_hello_world_soap_http_types_greetMeOneWay.prototype.setRequestType = apache_org_hello_world_soap_http_types_greetMeOneWay_setRequestType;
//
// Serialize {http://apache.org/hello_world_soap_http/types}greetMeOneWay
//
function apache_org_hello_world_soap_http_types_greetMeOneWay_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://apache.org/hello_world_soap_http/types\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:requestType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._requestType);
     xml = xml + '</jns0:requestType>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_greetMeOneWay.prototype.serialize = apache_org_hello_world_soap_http_types_greetMeOneWay_serialize;

function apache_org_hello_world_soap_http_types_greetMeOneWay_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_greetMeOneWay();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing requestType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setRequestType(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}pingMe
//
function apache_org_hello_world_soap_http_types_pingMe () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_pingMe';
}

//
// Serialize {http://apache.org/hello_world_soap_http/types}pingMe
//
function apache_org_hello_world_soap_http_types_pingMe_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://apache.org/hello_world_soap_http/types\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_pingMe.prototype.serialize = apache_org_hello_world_soap_http_types_pingMe_serialize;

function apache_org_hello_world_soap_http_types_pingMe_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_pingMe();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}sayHiResponse
//
function apache_org_hello_world_soap_http_types_sayHiResponse () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_sayHiResponse';
    this._responseType = '';
}

//
// accessor is apache_org_hello_world_soap_http_types_sayHiResponse.prototype.getResponseType
// element get for responseType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for responseType
// setter function is is apache_org_hello_world_soap_http_types_sayHiResponse.prototype.setResponseType
//
function apache_org_hello_world_soap_http_types_sayHiResponse_getResponseType() { return this._responseType;}

apache_org_hello_world_soap_http_types_sayHiResponse.prototype.getResponseType = apache_org_hello_world_soap_http_types_sayHiResponse_getResponseType;

function apache_org_hello_world_soap_http_types_sayHiResponse_setResponseType(value) { this._responseType = value;}

apache_org_hello_world_soap_http_types_sayHiResponse.prototype.setResponseType = apache_org_hello_world_soap_http_types_sayHiResponse_setResponseType;
//
// Serialize {http://apache.org/hello_world_soap_http/types}sayHiResponse
//
function apache_org_hello_world_soap_http_types_sayHiResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://apache.org/hello_world_soap_http/types\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:responseType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._responseType);
     xml = xml + '</jns0:responseType>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_sayHiResponse.prototype.serialize = apache_org_hello_world_soap_http_types_sayHiResponse_serialize;

function apache_org_hello_world_soap_http_types_sayHiResponse_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_sayHiResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing responseType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setResponseType(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}greetMe
//
function apache_org_hello_world_soap_http_types_greetMe () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_greetMe';
    this._requestType = '';
}

//
// accessor is apache_org_hello_world_soap_http_types_greetMe.prototype.getRequestType
// element get for requestType
// - element type is {http://apache.org/hello_world_soap_http/types}MyStringType
// - required element
//
// element set for requestType
// setter function is is apache_org_hello_world_soap_http_types_greetMe.prototype.setRequestType
//
function apache_org_hello_world_soap_http_types_greetMe_getRequestType() { return this._requestType;}

apache_org_hello_world_soap_http_types_greetMe.prototype.getRequestType = apache_org_hello_world_soap_http_types_greetMe_getRequestType;

function apache_org_hello_world_soap_http_types_greetMe_setRequestType(value) { this._requestType = value;}

apache_org_hello_world_soap_http_types_greetMe.prototype.setRequestType = apache_org_hello_world_soap_http_types_greetMe_setRequestType;
//
// Serialize {http://apache.org/hello_world_soap_http/types}greetMe
//
function apache_org_hello_world_soap_http_types_greetMe_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://apache.org/hello_world_soap_http/types\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:requestType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._requestType);
     xml = xml + '</jns0:requestType>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_greetMe.prototype.serialize = apache_org_hello_world_soap_http_types_greetMe_serialize;

function apache_org_hello_world_soap_http_types_greetMe_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_greetMe();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing requestType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setRequestType(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}faultDetail
//
function apache_org_hello_world_soap_http_types_faultDetail () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_faultDetail';
    this._minor = '';
    this._major = '';
}

//
// accessor is apache_org_hello_world_soap_http_types_faultDetail.prototype.getMinor
// element get for minor
// - element type is {http://www.w3.org/2001/XMLSchema}short
// - required element
//
// element set for minor
// setter function is is apache_org_hello_world_soap_http_types_faultDetail.prototype.setMinor
//
function apache_org_hello_world_soap_http_types_faultDetail_getMinor() { return this._minor;}

apache_org_hello_world_soap_http_types_faultDetail.prototype.getMinor = apache_org_hello_world_soap_http_types_faultDetail_getMinor;

function apache_org_hello_world_soap_http_types_faultDetail_setMinor(value) { this._minor = value;}

apache_org_hello_world_soap_http_types_faultDetail.prototype.setMinor = apache_org_hello_world_soap_http_types_faultDetail_setMinor;
//
// accessor is apache_org_hello_world_soap_http_types_faultDetail.prototype.getMajor
// element get for major
// - element type is {http://www.w3.org/2001/XMLSchema}short
// - required element
//
// element set for major
// setter function is is apache_org_hello_world_soap_http_types_faultDetail.prototype.setMajor
//
function apache_org_hello_world_soap_http_types_faultDetail_getMajor() { return this._major;}

apache_org_hello_world_soap_http_types_faultDetail.prototype.getMajor = apache_org_hello_world_soap_http_types_faultDetail_getMajor;

function apache_org_hello_world_soap_http_types_faultDetail_setMajor(value) { this._major = value;}

apache_org_hello_world_soap_http_types_faultDetail.prototype.setMajor = apache_org_hello_world_soap_http_types_faultDetail_setMajor;
//
// Serialize {http://apache.org/hello_world_soap_http/types}faultDetail
//
function apache_org_hello_world_soap_http_types_faultDetail_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://apache.org/hello_world_soap_http/types\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:minor>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._minor);
     xml = xml + '</jns0:minor>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:major>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._major);
     xml = xml + '</jns0:major>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_faultDetail.prototype.serialize = apache_org_hello_world_soap_http_types_faultDetail_serialize;

function apache_org_hello_world_soap_http_types_faultDetail_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_faultDetail();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing minor');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMinor(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing major');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setMajor(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://apache.org/hello_world_soap_http/types}greetMeResponse
//
function apache_org_hello_world_soap_http_types_greetMeResponse () {
    this.typeMarker = 'apache_org_hello_world_soap_http_types_greetMeResponse';
    this._responseType = '';
}

//
// accessor is apache_org_hello_world_soap_http_types_greetMeResponse.prototype.getResponseType
// element get for responseType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
//
// element set for responseType
// setter function is is apache_org_hello_world_soap_http_types_greetMeResponse.prototype.setResponseType
//
function apache_org_hello_world_soap_http_types_greetMeResponse_getResponseType() { return this._responseType;}

apache_org_hello_world_soap_http_types_greetMeResponse.prototype.getResponseType = apache_org_hello_world_soap_http_types_greetMeResponse_getResponseType;

function apache_org_hello_world_soap_http_types_greetMeResponse_setResponseType(value) { this._responseType = value;}

apache_org_hello_world_soap_http_types_greetMeResponse.prototype.setResponseType = apache_org_hello_world_soap_http_types_greetMeResponse_setResponseType;
//
// Serialize {http://apache.org/hello_world_soap_http/types}greetMeResponse
//
function apache_org_hello_world_soap_http_types_greetMeResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://apache.org/hello_world_soap_http/types\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:responseType>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._responseType);
     xml = xml + '</jns0:responseType>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

apache_org_hello_world_soap_http_types_greetMeResponse.prototype.serialize = apache_org_hello_world_soap_http_types_greetMeResponse_serialize;

function apache_org_hello_world_soap_http_types_greetMeResponse_deserialize (cxfjsutils, element) {
    var newobject = new apache_org_hello_world_soap_http_types_greetMeResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing responseType');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setResponseType(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for service: {http://apache.org/hello_world_soap_http}SimpleService
//

// Javascript for {http://apache.org/hello_world_soap_http}Greeter

function apache_org_hello_world_soap_http_Greeter () {
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
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}sayHi'] = apache_org_hello_world_soap_http_types_sayHi_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}sayHi'] = apache_org_hello_world_soap_http_types_sayHi_deserialize;
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}pingMeResponse'] = apache_org_hello_world_soap_http_types_pingMeResponse_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}pingMeResponse'] = apache_org_hello_world_soap_http_types_pingMeResponse_deserialize;
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}greetMeOneWay'] = apache_org_hello_world_soap_http_types_greetMeOneWay_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}greetMeOneWay'] = apache_org_hello_world_soap_http_types_greetMeOneWay_deserialize;
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}pingMe'] = apache_org_hello_world_soap_http_types_pingMe_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}pingMe'] = apache_org_hello_world_soap_http_types_pingMe_deserialize;
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}sayHiResponse'] = apache_org_hello_world_soap_http_types_sayHiResponse_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}sayHiResponse'] = apache_org_hello_world_soap_http_types_sayHiResponse_deserialize;
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}greetMe'] = apache_org_hello_world_soap_http_types_greetMe_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}greetMe'] = apache_org_hello_world_soap_http_types_greetMe_deserialize;
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}faultDetail'] = apache_org_hello_world_soap_http_types_faultDetail_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}faultDetail'] = apache_org_hello_world_soap_http_types_faultDetail_deserialize;
    this.globalElementSerializers['{http://apache.org/hello_world_soap_http/types}greetMeResponse'] = apache_org_hello_world_soap_http_types_greetMeResponse_serialize;
    this.globalElementDeserializers['{http://apache.org/hello_world_soap_http/types}greetMeResponse'] = apache_org_hello_world_soap_http_types_greetMeResponse_deserialize;
}

function apache_org_hello_world_soap_http_pingMe_op_onsuccess(responseXml) {
    this.jsutils.trace('apache_org_hello_world_soap_http_pingMe_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling apache_org_hello_world_soap_http_pingMeResponse_deserializeResponse');
     responseObject = apache_org_hello_world_soap_http_pingMeResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

apache_org_hello_world_soap_http_Greeter.prototype.pingMe_onsuccess = apache_org_hello_world_soap_http_pingMe_op_onsuccess;

function apache_org_hello_world_soap_http_pingMe_op_onerror() {
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

apache_org_hello_world_soap_http_Greeter.prototype.pingMe_onerror = apache_org_hello_world_soap_http_pingMe_op_onerror;

//
// Operation {http://apache.org/hello_world_soap_http}pingMe
// Wrapped operation.
//
function apache_org_hello_world_soap_http_pingMe_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.pingMeRequest_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.pingMe_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.pingMe_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

apache_org_hello_world_soap_http_Greeter.prototype.pingMe = apache_org_hello_world_soap_http_pingMe_op;

function apache_org_hello_world_soap_http_pingMeRequest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new apache_org_hello_world_soap_http_types_pingMe();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://apache.org/hello_world_soap_http/types' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:pingMe', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

apache_org_hello_world_soap_http_Greeter.prototype.pingMeRequest_serializeInput = apache_org_hello_world_soap_http_pingMeRequest_serializeInput;

function apache_org_hello_world_soap_http_pingMeResponse_deserializeResponse(cxfjsutils, partElement) {
}
function apache_org_hello_world_soap_http_sayHi_op_onsuccess(responseXml) {
    this.jsutils.trace('apache_org_hello_world_soap_http_sayHi_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling apache_org_hello_world_soap_http_sayHiResponse_deserializeResponse');
     responseObject = apache_org_hello_world_soap_http_sayHiResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

apache_org_hello_world_soap_http_Greeter.prototype.sayHi_onsuccess = apache_org_hello_world_soap_http_sayHi_op_onsuccess;

function apache_org_hello_world_soap_http_sayHi_op_onerror() {
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

apache_org_hello_world_soap_http_Greeter.prototype.sayHi_onerror = apache_org_hello_world_soap_http_sayHi_op_onerror;

//
// Operation {http://apache.org/hello_world_soap_http}sayHi
// Wrapped operation.
//
function apache_org_hello_world_soap_http_sayHi_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.sayHiRequest_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.sayHi_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.sayHi_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

apache_org_hello_world_soap_http_Greeter.prototype.sayHi = apache_org_hello_world_soap_http_sayHi_op;

function apache_org_hello_world_soap_http_sayHiRequest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new apache_org_hello_world_soap_http_types_sayHi();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://apache.org/hello_world_soap_http/types' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:sayHi', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

apache_org_hello_world_soap_http_Greeter.prototype.sayHiRequest_serializeInput = apache_org_hello_world_soap_http_sayHiRequest_serializeInput;

function apache_org_hello_world_soap_http_sayHiResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = apache_org_hello_world_soap_http_types_sayHiResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
//
// Operation {http://apache.org/hello_world_soap_http}greetMeOneWay
// Wrapped operation.
// parameter requestType
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function apache_org_hello_world_soap_http_greetMeOneWay_op(requestType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = requestType;
    xml = this.greetMeOneWayRequest_serializeInput(this.jsutils, args);
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, false, requestHeaders);
}

apache_org_hello_world_soap_http_Greeter.prototype.greetMeOneWay = apache_org_hello_world_soap_http_greetMeOneWay_op;

function apache_org_hello_world_soap_http_greetMeOneWayRequest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new apache_org_hello_world_soap_http_types_greetMeOneWay();
    wrapperObj.setRequestType(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://apache.org/hello_world_soap_http/types' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:greetMeOneWay', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

apache_org_hello_world_soap_http_Greeter.prototype.greetMeOneWayRequest_serializeInput = apache_org_hello_world_soap_http_greetMeOneWayRequest_serializeInput;

function apache_org_hello_world_soap_http_greetMe_op_onsuccess(responseXml) {
    this.jsutils.trace('apache_org_hello_world_soap_http_greetMe_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling apache_org_hello_world_soap_http_greetMeResponse_deserializeResponse');
     responseObject = apache_org_hello_world_soap_http_greetMeResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

apache_org_hello_world_soap_http_Greeter.prototype.greetMe_onsuccess = apache_org_hello_world_soap_http_greetMe_op_onsuccess;

function apache_org_hello_world_soap_http_greetMe_op_onerror() {
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

apache_org_hello_world_soap_http_Greeter.prototype.greetMe_onerror = apache_org_hello_world_soap_http_greetMe_op_onerror;

//
// Operation {http://apache.org/hello_world_soap_http}greetMe
// Wrapped operation.
// parameter requestType
// - simple type {http://apache.org/hello_world_soap_http/types}MyStringType//
function apache_org_hello_world_soap_http_greetMe_op(successCallback, errorCallback, requestType) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = requestType;
    xml = this.greetMeRequest_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.greetMe_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.greetMe_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

apache_org_hello_world_soap_http_Greeter.prototype.greetMe = apache_org_hello_world_soap_http_greetMe_op;

function apache_org_hello_world_soap_http_greetMeRequest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new apache_org_hello_world_soap_http_types_greetMe();
    wrapperObj.setRequestType(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://apache.org/hello_world_soap_http/types' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:greetMe', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

apache_org_hello_world_soap_http_Greeter.prototype.greetMeRequest_serializeInput = apache_org_hello_world_soap_http_greetMeRequest_serializeInput;

function apache_org_hello_world_soap_http_greetMeResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = apache_org_hello_world_soap_http_types_greetMeResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
