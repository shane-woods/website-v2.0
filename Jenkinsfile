pipeline{
    agent any
    tools {nodejs "my-nodejs"}
    environment {
        NEXT_PUBLIC_SUPABASE_URL = "https://pdnrqxfgxysljqjlszen.supabase.co"
        NEXT_PUBLIC_SUPABASE_ANON_KEY= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbnJxeGZneHlzbGpxamxzemVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwOTcwMjgsImV4cCI6MjA0NjY3MzAyOH0.lRiv53Dhxn6vNl7VK_jxNCUhT-C160i3pmQWIm9zwwg"
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
                    sh 'npm run start'
                }
                echo "App started successfully"
            }
        }
    }
}