// const blogPoster = async (event) => {
//     event.preventDefault();

//     // Collect values from the blog post form
//     const title = document.querySelector('#blog-title').value.trim();
//     const description = document.querySelector('#blog-post').value.trim();

//     if (title && description) {
//         // Send a POST request to the API endpoint
//         const response = await fetch('/api/blogs', {
//             method: 'POST',
//             body: JSON.stringify({ title, description }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             // If successful, redirect the browser to the profile page
//             document.location.replace('/');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };

const sayHello = () => {
    console.log("hello");
}

document
    .querySelector('#blog-header')
    .addEventListener('click', sayHello);