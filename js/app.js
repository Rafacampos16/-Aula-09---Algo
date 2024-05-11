let div = document.getElementById('resultado')
/*
for(let i = 0; i<= 10000; i++){
    if (i % 2 == 0){
        div.innerHTML += `<span class="text-primary">${i}</span>, `
    }else { 
        div.innerHTML += `<span class= "text-danger">${i}</span>, `
    }
}
*/

for(let i = 0; i<= 1000; i++){
    let span = document.createElement('span')
    if (i % 2 == 0){
        span.textContent = i + ", "
        span.classList.add('text-primary')
        div.appendChild(span)
     
    }else { 
        span.textContent = i + ", "
        span.classList.add('text-danger')
        div.appendChild(span)
    }
}