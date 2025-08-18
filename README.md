NITAssist – Smart Academic Resource & Support Platform

Problem Statement:-

In colleges like NIT Agartala, students often face difficulties in accessing academic resources such as subject notes, important files, and department-specific study material.
Currently, most sharing happens informally through messaging apps, leading to Inefficiency,Duplication of content,Lack of structured access
There is a need for a centralized platform where students can upload, access, and manage academic content efficiently, while ensuring smooth interaction across departments.
NITAssist bridges this gap by providing a dedicated, role-based platform for managing academic resources with authentication and structured access.

What It Does?

NITAssist is a full-stack web platform designed for students, offering:

1.Smart File Uploads – Upload notes/files locally or via Google Drive link.

2.Department & Subject Filtering – Organized retrieval of resources by branch and subject.

3.Multi-role User Access – Students get personalized dashboards with authentication.

4.Profile Management – View uploads, edit personal info, and track contributions.

5.Feedback System – Students can directly send feedback to admins via email.

How We Solve the Problem?

1.Upload Resources → Students can upload PDFs, notes, or presentations (local or via Drive link). Files are stored securely in MongoDB + Cloudinary.

2.Organized Retrieval → Resources are categorized by department and subject with search functionality.

3.Authentication & Security → JWT-based authentication with tokens stored in localStorage.

4.Feedback & Communication → Built-in Nodemailer system to send suggestions to admins.

5.Profile & Dashboard → Personalized dashboard to track uploads and manage profile.

Key Features:-

1.For Students-

a.Upload notes, slides, and past papers.

b.Access categorized notes based on department and subject.

c.Search and filter uploaded content.

d.Manage and track personal uploads.

2.File Management-

a.Local uploads with Multer + Cloudinary.

b.Upload via Google Drive links.

c.Delete uploaded files directly from dashboard.

3.Communication-

a.Integrated feedback form with Nodemailer.

b.Direct communication with admins.

Tech Stack:-

1.Frontend

a.React.js (Vite)

b.Tailwind CSS + Daisy UI

c.Redux Toolkit (state management)

d.Axios with reusable apiConnector

2.Backend

a.Node.js + Express.js

b.JWT Authentication

c.Multer (file uploads)

d.Cloudinary (cloud storage)

e.Nodemailer (feedback emails)

f.MongoDB + Mongoose

User Flow:-

1.Sign Up / Login → Authenticate via JWT.

2.Upload File → Upload notes/files locally or via Drive link.

3.Filter & Access → Retrieve resources by department and subject.

4.Manage Profile → Track and edit uploads and personal info.

5.Give Feedback → Submit suggestions to admins.

**Frontend:** https://nit-assist.vercel.app/

**Backend:** https://nit-assist-backend.vercel.app/ 
