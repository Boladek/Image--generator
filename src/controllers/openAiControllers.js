const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
    const {prompt, size, number} = req.body;
    const imageSize = size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";
  try {
    const response = await openai.createImage({
      prompt,
      n: number || 1,
      size: imageSize,
    });
    const image_urls = response.data.data.map(item => item.url);
    res.status(200).json({
      image_urls,
      message: "Image generated successfully",
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      message: "Error generating image",
    });
  }
};

module.exports = { generateImage };
