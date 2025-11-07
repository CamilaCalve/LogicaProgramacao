<?php
    //Percorrer Array
    $nomes = ["Caio", "Marcos", "Diego"];

    foreach ($nomes as $nome) {
        echo $nome . "<br>";
    }

    //Percorrer Array
    $notasAtividades = [
        "Caio" => 10, 
        "Marcos" => 8, 
        "Diego" => 9
    ];

    $notasProvas = [
        "Caio" => 9, 
        "Marcos" => 8, 
        "Diego" => 10
    ];

    foreach ($notasAtividades as $nome => $nota) {
        $prova = $notasProvas[$nome];

        echo $nome . "nota" . $nota . "<br>";
        echo $nome . "nota" . $prova . "<br>";
    }

?>