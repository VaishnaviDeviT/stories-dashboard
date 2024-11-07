import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "./components/Layout/Users/LoginForm";
import ProtectedRoute from "./components/Layout/Users/ProtectedRoute";
import Topnavigation from "./components/Layout/Topnavigation";
import ForgotPassword from "./components/Layout/Users/ForgotPassword";
import Dashboard from "./components/Layout/Dashboard";
import CategoryAdd from "./components/Elements/CategoryAdd";
// import Story from "./components/Elements/Story";
import PublishedStory from "./components/Elements/PublishedStory";
import Reports from "./components/Elements/Reports";
import EditStory from "./components/Elements/EditStory";
import UnpublishedStory from "./components/Elements/UnpublishedStory";
import Footer from "./components/Layout/Footer";
import AddStory from "./components/Elements/AddStory";
import Like from "./components/Elements/Like";
import Category from "./components/Elements/Category";

function App() {
  const location = useLocation();


  const noFooterRoutes = ["/", "/forgotpassword"];

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} /> 
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Topnavigation />
            </ProtectedRoute>
          }
        > 
          <Route index element={<Dashboard />} />  
          <Route path="addcategory" element={<CategoryAdd />} />
          <Route path="publish" element={<PublishedStory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="editstories" element={<EditStory />} /> 
          <Route path="unpublish" element={<UnpublishedStory />} />
          <Route path="addstories" element={<AddStory />} />
          {/* <Route path="like" element={<Like />} /> */}
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>

   
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
