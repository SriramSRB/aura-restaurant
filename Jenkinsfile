pipeline {
    agent any

    stages {
        stage ('1. Checkout code') {
            steps {
                checkout scm
            }
        }
        stage ('2. Build docker image') {
            steps {
                sh 'docker build -t sriramsrb/aura-restaurant:latest .'
            }
        }
        stage ('3 Push docker image to Docker hub') {
            steps {
                withCredentials ([string(credentialsId: 'Dockerhub-user', variable: 'DOCKER_PWD')]) {
                    sh 'echo "$DOCKER_PWD" | docker login -u sriramsrb --password-stdin'
                    sh 'docker push sriramsrb/aura-restaurant:latest'
                }
            }
        }
        stage ('4. Deploy to kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yml'
                sh 'kubectl rollout restart deployment aura-restaurant-deployment'
            }
        }
    }
}