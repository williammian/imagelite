package br.com.wm.imageliteapi.domain.service;

import br.com.wm.imageliteapi.domain.entity.Image;
import br.com.wm.imageliteapi.domain.enums.ImageExtension;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);

    List<Image> search(ImageExtension extension, String query);
}
