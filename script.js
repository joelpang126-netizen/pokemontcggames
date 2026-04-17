function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}

function getCookie(name) {
    const match = document.cookie.split("; ").find(function (row) {
        return row.startsWith(name + "=");
    });
    return match ? decodeURIComponent(match.split("=")[1]) : null;
}

$(document).ready(function () {

    let trainerName = getCookie("trainerName");

    if (!trainerName) {
        trainerName = prompt("👋 Welcome, Trainer! What is your name?") || "Trainer";
        setCookie("trainerName", trainerName, 7);
    }

    $("#navTrainerName").text("👤 " + trainerName);

});localStorage.setItem("lastSearched", pokeName);
$("#lastSearchedMsg").text("🕐 Last searched: " + pokeName);

const lastSearched = localStorage.getItem("lastSearched");
if (lastSearched) {
    $("#lastSearchedMsg").text("🕐 Last searched: " + lastSearched);
    $("#searchInput").val(lastSearched.toLowerCase());
    searchPokemon();
}