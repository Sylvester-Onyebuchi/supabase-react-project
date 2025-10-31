Project Name: Supabase-react-project

A modern authentication demo built with React, Vite, TailwindCSS, and Supabase. Supports email/password login and registration with real-time feedback using toast notifications.

⚡ Features

Authentication: Register, login, logout using Supabase.

Protected routes: Users can only access protected pages when logged in.

Real-time notifications: Success and error messages with react-hot-toast.

Modern frontend stack: React + Vite + TailwindCSS for fast and responsive UI.

Clean architecture: Context API for auth state management.

🛠 Tech Stack
Layer	Technology
Frontend	React, Vite, TailwindCSS
Authentication	Supabase (PostgreSQL + Auth API)
Notifications	react-hot-toast
Routing	react-router-dom


🚀 Installation

Clone the repository

git clone https://github.com/Sylvester-Onyebuchi/supabase-react-project.git
cd supabase-react-project


Install dependencies

npm install


Setup Supabase

Create a project on Supabase
https://supabase.com/

Get your SUPABASE_URL and SUPABASE_ANON_KEY from the project settings.

Create a .env file in the root of your project:

VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key


Run the project

npm run dev
