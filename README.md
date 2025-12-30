#  Smart Accounting System

A simple and efficient accounting system designed to help users manage income and expenses, perform automatic calculations, and generate financial summaries with ease.

---

##  Project Overview

The **Smart Accounting System** is a software application developed to simplify basic accounting tasks.  
It allows users to record income and expenses, track financial activities, and generate organized reports to support better financial decision-making.

This project focuses on clarity, accuracy, and structured system design, making it suitable for educational purposes and small-scale financial management.

---

## Key Features

- Income and expense tracking  
- Financial summaries and reports  
- Automatic balance calculations  
- Organized financial data management  
- Simple and user-friendly interface  

---

## System Design

### Entity-Relationship Diagram (ERD)

The ERD defines the relationships among key entities such as:

- **Users**  
- **Income**  
- **Expenses**  
- **Financial Reports**

Each user can record multiple income and expense entries, and reports summarize financial data to calculate totals and balances.  
The design supports future extensions such as budgeting, expense categories, and payment methods.

---
## Project Architecture

```
src/
 ├── user/
 │   ├── login.*                 → User authentication
 │   ├── profile.*               → User information management
 │
 ├── income/
 │   ├── add-income.*            → Add income records
 │   ├── view-income.*           → View income history
 │
 ├── expense/
 │   ├── add-expense.*           → Add expense records
 │   ├── view-expense.*          → View expense history
 │
 ├── reports/
 │   ├── generate-report.*       → Generate financial reports
 │
 ├── components/
 │   ├── Navigation.*            → Application navigation
 │   ├── Forms.*                 → Shared UI components
 │
 └── assets/
     └── Icons, images, and visual resources

```

---
---
### Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shahddaymann27/smart-accounting-system.git
  
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npx expo start
   ```

4. **Access the app**
   - Scan the QR code with Expo Go (on your mobile), or  
   - Run on an emulator (`i` for iOS / `a` for Android)

---


Open the project in your preferred IDE (e.g., Visual Studio).

Build and run the application.
---
### Technologies Used

Programming Language: Java / C# / Python

IDE: Visual Studio

Version Control: Git & GitHub
---
## Developed By

Menna Adel

Shahd Daymann

Sama

Malak

🎓Computer Science Students
📍 Nile University
## Documentation 
- `account system.drawio` — Database structure and entity relationships  
- `.pdf` — Interface wireframe and navigation flow  
- `.pdf` — System workflow outlining data and process flow  
---
# Client Portal Application

## Features Implemented
1. **Book Appointment Screen** - Complete with form fields and navigation
2. **Home Screen** - Main dashboard with navigation buttons
3. **Database Schema** - MySQL tables for the application

## Installation
```bash
npm install
npm start
