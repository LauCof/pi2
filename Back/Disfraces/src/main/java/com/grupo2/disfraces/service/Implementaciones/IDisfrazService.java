package com.grupo2.disfraces.service.Implementaciones;

import com.grupo2.disfraces.entity.Disfraz;

import java.util.List;

public interface IDisfrazService {


    Disfraz registrarDisfraz (Disfraz disfraz);
    List<Disfraz> listarDisfraces();
    Disfraz buscarDisfrazPorId(Long id);
    Disfraz actualizarDisfraz(Disfraz disfraz);
    void eliminarDisfraz(Long id);
}
