package code.fantatools.repositories;

import code.fantatools.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsUserByEmailAndAndUsername(String email, String username);

    User findByEmail(String email);
}
