package code.fantatools.services;

import code.fantatools.entities.Team;
import code.fantatools.entities.User;
import code.fantatools.repositories.UserRepository;

import code.fantatools.support.exceptions.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User login(String username, String password){
        return repo.findByUsernameAndPassword(username, password);
    }

    public List<User> showAll(){return repo.findAll();}

    public boolean existsByName(String name){return repo.existsByUsername(name);}

    @Transactional(readOnly = false)
    public void addUser(User user)throws UserAlreadyExistsException {
        if(repo.existsByUsername(user.getUsername())){
            throw new UserAlreadyExistsException();
        }
        repo.save(user);
    }
}