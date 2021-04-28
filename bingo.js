var squares = [
    "'Release Train'",
    "'Stakeholders'",
    "'Spike User Story'",
    "'Decompose'",
    "Someone confuses Increment for Iteration or vise versa",
    "'Whatever the team wants to do'",
    "Dead silence on meeting for 10 seconds+",
    "'Cross-Functional'",
    "'Self-Organizing'",
    "'Timebox'",
    "'Ceremonies'",
    "'Grooming'",
    "'Refinement'",
    "'Lean'",
    "'Continuous Integration'",
    "'Acceptance Criteria'",
    "'Enabler'",
    "'Feature'",
    "'RTE'",
    "'Scaled Agile Framework'",
    "'Vision'",
    "'Metrics'",
    "Someone story points something not using fibonacci (e.g. 4)",
    "'Objective'",
    "Someone has connection issues",
    "'Breakout Sessions'"
];

window.onload = function() {
    randomizeSquares();
};

var randomizeSquares = function() {
    var tempList = [...squares];
    for (let x = 1; x < 6; x++)
    {
        for (let y = 1; y < 6; y++)
        {
            var square = document.getElementById(x + "" + y);

            square.onclick = function() {
                tableClick(this);
            };

            if (x == 3 && y == 3)
            {
                square.innerHTML = "FREE";
            }
            else
            {
                var contentIndex = Math.floor(Math.random() * tempList.length);
                square.innerHTML = tempList[contentIndex];
                tempList.splice(contentIndex,1);
            }
        }
    }
}

var tableClick = function(cell) {
    if (cell.style.backgroundColor.toLowerCase() == "")
        cell.style.backgroundColor = "orange";
    else
        cell.style.backgroundColor = "";
}