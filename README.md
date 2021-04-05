# medifinder
Interface de busca em base de dados públicos sobre cursos de medicina no Brasil. Fonte de dados: e-MEC

Search interface with public data about medical school in Brazil. Source of data: e-MEC

For local testing, run ```sh ./setup.sh``` . It launchs a nginx docker image with the medifinder installed. Also do a mount to your local src directory. After launcking docker try ```localhost:80``` in your browser.

The ```index.js``` file configs a NodeJS server in the port 5000. It is used only by herokuapp to host the app in the cloud. But you also can start the app locally by running ```npm install``` then ```npm start```. After launcking NodeJS try ```localhost:5000``` in your browser. 
