let view = document.getElementById('views_id');
let slider = document.getElementById('slider_id');
let price = document.getElementById('price_id');
let sircle = document.getElementById('billing_id');
let time = document.getElementById('time');
let pageViews = ["10k", "50k", "100k", "500k", "1M"];
let dollar = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener('input', function(){
    updateValue();
    view.innerHTML = pageViews[slider.value];

    let value = this.value * 25;

    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`

})

sircle.addEventListener('change', function(){
    if(isYearly == false){
        isYearly = true;
        time.textContent = '/year';
    } else {
        isYearly = false;
        time.textContent = '/month';
    }
    updateValue()
});


function updateValue(){
    if(isYearly){
        price.innerHTML = dollar[slider.value] * .75
    } else {
        price.innerHTML = dollar[slider.value]
    }
}

