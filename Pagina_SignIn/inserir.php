<?php
    include("../Mystery-Food/conecta.php");
    $email = $_POST["email"];
    $telefone =  $_POST ["telefone"];
    $cpf = $_POST["cpf"];
    $senha = $_POST["senha"];

    $comando = $pdo->prepare("INSERT INTO user(gmail_user, telefone_user, cpf_user, senha_user) VALUES('$email', '$telefone', '$cpf', '$senha')");
    $resultado = $comando->execute();

    // Para voltar no formulário:
    header("Location: cadastro.html");
?> 