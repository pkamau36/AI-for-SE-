## Machine Learning and NLP Projects

## Folder Overview
This folder contains a collection of projects demonstrating the use of **classical machine learning**, **deep learning**, and **natural language processing (NLP)** frameworks. The work spans from traditional scikit-learn implementations to advanced TensorFlow-based CNNs and linguistic modeling with spaCy.

---

## File Descriptions

### 1. **Mnist.ipynb**
A Jupyter Notebook implementing a **Convolutional Neural Network (CNN)** for handwritten digit recognition using the **MNIST dataset**.

- **Framework:** TensorFlow/Keras  
- **Key Features:**
  - Data loading and preprocessing (normalization, reshaping)
  - Model architecture with convolution, pooling, dropout, and dense layers  
  - Training visualization (accuracy and loss graphs)
  - Evaluation on test data
  - Example predictions visualized alongside true labels  
- **Output Model:** `mnist_cnn_model.h5`  

> Refer to *page 6 of `Wk3Assignment.pdf`* for the CNN model summary, showing layer details and parameters (e.g., `Conv2D`, `MaxPooling2D`, `Dense` layers) and prediction samples on test images.

---

### 2. **mnist_cnn_model.h5**
The trained **TensorFlow CNN model file** generated from `Mnist.ipynb`.  
- **Usage:** Load this model for inference or fine-tuning without retraining.  
- **Model Summary:** 421,642 trainable parameters (as seen in the model summary table in `Wk3Assignment.pdf`, p.6).  



---

### 3. **Scikit_learn.ipynb**
A Jupyter Notebook demonstrating **classical machine learning** using **Scikit-learn**.  
- **Dataset:** Iris Dataset  
- **Techniques:**
  - Decision Tree Classifier  
  - Confusion Matrix and Classification Report (Precision, Recall, F1-Score)
  - Model visualization (decision tree diagram)

> See *page 5 of `Wk3Assignment.pdf`* for the **Decision Tree structure** and *page 4* for detailed accuracy metrics (Accuracy: 0.9333).

---

### 4. **sPacy.ipynb**
A Jupyter Notebook showcasing **Natural Language Processing with spaCy**.  
- **Tasks:**
  - Named Entity Recognition (NER)
  - Sentiment scoring using custom lexicons
  - Product review analysis (Amazon-like dataset)
- **Key spaCy Features Used:**
  - Tokenization  
  - POS tagging and Dependency Parsing  
  - Named Entity Recognition (e.g., `ORG`, `GPE`, `PRODUCT`)

> Refer to *pages 7–9 of `Wk3Assignment.pdf`* for examples of sentiment analysis and discussions of **ethical considerations** such as:
> - Lexical/Semantic Bias  
> - Domain & Context Bias  
> - Socio-Linguistic Bias  
> - Mitigation strategies using TensorFlow Fairness Indicators and spaCy rule-based systems.

---

### 5. **Wk3Assignment.pdf**
A comprehensive report summarizing all the experiments and results from the notebooks:
- **TensorFlow vs PyTorch** comparison (pages 1–2)
- **Jupyter Notebook use cases** (page 2)
- **Scikit-learn vs TensorFlow comparative analysis** (pages 3–4)
- **Model visualizations** for classical ML and CNN (pages 4–6)
- **spaCy NLP analysis and ethical bias discussion** (pages 7–9)

This document serves as both a theoretical reference and a visual documentation of the project outputs.

---

## Results Summary


# Notebook: Scikit_learn.ipynb

    Task: Iris Classification

    Framework: Scikit-learn

    Accuracy / Output: 93.3% Accuracy

    Visualization: Decision Tree Plot

# Notebook: Mnist.ipynb

    Task: Handwritten Digit Recognition

    Framework: TensorFlow (Keras)

    Accuracy / Output: 98%+ Accuracy

    Visualization: CNN Predictions

# Notebook: sPacy.ipynb

    Task: Sentiment & Entity Recognition

    Framework: spaCy

    Accuracy / Output: N/A (Rule-based)

    Visualization: NER and Sentiment Reports

---

## Ethical Considerations

Outlined in `Wk3Assignment.pdf`:
- **Bias Identification:** Linguistic, contextual, and demographic biases in NLP.
- **Fairness Auditing:** Using TensorFlow Fairness Indicators.
- **Rule-Based Mitigation:** Improving spaCy rules for negation and context.

---
