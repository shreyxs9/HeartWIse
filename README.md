---

# HeartWise

**HeartWise** is a machine learning-powered web application designed to predict heart disease risk by analyzing user data. It provides users with a convenient and secure way to assess their heart health based on key medical and lifestyle factors.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Heart Disease Prediction**: Predicts the likelihood of heart disease using a machine learning model.
- **User Authentication**: Secure user login and registration using JWT tokens.
- **Interactive Dashboard**: Displays prediction results and relevant statistics.
- **Responsive Design**: Accessible on both desktop and mobile devices.
- **Data Visualization**: Visual representation of user inputs and prediction outcomes.

## Technologies Used

- **Frontend**: React, JavaScript, CSS
- **Backend**: Node.js, Express.js
- **API (Machine Learning Model)**: FastAPI, Python
- **Database**: MongoDB
- **Machine Learning**: Scikit-learn
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js and npm/yarn
- Python 3.x
- MongoDB

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/shreyxs9/HeartWise.git
    cd HeartWise
    ```

2. **Install backend dependencies:**

    ```bash
    npm install
    ```

3. **Install machine learning model dependencies:**

    ```bash
    cd api
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**

    - Create a `.env` file in the root directory with the following variables:
    
    ```bash
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    ```

5. **Run the backend and API servers:**

    - Start the backend server (Express.js):

    ```bash
    npm start
    ```

    - Start the API server (FastAPI):

    ```bash
    cd api
    uvicorn main:app --reload
    ```

6. **Run the frontend:**

    ```bash
    cd client
    npm run dev
    ```

7. **Access the application:**

    - Visit `http://localhost:5173/` in your browser.

## Usage

- Register or log in with your account.
- Enter the required medical and lifestyle data.
- View the prediction result on the dashboard.
- Explore additional insights and health tips provided.


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

### Steps to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Shreyas S**: [LinkedIn](https://www.linkedin.com/in/shreyas9999/)
- **GitHub**: [shreyxs9](https://github.com/shreyxs9)
  
## Contributors

- [Sharontm](https://github.com/Sharontm)

---

