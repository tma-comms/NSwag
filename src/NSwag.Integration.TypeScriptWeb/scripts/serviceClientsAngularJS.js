//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v5.6.6096.318 (NJsonSchema v4.8.6094.34027) (http://NSwag.org)
// </auto-generated>
//----------------------
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var PersonsClient = (function () {
        function PersonsClient($http, baseUrl, jsonParseReviver) {
            this.baseUrl = undefined;
            this.http = null;
            this.jsonParseReviver = undefined;
            this.http = $http;
            this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452";
            this.jsonParseReviver = jsonParseReviver;
        }
        PersonsClient.prototype.getAll = function () {
            var _this = this;
            var url = this.baseUrl + "/api/Persons";
            var content = "";
            return this.http({
                url: url,
                method: "Get",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processGetAll(response);
            });
        };
        PersonsClient.prototype.processGetAll = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 200) {
                var result200 = null;
                var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(Person.fromJS(item));
                    }
                }
                return result200;
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        PersonsClient.prototype.add = function (person) {
            var _this = this;
            var url = this.baseUrl + "/api/Persons";
            var content = JSON.stringify(person ? person.toJS() : null);
            return this.http({
                url: url,
                method: "Post",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processAdd(response);
            });
        };
        PersonsClient.prototype.processAdd = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 204) {
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        PersonsClient.prototype.get = function (id) {
            var _this = this;
            var url = this.baseUrl + "/api/Persons/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url = url.replace("{id}", encodeURIComponent("" + id));
            var content = "";
            return this.http({
                url: url,
                method: "Get",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processGet(response);
            });
        };
        PersonsClient.prototype.processGet = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 200) {
                var result200 = null;
                var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
                result200 = resultData200 ? Person.fromJS(resultData200) : new Person();
                return result200;
            }
            else if (status === 500) {
                var result500 = null;
                var resultData500 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : new PersonNotFoundException();
                throw result500;
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        PersonsClient.prototype.delete = function (id) {
            var _this = this;
            var url = this.baseUrl + "/api/Persons/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url = url.replace("{id}", encodeURIComponent("" + id));
            var content = "";
            return this.http({
                url: url,
                method: "Delete",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processDelete(response);
            });
        };
        PersonsClient.prototype.processDelete = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 204) {
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        /**
         * Gets the name of a person.
         * @id The person ID.
         * @return The person's name.
         */
        PersonsClient.prototype.getName = function (id) {
            var _this = this;
            var url = this.baseUrl + "/api/Persons/{id}/Name";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url = url.replace("{id}", encodeURIComponent("" + id));
            var content = "";
            return this.http({
                url: url,
                method: "Get",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processGetName(response);
            });
        };
        PersonsClient.prototype.processGetName = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 200) {
                var result200 = null;
                var resultData200 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            }
            else if (status === 500) {
                var result500 = null;
                var resultData500 = data === "" ? null : JSON.parse(data, this.jsonParseReviver);
                result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : new PersonNotFoundException();
                throw result500;
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        return PersonsClient;
    }());
    exports.PersonsClient = PersonsClient;
    var GeoClient = (function () {
        function GeoClient($http, baseUrl, jsonParseReviver) {
            this.baseUrl = undefined;
            this.http = null;
            this.jsonParseReviver = undefined;
            this.http = $http;
            this.baseUrl = baseUrl !== undefined ? baseUrl : "http://localhost:13452";
            this.jsonParseReviver = jsonParseReviver;
        }
        GeoClient.prototype.fromBodyTest = function (location) {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/FromBodyTest";
            var content = JSON.stringify(location ? location.toJS() : null);
            return this.http({
                url: url,
                method: "Post",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processFromBodyTest(response);
            });
        };
        GeoClient.prototype.processFromBodyTest = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 204) {
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        GeoClient.prototype.fromUriTest = function (latitude, longitude) {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/FromUriTest?";
            if (latitude === null)
                throw new Error("The parameter 'latitude' cannot be null.");
            else if (latitude !== undefined)
                url += "Latitude=" + encodeURIComponent("" + latitude) + "&";
            if (longitude === null)
                throw new Error("The parameter 'longitude' cannot be null.");
            else if (longitude !== undefined)
                url += "Longitude=" + encodeURIComponent("" + longitude) + "&";
            var content = "";
            return this.http({
                url: url,
                method: "Post",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processFromUriTest(response);
            });
        };
        GeoClient.prototype.processFromUriTest = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 204) {
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        GeoClient.prototype.addPolygon = function (points) {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/AddPolygon";
            var contentData = [];
            if (points) {
                for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                    var item = points_1[_i];
                    contentData.push(item.toJS());
                }
            }
            var content = JSON.stringify(points ? contentData : null);
            return this.http({
                url: url,
                method: "Post",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processAddPolygon(response);
            });
        };
        GeoClient.prototype.processAddPolygon = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 204) {
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        GeoClient.prototype.refresh = function () {
            var _this = this;
            var url = this.baseUrl + "/api/Geo/Refresh";
            var content = "";
            return this.http({
                url: url,
                method: "Post",
                data: content,
                transformResponse: [],
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return _this.processRefresh(response);
            });
        };
        GeoClient.prototype.processRefresh = function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 204) {
            }
            else {
                throw "error_no_callback_for_the_received_http_status";
            }
        };
        return GeoClient;
    }());
    exports.GeoClient = GeoClient;
    var Person = (function () {
        function Person(data) {
            this.address = new Address();
            this.children = [];
            this.discriminator = "Person";
            if (data !== undefined) {
                this.id = data["Id"] !== undefined ? data["Id"] : null;
                this.firstName = data["FirstName"] !== undefined ? data["FirstName"] : null;
                this.lastName = data["LastName"] !== undefined ? data["LastName"] : null;
                this.gender = data["Gender"] !== undefined ? data["Gender"] : null;
                this.dateOfBirth = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : null;
                this.weight = data["Weight"] !== undefined ? data["Weight"] : null;
                this.height = data["Height"] !== undefined ? data["Height"] : null;
                this.age = data["Age"] !== undefined ? data["Age"] : null;
                this.address = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
                if (data["Children"] && data["Children"].constructor === Array) {
                    this.children = [];
                    for (var _i = 0, _a = data["Children"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.children.push(Person.fromJS(item));
                    }
                }
                if (data["Skills"]) {
                    this.skills = {};
                    for (var key in data["Skills"]) {
                        if (data["Skills"].hasOwnProperty(key))
                            this.skills[key] = data["Skills"][key] !== undefined ? data["Skills"][key] : null;
                    }
                }
                this.discriminator = data["discriminator"] !== undefined ? data["discriminator"] : null;
            }
        }
        Person.fromJS = function (data) {
            if (data["discriminator"] === "Teacher")
                return new Teacher(data);
            return new Person(data);
        };
        Person.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Id"] = this.id !== undefined ? this.id : null;
            data["FirstName"] = this.firstName !== undefined ? this.firstName : null;
            data["LastName"] = this.lastName !== undefined ? this.lastName : null;
            data["Gender"] = this.gender !== undefined ? this.gender : null;
            data["DateOfBirth"] = this.dateOfBirth ? this.dateOfBirth.toISOString() : null;
            data["Weight"] = this.weight !== undefined ? this.weight : null;
            data["Height"] = this.height !== undefined ? this.height : null;
            data["Age"] = this.age !== undefined ? this.age : null;
            data["Address"] = this.address ? this.address.toJS() : null;
            if (this.children && this.children.constructor === Array) {
                data["Children"] = [];
                for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["Children"].push(item.toJS());
                }
            }
            if (this.skills) {
                data["Skills"] = {};
                for (var key in this.skills) {
                    if (this.skills.hasOwnProperty(key))
                        data["Skills"][key] = this.skills[key] !== undefined ? this.skills[key] : null;
                }
            }
            data["discriminator"] = this.discriminator !== undefined ? this.discriminator : null;
            return data;
        };
        Person.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        Person.prototype.clone = function () {
            var json = this.toJSON();
            return new Person(JSON.parse(json));
        };
        return Person;
    }());
    exports.Person = Person;
    var Teacher = (function (_super) {
        __extends(Teacher, _super);
        function Teacher(data) {
            _super.call(this, data);
            this.discriminator = "Teacher";
            if (data !== undefined) {
                this.course = data["Course"] !== undefined ? data["Course"] : null;
            }
        }
        Teacher.fromJS = function (data) {
            return new Teacher(data);
        };
        Teacher.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Course"] = this.course !== undefined ? this.course : null;
            _super.prototype.toJS.call(this, data);
            return data;
        };
        Teacher.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        Teacher.prototype.clone = function () {
            var json = this.toJSON();
            return new Teacher(JSON.parse(json));
        };
        return Teacher;
    }(Person));
    exports.Teacher = Teacher;
    (function (Gender) {
        Gender[Gender["Male"] = "Male"] = "Male";
        Gender[Gender["Female"] = "Female"] = "Female";
    })(exports.Gender || (exports.Gender = {}));
    var Gender = exports.Gender;
    var Address = (function () {
        function Address(data) {
            if (data !== undefined) {
                this.isPrimary = data["IsPrimary"] !== undefined ? data["IsPrimary"] : null;
                this.city = data["City"] !== undefined ? data["City"] : null;
            }
        }
        Address.fromJS = function (data) {
            return new Address(data);
        };
        Address.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["IsPrimary"] = this.isPrimary !== undefined ? this.isPrimary : null;
            data["City"] = this.city !== undefined ? this.city : null;
            return data;
        };
        Address.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        Address.prototype.clone = function () {
            var json = this.toJSON();
            return new Address(JSON.parse(json));
        };
        return Address;
    }());
    exports.Address = Address;
    (function (SkillLevelAsInteger) {
        SkillLevelAsInteger[SkillLevelAsInteger["Low"] = 0] = "Low";
        SkillLevelAsInteger[SkillLevelAsInteger["Medium"] = 1] = "Medium";
        SkillLevelAsInteger[SkillLevelAsInteger["Height"] = 2] = "Height";
    })(exports.SkillLevelAsInteger || (exports.SkillLevelAsInteger = {}));
    var SkillLevelAsInteger = exports.SkillLevelAsInteger;
    var Exception = (function () {
        function Exception(data) {
            this.innerException = new Exception();
            if (data !== undefined) {
                this.message = data["Message"] !== undefined ? data["Message"] : null;
                this.innerException = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : new Exception();
                this.stackTrace = data["StackTrace"] !== undefined ? data["StackTrace"] : null;
                this.source = data["Source"] !== undefined ? data["Source"] : null;
            }
        }
        Exception.fromJS = function (data) {
            return new Exception(data);
        };
        Exception.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Message"] = this.message !== undefined ? this.message : null;
            data["InnerException"] = this.innerException ? this.innerException.toJS() : null;
            data["StackTrace"] = this.stackTrace !== undefined ? this.stackTrace : null;
            data["Source"] = this.source !== undefined ? this.source : null;
            return data;
        };
        Exception.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        Exception.prototype.clone = function () {
            var json = this.toJSON();
            return new Exception(JSON.parse(json));
        };
        return Exception;
    }());
    exports.Exception = Exception;
    var PersonNotFoundException = (function (_super) {
        __extends(PersonNotFoundException, _super);
        function PersonNotFoundException(data) {
            _super.call(this, data);
            if (data !== undefined) {
                this.id = data["id"] !== undefined ? data["id"] : null;
            }
        }
        PersonNotFoundException.fromJS = function (data) {
            return new PersonNotFoundException(data);
        };
        PersonNotFoundException.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["id"] = this.id !== undefined ? this.id : null;
            _super.prototype.toJS.call(this, data);
            return data;
        };
        PersonNotFoundException.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        PersonNotFoundException.prototype.clone = function () {
            var json = this.toJSON();
            return new PersonNotFoundException(JSON.parse(json));
        };
        return PersonNotFoundException;
    }(Exception));
    exports.PersonNotFoundException = PersonNotFoundException;
    var GeoPoint = (function () {
        function GeoPoint(data) {
            if (data !== undefined) {
                this.latitude = data["Latitude"] !== undefined ? data["Latitude"] : null;
                this.longitude = data["Longitude"] !== undefined ? data["Longitude"] : null;
            }
        }
        GeoPoint.fromJS = function (data) {
            return new GeoPoint(data);
        };
        GeoPoint.prototype.toJS = function (data) {
            data = data === undefined ? {} : data;
            data["Latitude"] = this.latitude !== undefined ? this.latitude : null;
            data["Longitude"] = this.longitude !== undefined ? this.longitude : null;
            return data;
        };
        GeoPoint.prototype.toJSON = function () {
            return JSON.stringify(this.toJS());
        };
        GeoPoint.prototype.clone = function () {
            var json = this.toJSON();
            return new GeoPoint(JSON.parse(json));
        };
        return GeoPoint;
    }());
    exports.GeoPoint = GeoPoint;
});
//# sourceMappingURL=serviceClientsAngularJS.js.map