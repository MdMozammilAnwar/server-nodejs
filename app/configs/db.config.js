// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "tohfa",
//     DB: "nodejs-crud-app",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };
module.exports = {
  HOST: "ec2-34-200-205-45.compute-1.amazonaws.com",
  USER: "pdtqlvrzvauqgz",
  PASSWORD: "a035b9603b0caad0a95bd8eb10902e409952b9acaa3071c74fda47ed6f63e454",
  DB: "dbo0lptbrar49o",
  dialect: "postgres",
  PORT:5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};