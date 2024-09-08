const experienceEntries = [];
const educationEntries = [];
const projectEntries = [];
function addExperience() {
    const roleInput = document.getElementById('experience-role');
    const durationInput = document.getElementById('experience-duration');
    const descriptionInput = document.getElementById('experience-description');
    const role = roleInput.value;
    const duration = durationInput.value;
    const description = descriptionInput.value;
    if (role && duration && description) {
        experienceEntries.push({ role, duration, description });
        const experienceList = document.getElementById('experience-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${role} (${duration}): ${description}`;
        experienceList.appendChild(listItem);
        roleInput.value = '';
        durationInput.value = '';
        descriptionInput.value = '';
    }
    else {
        alert("Please fill out all fields.");
    }
}
function addEducation() {
    const degreeInput = document.getElementById('education-degree');
    const institutionInput = document.getElementById('education-institution');
    const durationInput = document.getElementById('education-duration');
    const degree = degreeInput.value;
    const institution = institutionInput.value;
    const duration = durationInput.value;
    if (degree && institution && duration) {
        educationEntries.push({ degree, institution, duration });
        const educationList = document.getElementById('education-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${degree} at ${institution} (${duration})`;
        educationList.appendChild(listItem);
        degreeInput.value = '';
        institutionInput.value = '';
        durationInput.value = '';
    }
    else {
        alert("Please fill out all fields.");
    }
}
function addProject() {
    const titleInput = document.getElementById('project-title');
    const descriptionInput = document.getElementById('project-description');
    const techInput = document.getElementById('project-tech');
    const title = titleInput.value;
    const description = descriptionInput.value;
    const tech = techInput.value;
    if (title && description && tech) {
        projectEntries.push({ title, description, tech });
        const projectList = document.getElementById('project-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${title}</strong>: ${description} (Technologies: ${tech})`;
        projectList.appendChild(listItem);
        titleInput.value = '';
        descriptionInput.value = '';
        techInput.value = '';
    }
    else {
        alert("Please fill out all fields.");
    }
}
document.getElementById('add-experience')?.addEventListener('click', addExperience);
document.getElementById('add-education')?.addEventListener('click', addEducation);
document.getElementById('add-project')?.addEventListener('click', addProject);
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Getting form data
    const profileName = document.getElementById('profileName').value;
    const profileCareer = document.getElementById('profileCareer').value;
    const profileImage = document.getElementById('profileImage').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const facebook = document.getElementById('facebook').value;
    const instagram = document.getElementById('instagram').value;
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;
    const location = document.getElementById('location').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const aboutMe = document.getElementById('aboutMe').value;
    // Creating resume data object
    const resumeData = {
        profileName,
        profileCareer,
        profileImage,
        contact: {
            phone,
            email,
            facebook,
            instagram,
            github,
            linkedin,
            location
        },
        skills,
        experience: experienceEntries,
        education: educationEntries,
        aboutMe,
        projects: projectEntries
    };
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('Resume updated successfully!');
    window.location.href = 'resume.html';
});
export {};
