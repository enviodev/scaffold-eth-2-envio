import { useState } from "react";
import EnvioData from "../envio-data/EnvioData";
import { ContractData } from "./ContractData";

type SelectedContent = "envio-data" | "data-visualizer";
const ContractDataSwitcher: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<SelectedContent>("envio-data");

  const commonClassname = "p4 w-full ";
  const selectedClassName = "bg-primary text-primary-content";
  const unselectedClassName =
    "bg-primary-content text-primary hover:bg-secondary hover:text-primary-content hover:border border-primary ease-in duration-100";

  return (
    <div className="flex flex-col items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
      <div className="text-lg rounded-full flex w-full max-w-sm">
        <button
          onClick={() => setSelectedContent("envio-data")}
          className={`rounded-l-full ${commonClassname}  ${selectedContent === "envio-data" ? selectedClassName : unselectedClassName
            }`}
        >
          Envio Indexed Data
        </button>
        <button
          onClick={() => setSelectedContent("data-visualizer")}
          className={` rounded-r-full ${commonClassname}  ${selectedContent === "data-visualizer" ? selectedClassName : unselectedClassName
            }`}
        >
          Data Visualizer
        </button>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center px-4">
        {selectedContent === "envio-data" ? <EnvioData /> : <ContractData />}
      </div>
    </div>
  );
};

export default ContractDataSwitcher;
