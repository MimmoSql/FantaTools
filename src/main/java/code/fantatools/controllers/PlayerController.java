package code.fantatools.controllers;


import code.fantatools.entities.Player;
import code.fantatools.entities.Team;
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

    @GetMapping("/ByTeam")
    public ResponseEntity<List<Player>> getByTeam(@RequestParam Team team){
        return new ResponseEntity<List<Player>>(playerService.showByTeam(team), HttpStatus.OK);
    }

    @GetMapping("/ByLastName")
    public ResponseEntity<List<Player>> getByLastName(@RequestParam String lastName){
        return new ResponseEntity<List<Player>>(playerService.showByLastName(lastName),HttpStatus.OK);
    }

    @PostMapping("/addPlayer")
    public ResponseEntity add(@RequestBody @Valid Player player){
        try {
            playerService.addPlayer(player);
        }catch (PlayerAlreadyExistsException e){
            return new ResponseEntity<>("Player already exist",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Player added successfully",HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody Player player) throws PlayerNotExistsException{
        playerService.deletePlayer(player);
        return new ResponseEntity<>("Player deleted successfully",HttpStatus.OK);
    }

}
