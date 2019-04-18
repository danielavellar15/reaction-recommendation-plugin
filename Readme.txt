
sudo docker-compose up -d // subir os containers para desenvolvimento

sudo docker-compose stop mongo
sudo docker-compose stop reaction

sudo docker-compose restart reaction

sudo docker-compose logs -f reaction
sudo docker-compose logs -f mongo