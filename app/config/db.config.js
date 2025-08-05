module.exports = {
  HOST: "ep-green-cherry-aeaar7od-pooler.c-2.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_RUdcp1F0IyPC",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};