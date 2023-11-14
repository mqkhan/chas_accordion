const section2 = document.querySelector(".accordion2");

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

async function getFAQ() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((element) => {
    const divSection4 = document.createElement("div");
    divSection4.setAttribute("class", "title");
    divSection4.setAttribute("id", "section4");
    divSection4.textContent = "Title " + `${element.title}`;
    section2.appendChild(divSection4);

    const divDescription = document.createElement("div");
    divDescription.setAttribute("class", "description");
    divDescription.innerHTML = `<p>${element.body}</p>`;
    section2.appendChild(divDescription);

    divSection4.addEventListener("click", toggle);
  });
}
getFAQ();

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);
