export default function Page() {
    return (
      <div>
        <p className="text-2xl"> I am signIn Page</p>
        <div className="form">
          <form action="">
              <div className="m-2">
                  <label htmlFor="">Password: </label>
                  <input type="password" />
              </div>
              <div className="m-2">
                  <label htmlFor="">Mobile: </label>
                  <input type="number" />
              </div>  
              <div>
                <button>Submit</button>
              </div>
              <a href="/user/signup" className="m-4">SignUp</a>
              <a href="/user/forget-password" className="m-4">Forget Password?</a>
          </form>
        </div>
      </div>
  
    );
  }
  