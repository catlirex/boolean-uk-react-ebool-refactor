import { useEffect, useState } from "react";

export default function useFetch(APIlink, dataPath) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch(APIlink)
      .then((resp) => resp.json())
      .then((allData) => setDataList(dataPath ? allData[dataPath] : allData));
  }, [setDataList, APIlink, dataPath]);

  return [dataList, setDataList];
}
