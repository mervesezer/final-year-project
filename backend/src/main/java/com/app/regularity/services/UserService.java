package com.app.regularity.services;

import com.app.regularity.entities.User;
import com.app.regularity.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService implements BaseService<User>{
    private final UserRepository userRepository;
    public List<User> findAll() {
        return userRepository.findAll();
    }

    public void saveOrUpdate(User user){
        userRepository.save(user);
    }

    public User findOne(UUID id) {
        return userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                String.format("%s id li kullanıcı bulunamadı", id)));
    }
    public void delete (UUID id){
        var user =findOne(id);
        userRepository.delete(user);
    }

}
