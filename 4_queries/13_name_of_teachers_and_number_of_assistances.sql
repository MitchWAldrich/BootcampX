SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort, count(assistance_requests.id) AS total_assistances
FROM teachers
JOIN assistance_requests on teachers.id = teacher_id
JOIN students on students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teachers.name;