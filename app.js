const express = require("express");
const bodyParser = require("body-parser");
const students = [
{
	studentId: "1",
	studentName: "Nguyen Van A",
	studentGender: "Male",
	studentDOB: "17-12-2000",
    studentAddress: "HA Noi city ",
},
{
	studentId: "2",
	studentName: "Nguyen Van B",
	studentGender: "Female",
	studentDOB: "05-07-1998",
    studentAddress: "HO CHi MInh City ",
},
];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(
bodyParser.urlencoded({
	extended: true,
})
);

app.get("/", function (req, res) {
res.render("home", {
	data: students,
});
});

app.post("/", (req, res) => {
const inputStudentId = students.length + 1;
const inputStudentName = req.body.studentName;
const inputStudentGender = req.body.studentGender;
const inputStudentDOB = req.body.studentDOB;
const inputStudentAddress = req.body.studentAddress;

students.push({
	studentId: inputStudentId,
	studentName: inputStudentName,
	studentGender: inputStudentGender,
	studentDOB: inputStudentDOB,
    studentAddress: inputStudentAddress,
});

res.render("home", {
	data: students,
});
});

app.post("/delete", (req, res) => {
var requestedStudentId = req.body.studentId;
var j = 0;
students.forEach((student) => {
	j = j + 1;
	if (student.studentId === requestedStudentId) {
        students.splice(j - 1, 1);
	}
});
res.render("home", {
	data: students,
});
});

app.post("/update", (req, res) => {
const requestedStudentId = req.body.studentId;
const inputStudentName = req.body.studentName;
const inputStudentGender = req.body.studentGender;
const inputStudentDOB = req.body.studentDOB;
const inputStudentAddress = req.body.studentAddress;

var j = 0;
students.forEach((student) => {
	j = j + 1;
	if (student.studentId == requestedStudentId) {
	(student.studentName = inputStudentName),
	(student.studentGender = inputStudentGender),
	(student.studentDOB = inputStudentDOB)
    (student.studentAddress = inputStudentAddress);
	}
});
res.render("home", {
	data: students,
});
});

app.listen(3000, (req, res) => {
console.log("App is running on port 3000");
});
