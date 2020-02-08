var Elevators = $("#NumberofCages");
var InstallCost = $("#Installcost");
// var ServiceFee = $("#ServiceFee");
// var TotalCost = $("#GrandTotal");

// Residential//
  // ResCages
      function calcResicages(){
        
        var apartment = $("#Resapartments").val();
        var floor = $("#Resfloors").val();
        
        var doorsperfloor = Number(apartment) / (Number(floor));
        var totalcages = Math.ceil(Number(doorsperfloor)/6) * Math.ceil(Number(floor)/20);
          
        Elevators.val(totalcages);
        return totalcages;
      };
      $("input[type=number]").on("change keyup", calcResicages);

  //ResInstallCost

      function calcResInstallcost(){
        var totalcages = calcResicages();
        var Standardp = Math.ceil(Number(totalcages) * 7565);
        var Premiump = Math.ceil(Number(totalcages) * 12345);
        var Exceliump = Math.ceil(Number(totalcages) * 15400);
        
        if ($("#Standard").prop("checked") == true){
              InstallCost.val(Number(Standardp));
        }
        else if ($("#Premium").prop("checked") == true){
              InstallCost.val(Number(Premiump));
        }
        else if ($("#Excelium").prop("checked") == true){
              InstallCost.val(Number(Exceliump));
        } ;     
      };
    
  //ResFee
      // function ServiceFee(){
      //   var Standardp = Number(7565);
      //   var Premiump = Number(12345);
      //   var Exceliump = Number(15400);
        
      //   if ($("#Standard").prop("checked") == true){
      //         ServiceFee.val(Number(Standardp));
      //   }
      //   else if ($("#Premium").prop("checked") == true){
      //         ServiceFee.val(Number(Premiump));
      //   }
      //   else if ($("#Excelium").prop("checked") == true){
      //         ServiceFee.val(Number(Exceliump));
      //   } ; 
      // };
  
  function Overall(){
    if ($("#contact_buildingtype").val() == "Residential"){
        return calcResInstallcost();
    };
  }









