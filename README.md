# REPORTES CON JASPER Y NODE.JS

## Comenzando 🚀

_Antes de clonar el proyecto, debe tener el node instalado, específicamente en su última versión._

### Pre-requisitos 📋

_Se debe clonar el repositorio, utilizando._

```
git clone git@bitbucket.org:jdaison/aseytrans.git
```

_o_

```
git clone https://aplicaciones2@bitbucket.org/jdaison/aseytrans.git
```

### Instalación 🔧

_Una vez que haya clonado el proyecto localmente, en la instalación de su directorio_

_Se debe tener instalado [Java 7](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html#license-lightbox), [Python version 3.7.7](https://www.python.org/downloads/windows/) y el compilador de c++ en vscode_

_Luego, se debe crear una carpeta llamada lib, allí se guarda el archivo [postgresql-42.2.12.jre7.jar](https://jdbc.postgresql.org/download.html) y tambien se guarda [jasperreports-6.2.0](https://sourceforge.net/projects/jasperreports/files/archive/jasperreports/JasperReports%206.2.0/)_

```
npm i
```

_Para instalar todas las dependencias._

_Para correr el programase debe utilizar._

```
npm start
```

## Despliegue 📦

_Para desplegar el proyecto solo hay que ejecutar_

```
npm start
```

## Construido con 🛠️

- [Express](https://expressjs.com/es/) - El framework backend utilizado.
- [node-jasper](https://github.com/agmoyano/node-jasper) - Para generar los reportes en la version 0.2.5.
