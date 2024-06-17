Aplikacija koristi Node-React-Mongo sa typescriptom. Koristio sam mongodb atlas za kreiranje baze, kredencijali za MONGO_URI se nalaze u .env fajlu na backendu. React aplikaciju sam kreirao koristeci Vite, tako da je defaultni port 5173 i za taj port sam konfigurisao cors podesavanje:

app.use(cors({ origin: 'http://localhost:5173', }));

Pokretanje aplikacije:

unutar backend projekta komandom: npm run dev - pokrece backend app na portu 4004
unutar frontend projekta komandom npm run dev - pokrece se React aplikacija
