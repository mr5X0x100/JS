let boxes = document.querySelectorAll(".box")
// let winMsg = document.querySelector("#msg");
let turnO = true;
// boxes.onclick = () =>{
//     console.log("a button was cliked")
// }
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

boxes.forEach((box) => { 
    box.addEventListener("click", () =>{
        if (turnO){
            box.innerText="X";
            turnO=false;
        }else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        let showWinner = checkWinner();
    })
 });

const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled= true
    }
}


const showWinner = (winplayer) =>{
    let showWinner=document.querySelector("p");
    document.querySelector("#msg").append(winplayer)
    showWinner.classList.remove("hide");

    disableBoxes();
}

  

const checkWinner = () => {
   
    for( let patter of winPatterns) {
       let position_1 =boxes[patter[0]].innerText;
       let position_2 =boxes[patter[1]].innerText;
       let position_3 =boxes[patter[2]].innerText;
       if(position_1 !=""&& position_2 !=""&& position_3 !=""){
        if(position_1 === position_2 && position_2 === position_3 ){
           showWinner(position_1)
        }
       }
    } 
}

