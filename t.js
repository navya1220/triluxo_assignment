const loginForm = document.getElementById('loginForm');
const blogForm = document.getElementById('blogForm');
const blogsContainer = document.querySelector('.blogs');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle login logic here
});



blogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    const image = document.getElementById('blogImage').value;
    const video = document.getElementById('blogVideo').value;

    // Create a new blog post element and append it to blogsContainer
    const blogElement = document.createElement('div');
    blogElement.classList.add('blog');
    blogElement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <img src="${image}" alt="Blog Image">
        <iframe width="560" height="315" src="${video}" frameborder="0" allowfullscreen></iframe>
        <!-- Implement comment section here -->
    `;
    blogsContainer.appendChild(blogElement);
});