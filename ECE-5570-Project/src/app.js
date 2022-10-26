"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListTemplate_js_1 = require("./classes/ListTemplate.js");
var Job_js_1 = require("./classes/Job.js");
var form = document.querySelector('.new-item-form');
// inputs
var CoName = document.querySelector('#CoName');
var jobTitle = document.querySelector('#title');
var details = document.querySelector('#details');
var startDate = document.querySelector('#start-date');
var endDate = document.querySelector('#end-date');
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('Add', function (e) {
    e.preventDefault();
    var i = 1;
    var doc;
    doc = new Job_js_1.Job(CoName.value, jobTitle.value, details.value, startDate.value, endDate.value);
    list.render(doc, "Job ".concat(i), 'start');
});
