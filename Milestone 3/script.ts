// Selecting form elements
const fullNameInput = document.getElementById("fullName") as HTMLInputElement;
const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const linkedinInput = document.getElementById("linkedin") as HTMLInputElement;
const addressInput = document.getElementById("address") as HTMLInputElement;
const objectiveInput = document.getElementById("objective") as HTMLTextAreaElement;
const degreeInput = document.getElementById("degree") as HTMLInputElement;
const universityInput = document.getElementById("university") as HTMLInputElement;
const graduationYearInput = document.getElementById("graduationYear") as HTMLInputElement;
const jobRoleInput = document.getElementById("jobRole") as HTMLInputElement;
const companyInput = document.getElementById("company") as HTMLInputElement;
const jobDurationInput = document.getElementById("jobDuration") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const projectDetailsInput = document.getElementById("projectDetails") as HTMLInputElement;
const generateButton = document.getElementById("generateButton") as HTMLButtonElement;

// Selecting display elements
const displayName = document.getElementById("displayName") as HTMLHeadingElement;
const displayJobTitle = document.getElementById("displayJobTitle") as HTMLSpanElement;
const displayEmail = document.getElementById("displayEmail") as HTMLSpanElement;
const displayPhone = document.getElementById("displayPhone") as HTMLSpanElement;
const displayLinkedIn = document.getElementById("displayLinkedIn") as HTMLSpanElement;
const displayAddress = document.getElementById("displayAddress") as HTMLSpanElement;
const displayObjective = document.getElementById("displayObjective") as HTMLDivElement;
const displayEducation = document.getElementById("displayEducation") as HTMLDivElement;
const displayExperience = document.getElementById("displayExperience") as HTMLDivElement;
const displaySkills = document.getElementById("displaySkills") as HTMLDivElement;
const displayProjects = document.getElementById("displayProjects") as HTMLDivElement;

// Utility function to create list items
function createListItem(content: string): HTMLLIElement {
  const li = document.createElement("li");
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
    ? `<p>${objectiveInput.value}</p>`
    : "<p>Your career objective will appear here.</p>";

  // Update Education
  displayEducation.innerHTML = "";
  if (degreeInput.value && universityInput.value && graduationYearInput.value) {
    const educationItem = createListItem(
      `${degreeInput.value} from ${universityInput.value}, Graduated: ${graduationYearInput.value}`
    );
    displayEducation.appendChild(educationItem);
  }

  // Update Experience
  displayExperience.innerHTML = "";
  if (jobRoleInput.value && companyInput.value && jobDurationInput.value) {
    const experienceItem = createListItem(
      `${jobRoleInput.value} at ${companyInput.value} (${jobDurationInput.value})`
    );
    displayExperience.appendChild(experienceItem);
  }

  // Update Skills
  displaySkills.innerHTML = "";
  const skillsArray = skillsInput.value.split(",").map(skill => skill.trim());
  skillsArray.forEach(skill => {
    if (skill) {
      const skillItem = createListItem(skill);
      displaySkills.appendChild(skillItem);
    }
  });

  // Update Projects
  displayProjects.innerHTML = "";
  if (projectDetailsInput.value) {
    const projectItem = createListItem(projectDetailsInput.value);
    displayProjects.appendChild(projectItem);
  }
}

// Event Listener for Generate Button
generateButton.addEventListener("click", generateResume);





