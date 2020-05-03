import app from './app';
import config from './config';

const { PORT } = config;
console.log(PORT);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));