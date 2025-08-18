📚 NITAssist – Smart Academic Resource & Support Platform
🚩 Problem Statement

In colleges like NIT Agartala, students often face difficulties in finding academic resources such as subject notes, important files, and department-specific study material. Existing systems are scattered, relying on informal sharing through messaging apps, which leads to inefficiency, duplication, and lack of structured access.

There is a need for a centralized platform where students can easily upload, access, and manage academic content, while ensuring smooth interaction across departments and user roles.

NITAssist bridges this gap by providing a dedicated platform for students to manage resources, connect through authenticated profiles, and collaborate effectively.

🌟 What It Does

NITAssist is a full-stack platform built for students, offering:

📂 Smart File Uploads – Upload notes or files directly or via drive link.

🏷️ Department & Subject Filtering – Access resources categorized by branch and subject.

👥 Multi-role User Access – Students get personalized dashboards with authentication.

📊 Profile Management – Update personal info, view uploads, and manage contributions.

📢 Feedback System – Submit feedback that directly reaches admins via email.

🛠️ How We Solve the Problem

Upload Resources

Students can upload files (PDFs, notes, presentations) either locally or via drive link.

Files are stored securely in MongoDB + Cloudinary with proper categorization.

Organized Retrieval

Filter files by department → subject.

Search functionality for quick access.

Authentication & Security

Role-based access with JWT authentication.

Tokens stored securely in localStorage for persistent login.

Feedback & Communication

Students can send suggestions/feedback.

Feedback is sent via Nodemailer to the admin for quick action.

Profile & Dashboard

Every user gets a profile dashboard showing uploaded files and personal data.

Easy management of contributions.

🔑 Key Features
👩‍🎓 For Students

Upload academic resources (notes, slides, past papers).

Access categorized notes based on department/subject.

Search and filter uploaded content.

Track their own uploads and manage profile.

📂 For File Management

Local uploads using Multer + Cloudinary.

Drive link submission option for external storage.

Delete files directly from dashboard.

📧 For Communication

Feedback form integrated with Nodemailer.

Seamless communication with admins.

🛠️ Tech Stack
Frontend

⚛️ React.js (Vite)

🎨 Tailwind CSS

🧩 Redux Toolkit for state management

🔄 Axios with reusable apiConnector

Backend

🟢 Node.js + Express.js

🔑 JWT Authentication

📦 Multer (File Uploads)

☁️ Cloudinary (Cloud Storage)

📬 Nodemailer (Feedback emails)

🍃 MongoDB + Mongoose

🚀 User Flow

Sign Up / Login → Authenticate using JWT.

Upload File → Add notes via local file or drive link.

Filter & Access → Retrieve resources by subject/department.

Manage Profile → View & edit uploads and personal info.

Give Feedback → Submit suggestions directly to admin.

## Live Deployment

**Frontend:** https://nit-assist.vercel.app/

**Backend:** https://nit-assist-backend.vercel.app/ 
