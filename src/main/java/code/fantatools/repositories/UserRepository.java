package code.fantatools.repositories;

import code.fantatools.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsUserByEmailAndAndUsername(String email, String username);
}
