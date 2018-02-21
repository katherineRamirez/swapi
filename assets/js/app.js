/* API personajes de Star Wars */
fetch('https://swapi.co/api/people/')

    .then(function (response) {
        //Turns the the JSON into a JS object
        return response.json();
    })
    .then(function (data) {

/* Contenedor de imágenes de personajes */
      let containerImages = document.querySelector('.containerImages');
      document.getElementById('containerFilms').style.display = 'none';

        for (let index = 0; index < data.results.length; index++) {
            if (data.results[index].name === swapi[index].name) {

      let divImage = document.createElement('div'); 
      divImage.className = 'divImage';
      let aImage = document.createElement('a');
      let image = document.createElement('img');
      image.setAttribute('src', swapi[index].image);
      let textImage = document.createTextNode(data.results[index].name);
      let ptextImage = document.createElement('p');
      ptextImage.setAttribute('class','namePerson');
      aImage.appendChild(image);
      ptextImage.appendChild(textImage);
      divImage.appendChild(aImage);
      divImage.appendChild(ptextImage);
      containerImages.appendChild(divImage);

/* Función filtro botones de género Masculino, Femenino y N/A */
      let btnFemale = document.getElementById('btnFemale');
          btnFemale.onclick = function () {
      let containerImages = document.querySelector('.containerImages');
                   
        for (let i = 0; i < containerImages.childNodes.length - 1; i++) {
        containerImages.childNodes[i].nextSibling.style.display = 'inline';
      let namee = containerImages.childNodes[i].nextSibling.lastChild.firstChild;
      let gender = data.results[i].gender;
        if (gender !== 'female') {
        containerImages.childNodes[i].nextSibling.style.display = 'none';
        }
        }
          }

      let btnMale = document.getElementById('btnMale');
      btnMale.onclick = function () {
      let containerImages = document.querySelector('.containerImages');
        for (let j = 0; j < containerImages.childNodes.length - 1; j++) {
      let namee = containerImages.childNodes[j].nextSibling.lastChild.firstChild;
      let gender = data.results[j].gender;
        containerImages.childNodes[j].nextSibling.style.display = 'inline';
        if (gender !== 'male') {
        containerImages.childNodes[j].nextSibling.style.display = 'none';
        }
        }
      }

      let btnNA = document.getElementById('btnNA');
      btnNA.onclick = function () {
      let containerImages = document.querySelector('.containerImages');
        for (let j = 0; j < containerImages.childNodes.length - 1; j++) {
      let namee = containerImages.childNodes[j].nextSibling.lastChild.firstChild;
      let gender = data.results[j].gender;
        containerImages.childNodes[j].nextSibling.style.display = 'inline';
        if (gender !== 'n/a') {
        containerImages.childNodes[j].nextSibling.style.display = 'none';
        }
        }
      }

       let btnMoreInfo = document.getElementById('btnMoreInfo');
      btnMoreInfo.onclick = function () {
        document.getElementById('sectionPersonajes').style.display = 'none'; 
        document.getElementById('containerFilms').style.display = 'block';
      }
    }
  }


/* API films de Star Wars */
fetch('https://swapi.co/api/films/')

    .then(function (respon) {
        //Turns the the JSON into a JS object
        return respon.json();
    })
    .then(function (dato) {

/* Creando contenido del containerFilms */
    let containerFilms = document.getElementById('containerFilms');

    let divContainerFilm = document.createElement('div');
    
    let containerTitleFilm = document.createElement('h1');
        containerTitleFilm.setAttribute('class','titleFilm');
        containerTitleFilm.appendChild(document.createTextNode('Movie: ' +dato.results[0].title));

    let containerEpisodio = document.createElement('h5');
        containerEpisodio.setAttribute('class','episodioFilm');
        containerEpisodio.appendChild(document.createTextNode('Episodio: ' +dato.results[0].episode_id));

    let containerDirector = document.createElement('h3');
        containerDirector.setAttribute('class','directorFilm');
        containerDirector.appendChild(document.createTextNode('Director: ' +dato.results[0].director));

    let divImageGeorge = document.createElement('div');
        //divImageGeorge.setAttribute('class','col-md-12');
    let containerGeorge = document.createElement('img');
        containerGeorge.setAttribute('class','georgeImg');
        containerGeorge.setAttribute('src','assets/images/georgeLucas.jpg');
        divImageGeorge.appendChild(containerGeorge);

    let divImageBtnCharacters = document.createElement('div');
    let containerBtnCharacters = document.createElement('button');
        containerBtnCharacters.setAttribute('id','buttonCharacter');
        containerBtnCharacters.setAttribute('class','btnCharacter');
        containerBtnCharacters.appendChild(document.createTextNode('Choose Character'));
        divImageBtnCharacters.appendChild(containerBtnCharacters);

        divContainerFilm.appendChild(containerTitleFilm);
        divContainerFilm.appendChild(containerEpisodio);
        divContainerFilm.appendChild(containerDirector);
        divContainerFilm.appendChild(divImageGeorge);
        divContainerFilm.appendChild(divImageBtnCharacters);
        containerFilms.appendChild(divContainerFilm);

     let buttonCharacter = document.getElementById('buttonCharacter');
      buttonCharacter.onclick = function () {
        document.getElementById('containerFilms').style.display = 'none'; 
        document.getElementById('sectionPersonajes').style.display = 'block';
      }

  }); 

    });
        
