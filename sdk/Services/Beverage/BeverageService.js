//
// Definitions for schema: urn:cxf.apache.org:beverage:data
//
//
// Constructor for XML Schema item {urn:cxf.apache.org:beverage:data}categoryArray
//
function urn_cxf_apache_org_beverage_data_categoryArray () {
    this.typeMarker = 'urn_cxf_apache_org_beverage_data_categoryArray';
    this._item = [];
}

//
// accessor is urn_cxf_apache_org_beverage_data_categoryArray.prototype.getItem
// element get for item
// - element type is {urn:cxf.apache.org:beverage:data}category
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is urn_cxf_apache_org_beverage_data_categoryArray.prototype.setItem
//
function urn_cxf_apache_org_beverage_data_categoryArray_getItem() { return this._item;}

urn_cxf_apache_org_beverage_data_categoryArray.prototype.getItem = urn_cxf_apache_org_beverage_data_categoryArray_getItem;

function urn_cxf_apache_org_beverage_data_categoryArray_setItem(value) { this._item = value;}

urn_cxf_apache_org_beverage_data_categoryArray.prototype.setItem = urn_cxf_apache_org_beverage_data_categoryArray_setItem;
//
// Serialize {urn:cxf.apache.org:beverage:data}categoryArray
//
function urn_cxf_apache_org_beverage_data_categoryArray_serialize(cxfjsutils, elementName, extraNamespaces) {
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
        xml = xml + '<item>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._item[ax]);
        xml = xml + '</item>';
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

urn_cxf_apache_org_beverage_data_categoryArray.prototype.serialize = urn_cxf_apache_org_beverage_data_categoryArray_serialize;

function urn_cxf_apache_org_beverage_data_categoryArray_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_beverage_data_categoryArray();
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
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
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
// Simple type (enumeration) {urn:cxf.apache.org:beverage:data}category
//
// - Animal
// - Vegetable
// - Mineral
//
// Constructor for XML Schema item {urn:cxf.apache.org:beverage:data}beverage
//
function urn_cxf_apache_org_beverage_data_beverage () {
    this.typeMarker = 'urn_cxf_apache_org_beverage_data_beverage';
    this._ingredients = [];
    this._name = null;
    this._proof = 0;
}

//
// accessor is urn_cxf_apache_org_beverage_data_beverage.prototype.getIngredients
// element get for ingredients
// - element type is {urn:cxf.apache.org:beverage:data}ingredient
// - required element
// - array
// - nillable
//
// element set for ingredients
// setter function is is urn_cxf_apache_org_beverage_data_beverage.prototype.setIngredients
//
function urn_cxf_apache_org_beverage_data_beverage_getIngredients() { return this._ingredients;}

urn_cxf_apache_org_beverage_data_beverage.prototype.getIngredients = urn_cxf_apache_org_beverage_data_beverage_getIngredients;

function urn_cxf_apache_org_beverage_data_beverage_setIngredients(value) { this._ingredients = value;}

urn_cxf_apache_org_beverage_data_beverage.prototype.setIngredients = urn_cxf_apache_org_beverage_data_beverage_setIngredients;
//
// accessor is urn_cxf_apache_org_beverage_data_beverage.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is urn_cxf_apache_org_beverage_data_beverage.prototype.setName
//
function urn_cxf_apache_org_beverage_data_beverage_getName() { return this._name;}

urn_cxf_apache_org_beverage_data_beverage.prototype.getName = urn_cxf_apache_org_beverage_data_beverage_getName;

function urn_cxf_apache_org_beverage_data_beverage_setName(value) { this._name = value;}

urn_cxf_apache_org_beverage_data_beverage.prototype.setName = urn_cxf_apache_org_beverage_data_beverage_setName;
//
// accessor is urn_cxf_apache_org_beverage_data_beverage.prototype.getProof
// element get for proof
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for proof
// setter function is is urn_cxf_apache_org_beverage_data_beverage.prototype.setProof
//
function urn_cxf_apache_org_beverage_data_beverage_getProof() { return this._proof;}

urn_cxf_apache_org_beverage_data_beverage.prototype.getProof = urn_cxf_apache_org_beverage_data_beverage_getProof;

function urn_cxf_apache_org_beverage_data_beverage_setProof(value) { this._proof = value;}

urn_cxf_apache_org_beverage_data_beverage.prototype.setProof = urn_cxf_apache_org_beverage_data_beverage_setProof;
//
// Serialize {urn:cxf.apache.org:beverage:data}beverage
//
function urn_cxf_apache_org_beverage_data_beverage_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._ingredients != null) {
      for (var ax = 0;ax < this._ingredients.length;ax ++) {
       if (this._ingredients[ax] == null) {
        xml = xml + '<ingredients xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._ingredients[ax].serialize(cxfjsutils, 'ingredients', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     xml = xml + '<proof>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._proof);
     xml = xml + '</proof>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

urn_cxf_apache_org_beverage_data_beverage.prototype.serialize = urn_cxf_apache_org_beverage_data_beverage_serialize;

function urn_cxf_apache_org_beverage_data_beverage_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_beverage_data_beverage();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ingredients');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'ingredients')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = urn_cxf_apache_org_beverage_data_ingredient_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'ingredients'));
     newobject.setIngredients(item);
    }
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing proof');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setProof(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {urn:cxf.apache.org:beverage:data}ingredient
//
function urn_cxf_apache_org_beverage_data_ingredient () {
    this.typeMarker = 'urn_cxf_apache_org_beverage_data_ingredient';
    this._category = null;
    this._name = null;
}

//
// accessor is urn_cxf_apache_org_beverage_data_ingredient.prototype.getCategory
// element get for category
// - element type is {urn:cxf.apache.org:beverage:data}category
// - optional element
//
// element set for category
// setter function is is urn_cxf_apache_org_beverage_data_ingredient.prototype.setCategory
//
function urn_cxf_apache_org_beverage_data_ingredient_getCategory() { return this._category;}

urn_cxf_apache_org_beverage_data_ingredient.prototype.getCategory = urn_cxf_apache_org_beverage_data_ingredient_getCategory;

function urn_cxf_apache_org_beverage_data_ingredient_setCategory(value) { this._category = value;}

urn_cxf_apache_org_beverage_data_ingredient.prototype.setCategory = urn_cxf_apache_org_beverage_data_ingredient_setCategory;
//
// accessor is urn_cxf_apache_org_beverage_data_ingredient.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is urn_cxf_apache_org_beverage_data_ingredient.prototype.setName
//
function urn_cxf_apache_org_beverage_data_ingredient_getName() { return this._name;}

urn_cxf_apache_org_beverage_data_ingredient.prototype.getName = urn_cxf_apache_org_beverage_data_ingredient_getName;

function urn_cxf_apache_org_beverage_data_ingredient_setName(value) { this._name = value;}

urn_cxf_apache_org_beverage_data_ingredient.prototype.setName = urn_cxf_apache_org_beverage_data_ingredient_setName;
//
// Serialize {urn:cxf.apache.org:beverage:data}ingredient
//
function urn_cxf_apache_org_beverage_data_ingredient_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._category != null) {
      xml = xml + '<category>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._category);
      xml = xml + '</category>';
     }
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

