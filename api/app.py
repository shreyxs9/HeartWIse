
# 1. Library imports
import uvicorn
from fastapi import FastAPI
from BankNotes import BankNote
import numpy as np
import pickle
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# 2. Create the app object
app = FastAPI()
pickle_in = open("heart_disease.pkl","rb")
classifier=pickle.load(pickle_in)

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173/",  # your frontend application
    "http://localhost:5173",  # your frontend application

    # add other origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello, World'}

# 4. Route with a single parameter, returns the parameter within a message
#    Located at: http://localhost:8000/AnyNameHere
@app.get('/{name}')
async def get_name(name: str):
    return {'Welcome mf': f'{name}'}

# 3. Expose the prediction functionality, make a prediction from the passed
#    JSON data and return the predicted Bank Note with the confidence
@app.post('/predict')
def predict_banknote(data:BankNote):
    data = data.model_dump()
    age=data['age']
    sex=data['sex']
    cp=data['cp']
    trestbps=data['trestbps']
    chol=data['chol']
    fbs=data['fbs']
    restecg=data['restecg']
    thalach=data['thalach']
    exang=data['exang']
    oldpeak=data['oldpeak']
    slope=data['slope']
    ca=data['ca']
    thal=data['thal']
   
   # print(classifier.predict([[variance,skewness,curtosis,entropy]]))

    prediction= classifier.predict([[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]])
    if prediction == 0:
        prediction="No heart disease\nYou're healthy"
    elif prediction == 1: 
        prediction="You have heart disease"
    print("prediction")
    
    return {
        'prediction': prediction
    }    
        

# 5. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=8000)
    
#uvicorn app:app --reload