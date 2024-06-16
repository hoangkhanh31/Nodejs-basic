CREATE TABLE Users (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email varchar(255),
	name varchar(255),
	city varchar(255)
);

INSERT INTO Users ('email', 'name', 'city')
VALUES ('hoangkhanhdragon@gmail.com', 'Hoang Khanh', 'hcm');

INSERT INTO Users (email, name, city)
VALUES ('test@gmail.com', 'test', 'hcm');