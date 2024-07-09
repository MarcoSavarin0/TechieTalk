# 🧑‍💻 TechiTalk 🚀
### Que es?
Este proyecto es un bot de WhatsApp desarrollado utilizando la librería @bot-whatsapp/bot. El bot responde inicialmente a un saludo y luego captura y procesa todos los mensajes posteriores utilizando una API de IA personalizada.

###  Requisitos  
- Node.js
- npm o yarn
- docker (opcional)
- Cuenta en [Replicate](https://replicate.com/) y obtener la api key

## Instalación
1 - Clona el repositorio
 ```bash
  git clone https://github.com/MarcoSavarin0/TechieTalk
  cd TechieTalk
 ```
2 - Instala las dependencias
 ```bash
  npm install
 ```
o

 ```bash
  yarn install
 ```
## Ejecucion
1 - Inicia el bot
#### en tu maquina
   ```bash
  npm start
 ```
o
  ```bash
  yarn start
 ```
#### con docker
  ```bash
  docker build -t wsp-bot .
 ```
  ```bash
  docker run -d docker run -e PORT=3001 -p 3001:3001 wsp-bot
 ```

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier mejora o corrección.