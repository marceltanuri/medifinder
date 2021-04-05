docker build -t medifinder:v1 .

docker container stop medifinder
docker container rm medifinder

docker run -p 80:80 -d \
  -it \
  --name medifinder \
  --mount type=bind,source="$(pwd)"/src,target=/usr/share/nginx/html \
  medifinder:v1 && echo "nginx server with medifinder started with success"
