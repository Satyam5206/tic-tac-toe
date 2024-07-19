let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let newgamebtn = document.querySelector("#New_btn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
});
const resetgame = () => {
    turn0 = true ;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
const disabledboxes = () => {
    for (let box of boxes){
        box.disabled = true;
        
    }
};
const enabledboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner) => {
 msg.innerText = `Congratulations, Winner is ${winner}`;
 msgcontainer.classList.remove("hide");
 disabledboxes();
}
const checkwinner = () => {
    for (let pattern of winPatterns) {
         
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log("winner",pos1);

                showwinner(pos1);
            }
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
 