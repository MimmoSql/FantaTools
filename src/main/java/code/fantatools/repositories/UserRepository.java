package code.fantatools.repositories;

import code.fantatools.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsernameAndPassword(String username, String password);

    List<User> findAll();

    boolean existsByUsername(String username);

}