# Repository Viewer - React Native

Este es un proyecto de React Native que implementa una lista de repositorios revisados usando componentes reutilizables y temas.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Main.jsx           # Componente principal
│   ├── RepositoryList.jsx # Lista de repositorios con FlatList
│   ├── RepositoryItem.jsx # Elemento individual de la lista
│   ├── Text.jsx           # Componente Text personalizado con tema
│   └── index.js           # Exports de componentes
├── theme.js               # Configuración del tema
App.js                      # Punto de entrada de la aplicación
```

## Componentes Implementados

### RepositoryList
- Usa `FlatList` para mostrar una lista de repositorios
- Define un separador entre elementos
- Renderiza `RepositoryItem` para cada repositorio

### RepositoryItem
- Muestra la información del repositorio (nombre, descripción, lenguaje)
- Displays estadísticas: estrellas, forks, calificación, reseñas
- Incluye avatar del propietario

### Text
- Componente personalizado que aplica el tema consistente
- Soporta variantes: color, fontSize, fontWeight
- Utiliza propiedades del tema (colores, tamaños, fuentes)

### Main
- Componente principal que renderiza la lista de repositorios

## Instalación

```bash
npm install
# o
yarn install
```

## Ejecución

```bash
npm start      # Inicia Expo
npm run ios    # Ejecuta en iOS
npm run android # Ejecuta en Android
npm run web    # Ejecuta en web
```

## Características

- ✅ Lista de repositorios con FlatList
- ✅ Componente Text con tema consistente
- ✅ Layout con Flexbox
- ✅ Separadores entre elementos
- ✅ Información completa del repositorio (nombre, descripción, stats)
- ✅ Avatar del propietario

## Temas

El proyecto utiliza un sistema de temas que define:
- Colores: primarios y secundarios
- Tamaños de fuente: body y subheading
- Pesos de fuente: normal y bold
- Familia de fuentes: System (nativa del dispositivo)
