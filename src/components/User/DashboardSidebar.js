'use client'
import { usePathname } from "next/navigation";
export default function DashboardSidebar() {
    const pathname = usePathname()
  return (
    <div className="flex flex-col">
      <a href="/user/dashboard" className={`${pathname == '/user/dashboard' ? 'bg-red-500': ''}`}>
        Dashboard
      </a>
      <a href="/user/booking-history" className={`${pathname == '/user/booking-history' ? 'bg-red-500': ''}`}>
        Booking History
      </a>
      <a href="/user/payment-logs" className={`${pathname == '/user/payment-logs' ? 'bg-red-500': ''}`}>Payment logs</a>
      <a href="/user/update-profile" className={`${pathname == '/user/update-profile' ? 'bg-red-500': ''}`}>Update profile</a>
      <a href="/user/event-booking-history" className={`${pathname == '/user/event-booking-history' ? 'bg-red-500': ''}`}>Event booking history</a>
      <a href="/user/logout" className={`${pathname == '/user/logout' ? 'bg-red-500': ''}`}>LogOut</a>
    </div>
  );
}
