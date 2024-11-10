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
// // Type definitions for form elements
// type ResumeData = {
//   fullName: string;
//   jobTitle: string;
//   email: string;
//   phone: string;
//   linkedin: string;
//   address: string;
//   objective: string;
//   degree: string;
//   university: string;
//   graduationYear: string;
//   jobRole: string;
//   company: string;
//   jobDuration: string;
//   skills: string;
//   projectDetails: string;
// };
// // Helper function to update text content
// function updateTextContent(elementId: string, value: string) {
//   const element = document.getElementById(elementId);
//   if (element) element.textContent = value;
// }
// // Real-time update function
// function updateResume(data: ResumeData) {
//   updateTextContent("displayName", data.fullName);
//   updateTextContent("displayJobTitle", data.jobTitle);
//   updateTextContent("displayEmail", data.email);
//   updateTextContent("displayPhone", data.phone);
//   updateTextContent("displayLinkedIn", data.linkedin);
//   updateTextContent("displayAddress", data.address);
//   updateTextContent("displayObjective", data.objective);
//   // Update Education Section
//   const educationList = document.querySelector("#displayEducation ul");
//   if (educationList) {
//     educationList.innerHTML = `
//       <li><strong>${data.degree}</strong> - ${data.university} (${data.graduationYear})</li>
//     `;
//   }
//   // Update Experience Section
//   const experienceList = document.querySelector("#displayExperience ul");
//   if (experienceList) {
//     experienceList.innerHTML = `
//       <li><strong>${data.jobRole}</strong> at ${data.company} (${data.jobDuration})</li>
//     `;
//   }
//   // Update Skills Section
//   const skillsList = document.querySelector("#displaySkills ul");
//   if (skillsList) {
//     const skillsArray = data.skills.split(",").map((skill) => skill.trim());
//     skillsList.innerHTML = skillsArray.map((skill) => `<li>${skill}</li>`).join("");
//   }
//   // Update Projects Section
//   const projectsList = document.querySelector("#displayProjects ul");
//   if (projectsList) {
//     projectsList.innerHTML = `<li>${data.projectDetails}</li>`;
//   }
// }
// // Function to get form data
// function getFormData(): ResumeData {
//   const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
//   const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   const phone = (document.getElementById("phone") as HTMLInputElement).value;
//   const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
//   const address = (document.getElementById("address") as HTMLInputElement).value;
//   const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
//   const degree = (document.getElementById("degree") as HTMLInputElement).value;
//   const university = (document.getElementById("university") as HTMLInputElement).value;
//   const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;
//   const jobRole = (document.getElementById("jobRole") as HTMLInputElement).value;
//   const company = (document.getElementById("company") as HTMLInputElement).value;
//   const jobDuration = (document.getElementById("jobDuration") as HTMLInputElement).value;
//   const skills = (document.getElementById("skills") as HTMLInputElement).value;
//   const projectDetails = (document.getElementById("projectDetails") as HTMLInputElement).value;
//   return {
//     fullName,
//     jobTitle,
//     email,
//     phone,
//     linkedin,
//     address,
//     objective,
//     degree,
//     university,
//     graduationYear,
//     jobRole,
//     company,
//     jobDuration,
//     skills,
//     projectDetails,
//   };
// }
// // Event listeners for form inputs
// const formInputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
//   "#resume-form input, #resume-form textarea"
// );
// formInputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     const formData = getFormData();
//     updateResume(formData);
//   });
// });
