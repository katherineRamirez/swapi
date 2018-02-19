fetch('https://swapi.co/api/people/')

    .then(function (response) {
        //Turns the the JSON into a JS object
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        for (let index = 0; index < data.results.length; index++) {
            let containerImages = document.querySelector('.containerImages');
            let divImage = document.createElement('div');
            let textImage = document.createTextNode(data.results[index].name);
            let ptextImage = document.createElement('p');
            ptextImage.appendChild(textImage);
            divImage.appendChild(ptextImage);
            containerImages.appendChild(divImage);
        }
    });
