export default function Page(){
    return(
        <section>
            <p className="text-4xl">
                Contact
            </p>
            <p>This is contact page</p>
    <div>
      <div className="form">
        <form action="">
            <div className="m-2">
                <label for="">Your Name: </label>
                <input type="text" />
            </div>
            <div className="m-2">
                <label for="">Email: </label>
                <input type="email" />
            </div>
            <div className="m-2">
                <label for="">Mobile: </label>
                <input type="number" />
            </div>
            <div className="m-2">
                <label for="">Captcha - 8888: </label>
                <input type="text" />
            </div>
            <div className="m-2">
                <label for="">Your Message: </label>
                <textarea name="" id=""></textarea>
            </div>
            <div>
              <button>submit</button>
            </div>
        </form>
      </div>
    </div>

        </section>
    )
}