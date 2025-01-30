// Collapsible Menu with Smooth Animation
document.addEventListener("DOMContentLoaded", () => {
    const leftMenu = document.querySelector(".left-menu");
    leftMenu.addEventListener("click", () => {
        if (leftMenu.style.width === "50px") {
            leftMenu.style.width = "250px";
            leftMenu.textContent = "📂 Left Menu (Click to Collapse)";
        } else {
            leftMenu.style.width = "50px";
            leftMenu.textContent = "📂";
        }
    });
});

// Responsive Scaling
function adjustScaling() {
    const width = window.innerWidth;
    let scale = 1;

    if (width >= 992 && width <= 1600) scale = 0.9;
    else if (width >= 700 && width < 767) scale = 0.8;
    else if (width >= 600 && width < 700) scale = 0.75;
    else if (width <= 600) scale = 0.5;

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = "top left";
}

window.addEventListener("resize", adjustScaling);
window.addEventListener("load", adjustScaling);