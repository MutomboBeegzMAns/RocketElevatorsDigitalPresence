var Elevators = $("#NumberofCages");
var InstallCost = $("#Installcost");

var TotalCost = $("#GrandTotal");


/////////////////////////////////////////////////////////////////////////// 
// Residential//
  // ResCages
      function calcResicages(){
        
        var apartment = $("#Resapartments").val();
        var floor = $("#RFloors").val();
        
        var doorsperfloor = Number(apartment) / (Number(floor));
        var totalcages = Math.ceil(Number(doorsperfloor)/6) * Math.ceil(Number(floor)/20);
          
        Elevators.val(totalcages);
        return totalcages;
      };
      

  //ResInstallCost//

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
/////////////////////////////////////////////////////////////////////////// 


// Commercial // 
      //ComCAGES//
      function calcComCages(){
        var totalcages = $("ComCages").val();
        
        Elevators.val(totalcages);
        return totalcages;
      };
      //Install Cost//
      function calcComInstallcost(){
        var totalcages = calcComCages();
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

/////////////////////////////////////////////////////////////////////////// 
// Corporate //
      //Cages//
      function calcCorpcages(){
              
        var occsperfloor = $("#Corpoccupantsflr").val();
        var floor = $("#Corpfloors").val();
        var basement = $("#Corpbasements").val();
        var Totaloccupants = Math.ceil(Number(occsperfloor) * (Number(floor) + Number(basement)));
        var cages = Math.ceil(Number(Totaloccupants) / 1000);
        var columns = Math.ceil((Number(floor) + Number(basement)) /20);
        var Totalcages = Math.ceil(Number(cages) / Number(columns));
          
        Elevators.val(Totalcages);
        return Totalcages;
      };
      //Install//
      function calcCorpInstallcost(){
        var totalcages = calcCorpcages();
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

/////////////////////////////////////////////////////////////////////////// 
// Hybrid //
      //Cages//
      function calcHybcages(){
              
        var occsperfloor = $("#Hyboccupantsflr").val();
        var floor = $("#Hybfloors").val();
        var basement = $("#Hybbasements").val();
        var Totaloccupants = Math.ceil(Number(occsperfloor) * (Number(floor) + Number(basement)));
        var cages = Math.ceil(Number(Totaloccupants) / 1000);
        var columns = Math.ceil((Number(floor) + Number(basement)) /20);
        var Totalcages = Math.ceil(Number(cages) / Number(columns));
          
        Elevators.val(Totalcages);
        return Totalcages;
      };
      //Install//
      function calcHybInstallcost(){
        var totalcages = calcHybcages();
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
/////////////////////////////////////////////////////////////////////////// 


// Selector options //
  function Overall(){
    if ($("#contact_buildingtype").val() == "Residential"){
      return calcResInstallcost();
    }
    else if ($("#contact_buildingtype").val() == "Commercial"){
      return calcComInstallcost();
    }
    else if ($("#contact_buildingtype").val() == "Corporate"){
      return calcCorpInstallcost();
    }
    else if ($("#contact_buildingtype").val() == "Hybrid"){
      return calcHybInstallcost();
    };
  }









