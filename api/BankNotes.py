
from pydantic import BaseModel
# 2. Class which describes Bank Notes measurements
class BankNote(BaseModel):
    
    age:float
    sex:float
    cp:float
    trestbps:float
    chol:float
    fbs:float
    restecg:float
    thalach:float
    exang:float
    oldpeak:float
    slope:float
    ca:float
    thal:float