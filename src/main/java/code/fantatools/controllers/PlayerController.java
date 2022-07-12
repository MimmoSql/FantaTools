package code.fantatools.controllers;


import code.fantatools.entities.Player;
import code.fantatools.entities.Team;
import code.fantatools.entities.UserTeam;
import code.fantatools.repositories.PlayerRepository;
import code.fantatools.services.PlayerService;
import code.fantatools.support.exceptions.PlayerAlreadyExistsException;
import code.fantatools.support.exceptions.PlayerNotExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/player")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }

    @GetMapping("/byTeam")
    public ResponseEntity<List<Player>> getByTeam(@RequestParam String team){
        return new ResponseEntity<List<Player>>(playerService.showByTeam(new Team(team)), HttpStatus.OK);
    }

    @GetMapping("/byLastName")
    public ResponseEntity<Player> getByName(@RequestParam String name){
        return new ResponseEntity<Player>(playerService.showByName(name),HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity add(@RequestBody @Valid Player player){
        try {
            playerService.addPlayer(player);
        }catch (PlayerAlreadyExistsException e){
            return new ResponseEntity<>("Player already exist",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Player added successfully",HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity delete(@RequestBody @Valid Player player) throws PlayerNotExistsException{
        playerService.deletePlayer(player);
        return new ResponseEntity<>("Player deleted successfully",HttpStatus.OK);
    }

}
