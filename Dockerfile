# Usar una imagen base con Node.js
FROM mcr.microsoft.com/playwright:v1.40.0-focal

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Instalar los navegadores de Playwright
RUN npx playwright install

# Comando por defecto para ejecutar las pruebas
CMD ["npm", "run", "test:screenplay"]