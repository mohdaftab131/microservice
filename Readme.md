1. Create the Microserive user and mail
2. Run and test the both service
3. Dockerize the both serivce
    Steps:
        For both serivice you have to build and run the image 
        docker build -t user-service-image:v1 .
        docker build -t mail-service-image:v1 .
            -t = specify the name and tag to docker image
            v1 is version 
        running
        docker run -p 3000:3000 -d user-service-image:v1
        docker run -p 3001:3001 -d mail-service-image:v1
4. Docker compose both the application
    write the docker-compose.yml file and run the command
        docker-compose up -d

4. Now use Version Control (Git) to store your project 


