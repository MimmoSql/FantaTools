package code.fantatools.repositories;

import code.fantatools.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team,String> {

    List<Team> findAll();
    List<Team> findByName(String name);
    boolean existsByName(String name);
}
