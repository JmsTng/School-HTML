let word = "Google started as a simple search engine, growing to be a tech giant. GSuite is their attempt at overthrowing Microsoft Office."
let cont = document.querySelector("#tw");

function tw(next) {
    cont.textContent += word.charAt(next);
    console.log(next + " " + word.charAt(next));
    if (next < word.length-1) {
        setTimeout(tw, 100, next+1);
    }
}

tw(0);