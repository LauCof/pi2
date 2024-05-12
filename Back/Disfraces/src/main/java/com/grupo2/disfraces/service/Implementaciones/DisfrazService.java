package com.grupo2.disfraces.service.Implementaciones;

import com.grupo2.disfraces.Repository.DisfrazRepository;
import com.grupo2.disfraces.entity.Disfraz;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class DisfrazService implements IDisfrazService {


    @Autowired
    private DisfrazRepository disfrazRepository;

    private static final Logger logger = LoggerFactory.getLogger(DisfrazService.class);


    public List<Disfraz> obtenerDisfracesAleatorios(int cantidad) {
        List<Disfraz> todosLosDisfraces = disfrazRepository.findAll();
        Random random = new Random();
        Collections.shuffle(todosLosDisfraces, random); //para mezclar la lista de disfraces.
        return todosLosDisfraces.subList(0, Math.min(cantidad, todosLosDisfraces.size()));
    }


    //public Optional<Disfraz> obtenerDisfrazPorId(Long id) {
        //return disfrazRepository.findById(id);
    //}

    @Override
    public Disfraz registrarDisfraz(Disfraz disfraz) {
        Disfraz disfrazNuevo = disfrazRepository.save(disfraz);
        //Anunciamos que se registro el disfraz correctamente
        logger.info("Se registro correctamente el disfraz ✅ {}", disfrazNuevo);
        return disfrazNuevo;
    }

    @Override
    public List<Disfraz> listarDisfraces() {
        return null;
    }

    @Override
    public Disfraz buscarDisfrazPorId(Long id) {
        return null;
    }

    @Override
    public Disfraz actualizarDisfraz(Disfraz disfraz) {
        return null;
    }

    @Override
    public void eliminarDisfraz(Long id) {

    }
}
