import RoomTypeImages from "@/components/RoomTypeImages";
async function getData(uuid) {
  const res = await fetch(`http://localhost:8000/api/roomtypes/` + uuid, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
export default async function Page({ params }) {

  const uuid = params?.slug;
  if (!uuid) {
    return <p>Error: Invalid room type.</p>;
  }
  const roomDetail = await getData(uuid);
  return (
    <div className="m-4">
      <img src={roomDetail.room_type_imgs} alt="No image" />
      <RoomTypeImages images={roomDetail.room_type_imgs} />
      <form action="" className="mx-auto">
        <p className="text-2xl">Booking Form</p>
        <p>
          Room Type:{" "}
          <span className="italic">
            {roomDetail.title || "No Data Availiable"}{" "}
          </span>{" "}
        </p>
        <p>
          Charges: <span className="italic">1400/day</span>{" "}
        </p>
        <div className="m-4 space-x-4">
          <label for="input1" className="font-bold">
            Total Guests:
          </label>
          <input type="number" />
        </div>
        <div className="m-4 space-x-4">
          <label for="input1" className="font-bold">
            Check In:
          </label>
          <input type="date" />
        </div>
        <div className="m-4 space-x-4">
          <label for="input1" className="font-bold">
            Check Out:
          </label>
          <input type="date" />
        </div>
        <p>
          <p className="3xl">Amenities</p>
          <p>
            {roomDetail.detail.wifi && <span> Wifi:Availiable</span>}
            {!roomDetail.detail.wifi && <span> Wifi: Unavailiable</span>}
          </p>
        </p>
        <a
          href="/checkout"
          className="bg-red-300 m-8 px-5 py-2 rounded-full hover:bg-red-500"
        >
          Book!
        </a>
      </form>
    </div>
  );
}
