var Job = /** @class */ (function () {
    function Job(con, jt, d, sd, ed) {
        this.companyName = con;
        this.jobTitle = jt;
        this.desc = d;
        this.startDate = sd;
        this.endDate = ed;
    }
    Job.prototype.format = function () {
        return "".concat(this.jobTitle, " at ").concat(this.companyName, ", ").concat(this.desc, ": From ").concat(this.startDate, " to ").concat(this.endDate);
    };
    return Job;
}());
export { Job };
;
//const jobOne = new Job('encova', 'Automation Engineer Intern', 'maintained test scripts', '5/10/2021', '2/1/2022');
//console.log(jobOne);
