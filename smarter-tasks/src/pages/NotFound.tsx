export default function NotFound() {
  return (
    <div className=" flex items-center pt-10">
      <div className="w-full text-center">
        <h1 className="text-xl font-semibold w-full text-center">
          404 Not Found
        </h1>
        <p className={"block text-center"}>Oops! Something went wrong.</p>
        <button
          id={"backToHomeButton"}
          className={"bg-green-500 rounded-md p-2 text-white mt-4"}
        >
          <a href="/">Go back to home</a>
        </button>
      </div>
    </div>
  );
}
