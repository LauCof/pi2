package com.grupo2.disfraces.controller;

import com.grupo2.disfraces.entity.Disfraz;
import com.grupo2.disfraces.service.DisfrazService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/disfraces")
public class DisfrazController {
    //asociamos disfraz con el service:
    @Autowired
    private DisfrazService disfrazService = new DisfrazService();

    @PostMapping("/registrar")
    public Disfraz agregarDisfraz(@RequestBody Disfraz disfraz) {
        return disfrazService.guardarDisfraz(disfraz);

    }
    @GetMapping("/listar")
    public ResponseEntity<List<Disfraz>> obtenerDisfracesAleatorios() {
        List<Disfraz> disfracesAleatorios = disfrazService.obtenerDisfracesAleatorios(10);
        return ResponseEntity.ok(disfracesAleatorios);
    }
    @GetMapping("{id}")
    public ResponseEntity<Optional<Disfraz>> obtenerDetalleDisfraz(@PathVariable Long id) {
        Optional<Disfraz> disfrazBuscado = disfrazService.obtenerDisfrazPorId(id);
        if (disfrazBuscado.isPresent()) {
            return ResponseEntity.ok(disfrazBuscado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
