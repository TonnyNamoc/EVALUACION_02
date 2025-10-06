import 'dotenv/config';
import { init } from "./app.js";

const port = process.env.PORT || 3000;

init().then(app => {
    app.listen(port, () => console.log(`🚀 Servidor en http://localhost:${port}`));
}).catch(err => {
    console.error("❌ Error al iniciar:", err);
    process.exit(1);
});
