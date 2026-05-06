self.addEventListener("install", e => {
  console.log("App instalado");
});

self.addEventListener("fetch", e => {
  // aqui você pode futuramente adicionar cache
});