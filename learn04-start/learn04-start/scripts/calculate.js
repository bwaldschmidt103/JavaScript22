function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";

    // Hide all rooms at starting point
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";

}

function showRooms() {
    let numberOfRooms = document.getElementById("rooms").value;
    document.getElementById("room1").style.display = (numberOfRooms >= 1) ? "block" : "none";
    document.getElementById("room2").style.display = (numberOfRooms >= 2) ? "block" : "none";
    document.getElementById("room3").style.display = (numberOfRooms >= 3) ? "block" : "none";

}

function estimate() {
    let name = document.getElementById("name").value;

    let length1 = parseFloat(document.getElementById("rm1length").value) || 0;
    let width1 = parseFloat(document.getElementById("rm1width").value) || 0;
    let height1 = parseFloat(document.getElementById("rm1height").value) || 0;
    let totalSqFt1 = ((length1 * height1 * 2) + (length1 * width1 * 2));
    let cost1 = (totalSqFt1 * .65);
    document.getElementById("rm1cost").value = cost1;

    let length2 = parseFloat(document.getElementById("rm2length").value) || 0;
    let width2 = parseFloat(document.getElementById("rm2width").value) || 0;
    let height2 = parseFloat(document.getElementById("rm2height").value) || 0;
    let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
    let cost2 = (totalSqFt2 * .65);
    document.getElementById("rm2cost").value = cost2;

    let length3 = parseFloat(document.getElementById("rm3length").value) || 0;
    let width3 = parseFloat(document.getElementById("rm3width").value) || 0;
    let height3 = parseFloat(document.getElementById("rm3height").value) || 0;
    let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
    let cost3 = (totalSqFt3 * .65);
    document.getElementById("rm3cost").value = cost3;

    let totalCost = cost1 + cost2 + cost3;
    document.getElementById("estimate").innerHTML = name + ", your estimate is: $" + totalCost.toFixed(2);
}

// Adding event listener to the rooms dropdown
document.getElementById("rooms").addEventListener("change", showRooms);

// Calling addDate on page load
window.onload = addDate;