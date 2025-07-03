to upload a docker container to docker repo

docker login 
docker tag <docker-image> <docker-username>/<docker-container:latest>
docker push <docker-username>/<docker-container:latest>
