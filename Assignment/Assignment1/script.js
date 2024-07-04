


function imageReplacer(imgUrl){
    document.querySelector(".image").innerHTML = `<img src="${imgUrl}" alt="" class="profile-pic">`
}

function nameReplacer(name){
    h2 = document.createElement('h2');
    const text = document.createTextNode(`${name}`)
    h2.appendChild(text)
    document.querySelector('.data').appendChild(h2)
}
function designation(txt){
    const span = document.createElement('span');
    const text = document.createTextNode(`${txt}`)
    span.appendChild(text)
    document.querySelector('.data').appendChild(span)
}

function dataReplacer(data,child){

    const span = document.querySelector(`.info:nth-child(${child})`).querySelector('span').innerHTML = data

    //console.log(span);

}




fetch("https://api.github.com/users/Haris-Bin-Ejaz")
.then((response)=>{

    return response.json()
}).
then((data)=>{

    //console.log(data);
    //image = 
   //console.log(image);
   imageReplacer(data.avatar_url)

   nameReplacer(data.name)
   //console.log(data.name);

   designation('Software Engineer')

   //console.log(data.followers);
   dataReplacer(data.followers,1)
   dataReplacer(data.following,2)
   //console.log();
   dataReplacer(data.public_repos,3)


   
})
.catch((error)=>{console.log(error);})