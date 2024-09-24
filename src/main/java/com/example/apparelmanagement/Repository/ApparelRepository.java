package com.example.apparelmanagement.Repository;

import com.example.apparelmanagement.Model.Apparel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApparelRepository extends JpaRepository<Apparel, Long> {
    List<Apparel> findByNameContainingOrCategoryContaining(String name, String category);
}
