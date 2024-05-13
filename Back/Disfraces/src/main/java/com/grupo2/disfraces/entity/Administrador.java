package com.grupo2.disfraces.entity;


import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Administrador {

    private Long id;
    private String nombre;
    private String Apellido;
    private String dni ; //numero de identificacion


    public Administrador() {
    }
}
