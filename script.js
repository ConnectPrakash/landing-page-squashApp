
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', function () {
        let head = this.querySelector(".blog-head");

        let icon = this.querySelector('.icon');
        this.style.border = "2px solid #75D6AB"; 
        head.style.fontSize = "40px";
        head.style.fontWeight = "700";
        head.style.color = "#75D6AB";
        if (icon) icon.style.display = "flex";
    });

    box.addEventListener('mouseleave', function () {
        let head = this.querySelector(".blog-head");

        let icon = this.querySelector('.icon');
        this.style.border = "2px solid #DADADA"; 
        head.style.fontSize = "28px";
        head.style.fontWeight = "600";
        head.style.color = "#3A4963";
        if (icon) icon.style.display = "none";
    });
});
