require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');

const prisma = new PrismaClient();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

const createData = async () => {
  await prisma.job.create({
    data: {
      title: 'Full stack developer',
      company: 'Collo AI',
    },
  });
};

const deleteData = async (id) => {
  await prisma.job.delete({
    where: {
      id: id,
    },
  });
};

async function main() {
  //await createData();
  // await deleteData(2);
  // const result = await pool.query('SELECT * FROM USERS ');
  // console.log('Database time:', result.rows[0]);
  const users = await prisma.users.findMany();
  const jobs = await prisma.job.findMany();

  console.log('prisma - users:', users);
  console.log('jobs:', jobs);
}

main();

