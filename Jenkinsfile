node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */
        git 'https://github.com/shubh4527/pseudo.git'
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("shubh4527/pipelinefileimage")
    }

    // stage('Test image') {
        
    //     app.inside {
    //         echo "Tests passed"
    //     }
    // }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            }
            echo "Trying to Push Docker Build to DockerHub"
    }
 }
