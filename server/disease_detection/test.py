import pandas as pd
import requests
import pickle

# Function to preprocess the user input data
def preprocess_data(user_input):
  
    user_data = pd.DataFrame(user_input, index=[0])

    

    return user_data

# Function to get weather data from OpenWeather API
def get_weather_data(api_key, city_name):
    # Make a request to OpenWeather API
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}&units=metric"
    response = requests.get(url)
    
    # Parse the response JSON
    if response.status_code == 200:
        data = response.json()
        temperature = data['main']['temp']
        humidity = data['main']['humidity']
        # Extract other relevant weather data as needed
        # For example, moisture might not be directly available from the API
        
        return temperature, humidity
    else:
        print("Failed to fetch weather data.")
        return None, None

# Load the trained model
with open('random_forest_model.pkl', 'rb') as f:
    classifier = pickle.load(f)

# Get API key from user (You can replace this with your API key directly)
api_key = input("Enter your OpenWeather API key: ")

# Get city name from user
city_name = input("Enter the name of your city: ")

# Get weather data from OpenWeather API
temperature, humidity = get_weather_data(api_key, city_name)

# Prompt user for other features
user_input = {
    'Temperature': temperature,
    'Humidity': humidity,
    # Add other features as needed
}

# Preprocess the user input data
user_data = preprocess_data(user_input)

# Make predictions
predictions = classifier.predict(user_data)

# Print or use predictions as required
print("Predicted Fertilizer Code:", predictions[0])
