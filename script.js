const floatingImages = document.querySelectorAll(".floating-image");
const mainImage = document.getElementById("main-image");
const testimonialText = document.getElementById("testimonial-text");
const clientName = document.getElementById("client-name");

const testimonials = [
    {
        name: "Ava Johnson",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        text: "Absolutely fantastic service! Highly recommend to everyone."
    },
    {
        name: "Michael Adams",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "Great experience and wonderful support from the team."
    },
    {
        name: "David Lee",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        text: "They went above and beyond. Couldn't be happier!"
    },
    {
        name: "Chris Evans",
        image: "https://randomuser.me/api/portraits/men/26.jpg",
        text: "Professional and timely. Would use their services again."
    },
    {
        name: "James Carter",
        image: "https://randomuser.me/api/portraits/men/28.jpg",
        text: "Top-notch quality and friendly support team!"
    }
];

floatingImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Swap main image
        mainImage.src = testimonials[index].image;
        clientName.textContent = testimonials[index].name;
        testimonialText.textContent = testimonials[index].text;

        // Move the clicked image to the center
        floatingImages.forEach(img => img.classList.remove("active"));
        image.classList.add("active");

        // Reposition other images
        let positions = [
            { top: "20px", left: "15%" },
            { top: "50px", left: "35%" },
            { top: "0px", left: "50%" },
            { top: "50px", right: "35%" },
            { top: "20px", right: "15%" }
        ];

        floatingImages.forEach((img, i) => {
            if (i !== index) {
                img.style.top = positions[i].top;
                img.style.left = positions[i].left || "auto";
                img.style.right = positions[i].right || "auto";
                img.style.width = "50px";
                img.style.height = "50px";
                img.style.border = "3px solid #fff";
            }
        });
    });
});

const scrollContainer = document.getElementById("scrollContainer");
const scrollThumb = document.getElementById("scrollThumb");

scrollContainer.addEventListener("scroll", () => {
    let scrollPercentage = (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
    scrollThumb.style.left = `${scrollPercentage}%`;
});


document.querySelectorAll("*").forEach(elem =>{
    if(elem.offsetWidth > document.documentElement.offsetWidth){
        console.log("Problem child",elem);
    }
})