const data = JSON.parse(dataInfo);
let content = document.querySelector('.content');

data.map(function(value){
    let title = document.createElement('h2');
    title.textContent = value.title;

    let img = document.createElement('img');
    img.id = value.id;
    img.height = value.height;
    img.width = value.width;
    img.src = value.url;

    let poragraph = document.createElement('p');
    poragraph.textContent = value.subtitle;

    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(poragraph);
});


