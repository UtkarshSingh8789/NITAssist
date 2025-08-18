# NITAssist – Smart Academic Resource & Support Platform

## 🚀 Problem Statement
In colleges like **NIT Agartala**, students often face difficulties in accessing academic resources such as subject notes, important files, and department-specific study material.  
Currently, most sharing happens informally through messaging apps, leading to:

- Inefficiency  
- Duplication of content  
- Lack of structured access  

There is a need for a centralized platform where students can **upload, access, and manage academic content efficiently**, while ensuring smooth interaction across departments.  
**NITAssist bridges this gap** by providing a dedicated, role-based platform for managing academic resources with authentication and structured access.

---

## 💡 What It Does
**NITAssist** is a full-stack web platform designed for students, offering:

1. **Smart File Uploads** – Upload notes/files locally or via Google Drive link.  
2. **Department & Subject Filtering** – Organized retrieval of resources by branch and subject.  
3. **Multi-role User Access** – Students get personalized dashboards with authentication.  
4. **Profile Management** – View uploads, edit personal info, and track contributions.  
5. **Feedback System** – Students can directly send feedback to admins via email.

---

## ⚙️ How We Solve the Problem

1. **Upload Resources** → Students can upload PDFs, notes, or presentations (local or via Drive link). Files are stored securely in **MongoDB + Cloudinary**.  
2. **Organized Retrieval** → Resources are categorized by department and subject with search functionality.  
3. **Authentication & Security** → **JWT-based authentication** with tokens stored in localStorage.  
4. **Feedback & Communication** → Built-in **Nodemailer system** to send suggestions to admins.  
5. **Profile & Dashboard** → Personalized dashboard to track uploads and manage profile.

---

## 🌟 Key Features

### 👩‍🎓 For Students
- Upload notes, slides, and past papers  
- Access categorized notes based on department and subject  
- Search and filter uploaded content  
- Manage and track personal uploads  

### 📂 File Management
- Local uploads with **Multer + Cloudinary**  
- Upload via **Google Drive links**  
- Delete uploaded files directly from dashboard  

### 📢 Communication
- Integrated feedback form with **Nodemailer**  
- Direct communication with admins  

---

## 🛠 Tech Stack

### Frontend
- React.js (**Vite**)  
- Tailwind CSS + DaisyUI  
- Redux Toolkit (state management)  
- Axios with reusable `apiConnector`  

### Backend
- Node.js + Express.js  
- JWT Authentication  
- Multer (file uploads)  
- Cloudinary (cloud storage)  
- Nodemailer (feedback emails)  
- MongoDB + Mongoose  

---

## 🔄 User Flow
![NITAssist User Flow](./assets/images/nitassist-flow.png)
1. **Sign Up / Login** → Authenticate via JWT  
2. **Upload File** → Upload notes/files locally or via Drive link  
3. **Filter & Access** → Retrieve resources by department and subject  
4. **Manage Profile** → Track and edit uploads and personal info  
5. **Give Feedback** → Submit suggestions to admins  

---

## 🌐 Deployment
- **Frontend:** [NITAssist Frontend](https://nit-assist.vercel.app/)  
- **Backend:** [NITAssist Backend](https://nit-assist-backend.vercel.app/)  

---

## 👨‍💻 Authors
- Utkarsh Kumar – Developer (B.Tech ECE, NIT Agartala)


