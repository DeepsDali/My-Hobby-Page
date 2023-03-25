let datetime = new Date();

document.getElementById("date").innerHTML = datetime.toLocaleDateString();
document.getElementById("time").innerHTML = datetime.toLocaleTimeString();
