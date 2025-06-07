// src/Router.tsx (MODIFIED)

import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/app-layout'
import NotMatch from './pages/NotMatch'
import Sample from './pages/Sample'
import ComingSoon from './pages/ComingSoon'
import HomePage from './pages/Homepage'
import ChatBot from './pages/ChatBot'
import StatistikUser from './pages/StatistikUser'
import Course from './pages/Course'
import CourseDetail from './pages/CourseDetail'
import Tryout from './pages/Tryout'
import TryoutDetail from './pages/TryoutDetail'
import Login from './pages/Login'
import Register from './pages/Register'

export default function Router() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="" element={<HomePage />} />
                <Route path="sample" element={<Sample />} />
                <Route path="feature" element={<ComingSoon />} />
                <Route path="chatbot" element={<ChatBot />} />
                <Route path="statistik-user" element={<StatistikUser />} />
                <Route path="course" element={<Course />} />
                {/* PERUBAHAN DI SINI: Dari :id menjadi :slug */}
                <Route path="course/:slug" element={<CourseDetail />} /> 
                <Route path="tryout" element={<Tryout />} />
                <Route path="tryout/:id" element={<TryoutDetail />} />
                <Route path="*" element={<NotMatch />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    )
}