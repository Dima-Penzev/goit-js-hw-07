const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listOfPictures = document.querySelector("#gallery");
console.log(listOfPictures);

const makeGallery = (array) => {
  return array.map((elem) => {
    const listEl = document.createElement("li");
    const imgEl = document.createElement("img");
    imgEl.src = elem.url;
    imgEl.alt = elem.alt;
    listEl.append(imgEl);
    return listEl;
  });
};

const elements = makeGallery(images);

listOfPictures.append(...elements);
