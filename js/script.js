window.addEventListener('load', function() {

    //Get all elements 

    let block = document.getElementById("block");
    let positionY = document.getElementById("positionY");
    let positionX = document.getElementById("positionX");
    let size = document.getElementById("size");
    let opacity = document.getElementById("opacity");
    let shapeType = document.getElementById("shapeType");
    let button = document.getElementById("ok");
    let hex = document.getElementById("hex");
    let r = document.getElementById("r");
    let g = document.getElementById("g");
    let b = document.getElementById("b");
    let a = document.getElementById("a")

    let row = document.querySelector(".row");
    let maxY = document.querySelector('.maxY')
    let maxX = document.querySelector('.maxX')
    let positionYBlock = document.querySelector('.positionY')

    // Chnage slider values based on screen size

    console.log("Body change")
    let calculatedHeight = (document.body.clientHeight) - row.offsetHeight;
    positionY.setAttribute("max", calculatedHeight);
    if(calculatedHeight <= 0) {
        positionYBlock.style.display = 'none';
    } else {
        maxY.textContent = calculatedHeight;
    }

    let calculatedWidth = (document.body.offsetWidth - 175);
    positionX.setAttribute("max", calculatedWidth);
    maxX.textContent = calculatedWidth;

    window.addEventListener('resize', function(){
        console.log("Body change")
        calculatedHeight = (document.body.clientHeight) - row.offsetHeight;
        positionY.setAttribute("max", calculatedHeight);
        if(calculatedHeight <= 0) {
            positionYBlock.style.display = 'none';
        } else {
            maxY.textContent = calculatedHeight;
        }

        if(calculatedHeight > 0) {
            positionYBlock.style.display = 'block';
        }

        calculatedWidth = (document.body.offsetWidth - 175);
        positionX.setAttribute("max", calculatedWidth);
        maxX.textContent = calculatedWidth;

    });

    // Change Y value based on range value

    positionY.addEventListener('input', function() {
        block.style.top = positionY.value + 'px';
    });

    // Change X value based on range value

    positionX.addEventListener('input', function() {
        block.style.left = positionX.value + 'px';
    });

    // Change Size based on range value 

    size.addEventListener('input', function() {
        adjustedSize = size.value/10;
        block.style.scale = adjustedSize;
    });

    //Change Opacity based on range

    opacity.addEventListener('input', function() {
        adjustedOpacity = opacity.value/10;
        block.style.opacity = adjustedOpacity;
    });

    //Change shape based in drop down menu value

    button.addEventListener('click', function() {
        if(shapeType.value === 'square'){
            block.style.borderRadius = '0%';
        } else if(shapeType.value==='rhombus'){
            block.style.rotate = '45deg';
        } else if(shapeType.value==='circle'){
            block.style.borderRadius = '100%';
        }
    });

    //Change color based on hex text values

    hex.addEventListener('keydown', function() {
        console.log(hex.value)
         block.style.backgroundColor = `#${hex.value}`
    });

    // Chnage Color based on rgba range values

    r.addEventListener('input', function() {
        aAdjusted = a.value/10
        block.style.backgroundColor = `rgba(${r.value},${g.value},${b.value},${aAdjusted})`;
    });

    g.addEventListener('input', function() {
        aAdjusted = a.value/10
        block.style.backgroundColor = `rgba(${r.value},${g.value},${b.value},${aAdjusted})`;
    });

    b.addEventListener('input', function() {
        aAdjusted = a.value/10
        block.style.backgroundColor = `rgba(${r.value},${g.value},${b.value},${aAdjusted})`;
    });

    a.addEventListener('input', function() {
        aAdjusted = a.value/10
        block.style.backgroundColor = `rgba(${r.value},${g.value},${b.value}, ${aAdjusted})`;
    });


});


