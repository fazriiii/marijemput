function showInfo(infoId) {
    var infoContainer = document.getElementById('info-container');
    var infoContents = document.getElementsByClassName('info-content');

    // Hide all info contents
    for (var i = 0; i < infoContents.length; i++) {
        infoContents[i].style.display = 'none';
    }

    // Show the selected info content
    document.getElementById(infoId).style.display = 'block';
    infoContainer.style.display = 'block';
}

function toggleInfo() {
    var infoContainer = document.getElementById('info-container');
    if (infoContainer.style.display === 'none' || infoContainer.style.display === '') {
        infoContainer.style.display = 'block';
    } else {
        infoContainer.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust to trigger when half of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once the element is in view
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate').forEach(section => {
        observer.observe(section);
    });
});



