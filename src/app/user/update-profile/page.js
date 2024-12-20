'use client'
import DashboardSidebar from "@/components/User/DashboardSidebar"
export default function Page() {
    return (
        <div className="flex space-x-12">
        <div className="left">
          <DashboardSidebar />
        </div>
      <div>
        <p className="text-2xl"> Update Profile</p>
        <div className="form">
          <form action="">
              <div className="m-2">
                  <img src="/hotel-exterior.jpg" width={200} alt="" />
              </div>  
              <div className="m-2">
                  <label htmlFor="">First Name: </label>
                  <input type="text" />
              </div>  
              <div className="m-2">
                  <label htmlFor="">Last Name: </label>
                  <input type="text" />
              </div>
              <div className="m-2">
                  <label htmlFor="">Username: </label>
                  <input type="text" />
              </div>  
              <div className="m-2">
                  <label htmlFor="">Mobile: </label>
                  <input type="number" />
              </div>  
              <div className="m-2">
                  <label htmlFor="">Email: </label>
                  <input type="email" />
              </div>  
              <div>
                <button>Submit</button>
              </div>
          </form>
          <p>To change password, <a href="/user/update-password">Click Here</a></p>
        </div>
      </div>
      </div>
  
    );
  }
  