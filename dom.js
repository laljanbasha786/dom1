let container=document.getElementById("container")

let image=document.createElement("img")
let title=document.createElement("p")
let price=document.createElement("p")
let button=document.createElement("button")
image.setAttribute("src","https://static.india.com/wp-content/uploads/2023/12/prabhas4.jpg?impolicy=Medium_Widthonly&w=400&h=800")
image.style.borderRadius="50px"
image.style.width="300px"
image.style.Color="green"


title.textContent="prabhas"

price.textContent="$5000"

button.textContent="buynow"





container.style.backgroundColor="aqua"
container.style.width="300px"
container.style.padding="20px"
container.append(image,title,price,button)

