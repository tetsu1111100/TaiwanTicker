
import './App.css'
import { useEffect} from 'react';
import { AiOutlineStock } from "react-icons/ai";
import { fetchCompanyInfo } from './services/fetchCompanyInfo';

function App() { 

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCompanyInfo();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <p className=" text-red-500 ">Hello world <AiOutlineStock /></p>
    </>
  )
}

export default App
