

let div = document.querySelector("#test")
//div.style.color = "red"

console.log(div);


function applyBasicStyle(element, {
    color = element.style.color,
    backgroundColor = element.style.backgroundColor,
    margin = element.style.margin,
    padding = element.style.padding,
    height = element.style.height,
    width = element.style.width,
    display = element.style.display,
    alignItems = element.style.alignItems,
    justifyContent = element.style.justifyContent
  } = {}) {
    element.style.color = color;
    element.style.backgroundColor = backgroundColor;
    element.style.margin = margin;
    element.style.padding = padding;
    element.style.height = height;
    element.style.width = width;
    element.style.display = display;
    element.style.alignItems = alignItems;
    element.style.justifyContent = justifyContent;
  }
  

  
  applyBasicStyle(div, {
    color: 'white',
    backgroundColor: 'purple',
    margin: '5px',
    padding: '5px',
    height: '60px',
    width: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
  