package com.uqai.backend.service;

import com.uqai.backend.dto.AuthResponse;
import com.uqai.backend.dto.LoginRequest;
import com.uqai.backend.dto.RegisterRequest;
import com.uqai.backend.entity.Rol;
import com.uqai.backend.entity.Usuario;
import com.uqai.backend.repository.UsuarioRepository;
import com.uqai.backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {

        if (usuarioRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("El correo ya existe");
        }

        Usuario usuario = Usuario.builder()
                .nombre(request.getNombre())
                .apellidos(request.getApellidos())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .rol(Rol.USER)
                .area(request.getArea())
                .build();

        usuarioRepository.save(usuario);

        String token = jwtService.generarToken(usuario.getEmail());

        return new AuthResponse(token, usuario.getRol().name());
    }

    public AuthResponse login(LoginRequest request) {

        Usuario usuario = usuarioRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                usuario.getPassword()
        )) {
            throw new RuntimeException("Credenciales inválidas");
        }

        String token = jwtService.generarToken(usuario.getEmail());

       return new AuthResponse(token, usuario.getRol().name());
    }
}