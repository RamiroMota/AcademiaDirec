import React from 'react';

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">   

      <div className="flex flex-col items-center">   

        <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404 error" className="mb-8" />
        <h1 className="text-3xl font-bold mb-2">
          La sección no existe
        </h1>
        <p className="text-white">
          Lamentamos eso, puedes ir a nuestra sección principal.   

        </p>
        <a href="/" className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Ir
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="decorative image" />
      </div>
    </div>
  );
}

export default Error404;