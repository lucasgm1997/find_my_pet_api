-- Criação do banco de dados 'find_my_pet' com proprietário postgres
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'find_my_pet') THEN
        CREATE DATABASE find_my_pet WITH OWNER admin;
    END IF;
END $$;

-- Criação da tabela 'users'
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

-- -- Inserção de três linhas na tabela 'users'
INSERT IGNORE INTO users (name, email, phone_number) VALUES
    ('Alice', 'alice@example.com', '1234567890'),
    ('Bob', 'bob@example.com', '0987654321'),
    ('Charlie', 'charlie@example.com', '1231231234');

-- create table lost_pets if not exists
-- columns: id auto increment, latitude, longitude, name?, breed?, age?
-- user_id references users(id), status
CREATE TABLE IF NOT EXISTS lost_pets (
    id SERIAL PRIMARY KEY,
    latitude DECIMAL(9, 6),
    longitude DECIMAL(9, 6),
    name VARCHAR(100),
    breed VARCHAR(100),
    age INTEGER,
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(100)
);

-- create table if not exists found_pets
-- columns: id auto increment, latitude, longitude, name?, breed?, age?
-- user_id references users(id), status
CREATE TABLE IF NOT EXISTS found_pets (
    id SERIAL PRIMARY KEY,
    latitude DECIMAL(9, 6),
    longitude DECIMAL(9, 6),
    name VARCHAR(100),
    breed VARCHAR(100),
    age INTEGER,
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(100)
);

-- -- create table if not exists pet_matches
-- -- columns: id auto increment, lost_pet_id references lost_pets(id), found_pet_id references found_pets(id)
CREATE TABLE IF NOT EXISTS pet_matches (
    id SERIAL PRIMARY KEY,
    lost_pet_id INTEGER REFERENCES lost_pets(id),
    found_pet_id INTEGER REFERENCES found_pets(id)
);


INSERT IGNORE INTO lost_pets (latitude, longitude, name, breed, age, user_id, status) 
VALUES 
    (37.7749, -122.4194, 'Max', 'Golden Retriever', 3, 1, 'Lost'),
    (40.7128, -74.0060, 'Bella', 'Siamese', 2, 2, 'Lost');

INSERT IGNORE INTO found_pets (latitude, longitude, name, breed, age, user_id, status) 
VALUES 
    (37.7749, -122.4194, 'Luna', 'Labrador', 4, 3, 'Found'),
    (40.7128, -74.0060, 'Charlie', 'German Shepherd', 1, 1, 'Found');


-- Adiciona índices
CREATE INDEX idx_lost_pets_user_id ON lost_pets(user_id);
CREATE INDEX idx_found_pets_user_id ON found_pets(user_id);