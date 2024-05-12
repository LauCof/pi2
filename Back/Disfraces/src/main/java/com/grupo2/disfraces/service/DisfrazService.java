package com.grupo2.disfraces.service;

import com.grupo2.disfraces.Repository.DisfrazRepository;
import com.grupo2.disfraces.entity.Disfraz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class DisfrazService {
    @Autowired
    private DisfrazRepository disfrazRepository;

    public Disfraz guardarDisfraz(Disfraz disfraz) {
        return disfrazRepository.save(disfraz);
    }

    public List<Disfraz> obtenerDisfracesAleatorios(int cantidad) {
        List<Disfraz> todosLosDisfraces = disfrazRepository.findAll();
        Random random = new Random();
        Collections.shuffle(todosLosDisfraces, random); //para mezclar la lista de disfraces.
        return todosLosDisfraces.subList(0, Math.min(cantidad, todosLosDisfraces.size()));
    }

    public Optional<Disfraz> obtenerDisfrazPorId(Long id) {
        return disfrazRepository.findById(id);
    }
}
