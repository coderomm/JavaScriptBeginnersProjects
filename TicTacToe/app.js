const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");

let turn = "X"

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === "X") {
            box.innerText = turn;
            turn = "O";
        }
        else {
            box.innerText = turn;
            turn = "X";
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winPatterns) {
        console.log(pattern[0]);
        let pos1 = boxes[pattern[0]];
        // console.log(pos1);
        let pos2 = boxes[pattern[1]];
        // console.log(pos2);
        let pos3 = boxes[pattern[2]];
        // console.log(pos3);

    }
}
// console.log(boxes[pattern[8]]);