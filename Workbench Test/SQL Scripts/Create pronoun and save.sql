CREATE TABLE pronoun (
    id int NOT NULL AUTO_INCREMENT,
    yo varchar(255) NOT NULL,
    tu varchar(255) NOT NULL,
    el varchar(255) NOT NULL,
    ella varchar(255) NOT NULL,
    eso varchar(255) NOT NULL,
    nostros varchar(255) NOT NULL,
    vosotros varchar(255) NOT NULL,
    ustedes varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO pronoun (yo,tu,el,ella,eso,nostros,vosotros,ustedes,caso) VALUES(
	"mich",
	"dich",
	"ihn",
	"sie",
	"es",
	"uns",
	"euch",
	"Sie_sie",
	"Acusativo"
); 