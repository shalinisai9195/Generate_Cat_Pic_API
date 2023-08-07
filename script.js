let generate_btn = document.querySelector('.generate_btn');

generate_btn.addEventListener('click', fetchPics)

function fetchPics(){
   fetch(`https://api.thecatapi.com/v1/images/search`)
   .then( res => res.json())
   .then((data) =>{
      let catImgurl = data[0].url

      let catImgElem = document.createElement('img')
      catImgElem.setAttribute('src', `${catImgurl}`)
      catImgElem.classList.add('showcase')

      let catsImgDiv = document.querySelector('.catsImgDiv');
      catsImgDiv.appendChild(catImgElem)
   })
   .catch( err => console.log(err))
}