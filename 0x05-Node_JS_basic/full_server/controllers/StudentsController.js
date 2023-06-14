import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const messages = [];
    res.status(200);
    messages.push('This is the list of our students');
    try {
      const data = await readDatabase(process.argv[2]);
      const keys = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      keys.forEach((key) => {
        messages.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
      });
      res.end(messages.join('\n'));
    } catch (err) {
      res.status(500).end('Cannot load the database');
    }
  }

  static async getAllStudentByMajor(req, res) {
    res.status(200);
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).end('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(process.argv[2]);
      res.write(`List: ${data[major].join(', ')}`);
      res.end();
    } catch (err) {
      res.status(500).end('Cannot load the database');
    }
  }
}

export default StudentsController;
