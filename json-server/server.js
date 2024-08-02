import jsonServer from 'json-server';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const PORT = 8000;

server.use(jsonServer.bodyParser);

// Adds a delay
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 700);
  });
  next();
});

server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth Error' });
  }
  next();
});

server.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const data = await fs.readFile(path.join(__dirname, 'db.json'), 'utf-8');
    const db = JSON.parse(data);
    const { users } = db;

    const userFromDb = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromDb) {
      return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'Auth Error' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.use(jsonServer.defaults());
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
