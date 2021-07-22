const args = process.argv.splice(2);
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
})

pool.connect().then(() => {
  console.log('connected');
})
.catch(err => {
  console.log(err)
});

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests on teachers.id = teacher_id
JOIN students on students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name = '${args[0]}'
ORDER BY teachers.name;`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`)
  })
})
.catch(err => console.error('query error', err.stack));