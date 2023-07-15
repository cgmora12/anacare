$(function(){
    /*var select = $("#tuq6");
    var slider = $("<div id='slider' class='form-range slider' style='max-width:300px'></div>").insertAfter(select).slider({
        min: 1,
        max: 7,
        range: "min",
        value: select[0].selectedIndex + 1,
        slide: function(event, ui) {
            select[0].selectedIndex = ui.value - 1;
        }
    });
    $("#tuq6").on("change", function() {
        slider.slider("value", this.selectedIndex + 1 );
    });*/

    /*$('#mir').barrating('show', {
        theme: 'bars-movie'
    });
    $('#specialist').barrating('show', {
        theme: 'bars-movie'
    });
    $('#exercise').barrating('show', {
        theme: 'bars-movie'
    });*/
    /*$('#surgeries').barrating('show', {
        theme: 'bars-movie'
    });*/

    var bodyContent = document.getElementsByTagName('div');

    for(var i = 0; i < bodyContent.length; i++) {
        var styleI = window.getComputedStyle(bodyContent[i], null).getPropertyValue('font-size');
        var fontSizeI = parseFloat(styleI);
        bodyContent[i].style.fontSize = (fontSizeI + 1) + 'px';
    }
});

function calculateProbability()
{   
    var probabilityNoLeaks = 0, probabilityVeryEarly = 0, probabilityEarly = 0, probabilityLate = 0, 
        someTreatment = 0, medicalTreatmentvsNone = 0, radiologicalvsMedicalOrNone = 0, surgicalvsMedicalRadiologicalOrNone = 0, radiologicalvsNone = 0, surgicalvsNone = 0;
    var estimated = 0, estimatedNoLeaks = 0, estimatedVeryEarly = 0, estimatedEarly = 0, estimatedLate = 0, 
        estimatedSomeTreatment = 0, estimatedMedicalTreatmentvsNone = 0, estimatedRadiologicalvsMedicalOrNone = 0, estimatedSurgicalvsMedicalRadiologicalOrNone = 0,
        estimatedRadiologicalvsNone = 0, estimatedSurgicalvsNone = 0;

    var ageNumber = parseInt(jQuery("#age").val());
    var age = 0;
    if(ageNumber >= 70){
        age = 1;
    }
    console.log("age " + age);

    var gender = $("input[name=genderRadio]:checked").val();
    var genderMascFem = 0;
    switch(gender){
        case "male": genderMascFem = 1;
            break;
        case "female": genderMascFem = 2;
            break;
    }
    console.log("gender " + genderMascFem);

    var weight = parseInt(jQuery("#weight").val());
    var height = parseInt(jQuery("#height").val());
    //var heightM = parseFloat(height)/100;
    var bim = (weight / ((height * height) / 10000)).toFixed(2);
    console.log("bim " + bim);

    var anastomosisRadio = $("input[name=anastomosisRadio]:checked").val();
    var anastomosis = 0;
    switch(anastomosisRadio){
        case "endtoend": anastomosis = 1;
            break;
        case "sidetoend": anastomosis = 2;
            break;
        case "sidetoside": anastomosis = 3;
            break;
    }
    console.log("anastomosis " + anastomosis);

    var smokingRadio = $("input[name=smokingRadio]:checked").val();
    var smoking = 0;
    switch(smokingRadio){
        case "yes": smoking = 1;
            break;
    }
    console.log("smoking " + smoking);

    var haematocritRadio = $("input[name=haematocritRadio]:checked").val();
    var haematocrit = 0;
    switch(haematocritRadio){
        case "yes": haematocrit = 1;
            break;
    }
    console.log("haematocrit " + haematocrit);

    var chemotherapyRadio = $("input[name=chemotherapyRadio]:checked").val();
    var chemotherapy = 0;
    switch(chemotherapyRadio){
        case "yes": chemotherapy = 1;
            break;
    }
    console.log("chemotherapy " + chemotherapy);

    var nutritionRadio = $("input[name=nutritionRadio]:checked").val();
    var nutrition = 0;
    switch(nutritionRadio){
        case "yes": nutrition = 1;
            break;
    }
    console.log("nutrition " + nutrition);

    var resectionRadio = $("input[name=resectionRadio]:checked").val();
    var resection = 0;
    switch(resectionRadio){
        case "yes": resection = 1;
            break;
    }
    console.log("resection " + resection);

    var transanallyRadio = $("input[name=transanallyRadio]:checked").val();
    var transanally = 0;
    switch(transanallyRadio){
        case "yes": transanally = 1;
            break;
    }
    console.log("transanally " + transanally);

    var stomaRadio = $("input[name=stomaRadio]:checked").val();
    var stoma = 0;
    switch(stomaRadio){
        case "yes": stoma = 1;
            break;
    }
    console.log("stoma " + stoma);

    var intraoperativelyRadio = $("input[name=intraoperativelyRadio]:checked").val();
    var intraoperatively = 0;
    switch(intraoperativelyRadio){
        case "yes": intraoperatively = 1;
            break;
    }
    console.log("intraoperatively " + intraoperatively);

    var transfusionRadio = $("input[name=transfusionRadio]:checked").val();
    var transfusion = 0;
    switch(transfusionRadio){
        case "yes": transfusion = 1;
            break;
    }
    console.log("transfusion " + transfusion);

    var transfusionAfterRadio = $("input[name=transfusionAfterRadio]:checked").val();
    var transfusionAfter = 0;
    switch(transfusionAfterRadio){
        case "yes": transfusionAfter = 1;
            break;
    }
    console.log("transfusionAfter " + transfusionAfter);

    var defectsRadio = $("input[name=defectsRadio]:checked").val();
    var defects = 0;
    switch(defectsRadio){
        case "yes": defects = 1;
            break;
    }
    console.log("defects " + defects);

    var asaRadio = $("input[name=asaRadio]:checked").val();
    var asa = 0;
    switch(asaRadio){
        case "yes": asa = 1;
            break;
    }
    console.log("asa " + asa);

    estimatedVeryEarly = -6.9 + -0.03565 * age + -0.00322272 * bim + 0.8084 * smoking + 1.930 * haematocrit + -0.039 * chemotherapy 
                        + 0.073 * nutrition + -0.29 * genderMascFem + 0.16 * resection + -0.11 * transanally + -1.08 * anastomosis 
                        + -0.436 * stoma + -0.22 * intraoperatively + 0.698 * transfusion + 0.76 * transfusionAfter + 7.34 * defects;
    console.log("estimatedVeryEarly " + estimatedVeryEarly);
    
    estimatedEarly = -5.7 + -0.33 * age + 0.0046 * bim + 0.184 * smoking + 2.24 * haematocrit + 0.2648 * chemotherapy 
                        + -0.3632 * nutrition + -0.228 * genderMascFem + -0.312 * resection + 0.4832 * transanally + -1.412 * anastomosis 
                        + -0.143 * stoma + 0.16 * intraoperatively + 1.22 * transfusion + 1.29 * transfusionAfter + 6.027 * defects;
    console.log("estimatedEarly " + estimatedEarly);
    
    estimatedLate = -4.48 + -0.048 * age + 0.0242145 * bim + 0.5267 * smoking + 0.09 * haematocrit + 1.13 * chemotherapy 
                        + -0.5272164 * nutrition + -0.5236 * genderMascFem + 0.11 * resection + 0.44 * transanally + -0.14 * anastomosis 
                        + 0.39 * stoma + -0.07 * intraoperatively + -0.5972 * transfusion + 0.93 * transfusionAfter + 1.58 * defects;
    console.log("estimatedLate " + estimatedLate);

    estimated = 1 + Math.pow(Math.E, estimatedVeryEarly) + Math.pow(Math.E, estimatedEarly) + Math.pow(Math.E, estimatedLate);

    console.log("estimatedVeryEarly e " + Math.pow(Math.E, estimatedVeryEarly));
    console.log("estimatedEarly e " + Math.pow(Math.E, estimatedEarly));
    console.log("estimatedLate e " + Math.pow(Math.E, estimatedLate));
    console.log("estimated " + estimated);

    probabilityVeryEarly = 100 * Math.pow(Math.E, estimatedVeryEarly) / estimated;
    probabilityEarly = 100 * Math.pow(Math.E, estimatedEarly) / estimated;
    probabilityLate = 100 * Math.pow(Math.E, estimatedLate) / estimated;
    probabilityNoLeaks = (100 - probabilityVeryEarly.toFixed(2) - probabilityEarly.toFixed(2) - probabilityLate.toFixed(2));
    //probabilityAnkleFoot = (1 / (1 + Math.pow(Math.E, modelAnkleFoot)))*100; 
        
    estimatedSomeTreatment = -2.46474 + 0.02444 * bim + -0.91677 * genderMascFem + 0.14246 * asa + 0.5746 * haematocrit + 0.38217 * smoking 
                            + 0.90998 * resection + -0.6968 * anastomosis + 0.65912 * transfusion;

    estimatedMedicalTreatmentvsNone = -2.913 + 0.005221 * bim + -1.251552 * genderMascFem + -0.014808 * asa + 0.008461 * haematocrit + 0.414963 * smoking 
                            + 0.747674 * resection + -0.905773 * anastomosis + 1.38318 * transfusion;
    estimatedRadiologicalvsMedicalOrNone = -2.8097 + 0.0148 * bim + -1.2499 * genderMascFem + -0.1432 * asa + 0.1911 * haematocrit + 0.4547 * smoking 
                            + 0.6166 * resection + -0.6704 * anastomosis + 1.0319 * transfusion;

    estimatedSurgicalvsMedicalRadiologicalOrNone = -2.46474 + 0.02444 * bim + -0.91677 * genderMascFem + 0.14246 * asa + 0.5746 * haematocrit + 0.38217 * smoking 
                            + 0.90998 * resection + -0.6968 * anastomosis + 0.65912 * transfusion;

    estimatedRadiologicalvsNone = -4.54017 + 0.03388 * bim + -1.23003 * genderMascFem + -0.45033 * asa + 0.60175 * haematocrit + 0.54392 * smoking 
                            + 0.6112 * resection + -0.2178 * anastomosis + -13.47757 * transfusion;
    estimatedSurgicalvsNone = -3.452561 + 0.03117 * bim + -0.6529 * genderMascFem + 0.38252 * asa + 0.76699 * haematocrit + 0.30951 * smoking 
                            + 1.08309 * resection + -0.72751 * anastomosis + 0.32068 * transfusion;

    someTreatment = 100 * Math.pow(Math.E, estimatedSomeTreatment);
    medicalTreatmentvsNone = 100 * Math.pow(Math.E, estimatedMedicalTreatmentvsNone);
    radiologicalvsMedicalOrNone = 100 * Math.pow(Math.E, estimatedRadiologicalvsMedicalOrNone);
    surgicalvsMedicalRadiologicalOrNone = 100 * Math.pow(Math.E, estimatedSurgicalvsMedicalRadiologicalOrNone);
    radiologicalvsNone = 100 * Math.pow(Math.E, estimatedRadiologicalvsNone);
    surgicalvsNone = 100 * Math.pow(Math.E, estimatedSurgicalvsNone);

    jQuery("#results").html("<strong>Probability of leak</strong>: <br>No leaks " + probabilityNoLeaks.toFixed(2) + "% <br>Very early leak "  + probabilityVeryEarly.toFixed(2) 
        + "% <br>Early leak " + probabilityEarly.toFixed(2) + "% <br>Late Leak " + probabilityLate.toFixed(2) + "% "+ "<br><br><br>"
        + "<strong>Treatmeant probability: </strong><br>Some treatmeant " + someTreatment.toFixed(2) + "% <br>Medical Treatment vs None "  + medicalTreatmentvsNone.toFixed(2)
        + "% <br>Radiological vs Medical or None "  + radiologicalvsMedicalOrNone.toFixed(2) 
        + "% <br>Surgical vs Medical, Radiological or None "  + surgicalvsMedicalRadiologicalOrNone.toFixed(2)
        + "% <br>Radiological Treatment vs None " + radiologicalvsNone.toFixed(2)
        + "% <br>Surgical Treatment vs None " + surgicalvsNone.toFixed(2) + "%<br>");

    window.scrollTo(0,document.body.scrollHeight);
}
