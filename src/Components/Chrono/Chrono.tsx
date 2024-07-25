import { useEffect, useState } from "react";
import TextInput from "Global/TextInput";
import { createUseStyles } from "react-jss";
import CustomButton from "Global/CustomButton";

export default function Chrono() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const style = useStyle();
  useEffect(() => {
    if (localStorage.getItem("chrono")) {
      setList(localStorage.getItem("chrono"));
    }
  }, []);
  return (
    <div className={style.page}>
      <TextInput text={search} setText={setSearch} />
      <CustomButton
        onClick={() => {
          setList([...list, search]);
        }}
      >
        Submit
      </CustomButton>
      {list.map((i) => {
        <div>
          <p>{JSON.stringify(i)}</p>
        </div>;
      })}
    </div>
  );
}

const useStyle = createUseStyles({
  page: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
  },
});
