# mijn_website
A simpel web app with front end consisting of html, css and javascript.
The bakend works with a simple python flask API server that makes it
possible to connect to a seperate postgresql database.

The website can be run with nginx in a docker container.

To run the website:
1. connect to your (AWS EC2) server by SSH
2. clone the github repo in your home directory in a map git\ 
3. in the cloned repo map run:
   docker run --name mijn_nginx \
          -v /home/User_Mark/git/mijn_website/ontwikkel/html:/usr/share/nginx/html:ro \
          -v /home/User_Mark/git/mijn_website/ontwikkel/nginx.conf:/etc/nginx/nginx.conf:ro \
          -p 80:80 -d nginx
3. Go to the external IP address of the server and enjoy the web site!
