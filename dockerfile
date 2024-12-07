# Usar la imagen base de Nginx
FROM nginx:alpine

# Copiar tu página web al directorio predeterminado de Nginx
COPY index.html /usr/share/nginx/html/index.html
