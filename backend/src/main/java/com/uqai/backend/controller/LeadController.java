package com.uqai.backend.controller;

import com.uqai.backend.entity.Lead;
import com.uqai.backend.repository.LeadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/leads")
@RequiredArgsConstructor
public class LeadController {

    private final LeadRepository leadRepository;

    @PostMapping
    public Lead registrarLead(@RequestBody Lead lead) {
        lead.setFechaRegistro(LocalDateTime.now());
        return leadRepository.save(lead);
    }

    @GetMapping
    public List<Lead> listarLeads() {
        return leadRepository.findAll();
    }
}