// Function to handle loading resume data on page load
window.onload = function () {
    const resumeDataJson = localStorage.getItem('resumeData');
    if (resumeDataJson) {
        const resumeData = JSON.parse(resumeDataJson);
        // Safely access DOM elements
        const profileNameElement = document.querySelector('.profile-name');
        const profileCareerElement = document.querySelector('.profile-career');
        const profileImageElement = document.querySelector('.profile-image img');
        // Check if elements are found before setting their properties
        if (profileNameElement)
            profileNameElement.textContent = resumeData.profileName;
        if (profileCareerElement)
            profileCareerElement.textContent = resumeData.profileCareer;
        if (profileImageElement)
            profileImageElement.src = resumeData.profileImage;
        // Populate contact information
        const contactList = document.querySelector('.contact-list');
        if (contactList) {
            const contactLinks = contactList.querySelectorAll('li .contact-link');
            if (contactLinks[0]) {
                contactLinks[0].textContent = resumeData.contact.phone;
                contactLinks[0].href = `tel:${resumeData.contact.phone}`;
            }
            if (contactLinks[1]) {
                contactLinks[1].textContent = resumeData.contact.email;
                contactLinks[1].href = `mailto:${resumeData.contact.email}`;
            }
            if (contactLinks[2]) {
                contactLinks[2].textContent = resumeData.contact.facebook;
                contactLinks[2].href = resumeData.contact.facebook;
            }
            if (contactLinks[3]) {
                contactLinks[3].textContent = `@${resumeData.contact.instagram}`;
                contactLinks[3].href = resumeData.contact.instagram;
            }
            if (contactLinks[4]) {
                contactLinks[4].textContent = resumeData.contact.github;
                contactLinks[4].href = resumeData.contact.github;
            }
            if (contactLinks[5]) {
                contactLinks[5].textContent = resumeData.contact.linkedin;
                contactLinks[5].href = resumeData.contact.linkedin;
            }
            const locationElement = contactList.querySelector('li:nth-child(7)');
            if (locationElement) {
                locationElement.textContent = resumeData.contact.location;
            }
        }
        // Populate skills
        const skillsList = document.querySelector('.skills-list');
        if (skillsList) {
            skillsList.innerHTML = resumeData.skills.map(skill => `<li><p class="skill-item">${skill}</p></li>`).join('');
        }
        // Populate experience details
        const experienceDetails = document.querySelector('.experience-details');
        if (experienceDetails) {
            experienceDetails.innerHTML = resumeData.experience.map(exp => `
                <div class="experience-item">
                    <div class="experience-role">${exp.role}</div>
                    <div class="experience-duration">${exp.duration}</div>
                    <div class="experience-description">${exp.description}</div>
                </div>
            `).join('');
        }
        // Populate education details
        const educationDetails = document.querySelector('.education-details');
        if (educationDetails) {
            educationDetails.innerHTML = resumeData.education.map(edu => `
                <div class="education-item">
                    <h3 class="degree-title">${edu.degree}</h3>
                    <p class="institution">${edu.institution}</p>
                    <p class="duration">${edu.duration}</p>
                </div>
            `).join('');
        }
        const projectsDetails = document.querySelector('.projects-details');
        if (projectsDetails) {
            projectsDetails.innerHTML = resumeData.projects.map(proj => `
                <div class="project-item">
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-description">${proj.description}</p>
                    <p class="project-tech">Technologies: ${proj.tech}</p>
                </div>
            `).join('');
        }
        const aboutMeElement = document.querySelector('#about-me-text');
        if (aboutMeElement) {
            aboutMeElement.textContent = resumeData.aboutMe;
        }
        // Attach event listeners to edit buttons
        document.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', (event) => {
            const buttonElement = event.currentTarget;
            const section = buttonElement.parentElement;
            const editableElement = section.querySelector('.editable');
            if (editableElement) {
                editableElement.setAttribute('contenteditable', 'true');
                editableElement.focus();
                editableElement.addEventListener('blur', () => saveChanges(editableElement));
            }
        }));
    }
};
// Function to save changes back to localStorage
function saveChanges(element) {
    const resumeDataJson = localStorage.getItem('resumeData');
    if (!resumeDataJson)
        return;
    const resumeData = JSON.parse(resumeDataJson);
    // Update resume data based on className
    switch (element.className) {
        case 'profile-name':
            resumeData.profileName = element.textContent || '';
            break;
        case 'profile-career':
            resumeData.profileCareer = element.textContent || '';
            break;
        case 'p1': // about me section
            resumeData.aboutMe = element.textContent || '';
            break;
        // Add more cases for other fields
        default:
            break;
    }
    // Save updated data back to localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    element.setAttribute('contenteditable', 'false'); // Disable editing after saving
}
export {};
