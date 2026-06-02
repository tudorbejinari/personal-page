import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ErrorBoundary from "./components/ErrorBoundary"
import ScrollToTop from "./components/ScrollToTop"

const Home        = lazy(() => import("./pages/Home"))
const Experience  = lazy(() => import("./pages/Experience"))
const Articles    = lazy(() => import("./pages/Articles"))
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"))
const About       = lazy(() => import("./pages/About"))
const Contact     = lazy(() => import("./pages/Contact"))
const NotFound    = lazy(() => import("./pages/NotFound"))

function PageLoader() {
  return <div className="flex-1 min-h-[60vh] bg-navy-950" />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/"               element={<Home />} />
                <Route path="/experience"     element={<Experience />} />
                <Route path="/articles"       element={<Articles />} />
                <Route path="/articles/:id"   element={<ArticleDetail />} />
                <Route path="/about"          element={<About />} />
                <Route path="/contact"        element={<Contact />} />
                <Route path="*"              element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