urn_cxf_apache_org_beverage_data_ingredient.prototype.serialize = urn_cxf_apache_org_beverage_data_ingredient_serialize;

function urn_cxf_apache_org_beverage_data_ingredient_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_beverage_data_ingredient();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing category');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'category')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCategory(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
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
// Constructor for XML Schema item {urn:cxf.apache.org:beverage:data}beverageArray
//
function urn_cxf_apache_org_beverage_data_beverageArray () {
    this.typeMarker = 'urn_cxf_apache_org_beverage_data_beverageArray';
    this._item = [];
}

//
// accessor is urn_cxf_apache_org_beverage_data_beverageArray.prototype.getItem
// element get for item
// - element type is {urn:cxf.apache.org:beverage:data}beverage
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is urn_cxf_apache_org_beverage_data_beverageArray.prototype.setItem
//
function urn_cxf_apache_org_beverage_data_beverageArray_getItem() { return this._item;}

urn_cxf_apache_org_beverage_data_beverageArray.prototype.getItem = urn_cxf_apache_org_beverage_data_beverageArray_getItem;

function urn_cxf_apache_org_beverage_data_beverageArray_setItem(value) { this._item = value;}

urn_cxf_apache_org_beverage_data_beverageArray.prototype.setItem = urn_cxf_apache_org_beverage_data_beverageArray_setItem;
//
// Serialize {urn:cxf.apache.org:beverage:data}beverageArray
//
function urn_cxf_apache_org_beverage_data_beverageArray_serialize(cxfjsutils, elementName, extraNamespaces) {
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

urn_cxf_apache_org_beverage_data_beverageArray.prototype.serialize = urn_cxf_apache_org_beverage_data_beverageArray_serialize;

function urn_cxf_apache_org_beverage_data_beverageArray_deserialize (cxfjsutils, element) {
    var newobject = new urn_cxf_apache_org_beverage_data_beverageArray();
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
       arrayItem = urn_cxf_apache_org_beverage_data_beverage_deserialize(cxfjsutils, curElement);
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
// Definitions for schema: urn:cxf.apache.org:beverage
//
//
// Definitions for service: {urn:cxf.apache.org:beverage}BeverageServiceService
//

// Javascript for {urn:cxf.apache.org:beverage}BeverageService

function urn_cxf_apache_org_beverage_BeverageService () {
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
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}ingredient'] = urn_cxf_apache_org_beverage_data_ingredient_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}ingredient'] = urn_cxf_apache_org_beverage_data_ingredient_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}categoryArray'] = urn_cxf_apache_org_beverage_data_categoryArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}categoryArray'] = urn_cxf_apache_org_beverage_data_categoryArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}categoryArray'] = urn_cxf_apache_org_beverage_data_categoryArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}categoryArray'] = urn_cxf_apache_org_beverage_data_categoryArray_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}beverage'] = urn_cxf_apache_org_beverage_data_beverage_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}beverage'] = urn_cxf_apache_org_beverage_data_beverage_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}ingredient'] = urn_cxf_apache_org_beverage_data_ingredient_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}ingredient'] = urn_cxf_apache_org_beverage_data_ingredient_deserialize;
    this.globalElementSerializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_serialize;
    this.globalElementDeserializers['{urn:cxf.apache.org:beverage:data}beverageArray'] = urn_cxf_apache_org_beverage_data_beverageArray_deserialize;
}

