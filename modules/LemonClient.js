import lemon from 'lemon.markets.js'

export default new lemon.Client({
    mode: process.env.TRADING_MODE === 'live' ? 'live' : 'paper',
    tradingKey: process.env.LEMON_API_KEY || '',
})