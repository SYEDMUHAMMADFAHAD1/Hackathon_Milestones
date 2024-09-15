// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle Form Submission
form.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f, _g;
    event.preventDefault(); // Prevent Page Reload
    // Collect input values
    var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value;
    var address = (_d = document.getElementById('address')) === null || _d === void 0 ? void 0 : _d.value;
    var skills = (_e = document.getElementById('skills')) === null || _e === void 0 ? void 0 : _e.value;
    var experience = (_f = document.getElementById('experience')) === null || _f === void 0 ? void 0 : _f.value;
    var education = (_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value;
    // Generate the Resume Content dynamically 
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Display the Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
