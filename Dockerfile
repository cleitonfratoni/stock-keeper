# Use a imagem base do MySQL
FROM mysql:latest

# Defina variáveis de ambiente para configurar o MySQL
ENV MYSQL_DATABASE=nome_do_banco_de_dados \
    MYSQL_USER=cleitonr \
    MYSQL_PASSWORD=senha@123 \
    MYSQL_ROOT_PASSWORD=root
