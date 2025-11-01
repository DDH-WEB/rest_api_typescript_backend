# 🚀 PERN Stack Server

Servidor backend construido con PostgreSQL, Express, React y Node.js (PERN Stack). Este repositorio contiene la API REST y la lógica del servidor para mi aplicación full-stack.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Scripts Disponibles](#scripts-disponibles)
- [Contratación](#contratación)

## ✨ Características

- ✅ API RESTful completa
- ✅ Autenticación y autorización
- ✅ Validación de datos
- ✅ Manejo de errores centralizado
- ✅ Conexión con PostgreSQL
- ✅ Variables de entorno para configuración
- ✅ Arquitectura escalable y mantenible

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **PostgreSQL** - Base de datos relacional
- **pg** - Cliente de PostgreSQL para Node.js
- **dotenv** - Gestión de variables de entorno
- **cors** - Manejo de CORS
- **nodemon** - Desarrollo con recarga automática

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (v14 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/tu-proyecto-server.git
cd tu-proyecto-server
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea la base de datos en PostgreSQL:
```bash
createdb nombre_base_datos
```

## ⚙️ Configuración

1. Crea un archivo `.env` en la raíz del proyecto:
```env
PORT=5000
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_datos
NODE_ENV=development
```

2. Ejecuta las migraciones o scripts SQL necesarios para crear las tablas.

## 🚀 Uso

### Modo Desarrollo
```bash
npm run dev
```

### Modo Producción
```bash
npm start
```

El servidor estará disponible en `http://localhost:5000`

## 📁 Estructura del Proyecto

```
server/
├── src/
│   ├── config/          # Configuración de la base de datos
│   ├── controllers/     # Controladores de rutas
│   ├── routes/          # Definición de rutas
│   ├── models/          # Modelos de datos
│   ├── middleware/      # Middlewares personalizados
│   └── utils/           # Utilidades y helpers
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## 🔌 API Endpoints

### Ejemplo de Endpoints

```
GET    /api/resources          # Obtener todos los recursos
GET    /api/resources/:id      # Obtener un recurso específico
POST   /api/resources          # Crear nuevo recurso
PUT    /api/resources/:id      # Actualizar recurso
DELETE /api/resources/:id      # Eliminar recurso
```

## 📜 Scripts Disponibles

- `npm start` - Inicia el servidor en producción
- `npm run dev` - Inicia el servidor en modo desarrollo con nodemon
- `npm test` - Ejecuta las pruebas

## 💼 Contratación

### ¡Estoy disponible para nuevos proyectos!

Soy un desarrollador full-stack especializado en PERN Stack y estoy abierto a oportunidades freelance o tiempo completo. Si estás buscando alguien para:

- Desarrollar aplicaciones web completas
- Crear APIs RESTful robustas y escalables
- Trabajar con bases de datos PostgreSQL
- Implementar soluciones backend eficientes
- Colaborar en proyectos con tecnologías modernas

### 📬 Contacto

- **Email**: tu-email@ejemplo.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- **Portfolio**: [tu-portfolio.com](https://tu-portfolio.com)
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)

No dudes en contactarme para discutir tu proyecto. ¡Estoy emocionado por colaborar en nuevos desafíos!

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!

**¿Interesado en trabajar conmigo?** Envíame un mensaje y conversemos sobre cómo puedo ayudarte con tu próximo proyecto.
