pipeline{
    agent any
    tools {nodejs "my-nodejs"}
    environment {
        NEXT_PUBLIC_SUPABASE_URL = credentials('jenkins-supabase-url')
        NEXT_PUBLIC_SUPABASE_ANON_KEY= credentials('jenkins-supabase-anon-key')
        EC2_USER = 'ec2-user'
        EC2_IP = 'ec2-3-15-155-73.us-east-2.compute.amazonaws.com'
        SSH_KEY = 'ec2-ssh-key'
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
        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: [SSH_KEY]) {
                    sh """
                    # Copy files to EC2 instance
                    scp -r * ${EC2_USER}@${EC2_IP}:/home/${EC2_USER}/website-v2.0

                    # Connect to EC2 instance and set up environment
                    ssh ${EC2_USER}@${EC2_IP} '
                        cd ~/website-v2.0 &&
                        npm install &&
                        pm2 stop all || true &&
                        pm2 start npm --name "website-v2.0" -- start
                    '
                    """
                }
            }
        }
    }
}