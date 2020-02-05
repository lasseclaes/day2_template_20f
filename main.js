const template = document.querySelector('template').content;

console.log(template);

const aCopy = template.cloneNode(true);

console.log(aCopy);

aCopy.querySelector('h2').textContent = "Jonas the pig";
//innerHTML: we should use textContent. InnerHTML could put JS in there - and with JS you could do everything

//interpolation:

// const name + `${name}`
aCopy.querySelector('.kindOfPig').textContent = "PIGhotpink ";
aCopy.querySelector('p:nth-child(4)').textContent = "2hotpink2 ";









const whosYourDaddy = document.querySelector('main');

whosYourDaddy.appendChild(aCopy);
