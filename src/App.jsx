import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// pages
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Goals from "./pages/Goals";
import NotFound from "./pages/NotFound";
import PlanPayment from "./pages/PlanPayment";
import RecordStatistics from "./pages/RecordStatistics";
import SetBalance from "./pages/SetBalance";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
// add
import AddBudget from "./Add/AddBudget";
import AddGoal from "./Add/AddGoal";
import AddPayment from "./Add/AddPayment";

// manage
import ManageBalance from "./Manage/ManageBalance";
import ManageGoal from "./Manage/ManageGoal";
import ManagePayment from "./Manage/ManagePayment";

// component
import Navbar from "./components/Navbar";

// auth
import Login from "./auth/Login";
import Forgot from "./auth/Forgot";
import OTPassword from "./auth/OTPassword";
import Reset from "./auth/Reset";
import Signup from "./auth/Signup";

function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<OTPassword />} />
        <Route path="/reset" element={<Reset />} />

        <Route path="*" element={<NotFound />} />

        <Route element={<Navbar/>}>
        
          {/* show nav from here */}
          <Route path="/set-balance" element={<SetBalance />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/planpayment" element={<PlanPayment />} />
          <Route path="/recordstatistics" element={<RecordStatistics />} />
          <Route path="/wallet" element={<Wallet />} />

          <Route path="/add-budget" element={<AddBudget />} />
          <Route path="/add-goal" element={<AddGoal />} />
          <Route path="/add-payment" element={<AddPayment />} />

          <Route path="/manage-balance" element={<ManageBalance />} />
          <Route path="/manage-goal" element={<ManageGoal />} />
          <Route path="/manage-payment" element={<ManagePayment />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* to here */}
        
        </Route>
      </Routes>
      </div>
    </Router >
  )
}

export default App
