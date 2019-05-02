//Desliza até a primeira parte da calculadora de IMC
function btnClickVamosLa() {
    $(".container").show();
    $("#altura").show();

    $("#altura").slideDown("slow");

    $('html, body').animate({
        scrollTop: $('#altura').offset().top
    }, 1000);
}

function btnContinuar() {
    $("#alertAltura").hide();

    var altura = $("#campoAltura").val();

    if (altura !== "") {
        $("#peso").show();
        $("#peso").slideDown("slow");

        $('html, body').animate({
            scrollTop: $('#peso').offset().top
        }, 1000);
    }
    else {
        $("#alertAltura").show();
    }
}

function btnCalcular() {
    $("#alertPeso").hide();

    var peso = parseFloat($("#campoPeso").val());

    if (peso !== "") {

        var altura = parseFloat($("#campoAltura").val());
        var resultadoImc = parseFloat(peso / (altura * altura));
        var imc = resultadoImc.toFixed(2);
        $(".resultadoImc").text(imc);

        $("#tituloPesoIdeal").hide();
        $("#tituloPesoAviso").hide();
        $("#tituloPesoPerigo").hide();
        $("#textoPesoIdeal").hide();
        $("#textoAbaixoPeso").hide();
        $("#textoSobrepeso").hide();
        $("#textoObesidade").hide();

        if (resultadoImc < 18.5) {
            $("#tituloPesoAviso").show();
            $("#textoAbaixoPeso").show();
            $("#resultado").addClass("imcAviso");
        }
        else if (resultadoImc >= 18.5 && resultadoImc < 24.9) {
            $("#tituloPesoIdeal").show();
            $("#textoPesoIdeal").show();
            $("#resultado").addClass("imcIdeal");
        }
        else if (resultadoImc >= 25 && resultadoImc < 29.9) {
            $("#tituloPesoAviso").show();
            $("#textoSobrepeso").show();
            $("#resultado").addClass("imcAviso");
        }
        else {
            $("#tituloPesoPerigo").show();
            $("#textoObesidade").show();
            $("#resultado").addClass("imcPerigo");
        }

        $("#resultado").show();
        $("#resultado").slideDown("slow");

        $('html, body').animate({
            scrollTop: $('#resultado').offset().top
        }, 1000);
    }
    else {
        $("#alertPeso").show();
    }
}

function calcularDeNovo(){
    window.location.reload();
}