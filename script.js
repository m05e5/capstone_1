const categories = [
    {
        key: 1,
        img_src: "./assets/souchi.jpg",
        img_atr: "Souchi",
        title: "Souchi",
        description: " earum labore, ipsam facilis illum necessitatibus tenetur. Ea, numquam cupiditate.",
        content: "sit amet consectetur adipisicing iste neque optio earum labore, ipsam",
    },
    {
        key: 2,
        img_src: "./assets/pizza.jpg",
        img_atr: "Pizza",
        title: "Pizza",
        description: "Lorem ipsum dolorrepellat iste neque  assumenda magni placeat voluptatem asperiores",
        content: "repellat iste neque optio earum labore,  asperiores eos illum necessitatibus. Ea, numquam cupiditate.",
    },
    {
        key: 3,
        img_src: "./assets/salade.jpg",
        img_atr: "Salad",
        title: "Salad",
        description: "",
        content: "ipsum dolor sit amet consectetur adipisicing elit. Pariatur e optio earum labore, ipsam facilis ",
    },
    {
        key: 4,
        img_src: "./assets/ramen.jpg",
        img_atr: "Ramen",
        title: "Ramen",
        description: "Pariatur fugiat repellat iste neque optio earum placeat voes eos illum necessitatibus tenetur.",
        content: " dolor sit amet consectetur adipisicing elit. Pariate nequm labore, ipsam facilis assumenda magni",
    },
    {
        key: 5,
        img_src: "./assets/Fast-Food.jpg",
        img_atr: "Fast Food",
        title: "Fast Food",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.giat repellat iste neque optio",
        content: "voluptatem asperiores eos illum necessitatibus tenetur. Ea, numquam cupiditate.",
    },
];

function menu(x) {
  x.classList.toggle("change");
  var show = document.getElementById("myLinks");
  if (show.style.display === "flex") {
    show.style.display = "none";
  } else {
    show.style.display = "flex";
  }
}

const CategoriesWrap = document.querySelector('#categories');
const lunchCategories = () => {
  categories.forEach((element)=>{
    // CREATE PROJECT ITEM
    const list = document.createElement('li');
    list.classList.add('category');
    // CREATE PROJECT IMAGE
    const catImg = document.createElement('img');
    catImg.classList.add('cat-img');
    catImg.src = element.img_src;
    catImg.alt = element.img_atr;
    catImg.id = element.key;
    list.appendChild(catImg);
    const catbody = document.createElement('div');
    catbody.classList.add('cat-body');
    // CREATE PROJECT HEADING
    const catHead = document.createElement('h2');
    catHead.classList.add('cat-title');
    catHead.innerText = element.title;
    catbody.appendChild(catHead);
    // CREATE PROJECT DESCRIPTION
    const catDescription = document.createElement('p');
    catDescription.classList.add('cat-text');
    catDescription.innerText = element.description;
    catbody.appendChild(catDescription);
    // CREATE PROJECT SMALL LINE
    const catLine = document.createElement('div');
    catLine.classList.add('cat-line');
    catbody.appendChild(catLine);
    // CREATE PROJECT CONTENT
    const catContent = document.createElement('p');
    catContent.classList.add('cat-content');
    catContent.innerText = element.content;
    catbody.appendChild(catContent);
    list.appendChild(catbody);
    CategoriesWrap.appendChild(list);
  })
};
lunchCategories();