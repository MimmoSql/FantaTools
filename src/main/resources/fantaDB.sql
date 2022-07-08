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
    FOREIGN KEY (team) REFERENCES team (name)
);

