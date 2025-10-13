# 🦟 Malaria Risk Predictor — AI for Sustainable Development (SDG 3)

### Theme
**AI for Sustainable Development — Week 2 Project (SDG 3: Good Health and Well-Being)**

This project leverages **Machine Learning** to predict malaria risk levels based on key environmental factors like **average temperature** and **rainfall**. The goal is to support **early detection and prevention efforts** in malaria-prone regions — aligning with the UN Sustainable Development Goal 3 (Good Health and Well-Being).

---

##  Live Demo

 **[View the Deployed App on Streamlit](https://mlrriskpredictor.streamlit.app/)**

You can adjust environmental parameters and instantly see predicted malaria risk levels manually or get real time predictions based on current weather (rainfall and temperatures) in select locations

## Project Structure
├── app.py # Streamlit web app
├── malaria_model.pkl # Trained ML model
├── malaria_data.csv # Dataset
├── requirements.txt # Dependencies
├── README.md # Project documentation
├── Report.md # Project Report
├── Screenshots # Demo illustrations

## Problem Statement

Malaria remains one of the leading causes of morbidity and mortality in sub-Saharan Africa.  
Environmental factors such as **temperature** and **rainfall** play a critical role in mosquito breeding patterns and disease transmission.

The challenge:  
> Can we use data to **predict malaria risk levels** and **guide proactive interventions** before outbreaks occur?

---

## Machine Learning Approach
 **Algorithm Used**  Supervised Learning (Regression) 
 **Models Compared**  Linear Regression, Random Forest, Gradient Boosting 
 **Best Model**  Gradient Boosting Regressor (highest R² score, lowest MAE) 
 **Input Features**  Average Temperature (°C), Rainfall (mm) 
 **Output**  Predicted malaria cases per 1000 population 

---

##  Workflow Overview

1. **Data Loading**  
   Dataset imported from `malaria_data.csv` (CSV format).

2. **Exploratory Data Analysis (EDA)**  
   Scatterplots showing how rainfall and temperature correlate with malaria cases.

3. **Model Training & Evaluation**  
   Compared multiple regression algorithms for accuracy and reliability.

4. **Model Saving**  
   The trained model was exported as `malaria_model.pkl` for deployment.

5. **Deployment**  
   Streamlit was used to create an interactive web interface for real-time prediction.

---

## Example Visualizations

- **Temperature vs Malaria Cases**
- **Rainfall vs Malaria Cases**
- **Actual vs Predicted Cases Scatterplot**
- **Model Comparison (MAE, R²)**

---

##  Tools & Libraries
Programming Language - Python 
ML Libraries - Scikit-learn, Pandas, Joblib 
Visualization - Matplotlib, Seaborn, plotly 
Deployment - Streamlit 
Data Source - Simulated CSV data (inspired by WHO malaria datasets) 
