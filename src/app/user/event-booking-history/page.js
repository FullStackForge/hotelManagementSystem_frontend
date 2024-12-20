import DashboardSidebar from "@/components/User/DashboardSidebar";
export default function Page() {
    return (
      <div className="flex space-x-12">
        <div className="left">
          <DashboardSidebar />
        </div>
        <div className="right">
            <p className="text-5xl m-8">Booking History</p>
            <div>
                <table className="table-auto border border-red-700">
                    <thead>
                        <tr className="">
                            <th className="border border-red-700 px-8">Date</th>
                            <th className="border border-red-700 px-12">Detail</th>
                            <th className="border border-red-700 px-12">Invoice</th>
                            {/* <th className="border border-red-700 px-8">Amount</th>
                            <th className="border border-red-700 px-8">Status</th> */}
                            <th className="border border-red-700 px-8">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20oct2024</td>
                            <td>
                                <p className="font-bold">Bday Party</p>
                                <p>20 Guests</p>

                            </td>
                            <td><a href="">HMS-123</a>
                                <p>15000</p>
                                <p>Due</p>
                            </td>
                            <td className="flex flex-col">
                                <a href="">Cancel</a>
                                <a href="">Pay Now</a>
                            </td>
                        </tr>
                        <tr>
                            <td>20oct2024</td>
                            <td>
                                <p className="font-bold">Bday Party</p>
                                <p>20 Guests</p>

                            </td>
                            <td><a href="">HMS-123</a>
                                <p>15000</p>
                                <p>Paid</p>
                            </td>
                            <td className="flex flex-col">
                                <a href="">Support</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
  // for bar chart refer video 22