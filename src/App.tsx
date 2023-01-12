import { useState } from "react";
import "./assets/css/tailwind.css";
import MenuTab from "./components/ListTab/MenuTab";
import TabItem from "./components/ListTab/TabItem";
import TabListImage from "./components/ListTab/TabListImage";

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onSwichPage = (e: boolean) => {
    setIsActive(e);
  };
  return (
    <div className=" m-w-[388px] lg:w-[100%] mx-auto">
      <div className="p-[2px] bg-white rounded-[8px]">
        {isActive ? <TabListImage /> : <MenuTab />}
        <div className="mt-[30px] flex justify-center items-center gap-4 mb-[30px]">
          <button
            onClick={() => onSwichPage(false)}
            className={`${
              isActive ? "bg-[#333333] opacity-[0.25]" : "bg-[#000000]"
            } h-[15px] w-[15px] rounded-[50%]`}
          ></button>
          <button
            onClick={() => onSwichPage(true)}
            className={`${
              isActive ? "bg-[#000000]" : "bg-[#333333] opacity-[0.25]"
            } h-[15px] w-[15px] rounded-[50%]`}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
