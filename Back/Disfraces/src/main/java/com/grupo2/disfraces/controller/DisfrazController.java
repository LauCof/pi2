package com.grupo2.disfraces.controller;

import com.grupo2.disfraces.entity.Disfraz;
import com.grupo2.disfraces.service.Implementaciones.DisfrazService;
import com.grupo2.disfraces.service.Implementaciones.IDisfrazService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/disfraces")
public class DisfrazController {
    //Instanciamos un DisfrazService con el service

    private IDisfrazService disfrazService;
    @Autowired

    public DisfrazController(IDisfrazService disfrazService) {
        this.disfrazService = disfrazService;
    }

    // acanos faltaria el @Valid cuando creemos los DTOs, donde vamos a tener la respectivas validaciones para cambo. ✅
    @PostMapping("/registrar")
    public ResponseEntity<Disfraz> agregarDisfraz(@RequestBody Disfraz disfraz) {
        return new ResponseEntity<>(disfrazService.registrarDisfraz(disfraz), HttpStatus.CREATED);

    }

    /**@GetMapping("/listar")
    public ResponseEntity<List<Disfraz>> obtenerDisfracesAleatorios() {
        List<Disfraz> disfracesAleatorios = disfrazService.obtenerDisfracesAleatorios(10);
        return ResponseEntity.ok(disfracesAleatorios);
    }
     **/

    /**
    @GetMapping("{id}")
    public ResponseEntity<Optional<Disfraz>> obtenerDetalleDisfraz(@PathVariable Long id) {
        Optional<Disfraz> disfrazBuscado = disfrazService.obtenerDisfrazPorId(id);
        if (disfrazBuscado.isPresent()) {
            return ResponseEntity.ok(disfrazBuscado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    **/
}
