const Replicate = require('replicate');
const dotenv = require('dotenv');
dotenv.config();
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

async function fetchIa(prompt) {
    try {
        const output = await replicate.run("meta/meta-llama-3-70b-instruct", {
            input: {
                top_p: 0.9,
                prompt: prompt,
                min_tokens: 0,
                temperature: 0.6,
                prompt_template: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
                presence_penalty: 1.15,
                system_prompt: "Eres un programador experimentado, has trabajado en grandes proyectos, responde como un verdadero experto"
            }
        });
        return output.join("");
    } catch (error) {
        console.log(error);
        return error;
    }
}


module.exports = fetchIa;