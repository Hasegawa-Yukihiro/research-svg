import { ChangeEvent, useCallback, useState } from "react";

const useApp = () => {
  const [svg, setSvg] = useState("");
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    if (!file) return;
    const fileReader = new FileReader();
    console.log(fileReader);
    fileReader.readAsBinaryString(file);
    fileReader.onload = event => {
      const result = event.target?.result;
      console.log("result", result);
      if (typeof result !== "string") return;
      const buffer = Buffer.from(result);
      console.log("buffer", buffer);
      console.log("string", buffer.toString());
      setSvg(buffer.toString());
    };
  }, []);

  return {
    handleChange,
    svg
  };
};

export default useApp;
