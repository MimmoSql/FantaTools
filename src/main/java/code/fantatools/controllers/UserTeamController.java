package code.fantatools.controllers;

import code.fantatools.entities.Player;
import code.fantatools.entities.User;
import code.fantatools.entities.UserTeam;
import code.fantatools.repositories.PlayerRepository;
import code.fantatools.repositories.UserRepository;
import code.fantatools.repositories.UserTeamRepository;
import code.fantatools.services.UserTeamService;
import code.fantatools.support.exceptions.TeamAlreadyExsistsException;
import code.fantatools.support.exceptions.TeamNotExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userTeam")
public class UserTeamController {

    private final UserTeamService userTeamService;

    private final UserTeamRepository userTeamRepository;

    private final UserRepository userRepository;
    private final PlayerRepository playerRepository;

    @Autowired
    public UserTeamController(UserTeamService userTeamService, UserTeamRepository userTeamRepository, UserRepository userRepository, PlayerRepository playerRepository) {
        this.userTeamService = userTeamService;
        this.userTeamRepository = userTeamRepository;
        this.userRepository = userRepository;
        this.playerRepository = playerRepository;
    }

    @GetMapping("/showPLayer")
    public List<String> showPlayer(@RequestParam String username){
        return userTeamService.showPlayer(username);
    }

    @PostMapping("/create")
    public ResponseEntity create(@RequestParam User user, Player player){
        try {
            UserTeam t = new UserTeam(user,player);
            userTeamService.addUserTeam(t);
        }catch (TeamAlreadyExsistsException e){

            return new ResponseEntity<>("Team already exist",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Team added successfully",HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity delete(@RequestParam int user, int player)throws TeamNotExistsException{
        User u = userRepository.findById(user);
        Player p = playerRepository.findById(player);
        try {
            UserTeam t = userTeamRepository.findUserTeamByUserAndPlayer(u,p);
            userTeamService.remove(t);
        }catch (TeamNotExistsException e){

            return new ResponseEntity<>("Team not exist",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Team removed successfully",HttpStatus.OK);
    }
}
