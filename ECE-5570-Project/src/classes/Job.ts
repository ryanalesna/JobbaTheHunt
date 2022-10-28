import { HasFormatter } from '../interfaces/HasFormatter.js'
export class Job implements HasFormatter {
    companyName: string;
    jobTitle: string;
    desc: string;
    startDate: string;
    endDate: string;

    constructor(con: string, jt: string, d: string, sd: any, ed: any){
        this.companyName = con;
        this.jobTitle = jt;
        this.desc = d;
        this.startDate = sd;
        this.endDate = ed;
    } 
    format() {
        return `${this.jobTitle} at ${this.companyName}, ${this.desc}: From ${this.startDate} to ${this.endDate}`;
    }
};
//const jobOne = new Job('encova', 'Automation Engineer Intern', 'maintained test scripts', '5/10/2021', '2/1/2022');
//console.log(jobOne);