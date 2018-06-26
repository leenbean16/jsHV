/* Home Venues
 * Front-End
 * Database
 * ==================== */
let listingData = [];
let listingInputValues = [];


$("#submit-button").on("click", function() {
    let amenityCheck = $("input[type='checkbox']").val();
    let address = $("#address").val();
    let addresstwo = $("#address-two").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let zip = $("#zip").val();
    let bar = $("#bar").val();
    let bathroom = $("#bathroom").val();
    let catering = $("#catering").val();
    let changingroom = $("#changingroom").val();
    let dancefloor = $("#dancefloor").val();
    let decor = $("#decor").val();
    let entertainment = $("#entertainment").val();
    let firepit = $("#firepit").val();
    let florist = $("#florist").val();
    let hospitality = $("#hospitality").val();
    let kitchen = $("#kitchen").val();
    let masterofceremony = $("#masterofceremony").val();
    let dj = $("#dj").val();
    let liveband = $("#liveband").val();
    let parking = $("#parking").val();
    let photobooth = $("#photobooth").val();
    let photographer = $("#photographer").val();
    let pool = $("#pool").val();
    let tablesandchairs = $("#tablesandchairs").val();
    // looping through amenities response 
    // address, addresstwo, city, state, zip, bar, bathroom, catering, changingroom, dancefloor, decor, entertainment, firepit, florist, hospitality kitchen, masterofceremony, dj, liveband, parking, photobooth, photographer, pool, tablesandchairs
    console.log(address + " " + addresstwo + " " + city + " " + state + " " + zip + " " + bar + " " + bathroom + " " + catering + " " + changingroom + " " + dancefloor + " " + decor + " " + entertainment + " " + firepit + " " + florist + " " + hospitality + " " + kitchen + " " + masterofceremony + " " + dj + " " + liveband + " " + parking + " " + photobooth + " " + photographer + " " + pool + " " + tablesandchairs);
})
