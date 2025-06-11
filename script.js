const users = [
    {
    name: "Sathyanarayana D",
    email: "dsathyanarayana2004@gmail.com",
    profilePic: "profile.png",
    department: "Cyber Security | Data Analytics",
    linkedin: "https://www.linkedin.com/in/dsathya28",
    github: "https://github.com/DSATHYANARAYANA28"

    },
    {
        name: "naruto",
        email: "naruto.kunai@sasuke.com",
        profilePic: "naruto.png",
        department: "Engineering"
    },
    {
        name: "Rolex",
        email: "vikram@example.com",
        profilePic: "rolex.jpeg",
        department: "Human Resources"
    },
    {
        name: "Vikram",
        email: "kamal@example.com",
        profilePic: "vikram.jpeg",
        department: "Finance"
    },
    {
    name: "Sathyanarayana D",
    email: "dsathyanarayana2004@gmail.com",
    profilePic: "profile.png",
    department: "Cyber Security | Data Analytics",
    linkedin: "https://www.linkedin.com/in/dsathya28",
    github: "https://github.com/DSATHYANARAYANA28"

    },
    {
        name: "naruto",
        email: "naruto.kunai@sasuke.com",
        profilePic: "v.jpeg",
        department: "Engineering"
    },
    {
        name: "Rolex",
        email: "vikram@example.com",
        profilePic: "Sk.jpeg",
        department: "Human Resources"
    },
    {
        name: "Vikram",
        email: "kamal@example.com",
        profilePic: "karthi.jpeg",
        department: "Finance"
    },
    {
    name: "Sathyanarayana D",
    email: "dsathyanarayana2004@gmail.com",
    profilePic: "profile.png",
    department: "Cyber Security | Data Analytics",
    linkedin: "https://www.linkedin.com/in/dsathya28",
    github: "https://github.com/DSATHYANARAYANA28"

    },
    {
        name: "naruto",
        email: "naruto.kunai@sasuke.com",
        profilePic: "D.jpeg",
        department: "Engineering"
    },
    {
        name: "Rolex",
        email: "vikram@example.com",
        profilePic: "v.jpeg",
        department: "Human Resources"
    },
    {
        name: "Vikram",
        email: "kamal@example.com",
        profilePic: "vikram.jpeg",
        department: "Finance"
    },
    
    {
        name: "naruto",
        email: "naruto.kunai@sasuke.com",
        profilePic: "Sk.jpeg",
        department: "Engineering"
    },
    {
        name: "Rolex",
        email: "vikram@example.com",
        profilePic: "naruto.png",
        department: "Human Resources"
    },
    {
        name: "Vikram",
        email: "kamal@example.com",
        profilePic: "D.jpeg",
        department: "Finance"
    }
];

function renderUsers(userList) {
    const container = document.getElementById('user-container');
    container.innerHTML = '';

    userList.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        const img = document.createElement('img');
        img.src = user.profilePic;
        img.alt = `${user.name} Profile Picture`;
        img.className = 'profile-pic';

        const info = document.createElement('div');
        info.className = 'user-info';

        const name = document.createElement('div');
        name.className = 'user-name';
        name.textContent = user.name;

        const email = document.createElement('div');
        email.className = 'user-email';
        email.textContent = user.email;

        const department = document.createElement('div');
        department.className = 'user-department';
        department.textContent = user.department;

        info.appendChild(name);
        info.appendChild(email);
        info.appendChild(department);

        card.appendChild(img);
        card.appendChild(info);

        container.appendChild(card);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderUsers(users);
});