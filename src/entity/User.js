const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
  name: 'User',
  tableName: 'TORM_USER',
  columns: {
    CD_USER: {
      primary: true,
      type: 'number',
      generated: true
    },
    NM_USER: {
      type: 'nvarchar2'
    }
  }
})