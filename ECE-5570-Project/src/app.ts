import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Job } from './classes/Job.js';


const nameForm = document.querySelector('.name-form') as HTMLFormElement;
const jobForm = document.querySelector('.new-item-form') as HTMLFormElement;


// inputs
const name = document.querySelector("#name") as HTMLInputElement;
const schoolname = document.querySelector("#school") as HTMLInputElement;


const CoName = document.querySelector('#CoName') as HTMLInputElement;
const jobTitle = document.querySelector('#title') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const startDate = document.querySelector('#startdate') as HTMLInputElement;
const endDate = document.querySelector('#enddate') as HTMLInputElement;
//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

nameForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let applicantName = name.value;
  let school = schoolname.value;
  console.log(applicantName, school);
  
});

jobForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  //let jobs = Job[];
    let doc = new Job(CoName.value, jobTitle.value, details.value, startDate.value, endDate.value);
    console.log(doc);
    //jobs.push(job);
    list.render(doc, `Experience`);
    
});







