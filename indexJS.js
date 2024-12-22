document.addEventListener("DOMContentLoaded", () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    document.querySelector(".currentcourse p").onmouseover = (event) => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
});

document.addEventListener("DOMContentLoaded", () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    document.querySelector(".hobbies p").onmouseover = (event) => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
});



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


