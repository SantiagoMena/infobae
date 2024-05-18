## Prueba tecnica para infobae

Para usar en entorno de desarrollo usar:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) para ver el sitio en desarrollo.

Abrir [https://santiagomena.github.io/infobae](https://santiagomena.github.io/infobae) para ver la demo del sitio.

### Variables de entorno

Crea un archivo `.env` en base al archivo `.env.example`

```
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
NEXT_PUBLIC_DUMMY_API_URL=""
NEXT_PUBLIC_DUMMY_APP_ID=""
```

### Firebase

Para este proyecto se ha usado Firebase para el inicio de sesión y para persistir los datos en una base de datos no relacional

#### Authentication

Par crear un proyecto de Firebase Authentication y obtener las credenciales correspondientes consulta el siguiente manual [https://firebase.google.com/docs/auth/web/anonymous-auth?hl=es-419](https://firebase.google.com/docs/auth/web/anonymous-auth?hl=es-419)

#### Firestore

Par crear un proyecto de Firebase Firestore y obtener las credenciales correspondientes consulta el siguiente manual [https://firebase.google.com/docs/firestore/quickstart?hl=es-419](https://firebase.google.com/docs/firestore/quickstart?hl=es-419)


### Dummy API
Para obtener los posts y comentrios se usó el API de [dummyapi.io](https://dummyapi.io/docs) sigue las instrucciones para obtener un `app-id` y configuralo en las variables de entorno.

