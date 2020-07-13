$("#errorAlert, #errorAlertButton").hide();

$("#submitButton").on("click", function () {    
           
    let number = Number($("#number").val());           
    if (isNaN(number) || $("#number").val() <=0 || $("#number").val().length == 0) {
        $("#errorAlert, #errorAlertButton").show(1000);
        $("#submitButton, #clearButton").hide();     
    }
    else {
        let factorialResult = 1;
        for (let i = 1; i <= number; i++) {
            factorialResult = factorialResult * i;
        }
        $("#factorialNumber").val(factorialResult);          
    }

 });

$("#errorAlertButton, #clearButton").on("click", function () {
    $("#number, #factorialNumber").val("");
    $("#errorAlert, #errorAlertButton").hide();
    $("#submitButton, #clearButton").show();
    $("#number").focus();
});

  