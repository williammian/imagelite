package br.com.wm.imageliteapi.domain.service;

import br.com.wm.imageliteapi.domain.AccessToken;
import br.com.wm.imageliteapi.domain.entity.User;

public interface UserService {
    User getByEmail(String email);
    User save(User user);
    AccessToken authenticate(String email, String password);
}
