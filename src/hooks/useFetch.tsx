import { useState, useEffect } from "preact/hooks";
export function useFetch<T = unknown>(cep: string | undefined) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isFetch, setIsFetch] = useState<boolean>(false);

  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      method: "GET",
      mode: "cors",
      cache: "default",
    })
      .then((response) => {
        response.json().then((data) => {
          setData(data);
          setIsFetch(true);
        });
      })
  }, [cep]);

  return { data, isFetch };
}
