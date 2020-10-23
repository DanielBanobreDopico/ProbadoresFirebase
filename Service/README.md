# Requisitos comunes para Firebase Host y Firebase Functions

Los servicios **Host** y **Functions** de **Firebase** nos permiten publicar contenidos estáticos y APIs respectivamente.

Para poder emplear cualquiera de estos dos servicios necesitamos emplear la herramienta **Firebase CLI** de Google que nos permitirá *probar y publicar* los contenidos y códigos de nuestros proyectos para Firebase.

## Instalar Firebase CLI

Referencia: [Instalando Firebase CLI](https://firebase.google.com/docs/cli?hl=es#install_the_firebase_cli)

Podemos instalar Firebase CLI usando *npm*:

```bash
$ sudo npm install -g firebase-tools
```

Una vez instalado es necesario iniciar sesión con la herramienta usando nuestra cuenta de Google para proporcionarle acceso a nuestros proyectos de Firebase:

```bash
$ firebase login 
```

Si todo va bien, la herramienta ya podrá acceder a tus proyectos de Firebase. Podemos comprobarlo listándolos:

```bash
$ firebase projects:list
```

