# Chatbot-using-Rasa-and-React-WebApp
##A plain chatbot with minimal training data using the Rasa Framework and a React WebApp as front-end

To use this web-app you will need to install the Rasa Module using pip
```python
pip install rasa
```

_I will suggest installing rasa in an environment as this installation process install Tensorflow as well as Spacy modules which might be a few versions old will interfere with your base environment_

After the installation is finished you need to make a Rasa Project
```
rasa init --no-prompt
```
[You can also check out the Rasa Documentation here and follow the steps there]: (https://rasa.com/docs/rasa/user-guide/rasa-tutorial)

---

For the frontend and ReactJS you'll need to install NodeJS and NPM along with React and ReactDOM. 
[You can find the documentation to do that here](https://www.javatpoint.com/react-installation)

You can learn the basics of ReactJS from:
+ [React Documentation](https://reactjs.org/docs/getting-started.html)
+ [Youtube Tutorials on ReactJS by Codevolution](https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)

---

To run the React Server type the following command in the root folder
```
npm start 
``` 
To run the Rasa Backend type in the following command in the root folder
```
rasa run -m models --enable-api --log-file out.log --endpoints endpoints.yml --cors "*"
```
