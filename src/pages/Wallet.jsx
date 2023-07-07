import { ReactComponent as WalletIcon } from '../assets/svg/wallet.svg';
import { ReactComponent as Goals } from '../assets/svg/goals.svg';
import { ReactComponent as Cash } from '../assets/svg/cash.svg';

const Wallet = () => {
  const features = [
    {
      icon:
        <Cash />
      ,
      title: "CASH",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
    },
    {
      icon:
        <Goals />
      ,
      title: "GOALS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
    },
    {
      icon:
      <WalletIcon />
      ,
      title: "Budget Remaining",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
    }
  ]
  return (
    <div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                features.map((item, idx) => (
                  <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                    <div className="text-indigo-600 pb-3">
                      {item.icon}
                    </div>
                    <h4 className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p>
                      {item.desc}
                    </p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wallet