function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_beverage_getBeverageWithIngredientCategoryResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategoryResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategory_onsuccess = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_op_onsuccess;

function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_op_onerror() {
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

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategory_onerror = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_op_onerror;

//
// Operation {urn:cxf.apache.org:beverage}getBeverageWithIngredientCategory
// - bare operation. Parameters:
// - type {urn:cxf.apache.org:beverage:data}category
//
function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_op(successCallback, errorCallback, category) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = category;
    xml = this.getBeverageWithIngredientCategory_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.getBeverageWithIngredientCategory_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.getBeverageWithIngredientCategory_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategory = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_op;

function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:beverage' ");
    // block for local variables
    {
     if (args[0] == null) {
      xml = xml + '<jns0:category xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns0:category>';
      xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
      xml = xml + '</jns0:category>';
     }
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategory_serializeInput = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategory_serializeInput;

function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategoryResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = urn_cxf_apache_org_beverage_data_beverageArray_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_beverage_getBeverageWithIngredientCategoriesResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategoriesResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategories_onsuccess = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_op_onsuccess;

function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_op_onerror() {
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

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategories_onerror = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_op_onerror;

//
// Operation {urn:cxf.apache.org:beverage}getBeverageWithIngredientCategories
// - bare operation. Parameters:
// - urn_cxf_apache_org_beverage_data_categoryArray
//
function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_op(successCallback, errorCallback, categories) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = categories;
    xml = this.getBeverageWithIngredientCategories_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.getBeverageWithIngredientCategories_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.getBeverageWithIngredientCategories_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategories = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_op;

function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:beverage' ");
    // block for local variables
    {
     if (args[0] == null) {
      xml = xml + '<jns0:categories xsi:nil=\'true\'/>';
     } else {
      xml = xml + args[0].serialize(cxfjsutils, 'jns0:categories', null);
     }
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeverageWithIngredientCategories_serializeInput = urn_cxf_apache_org_beverage_getBeverageWithIngredientCategories_serializeInput;

function urn_cxf_apache_org_beverage_getBeverageWithIngredientCategoriesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = urn_cxf_apache_org_beverage_data_beverageArray_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function urn_cxf_apache_org_beverage_getBeveragesWithIngredient_op_onsuccess(responseXml) {
    this.jsutils.trace('urn_cxf_apache_org_beverage_getBeveragesWithIngredient_op_onsuccess _onsuccess: '  + this._onsuccess);
    if (this._onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling urn_cxf_apache_org_beverage_getBeveragesWithIngredientResponse_deserializeResponse');
     responseObject = urn_cxf_apache_org_beverage_getBeveragesWithIngredientResponse_deserializeResponse(this.jsutils, element);
     this._onsuccess(responseObject);
    }
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeveragesWithIngredient_onsuccess = urn_cxf_apache_org_beverage_getBeveragesWithIngredient_op_onsuccess;

function urn_cxf_apache_org_beverage_getBeveragesWithIngredient_op_onerror() {
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

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeveragesWithIngredient_onerror = urn_cxf_apache_org_beverage_getBeveragesWithIngredient_op_onerror;

//
// Operation {urn:cxf.apache.org:beverage}getBeveragesWithIngredient
// - bare operation. Parameters:
// - urn_cxf_apache_org_beverage_data_ingredient
//
function urn_cxf_apache_org_beverage_getBeveragesWithIngredient_op(successCallback, errorCallback, ingredient) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = ingredient;
    xml = this.getBeveragesWithIngredient_serializeInput(this.jsutils, args);
    this._onsuccess = successCallback;
    this._onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(that) { closureThis.getBeveragesWithIngredient_onsuccess(that); };
    this.client.onerror = function(that) { closureThis.getBeveragesWithIngredient_onerror(that); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeveragesWithIngredient = urn_cxf_apache_org_beverage_getBeveragesWithIngredient_op;

function urn_cxf_apache_org_beverage_getBeveragesWithIngredient_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='urn:cxf.apache.org:beverage' ");
    // block for local variables
    {
     if (args[0] == null) {
      xml = xml + '<jns0:ingredient xsi:nil=\'true\'/>';
     } else {
      xml = xml + args[0].serialize(cxfjsutils, 'jns0:ingredient', null);
     }
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

urn_cxf_apache_org_beverage_BeverageService.prototype.getBeveragesWithIngredient_serializeInput = urn_cxf_apache_org_beverage_getBeveragesWithIngredient_serializeInput;

function urn_cxf_apache_org_beverage_getBeveragesWithIngredientResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = urn_cxf_apache_org_beverage_data_beverageArray_deserialize (cxfjsutils, partElement);

    return returnObject;
}
