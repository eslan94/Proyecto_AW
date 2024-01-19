<?php
    include 'conexion.php';

    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $email=$_POST['email'];
    $celular=$_POST['celular'];
    $direccion=$_POST['direccion'];

    $consulta="INSERT into cliente(nombre, apellido, email, celular, direccion) values('$nombre', '$apellido', '$email', '$celular', '$direccion')";

    $resultado=mysqli_query($conexion, $consulta);

    if($resultado){
        echo "Registro exitoso";
    }else{
        echo "Error de registro";
    }
    
?>