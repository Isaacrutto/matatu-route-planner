const routes = [
    { name: "CBD to Westlands", saccos: [{ name: "Westie Express", fare: 100 }] },
    { name: "CBD to Rongai", saccos: [{ name: "Ongata Line", fare: 150 }, { name: "City Shuttle", fare: 140 }] },
    { name: "CBD to Thika", saccos: [{ name: "Super Metro", fare: 200 }] },
    { name: "CBD to Umoja", saccos: [{ name: "Forward Travellers", fare: 80 }] },
    { name: "CBD to Buruburu", saccos: [{ name: "City Hoppa", fare: 70 }] },
    { name: "CBD to Kitengela", saccos: [{ name: "Kitengela Line", fare: 180 }] }
];

const routesList = document.getElementById("routesList");
const saccoDetails = document.getElementById("saccoDetails");
const saccoList = document.getElementById("saccoList");
const backButton = document.getElementById("backButton");
const searchBar = document.getElementById("searchBar");

// Display Routes
function loadRoutes() {
    routesList.innerHTML = "";
    routes.forEach((route, index) => {
        const li = document.createElement("li");
        li.textContent = route.name;
        li.onclick = () => showSaccos(index);
        routesList.appendChild(li);
    });
}

// Show Matatu Saccos
function showSaccos(index) {
    const selectedRoute = routes[index];
    saccoList.innerHTML = "";
    selectedRoute.saccos.forEach(sacco => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${sacco.name}</strong> - Fare: KES ${sacco.fare}`;
        saccoList.appendChild(li);
    });
    routesList.style.display = "none";
    saccoDetails.style.display = "block";
}

// Go Back
backButton.onclick = () => {
    routesList.style.display = "block";
    saccoDetails.style.display = "none";
};

// Search Functionality
searchBar.addEventListener("input", () => {
    const filter = searchBar.value.toLowerCase();
    const filteredRoutes = routes.filter(route => route.name.toLowerCase().includes(filter));
    routesList.innerHTML = "";
    filteredRoutes.forEach((route, index) => {
        const li = document.createElement("li");
        li.textContent = route.name;
        li.onclick = () => showSaccos(index);
        routesList.appendChild(li);
    });
});

// Load Routes on Page Load
loadRoutes();
