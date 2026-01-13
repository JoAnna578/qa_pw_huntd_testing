# Oficjalny obraz Playwright z przeglądarkami
FROM mcr.microsoft.com/playwright:v1.41.2-jammy

WORKDIR /app

# Kopiujemy tylko pliki zależności
COPY package.json package-lock.json ./

# Instalacja zależności (wymagane w CI)
RUN npm ci

# Kopiujemy resztę projektu
COPY . .

# Uruchomienie testów
CMD ["npx", "playwright", "test"]

