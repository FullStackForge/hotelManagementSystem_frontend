export default function Page(){
    return(
        <section>
            <p className="text-4xl">
                Career
            </p>
            <p>Work With us</p>
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
            <div className="m-2">
                <label for="">Updated cv: </label>
                <input type="file" />
            </div>
            <div className="space-x-8"> 
              <button>submit</button>
              <button>Reset</button>
            </div>
        </form>
      </div>
    </div>

        </section>
    )
}