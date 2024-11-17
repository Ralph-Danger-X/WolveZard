console.log("Wolvespic Loaded!");

const likeButtons = document.querySelectorAll('.love');
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked'); 
        button.style.color = button.classList.contains('liked') ? 'red' : '';
    });
});

const commentButtons = document.querySelectorAll('.comment');
commentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const comment = prompt("Enter your comment:");
        if (comment) {
            alert(`Comment added: ${comment}`);
        }
    });
});

console.log("Wolvespic Loaded!");