# 💼 Smart Accounting System

A simple and efficient accounting system designed to help users manage income and expenses, perform automatic calculations, and generate financial summaries with ease.

---

## 📖 Project Overview

The **Smart Accounting System** is a software application developed to simplify basic accounting tasks.  
It allows users to record income and expenses, track financial activities, and generate organized reports to support better financial decision-making.

This project focuses on clarity, accuracy, and structured system design, making it suitable for educational purposes and small-scale financial management.

---

## 🚀 Key Features

- 💰 Income and expense tracking  
- 📊 Financial summaries and reports  
- 🧮 Automatic balance calculations  
- 🗂️ Organized financial data management  
- 🔐 Simple and user-friendly interface  

---

## 🧩 System Design

### Entity-Relationship Diagram (ERD)

The **Entity-Relationship Diagram (ERD)** represents the core data structure of the Smart Accounting System and illustrates how financial data is organized and connected.

The ERD defines the relationships among key entities such as:
- **Users**
- **Income**
- **Expenses**
- **Financial Reports**

Each user can record multiple income and expense entries, forming one-to-many (1:N) relationships.  
Financial reports summarize income and expense data to calculate totals and balances.

The ERD is designed to ensure data consistency and support future extensions such as budgeting and advanced analytics.

---
## Wireframe Design

The system interface follows a structured wireframe design focused on simplicity and usability.

  Each screen layout was designed to:

- Reduce navigation time

- Provide clear access to income, expense, and report features

- Present financial data in an organized and readable format
---
 ##  Technology Overview
 -Layer:	Description
Frontend:	Desktop-based application
Application Logic	Handles accounting rules and calculations
Language:	Java / C# / Python
Styling	Standard UI components
Data Layer:	Local file storage / in-memory data
Future Integration:	Database
--- 
###📂 Project Architecture
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
---
###👩‍💻 Developed By

- Menna Adel

- Shahd Daymann

- Sama

- Malak

-🎓 Computer Science Students
-📍 Nile Universit
