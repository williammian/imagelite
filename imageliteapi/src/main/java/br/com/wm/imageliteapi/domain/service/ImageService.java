package br.com.wm.imageliteapi.domain.service;

import br.com.wm.imageliteapi.domain.entity.Image;

import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);
}
