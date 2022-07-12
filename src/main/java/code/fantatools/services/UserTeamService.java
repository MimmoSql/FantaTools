package code.fantatools.services;

import code.fantatools.entities.Player;
import code.fantatools.entities.User;
import code.fantatools.entities.UserTeam;
import code.fantatools.repositories.UserTeamRepository;
import code.fantatools.support.exceptions.TeamAlreadyExsistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserTeamService {

    private final UserTeamRepository userTeamRepository;

    @Autowired
    public UserTeamService(UserTeamRepository userTeamRepository) {
        this.userTeamRepository = userTeamRepository;
    }

    @Transactional(readOnly = true)
    public UserTeam showBYUser(User user){ return userTeamRepository.findByUser(user);}

    @Transactional(readOnly = true)
    public UserTeam showBYPlayer(Player player){ return userTeamRepository.findByPlayer(player);}

    @Transactional(readOnly = true)
    public List<String> showPlayer(String username){
        return userTeamRepository.findPlayer(username);
    }

    @Transactional(readOnly = false)
    public void addUserTeam(UserTeam userTeam) throws TeamAlreadyExsistsException {
        userTeamRepository.save(userTeam);
    }


}
