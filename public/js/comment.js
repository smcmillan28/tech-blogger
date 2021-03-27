const commentPoster = async (event) => {
    event.preventDefault();

    document.location.replace('/comment');

    // Collect values from the blog post form
    const content = document.querySelector('.comment-content').value.trim();

    if (content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the homepage
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const sayHello = () => {
    console.log("hello");
}

document
    .querySelector('.comment-button')
    .addEventListener('click', commentPoster);