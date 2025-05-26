import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Hello Vite + React!</h1>

        <div className="flex justify-center items-center gap-8 mt-4">
          <img src={viteLogo} alt="Vite Logo" width="200" />
          <img src={reactLogo} alt="React Logo" width="200" />
        </div>
      </div>
      <p className=" flex justify-center   items-center gap-6 mt-2 read-the-docs text-red-400">
        Click on the Vite and React logos to learn more!
      </p>
    </>
  );
}

export default App;
