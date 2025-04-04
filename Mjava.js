// List of Background Videos
const backgroundVideos = [
    "SENDOFFJUX.mp4",
    "highfinal.mp4",
    "tangazo.mp4",
    "TRY.mp4"
];

let currentVideoIndex = 0;
const heroVideo = document.getElementById("heroVideo");
const heroVideoSource = document.getElementById("heroVideoSource");

// Function to Change Video
function changeBackgroundVideo() {
    console.log("Changing video..."); // Debugging: Check if the function is being called
    currentVideoIndex = (currentVideoIndex + 1) % backgroundVideos.length;
    console.log("Current video index: ", currentVideoIndex); // Debugging: Check video index
    heroVideoSource.src = backgroundVideos[currentVideoIndex];
    heroVideo.load();  // Reload the video with the new source
    heroVideo.play();  // Play the video after loading
}

// Change Video Every 10 Seconds (Adjust Time as Needed)
setInterval(changeBackgroundVideo, 10000);

// Project Data (example)
const projects = [
    {
        title: "Wedding Ceremony 2024",
        category: "wedding",
        video: "highfinal.mp4",
        image: "wedding1.jpg"
    },
    {
        title: "Corporate Launch",
        category: "corporate",
        video: "tangazo.mp4",
        image: "corporate1.jpg"
    },
    {
        title: "Send Off Highlights",
        category: "sendoff",
        video: "tangazo.mp4",
        image: "sendoff1.jpg"
    },
    {
        title: "Engagement in Zanzibar",
        category: "engagement",
        video: "engagement1.mp4",
        image: "engagement1.jpg"
    }
];

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (project.classList.contains(category) || category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Function to Display Projects
function displayProjects(filteredProjects = projects) {
    const container = document.querySelector(".projects");
    container.innerHTML = "";

    filteredProjects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project");

        div.innerHTML = `
            <div class="project-media">
                <video src="${project.video}" class="project-video" muted loop></video>
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="overlay">
                <h3>${project.title}</h3>
            </div>
        `;

        // Play/pause video on click
        const video = div.querySelector(".project-video");
        video.addEventListener("click", () => {
            if (video.paused) {
                document.querySelectorAll(".project-video").forEach(v => v.pause());
                video.play();
            } else {
                video.pause();
            }
        });

        container.appendChild(div);
    });
}