package code.fantatools.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "team", schema = "fantaDB")
public class Team {

    @Id
    @Column(name = "name", nullable = false)
    private String name;

    @Basic
    @Column(name = "foundation_year",nullable = true)
    private Date foundationYear;

    @Basic
    @Column(name = "url_img",nullable = true)
    private String urlImg;

    public Team() {
    }

    public Team(String name) {
        this.name = name;
    }

    public Team(Date foundationYear, String urlImg) {
        this.foundationYear = foundationYear;
        this.urlImg = urlImg;
    }

    public Team(String name, Date foundationYear, String urlImg) {
        this.name = name;
        this.foundationYear = foundationYear;
        this.urlImg = urlImg;

    }

    @Override
    public String toString() {
        return "Team{" +
                "name='" + name + '\'' +
                ", FoundationYear=" + foundationYear +
                ", urlImg='" + urlImg + '\'' +
                '}';
    }

}
