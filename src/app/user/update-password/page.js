'use client'
import DashboardSidebar from "@/components/User/DashboardSidebar"
export default function Page() {
    return (
        <div className="flex space-x-12">
        <div className="left">
          <DashboardSidebar />
        </div>
      <div>
        <p className="text-2xl"> Update Password</p>
        <div className="form">
          <form action="">
              <div className="m-2">
                  <label htmlFor="">New PassWord: </label>
                  <input type="password" />
              </div>
              <div className="m-2">
                  <label htmlFor="">Confirm PassWord: </label>
                  <input type="password" />
              </div>
              <div>
                <button>Submit</button>
              </div>
          </form>
        </div>
      </div>
      </div>
  
    );
  }
  