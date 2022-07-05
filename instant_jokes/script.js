const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const apiLink = 'https://icanhazdadjoke.com';

const instantJoke = async ()=>{
    try{
        const res = await fetch(apiLink,{
            headers:{
                'Accept':'application/json'
            }
        });
        const data = await res.json();
        joke.innerHTML = data.joke;
    }catch(err){
        console.log(err);
    }
}

jokeBtn.addEventListener('click',instantJoke);

instantJoke();