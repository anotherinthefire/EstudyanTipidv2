const Budget = () => {
  return (
    <div className="">
      <h1 className="text-white text-3xl font-bold underline text-center py-4">BUDGET</h1>
      <div className="p-4 mt-4 mx-4 bg-white border rounded-lg">
        <table className="w-full">
          <tbody>
            <tr>
              <td>Personal Expenses</td>
              <td className="text-center">As of January 2023</td>
              <td className="text-right"><span className="text-esgreen">Total Budget:</span> ₱5000</td>
            </tr>
            <tr className="h-10">

            </tr>
            <tr>
              <td>-₱4000 <span className="text-esred">Budgeted Deductions</span></td>
              <td></td>
              <td className="text-right"><span className="text-esgreen">Budgeted Savings:</span> ₱1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Budget