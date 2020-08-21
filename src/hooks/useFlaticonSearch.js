import axios from "axios";
import { useEffect, useState } from "react";

const SEARCH_URL = "https://api.flaticon.com/v2/search/icons/priority";

const API_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIyMzQ3ODYyMSIsInVpcCI6IjE3Mi4xOS4wLjEyIiwiZXhwIjoxNTk4MDI2NzM0LCJ1bmFtZSI6InVzZXIyMzQ3ODYyMSIsInJwbSI6MjQwMCwicHJlbWl1bSI6ZmFsc2UsImFwaWtleSI6IjBiNmM4ODNjYjI0ZWNiODdlZjJhOGM1ZjU2MDI1NjE2ZmJkZDljMWQiLCJzY29wZSI6WyJvd25lZC5yZWFkIl0sImRsaW1pdCI6NDAwLCJhcGlkbGltaXQiOnRydWV9.-Yy_fPgve5RtTcK3fu5qYmbrGKpKmVh-fqiAQM_aTaI";

export default function useFlaticonSearch(query, limit, page) {
    const [icons, setIcons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
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
                setIcons(prevIcons => {
                    return [...prevIcons, ...data];
                });
                setHasMore(data.length > 0);
                setLoading(false);
            } catch (e) {
                if (axios.isCancel(e)) return;
                setError({
                    res: e.response,
                    message: e.message,
                });
            }
            return () => cancel();
        }
        if (query) fetchData();
    }, [query, limit, page]);

    return { loading, icons, hasMore, error };
}
