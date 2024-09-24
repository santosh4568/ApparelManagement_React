package com.example.apparelmanagement.Controller;

import com.example.apparelmanagement.Model.Apparel;
import com.example.apparelmanagement.Services.ApparelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/apparel")
public class ApparelController {

    @Autowired
    private ApparelService apparelService;

    @PostMapping
    public ResponseEntity<Apparel> addApparel(@RequestBody Apparel apparel) {
        try {
            Apparel savedApparel = apparelService.saveApparel(apparel);
            return new ResponseEntity<>(savedApparel, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Apparel>> getAllApparels() {
        try {
            List<Apparel> apparels = apparelService.getAllApparel();
            if (apparels.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(apparels, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Apparel> getApparelById(@PathVariable("id") long id) {
        Apparel apparel = apparelService.getApparelById(id);
        if (apparel != null) {
            return new ResponseEntity<>(apparel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Apparel> updateApparel(@PathVariable("id") long id, @RequestBody Apparel apparel) {
        Apparel updatedApparel = apparelService.updateApparel(id, apparel);
        if (updatedApparel != null) {
            return new ResponseEntity<>(updatedApparel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteApparel(@PathVariable("id") long id) {
        try {
            apparelService.deleteApparel(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}