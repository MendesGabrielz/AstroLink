function mudarCor(cor) {
    const img = document.getElementById("fogueteImagem");

    switch (cor) {
        case "red":
            img.style.filter = "brightness(0) saturate(100%) invert(23%) sepia(92%) saturate(4364%) hue-rotate(350deg) brightness(93%) contrast(103%)";
            break;

        case "blue":
            img.style.filter = "brightness(0) saturate(100%) invert(37%) sepia(96%) saturate(2100%) hue-rotate(185deg) brightness(90%) contrast(101%)";
            break;

        case "green":
            img.style.filter = "brightness(0) saturate(100%) invert(62%) sepia(78%) saturate(551%) hue-rotate(66deg) brightness(94%) contrast(92%)";
            break;

        case "yellow":
            img.style.filter = "brightness(0) saturate(100%) invert(84%) sepia(72%) saturate(2200%) hue-rotate(5deg) brightness(105%) contrast(102%)";
            break;

        case "orange":
            img.style.filter = "brightness(0) saturate(100%) invert(57%) sepia(100%) saturate(4000%) hue-rotate(10deg) brightness(95%) contrast(102%)";
            break;

        case "pink":
            img.style.filter = "brightness(0) saturate(100%) invert(21%) sepia(48%) saturate(3000%) hue-rotate(290deg) brightness(95%) contrast(102%)";
            break;

        case "purple":
            img.style.filter = "brightness(0) saturate(100%) invert(27%) sepia(64%) saturate(2000%) hue-rotate(250deg) brightness(95%) contrast(102%)";
            break;

        case "brown":
            img.style.filter = "brightness(0.6) sepia(1) saturate(500%) hue-rotate(10deg)";
            break;

        case "aqua":
            img.style.filter = "brightness(0) saturate(100%) invert(64%) sepia(100%) saturate(2000%) hue-rotate(170deg) brightness(95%) contrast(102%)";
            break;
    }
}

function modelo1() {
    document.getElementById("fogueteImagem").src = "../img/154997.svg";
}

function modelo2() {
    document.getElementById("fogueteImagem").src = "../img/2026703.svg";
}

function modelo3() {
    document.getElementById("fogueteImagem").src = "../img/2831368.svg";
}
