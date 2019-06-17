$("#calculate").click(function () {
    event.preventDefault();
    let weight = $('#weightvalue').val();
    let conversionFactor = $('#planet option:selected').val();
    let newWeight = weight * conversionFactor;
    let planet = $('#planet option:selected').text();
    let weightMessage = 'Your weight on ' + planet + ' would be ' + newWeight.toFixed(2) +  ' pounds';
    $('#calculatedWeight').css("display", "block").text(weightMessage);
});