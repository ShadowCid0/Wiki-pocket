
const textAnimation = document.querySelector(".text-stroke");

    const setAnimationName = (element, animationName) => {
        element && (element.style.animationName = animationName);
    };

            setAnimationName(textAnimation, "none");
            requestAnimationFrame(() =>
                setTimeout(() => setAnimationName(textAnimation, ""), 0)
            );
        false

document.addEventListener("DOMContentLoaded", function() {
            var audio = document.getElementById("myAudio");
            var button = document.querySelector(".start");
        
            button.addEventListener("click", function() {
                // Jouer le son
                audio.play();
        
                // Quand le son se termine, changer de page
                audio.onended = function() {
                    window.location.href = "chargement.html";
                };
            });
        });
        