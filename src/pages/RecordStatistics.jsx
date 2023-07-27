import { useState, useRef, useEffect } from "react"
import record from "../data/record"

const RecordStatistics = () => {
  const menuItems = [
    ["Normal", "bg-blue-600", "text-blue-600"],
    ["Error", "bg-red-600", "text-red-600"],
    ["Pending", "bg-teal-600", "text-teal-600"],
    ["Canceled", "bg-gray-300", "text-gray-600"],
    ["Reviewing", "bg-fuchsia-600", "text-fuchsia-600"],
  ]

  const [selectedItem, setSelectedItem] = useState({
    item: menuItems[0],
    idx: 0
  })
  const [state, setState] = useState(false)
  const selectMenuRef = useRef()

  useEffect(() => {

    const handleSelectMenu = (e) => {
      if (!selectMenuRef.current.contains(e.target)) {
        setState(false)
      }
    }

    document.addEventListener('click', handleSelectMenu)

  }, [])

  return (
    <div className="flex flex-wrap">
      {/* dropdown */}
      <div className="w-1/2 p-4">
        <div className="relative max-w-xs text-base z-20 mx-0 2xl:mx-auto">
          <button ref={selectMenuRef} className="flex items-center justify-between gap-2 w-full px-3 py-2 text-gray-500 bg-white border rounded-md shadow-sm cursor-default outline-none focus:border-indigo-600"
            aria-haspopup="true"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={() => setState(!state)}
          >
            <div className="flex items-center gap-x-3">
              Sort <span className={`w-2 h-2 rounded-full ${selectedItem.item[1]}`}></span>
              <span className={`text-sm ${selectedItem.item[2]}`}>{selectedItem.item[0]}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {
            state ? (
              <div className="relative w-full">
                <ul className="absolute w-full mt-3 overflow-y-auto bg-white border rounded-md shadow-sm max-h-64" role="listbox">
                  {
                    menuItems.map((el, idx) => (
                      <li
                        key={idx}
                        onClick={() => setSelectedItem({
                          item: el,
                          idx
                        })}
                        role="option"
                        aria-selected={selectedItem.idx == idx ? true : false}
                        className={`${selectedItem.idx == idx ? 'text-indigo-600 bg-indigo-50' : ''} flex items-center justify-between gap-2 px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50`}
                      >
                        <div className="flex items-center gap-x-3">
                          <span className={`w-2 h-2 rounded-full ${el[1]}`}></span>
                          {el[0]}
                        </div>
                        {
                          selectedItem.idx == idx ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : ''
                        }
                      </li>
                    ))
                  }
                </ul>
              </div>
            ) : ''
          }
        </div>
      </div>

      {/* search bar */}
      <div className="w-1/2 p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-md ml-40">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
      </div>

      {/* table */}
      <div className="w-full p-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="mt-12 relative h-max overflow-auto bg-white rounded-lg p-8 border">
            <table className="w-full table-auto text-sm text-center ">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 pr-6">name</th>
                  <th className="py-3 pr-6">date</th>
                  <th className="py-3 pr-6">status</th>
                  <th className="py-3 pr-6">price</th>
                  <th className="py-3 pr-6"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {
                  record.map((item, idx) => (
                    <tr key={idx}>
                      <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                      <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                      <td className="pr-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Active" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                      <td className="text-center whitespace-nowrap">
                        <a href="javascript:void()" className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                          View
                        </a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RecordStatistics