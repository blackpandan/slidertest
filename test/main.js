// import observer from 'slidertest-df';
let observer = new IntersectionObserver();
let hidden = document.querySelectorAll(".hidden")

function animate(entries){
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add = "show";
    }
    else{
      entry.target.classList.remove = "show";
    }
  });
}

hidden.forEach((element)=>{
  observer.observe(element);
});
