/*
let newDiv = document.createElement('div');


function test(a) {
    (a++ < 10) ? test(a) : null;
    newDiv.innerHTML = a;
    document.body.appendChild(newDiv);
}

test(1)
 */

function test(a) {
    for (let a = 0; a < 10; a+=2) {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = a;
        document.body.appendChild(newDiv)
    }
}
test(0)

