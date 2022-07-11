package code.fantatools.entities;

import lombok.Data;

import javax.persistence.*;
@Data
@Entity
@Table(name = "user_team",schema = "fantaDB")
public class UserTeam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id")
    private int id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "player_id")
    private Player player;

    public UserTeam() {
    }

    public UserTeam(User user, Player player) {
        this.user = user;
        this.player = player;
    }

    public UserTeam(int id, User user, Player player) {
        this.id = id;
        this.user = user;
        this.player = player;
    }

    @Override
    public String toString() {
        return "UserTeam{" +
                "id=" + id +
                ", user=" + user +
                ", player=" + player +
                '}';
    }
}
