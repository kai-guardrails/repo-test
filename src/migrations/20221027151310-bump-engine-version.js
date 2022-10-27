export const up = queryInterface => queryInterface.sequelize.query(` 
 
UPDATE "Engines" SET version='v1.1.1', "updatedAt"=NOW() WHERE name='test';
UPDATE "Engines" SET version='v1.1.2', "updatedAt"=NOW() WHERE name='test_1'; 
 `); 
export const down = queryInterface => queryInterface.sequelize.query(` 
UPDATE "Engines" SET version='v1.0.0', "updatedAt"=NOW() WHERE name='test';
UPDATE "Engines" SET version='v1.1.1', "updatedAt"=NOW() WHERE name='test_1'; 
 `);