INSERT INTO department (name) VALUES
("Cook"),
("Engineer"),
("Dishwasher"),
("Manager")

INSERT INTO roles (title, salary, department_id) VALUES
("Lead Cook", 10000, 1),
("Lead Engineer", 100, 2),
("Dishwasher", 100000, 3),
("Restaurant Manager", 10, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Cody", "Nguyen", 1),
("Jericho", "Pham", 2, NULL),
("Johnathan", "Ho", 3, NULL),
("Kevin", "Huynh", 4)