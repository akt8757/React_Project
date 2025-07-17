function extractMetaFromUrl(url) {
  const urlObj = new URL(url);
  const prompt = decodeURIComponent(urlObj.pathname.split("/prompt/")[1]);
  const params = urlObj.searchParams;

  return {
    prompt: prompt,
    width: params.get("width"),
    height: params.get("height"),
    seed: params.get("seed"),
    model: params.get("model"),
    url: url,
  };
}
