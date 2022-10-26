"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
var Job = /** @class */ (function () {
    function Job(con, jt, d, sd, ed) {
        this.companyName = con;
        this.jobTitle = jt;
        this.desc = d;
        this.startDate = sd;
        this.endDate = ed;
    }
    Job.prototype.format = function () {
        return "".concat(this.jobTitle, " at ").concat(this.companyName, ", ").concat(this.desc, ": from ").concat(this.startDate, " to ").concat(this.endDate);
    };
    return Job;
}());
exports.Job = Job;
;
var jobs = [];
var jobOne = new Job('encova', 'Automation Engineer Intern', 'maintained test scripts', '5/10/2021', '2/1/2022');
console.log(jobOne);
