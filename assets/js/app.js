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
            let aImage = document.createElement('a');
            aImage.setAttribute('href','#myModal');
            aImage.setAttribute('data-toggle','modal')
            aImage.setAttribute('data-target', '#miModal');
            let image = document.createElement('img');
            image.setAttribute('src', swapi[index].image);
            let textImage = document.createTextNode(data.results[index].name);
            let ptextImage = document.createElement('p');
            aImage.appendChild(image);
            ptextImage.appendChild(textImage);
            divImage.appendChild(aImage);
            divImage.appendChild(ptextImage);
            containerImages.appendChild(divImage);

        divImage.addEventListener('click', function (event) {
          let objetivo = event.target.getAttribute('src');
          // console.log(objetivo);
          for (let k = 0; k < swapi.length; k++) {
            if (objetivo === swapi[k].image) {
              let textInfo = swapi.text;

              let myModalLabel = document.querySelector('#myModalLabel');
              myModalLabel.innerHTML = '';
              let titlee = data.results[index].name;
              myModalLabel.appendChild(document.createTextNode(titlee));
              let boxImagem = document.createElement('div');
              let Imagem = document.createElement('img');
              Imagem.setAttribute('src', swapi[k].image)
              boxImagem.appendChild(Imagem);

              let containerGender = document.createElement('p');
              containerGender.setAttribute('class','gender');
              containerGender.appendChild(document.createTextNode('Gender: ' +data.results[index].gender));
              
              let containerEyeColor = document.createElement('p');
              containerEyeColor.setAttribute('class','eyeColor');
              containerEyeColor.appendChild(document.createTextNode('Eye Color: ' +data.results[index].eye_color));
              
              let containerHairColor = document.createElement('p');
              containerHairColor.setAttribute('class','hairColor');
              containerHairColor.appendChild(document.createTextNode('Hair Color: ' +data.results[index].hair_color));
              
              let containerHeight = document.createElement('p');
              containerHeight.setAttribute('class','height');
              containerHeight.appendChild(document.createTextNode('Height: ' +data.results[index].height))
              
              let modalbody = document.querySelector('.modal-body');
              modalbody.innerHTML = '';
              modalbody.appendChild(boxImagem);
              modalbody.appendChild(containerGender);
              modalbody.appendChild(containerEyeColor);
              modalbody.appendChild(containerHairColor);
              modalbody.appendChild(containerHeight);
            }
          }
        });
      }
  }

    });
            


        
        /*for (let i = 0; i < data.results[i].name.length; i++){       
           let containerName = [];
           let name = data.results[i].name;
           let gender = data.results[i].gender;
           containerName.push(gender);
           containerName.push(name);
           console.log(containerName)
        }*/
