import { ListTemplate } from './classes/ListTemplate.js';
import { Job } from './classes/Job.js';
var nameForm = document.querySelector('.name-form');
var jobForm = document.querySelector('.new-item-form');
// inputs
var name = document.querySelector("#name");
var schoolname = document.querySelector("#school");
var appEmail = document.querySelector("#email");
var CoName = document.querySelector('#CoName');
var jobTitle = document.querySelector('#title');
var details = document.querySelector('#details');
var startDate = document.querySelector('#startdate');
var endDate = document.querySelector('#enddate');
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
nameForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var applicantName = name.value;
    var school = schoolname.value;
    var email = appEmail.value;
    console.log(applicantName, email, school);
});
jobForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //let jobs = Job[];
    var doc = new Job(CoName.value, jobTitle.value, details.value, startDate.value, endDate.value);
    console.log(doc);
    //jobs.push(job);
    list.render(doc, "Experience");
});
