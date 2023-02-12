import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogContainer from "./containers/Blog.container";
import ProjectsContainer from "./containers/Projects.container";
import RootContainer from "./containers/Root.container";
import BlogArticleIdPage from "./pages/blog/BlogArticleId.page";
import BlogHomePage from "./pages/blog/BlogHome.page";
import ContactPage from "./pages/Contact.page";
import HomePage from "./pages/Home.page";
import ProjectsHomePage from "./pages/projects/ProjectsHome.page";
import ProjectsIdPage from "./pages/projects/ProjectsId.page";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootContainer />}>
                    
                    <Route index element={<HomePage/>} />
                    
                    <Route path="/blog" element={<BlogContainer />}>
                        <Route index element={<BlogHomePage /> }/>
                        <Route path="/blog/:article_id" element={<BlogArticleIdPage />} />
                    </Route>
                    
                    <Route path="/projects" element={<ProjectsContainer />}>
                        <Route index element={<ProjectsHomePage /> } />
                        <Route path="/projects/:project_id" element={<ProjectsIdPage /> } />
                    </Route>

                    <Route path="/contact" element={<ContactPage />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter