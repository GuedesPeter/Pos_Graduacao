// Função como argumento ================================================================

function decision(question, doOK, doCancel) {
    if (question=="OK") doOK()
    else doCancel();
    }
    function showOk() { console.log( "You agreed." ); }
    function showCancel() { console.log( "You canceled the execution." ); }
    decision("OK", showOk, showCancel);
    decision("Cancel", showOk, showCancel);

// Função anônima como argumento ==========================================================

function decision (question, doOk, doCancel) {
    if (question == "OK") doOk()
    else doCancel()
};

decision (
    "OK",
    function () {console.log("You agreed.");},
    function () {console.log("You canceled the execution.");}
);

decision (
    "Cancel",
    function () {console.log("You agreed.");},
    function () {console.log("You canceled the execution.");}
);


// Função atribuída a variável como argumento ===============================================

function decision(question, doOK, doCancel) {
    if (question=="OK") doOK()
    else doCancel();
    }
    let beOK = function showOk() { console.log( "You agreed." ); }
    let beCancel = function showCancel() { console.log( "You canceled the execution." ); }
    decision("OK", beOK, beCancel);
    decision("Cancel", beOK, beCancel);



