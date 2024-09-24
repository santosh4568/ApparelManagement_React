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
    private String category;
    private String status; // Updated field name

    public Apparel(Long id, String name, String category, String status) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.status = status; // Updated field name
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStatus() {
        return status; // Updated field name
    }

    public void setStatus(String status) {
        this.status = status; // Updated field name
    }
}