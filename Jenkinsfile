pipeline {
    agent any

    environment {
        // Docker image name for your Angular app
        IMAGE_NAME = "vintekit-frontend"
        TAG = "${BUILD_NUMBER}"
        DOCKERHUB = credentials('dockerhub-creds')   // username: chsathya, password: PAT
    }

    stages {
        stage('Checkout') {
            steps {
                // clean workspace and pull latest code
                sh 'rm -rf *'
                git branch: 'main',
                    url: 'https://github.com/chsatya421-hub/vintekitFrontEnd.git'
                sh 'ls -la'
            }
        }

        stage('Build Docker image') {
            steps {
                sh '''
                    pwd
                    ls -la
                    docker-compose build
                '''
            }
        }

        stage('Test (placeholder)') {
            steps {
                // later you can run ng test inside a node container if you want
                echo 'No tests wired yet for Angular app.'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh '''
                    echo "$DOCKERHUB_PSW" | docker login -u "$DOCKERHUB_USR" --password-stdin

                    # Tag image built by docker-compose:
                    # expects docker-compose.yml to define:
                    #   image: vintekit-frontend:${BUILD_NUMBER:-latest}
                    docker tag ${IMAGE_NAME}:${TAG} ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}

                    # Push to Docker Hub: chsathya/vintekit-frontend:<build>
                    docker push ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}
                '''
            }
        }

        stage('Deploy (run container on 9090)') {
            steps {
                sh """
                    # stop/remove old container if it exists
                    docker stop ${IMAGE_NAME} || true
                    docker rm ${IMAGE_NAME} || true

                    # pull the image we just pushed (clean deploy)
                    docker pull ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}

                    # run new container on port 9090
                    docker run -d --name ${IMAGE_NAME} -p 9090:80 ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}
                """
            }
        }
    }
}
