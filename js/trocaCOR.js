function trocaCor(color){
    var cor = document.getElementById("body_color");
    cor.setAttribute("diffuseColor", color);
}
function trocaFaixa(corF){
    var corj = document.getElementById("faixas");
    corj.setAttribute("diffuseColor", corF);
}
function trocaMaçaneta(corM){
    var corj = document.getElementById("maçaneta");
    corj.setAttribute("diffuseColor", corM);
}
function trocaRoda(rodaEscolha){
    var roda = document.getElementById("rodas");
    roda.setAttribute("url", rodaEscolha);
}
