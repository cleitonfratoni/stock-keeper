# Use a imagem base do MySQL
FROM mysql:latest

# Defina variáveis de ambiente para configurar o MySQL
ENV MYSQL_DATABASE=stock-keeper \
    MYSQL_USER=matheus.gomes \
    MYSQL_PASSWORD=Qazdehau123@ \
    MYSQL_ROOT_PASSWORD=root
