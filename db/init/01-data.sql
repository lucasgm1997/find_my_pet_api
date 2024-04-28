\c find_my_pet;

-- -- Inserção de três linhas na tabela 'users'
INSERT INTO users (name, email, phone_number) VALUES
    ('Alice', 'alice@example.com', '1234567890'),
    ('Bob', 'bob@example.com', '0987654321'),
    ('Charlie', 'charlie@example.com', '1231231234');

INSERT INTO lost_pets (latitude, longitude, name, breed, age, user_id, status) 
VALUES 
    (37.7749, -122.4194, 'Max', 'Golden Retriever', 3, 1, 'Lost'),
    (40.7128, -74.0060, 'Bella', 'Siamese', 2, 2, 'Lost');

INSERT INTO found_pets (latitude, longitude, name, breed, age, user_id, status) 
VALUES 
    (37.7749, -122.4194, 'Luna', 'Labrador', 4, 3, 'Found'),
    (40.7128, -74.0060, 'Charlie', 'German Shepherd', 1, 1, 'Found');
