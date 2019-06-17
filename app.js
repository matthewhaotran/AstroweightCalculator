$("#calculate").click(function () {
    //Prevent form from submitting and refreshing page
    event.preventDefault();
    
    //Collect weight value
    let weight = $('#weightvalue').val();

    //Validation checks
    if (typeof weight === 'string') {
        $('#warning').css("display", "block").text('Please enter a valid weight value');
        return;
    }
    if (weight < 0) {
        $('#warning').css("display", "block").text('The weight cannot be less than 0');
        return;
    }
    if (weight > 392) {
        $('#warning').css("display", "block").text('Please enter a weight less than 392 pounds.');
        return;
    }

    //Calculate weight
    let conversionFactor = $('#planet option:selected').val();
    let newWeight = weight * conversionFactor;
    let planet = $('#planet option:selected').text();
    let weightMessage = 'Your weight on ' + planet + ' would be ' + newWeight.toFixed(2) +  ' pounds';
    $('#calculatedWeight').css("display", "block").text(weightMessage);
});