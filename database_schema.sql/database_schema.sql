-- CLIENT Table
CREATE TABLE CLIENT (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    status VARCHAR(50) DEFAULT 'active'
);

-- APPOINTMENT Table
CREATE TABLE APPOINTMENT (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    service_type VARCHAR(100) NOT NULL,
    appointment_date DATE NOT NULL,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    FOREIGN KEY (client_id) REFERENCES CLIENT(id)
);

-- CASE Table
CREATE TABLE CASE (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    title VARCHAR(200) NOT NULL,
    status VARCHAR(50) DEFAULT 'open',
    assigned_to VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES CLIENT(id)
);

-- DOCUMENT Table
CREATE TABLE DOCUMENT (
    id INT PRIMARY KEY AUTO_INCREMENT,
    case_id INT,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (case_id) REFERENCES CASE(id)
);