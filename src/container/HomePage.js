import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">¡Bienvenido a mi web sencilla!</h1>
      <p className="mt-4 text-lg text-gray-600">Aquí puedes disfrutar de contenido hermoso.</p>
      <button className="mt-6 px-4 py-2 font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700">Iniciar</button>
    </div>
  );
}

export default HomePage;