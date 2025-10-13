# Malaria Outbreak Prediction Using Machine Learning
**SDG 3: Good Health and Well-being**  


## Problem Statement
Malaria remains a critical public health challenge in tropical and subtropical regions, causing over 200 million cases annually. Early prediction of outbreaks can help healthcare systems allocate resources effectively, deploy preventive measures, and ultimately save lives. This project uses machine learning to predict malaria incidence based on climate factors.

## ML Approach
**Supervised Learning - Regression Models**

I compared three algorithms to predict malaria cases per 1,000 people:
- **Linear Regression**: Baseline model assuming linear relationships
- **Random Forest Regressor**: Ensemble method capturing non-linear patterns
- **Gradient Boosting Regressor**: Sequential ensemble for optimal prediction accuracy

**Features Used**: Average Temperature (°C) and Rainfall (mm)  
**Target Variable**: Malaria Cases per 1,000 people

## Results
The **Gradient Boosting Regressor** performed best:
- **R² Score**: 0.87 (explains 87% of variance in malaria cases)
- **Mean Absolute Error (MAE)**: 3.2 cases per 1,000 people
- **Key Finding**: Strong correlation between temperature (25-30°C) and rainfall (100-250mm) with increased malaria incidence

The model successfully integrates real-time weather data via Open-Meteo API, enabling dynamic risk assessment for any geographic location.

## Ethical Considerations

**Bias Risks**:
- Historical data may underrepresent certain regions due to limited healthcare infrastructure
- Model trained primarily on specific geographic areas may not generalize globally
- False negatives could delay intervention, while false positives waste resources

**Fairness & Sustainability**:
- Predictions should complement—not replace—local health expertise
- Model requires regular retraining with updated data to maintain accuracy
- Accessibility: Deployed as a simple tool usable by resource-limited health departments
- Privacy: Uses only aggregated climate data, no personal health information

**Mitigation Strategy**: Implement prediction confidence intervals and encourage validation with local epidemiological data before resource allocation decisions.

---

## Impact
This tool empowers public health officials to proactively prevent malaria outbreaks, contributing directly to SDG 3 (Good Health) and indirectly to SDG 13 (Climate Action) by highlighting climate-health connections.