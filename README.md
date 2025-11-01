# 🚀 PERN Stack Server

<div align="center">
  <img src="https://via.placeholder.com/150" alt="Denis Davila" width="150" height="150" style="border-radius: 50%;">
  
  ### Denis Yampol Davila Huamán
  **Full Stack Developer | PERN Stack Specialist**
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/davila)
  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:denis.dh.web@gmail.com)
  [![Phone](https://img.shields.io/badge/Phone-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+51928570081)
</div>

---

Servidor backend construido con **PostgreSQL, Express, React y Node.js** (PERN Stack). Este repositorio contiene la API REST y la lógica del servidor para aplicaciones full-stack escalables y de alto rendimiento.

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
- [Sobre Mí](#sobre-mí)
- [Contratación](#contratación)

## ✨ Características

- ✅ API RESTful completa y documentada
- ✅ Autenticación y autorización segura
- ✅ Validación de datos con TypeScript/Zod
- ✅ Manejo de errores centralizado y robusto
- ✅ Queries SQL optimizadas con índices
- ✅ Arquitectura escalable y mantenible
- ✅ CI/CD implementado para despliegue automatizado
- ✅ Performance optimizado (80% reducción en tiempos de despliegue)

## 🛠️ Tecnologías

### Backend
- **Node.js** - Entorno de ejecución
- **Express** - Framework web minimalista
- **PostgreSQL** - Base de datos relacional
- **TypeScript** - Tipado estático y type-safe

### Herramientas
- **pg** - Cliente PostgreSQL para Node.js
- **dotenv** - Gestión de variables de entorno
- **cors** - Manejo de CORS
- **nodemon** - Desarrollo con recarga automática
- **Zod** - Validación de schemas

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (v16 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn
- Git

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

4. Ejecuta las migraciones:
```bash
npm run migrate
```

## ⚙️ Configuración

1. Crea un archivo `.env` en la raíz del proyecto:
```env
PORT=5000
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_datos
NODE_ENV=development
JWT_SECRET=tu_secreto_jwt
```

2. Configura las variables según tu entorno de desarrollo/producción.

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

### Testing
```bash
npm test
```

## 📁 Estructura del Proyecto

```
server/
├── src/
│   ├── config/          # Configuración de BD y variables
│   ├── controllers/     # Controladores de rutas
│   ├── routes/          # Definición de endpoints
│   ├── models/          # Modelos de datos
│   ├── middleware/      # Middlewares personalizados
│   ├── utils/           # Utilidades y helpers
│   ├── validators/      # Validaciones con Zod
│   └── types/           # Tipos TypeScript
├── tests/               # Tests unitarios e integración
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── server.ts
```

## 🔌 API Endpoints

### Ejemplo de Endpoints Disponibles

```http
# Recursos
GET    /api/resources          # Obtener todos los recursos
GET    /api/resources/:id      # Obtener recurso específico
POST   /api/resources          # Crear nuevo recurso
PUT    /api/resources/:id      # Actualizar recurso
DELETE /api/resources/:id      # Eliminar recurso

# Autenticación
POST   /api/auth/register      # Registro de usuario
POST   /api/auth/login         # Inicio de sesión
GET    /api/auth/profile       # Perfil del usuario
```

## 📜 Scripts Disponibles

- `npm start` - Inicia el servidor en producción
- `npm run dev` - Inicia el servidor en modo desarrollo
- `npm run build` - Compila TypeScript a JavaScript
- `npm test` - Ejecuta las pruebas
- `npm run migrate` - Ejecuta migraciones de BD

## 👨‍💻 Sobre Mí

Soy **Denis Davila**, desarrollador Full Stack con más de **2 años de experiencia** especializado en el stack PERN. Mi enfoque está en crear aplicaciones web escalables, eficientes y de alto rendimiento.

### 🎯 Logros Destacados

- 🚀 **40% de mejora** en la entrega de productos como Lead FrontEnd en CKDE E.I.R.L
- ⚡ **25% de mejora** en rendimiento web mediante optimización
- 🔧 **80% de reducción** en tiempos de despliegue con CI/CD
- 🤖 **60% de reducción** en tiempo de tareas repetitivas mediante automatización
- 💯 **95% de satisfacción** del cliente con entregas puntuales

### 💼 Stack Técnico

```javascript
const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Zustand', 'React Query'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs'],
  tools: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Chrome DevTools'],
  methodologies: ['Scrum', 'Kanban', 'Agile']
};
```

### 🎓 Educación

- 📚 **React y TypeScript - La Guía Completa** (Udemy, 60% completado)
- 🎓 **Profesional Técnico en Desarrollo de Sistemas** (ISA Santa Angela)

## 💼 Contratación

### ¡Estoy disponible para nuevos proyectos!

Como desarrollador Full Stack con experiencia comprobada, estoy abierto a oportunidades **freelance o tiempo completo**. Puedo ayudarte con:

- ✨ Desarrollo de aplicaciones web completas (MERN/PERN Stack)
- 🔌 Creación de APIs RESTful robustas y escalables
- 🗄️ Diseño e implementación de bases de datos PostgreSQL
- ⚡ Optimización de rendimiento web y consultas SQL
- 🚀 Implementación de CI/CD y automatización de procesos
- 🎨 Desarrollo frontend con React, TypeScript y Next.js
- 🔧 Resolución de problemas técnicos complejos
- 📱 Diseño responsive y mobile-first

### 🌟 ¿Por qué trabajar conmigo?

- ✅ Experiencia liderando equipos de desarrollo
- ✅ Enfoque en código limpio y buenas prácticas
- ✅ Comunicación efectiva y entregas puntuales
- ✅ Metodologías ágiles (Scrum/Kanban)
- ✅ Autoaprendizaje continuo y adaptación tecnológica
- ✅ Pasión por resolver desafíos técnicos complejos

### 📬 Contacto

<div align="center">

| Canal | Información |
|-------|-------------|
| 📧 **Email** | [denis.dh.web@gmail.com](mailto:denis.dh.web@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/davila](https://linkedin.com/in/davila) |
| 📱 **WhatsApp** | [+51 9** *** **1](https://wa.me/519******1) |
| 📍 **Ubicación** | Piura, Perú 🇵🇪 |

</div>

**💬 ¿Tienes un proyecto en mente?** No dudes en contactarme. Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad.

**🤝 ¿Buscas un desarrollador comprometido?** Conversemos sobre cómo mi experiencia puede aportar valor a tu equipo.

---

<div align="center">

### 💻 Tecnologías con las que trabajo

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

⭐ **Si te gusta este proyecto, no olvides darle una estrella!**

📫 **¿Interesado en trabajar conmigo?** Envíame un mensaje y hablemos sobre tu próximo proyecto.

</div>

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <sub>Desarrollado con ❤️ por Denis Davila | Piura, Perú 🇵🇪</sub>
</div>
