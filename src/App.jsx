import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import UseCases from "./pages/UseCases";
import Team from "./pages/Team";
import Roadmap from "./pages/Roadmap";
import News from "./pages/News";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-[var(--page-bg)] text-slate-900 flex flex-col justify-between">

        <div className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">

          <div className="mx-auto max-w-6xl px-6 py-1 lg:px-8">
            <Header />
          </div>

        </div>

        <section className="flex-grow">
          <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projeto" element={<Project />} />
              <Route path="/usecases" element={<UseCases />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/noticias" element={<News />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </section>

        <Footer />

      </main>
    </Router>
  );
}
