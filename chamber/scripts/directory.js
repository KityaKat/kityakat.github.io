const url = 'https://kityakat.github.io/chamber/scripts/directory-info.json';  

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.company);
    displayCompanies(data.company);
}
function displayCompanies(companies) {
    const cards = document.querySelector("div.cards");

    companies.forEach((company) => {
        let card = document.createElement("section.cards");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phoneNum = document.createElement("p");
        let link = document.createElement("a");
        let compName = document.createElement("p");

        address.textContent = `${company.address}`;
        phoneNum.textContent = `${company.phone}`;
        link.textContent = `${company.website}`;
        compName.innerHTML = `<strong>${company.name}</strong>`;

        logo.setAttribute("src", company.image);
        logo.setAttribute("alt", `Company logo of ${company.name}`);

        link.setAttribute("href", `${company.website}`);
        link.setAttribute("target", "blank");

        card.appendChild(logo);
        card.appendChild(compName);
        card.appendChild(address);
        card.appendChild(phoneNum);
        card.appendChild(link);

        cards.appendChild(card);
    })
}
getCompaniesData();
