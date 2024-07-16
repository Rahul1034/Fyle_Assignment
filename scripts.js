document.addEventListener("DOMContentLoaded", function() {
    const openFormButton = document.getElementById("openFormButton");
    const closeFormButton = document.getElementById("closeFormButton");
    const popupForm = document.getElementById("popupForm");

    openFormButton.addEventListener("click", function() {
        popupForm.style.display = "block";
    });

    closeFormButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });
});
