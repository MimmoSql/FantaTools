package code.fantatools.services;


import code.fantatools.entities.Team;
import code.fantatools.repositories.TeamRepository;
import code.fantatools.support.exceptions.TeamAlreadyExsistsException;
import code.fantatools.support.exceptions.TeamNotExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository){
        this.teamRepository = teamRepository;
    }

    @Transactional(readOnly = false)
    public void addTeam(Team team)throws TeamAlreadyExsistsException {
        if(teamRepository.existsByName(team.getName())){
            throw new TeamAlreadyExsistsException();
        }
        teamRepository.save(team);
    }

    @Transactional(readOnly = true)
    public List<Team> showAll(){
        return teamRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Team showByName(String name){
        return teamRepository.findByName(name);
    }

    @Transactional
    public void deleteTeam(Team team) throws TeamNotExistsException {
        if(!teamRepository.existsByName(team.getName())) {
            throw new TeamNotExistsException();
        }
        teamRepository.delete(team);
    }

}
