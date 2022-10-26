"use strict";
var Job = /** @class */ (function () {
    function Job(n, con, jt, d, sd, ed) {
        this.name = n;
        this.companyName = con;
        this.jobTitle = jt;
        this.desc = d;
        this.startDate = sd;
        this.endDate = ed;
    }
    return Job;
}());
;
var jobs = [];
var jobOne = new Job('Ryan Alesna', 'encova', 'Automation Engineer Intern', 'maintained test scripts', '5/10/2021', '2/1/2022');
console.log(jobOne);
