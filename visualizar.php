<?php
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION['nome'])) {
    header("Location: index2.html");
    exit;
}

?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acesso ao PDF</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: whitesmoke;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
            text-align: center;
        }

        h1 {
            margin-bottom: 10px;
            color: #333;
        }

        .pdf-container {
            margin-top: 20px;
        }

        .pdf-container iframe {
            width: 100%;
            height: 400px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        a {
            display: block;
            margin-top: 10px;
            color: #4CAF50;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: black;
        }

        .logout {
            margin-top: 20px;
            background-color: #007BFF;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .logout:hover {
            background-color: #4CAF50;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Acesso Concedido</h1>
        <p>Bem-vindo, <?php echo $_SESSION['nome']; ?>!</p>
        <div class="pdf-container">
            <iframe src="Certificado_code_x_gerusa.pdf" frameborder="0"></iframe>
        </div>
        <a href="Certificado_code_x_gerusa.pdf" target="_blank">Visualizar PDF em nova aba</a>
        <a href="Certificado_code_x_gerusa.pdf" download="Certificado_code_x_gerusa">Baixar PDF</a>
        <form action="logout.php" method="post">
            <a class="logout" href="index_plataforma.html">Sair</a>
        </form>
    </div>
</body>

</html>