# mijn_website
A simpel web site with html, css, json and javascript, run with nginx in a docker container

To run the website:
1. clone the github repo to your (AWS) server
2. connect to the server by SSH, go to the cloned rep map and run:
   docker run --name mijn_nginx -v /home/User_Mark/git/mijn_website/ontwikkel/html:/usr/share/nginx/html:ro 
          -p 80:80 -d nginx
3. Go to the external IP address of the server and enjoy the web site!
