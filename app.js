$("#calculate").click(function () {
    //Prevent form from submitting and refreshing page
    event.preventDefault();
    
    //Collect weight value
    let weight = Number($('#weightvalue').val());

    //Validation checks
    if (isNaN(weight)) {
        $('#warning').css("display", "block").text('Please enter a valid weight value');
        $('#calculatedWeight').css("display", "none")
        return;
    }
    if (weight < 0) {
        $('#warning').css("display", "block").text('The weight cannot be less than 0');
        $('#calculatedWeight').css("display", "none")
        return;
    }
    if (weight > 392) {
        $('#warning').css("display", "block").text('Please enter a weight less than 392 pounds.');
        $('#calculatedWeight').css("display", "none")
        return;
    }

    //Calculate weight
    $('#warning').css("display", "none")
    let conversionFactor = $('#planet option:selected').val();
    let newWeight = weight * conversionFactor;
    let planet = $('#planet option:selected').text();
    let weightMessage = 'Your weight on ' + planet + ' would be ' + newWeight.toFixed(2) +  ' pounds';
    $('#calculatedWeight').css("display", "block").text(weightMessage);
});