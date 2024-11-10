// Selecting form elements
var fullNameInput = document.getElementById("fullName");
var jobTitleInput = document.getElementById("jobTitle");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var linkedinInput = document.getElementById("linkedin");
var addressInput = document.getElementById("address");
var objectiveInput = document.getElementById("objective");
var degreeInput = document.getElementById("degree");
var universityInput = document.getElementById("university");
var graduationYearInput = document.getElementById("graduationYear");
var jobRoleInput = document.getElementById("jobRole");
var companyInput = document.getElementById("company");
var jobDurationInput = document.getElementById("jobDuration");
var skillsInput = document.getElementById("skills");
var projectDetailsInput = document.getElementById("projectDetails");
var generateButton = document.getElementById("generateButton");
// Selecting display elements
var displayName = document.getElementById("displayName");
var displayJobTitle = document.getElementById("displayJobTitle");
var displayEmail = document.getElementById("displayEmail");
var displayPhone = document.getElementById("displayPhone");
var displayLinkedIn = document.getElementById("displayLinkedIn");
var displayAddress = document.getElementById("displayAddress");
var displayObjective = document.getElementById("displayObjective");
var displayEducation = document.getElementById("displayEducation");
var displayExperience = document.getElementById("displayExperience");
var displaySkills = document.getElementById("displaySkills");
var displayProjects = document.getElementById("displayProjects");
// Utility function to create list items
function createListItem(content) {
    var li = document.createElement("li");
    li.textContent = content;
    return li;
}
// Function to update resume preview
function generateResume() {
    // Update Personal Information
    displayName.textContent = fullNameInput.value || "Your Name";
    displayJobTitle.textContent = jobTitleInput.value || "Your Job Title";
    displayEmail.textContent = emailInput.value || "Your Email";
    displayPhone.textContent = phoneInput.value || "Your Phone";
    displayLinkedIn.textContent = linkedinInput.value || "Your LinkedIn URL";
    displayAddress.textContent = addressInput.value || "Your Address";
    // Update Objective
    displayObjective.innerHTML = objectiveInput.value
        ? "<p>".concat(objectiveInput.value, "</p>")
        : "<p>Your career objective will appear here.</p>";
    // Update Education
    displayEducation.innerHTML = "";
    if (degreeInput.value && universityInput.value && graduationYearInput.value) {
        var educationItem = createListItem("".concat(degreeInput.value, " from ").concat(universityInput.value, ", Graduated: ").concat(graduationYearInput.value));
        displayEducation.appendChild(educationItem);
    }
    // Update Experience
    displayExperience.innerHTML = "";
    if (jobRoleInput.value && companyInput.value && jobDurationInput.value) {
        var experienceItem = createListItem("".concat(jobRoleInput.value, " at ").concat(companyInput.value, " (").concat(jobDurationInput.value, ")"));
        displayExperience.appendChild(experienceItem);
    }
    // Update Skills
    displaySkills.innerHTML = "";
    var skillsArray = skillsInput.value.split(",").map(function (skill) { return skill.trim(); });
    skillsArray.forEach(function (skill) {
        if (skill) {
            var skillItem = createListItem(skill);
            displaySkills.appendChild(skillItem);
        }
    });
    // Update Projects
    displayProjects.innerHTML = "";
    if (projectDetailsInput.value) {
        var projectItem = createListItem(projectDetailsInput.value);
        displayProjects.appendChild(projectItem);
    }
}
// Event Listener for Generate Button
generateButton.addEventListener("click", generateResume);
// Make display fields editable
document.querySelectorAll("[id^='display']").forEach(function (element) {
    element.setAttribute("contenteditable", "true");
});
