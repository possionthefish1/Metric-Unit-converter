/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lp = document.getElementById('lp')
const vp = document.getElementById('vp')
const mp = document.getElementById('mp')
const inp = document.getElementById('in-el')
const cbtn = document.getElementById('cbtn')
cbtn.addEventListener('click', convert)

function convert(){    
    cl()
    cv()
    cm()
}

function cl(){    
    let res = Number((inp.value)) * 3.281
    let r1r = res.toFixed(3)
    let res2 = Number((inp.value)) / 3.281
    let r2r = res2.toFixed(3)
    lp.textContent = `${inp.value} meters = ${r1r} feet | ${inp.value} feet = ${r2r} meters`
}

function cv(){    
    let res = Number((inp.value)) * 0.264
    let r1r = res.toFixed(3)
    let res2 = Number((inp.value)) / 0.264
    let r2r = res2.toFixed(3)
    vp.textContent = `${inp.value} liters = ${r1r} gallons | ${inp.value} gallons = ${r2r} liters`
}

function cm(){    
    let res = Number((inp.value)) * 2.204
    let r1r = res.toFixed(3)
    let res2 = Number((inp.value)) / 2.204
    let r2r = res2.toFixed(3)
    mp.textContent = `${inp.value} kilos = ${r1r} pounds | ${inp.value} pounds = ${r2r} kilos`
}

