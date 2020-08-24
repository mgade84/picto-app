import axios from "axios";
import { useEffect, useState } from "react";

const SEARCH_URL = "https://api.flaticon.com/v2/search/icons/priority";

const API_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIyMzQ3ODYyMSIsInVpcCI6IjE3Mi4xOS4wLjkiLCJleHAiOjE1OTgyOTk4OTIsInVuYW1lIjoidXNlcjIzNDc4NjIxIiwicnBtIjoyNDAwLCJwcmVtaXVtIjpmYWxzZSwiYXBpa2V5IjoiMGI2Yzg4M2NiMjRlY2I4N2VmMmE4YzVmNTYwMjU2MTZmYmRkOWMxZCIsInNjb3BlIjpbIm93bmVkLnJlYWQiXSwiZGxpbWl0Ijo0MDAsImFwaWRsaW1pdCI6dHJ1ZX0.qH8N6q-OpuF-wZWQDpce8wOV7d25QzcGVMYm1Njg31E";

export default function useFlaticonSearch(query, limit, page) {
    const [icons, setIcons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancel;
        async function fetchData() {
            setLoading(true);
            setError(false);
            try {
                const res = await axios.get(SEARCH_URL, {
                    params: {
                        q: query,
                        limit,
                        page,
                    },
                    cancelToken: new axios.CancelToken(c => (cancel = c)),
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + API_TOKEN,
                    },
                });
                const data = res.data.data;
                setIcons([...data]);
                setLoading(false);
            } catch (e) {
                if (axios.isCancel(e)) return;
                setError({
                    res: e.response,
                    message: e.message,
                });
            }
        }
        if (query) {
            fetchData();
            return () => cancel();
        }
    }, [query, limit, page]);

    return { loading, icons, error };
}
