package com.example.backendlol.backend.repository;
import com.example.backendlol.backend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamLeadScheduleRepository extends JpaRepository<TeamLeadSchedule, Long> {
    // Method to find TeamLeadSchedule by team lead's ID
    TeamLeadSchedule findByTeamLeadId(Long teamLeadId);
}