CREATE DATABASE todo_database;

--\c info todos database

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);