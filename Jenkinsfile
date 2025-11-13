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
                git branch: 'main',
                    url: 'https://github.com/chsatya421-hub/vintekitFrontEnd.git'
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
                // No real tests for static HTML, but keep a placeholder
                sh 'echo "No tests for static site yet"'
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
