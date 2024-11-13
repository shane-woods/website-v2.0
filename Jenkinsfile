pipeline{
    agent any
    tools {nodejs "my-nodejs"}
    environment {
        NEXT_PUBLIC_SUPABASE_URL = credentials('jenkins-supabase-url')
        NEXT_PUBLIC_SUPABASE_ANON_KEY= credentials('jenkins-supabase-anon-key')
    }
    stages{
        stage("Build"){
            steps{
                nodejs("my-nodejs") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage("Start"){
            steps{
                nodejs("my-nodejs") {
                    sh 'npm run start &'
                }
                echo "App started successfully"
            }
        }
    }
}