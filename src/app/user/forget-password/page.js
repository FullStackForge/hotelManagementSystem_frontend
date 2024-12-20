export default function Page() {
    return (
      <div>
        <p className="text-2xl"> I am signIn Page</p>
        <div className="form">
          <form action="">
              <div className="m-2">
                  <label htmlFor="">Email: </label>
                  <input type="email" />
              </div>  
              <div>
                <button>Submit</button>
              </div>
              <a href="/user/signup" className="m-4">SignUp</a>
              <a href="/user/signin" className="m-4">SignIn</a>
          </form>
        </div>
      </div>
  
    );
  }
  