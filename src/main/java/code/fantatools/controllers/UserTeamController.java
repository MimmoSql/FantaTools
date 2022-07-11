package code.fantatools.controllers;

import code.fantatools.entities.Player;
import code.fantatools.entities.UserTeam;
import code.fantatools.services.UserTeamService;
import code.fantatools.support.exceptions.TeamAlreadyExsistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/userTeam")
public class UserTeamController {

    private final UserTeamService userTeamService;

    @Autowired
    public UserTeamController(UserTeamService userTeamService) {
        this.userTeamService = userTeamService;
    }

    @GetMapping("/showPLayer")
    public List<Player> showPlayer(String username){
        return userTeamService.showPlayer(username);
    }

    @PostMapping("/create")
    public ResponseEntity create(@RequestBody @Valid UserTeam userTeam){
        try {
            userTeamService.addUserTeam(userTeam);
        }catch (TeamAlreadyExsistsException e){

            return new ResponseEntity<>("Team already exist",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Team added successfully",HttpStatus.OK);
    }

}
