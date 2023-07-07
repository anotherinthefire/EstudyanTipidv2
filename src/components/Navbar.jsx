import { useState } from "react"
import { Outlet } from "react-router-dom"
import logo from '../assets/EstudyanTipid-logo white.png'
import { Link } from "react-router-dom"
import { ReactComponent as Wallet } from '../assets/svg/wallet.svg';
import { ReactComponent as Record } from '../assets/svg/record.svg';
import { ReactComponent as Goals } from '../assets/svg/goals.svg';
import { ReactComponent as Payment } from '../assets/svg/payment.svg';
import { ReactComponent as Budget } from '../assets/svg/cash.svg';
import { ReactComponent as Drop } from '../assets/svg/drop.svg';
import { ReactComponent as Burger } from '../assets/svg/burger.svg';
import { ReactComponent as Logout } from '../assets/svg/logout.svg';
import ultra from '../assets/profile/ultra.jfif'

const Navbar = () => {
    const [open, setOpen] = useState(true)
    const [BudgetmenuOpen, BudgetSubmenuOpen] = useState(false)
    const [GoalsmenuOpen, GoalsSubmenuOpen] = useState(false)
    const [PaymentmenuOpen, PaymentSubmenuOpen] = useState(false)

    return (
        <div className="flex">

            <div className={`bg-esblack h-screen p-5 text-white ${open ? "w-20" : "w-72"} duration-300 relative`}>

                {/* burger */}
                <Burger
                    className="w-8 h-8 absolute -right-11 cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
                <Link to="/wallet">
                    {/* logo */}
                    <div className="inline-flex">
                        <img src={logo} className={`cursor-pointer block float-left h-8 w-8 duration-500 ${!open ? "rotate-[360deg]" : "rotate-[360deg"}`} />
                        <h1 className={`origin-left text-2xl pl-2 font-bold duration-300 ${!open ? "scale-100" : "scale-0"}`}>Estudyan<span className="text-esgreen">Tipid</span></h1>
                    </div>
                </Link>
                <div>
                </div>

                <Link to="/profile">
                    <div className="flex flex-col items-center mt-6 hover:text-esyellow">
                        <div className={`hover:bg-esyellow  p-1 ${!open ? "rounded-full" : "rounded-lg"}`}>
                            <img className={`object-cover rounded-full duration-300 ${!open ? "w-24 h-24" : "w-10 h-10 rounded-lg"}`} src={ultra} alt="avatar" />
                        </div>
                        <h4 className={`mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 duration-300  ${!open ? "scale-100" : "scale-0"}`}>Ron Ultra</h4>
                        <p className={`mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 duration-300 ${!open ? "scale-100" : "scale-0"}`}>rongodfreyultra@gmail.com</p>
                    </div>
                </Link>

                <span className="block w-full h-px bg-white my-3"></span>

                <ul className="pt-2">

                    <Link to="/wallet">
                        <li className={`flex items-center gap-x-4 cursor-pointer rounded-lg p-2 hover:bg-esyellow hover:text-esblack mt-2`}>
                            <span className="block  float-left">
                                <Wallet />
                            </span>
                            <span className={`text-base font-medium flex-1 duration-300 ${!open ? "scale-100" : "scale-0"}`}>Wallet</span>
                        </li>
                    </Link>

                    <Link to="/recordstatistics">
                        <li className={`flex items-center gap-x-4 cursor-pointer rounded-lg p-2 hover:bg-esyellow hover:text-esblack mt-2`}>
                            <span className="block  float-left">
                                <Record />
                            </span>
                            <span className={`text-base font-medium flex-1 duration-300 ${!open ? "scale-100" : "scale-0"}`}>Record</span>
                        </li>
                    </Link>


                    <li className="flex items-center gap-x-4 cursor-pointer rounded-lg p-2 hover:bg-esyellow hover:text-esblack mt-2">
                        <Link to="/budget" className="flex items-center flex-1">
                            <span className="pr-4">
                                <Budget />
                            </span>
                            <span className={`text-base font-medium duration-300 ${!open ? "scale-100" : "scale-0"}`}>Budget</span>
                        </Link>
                        <Drop
                            className={`w-6 h-6 duration-300 ${BudgetmenuOpen && "rotate-180"}`}
                            onClick={() => BudgetSubmenuOpen(!BudgetmenuOpen)}
                        />
                    </li>

                    {BudgetmenuOpen && (
                        <ul>
                            <li className="flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:text-esyellow">
                                Add Budget
                            </li>

                            <li className="flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:text-esyellow">
                                Manage Budget
                            </li>
                        </ul>
                    )}

                    <li className={`flex items-center gap-x-4 cursor-pointer rounded-lg p-2 hover:bg-esyellow hover:text-esblack mt-2`}>
                        <Link to="/goals" className="flex items-center flex-1">
                            <span className="pr-4">
                                <Goals />
                            </span>
                            <span className={`text-base font-medium duration-300 ${!open ? "scale-100" : "scale-0"}`}>Goals</span>
                        </Link>
                        <Drop
                            className={`w-6 h-6 duration-300 ${GoalsmenuOpen && "rotate-180"}`}
                            onClick={() => GoalsSubmenuOpen(!GoalsmenuOpen)}
                        />
                    </li>
                    {GoalsmenuOpen && (
                        <ul>
                            <li className="flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:text-esyellow">
                                Add Goals
                            </li>

                            <li className="flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:text-esyellow">
                                Manage Goals
                            </li>
                        </ul>
                    )}

                    <li className={`flex items-center gap-x-4 cursor-pointer rounded-lg p-2 hover:bg-esyellow hover:text-esblack mt-2`}>
                        <Link to="/planpayment" className="flex items-center flex-1">
                            <span className="pr-4">
                                <Payment />
                            </span>
                            <span className={`text-base font-medium duration-300 ${!open ? "scale-100" : "scale-0"}`}>Planned Payment</span>
                        </Link>
                        <Drop
                            className={`w-6 h-6 duration-300 ${PaymentmenuOpen && "rotate-180"}`}
                            onClick={() => PaymentSubmenuOpen(!PaymentmenuOpen)}
                        />
                    </li>
                    {PaymentmenuOpen && (
                        <ul>
                            <li className="flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:text-esyellow">
                                Add Payment
                            </li>

                            <li className="flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:text-esyellow">
                                Manage Payment
                            </li>
                        </ul>
                    )}
                    <span className="block w-full h-px bg-white my-3"></span>

                    <li className={`flex items-center gap-x-4 cursor-pointer rounded-lg p-2 hover:bg-esyellow hover:text-esblack mt-2`}>
                        <span className="block float-left rotate-180">
                            <Logout />
                        </span>
                        <span className={`text-base font-medium flex-1 duration-300 ${!open ? "scale-100" : "scale-0"}`}>Logout</span>
                    </li>
                </ul>

            </div>
            <div className="overflow-y-scroll h-screen">
                <Outlet />
            </div>
        </div>
    )
}

export default Navbar