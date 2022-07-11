DROP SCHEMA  fantaDB;
CREATE SCHEMA fantaDB;
USE fantaDB;

CREATE TABLE team(
    name varchar(50) PRIMARY KEY,
    foundation_year DATE,
    url_img VARCHAR(255)
);


CREATE TABLE player (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    role VARCHAR(255),
    goals_scored INTEGER,
    assists_made INTEGER,
    presence INTEGER,
    yellow INTEGER,
    red INTEGER,
    team VARCHAR(255),
    user_team VARCHAR(255),
    FOREIGN KEY (team) REFERENCES team (name),
    foreign key (user_team) REFERENCES user_team (name)
);

CREATE TABLE user(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    user_team VARCHAR(255)
);

CREATE TABLE user_team(
    team_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER,
    player_id INTEGER,
    foreign key (user_id) REFERENCES user(id),
    foreign key (player_id) references player(id)
);