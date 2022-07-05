package code.fantatools.services;


import code.fantatools.entities.Player;
import code.fantatools.entities.Team;
import code.fantatools.repositories.PlayerRepository;
import code.fantatools.support.exceptions.PlayerAlreadyExistsException;
import code.fantatools.support.exceptions.PlayerNotExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }

    @Transactional(readOnly = false)
    public Player addPlayer(Player player) throws PlayerAlreadyExistsException {
        if(playerRepository.existsByNameAndAndLastName(player.getName(), player.getLastName())){
            throw new PlayerAlreadyExistsException();
        }
        return playerRepository.save(player);
    }

    @Transactional(readOnly = true)
    public List<Player> showByTeam(Team team){
        return playerRepository.findByTeam(team);
    }

    @Transactional(readOnly = true)
    public List<Player> showByLastName(String lastName){
        return  playerRepository.findByLastName(lastName);
    }

    @Transactional
    public void deletePlayer(Player player) throws PlayerNotExistsException{
        if(!playerRepository.existsByNameAndAndLastName(player.getName(),player.getLastName())){
            throw new PlayerNotExistsException();
        }
        playerRepository.delete(player);
    }

}
