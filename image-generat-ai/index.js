const callApiFiveTimes = async () => {
  for (let i = 0; i < 5; i++) {
    // 👉 Random 6-digit seed generate
    const seed = Math.floor(100000 + Math.random() * 900000); // 100000 to 999999

    const prompt = "nature forest"; // তোমার prompt
    const width = 512;
    const height = 512;
    const model = "flux"; // optional

    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

    console.log("Calling:", url);

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      console.log("Image URL:", imageUrl);

      // Optional: যদি তুমি ইমেজ preview করতে চাও:
      const img = document.createElement("img");
      img.src = imageUrl;
      img.width = 200;
      document.body.appendChild(img);
    } catch (error) {
      console.error(`Call ${i + 1} failed:`, error);
    }
  }
};
