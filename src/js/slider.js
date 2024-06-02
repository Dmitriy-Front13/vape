var div = document.querySelector(".s1");
var bar1 = document.querySelector(".bar1");
var bar2 = document.querySelector(".bar2");
var bar3 = document.querySelector(".bar3");
var bar4 = document.querySelector(".bar4");
var left = document.getElementById("l1");
var right = document.getElementById("ra");
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");
var r4 = document.getElementById("r4");

function updateStyles() {
    if(r1.checked) {
        div.style.marginLeft = "0";
        bar1.style.backgroundColor = "white";
        bar1.style.opacity = "0.8";
        bar1.style.transform = "scale(1.1)";
        bar2.style.backgroundColor = "";
        bar2.style.opacity = "";
        bar2.style.transform = "";
        bar4.style.backgroundColor = "";
        bar4.style.opacity = "";
        bar4.style.transform = "";
        bar3.style.backgroundColor = "";
        bar3.style.opacity = "";
        bar3.style.transform = "";
    }
}

r1.addEventListener("change", updateStyles);

window.onload = updateStyles;


r2.addEventListener("change", function() {
    if(r2.checked) {
        div.style.marginLeft = "-548px";
        bar2.style.backgroundColor = "white";
        bar2.style.opacity = "0.8";
        bar2.style.transform = "scale(1.1)";
        bar3.style.backgroundColor = "";
        bar3.style.opacity = "";
        bar3.style.transform = "";
        bar4.style.backgroundColor = "";
        bar4.style.opacity = "";
        bar4.style.transform = "";
        bar1.style.backgroundColor = "";
        bar1.style.opacity = "";
        bar1.style.transform = "";
    }
});

r3.addEventListener("change", function() {
    if(r3.checked) {
        div.style.marginLeft = "-1096px";
        bar3.style.backgroundColor = "white";
        bar3.style.opacity = "0.8";
        bar3.style.transform = "scale(1.1)";
        bar2.style.backgroundColor = "";
        bar2.style.opacity = "";
        bar2.style.transform = "";
        bar4.style.backgroundColor = "";
        bar4.style.opacity = "";
        bar4.style.transform = "";
        bar1.style.backgroundColor = "";
        bar1.style.opacity = "";
        bar1.style.transform = "";
    }
});

r4.addEventListener("change", function() {
    if(r4.checked) {
        div.style.marginLeft = "-1644px";
        bar4.style.backgroundColor = "white";
        bar4.style.opacity = "0.8";
        bar4.style.transform = "scale(1.1)";
        bar3.style.backgroundColor = "";
        bar3.style.opacity = "";
        bar3.style.transform = "";
        bar2.style.backgroundColor = "";
        bar2.style.opacity = "";
        bar2.style.transform = "";
        bar1.style.backgroundColor = "";
        bar1.style.opacity = "";
        bar1.style.transform = "";
    }
});

right.addEventListener("click", function() {
    var style = window.getComputedStyle(div);
    var marginLeft = style.getPropertyValue('margin-left');
    if(marginLeft === "0px") {
        div.style.marginLeft = "-548px";
        r2.checked = true;
        r2.dispatchEvent(new Event('change'));
    } else if (marginLeft === "-548px") {
        div.style.marginLeft = "-1096px";
        r3.checked = true;
        r3.dispatchEvent(new Event('change'));
    } else if (marginLeft === "-1096px") {
        div.style.marginLeft = "-1644px";
        r4.checked = true;
        r4.dispatchEvent(new Event('change'));
    } else if (marginLeft === "-1644px") {
        div.style.marginLeft = "0px";
        r1.checked = true;
        r1.dispatchEvent(new Event('change'));
    } 
});

left.addEventListener("click", function() {
    var style = window.getComputedStyle(div);
    var marginLeft = style.getPropertyValue('margin-left');
    if(marginLeft === "-548px") {
        div.style.marginLeft = "0px";
        r1.checked = true;
        r1.dispatchEvent(new Event('change'));
    } else if (marginLeft === "-1096px") {
        div.style.marginLeft = "-548px";
        r2.checked = true;
        r2.dispatchEvent(new Event('change'));
    } else if (marginLeft === "-1644px") {
        div.style.marginLeft = "-1096px";
        r3.checked = true;
        r3.dispatchEvent(new Event('change'));
    } else if (marginLeft === "0px") {
        div.style.marginLeft = "-1644px";
        r4.checked = true;
        r4.dispatchEvent(new Event('change'));
    } 
});




