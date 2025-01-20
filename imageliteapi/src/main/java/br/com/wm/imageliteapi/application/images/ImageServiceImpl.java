package br.com.wm.imageliteapi.application.images;

import br.com.wm.imageliteapi.domain.entity.Image;
import br.com.wm.imageliteapi.domain.service.ImageService;
import br.com.wm.imageliteapi.infra.repository.ImageRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository repository;

    @Override
    @Transactional
    public Image save(Image image) {
        return repository.save(image);
    }

    @Override
    public Optional<Image> getById(String id) {
        return repository.findById(id);
    }
}
