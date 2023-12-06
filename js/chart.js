new TradingView.widget(
    {
        "width": 780,
        "height": 410,
        "symbol": "BINANCE:BTCUSDT", // 바이낸스 비트코인 심볼
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "binanceBitcoinChart1"
    }
);

new TradingView.widget(
    {
        "width": 780,
        "height": 410,
        "symbol": "BINANCE:BTCUSDT", // 바이낸스 비트코인 심볼
        "interval": "5",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "binanceBitcoinChart2"
    }
);

new TradingView.widget(
    {
        "width": 780,
        "height": 410,
        "symbol": "BINANCE:BTCUSDT", // 바이낸스 비트코인 심볼
        "interval": "30",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "binanceBitcoinChart3"
    }
);

new TradingView.widget(
    {
        "width": 780,
        "height": 410,
        "symbol": "BINANCE:BTCUSDT", // 바이낸스 비트코인 심볼
        "interval": "60",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "binanceBitcoinChart4"
    }
);

function toggleChart(count) {
    for (let i = 1; i <= 4; i++) {
        const chart = document.getElementById(`chart${i}`);
        if (i <= count) {
            chart.style.display = "block";
        } else {
            chart.style.display = "none";
        }
    }
}

// 초기에는 차트1만 표시
showCharts(1);

/*new TradingView.widget(
    {
        "width": 780,
        "height": 410,
        "symbol": "COINBASE:BTCUSD", // 코인베이스 비트코인 심볼
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "coinbaseBitcoinChart"
    }
);*/

/*new TradingView.widget(
    {
        "width": 780,
        "height": 410,
        "symbol": "BINANCE:ETHUSDT", // 바이낸스 이더리움 심볼
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "binanceEthereumChart"
    }
);*/

/*new TradingView.widget(
    {
        "width": 780,
        "height": 410,
        "symbol": "COINBASE:ETHUSD", // 코인베이스 이더리움 심볼
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "coinbaseEthereumChart"
    }
);*/
