const advice=document.getElementById('advice');
const id=document.getElementById('advice-id');
const button=document.querySelector('.container-img');


const url="https://api.adviceslip.com/advice";

function callingAPI(){
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        advice.innerHTML=json.slip.advice;
        id.innerHTML=json.slip.id;
    })
    .catch(err=>console.error(err));
}


button.addEventListener('click',()=>{
    callingAPI();
});


callingAPI();


