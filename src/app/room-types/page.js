import RoomTypes from "@/components/RoomTypes/index";
import Link from "next/link";

async function getData(page_no=1) {
  const res = await fetch(
    `http://localhost:8000/api/roomtypes/?page=${page_no}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    console.error("Failed to fetch data", res.statusText);
    throw new Error("API request failed");
  }

  const data = await res.json().catch(() => {
    throw new Error("Invalid JSON response");
  });

  return data;
}

export default async function RoomType({ searchParams }) {
  const page = searchParams?.page || 1; // Default to page 1 if undefined
  const roomtypes = await getData(page);

  // Debugging: Log the fetched data
  console.log("Roomtypes data:", roomtypes);

  // Pagination links
  const links = [];
  if (roomtypes.previous) {
    links.push(
      <Link href={`/room-types/?page=${parseInt(page) - parseInt(1)}`}>
        Previous
      </Link>
    );
  }
  for (let i = 1; i <= Math.ceil(roomtypes.count / 2); i++) {
    if (page == i) {
      links.push(
        <Link href={`/room-types/?page=${i}`} className="bg-red-400" key={i}>
          {i}
        </Link>
      );
    } else {
      links.push(
        <Link href={`/room-types/?page=${i}`} key={i}>
          {i}
        </Link>
      );
    }
    if (roomtypes.next) {
      links.push(
        <Link href={`/room-types/?page=${parseInt(page) + parseInt(1)}`}>
          Next
        </Link>
      );
    }
  }

  return (
    <>
      <p className="text-3xl">RoomTypes - {roomtypes.count}</p>

      {roomtypes &&
      Array.isArray(roomtypes.results) &&
      roomtypes.results.length > 0 ? (
        roomtypes.results.map((item, index) => (
          <RoomTypes item={item} key={index} />
        ))
      ) : (
        <p>No room types found.</p>
      )}
      <div className="py-6 bg-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center justify-center space-x-4">
            {links.map((item, index) => (
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center text-sm font-bold text-gray-400 transition-all duration-200 bg-transparent rounded-full w-7 h-7 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                {item}{" "}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
