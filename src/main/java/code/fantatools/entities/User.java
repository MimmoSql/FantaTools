package code.fantatools.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "user",schema = "fantaDB")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Basic
    @Column(name = "name", nullable = false)
    private String name;

    @Basic
    @Column(name = "last_name",nullable = true)
    private String lastName;

    @Basic
    @Column(name = "username",nullable = true, unique = true)
    private String username;

    @Basic
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Basic
    @Column(name = "user_team")
    private String userTeam;

    public User(){}

    public User(String name, String lastName, String username, String password, String userTeam) {
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = password;
        this.userTeam = userTeam;
    }

    public User(int id, String name, String lastName, String username, String password, String userTeam) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = password;
        this.userTeam = userTeam;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", username='" + username + '\'' +
                ", password='" + email + '\'' +
                ", userTeam='" + userTeam + '\'' +
                '}';
    }
}