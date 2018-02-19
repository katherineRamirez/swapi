fetch('https://swapi.co/api/people/')

    .then(function (response) {
        //Turns the the JSON into a JS object
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let containerImages = document.querySelector('.containerImages');

        for (let index = 0; index < data.results.length; index++) {
            if (data.results[index].name === swapi[index].name) {
            let divImage = document.createElement('div');
            divImage.className = 'divImage';
            let image = document.createElement('img');
            image.setAttribute('src', swapi[index].image);
            let textImage = document.createTextNode(data.results[index].name);
            let ptextImage = document.createElement('p');
            ptextImage.appendChild(textImage);
            divImage.appendChild(image);
            divImage.appendChild(ptextImage);
            containerImages.appendChild(divImage);
            }
        }

        
        for (let i = 0; i < data.results[i].name.length; i++){       
           let containerName = [];
           let name = data.results[i].name;
           let gender = data.results[i].gender;
           containerName.push(gender);
           containerName.push(name);
           console.log(containerName)
        }
    });


    