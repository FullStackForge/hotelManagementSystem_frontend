import DashboardSidebar from "@/components/User/DashboardSidebar";
export default function Page() {
    return (
      <div className="flex space-x-12">
        <div className="left">
          <DashboardSidebar />
        </div>
        <div className="right">
            <p className="text-5xl m-8">Payment Logs</p>
            <div>
                <table className="table-auto border border-red-700">
                    <thead>
                        <tr className="">
                            <th className="border border-red-700 px-8">Payment Date</th>
                            <th className="border border-red-700 px-12">Detail</th>
                            <th className="border border-red-700 px-8">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20oct2024</td>
                            <td>
                                <p className="font-bold">2rooms</p>
                                <p>20oct to 23oct</p>

                            </td>
                            <td><a href="">HMS-123</a>
                                <p>15000</p>
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