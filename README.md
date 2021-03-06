# WeatherApp
Weather app is the little web app for displaying the weather report from openweathermap.org using Components, Databinding, HTTP, Services,HTML5, CSS3, JS...!


## App features
1. The app consists of a list of panels. Every panel shows the weather data of one city. Initially, all panels would be empty.

2. On tapping on an empty panel, a text box appears on the panel itself, asking the user to enter the city name. On entering the name, the panel now shows weather data for that particular city.

3. Every panel have an “Edit” button - on clicking this, the user will be able to change the existing city to some other that user prefers to view in that panel. 

4. If there was an error in retrieving the data (eg. wrong city name),the panel throws out the error message and thus user can now  verify and re-enter the correct city name.

5. Every panel has a background picture that describes the weather at the city - eg. sunny/rainy/cloudy.

6. Every panel discloses city name,temperature,pressure,humidity,and climate condtion.
## API Used

[OpenWeatherMap API](https://openweathermap.org/)

## Prerequisites  
1. Install [Node.js®](https://nodejs.org/en/download) and npm
    ```
      node -v 
    ```
    ``` 
      npm -v
    ``` 
2. Install node packages and go to directory having package.json (cd /go/to/app/directory having package.json)
    ```
      npm install
    ```
3. Install the latest NativeScript CLI type the following command in a Command Prompt or Terminal.
    ```
      npm install -g nativescript@latest
    ```
4. Navigate to your project folder and run the following command to start previewing your app.
    ```
      tns preview
    ```
    
## Project Looks like  
<img src="HelloWorld/src/app/images/1.PNG" width="250"/>
On tapping empty panel
<img src="HelloWorld/src/app/images/2.PNG" width="250"/>
Click on text field
<img src="HelloWorld/src/app/images/3.PNG" width="250"/>
Enter the City Name 
<img src="HelloWorld/src/app/images/4.PNG" width="250"/>
It looks like
<img src="HelloWorld/src/app/images/5.PNG" width="250"/>
On clicking edit button
<img src="HelloWorld/src/app/images/6.PNG" width="250"/>
OVERVIEW OF THE PROJECT
<img src="HelloWorld/src/app/images/7.PNG" width="250"/>

