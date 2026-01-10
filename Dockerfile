# Używamy oficjalnego obrazu Playwright z preinstalowanymi przeglądarkami
FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /app

# Kopiujemy cały projekt do kontenera
COPY . .

# Instalacja zależności Node.js
RUN npm install

# Instalacja przeglądarek
RUN npx playwright install --with-deps

# Domyślna komenda do uruchomienia testów
CMD ["npx", "playwright", "test"]
