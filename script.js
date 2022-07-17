const markers = document.querySelectorAll(".marker");
const container = document.querySelector("#playground-container");
const sliderX = document.querySelector("#playground-width-slider");
const sliderY = document.querySelector("#playground-height-slider");
const flexDirection = document.querySelector("#flex-direction");
const justifyContent = document.querySelector("#justify-content");
const alignItems = document.querySelector("#align-items");
const flexWrap = document.querySelector("#flex-wrap");
const alignContent = document.querySelector("#align-content");
const squareSize = document.querySelectorAll(".square-size");
const squareSizeUnit = document.querySelectorAll(".square-size-unit");
const squareOrder = document.querySelectorAll(".square-order");
const squareFlexGrow = document.querySelectorAll(".square-flex-grow");
const squareFlexShrink = document.querySelectorAll(".square-flex-shrink");
const squareAlignSelf = document.querySelectorAll(".square-align-self");

const changeContainerSize = (e) => {
    if(e.target.id.includes("width")){
        container.style.width = e.target.value + '%';
    } else {
        container.style.height = e.target.value + '%';
    } 
}

const changeFlexDirection = () => {
    container.style.flexDirection = flexDirection.value;
}

const changeJustifyContent = () => {
    container.style.justifyContent = justifyContent.value;
}

const changeAlignItems = () => {
    container.style.alignItems = alignItems.value;
}

const changeFlexWrap = () => {
    container.style.flexWrap = flexWrap.value;
}

const changeAlignContent = () => {
    container.style.alignContent = alignContent.value;
}

const changeSquareSize = (e) => {
    const square = document.querySelector(`#${e.target.id.slice(0, 2)}square`);
    let unit, value;


    if(e.target.id.includes("unit")){
        unit = e.target.value;
        value = document.querySelector(`#${e.target.id.replace('-unit', '')}`).value;
    } else {
        unit = document.querySelector(`#${e.target.id}-unit`).value;
        value = e.target.value;
    }

    if(e.target.id.includes("width")){
        square.style.width = value + unit;
    }
    
    if(e.target.id.includes("height")){
        square.style.height = value + unit;
    } 
}

const changeSquareOrder = (e) => {
    const square = document.querySelector(`#${e.target.id.slice(0, 2)}square`);
    square.style.order = e.target.value;
}

const changeSquareFlexGrow = (e) => {
    const square = document.querySelector(`#${e.target.id.slice(0, 2)}square`);
    square.style.flexGrow = e.target.value;
}

const changeSquareFlexShrink = (e) => {
    const square = document.querySelector(`#${e.target.id.slice(0, 2)}square`);
    square.style.flexShrink = e.target.value;
}

const changeSquareAlignSelf = (e) => {
    const square = document.querySelector(`#${e.target.id.slice(0, 2)}square`);
    square.style.alignSelf = e.target.value;
}

sliderX.addEventListener("input", (e) => changeContainerSize(e));
sliderY.addEventListener("input", (e) => changeContainerSize(e));

flexDirection.addEventListener("change", changeFlexDirection);
justifyContent.addEventListener("change", changeJustifyContent);
alignItems.addEventListener("change", changeAlignItems);
flexWrap.addEventListener("change", changeFlexWrap);
alignContent.addEventListener("change", changeAlignContent);

squareSize.forEach(size => {
    size.addEventListener("change", (e) => changeSquareSize(e));
});

squareSizeUnit.forEach(unit => {
    unit.addEventListener("change", (e) => changeSquareSize(e));
});

squareOrder.forEach(order => {
    order.addEventListener("change", (e) => changeSquareOrder(e));
})

squareFlexGrow.forEach(flexGrow => {
    flexGrow.addEventListener("change", (e) => changeSquareFlexGrow(e));
})

squareFlexShrink.forEach(flexShrink => {
    flexShrink.addEventListener("change", (e) => changeSquareFlexShrink(e));
})

squareAlignSelf.forEach(alignSelf => {
    alignSelf.addEventListener("change", (e) => changeSquareAlignSelf(e));
})

for(let i = 0; i < markers.length; i++){
    markers[i].textContent = i + 1;
}

