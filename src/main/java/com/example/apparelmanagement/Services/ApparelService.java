package com.example.apparelmanagement.Services;

import com.example.apparelmanagement.Model.Apparel;
import com.example.apparelmanagement.Repository.ApparelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApparelService {
    @Autowired
    private ApparelRepository apparelRepository;

    public List<Apparel> getAllApparel() {
        return apparelRepository.findAll();
    }

    public Apparel saveApparel(Apparel apparel) {
        return apparelRepository.save(apparel);
    }

    public List<Apparel> searchApparels(String keyword) {
        return apparelRepository.findByNameContainingOrCategoryContaining(keyword, keyword);
    }

    public Apparel getApparelById(long id) {
        return apparelRepository.findById(id).orElse(null);
    }

    public Apparel updateApparel(long id, Apparel apparel) {
        Apparel existingApparel = apparelRepository.findById(id).orElse(null);
        if (existingApparel != null) {
            existingApparel.setName(apparel.getName());
            existingApparel.setCategory(apparel.getCategory());
            existingApparel.setStatus(apparel.getStatus()); // Updated field name
            return apparelRepository.save(existingApparel);
        }
        return null;
    }

    public void deleteApparel(long id) {
        apparelRepository.deleteById(id);
    }
}