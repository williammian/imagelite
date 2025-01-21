package br.com.wm.imageliteapi.infra.repository;

import br.com.wm.imageliteapi.domain.entity.Image;
import br.com.wm.imageliteapi.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

import static br.com.wm.imageliteapi.infra.repository.specs.GenericSpecs.conjunction;
import static br.com.wm.imageliteapi.infra.repository.specs.ImageSpecs.*;
import static org.springframework.data.jpa.domain.Specification.anyOf;
import static org.springframework.data.jpa.domain.Specification.where;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query){
        //SELECT * FROM IMAGE WHERE 1 = 1
        Specification<Image> spec = where(conjunction());

        if(extension != null){
            // AND EXTENSION = 'PNG'
            spec = spec.and(extensionEqual(extension));
        }

        if(StringUtils.hasText(query)){
            // AND ( NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY' )
            spec = spec.and(anyOf(nameLike(query), tagsLike(query)));
        }

        return findAll(spec);
    }

}
