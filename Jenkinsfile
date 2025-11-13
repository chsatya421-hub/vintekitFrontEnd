pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-static-site"
        TAG = "${BUILD_NUMBER}"
        DOCKERHUB = credentials('dockerhub-creds')
    }

    stages {
        stage('Checkout') {
            steps {
                // Clean workspace and clone your repo
                sh 'rm -rf *'
                git branch: 'main',
                    url: 'https://github.com/chsatya421-hub/vintekitFrontEnd.git'
                sh 'ls -la'
            }
        }

        stage('Build') {
            steps {
                sh '''
                    pwd
                    ls -la
                    docker-compose build
                '''
            }
        }

        stage('Test') {
            steps {
                sh 'echo "No tests yet for static site"'
            }
        }

        stage('Push') {
            steps {
                sh '''
                    echo "$DOCKERHUB_PSW" | docker login -u "$DOCKERHUB_USR" --password-stdin
                    docker tag ${IMAGE_NAME}:${TAG} ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}
                    docker push ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}
                '''
            }
        }
    }
}
