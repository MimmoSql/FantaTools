package code.fantatools.services;

import code.fantatools.entities.User;
import code.fantatools.repositories.UserRepository;
import code.fantatools.support.exceptions.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = false)
    public void add(User user) throws UserAlreadyExistsException{
        if(!userRepository.existsUserByEmailAndAndUsername(user.getEmail(), user.getUsername()))
            userRepository.save(user);
        else
            throw new UserAlreadyExistsException();
    }

    @Transactional(readOnly = true)
    public User getUser(String email){
        return userRepository.findByEmail(email);
    }

    @Transactional(readOnly = false)
    public User setNameTeam(String email,String name){
        User u = userRepository.findByEmail(email);
        u.setUserTeam(name);
        userRepository.saveAndFlush(u);
        return u;
    }

}
