GABAN · Setup Notes (Contacto + Backend)
🧱 1. Crear Google Sheet (Base de datos)
    1. Ve a Google Sheets
    2. Crear nuevo archivo
    3. Nombre sugerido:
AR Website Leads
    4. NO necesitas crear columnas manualmente
→ el script las crea solo

⚙️ 2. Crear Apps Script
    1. Dentro del Sheet:
Extensions → Apps Script
    2. Borra todo el código default
    3. Pega el archivo:
apps-script.gs

✏️ 3. Configurar email del cliente
Busca esta línea:
const OWNER_EMAIL = "contacto@tallararquitectura.com";
Cámbiala por el correo real del cliente

🚀 4. Deploy como Web App
    1. Click en "Deploy"
    2. "New deployment"
Configuración:
    • Type: Web app
    • Execute as: Me
    • Who has access: Anyone
    3. Click "Deploy"
    4. Copia la URL (IMPORTANTE)
Ejemplo:
https://script.google.com/macros/s/AKfycbxxxxxxx/exec

🔌 5. Conectar con el sitio web
En tu archivo:
js/contact.js
Busca esto:
const SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
Y reemplaza por la URL del Web App

🧪 6. Probar formulario
    1. Abre:
contacto.html
    2. Llena el formulario
    3. Verifica:
✔ Aparece en Google Sheets
✔ Llega correo al cliente
✔ Usuario recibe auto-reply

⚠️ Problemas comunes
❌ No guarda en Sheets
→ El script NO está dentro del Sheet correcto
❌ Error de CORS
→ Usa:
"Content-Type": "text/plain;charset=utf-8"
❌ No llegan correos
→ Revisa permisos al hacer deploy
❌ No funciona el submit
→ Verifica que SCRIPT_URL esté bien pegado

🧠 Mejora futura (opcional GABAN PRO)
    • Conectar a CRM (HubSpot / Airtable)
    • Guardar IP / país del usuario
    • Notificación por WhatsApp API
    • Dashboard de leads
    • Score automático de cliente

🏁 Resultado final
Tienes ahora:
✔ Website premium
✔ Formulario funcional
✔ Base de datos automática
✔ Notificación por correo
✔ Auto-reply profesional
Esto ya es nivel:
💰 Cliente real listo para cerrar

🔥 Nota GABAN
Footer:
Website crafted by GABAN
😉

From <https://chatgpt.com/g/g-p-69a8963897148191a2e17558b7d4b888-gaban/c/69bc8a1b-42c0-8328-8b13-681a381388ac> 

