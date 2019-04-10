
docker-compose up -d // subir os containers para desenvolvimento

docker-compose stop mongo
docker-compose stop reaction

docker-compose restart reaction

docker-compose logs -f reaction
docker-compose logs -f mongo