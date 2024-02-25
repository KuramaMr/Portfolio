// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 0) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" />
                            <h4 class="card-title mt-3">${item.title}</h4>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}
// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="images/${item.image}" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <p class="card-text">${item.text}</p>
                        <div class="text-center">
                            <a href="${item.link}" class="btn btn-success" target='_blank' rel="noreferrer">Lien</a>
                        </div>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Function pour modifié l'age automatiquement
function AboutDate() {
    var today = new Date();
    var myDate = new Date();
    myDate.setFullYear(1995,11,20);
    var y = (today - myDate);
    var days = (y / (1000*60*60*24));
    var age = Math.floor(days/365.25);

    return "J'ai " + age + " ans";
}
document.getElementById('age').innerHTML = AboutDate();

//Affichage du texte automatiquement

function AfficheTitle() {
    let texteTitle = document.getElementsByClassName("hero_title");
    let contenuTitle = texteTitle[0].innerHTML;
        texteTitle[0].innerHTML = '';

    let index = 0;
    let timer = setInterval(function() {
        if(index < contenuTitle.length){
            texteTitle[0].innerHTML += contenuTitle.charAt(index);
            index++;

        } else {
            clearInterval(timer);
        }
    }, 50)
};

function AfficheText() {
    let texteText = document.getElementsByClassName("hero_desc");
    let contenuText = texteText[0].innerHTML;
        texteText[0].innerHTML = '';
    
    let index = 0;

    let timer = setInterval(function() {
        setTimeout(function(){

        if(index < contenuText.length){
            texteText[0].innerHTML += contenuText.charAt(index);
            index++;

        } else {
            clearInterval(timer);
        }
    }, 1700)
    }, 50)
};


// Call the functions to execute the code
AfficheTitle()
AfficheText()
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
AboutDate()
