package code.fantatools.repositories;

import code.fantatools.entities.Player;
import code.fantatools.entities.User;
import code.fantatools.entities.UserTeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTeamRepository extends JpaRepository<UserTeam,Integer> {

    UserTeam findByUser(User user);

    UserTeam findByPlayer(Player player);

    UserTeam findUserTeamByUserAndPlayer(User user,Player player);

    boolean existsByUserAndPlayer(User user, Player player);



    @Query(value = "SELECT  p.name " +
            "FROM Player as p, UserTeam as us, User as u " +
            "WHERE us.player.id = p.id and us.user.id = u.id and u.username = :username")
    List<String> findPlayer(@Param("username")String username);
}
