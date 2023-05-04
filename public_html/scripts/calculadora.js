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
    var probabilityNoLeaks = 0, probabilityVeryEarly = 0, probabilityEarly = 0, probabilityLate = 0;
    var estimated = 0, estimatedNoLeaks = 0, estimatedVeryEarly = 0, estimatedEarly = 0, estimatedLate = 0;

    var ageNumber = parseInt(jQuery("#age").val());
    var age = 0;
    if(ageNumber >= 70){
        age = 1;
    }

    var gender = $("input[name=genderRadio]:checked").val();
    var genderMascFem = 0;
    switch(gender){
        case "male": genderMascFem = 1;
            break;
        case "female": genderMascFem = 2;
            break;
    }

    var weight = parseInt(jQuery("#weight").val());
    var height = parseInt(jQuery("#height").val());
    //var heightM = parseFloat(height)/100;
    var bim = (weight / ((height * height) / 10000)).toFixed(2);
    console.log("bim" + bim);

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
    console.log("anastomosis" + anastomosis);

    var smokingRadio = $("input[name=smokingRadio]:checked").val();
    var smoking = 0;
    switch(smokingRadio){
        case "yes": smoking = 1;
            break;
    }
    console.log("smoking" + smoking);

    var haematocritRadio = $("input[name=haematocritRadio]:checked").val();
    var haematocrit = 0;
    switch(haematocritRadio){
        case "yes": haematocrit = 1;
            break;
    }
    console.log("haematocrit" + haematocrit);

    var chemotherapyRadio = $("input[name=chemotherapyRadio]:checked").val();
    var chemotherapy = 0;
    switch(chemotherapyRadio){
        case "yes": chemotherapy = 1;
            break;
    }
    console.log("chemotherapy" + chemotherapy);

    var nutritionRadio = $("input[name=nutritionRadio]:checked").val();
    var nutrition = 0;
    switch(nutritionRadio){
        case "yes": nutrition = 1;
            break;
    }
    console.log("nutrition" + nutrition);

    var resectionRadio = $("input[name=resectionRadio]:checked").val();
    var resection = 0;
    switch(resectionRadio){
        case "yes": resection = 1;
            break;
    }
    console.log("resection" + resection);

    var transanallyRadio = $("input[name=transanallyRadio]:checked").val();
    var transanally = 0;
    switch(transanallyRadio){
        case "yes": transanally = 1;
            break;
    }
    console.log("transanally" + transanally);

    var stomaRadio = $("input[name=stomaRadio]:checked").val();
    var stoma = 0;
    switch(stomaRadio){
        case "yes": stoma = 1;
            break;
    }
    console.log("stoma" + stoma);

    var intraoperativelyRadio = $("input[name=intraoperativelyRadio]:checked").val();
    var intraoperatively = 0;
    switch(intraoperativelyRadio){
        case "yes": intraoperatively = 1;
            break;
    }
    console.log("intraoperatively" + intraoperatively);

    var transfusionRadio = $("input[name=transfusionRadio]:checked").val();
    var transfusion = 0;
    switch(transfusionRadio){
        case "yes": transfusion = 1;
            break;
    }
    console.log("transfusion" + transfusion);

    var transfusionAfterRadio = $("input[name=transfusionAfterRadio]:checked").val();
    var transfusionAfter = 0;
    switch(transfusionAfterRadio){
        case "yes": transfusionAfter = 1;
            break;
    }
    console.log("transfusionAfter" + transfusionAfter);

    var defectsRadio = $("input[name=defectsRadio]:checked").val();
    var defects = 0;
    switch(defectsRadio){
        case "yes": defects = 1;
            break;
    }
    console.log("defects" + defects);

    var asaRadio = $("input[name=asaRadio]:checked").val();
    var asa = 0;
    switch(asaRadio){
        case "yes": asa = 1;
            break;
    }
    console.log("asa" + asa);

    estimatedVeryEarly = -4.71 + -0.168 * age + -0.01852 * bim + 0.696 * smoking + 1.769 * haematocrit + -0.0744 * chemotherapy 
                        + 0.527597 * nutrition + -0.35 * genderMascFem + 0.2263 * resection + -0.474 * transanally + -1.091 * anastomosis 
                        + -0.4868 * stoma + -0.71 * intraoperatively + 0.58271 * transfusion + 0.67 * transfusionAfter + 7.363 * defects;
    console.log("estimatedVeryEarly" + estimatedVeryEarly);
    
    estimatedEarly = -2.510 + -0.533492 * age + -0.0182642 * bim + 0.0378987 * smoking + 1.841 * haematocrit + 0.2954865 * chemotherapy 
                        + -0.4081962 * nutrition + -0.3526616 * genderMascFem + -0.165755 * resection + -0.0850767 * transanally + -1.196 * anastomosis 
                        + -0.1908859 * stoma + -0.5975232 * intraoperatively + 1.025 * transfusion + 1.145 * transfusionAfter + 5.71 * defects;
    console.log("estimatedEarly" + estimatedEarly);
    
    estimatedLate = -5.630 + 0.0969749 * age + 0.0419412 * bim + 0.646548 * smoking + 0.0633365 * haematocrit + 1.224 * chemotherapy 
                        + -0.5865526 * nutrition + -0.427247 * genderMascFem + 0.0407951 * resection + 0.6782347 * transanally + -0.1318812 * anastomosis 
                        + 0.5491184 * stoma + 0.3279558 * intraoperatively + -0.6410121 * transfusion + 1.19 * transfusionAfter + 0.0587286 * defects;
    console.log("estimatedLate" + estimatedLate);

    estimated = 1 + Math.pow(Math.E, estimatedVeryEarly) + Math.pow(Math.E, estimatedEarly) + Math.pow(Math.E, estimatedLate);
    console.log("estimated" + estimated);

    probabilityVeryEarly = 100 * Math.pow(Math.E, estimatedVeryEarly) / estimated;
    probabilityEarly = 100 * Math.pow(Math.E, estimatedEarly) / estimated;
    probabilityLate = 100 * Math.pow(Math.E, estimatedLate) / estimated;
    probabilityNoLeaks = (100 - probabilityVeryEarly - probabilityEarly - probabilityLate);
    //probabilityAnkleFoot = (1 / (1 + Math.pow(Math.E, modelAnkleFoot)))*100; 

    jQuery("#results").html("<strong>Probability of leak</strong>: <br>No leaks " + probabilityNoLeaks.toFixed(2) + "% <br>Very early leak "  + probabilityVeryEarly.toFixed(2) 
        + "% <br>Early leak " + probabilityEarly.toFixed(2) + "% <br>Late Leak " + probabilityLate.toFixed(2) + "% "+ "<br>");

    window.scrollTo(0,document.body.scrollHeight);
}