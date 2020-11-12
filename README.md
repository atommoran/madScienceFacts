# Explanation
This is the code for the website www.madsciencefacts.co.uk. It consists of a backend Flask container and frontend UI in AngularJS. This is compiled with a Node container then hosted on an Nginx container. Both containers are then run on an AWS EC2 instance, that I'm managing from console.

# How it's run
Run the backend with apiDocker.sh from the /flask_api/ directory
`./apiDocker.sh ${L2_password} ${L2P_password} ${teacher_password}`

Run the frontend with frontendDocker.sh from the /angularjs/ directory
`./frontendDocker.sh`
It should be noted that you will need to change the API address on line 5
