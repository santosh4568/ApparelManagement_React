package com.example.apparelmanagement.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "apparel")
public class Apparel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String Apparelcondition;
    private String category;

    public Apparel(Long id, String name, String condition, String category) {
        this.id = id;
        this.name = name;
        this.Apparelcondition = condition;
        this.category = category;
    }

    public Apparel() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCondition() {
        return Apparelcondition;
    }

    public void setCondition(String condition) {
        this.Apparelcondition = condition;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    // Getters and Setters
}
