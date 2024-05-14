package com.grupo2.disfraces.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "disfraces")
public class Disfraz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "fecha")
    private LocalDate fecha;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
    @Column(name = "precio")
    private double precio;
    @Column(name = "imagen")
    private String imagen;


    @Override
    public String toString() {
        return "Disfraz{" +
                "\n id=" + id +
                ",\n fecha=" + fecha +
                ",\n nombre='" + nombre + '\'' +
                ",\n descripcion='" + descripcion + '\'' +
                ",\n precio=" + precio +
                ",\n imagen='" + imagen + '\'' +
                "\n}";
    }

}
