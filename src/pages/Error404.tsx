
const Error404 = () => {
  /*
    The Error404 component displays a 404 error page.
    It informs the user that the requested page was not found.
  */

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
    </div>
  );

};

export default Error404;