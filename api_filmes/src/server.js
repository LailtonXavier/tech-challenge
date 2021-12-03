import app from './app';

const port = 3004;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`Click para abrir http://localhost:${port}`);
  console.log();
});
