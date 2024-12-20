export default function Page(){
    return(
        <section className="space-y-4">
            <p className="text-3xl">Book Event</p>
            <div>
                <label htmlFor="">Event:</label>
                <select name="" id="">
                    <option value="">Birthday</option>
                    <option value="">Anniversary</option>
                    <option value="">Kitty</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Event Details:</label>
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <label htmlFor="">Total Guests:</label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">Date</label>
                <input type="date" />
            </div>
            <div>
                <label htmlFor="">Total cost</label>
                <p>Rs 5000</p>
            </div>
        </section>
    )
}