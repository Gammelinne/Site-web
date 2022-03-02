<?php

    if (isset($_POST["ville"]) && isset($_POST["email"]) && isset($_POST["nom"]) && isset($_POST["add1"]))
    {
        $emailTo = "kylian.renault@viacesi.fr";
        $emailSubject = "Nouvelle demande de contact";
        $email = $_POST["email"];
        $message = $_POST["nom"]. $_POST["prenom"]. "demande à vous contacter. \n Il vit à ". $_POST["ville"]. "\n Merci de répondre au mail suivant". $_POST["email"];
        $errorMessage = "";
        $emailDetails = "Détails de la demande ci-dessous.\n\n";

        function cleanString($string)
        {
            $bad = array("content-type", "bcc:", "to:", "cc:", "href");
            return str_replace($bad, "", $string);
        }

        $emailMessage .= "Adresse mail: " . cleanString($email) . "\n";
        $emailMessage .= "Message:\n" . cleanString($message);
        $headers =  "From: " . $email . "\r\n" .
                    "Reply-To: " . $email . "\r\n" .
                    "X-Mailer: PHP/" . phpversion();
        @mail($emailTo, $emailSubject, $emailMessage, $headers);
    } 
    header('Location: ' . $_SERVER['HTTP_REFERER']);
?>