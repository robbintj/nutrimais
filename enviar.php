<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recebe e limpa os dados
    $nome = htmlspecialchars(trim($_POST["nome"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $telefone = htmlspecialchars(trim($_POST["telefone"] ?? ''));
    $servico = htmlspecialchars(trim($_POST["servico"] ?? ''));
    $mensagem = htmlspecialchars(trim($_POST["mensagem"] ?? ''));

    $to = "contato@nutrimaisclinica.com"; // coloque seu e-mail real
    $subject = "Nova solicitação de consulta - Nutri+";

    $body = "
    <html>
      <body>
        <h3>Nova solicitação de consulta</h3>
        <p><strong>Nome:</strong> $nome</p>
        <p><strong>E-mail:</strong> $email</p>
        <p><strong>Telefone:</strong> $telefone</p>
        <p><strong>Serviço desejado:</strong> $servico</p>
        <p><strong>Mensagem:</strong><br>$mensagem</p>
      </body>
    </html>";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: Nutri+ <no-reply@nutrimaisclinica.com>\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "🎉 Obrigado, $nome! Recebemos sua solicitação para o serviço: $servico."]);
    } else {
        echo json_encode(["status" => "error", "message" => "⚠️ Erro ao enviar. Tente novamente."]);
    }
}


// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     $nome = htmlspecialchars(trim($_POST["nome"]));
//     $email = htmlspecialchars(trim($_POST["email"]));
//     $telefone = htmlspecialchars(trim($_POST["telefone"]));
//     $servico = htmlspecialchars(trim($_POST["servico"]));
//     $mensagem = htmlspecialchars(trim($_POST["mensagem"]));

//     $to = "contato@nutrimaisclinica.com"; // ou robbintj@hotmail.com
//     $subject = "Nova solicitação de consulta - Nutri+";
    
//     $body = "
//     <html>
//       <body>
//         <h3>Nova solicitação de consulta</h3>
//         <p><strong>Nome:</strong> $nome</p>
//         <p><strong>E-mail:</strong> $email</p>
//         <p><strong>Telefone:</strong> $telefone</p>
//         <p><strong>Serviço desejado:</strong> $servico</p>
//         <p><strong>Mensagem:</strong><br>$mensagem</p>
//       </body>
//     </html>";

//     $headers  = "MIME-Version: 1.0" . "\r\n";
//     $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
//     $headers .= "From: $nome <$email>" . "\r\n";

//     if (mail($to, $subject, $body, $headers)) {
//         echo json_encode(["status" => "success", "message" => "Mensagem enviada com sucesso!"]);
//     } else {
//         echo json_encode(["status" => "error", "message" => "Erro ao enviar. Tente novamente."]);
//     }
// }
?>
