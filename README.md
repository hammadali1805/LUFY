# 📜 LUFY - Law Understandable For You

LUFY is a platform that simplifies the process of summarizing legal documents, making legal content accessible to a broader audience. It allows users to upload legal documents in various formats and generates summaries in local languages like Hindi, Gujarati, Marathi, and more. Additionally, LUFY enables users to query specific sections of documents, promoting better understanding and accessibility for non-English speakers.

---

## 📖 Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Setup and Installation](#setup-and-installation)
5. [Usage Instructions](#usage-instructions)
6. [API Endpoints](#api-endpoints)
7. [Frontend Overview](#frontend-overview)
8. [Backend Overview](#backend-overview)
9. [Future Improvements](#future-improvements)
10. [License](#license)

---

## 🌟 Project Overview

**LUFY** provides an intuitive platform for simplifying complex legal documents into concise summaries and supporting multiple languages. The platform serves legal professionals, clients, and anyone seeking clarity on legal jargon by providing abstractive and extractive summaries, improving accessibility to legal content.

Users can:
- Upload documents in PDF, TXT, DOCX formats.
- Receive summarized content in multiple local languages.
- Query specific sections of the document for detailed insights.

---

## 💡 Key Features

- **Abstractive & Extractive Summaries**: Generates both types of summaries for better understanding.
- **Multi-Language Support**: Summaries are provided in languages such as Hindi, Gujarati, Marathi, and more.
- **Document Querying**: Allows users to ask specific questions about legal documents.
- **User-Friendly Interface**: Intuitive design to simplify the user experience.
- **File Format Support**: Accepts PDF, TXT, DOCX files for uploading and summarization.

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (index.html)
- **Backend**: Python, Flask, PEFT (Parameter-Efficient Fine-Tuning), Hugging Face Transformers, Google Translator API
- **Models**: Facebook's BART (Fine-tuned with legal datasets)
- **Libraries**:
  - `Flask`: Web framework for handling API requests.
  - `PyPDF2`: For extracting text from PDFs.
  - `docx`: To handle DOCX files.
  - `googletrans`: For translating text into different languages.
  - `peft`: For loading the fine-tuned BART model.
  - `transformers`: For handling NLP model tokenization and summarization.

---

## ⚙️ Setup and Installation

### Prerequisites

Make sure you have the following installed:

- Python 3.8 or higher
- Flask
- Hugging Face's `transformers` and `peft`
- Google Translator API access

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/LUFY.git
   cd LUFY
   ```

2. **Install the Required Libraries**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Application**:
   - To start the backend Flask server, run:
     ```bash
     python apis.py
     ```
   - This will launch the backend server at `http://localhost:5000`.

4. **Access the Frontend**:
   - Open the `index.html` file in a web browser to view the user interface for uploading files and querying summaries.

---

## 💻 Usage Instructions

### Frontend

1. **Upload Files**:
   - Navigate to the homepage and upload your desired legal document (PDF, DOCX, or TXT).
   
2. **Select Language**:
   - Choose your preferred language for the summary (Hindi, Gujarati, Marathi, etc.).
   
3. **Summarize**:
   - Click the **Summarize** button to generate a concise, easy-to-understand summary of the uploaded document.

4. **Query the Document**:
   - Ask questions about specific sections or content of the document to gain better insights.

### Backend

- The backend runs using **Flask** APIs to handle file uploads, text summarization, translation, and querying. Once the user uploads a file or inputs a query, the backend processes it and responds with a summary or relevant document details.

---

## 🔌 API Endpoints

### 1. **Summarize Text**
   - **Endpoint**: `/summarizetext`
   - **Method**: POST
   - **Description**: Generates a summary of the provided text.
   - **Parameters**:
     - `text`: The text to be summarized.
     - `language`: Target language for the summary (e.g., `hi` for Hindi, `gu` for Gujarati).
   - **Response**: JSON object containing the summarized text in the requested language.

### 2. **Summarize Document**
   - **Endpoint**: `/summarisedoc`
   - **Method**: POST
   - **Description**: Summarizes an uploaded document.
   - **Parameters**:
     - `file`: The file (PDF, DOCX, or TXT) to be summarized.
     - `language`: Target language for the summary.
     - `checkbox`: Boolean to check if the user selected for abstractive or abstractive summarization.
   - **Response**: JSON object containing the summarized text.

### 3. **Query Document**
   - **Endpoint**: `/query`
   - **Method**: POST
   - **Description**: Responds to a query based on the content of the uploaded document.
   - **Parameters**:
     - `language`: Target language for the query.
   - **Response**: JSON object with the response in the target language.

---

## 🎨 Frontend Overview

The frontend is designed using **HTML** and **CSS** for simplicity, allowing users to upload documents, select languages, and perform queries in a user-friendly manner.

- **Homepage**: Features options for document uploads, language selection, and querying.
- **Testimonials Section**: Showcases positive feedback from users.
- **Contact Form**: Allows users to send feedback or inquiries.

---

## 🛠 Backend Overview

The backend is developed with **Flask**, handling the following functionalities:

1. **Document Upload**: Accepts documents in various formats (PDF, DOCX, TXT).
2. **Summarization**: Utilizes the fine-tuned BART model for generating summaries.
3. **Translation**: Uses Google Translate API to translate summaries into multiple local languages.
4. **Querying**: Allows users to ask specific questions about legal documents and retrieve detailed answers.

---

## 🚀 Future Improvements

- **Enhanced Document Parsing**: Improve support for complex legal document structures.
- **Expanded Language Support**: Add more local languages to further increase accessibility.
- **Customizable Summarization**: Allow users to select the level of summary detail (e.g., short, medium, detailed).
- **Improved Querying**: Enhance the document querying process with more advanced NLP models.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Enjoy using **LUFY** and make your legal documents easy to understand! 😊
