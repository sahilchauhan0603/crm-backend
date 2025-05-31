const db = require('../config/db');

const createTables = async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        phone VARCHAR(15),
        total_spent DECIMAL(10,2),
        visits INT,
        last_active DATE
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        amount DECIMAL(10,2),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (customer_id) REFERENCES customers(id)
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS segments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        rules JSON,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS campaigns (
        id INT AUTO_INCREMENT PRIMARY KEY,
        segment_id INT,
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (segment_id) REFERENCES segments(id)
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS communication_log (
        id INT AUTO_INCREMENT PRIMARY KEY,
        campaign_id INT,
        customer_id INT,
        status ENUM('SENT', 'FAILED'),
        sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (campaign_id) REFERENCES campaigns(id),
        FOREIGN KEY (customer_id) REFERENCES customers(id)
      );
    `);

    console.log('✅ All tables created successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating tables:', err);
    process.exit(1);
  }
};

createTables();