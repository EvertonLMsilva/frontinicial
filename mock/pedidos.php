<?php
//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);
//echo json_encode($request);
//exit;
$dados = [];
$search = (isset($_GET['search'])) ? $_GET['search'] : "";

if(!empty($search)){
    for($i = 0; $i < 3; $i++){
        $dados[] = [
            'id' => $i + 1,
            'codigoReserva' => rand(0, 999999),
            'cliente' => 'Maria rui',
            'cpfcnpj' => '999.999.999-99'
        ];
    }
} else {
    for($i = 0; $i < 10; $i++){
        $dados[] = [
            'id' => $i + 1,
            'codigoReserva' => rand(0, 999999),
            'cliente' => 'Maria rui',
            'cpfcnpj' => '999.999.999-99'
        ];
    }
}


echo json_encode($dados);