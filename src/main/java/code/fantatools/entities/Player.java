package code.fantatools.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "player", schema = "fantaDB")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Basic
    @Column(name = "name", nullable = false)
    private String name;

    @Basic
    @Column(name = "role",nullable = true)
    private String role;

    @Basic
    @Column(name = "goals_scored", nullable = false)
    private int goalsScored;

    @Basic
    @Column(name = "assists_made", nullable = false)
    private int assistsMade;

    @Basic
    @Column(name = "presence",nullable = true)
    private int presence;

    @Basic
    @Column(name = "yellow", nullable = false)
    private int yellow;

    @Basic
    @Column(name = "red", nullable = false)
    private int red;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "team")
    private Team team;

    @ManyToOne
    @JoinColumn(name = "fanta_team")
    private Player players;


    public Player() {
    }

    public Player(String name, String role, int goalsScored, int assistsMade, int presence, int yellow, int red, Team team) {
        this.name = name;
        this.role = role;
        this.goalsScored = goalsScored;
        this.assistsMade = assistsMade;
        this.presence = presence;
        this.yellow = yellow;
        this.red = red;
        this.team = team;
    }

    public Player(Integer id, String name, String role, int goalsScored, int assistsMade, int presence, int yellow, int red, Team team) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.goalsScored = goalsScored;
        this.assistsMade = assistsMade;
        this.presence = presence;
        this.yellow = yellow;
        this.red = red;
        this.team = team;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", role='" + role + '\'' +
                ", goalsScored=" + goalsScored +
                ", assistsMade=" + assistsMade +
                ", presence=" + presence +
                ", yellow=" + yellow +
                ", red=" + red +
                ", team=" + team +
                '}';
    }
}
