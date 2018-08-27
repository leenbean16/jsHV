// login form tabs
$(".password-two-field").hide();
$(".signup-button").hide();
$(".login-button").show();

const passwordtwo = $(".password-two-field");
const password = $(".password-field");

$(".sign-up-tab").on("click", function() {
    $(".password-two-field").show();
    $(".login-button").hide();
    $(".signup-button").show();
})

$(".log-in-tab").on("click", function() {
    $(".password-two-field").hide();
    $(".signup-button").hide();
    $(".login-button").show();
})