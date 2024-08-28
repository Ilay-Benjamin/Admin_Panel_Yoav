export default class Item {
     // Parse JSON to create an Item instance
     static fromJson(json) {
          const jsonData = JSON.parse(json);
          return new Item(jsonData.name, jsonData.rule, jsonData.phone, jsonData.departmentName);
     }
     // Convert an Item instance to JSON
     static toJson(item) {
          return JSON.stringify({
               name: item.name,
               rule: item.rule,
               phone: item.phone,
               departmentName: item.departmentName
          });
     }
     // Convert a plain object to an Item instance
     static fromObject(object) {
          return new Item(object.name, object.rule, object.phone, object.departmentName);
     }
     // Convert an Item instance to a plain object
     static toObject(item) {
          return {
               name: item.name,
               rule: item.rule,
               phone: item.phone,
               departmentName: item.departmentName
          };
     }
     // Convert an array of plain objects to an array of Item instances
     static fromObjectArray(objectArray) {
          return objectArray.map(object => Item.fromObject(object));
     }
     // Convert an array of Item instances to an array of plain objects
     static toObjectArray(items) {
          return items.map(item => Item.toObject(item));
     }

     // Parse a JSON array to create an array of Item instances
     static fromJsonArray(jsonArray) {
          const jsonData = JSON.parse(jsonArray);
          return jsonData.map(json => Item.fromObject(json));
     }
     // Convert an array of Item instances to a JSON array
     static toJsonArray(items) {
          return JSON.stringify(items.map(item => Item.toObject(item)));
     }
     static getEmptyItem() {
          return new Item('', '', '', '');
     }

     constructor(name, rule, phone, departmentName) {
          this._name = name;
          this._rule = rule;
          this._phone = phone;
          this._departmentName = departmentName;
     }
     get name() {
          return this._name;
     }
     get rule() {
          return this._rule;
     }
     get phone() {
          return this._phone;
     }
     get departmentName() {
          return this._departmentName;
     }
     set name(name) {
          this._name = name;
     }
     set rule(rule) {
          this._rule = rule;
     }
     set phone(phone) {
          this._phone = phone;
     }
     set departmentName(departmentName) {
          this._departmentName = departmentName;
     }
     static clone() {
          return new Item(this._name, this._rule, this._phone, this._departmentName);
     }
     equals(item) {
          return this._name === item.name && this._rule === item.rule && this._phone === item.phone && this._departmentName === item.departmentName;
     }
     toString() {
          return `Item: { name: ${this._name}, rule: ${this._rule}, phone: ${this._phone}, departmentName: ${this._departmentName} }`;
     }
}