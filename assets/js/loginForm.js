// login form tabs
$(".password-two-field").hide();

const passwordtwo = $(".password-two-field");
const password = $(".password-field");

$(".sign-up-tab").on("click", function() {
    $(".password-two-field").show();
})

$(".log-in-tab").on("click", function() {
    $(".password-two-field").hide();
})


// $(".login-button").on("click", () => {
//         if (password === null) {
//             console.log("field is required.")
//         }
// })