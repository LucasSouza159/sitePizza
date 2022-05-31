function gotowhatsapp() {
            
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var festa = document.getElementById("festa").value;
    var pacote = document.getElementById("pacote").value;
    

    var url = "https://wa.me/+5511985307427?text=" 
    + "Nome: " + nome + "%0a"
    + "Telefone: " + telefone + "%0a"
    + "Email: " + email  + "%0a"
    + "Tipo de festa: " + festa + "%0a"
    + "Pacote: " + pacote; 

    window.open(url, '_blank').focus();
}