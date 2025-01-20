package br.com.wm.imageliteapi.infra.repository;

import br.com.wm.imageliteapi.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {
}
