pipeline {
    agent any

    environment {
        IMAGE_NAME = "vintekit-frontend"
        TAG        = "${BUILD_NUMBER}"
        DOCKERHUB  = credentials('dockerhub-creds')   // DOCKERHUB_USR / DOCKERHUB_PSW
    }

    stages {
        stage('Checkout') {
            steps {
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
                    # build the web image (uses BUILD_NUMBER from Jenkins)
                    docker compose build web
                '''
            }
        }

        stage('Test (placeholder)') {
            steps {
                echo 'No tests wired yet for Angular app.'
            }
        }

        stage('Push to Docker Hub') {
            when {
                expression { return env.DOCKERHUB_USR?.trim() }
            }
            steps {
                sh '''
                    echo "$DOCKERHUB_PSW" | docker login -u "$DOCKERHUB_USR" --password-stdin

                    # Tag image built by docker compose
                    docker tag ${IMAGE_NAME}:${TAG} ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}

                    # Push to Docker Hub: chsathya/vintekit-frontend:<build>
                    docker push ${DOCKERHUB_USR}/${IMAGE_NAME}:${TAG}
                '''
            }
        }

        stage('Deploy stack (web + monitoring)') {
            steps {
                sh '''
                    # Stop and remove old containers from this compose project
                    docker compose down

                    # Start everything in the compose file:
                    # web, cadvisor, blackbox, prometheus, grafana
                    docker compose up -d
                '''
            }
        }
    }
}
