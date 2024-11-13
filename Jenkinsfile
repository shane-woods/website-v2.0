pipeline {
    agent any
    environment {
        // Define environment variables
        REGISTRY_CREDENTIALS = credentials('docker-registry-credentials')
        DOCKER_IMAGE = 'nextjs-app'
        REGISTRY_URL = 'https://hub.docker.com/repository/docker/shwoods35/nextjs-app/general'
    }
    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from your Git repository
                git branch: 'main', url: 'https://github.com/shane-woods/website-v2.0.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${REGISTRY_URL}/${DOCKER_IMAGE}")
                }
            }
        }
        stage('Test') {
            steps {
                // Run tests in the Docker container
                script {
                    docker.image("${REGISTRY_URL}/${DOCKER_IMAGE}")
                        .inside {
                            sh 'npm run test'
                        }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("${REGISTRY_URL}", 'REGISTRY_CREDENTIALS') {
                        docker.image("${REGISTRY_URL}/${DOCKER_IMAGE}").push('latest')
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the Docker container to a staging or production environment
                sh "docker run -d -p 3000:3000 ${REGISTRY_URL}/${DOCKER_IMAGE}:latest"
            }
        }
    }
    post {
        always {
            // Clean up Docker images
            sh 'docker rmi ${REGISTRY_URL}/${DOCKER_IMAGE}:latest'
        }
    }
}
