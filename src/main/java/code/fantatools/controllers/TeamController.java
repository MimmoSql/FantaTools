package code.fantatools.controllers;

import code.fantatools.entities.Team;
import code.fantatools.services.TeamService;
import code.fantatools.support.exceptions.TeamAlreadyExsistsException;
import code.fantatools.support.exceptions.TeamNotExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/team")
public class TeamController {

    private final TeamService teamService;

    @Autowired
    public  TeamController (TeamService teamService){
        this.teamService = teamService;
    }

    @GetMapping("/allTeam")
    public List<Team> getAll(){
        return teamService.showAll();
    }

    @GetMapping("/byName")
    public Team getByName(@RequestParam String name){
        return teamService.showByName(name);
    }

    @PostMapping("/addTeam")
    public ResponseEntity add(@RequestBody @Valid Team team){
        try {
            teamService.addTeam(team);
        }catch (TeamAlreadyExsistsException e){
            return new ResponseEntity<>("Team already exist",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Team added successfully",HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity delete(@RequestBody Team team) throws TeamNotExistsException {
        teamService.deleteTeam(team);
        return new ResponseEntity<>("Team deleted successfully",HttpStatus.OK);
    }

}
