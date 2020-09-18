import axios from "axios";
import { useEffect, useState } from "react";

const SEARCH_URL = "https://api.flaticon.com/v2/search/icons/priority";
const TOKEN_URL = "/token";
const TOKEN_EXPIRE_OFFSET = 60; // Seconds

let token = "";
let tokenExpire = 0;

export default function useFlaticonSearch(query, limit, page) {
    const [icons, setIcons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const now = Date.now() / 1000; // timestamp in seconds

        let cancel;
        async function fetchData() {
            setLoading(true);
            setError(false);

            if (now + TOKEN_EXPIRE_OFFSET > tokenExpire) {
                try {
                    const res = await axios.get(TOKEN_URL, {
                        headers: {
                            Accept: "application/json",
                        },
                    });
                    const data = res.data;
                    token = data.token;
                    tokenExpire = data.expires;
                } catch (e) {
                    console.log(e);
                }
            }

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
                        Authorization: "Bearer " + token,
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
        } else {
            setIcons(null);
        }
    }, [query, limit, page]);

    return { loading, icons, error };
}
