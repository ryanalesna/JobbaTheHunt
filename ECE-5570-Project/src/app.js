import { ListTemplate } from './classes/ListTemplate.js';
import { Job } from './classes/Job.js';
var nameForm = document.querySelector('.name-form');
var jobForm = document.querySelector('.new-item-form');
// inputs
var name = document.querySelector("#name");
var CoName = document.querySelector('#CoName');
var jobTitle = document.querySelector('#title');
var details = document.querySelector('#details');
var startDate = document.querySelector('#start-date');
var endDate = document.querySelector('#end-date');
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
nameForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var applicantName = name.value;
    console.log(applicantName);
});
jobForm.addEventListener('add', function (e) {
    e.preventDefault();
    var doc;
    doc = new Job(CoName.value, jobTitle.value, details.value, startDate.valueAsDate, endDate.valueAsDate);
    console.log(doc);
    //list.render(doc, `Job ${i}`);
});
