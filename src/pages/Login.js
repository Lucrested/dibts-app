import logo from '../images/logodibts.png';

export default function Login() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="sm:w-full sm:max-w-sm">
      <a href="/home">
        <img
          className="mx-auto h-20 w-auto"
          src={logo}
          alt="DIBTS"
        />
      </a>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-customBrown">
          Sign in to your account
        </h2>

        <form className="mt-10 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-customBrown shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customLBrown sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-customBrown shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customLBrown sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-customBrown px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-customLBrown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customLBrown"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
