const { createBot, createProvider, createFlow, addKeyword  } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')
const fetchIa = require('./lib/FetchIa')

const flowPrincipal = addKeyword("hola")
    .addAnswer(
        'Hola, bienvenido a mi bot!',
        { capture: true },
        async (ctx, { provider }) => {
            const me = "@s.whatsapp.net"
            if (ctx.message && ctx.message.extendedTextMessage && ctx.message.extendedTextMessage.text) {
                const text = ctx.message.extendedTextMessage.text;
                const ia = await fetchIa(text)
                await provider.sendText(ctx.from + me, ia)
            } else {
                console.log('No se pudo acceder al texto del mensaje.');
            }
        }
    )
    .addAnswer("wow que interesante, preguntame otra cosa",
        { capture: true },
        async (ctx, { provider, fallBack }) => {
            const me = "@s.whatsapp.net"
            const text = ctx.message.extendedTextMessage.text;
            text = text.toLowerCase()
            if (text == "no" || text == "no, gracias" || text == "no gracias") {
                await provider.sendText(ctx.from + me, "chau!")
            }
            else {
                const ia = await fetchIa(text)
                await provider.sendText(ctx.from + me, ia)
                return fallBack()
            }
        })
const main = async () => {
    const adapterDB = new JsonFileAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });
    QRPortalWeb();
};
main();