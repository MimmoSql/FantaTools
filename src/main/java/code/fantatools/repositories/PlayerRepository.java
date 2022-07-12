package code.fantatools.repositories;

import code.fantatools.entities.Player;
import code.fantatools.entities.Team;
import code.fantatools.entities.UserTeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

    Player findByName(String name);

    List<Player> findByTeam(Team team);

    Player findById(int id);

    boolean existsByName(String name);

}