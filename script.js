const cases =document.querySelector('.github')
const disc = document.querySelector('.fa-discord')
const vk = document.querySelector('.fa-vk')
const inst = document.querySelector('.fa-instagram')
const phrases =document.querySelector('.touch')
const greet = document.querySelector('.greet')
const phrasesAr = ['I just <span class="colortext">love</span><br>food', 'I just  <span class="colortext">love</span><br> games', 'I just <span class="colortext">love</span><br> Javascript', 'I just.... <br><span class="colortext">love</span> you all']

var i =0;
phrases.addEventListener('click', () => {
    greet.innerHTML = phrasesAr[i];
    i++;
    if( i === 4){
        greet.innerHTML = `I just love web 
        <br><span class="colortext">&</span>
        code itself.`
        i=0;
    }
})
cases.addEventListener('click',() => {
    window.open('https://github.com/Openpalms','_blank');
})
disc.addEventListener('click',() => {
    window.open('https://discord.gg/AnUMxWdP','_blank');
})
vk.addEventListener('click',() => {
    window.open('https://vk.com/myhighsmysobriety','_blank');
})
inst.addEventListener('click',() => {
    window.open('https://instagram.com/ga104kin/','_blank');
})