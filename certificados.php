<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Certificados</title>
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

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            margin: 10px 0;
        }

        a {
            display: block;
            margin-top: 5px;
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
        <h1>Meus Certificados</h1>
        <ul>
            <?php if (!empty($certificados)): ?>
                <?php foreach ($certificados as $certificado): ?>
                    <li>
                        <strong><?php echo htmlspecialchars($certificado['nome_certificado']); ?></strong><br>
                        <a href="<?php echo htmlspecialchars($certificado['arquivo_certificado']); ?>" target="_blank">Visualizar PDF</a>
                        <a href="<?php echo htmlspecialchars($certificado['arquivo_certificado']); ?>" download="<?php echo htmlspecialchars($certificado['nome_certificado']); ?>">Baixar PDF</a>
                    </li>
                <?php endforeach; ?>
            <?php else: ?>
                <li>Nenhum certificado disponível.</li>
            <?php endif; ?>
        </ul>
        <a class="logout" href="index_plataforma.html">Sair</a>
    </div>
</body>

</html>