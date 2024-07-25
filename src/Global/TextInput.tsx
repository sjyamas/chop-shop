import { createUseStyles } from "react-jss";

interface TextInput {
  text: string;
  setText: Function;
  width?: string;
  height?: string;
}

export default function TextInput({
  text,
  setText,
  width = "15rem",
  height = "2rem",
}: TextInput) {
  const useStyles = createUseStyles({
    styledInput: {
      width: width /* Set the desired width */,
      padding: 2 /* Adjust padding as needed */,
      border: "1 solid #ccc" /* Add a border */,
      borderRadius: 5 /* Add rounded corners */,
      fontSize: 26 /* Set the font size */,
      color: "#111" /* Set the font color */,
      "&:focus": {
        outline: "none" /* Remove the default focus outline */,
        borderColor: "#007bff" /* Change border color when focused */,
        boxShadow: "0 0 5px #007bff" /* Add a box shadow when focused */,
      },
    },
    container: {
      height: height,
      width: width,
    },
  });

  const styles = useStyles();
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.styledInput}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
}
