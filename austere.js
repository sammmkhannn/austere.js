//A simple UI library based on Vanilla JavaScript
//This library provides core user interface elements

//the text element
const heading = (text, type) => {
  let headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  if (type in headings) {
    let heading = document.createElement(type);
  } else {
    return new TypeError("The heading type is not valid");
  }
};
const Text = (text, styles) => {
  let txt = document.createElement("p");
  txt.innerHTML = text;
  for (let stl in styles) {
    txt.style[stl] = styles[stl];
  }
  return txt;
};

//the button element
const Button = (text, styles) => {
  let button = document.createElement("button");
  for (let stl in styles) {
    button.style[stl] = styles[stl];
  }
  button.innerHTML = text;
  return button;
};

//the view element
const View = (text, styles) => {
  let view = document.createElement("div");
  view.innerHTML = text;
  for (let stl in styles) {
    view.style[stl] = styles[stl];
  }
  return;
};

//the card element
const Card = (src, text, styles) => {
  let card = document.createElement("div");
  let img = Image(src, styles.image);
  card.appendChild(img);
  let paragraph = Text(text, styles.text);
  paragraph.innerHTML = text;
  card.appendChild(paragraph);
  for (let stl in styles.card) {
    card.style[stl] = styles.card[stl];
  }
  return card;
};

// the image element
const Image = (src, styles) => {
  let image = document.createElement("img");
  image.src = src;
  for (let stl in styles) {
    image.style[stl] = styles[stl];
  }
  return image;
};

//the Ulist (unordered list) element
const UList = (items, styles) => {
  let list = document.createElement("ul");
  for (let listItem of items) {
    let li = document.createElement("li");
    for (let stl in styles.item) {
      li.style[stl] = styles.item[stl];
    }
    li.innerHTML = listItem;
    list.appendChild(li);
  }
  for (let stl in styles) {
    list.style[stl] = styles[stl];
  }
  for (let item in items) {
    list.append(item);
  }
  //list.appendChild(items);
  return list;
};

// List(ordered list) element
const Olist = (items, styles) => {
  let list = document.createElement("ol");
  for (let item of items) {
    let li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li);
  }
  for (let stl in styles) {
    list.style[stl] = styles[stl];
  }
  for (let item of items) {
    list.appendChild(item);
  }
  return list;
};
