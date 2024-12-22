document.querySelector('.topbutton').addEventListener('click', () => {
    console.log("clicked");

    const scrollDuration = 2000;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    function smoothScrollStep() {
        if (window.scrollY > 0) {
            window.scrollBy(0, scrollStep);
            requestAnimationFrame(smoothScrollStep);
        }
    }

    requestAnimationFrame(smoothScrollStep);
});

