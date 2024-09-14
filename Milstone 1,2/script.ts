const toggleButton = document.getElementById("toggle skills") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;

toggleButton.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block"; // Show the element
    } else {
        skills.style.display = "none"; // Hide the element
    }
});
