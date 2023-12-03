const buildUrl = (url: string, params: Array<string>) => {
    const pairs: Array<string> = [];
    let result: string = url;

    if (params) {
        for (const key in params) {
            pairs.push(`${key}=${encodeURIComponent(params[key])}`);
        }
        result += `?${pairs.join("&")}`;
    }

    return result;
}; 

const redirect = (url: string, params: Array<string>) => {
    document.location.href = buildUrl(url, params);
}

export { 
    buildUrl, 
    redirect 
};