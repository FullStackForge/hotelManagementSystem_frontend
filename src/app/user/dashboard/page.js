import DashboardSidebar from "@/components/User/DashboardSidebar";
export default function Page() {
  return (
    <div className="flex space-x-12">
      <div className="left">
        <DashboardSidebar />
      </div>
      <div className="right">
        <div className="flex">
          <div className="border">
            <p>Total bookings</p>
            <a href="">12312312</a>
          </div>
          <div className="border">
            <p>Total payments</p>
            <a href="">25555</a>
          </div>
        </div>
        <div className="chart">
            Hi
        </div>
      </div>
    </div>
  );
}
// for bar chart refer video 22