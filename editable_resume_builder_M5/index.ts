
interface Contact {
    phone: string;
    email: string;
    facebook: string;
    instagram: string;
    github: string;
    linkedin: string;
    location: string;
}

interface Experience {
    role: string;
    duration: string;
    description: string;
}

interface Education {
    degree: string;
    institution: string;
    duration: string;
}

interface Project {
    title: string;
    description: string;
    tech: string;
}

interface ResumeData {
    profileName: string;
    profileCareer: string;
    profileImage: string;
    contact: Contact;
    skills: string[];
    experience: Experience[];
    education: Education[];
    aboutMe: string;
    projects: Project[];
}

const experienceEntries: Experience[] = [];
const educationEntries: Education[] = [];
const projectEntries: Project[] = [];


function addExperience(): void {

    const roleInput = document.getElementById('experience-role') as HTMLInputElement;
    const durationInput = document.getElementById('experience-duration') as HTMLInputElement;
    const descriptionInput = document.getElementById('experience-description') as HTMLTextAreaElement;

    const role = roleInput.value;
    const duration = durationInput.value;
    const description = descriptionInput.value;

    if (role && duration && description) {
       
        experienceEntries.push({ role, duration, description });

        
        const experienceList = document.getElementById('experience-list') as HTMLUListElement;
        const listItem = document.createElement('li');
        listItem.textContent = `${role} (${duration}): ${description}`;
        experienceList.appendChild(listItem);

        roleInput.value = '';
        durationInput.value = '';
        descriptionInput.value = '';
    } else {
        alert("Please fill out all fields.");
    }
}

function addEducation(): void {
    const degreeInput = document.getElementById('education-degree') as HTMLInputElement;
    const institutionInput = document.getElementById('education-institution') as HTMLInputElement;
    const durationInput = document.getElementById('education-duration') as HTMLInputElement;

    const degree = degreeInput.value;
    const institution = institutionInput.value;
    const duration = durationInput.value;

    if (degree && institution && duration) {
        educationEntries.push({ degree, institution, duration });

        const educationList = document.getElementById('education-list') as HTMLUListElement;
        const listItem = document.createElement('li');
        listItem.textContent = `${degree} at ${institution} (${duration})`;
        educationList.appendChild(listItem);

        degreeInput.value = '';
        institutionInput.value = '';
        durationInput.value = '';
    } else {
        alert("Please fill out all fields.");
    }
}

function addProject(): void {
    const titleInput = document.getElementById('project-title') as HTMLInputElement;
    const descriptionInput = document.getElementById('project-description') as HTMLTextAreaElement;
    const techInput = document.getElementById('project-tech') as HTMLInputElement;

    const title = titleInput.value;
    const description = descriptionInput.value;
    const tech = techInput.value;

    if (title && description && tech) {
        projectEntries.push({ title, description, tech });

        const projectList = document.getElementById('project-list') as HTMLUListElement;
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${title}</strong>: ${description} (Technologies: ${tech})`;
        projectList.appendChild(listItem);

        titleInput.value = '';
        descriptionInput.value = '';
        techInput.value = '';
    } else {
        alert("Please fill out all fields.");
    }
}


document.getElementById('add-experience')?.addEventListener('click', addExperience);
document.getElementById('add-education')?.addEventListener('click', addEducation);
document.getElementById('add-project')?.addEventListener('click', addProject);

document.getElementById('resumeForm')!.addEventListener('submit', function (event) {
    event.preventDefault();

    // Getting form data
    const profileName = (document.getElementById('profileName') as HTMLInputElement).value;
    const profileCareer = (document.getElementById('profileCareer') as HTMLInputElement).value;
    const profileImage = (document.getElementById('profileImage') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const facebook = (document.getElementById('facebook') as HTMLInputElement).value;
    const instagram = (document.getElementById('instagram') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const aboutMe = (document.getElementById('aboutMe') as HTMLTextAreaElement).value;

    // Creating resume data object
    const resumeData: ResumeData = {
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
