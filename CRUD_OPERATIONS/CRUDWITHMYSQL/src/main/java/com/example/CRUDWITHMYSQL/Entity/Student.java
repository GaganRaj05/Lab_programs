package com.example.CRUDWITHMYSQL.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;
    private String studentName;
    private String address;
}
