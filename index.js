const colorForm = document.getElementById('form')
let color = ""
let palleteType = ""
let hexHtml = ""

document.getElementById('form').addEventListener("submit", getPallete)

function getPallete(e){
    e.preventDefault()
    color = document.getElementById('color-sel').value.slice(1)
    mode = document.getElementById('pallete-type-sel').value
    fetchPallete()
}

function render(){
    document.getElementById('hex-values').innerHTML = hexHtml
}

function fetchPallete(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
            let palleteColor1 = data.colors[0].hex.value
            let palleteColor2 = data.colors[1].hex.value
            let palleteColor3 = data.colors[2].hex.value
            let palleteColor4 = data.colors[3].hex.value
            let palleteColor5 = data.colors[4].hex.value
            
            
            document.getElementById('color1').style.backgroundColor = palleteColor1
            document.getElementById('color2').style.backgroundColor = palleteColor2
            document.getElementById('color3').style.backgroundColor = palleteColor3
            document.getElementById('color4').style.backgroundColor = palleteColor4
            document.getElementById('color5').style.backgroundColor = palleteColor5
            
            hexHtml = `
                <h3 id="hex1">${palleteColor1}</h3>
                <h3 id="hex2">${palleteColor2}</h3>
                <h3 id="hex3">${palleteColor3}</h3>
                <h3 id="hex4">${palleteColor4}</h3>
                <h3 id="hex5">${palleteColor5}</h3>
            `
            render()

        })
            
}

