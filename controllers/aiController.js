const axios = require('axios');

const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

const generateMessageSuggestions = async (req, res) => {
  const { campaignObjective } = req.body;

  if (!campaignObjective) {
    return res.status(400).json({ error: 'Campaign objective is required.' });
  }

  try {
    const prompt = `Generate 3 short campaign messages for: ${campaignObjective}`;

    const response = await axios.post(
      'https://api-inference.huggingface.co/models/google/flan-t5-base',
      {
        inputs: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const output = response.data[0]?.generated_text || '';
    
    // Optional: Split the output into 3 messages if formatted with newlines or numbering
    const suggestions = output
      .split('\n')
      .filter((line) => line.trim() !== '')
      .slice(0, 3);

    res.json({ suggestions });
  } catch (error) {
  console.error('Error generating message suggestions:', error.response?.data || error.message);
  res.status(500).json({ error: 'Failed to generate message suggestions.' });
 }
};

module.exports = { generateMessageSuggestions };
