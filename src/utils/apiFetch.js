const apiFetch = async (
  url = "",
  method = "GET",
  token = null,
  data = null,
) => {
  try {
    const options = { method, headers: {} };

    if (data instanceof FormData) {
      options.body = data;
    } else if (data) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(data);
    }

    if (token) options.headers.Authorization = `Bearer ${token}`;

    const response = await fetch(`https://dummyjson.com/${url}`, options);
    // const response = await fetch(`https://dummyjson.com/${url}`, options);

    let json = null;
    try {
      json = await response.json();
    } catch (_) {}

    return {
      ok: response.ok,
      status: response.status,
      data: json,
    };
  } catch (error) {
    return {
      ok: false,
      status: null,
      data: null,
      error: error,
    };
  }
};

export default apiFetch;
