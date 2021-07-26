const container = document.querySelector('.users');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/users';

    const res = await fetch(uri);
    const posts = await res.json();

    let tmp = '';
    posts.forEach(post => {
        tmp += `
        <div class="post">
        <h2 class="text-2xl font-bold text-blue-900 hover:underline">${post.username}</h2>
        <h2 class="text-md font-bold underline text-blue-900"> First Name: <h2>${post.firstname} </h2></h2>
        <h2 class="text-md font-bold underline text-blue-900"> Last Name: <h2>${post.lastname} </h2></h2>
        <h2 class="text-md font-bold underline text-blue-900"> Position: <h2>${post.position} </h2></h2>
        <p>----------------------------------------</p>
        </div>
        `  
    })
    container.innerHTML = tmp;
}

window.addEventListener('DOMContentLoaded', () => renderPosts());