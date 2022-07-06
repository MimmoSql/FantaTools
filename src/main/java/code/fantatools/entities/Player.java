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
    @Column(name = "last_name", nullable = true)
    private String lastName;

    @Basic
    @Column(name = "number", nullable = true)
    private int number;

    @Basic
    @Column(name = "goals_scored", nullable = false)
    private int goalsScored;

    @Basic
    @Column(name = "assists_made", nullable = false)
    private int assistsMade;

    @Basic
    @Column(name = "role",nullable = true)
    private String role;

    @Basic
    @Column(name = "url_img",nullable = true)
    private String urlImg;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "team")
    private Team team;

    public Player() {
    }

    public Player(String name, String lastName, int number, int goalsScored, int assistsMade, String urlImg, Team team) {
        this.name = name;
        this.lastName = lastName;
        this.number = number;
        this.goalsScored = goalsScored;
        this.assistsMade = assistsMade;
        this.urlImg = urlImg;
        this.team = team;
    }

    public Player(Integer id, String name, String lastName, int number, int goalsScored, int assistsMade, String urlImg, Team team) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.number = number;
        this.goalsScored = goalsScored;
        this.assistsMade = assistsMade;
        this.urlImg = urlImg;
        this.team = team;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", LastName='" + lastName + '\'' +
                ", Number=" + number +
                ", GoalsScored=" + goalsScored +
                ", AssistsMade=" + assistsMade +
                ", urlImg='" + urlImg + '\'' +
                ", team=" + team +
                '}';
    }
}
