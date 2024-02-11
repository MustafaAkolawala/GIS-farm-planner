import joblib
import numpy as np
import pandas as pd


class CropRecommender:
    def __init__(self):
        self.model = joblib.load("./cropRecommender/model.jbl.lzma")

    def predict(self, data):
        data = pd.DataFrame(data).T
        data.columns = ["K", "N", "P", "humidity", "ph", "rainfall", "temperature"]
        return self.model.predict(data)[0]
